<?php 
include('company.php');
include('send-email.php');
//function captcha() {
if(isset($_POST['submit'])) {
    $recaptcha_response = $_POST['g-recaptcha-response'];
    $user_ip = $_SERVER['REMOTE_ADDR'];

    $request = "https://www.google.com/recaptcha/api/siteverify?secret=" . $secretkey . "&response=" . $recaptcha_response . "&remoteip=" . $user_ip;
    $content = file_get_contents($request);
    echo $content;
    $responseKeys = json_decode($content,true);

    if ($responseKeys['success'] === true) {
        enquirysend();
        //echo '<h3>Thanks for your message!</h3>';
    } else {
    echo '<h3>Error</h3>';
    }

}


?>