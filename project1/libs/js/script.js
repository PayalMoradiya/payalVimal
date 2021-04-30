
//$(document).ready(function() {
    $('#btnwiki').on("click", function() {

        $.ajax({
            url: "libs/php/getWiki.php",
            type: 'POST',
            dataType: 'json',
            data: {
              q: $('#selq').val(),
             // country: $('#selPostalcode').val()
            },
            success: function(result) {

    
    
                console.log(result);
    
                if (result.status.name == "ok") {
                    $('#txtsum').html(result['data'][0]['summary']);
                    $('#txtwiki').html(result['data'][0]['wikipediaUrl']);
                 //   $('#txtcountry').html(result['data'][0]['countryCode']);
                  // $('#txtlang').html(result['data'][0]['lang']);
                 //  $('#txtgeoname').html(result['data'][0]['geoNameId']);
                }
            },
            error: function(jqXHR, textStatus, errorThrown) {
                //error code..
                alert('error');
            }
        });
    });

//});



