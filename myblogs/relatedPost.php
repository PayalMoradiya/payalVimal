<!-- Show Blog Related Post Start-->

    <h4>Related Posts</h4>

    <!-- Get related blog from database-->
    <?php 
    $relatedPostQuery = "SELECT * FROM blogs WHERE category_id={$blog['category_id']}";
    $runRelatedPostQuery = mysqli_query($db, $relatedPostQuery);
    
    while($relatedPost = mysqli_fetch_assoc($runRelatedPostQuery)) {
        //remove current blog from list of all realted blogs
        if($relatedPost['id'] == $getId ) {
            continue;
        }
        ?>
        <!-- Display all blogs -->
        <div class="card mb-3" style="max-width: 800px;">
            <a href="blog.php?id=<?php echo $relatedPost['id']; ?>" style="text-decoration:none; color:black;">
                <div class="row g-0">
                    <div class="col-md-5" style="background-image: url('venders/img/<?php echo $relatedPost['image']; ?>');background-size: cover;"> 
                    </div>
                    <div class="col-md-7">
                        <div class="card-body">
                            <h5 class="card-title"><?php echo $relatedPost['id'] . " " . $relatedPost['title']; ?></h5>
                            <p class="card-text text-truncate"><?php echo $relatedPost['content']; ?></p>
                            <p class="card-text"><small class="text-muted"><?php echo date('F jS, Y', strtotime($relatedPost['created_at'])); ?></small></p>
                        </div>
                    </div>
                </div>
            </a>
        </div>
    <?php
    }
    ?> 

    </div>
    </div>
<!--Show blog Related post end -->