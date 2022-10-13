<?php

include_once('../includes/config.php');

if(isset($_POST['submit'])){

   $name = $_POST['name'];
   $email = $_POST['email'];
   $pass = $_POST['password'];
   $cpass = $_POST['cpassword'];

   $passEncr = password_hash($_POST['password'], PASSWORD_DEFAULT);   

   $select = " SELECT * FROM users WHERE email = '$email'";

   $result = mysqli_query($db, $select);

   if(mysqli_num_rows($result) > 0){

      $userArray = mysqli_fetch_assoc($result);
      $passVerify = password_verify($pass, $userArray['password']);

      if($passVerify == 1) {
         $error[] = 'user already exist!';
      }else{
         $error[] = 'Please enter correct password!';
      }

   }else{

      if($pass != $cpass){
         $error[] = 'password not matched!';
      }else{
         $insert = "INSERT INTO users(name, email, password) VALUES('$name','$email','$passEncr')";
         mysqli_query($db, $insert);
         header('location:login.php');
      }
   }
}; 
?>

<!DOCTYPE html>
<html lang="en">
   <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>register form</title>

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
      <!-- Registration Form Start -->  
      <div class="form-container" style="margin-top:50px;">

         <form action="" method="post">
            <h3>register now</h3>
            <?php
            if(isset($error)){
               foreach($error as $error){
                  echo '<span class="error-msg">'.$error.'</span>';
               };
            };
            ?>
            <input type="text" name="name" required placeholder="enter your name">
            <input type="email" name="email" required placeholder="enter your email">
            <input type="password" name="password" required placeholder="enter your password">
            <input type="password" name="cpassword" required placeholder="confirm your password">

            <input type="submit" name="submit" value="register now" class="form-btn">
            <p>already have an account? <a href="login.php">login now</a></p>
         </form>

      </div>
      <!-- Registration Form End --> 
      <?php include_once('../includes/footer.php'); ?>
   </body>
</html>