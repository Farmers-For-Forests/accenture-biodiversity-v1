<?php
include_once "../service/AccAppLoginService.php";
$requestArray = ['registration', 'login', 'reset','setpassword'];

$requset = $_REQUEST['request'];
if (!in_array($requset, $requestArray)) {
    die('Request is not valid');
}
switch ($requset) {
    case "registration":
        $data = json_decode(file_get_contents('php://input'), true);
        if (isset($data['email_verified']) && $data['iss'] == 'https://accounts.google.com') {
            AccAppLoginService::google_registration($data['username'], $data['email']);
        } else {
            AccAppLoginService::user_registration($data['username'], $data['email'], $data['password']);
        }
        break;
    case "login":
        $data = json_decode(file_get_contents('php://input'), true);
        if (isset($data['email_verified']) && $data['iss'] == 'https://accounts.google.com') {
            AccAppLoginService::google_login($data['email'], "");
        } else {
            AccAppLoginService::user_login($data['email'], $data['password']);
        }
        break;
    case "reset":
        $data = json_decode(file_get_contents('php://input'), true);

        AccAppLoginService::reset_password($data['email']);
        break;
    case "setpassword":
        $data = json_decode(file_get_contents('php://input'), true);
        AccAppLoginService::set_reset_password($data['email'],$data['userid'],$data['otp'], $data['password'], $data['hash']);
        break;

    default:
        echo "Your favorite color is neither red, blue, nor green!";
}
