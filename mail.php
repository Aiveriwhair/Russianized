<?php
$ip = $_SERVER['REMOTE_ADDR'];
ini_set('display_errors', 1);
error_reporting(E_ALL);
$from = "";
$to = "";
$subject = "new User request";
$query = ClientLocalisation($ip);
if (!$query)
    die();
$message = "Request on index from " . $ip . ", " . $query['country'] . ", " . $query['city'] . '=>device' . $_SERVER["HTTP_USER_AGENT"];
$headers = "From:" . $from;
mail($to, $subject, $message, $headers);


function ClientLocalisation($ip)
{
    $query = @unserialize(file_get_contents('http://ip-api.com/php/' . $ip));
    if ($query && $query['status'] == 'success') {
        return $query;
    }
}
