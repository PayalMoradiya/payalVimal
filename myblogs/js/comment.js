$(document).ready(function(){ 
    $('.reply').on('click', function(){
        var commentId = $(this).attr("id");
        $('#commentId').val(commentId);
        $('#comment').focus();
    });
});