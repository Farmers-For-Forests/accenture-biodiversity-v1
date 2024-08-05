<?php

require_once "../configration/Connection.php";
require_once("../configration/Validator.php");
require_once("../configration/AccAppAuthentication.php");

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\SMTP;

require '../PHPMailer/src/Exception.php';
require '../PHPMailer/src/PHPMailer.php';
require '../PHPMailer/src/SMTP.php';

class AccAppLoginService
{
        
    /**
     * user_registration
     *
     * @param  mixed $username
     * @param  mixed $email
     * @param  mixed $password
     * @return void
     */
    public static function user_registration(string $username, string $email, string $password)
    {
        //Checking exiting user
        $maxId = Connection::get_maxId("acc_app_login");
        $exiting_user = Connection::fetch_one("select email from  acc_app_login where email=?", [$email]);
        if ($exiting_user) {
            _dumps([
                "msgType" => ["warning", 'Account Validation'],
                "msgText" => "This email is already registerd"
            ]);
            return;
        }

        $hash = password_hash($password, PASSWORD_DEFAULT);
        $email_verification_code = sha1(rand());
        $userid = "ACC" . str_pad(strval($maxId), 5, "0", STR_PAD_LEFT);
        $param = [
            'email' => trim($email),
            'username' => trim($username),
            'password' => trim($hash),
            'userid' => $userid,
            'email_verified' => "N",
            "email_verification_code" => $email_verification_code

        ];
        $add_user =  Connection::insert('acc_app_login', $param);

        $userid = urlEncryption($userid);

        $link = GPATH . "controller/accEmailVerification.php?active=" . $email_verification_code . "&ecode=" . $userid;
        $email_text = "Please check on xxxx" . substr($email, 3);
        if (SEQURE && $add_user) {
            _dumps([
                "msgText" => $email_text
            ]);
            self::email_send('activation', $email, $link);
        }
    }
    
    /**
     * google_registration
     *
     * @param  mixed $username
     * @param  mixed $email
     * @return void
     */
    public static function google_registration(string $username, string $email)
    {
        //Checking exiting user
        $maxId = Connection::get_maxId("acc_app_login");
        $exiting_user = Connection::fetch_one("select email from  acc_app_login where email=?", [$email]);
        if ($exiting_user) {
            _dumps([
                "msgType" => ["warning", 'Account Validation'],
                "msgText" => "This email is already registerd"
            ]);
            return;
        } else {
            $userid = "ACC" . str_pad(strval($maxId), 5, "0", STR_PAD_LEFT);
            $param = [
                'email' => trim($email),
                'username' => trim($username),
                'password' => "",
                'userid' => $userid,
                'email_verified' => "Y",
                "email_verification_code" => ""

            ];
            $add_user =  Connection::insert('acc_app_login', $param);


            if (SEQURE && $add_user) {
                _dumps([
                    "msgText" => "User Registration Completed"
                ]);
            }
        }
    }

    
       
    /**
     * email_verification
     *
     * @param  mixed $email_verification_code
     * @param  mixed $userid
     * @return void
     */
    public static function email_verification(string $email_verification_code, string $userid)
    {
        date_default_timezone_set('Asia/Kolkata');
        $expire_time = 5 * 60;

        $data['email_verification_code'] = $email_verification_code;
        $data['userid'] = urlDecryption($userid);
        $data['email_verified'] = "Y";

        $getCurentRegis = Connection::fetch_one(
            "select 
            email_verified,email_verification_code,
            insert_ds  from acc_app_login 
            where 
            email_verification_code=:email_verification_code and 
            userid=:userid and 
            email_verified=:email_verified",
            ['email_verification_code' => $email_verification_code, 'userid' => urlDecryption($userid), "email_verified" => 'N']
        );
        if (!$getCurentRegis) {
            return false;
        }
        $start = strtotime($getCurentRegis['insert_ds']);
        $end = strtotime(date('Y-m-d H:i:s'));
        $second = ($end - $start) / 60 * 60;
        //Expire time checked
        if ($second > $expire_time) {
            return false;
        } else {
            $update_sql = "update acc_app_login set email_verified=:email_verified where email_verification_code=:email_verification_code and userid=:userid ";
            $result = Connection::update($update_sql, $data);
            if ($result) {
                return true;
            }
        }
       
    }
    
    /**
     * user_login
     *
     * @param  mixed $email
     * @param  mixed $password
     * @return void
     */
    public static function user_login(string $email, string $password)
    {
        $param = [
            'email' => trim($email),
        ];
        $sql = "select * from acc_app_login where email =:email";
        $user_list = Connection::fetch_one($sql, $param);
        if (!$user_list) {
            exit(_dumps(["msgText" => "This email is not registered"]));
        }
        if ($user_list['active'] == 'N') {
            _dumps(["msgText" => "Your account is not active"]);
            return;
        }
        if (password_verify($password, $user_list['password'])) {
            // print_r(json_encode($user_list));
            $username = $user_list['username'];
            $userid = $user_list['userid'];
            AccAppAuthentication::jwt_token(
                array(
                    "userid" =>  $userid,
                    "username" => $username,

                )
            );
        } else {
            http_response_code(401);
            die(_dumps([
                "msg" => "Unauthorized login"
            ]));
        }
    }

    
    /**
     * google_login
     *
     * @param  mixed $email
     * @return void
     */
    public static function google_login(string $email)
    {
        $param = ['email' => trim($email)];
        $sql = "select * from acc_app_login where email =:email";
        $user_list = Connection::fetch_one($sql, $param);
        if (!$user_list) {
            exit(_dumps(["msgText" => "This email is not registered"]));
        } else if ($user_list['active'] == 'N') {
            _dumps(["msgText" => "Your account is not active"]);
            return;
        } else if ($user_list['username']) {
            $username = $user_list['username'];
            $userid = $user_list['userid'];
            AccAppAuthentication::jwt_token(
                array(
                    "userid" =>  $userid,
                    "username" => $username,

                )
            );
        } else {
            http_response_code(401);
            die(_dumps([
                "msg" => "Unauthorized login"
            ]));
        }
    }

        
    /**
     * reset_password
     *
     * @param  mixed $email
     * @return void
     */
    public static function reset_password(string $email)
    {
        $userdata = Connection::fetch_one("select email,userid from acc_app_login where email=:email and email_verified=:email_verified", ["email" => $email, "email_verified" => "Y"]);
        if (!$userdata) {
            exit(_dumps(["employee_id" => "", "otp" => '', "hash" => '', "email" => "Account is not registerd"]));
        } else {
            $email_send = $userdata['email'];
            $hash = bin2hex(random_bytes(32));
            $otp = Connection::OTP(6);
            $finish = Connection::insert(
                'ad_reset_pass',
                [
                    "employee_id" => $userdata['userid'],
                    "otp" => $otp,
                    "confirm" => 'N',
                    "hash" => $hash
                ]
            );
            if ($finish) {
                $email_text = "Please check on xxxxx" . substr($userdata['email'], 2);
                _dumps(["userid" => $userdata['userid'], "email" =>  $email, "hash" => $hash,'email_text' => $email_text]);
                if (SEQURE) {
                    self::email_send('otp', $email_send, $otp);
                }
            }
        }
    }


    /**
     * Undocumented function
     *
     * @param string $userid
     * @param integer $otp
     * @param string $password
     * @param string $empid
     * @param string $hash
     * @return void
     */
    public static function set_reset_password(string $email, string $userid, int $otp, string $password, string $hash)
    {
        date_default_timezone_set('Asia/Kolkata');
        $expire_time = 5 * 60;
        $reset_data = Connection::fetch_one(
            "select * from " . Connection::$ad_reset_pass . " where employee_id=:userid and otp=:otp and confirm=:flag and hash=:hash",
            ['userid' => $userid, 'otp' => $otp, 'flag' => 'N', 'hash' => $hash]
        );
        if ($hash == $reset_data['hash']) {
            $start =  strtotime($reset_data['reset_ds']);
            $end = strtotime(date('Y-m-d H:i:s'));
            $second = ($end - $start) / 60 * 60;
            if ($second > $expire_time) {
                _dumps([
                    "msgText" => "OTP has been expired"
                ]);
                return;
            } else {
                $update = Connection::update(
                    "update " . Connection::$ad_reset_pass . " set confirm=:confirm,otp=:delotp where employee_id=:userid and otp=:otp",
                    ["confirm" => "Y", "delotp" => "", "otp" => $otp, "userid" => $userid]
                );
                if ($update) {
                    $hash = password_hash($password, PASSWORD_DEFAULT);
                    $data = [
                        "password" => $hash,
                        "email" => $email,
                        "email_verified" => 'Y',
                        "userid"=>$userid

                    ];
                    $update_sql = "update acc_app_login set password=:password where email=:email and userid=:userid and email_verified=:email_verified";
                    $data = Connection::update($update_sql, $data);
                    if ($data) {
                        _dumps([
                            "msgText" => "Password has been changes"
                        ]);
                    } else {
                        _dumps([
                            "msgText" => "Your account is diactivated"
                        ]);
                    }
                }
            }
        } else {
            _dumps([
                "msgText" => "OTP is not valid"
            ]);
        }
    }

    
    /**
     * email_send
     *
     * @param  mixed $purposed
     * @param  mixed $recoveryEmail
     * @param  mixed $data
     * @return void
     */
    private static function email_send(string $purposed, string $recoveryEmail, $data)
    {
        if ($purposed == 'otp') {
            $subject = "Reset Password";
            $msg = "
            <div style='background:#c6c996;width:100%;margin:auto;padding:50px;box-sizing: border-box'>
            <div style='background:white;border-radius:3px;text-align:center;margin:auto;padding:50px;'>
                <div>Here is your One Time Password</div>
                <p><small style='color:#9b9b9b'>to validate your email address</small></p>
                <p style='font-weight:600;font-size:25px;letter-spacing: 3px;'>" . $data . "</p>
                <p style='color:#f56e6e'>Valid for 5 min only</p>
             </div>
            </div>
            ";
        } else if ($purposed == 'activation') {
            $subject = "Account Activation";
            $msg = "
            <body style='background: beige;'>
            <div style='width:100%;margin:auto;padding:50px;box-sizing: border-box; font-family: Verdana, Geneva, Tahoma, sans-serif;'>
                        <div style='background:#FFF;border-radius:3px;margin:auto;padding:50px;border: 1px solid gainsboro'>
                        <div style='text-align: center;'> <img src='https://farmersforforests.org/FFF//images/FARMERS_FOR_FORESTS_LOGO-01.jpg' width='120'></div>
                            <h2>Just one last step...</h2>
                            <p><small style='color:#9b9b9b'>Please click on the button below to confirm that we have your correct email address:</small></p>
                            <div style='text-align: center; margin-top: 40px;margin-bottom: 40px;'><p style='color:#f56e6e'><a href=" . $data . " style='background: #6575ad;text-decoration: none;padding: 10px 30px;color: white;border-radius: 3px;margin-top: 10px;'><small>Verified Account</small></a></p></div>
                            <p><small>This button will only be valid for 5 minute. After that, you will need to sign up again.</small></p>
                            <p><small>As soon as you click the above button, we will bring your account online for you. </small></p>
                            <p><small>If clicking on the button does not work for some reason, you can copy and paste the following link into your browser's address bar:</small></p>
                            <a href=" . $data . "><small>" . $data . "</small></a>
                        </div>
                    </div>
            </body>
            ";
        }
        $mail = new PHPMailer(true);
        try {
            //$mail->isSMTP();  
            //$mail->SMTPDebug = 3;
            $mail->Host       = 'smtp.gmail.com';                       //Set the SMTP server to send through
            $mail->SMTPAuth   = true;                                   //Enable SMTP authentication
            $mail->Username   = 'hello@farmersforforests.org';          //SMTP username
            $mail->Password   = 'pisry3-gyrtih-Zupjon';                 //SMTP password
            $mail->SMTPSecure = 'tsl';            //Enable implicit TLS encryption
            $mail->Port       = 463;             //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`
            $mail->setFrom('hello@farmersforforests.org', 'Farmers For Forests');
            $mail->addAddress($recoveryEmail);     //Add a recipient
            $mail->isHTML(true);
            $mail->Subject = $subject;
            $mail->Body  = $msg;
            if ($mail->send()) {
            } else {
            }
        } catch (Exception $e) {
            echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
        }
    }
}
