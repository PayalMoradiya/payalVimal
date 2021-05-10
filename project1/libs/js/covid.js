/*

fetch("https://pomber.github.io/covid19/timeseries.json")
  .then(response => response.json())
  .then(data => {
    data["United Kingdom"].forEach(({ date, confirmed, recovered, deaths }) =>
      console.log(`${date} active cases: ${confirmed - recovered - deaths}`)
    );
  });    */
  

//$(document).ready(function() {
  let city;
  city = document.getElementById('txtcountryname').textContent;
 
    console.log(city);
    let last;
     $('#btnwiki').on("click", function() {

    $.ajax({
        url: "libs/php/getcovid.php",
        type: 'POST',
        dataType: 'json',
        data: {
         // postalcode: $('#selPostcode').val(),
        
        },
        success: function(result) {
           console.log(result);
        
            last = [city].length - 1;
  
            if (result.status.name == "ok") {
                $('#txtcovidcase').html(result[city][last]['confirmed']);
              //  $('#txtcountryname').html(result['data'][0]['countryName']);
             //   $('#txtlang').html(result['data'][0]['languages']);
            //   $('#txtgeonameid').html(result['data'][0]['geonameId']);
     
            }                                        
        },
        error: function(jqXHR, textStatus, errorThrown) {
            //error code..
            alert('error');
        }
    });
});

//});



