
//$(document).ready(function() {
    $('#btnwiki').on("click", function() {

        $.ajax({
            url: "libs/php/getWeather.php",
            type: 'POST',
            dataType: 'json',
            data: {
                q: $('#selcountry').val()
            
            },
            success: function(result) {
                
                console.log(result);
    
                if (result.status.name == "ok") {
                    $('#txtclouds').html(result['data'][0]['description']);
                    $('#txtwind').html(result['data'][0]['windSpeed']);
                    $('#txttemp').html(result['data'][0]['temperature']);
                    $('#txthum').html(result['data'][0]['humidity']);
                }                   
            },
            error: function(jqXHR, textStatus, errorThrown) {
                //error code..
                alert('error');
            }
        });
    });

//});


