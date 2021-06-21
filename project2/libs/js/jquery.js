$(window).on('load', function () {
    $("#toggle_employeeslist").hide();
    $("#toggle_department").hide();
    $("#toggle_location").hide();
    if ($('#preloader').length) {
        $('#preloader').delay(100).fadeOut('slow', function() {
            $(this).remove();
        });
    }
});
