<?php
require_once "../vendor/autoload.php";

use \Firebase\JWT\JWT;

class AccAppAuthentication
{
    
    /**
     * jwt_token
     *
     * @param  mixed $result
     * @return void
     */
    public static function jwt_token($result)
    {
        $staticKey = 'mzpPune895@keylooP1258LopropUtxy';
        $secret_key = sha1($staticKey);
        $issuer_claim = "THE_ISSUER"; // this can be the servername
        $audience_claim = "THE_AUDIENCE";
        $issuedat_claim = time(); // issued at
        $notbefore_claim = $issuedat_claim; //not before in seconds
        $expire_claim = $issuedat_claim + 60 * 480; // expire time in seconds
        $token = array(
            "iss" => $issuer_claim,
            "aud" => $audience_claim,
            "iat" => $issuedat_claim,
            "nbf" => $notbefore_claim,
            "exp" => $expire_claim,
            "data" => $result
        );
        http_response_code(200);
        $jwt = JWT::encode($token, $secret_key);
        echo json_encode(
            array(
                "jwt_token" => $jwt,
                "user_details" => $result
            )
        );
    }
    
    /**
     * auth_header
     *
     * @return void
     */
    private static function auth_header()
    {
        $headers = [];
        foreach ($_SERVER as $key => $value) {
            if (substr($key, 0, 5) <> 'HTTP_') {
                continue;
            }
            $header = str_replace(' ', '-', ucwords(str_replace('_', ' ', strtolower(substr($key, 5)))));
            $headers[$header] = $value;
        }
        return $headers;
    }    
    /**
     * isValidToken
     *
     * @return void
     */
    public static function isValidToken()
    {
        $authHeader = self::auth_header();
        if (!isset($authHeader['Token'])) {
            //_dumps is convert php array to json 
            die(_dumps([
                "msg" => "Time out. Please login again"
            ]));
        }
        $jwts = $authHeader['Token'];
        $staticKey = 'mzpPune895@keylooP1258LopropUtxy';
        $secret_key = sha1($staticKey);
        try {
            if ($jwts) {
                $session_data = JWT::decode($jwts, $secret_key, array('HS256'));
                $usr = (array) $session_data->data;
                if (http_response_code() != 401) {
                    return $usr;
                }
            }
        } catch (Exception $e) {
            http_response_code(504);
            die(_dumps([
                "msg" => "Token is expired. Please login again"
            ]));
        }
    }
}
