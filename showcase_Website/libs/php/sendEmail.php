<?php  
//include_path(`F:\xampp\htdocs\payalVimal\showcase_Website\libs\php\`);

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;




if(isset($_POST['Name']) && isset($_POST['Email']) && isset($_POST['Subject']) && isset($_POST['Body'])){
    $name = $_POST['Name'];
    $email = $_POST['Email'];
    $subject = $_POST['Subject'];
    $body = $_POST['Body'];

    require_once "PHPMailer/src/PHPMailer.php";
    require_once "PHPMailer/src/SMTP.php";
    require_once "PHPMailer/src/Exception.php";

    
    $mail = new PHPMailer(true);


    //smtp settings
    $mail->isSMTP();
    $mail->Host = "smtp.gmail.com";
    $mail->SMTPAuth = true;
    $mail->Username = "pdkabariya@gmail.com";
    $mail->Password = "";
    $mail->Port = 465;
    $mail->SMTPSecure = "ssl";
    $mail->SMTPDebug = 3;

    $mail->SMTPOptions = [
        'ssl' => [
            'verify_peer' => false,
            'verify_peer_name' => false,
            'allow_self_signed' => true,
        ]
    ];
    

    //email setting
    
    $mail->isHTML(true);
    $mail->setFrom("pdkabariya@gmail.com");  /* $email, $name  */
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