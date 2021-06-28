$(window).on('load', function () {
    $("#toggle_employeeslist").hide();
    $("#toggle_department").hide();
    $("#toggle_location").hide();
    $("#back_btn").hide();
    $("#plus_img").hide();
    $("#dropdownMenuButton1").hide();
    $("#plus_img2_department").hide();
    $("#plus_img_department").hide();
    $("#plus_img2_location").hide();
    $("#plus_img_location").hide();
    $("#filter_employeedata").hide();
    $("#filter_employeedata1").hide();
    $("#dashboard_btn1").hide();
    $("#plus_img2").hide();
    $("#dropdownMenuButton2").hide();
    $("#back_btn1").hide();
    if ($('#preloader').length) {
        $('#preloader').delay(100).fadeOut('slow', function() {
            $(this).remove();
        });
    }
});
