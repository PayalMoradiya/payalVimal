
//$(document).ready(function() {
  
    $('#btnwiki').on("click", function() {

        $.ajax({
            url: "libs/php/getCountryBorder.php",
            type: 'POST',
            dataType: 'json',
            data: {
               // q: $('#selcountry').val()
            },
            success: function(result) {
             // console.log(result);


              
                                                 
            },
            error: function(jqXHR, textStatus, errorThrown) {
                //error code..
                alert('error');
            }
        });
    });

//});



