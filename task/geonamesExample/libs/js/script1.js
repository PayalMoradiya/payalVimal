
//$(document).ready(function() {
    $('button').on("click", function() {

        $.ajax({
            url: "libs/php/getPostalCodeLookUp.php",
            type: 'POST',
            dataType: 'json',
            data: {
              postalcode: $('#selCountry').val(),
              country: $('#selPostalcode').val()
            },
            success: function(result) {

    
    
                console.log(result);
    
                if (result.status.name == "ok") {
                    $('#txtplace').html(result['data'][0]['placeName']);
                    $('#txtlati').html(result['data'][0]['lat']);
                    $('#txtlong').html(result['data'][0]['lng']);
                   $('#txtccode').html(result['data'][0]['countryCode']);
                }
            },
            error: function(jqXHR, textStatus, errorThrown) {
                //error code..
                alert('error');
            }
        });
    });

//});



