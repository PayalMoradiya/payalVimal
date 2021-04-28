
//$(document).ready(function() {
    $('#btnwiki').on("click", function() {

        $.ajax({
            url: "libs/php/getWiki.php",
            type: 'POST',
            dataType: 'json',
            data: {
              q: $('#selCountry').val(),
             // country: $('#selPostalcode').val()
            },
            success: function(result) {

    
    
                console.log(result);
    
                if (result.status.name == "ok") {
                    $('#txtcode').html(result['data'][0]['summary']);
                    $('#txttitle').html(result['data'][0]['title']);
                    $('#txtcountry').html(result['data'][0]['countryCode']);
                   $('#txtlang').html(result['data'][0]['lang']);
                   $('#txtgeoname').html(result['data'][0]['geoNameId']);
                }
            },
            error: function(jqXHR, textStatus, errorThrown) {
                //error code..
                alert('error');
            }
        });
    });

//});



