<?php  

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

if(isset($_POST['name']) && isset($_POST['email'])){
    $name = $_POST['name'];
    $email = $_POST['email'];
    $subject = $_POST['subject'];
    $body = $_POST['body'];

    require_once "../../venders/PHPMailer/PHPMailer.php";
    require_once "../../venders/PHPMailer/SMTP.php";
    require_once "../../venders/PHPMailer/Exception.php";
    
    $mail = new PHPMailer(true);

    //smtp settings
    $mail->isSMTP();
    $mail->Host = "smtp.gmail.com";
    $mail->SMTPAuth = true;
    $mail->Username = "pdkabariya@gmail.com";
    $mail->Password = "9898789892";
    $mail->Port = 465;
    $mail->SMTPSecure = "ssl";

    //email setting
    
    $mail->isHTML(true);
    $mail->setFrom($email, $name);
    $mail->addAddress("pdkabariya@gmail.com");
    $mail->Subject = ("$email ($subject)");
    $mail->Body = $body;

    if($mail->send()){
        $status = "success";
        $response = "Email is sent!";
    } 
    else {
        $status = "failed";
        $response = "Something is Wrong: <br>" . $mail->ErrorInfo;
    }
    exit(json_encode(array("status" => $status, "response" => $response)));
}
    

?>