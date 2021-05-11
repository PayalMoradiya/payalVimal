
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

                let country;
                country = document.getElementById('txtcountryname').textContent;
                console.log(country);

              
          

                $.each(result, function() {
                  for(let i=0; i < 175; i++){
                    
                   
                    if(result['data'][i]['properties']['name'] === country){
                      $('#name1').html(result['data'][i]['geometry'].coordinates);
                     // coords.push(result['data'][i]['geometry'].coordinates);
             

                  }
                 
                  
                   
                    
                  }
                });
         
          
          
              
               // if (result.status.name == "ok") {
                    //$('#name').html(result['data'][country]['geometry']['coordinates']);
                  //  $('#txtwiki').html(result['data'][0]['wikipediaUrl']);
                  //  $('#txtlat').html(result['data'][0]['lat']);
                   // $('#txtlng').html(result['data'][0]['lng']);
                 //   $('#txtcountry').html(result['data'][0]['countryCode']);
                  // $('#txtlang').html(result['data'][0]['lang']);
                 //  $('#txtgeoname').html(result['data'][0]['geoNameId']);
              //  }                                     
            },
            error: function(jqXHR, textStatus, errorThrown) {
                //error code..
                alert('error');
            }
        });
    });

//});



