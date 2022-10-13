<?php
include_once('../includes/config.php');
include_once('emailController.php');
session_start();

//User authentication start..

if(isset($_POST['forgot_password_submit'])){

   $email = $_POST['forgot_password_email'];

   if(!filter_var($email, FILTER_VALIDATE_EMAIL)) {
      $error[] = "Email address is invalid!!" ;
   }

   //if(count($error) == 0) {

      $select = "SELECT * FROM users WHERE email = '$email'";
      $result = mysqli_query($db, $select);
      $user= mysqli_fetch_assoc($result);
      $token = $user['id'];
      sendPasswordResetLink($email, $token);
      header('location:password_message.php');
      exit(0);
   //}
};
//User authentication end..
?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Forgot Password Page</title>
    <!-- custom css file link  -->
      <link rel="stylesheet" href="../css/loginSystem.css">
      <!-- Bootstrap links -->
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet">

      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js"></script>
</head>
<body>
    <?php 
    include_once('../includes/loginSystemHeader.php');
    ?>
    
    <!-- Login form start -->
    <div class="form-container">
        <form action="" method="post">
        <h3>Recover your password</h3>
        <p style="font-size:16px;">Please enter your email address you used to register on this site and we will assist you in recovering your password.</p>
        <?php
        if(isset($error)){
            foreach($error as $error){
                echo '<span class="error-msg">'.$error.'</span>';
            };
        };
        ?>
        <input type="email" name="forgot_password_email" required placeholder="enter your email">
        <input type="hidden" name="honeypot">
        <input type="submit" name="forgot_password_submit" value="Recover your password" class="form-btn">
        </form>
    </div>
    <!-- Login form end -->
    
</body>
</html>