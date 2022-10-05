<?php
include_once('../includes/config.php');

session_start();

//User authentication start..

if(isset($_POST['submit'])){

   $email = $_POST['email'];
   $pass = $_POST['password'];

   $select = "SELECT * FROM users WHERE email = '$email'";

   $result = mysqli_query($db, $select);

   if(mysqli_num_rows($result) > 0){

      $row = mysqli_fetch_assoc($result);
      $passverify = password_verify($pass, $row['password']);

      if($passverify == 1) {
         $_SESSION['username'] = $row['name']; //Use to display username on desboard
         $_SESSION['userid'] = $row['id'];  //Use to reply comments
         $_SESSION['login_time'] = time(); //Use to destroy session after some time(for ex. 5 min for this project)
         $_SESSION['success'] = true;
         header('location:../index.php');
      }else{
         $error[] = "Please enter correct password!!" ;
      }
     
   }else{

      $_SESSION["success"] = false;
      $error[] = 'incorrect email or password!';
   }
};
//User authentication end..
?>

<!DOCTYPE html>
<html lang="en">
   <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>login form</title>

      <!-- custom css file link  -->
      <link rel="stylesheet" href="css/style.css">
   </head>

   <body>
      <!-- Login form start -->
      <div class="form-container">
         <form action="" method="post">
            <h3>login now</h3>
            <?php
            if(isset($error)){
               foreach($error as $error){
                  echo '<span class="error-msg">'.$error.'</span>';
               };
            };
            ?>
            <input type="email" name="email" required placeholder="enter your email">
            <input type="password" name="password" required placeholder="enter your password">
            <input type="submit" name="submit" value="login now" class="form-btn">
            <p>don't have an account? <a href="register_form.php">register now</a></p>
         </form>
      </div>
      <!-- Login form end -->
   </body>

</html>