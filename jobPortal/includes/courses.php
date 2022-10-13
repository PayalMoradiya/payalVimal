<?php 
$query = "SELECT * FROM courses";
$result = mysqli_query($db, $query);
?>

<h2 class="m-3">Courses</h2>
<div class="d-flex">
    <?php
    while($courses = mysqli_fetch_assoc($result)){
    ?>
        <div class="card m-3" style="width:300px">
            <img class="card-img-top" src="../venders/img/<?php echo $courses['image']; ?>" alt="Card image">
            <div class="card-body">
                <h4 class="card-title"><?php echo $courses['course_name']; ?></h4>
                <h6 class="company"><?php echo $courses['company']; ?></h6>
                <h3><?php echo "£" . $courses['price']; ?></h3>
                <p class="card-text text-truncate"><?php echo $courses['description']; ?></p>
                <a href="#" class="btn btn-primary">More detail</a>
            </div>
        </div>

    <?php
    };
    ?>
</div>

<h2 class="m-3 text-center">The UK's favourite job board</h2>


