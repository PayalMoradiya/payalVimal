<?php
$commentQuery = "SELECT * FROM comments WHERE blog_category_id=" . $_GET['id'] . " AND parent_id = '0' ORDER BY id DESC";
$commentsResult = mysqli_query($db, $commentQuery);
$commentHTML = '';
while($comment = mysqli_fetch_assoc($commentsResult)){

    $commentHTML .= '
    <div class="card" style="margin-bottom:20px;">
    <div class="card-header">By <b>'.$comment["user"].'</b> on <i>'.$comment["created_at"].'</i></div>
    <div class="card-body">'.$comment["comment"].'</div>
    <div class="panel-footer" align="right" style="margin:0px 10px 10px 0px;"><button type="button" class="btn btn-primary reply" id="'.$comment["id"].'">Reply</button></div>
  </div>';

	$commentHTML .= getCommentReply($db, $comment["id"]);
}
echo $commentHTML;

function getCommentReply($db, $parentId = 0, $marginLeft = 0) {
	$commentHTML = '';
	$commentQuery = "SELECT * FROM comments WHERE parent_id =".$parentId ;	
	$commentsResult = mysqli_query($db, $commentQuery);
	$commentsCount = mysqli_num_rows($commentsResult);
	if($parentId == 0) {
		$marginLeft = 0;
	} else {
		$marginLeft = $marginLeft + 48;
	}
	if($commentsCount > 0) {
		while($comment = mysqli_fetch_assoc($commentsResult)){

            $commentHTML .= '
                <div class="card" style="margin-left:'.$marginLeft.'px; margin-bottom:20px;">
                <div class="card-header">By <b>'.$comment["user"].'</b> on <i>'.$comment["created_at"].'</i></div>
                <div class="card-body">'.$comment["comment"].'</div>
                <div class="panel-footer" align="right" style="margin:0px 10px 10px 0px;"><button type="button" class="btn btn-primary reply" id="'.$comment["id"].'">Reply</button></div>
              </div>';

			$commentHTML .= getCommentReply($db, $comment["id"], $marginLeft);
		}
	}
	return $commentHTML;
}
?>