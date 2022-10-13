<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Home Page</title>
    <!-- Bootstrap links -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js"></script>
    
    <link type="text/css" rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
</head>
<body>
    <div class="mainpage-img">
        <?php 
            include_once('includes/header.php'); 
            include_once('includes/config.php');
        ?>
        
        <div class="col-md-10 hero-text">
            <h1 style="font-size:50px">Search jobs online!</h1>
            <h3>Find your next job or career from Job Portal</h3>
            <!-- Search form start -->
            <form method="" action="">
                <div class="d-flex" style="margin-left:80px;">
                    <div class="form-group col-md-5 m-3">
                        <input type="text" class="form-control" name="job_title" placeholder="Enter job title.." required>
                    </div>
                    <div class="form-group col-md-5 m-3">
                        <input type="text" class="form-control" name="location" placeholder="Enter location.." required>
                    </div>
                </div>
                <button type="submit" name="search_job" class="btn btn-dark">Search</button>
            </form>
            <!-- Search form ends -->
        </div>
    </div>

     <!--Show all jobs start  -->
    <?php 
        if(isset($_GET['job_title'])){

            $title = $_GET['job_title'];
            $location = $_GET['location'];

            //Get search result
            $query = "SELECT * FROM jobs WHERE title LIKE '%$title%' OR location LIKE '%$location%' ORDER BY id DESC LIMIT 5";
        } else {
            //Get all jobs
            $query = "SELECT * FROM jobs ORDER BY id DESC";
        }
        ?>

    <?php 
    $result = mysqli_query($db, $query);
    ?>

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
        <!--Show all jobs end  -->

        <!-- Sidebar (category) start  -->
        <div class="col-md-4" style="margin:40px 20px 0px 20px;">
            <h4 class="text-center m-3">Job Categories</h4>
            <hr>
            <?php 
            $queryCategory = "SELECT * FROM category";
            $resultCategory = mysqli_query($db, $queryCategory);
            ?>
            <div class="sidebar_content">
                <?php while($category = mysqli_fetch_assoc($resultCategory)) { ?>
                    <a class="category_name" href="category.php?id=<?php echo $category['id']; ?>"><div class="job-title"><?php echo $category['name']; ?></div></a>
                    <hr>
                <?php } ?>
            </div>
        </div>
        <!-- Sidebar (category) end -->
    </div>
</body>
</html>