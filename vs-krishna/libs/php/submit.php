<?php
//include('database.inc.php');
$msg="";
if(isset($_POST['name']) && isset($_POST['email']) && isset($_POST['subject']) && isset($_POST['phone']) && isset($_POST['comment'])){
	$name=$_POST['name'];
	$email=$_POST['email'];
	$subject=$_POST['subject'];
	$phone=$_POST['phone'];
	$comment=$_POST['comment'];
	
	//mysqli_query($con,"insert into contact_us(name,email,mobile,comment) values('$name','$email','$mobile','$comment')");
	$msg="Thank you for your enquiry.";
	
	$html="<table><tr><td>Name:</td><td>$name</td></tr><tr><td>Email:</td><td>$email</td></tr><tr><td>Subject:</td><td>$subject</td></tr><tr><td>Phone:</td><td>$phone</td></tr><tr><td>Message:</td><td>$comment</td></tr></table>";
	
	include('smtp/PHPMailerAutoload.php');
	$mail=new PHPMailer(true);
	$mail->isSMTP();
	$mail->Host="smtp.gmail.com";
	$mail->Port=587;
	$mail->SMTPSecure="tls";
	$mail->SMTPAuth=true;
	$mail->Username="vskrishna9902@gmail.com";
	$mail->Password="Vihat9902";
	$mail->SetFrom("vskrishna9902@gmail.com");
	$mail->addAddress("vskrishna9902@gmail.com");
	$mail->IsHTML(true);
	$mail->Subject="New Contact Us";
	$mail->Body=$html;
	$mail->SMTPOptions=array('ssl'=>array(
		'verify_peer'=>false,
		'verify_peer_name'=>false,
		'allow_self_signed'=>false
	));
	if($mail->send()){
		echo $msg;
	}else{
		echo "Error occur";
	}
	
}
?>