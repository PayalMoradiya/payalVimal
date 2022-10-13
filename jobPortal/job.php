<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Job Page</title>
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
    
    //Get job content from database
    $appliedJob_Id = $_GET['id'];
    $query = "SELECT * FROM jobs WHERE id=$appliedJob_Id";
    $result = mysqli_query($db, $query);
    $appliedJob = mysqli_fetch_assoc($result);

    //Get CV from database
    $user_id = $_SESSION['userid'];
    $cvQuery = "SELECT * FROM profile WHERE user_id=$user_id";
    $cvResult = mysqli_query($db, $cvQuery);
    $getCV = mysqli_fetch_assoc($cvResult);
    
    ?>
    <div class="container-fluid bg-primary p-3">
        <h1 class="text-center">Job Details</h1>
    </div>
    <div class="container">
        <div class="row">
            <div class="d-flex">
                <div class="col-md-8 m-3 custom-border">
                    <div class="d-flex">
                        <div class="logo m-3">
                            <img class="company-logo m-3" src="venders/img/logo1.png" alt="Company Logo">
                        </div>
                        <div class="heading m-3">
                            <h2 class="job-title"><?php  echo $appliedJob['title']; ?></h2>
                                <div class="company"><?php  echo $appliedJob['company_name']; ?></div>
                                <div class="location"><i class="fa fa-map-marker"></i><?php  echo $appliedJob['location']; ?></div>
                                <div class="salary"><i class="fa fa-gbp"></i><?php  echo $appliedJob['salary'] . "/annum"; ?></div>
                            <button class="btn btn-warning" >Full-Time</button>
                            <!-- Button to Open the Modal -->
                            <a type="button" class="btn btn-primary" href="<?php echo (isset($_SESSION['profile'])) === true ? '#popup' : 'profile.php'; ?>">Apply for this job</a>
                        </div>
                    </div>
                    <hr>

                    <div class="job-content m-3">
                        <h6>Overview</h6>
                        <?php echo $appliedJob['description']; ?>

                        <h6>Skill Required</h6>
                        <?php echo $appliedJob['skill']; ?>

                        <h6>Job Location</h6>
                        <?php echo $appliedJob['location']; ?>

                        <h6>Salary Package</h6>
                        <i class="fa fa-gbp"></i><?php  echo $appliedJob['salary'] . "/annum"; ?>

                        <h6>Closing date</h6>
                        <i class="fa fa-date"></i><?php  echo $appliedJob['closing_date']; ?>
                    </div>
                    <hr>
                    <!-- Button to Open the Modal -->
                    <a type="button" class="btn btn-primary" href="<?php echo (isset($_SESSION['profile'])) === true ? '#popup' : 'profile.php'; ?>">Apply for this job</a>
                    
                    
                </div>
                <div class="col-md-4 m-3 custom-border">
                    <h4 class="text-center m-3">Similar Jobs</h4>
                    <hr>
                    <div class="sidebar_content">
                        <div class="job-title"><?php echo $appliedJob['title']; ?></div>
                        <div class="salary"><i class="fa fa-gbp"></i><?php echo $appliedJob['salary'] . "/annum"; ?></div>
                        <div class="location"><i class="fa fa-map-marker"></i><?php echo $appliedJob['location']; ?></div>
                        <hr>
                    </div>   
                </div>
            </div>
        </div>   
    </div>

    <!-- Apply for job button pop up -->

<div class="custom-border" id="popup">
    <form action="" method="post" enctype="multipart/form-data">
        <?php if(!empty($getCV['cv'])) { ?>
            <p>Your CV : <?php echo $getCV['cv']; ?></p>
        <?php } ?>
        <div class="form-group m-3">
            <span>Change your CV</span>
            <input type="file" name="changeCV" value="">
        </div>
        <div class="form-group m-3">
            <span>Add your Cover Letter</span>
            <input type="file" name="coverletter" value="" required>
        </div>
        <button type="submit" name="submit" class="btn btn-danger">Apply</button>
    </form>
</div>
<br>
<br>

    <?php 
    if(isset($_POST['submit'])){
        
        //Change CV data..
        if(isset($_FILES['changeCV']['name'])) {
            $pdf= $_FILES['changeCV']['name'];
        } else {
            $pdf= $getCV['cv'];
        }
        
        $pdf_type=$_FILES['changeCV']['type'];
        $pdf_size=$_FILES['changeCV']['size'];
        $pdf_tem_loc=$_FILES['changeCV']['tmp_name'];
        $pdf_store="pdf/".$pdf;

        move_uploaded_file($pdf_tem_loc,$pdf_store);

        //upload cover letter data..
        $cl=$_FILES['coverletter']['name'];
        $cl_type=$_FILES['coverletter']['type'];
        $cl_size=$_FILES['coverletter']['size'];
        $cl_tem_loc=$_FILES['coverletter']['tmp_name'];
        $cl_store="cover_letter/".$cl;

        move_uploaded_file($cl_tem_loc,$cl_store);

        $query = "UPDATE profile SET cv='$pdf' , cover_letter='$cl' WHERE user_id=$user_id";
        $updateQuery= mysqli_query($db,$query);

        $sql= "INSERT INTO job_applied (jobs_id, user_id) VALUES ($appliedJob_Id, $user_id)";
        $insertQuery= mysqli_query($db,$sql);
                
            if(isset($updateQuery) && isset($insertQuery)) {
                echo "Thank you for applying for this position. Our team will contact you as soon as possible!!";               
            } else {
                echo "Something went wrong!";
            }
    }
    ?>
    <br>
    <br>
</body>
</html>