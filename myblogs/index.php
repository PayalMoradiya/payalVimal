<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Home Page</title>
    <!-- bootstrap stylesheet -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet">
    <!-- stylesheet -->
    <link href="css/style.css" rel="stylesheet">
</head>
<body>
    <?php
    include_once("includes/header.php");
    require_once("includes/config.php");

    //show 5 post per page..
    if(isset($_GET['page'])) {
        $page = $_GET['page'];
    } else {
        $page = 1;
    }
    $post_per_page = 5;
    $result = ($page-1) * $post_per_page;
    ?>
    <!-- Main Page -->
    <div class="container m-auto mt-3 row">
        <div class="col-8">

            <?php
            if(isset($_GET['search'])) {
                //get search keywords blog
                $keywords = $_GET['search'];
                $query = "SELECT * FROM blogs WHERE title LIKE '%$keywords%' ORDER BY id DESC LIMIT $result, $post_per_page";
            } else {
                //get five blog per page with latest post on top
                $query = "SELECT * FROM blogs ORDER BY id DESC LIMIT $result, $post_per_page";
            }
            
            $runQuery = mysqli_query($db, $query);
            //Display all blogs..
            while($blogs = mysqli_fetch_assoc($runQuery)) {
            ?>
                <div class="card mb-3" style="max-width: 800px;">
                    <a href="blog.php?id=<?php echo $blogs['id']; ?>" style="text-decoration:none; color:black;">
                        <div class="row g-0">
                            <div class="col-md-5" style="background-image: url('venders/img/<?php echo $blogs['image']; ?>');background-size: cover;"> 
                            </div>
                            <div class="col-md-7">
                                <div class="card-body">
                                    <!-- Added blog id with title so we can see latest post -->
                                    <h5 class="card-title"><?php echo $blogs['id'] . " " . $blogs['title']; ?></h5>
                                    <p class="card-text text-truncate"><?php echo $blogs['content']; ?></p>
                                    <p class="card-text"><small class="text-muted"><?php echo date('F jS, Y', strtotime($blogs['created_at'])); ?></small></p>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
            <?php
            }
            ?>
        </div>
    

        <!-- Side bar start -->
        <?php
        include_once("features.php");
        ?>
        <!-- Side bar end -->
        </div>
    </div>
    
    <?php 
    include_once("pagination.php");
    ?>
    <!--bootstrap script -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>