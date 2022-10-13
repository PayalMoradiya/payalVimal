<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Profile Page</title>
    <!-- Bootstrap links -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js"></script>
    
    <link type="text/css" rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
</head>
<body>
    <?php 
        include_once('includes/header.php'); 
        include_once('includes/config.php');

    ?>
    <h1 class="text-center m-3">My Profile</h1>
    <!-- Profile form start -->
    <div class="container col-md-8">
        <form action="" method="post" enctype="multipart/form-data" >
            <div class="form-group m-3">
                <input type="text" class="form-control" name="username" placeholder="Write your name here.." required>
            </div>
            <div class="form-group d-flex m-3">
                <input type="email" style="margin-right:10px;" class="form-control" name="email" placeholder="Write your email here.." required>
                <input type="text" style="margin-left:10px;"  class="form-control" name="phone" placeholder="Write phone number here.." required>
            </div>
            <div class="form-group m-3">
                <label for="">Choose your file</label><br>
                <input id="pdf" type="file" name="pdf" value="" required>
            </div>

            <button type="submit" name="submit" class="btn btn-primary mx-3">Submit</button>
        </form>
    </div>
    <!-- Profile form end -->

    <?php
        $_SESSION['profile'] = false;
        
        if (isset($_POST['submit'])) {
            
            $username = $_POST['username'];
            $email = $_POST['email'];
            $phone = $_POST['phone'];
            $user_id = $_SESSION['userid'];

        //upload files data..
          $pdf=$_FILES['pdf']['name'];
          $pdf_type=$_FILES['pdf']['type'];
          $pdf_size=$_FILES['pdf']['size'];
          $pdf_tem_loc=$_FILES['pdf']['tmp_name'];
          $pdf_store="pdf/".$pdf;

          move_uploaded_file($pdf_tem_loc,$pdf_store);

          $sql="INSERT INTO profile (name, user_id, email, phone_no, cv) VALUES ('$username', $user_id, '$email', $phone, '$pdf')";
          $query=mysqli_query($db,$sql);

          if(isset($query)) {
                $_SESSION['profile'] = true;
                echo "Profile set successfully!";
                header('location:index.php');
          } else {
             echo "Something went wrong!";
          }
        }
         ?>

</body>
</html> 