<!-- Comment Section Start-->
<?php
    if(isset($_SESSION['success']) === true) {
    ?>
        <!-- Comment Form Start -->
        <div class="col-12" id="comments">
            <div class="row">
                <form class="form-horizontal" method="post" action="" >
                <input type="text" name="comment" id="comment" class="comment_input" placeholder="Write your comment..." required>
                <input type="hidden" name="commentId" id="commentId" value="0" />
                <button type="submit" class="btn btn-primary" style="float:right; margin-top:10px;">Comment</button>
                </form> 
            </div>
        </div>
        <!-- Comment Form end -->
    <?php
    }
    ?> 

    <!-- SQL query for comments -->
    <h4 style="margin-top:20px;">Comments</h4>
    <?php
    if(!empty($_POST["comment"])){
        $insertComments = "INSERT INTO comments (user, comment, parent_id, blog_category_id) VALUES ('".$_SESSION["username"]."', '".$_POST["comment"]."', '".$_POST["commentId"]."', '".$_GET["id"]."')";
        mysqli_query($db, $insertComments);

        echo '<label class="text-success">Comment posted Successfully.</label>';
    }
    ?>

    <?php include_once("show_comments.php"); ?>
<!-- Comment Section end -->