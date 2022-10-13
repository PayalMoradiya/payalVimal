<?php 
$user_id = $_GET['user_id'];

include_once('../includes/config.php');

//User authentication start..

    $sql = "SELECT * FROM users WHERE id=$user_id";
    $result = mysqli_query($db, $sql);
    $user = mysqli_fetch_assoc($result);
    $_SESSION['email'] = $user['email'];

if(isset($_POST['reset_password_submit'])){

   $password = $_POST['password'];
   $confirmPass = $_POST['confirm_password'];
   $email = $_SESSION['email'];

   if($password == $confirmPass){

        $passEncr = password_hash($password, PASSWORD_DEFAULT);   

        $query = "UPDATE users SET password='$passEncr' WHERE id=$user_id AND email='$email'";
        $runQuery = mysqli_query($db, $query);

        var_dump($runQuery);
        if($runQuery === true){
            header('location:../index.php');
            exit();

        }else{
            $error[] = "Password not updated!!" ;
        }
        
    }else{
        $error[] = "Both password not match!!" ;
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
    <title>Reset Password Page</title>
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
        <?php
        if(isset($error)){
            foreach($error as $error){
                echo '<span class="error-msg">'.$error.'</span>';
            };
        };
        ?>
    
        <input type="password" name="password" required placeholder="enter your password">
        <input type="password" name="confirm_password" required placeholder="enter your confirm password">
        <input type="submit" name="reset_password_submit" value="Reset Password" class="form-btn">
        </form>
    </div>
    <!-- Login form end -->
    
</body>
</html>