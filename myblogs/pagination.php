<!-- Pagination section start -->
    <?php 
    //get total number of blogs
    $q="SELECT * FROM blogs";
    $r= mysqli_query($db, $q);
    $total_blogs = mysqli_num_rows($r);
    $total_page = ceil($total_blogs/$post_per_page); //We need 5 blogs per page so it gives total number of pages
    
    //add functionality to Previous button (active or disabled)..
    $pswitch = ($page>1) ? "" : "disabled";

    //add functionality to Next button (active or disabled)..
    $nswitch = ($page<$total_page) ? "" : "disabled";
    
    ?>
    <!-- Pagination Nav-->
    <nav aria-label="Page navigation example">
        <ul class="pagination justify-content-center">
            <li class="page-item <?php echo $pswitch; ?>">
            <a class="page-link" href="?page=<?php echo $page-1; ?>" tabindex="-1" aria-disabled="true">Previous</a>
            </li>
            <?php 
            //display number of pages..
            for($pagenum=1; $pagenum<=$total_page; $pagenum++) {
            ?>
                <li class="page-item"><a class="page-link" href="?page=<?php echo $pagenum; ?>"><?php echo $pagenum; ?></a></li>
            <?php
            }
            ?>
            <li class="page-item <?php echo $nswitch; ?> ">
            <a class="page-link" href="?page=<?php echo $page+1 ?>">Next</a>
            </li>
        </ul>
    </nav>
<!-- Pagination section end -->
