<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Job Applied Page</title>
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
    <!-- Get all applied jobs -->
    <?php 
    //Get All applied jobs..
    $query = "SELECT * FROM jobs INNER JOIN job_applied ON jobs.id=job_applied.jobs_id";
    $result = mysqli_query($db, $query);

    //Get job applied date..
    $userId = $_SESSION['userid'];
    $dateQuery = "SELECT * FROM job_applied WHERE user_id=$userId";
    $dateApplied = mysqli_query($db, $dateQuery);
    $date = mysqli_fetch_assoc($dateApplied);
    ?>

    <div class="container d-flex">
        <div class="col-md-8 m-3">
            <h2>Applied Jobs</h2>
            <div class="row mt-3">
                <?php  while($jobs = mysqli_fetch_assoc($result)) { 
                            if($jobs['user_id'] == $_SESSION['userid']) {  ?>

                                <div class="d-flex m-2" style="border:1px solid gray;">
                                    <div class="logo m-3">
                                        <img class="company-logo" src="venders/img/logo1.png" alt="Company Logo">
                                    </div>
                                    <div class="content m-3">
                                        <div class="job-title"><?php echo $jobs['title']; ?></div>
                                        <div class="company"><?php echo $jobs['company_name']; ?></div>
                                        <div class="salary"><i class="fa fa-gbp"></i><?php echo $jobs['salary'] . "/annum"; ?></div>
                                        <div class="location"><i class="fa fa-map-marker"></i><?php echo $jobs['location']; ?></div>
                                    </div>
                                    <div class="date-applied">
                                        <span>Date Applied: <p><?php echo $date['date_applied']; ?></p></span>
                                    </div>
                                </div>
                                
                            <?php }
                        } ?>
            </div>
        </div>

        <?php 
        $similarJobsQuery = "SELECT * FROM jobs ORDER BY id DESC LIMIT 6";
        $similarJobsResult = mysqli_query($db, $similarJobsQuery);
        ?>

        <!--Sidebar Start  -->
        <div class="col-md-4 m-3 custom-border">
            <h4 class="text-center m-3">Recent Jobs</h4>
            <hr>
            <?php  while($similarJobs = mysqli_fetch_assoc($similarJobsResult)) { 
    
                ?>
                <div class="sidebar_content">
                    <div class="job-title"><?php echo $similarJobs['title']; ?></div>
                    <div class="salary"><i class="fa fa-gbp"></i><?php echo $similarJobs['salary'] . "/annum"; ?></div>
                    <div class="location"><i class="fa fa-map-marker"></i><?php echo $similarJobs['location']; ?></div>
                    <hr>
                </div>  
            <?php 
                } ?> 
        </div>
        <!--Sidebar end  -->
    </div>
    
</body>
</html>