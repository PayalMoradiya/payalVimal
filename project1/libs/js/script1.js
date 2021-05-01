
//$(document).ready(function() {
    $('#btnwiki').on("click", function() {

        $.ajax({
            url: "libs/php/getCountryInfo.php",
            type: 'POST',
            dataType: 'json',
            data: {
             // postalcode: $('#selPostcode').val(),
              country: $('#selcountry').val()
            },
            success: function(result) {

    
    
                console.log(result);
    
                if (result.status.name == "ok") {
                    $('#txtcontinentname').html(result['data'][0]['continentName']);
                    $('#txtcountryname').html(result['data'][0]['countryName']);
                    $('#txtlang').html(result['data'][0]['languages']);
                   $('#txtgeonameid').html(result['data'][0]['geonameId']);
                   $('#txtcapital').html(result['data'][0]['capital']);
                    $('#txtpopulation').html(result['data'][0]['population']);
                    $('#txtcountrycode').html(result['data'][0]['countryCode']);
                   $('#txtareainsq').html(result['data'][0]['areaInSqKm']);
                }
            },
            error: function(jqXHR, textStatus, errorThrown) {
                //error code..
                alert('error');
            }
        });
    });

//});


