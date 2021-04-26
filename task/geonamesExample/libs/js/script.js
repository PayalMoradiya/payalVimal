
//$(document).ready(function() {
    $('button').on("click", function() {

        $.ajax({
            url: "libs/php/getInfo.php",
            type: 'POST',
            dataType: 'json',
            data: {
              postalcode: $('#selCountry').val(),
              country: $('#selPostalcode').val()
            },
            success: function(result) {

    
    
                console.log(result);
    
                if (result.status.name == "ok") {
                    $('#txtcode').html(result['data'][0]['countryCode']);
                    $('#txtmaxcode').html(result['data'][0]['postalcode']);
                    $('#txtmincode').html(result['data'][0]['street']);
                  // $('#txtPopulation').html(result['data'][0]['population']);
                  // $('#txtArea').html(result['data'][0]['areaInSqKm']);
                }
            },
            error: function(jqXHR, textStatus, errorThrown) {
                //error code..
                alert('error');
            }
        });
    });

//});



