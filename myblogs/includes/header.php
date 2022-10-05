<?php
require_once("config.php");
session_start();

//Session destroy if the page inactive for 5 min.
if(isset($_SESSION['login_time'])) {

  if(time() - $_SESSION['login_time'] >= 300){
    session_unset();
    session_destroy(); // destroy session.
    //die(); // See https://thedailywtf.com/articles/WellIntentioned-Destruction
  }
  else {        
   $_SESSION['login_time'] = time();
  }

}
?>
<!-- navbar start -->
<nav class="navbar navbar-expand-sm navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="index.php">Myblogs</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="mynavbar">
      <ul class="navbar-nav me-auto">
        <li class="nav-item">
          <a class="nav-link" href="index.php">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="blog.php?id=1">Blogs</a>
        </li>
        <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">Category</a>
            <ul class="dropdown-menu">
              <!-- Get all category in dropdown list-->
              <?php 
              $query = "SELECT * FROM category";
              $runquery = mysqli_query($db, $query);
              while($allCategory = mysqli_fetch_assoc($runquery)){
              ?>
                <li><a class="dropdown-item" href="#"><?php echo $allCategory['name']; ?></a></li>
              <?php
              }
              ?>
            </ul>
        </li>
      </ul>
      <form class="d-flex">
        <input class="form-control me-2" name="search" type="text" placeholder="Search">
        <button class="btn btn-primary" type="submit">Search</button>
      </form>
      <ul class="navbar-nav me-auto">
        <li class="nav-item">
          <div class="nav-link"><?php echo isset($_SESSION['success']) === true ? "Hello, " . $_SESSION["username"] : "<a class='login_tab' href='login_system/login_form.php'>Login</a>"; ?></div>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="login_system/logout.php">Logout</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
<!-- navbar end -->
