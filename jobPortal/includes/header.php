<?php
session_start();
if($_SESSION['success'] === true) {
?>
    <!-- navbar start -->
    <nav class="navbar navbar-fixed-top navbar-expand-sm navbar-dark bg-dark">
        <div class="container-fluid">
            <a class="navbar-brand" href="index.php">JobPortal</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="mynavbar">
            <ul class="navbar-nav me-auto">
                <li class="nav-item">
                <a class="nav-link" href="index.php">Jobs</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="profile.php">Profile</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="category.php?id=1">Category</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="job_applied.php">Jobs Applied For</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="">Contact Us</a>
                </li>
            </ul>
            <ul class="navbar-nav me-auto">
                <li class="nav-item">
                <div class="nav-link"><?php echo "Hello, " . $_SESSION["username"]; ?></div>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="loginSystem/logout.php">Logout</a>
                </li>
            </ul>
            </div>
        </div>
    </nav>
    <!-- navbar end -->
<?php
} else {
    header('location:loginSystem/login.php');
}
?>

