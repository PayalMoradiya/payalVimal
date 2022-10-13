<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Category Page</title>
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

    <?php
    //Get category id..
    $getCategoryID = $_GET['id'];

    //Get category name..
    $queryCategory = "SELECT name FROM category WHERE id=$getCategoryID";
    $resultCategory = mysqli_query($db, $queryCategory);
    $categoryName = mysqli_fetch_assoc($resultCategory);
    
    //Get selected category jobs
    $query = "SELECT * FROM jobs WHERE category_id=$getCategoryID ORDER BY id DESC"; 
    $result = mysqli_query($db, $query);
    ?>

    <!-- Show all jobs with similar category -->
    <div class="container d-flex">
        <div class="col-md-8 m-3">
            <h2>Jobs</h2>
            <div class="row mt-3">
                <?php  while($jobs = mysqli_fetch_assoc($result)) { ?>
                    <div class="d-flex m-2" style="border:1px solid gray;">
                        <div class="logo m-3">
                            <img class="company-logo" src="venders/img/logo1.png" alt="Company Logo">
                        </div>
                        <div class="content m-3">
                            <span class="badge badge-warning bg-warning"><?php echo $categoryName['name']; ?></span>
                            <div class="job-title"><?php echo $jobs['title']; ?></div>
                            <div class="company"><?php echo $jobs['company_name']; ?></div>
                            <div class="salary"><i class="fa fa-gbp"></i><?php echo $jobs['salary'] . "/annum"; ?></div>
                            <div class="location"><i class="fa fa-map-marker"></i><?php echo $jobs['location']; ?></div>
                        </div>
                        <a type="button" class="btn btn-primary job-btn" href="job.php?id=<?php echo $jobs['id']; ?>">Apply</a>
                    </div>
                <?php } ?>
            </div>
        </div>

        <?php 
        $similarJobsQuery = "SELECT * FROM jobs";
        $similarJobsResult = mysqli_query($db, $similarJobsQuery);
        ?>
        <!--Sidebar Start  -->
        <div class="col-md-4 m-3 custom-border">
            <h4 class="text-center m-3">Similar Jobs</h4>
            <hr>
            <?php  while($similarJobs = mysqli_fetch_assoc($similarJobsResult)) { 
                    if($similarJobs['id'] == $getCategoryID) {
                        continue;
                    }
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