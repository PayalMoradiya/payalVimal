
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
              console.log(result);
              var getcountryname = [];
              var  getISOcode = [];
              $.each( result, function() {

                getcountryname.push(result['data']['properties']['name']);
                getISOcode.push(result['data']['properties']['iso_a3']);

              });
              console.log(getcountryname);
              console.log(getISOcode);


               if (result.status.name == "ok") {
                    //$('#name').html(result['data'][country]['geometry']['coordinates']);
                  // $('#name').html(result['data'][i]['properties']['name']);
                  //  $('#txtlat').html(result['data'][0]['lat']);
                   // $('#txtlng').html(result['data'][0]['lng']);
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



