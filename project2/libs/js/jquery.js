$(window).on('load', function () {
    $("#toggle_employeeslist").hide();
    $("#toggle_department").hide();
    $("#toggle_location").hide();
    $("#back_btn").hide();
    $("#back_btn1").hide();
    if ($('#preloader').length) {
        $('#preloader').delay(100).fadeOut('slow', function() {
            $(this).remove();
        });
    }
});
