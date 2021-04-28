
//$(document).ready(function() {
    $('btnstreet').on("click", function() {

        $.ajax({
            url: "libs/php/getStreetnameLookup.php",
            type: 'POST',
            dataType: 'json',
            data: {
              q: $('#selq').val(),
              country: $('#selcode').val()
            },
            success: function(result) {

    
    
                console.log(result);
    
                if (result.status.name == "ok") {
                    $('#txtstreet').html(result['data'][0]['street']);
                    $('#txtpcode').html(result['data'][0]['postalcode']);
                    $('#txtloca').html(result['data'][0]['locality']);
                   $('#txtC').html(result['data'][0]['countryCode']);
                }
            },
            error: function(jqXHR, textStatus, errorThrown) {
                //error code..
                alert('error');
            }
        });
    });

//});



