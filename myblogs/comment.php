<!-- Comment Section Start-->
    <?php
    if(isset($_SESSION['success']) === true) {
    ?>
        <!-- Comment Form Start -->
        <div class="col-12" id="comments">
            <div class="row">
                <form class="form-horizontal" method="post" action="" >
                <input type="text" name="comment" class="comment_input" placeholder="Write your comment..." required>
                <button type="submit" class="btn btn-primary" style="float:right; margin-top:10px;">Comment</button>
                </form> 
            </div>
        </div>
        <!-- Comment Form end -->
        
        <!-- SQL query for comments -->

        <?php
        if(!empty($_POST["comment"])){
            $insertComments = "INSERT INTO comments (user, comment, blog_category_id) VALUES ('".$_SESSION["username"]."', '".$_POST["comment"]."', '".$_GET["id"]."')";
            mysqli_query($db, $insertComments);

            echo '<label class="text-success">Comment posted Successfully.</label>';
        }
        ?>
        <?php
        //get all comment from database...
            $getComments = "SELECT * FROM comments WHERE blog_category_id={$_GET['id']} ORDER BY id DESC";
            $qRunComments = mysqli_query($db, $getComments);
            while($result = mysqli_fetch_assoc($qRunComments)){
                ?>
                <!-- SHow comments -->
                <div class="card" style="margin:20px 0px;">
                <div class="card-header bg-light text-dark"><b><?php echo $result['user']; ?> </b><span style="margin-left:20px;"><?php echo date('F jS, Y', strtotime($result['created_at'])); ?></span></div>
                <div class="card-body"><?php echo $result['comment']; ?></div>
                </div>
            <?php
            }
            ?>
    <?php
    }
    ?>
<!-- Comment Section end -->