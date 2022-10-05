<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Blog Page</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js"></script>
    <link href="css/style.css" rel="stylesheet">
</head>
<body>
    <?php
    include_once("includes/header.php");
    require_once("includes/config.php");
    
    //get id for blog
    $getId = $_GET['id'];

    //get blog post
    $getBlog = "SELECT * FROM blogs WHERE id=$getId";
    $runBlogQuery = mysqli_query($db, $getBlog);
    $blog = mysqli_fetch_assoc($runBlogQuery);

    //get category
    $id= $blog['category_id'];
    $getCategory = "SELECT name From category WHERE id=$id";
    $runQuery = mysqli_query($db, $getCategory);
    $category = mysqli_fetch_assoc($runQuery);
    ?>

    <!-- Display main blog start -->
    <div class="container m-auto mt-3 row">
        <div class="col-8">
          <div class="card mb-3">
            <div class="card-body">
              <h5 class="card-title"><?php echo $blog['title']; ?></h5>
              <span class="badge bg-primary "><?php echo date('F jS, Y', strtotime($blog['created_at'])); ?></span>
              <span class="badge bg-danger"><?php echo $category['name']; ?></span>
              <div class="border-bottom mt-3"></div>
              <img src="venders/img/<?php echo $blog['image']; ?>" width=687 height=433 class="mb-3">
              <p class="card-text"><?php echo $blog['content']; ?></p>
              <a href="#" class="btn btn-primary">Share this post</a>

              <?php
              if(isset($_SESSION['success']) === false){
              ?>
                <a class="btn btn-primary" href="<?php echo isset($_SESSION['success']) === true ? "#comments" : "login_system/login_form.php"; ?>">Comment on this</a>
              <?php
              }
              ?>

            </div>
          </div>
        <div>
      <!-- Display main blog end -->

      <?php 
      include_once("comment.php");
      include_once("relatedPost.php");
      ?>

      <!-- Side bar start-->
        <div class="col-4 mt-3">
           <!-- Recent Posts -->
          <h3>Recent Posts</h3>
          <div class="list-group mb-3" >
            <?php 
            //Display recent five post title..
            $recentPostQuery = "SELECT * FROM blogs ORDER BY id DESC LIMIT 5";
            $runRecentPostQuery = mysqli_query($db, $recentPostQuery);
            while($result = mysqli_fetch_assoc($runRecentPostQuery)){
              ?>
                <a href="blog.php?id=<?php echo $result['id']; ?>" class="list-group-item"><?php echo $result['title']; ?></a>
              <?php
            }          
           ?>
          </div>
          
          <!-- Display category -->
          <h3>Categories</h3>
          <div class="list-group mb-3" >
            <?php 
              $query = "SELECT * FROM category";
              $runquery = mysqli_query($db, $query);
              while($allCategory = mysqli_fetch_assoc($runquery)){
              ?>
                <a href="" class="list-group-item"><?php echo $allCategory['name']; ?></a>
              <?php
              }
              ?>
          </div>
        </div>
      <!-- Sidebar end -->
    </div> 
    
</body>
</html>