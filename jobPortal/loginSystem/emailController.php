<?php 
function sendPasswordResetLink($email, $token){

    $html = '<!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8">
            <title>Verify email</title>
        </head>
        <body>
            <div class="container">
                <p>Hello there,Please click on the link below to reset your password.</p>
                <a href="http://localhost/payalVimal/jobPortal/loginSystem/reset_password.php?user_id=' .$token . '">Reset your password</a>
            </div>
        </body>
    </html>';

    require_once('../venders/smtp/class.phpmailer.php');
    require_once('../venders/smtp/PHPMailerAutoload.php');
    require_once('../venders/smtp/class.smtp.php');

    $mail=new PHPMailer(true);
    $mail->isSMTP();
    $mail->Host="smtp.gmail.com";
    $mail->Port=587;
    $mail->SMTPSecure="tls";
    $mail->SMTPAuth=true;
    $mail->Username="payalmoradiya9902@gmail.com";
    $mail->Password="dwaobzgqiprhsqrs";
    $mail->SetFrom("payalmoradiya9902@gmail.com");
    $mail->addAddress("pdkabariya@gmail.com");
    $mail->IsHTML(true);
    $mail->Subject="Password Recovery";
    $mail->Body=$html;
    $mail->SMTPOptions=array('ssl'=>array(
        'verify_peer'=>false,
        'verify_peer_name'=>false,
        'allow_self_signed'=>false
    )); 
   
    if(!$mail->send()) {
        echo $mail->ErrorInfo;
    } else {
        echo "mail send successfully!";
    }
};

?>