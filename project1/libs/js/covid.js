/*

fetch("https://pomber.github.io/covid19/timeseries.json")
  .then(response => response.json())
  .then(data => {
    data["United Kingdom"].forEach(({ date, confirmed, recovered, deaths }) =>
      console.log(`${date} active cases: ${confirmed - recovered - deaths}`)
    );
  }); 
   
   */
  

//$(document).ready(function() {
  
 
  
    
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

           let getcountry;
             getcountry = document.getElementById('txtcountryname').textContent;
             console.log(getcountry);

            let newcountry;
             
             $.each(result, function(key, value) {
              for( key=0; key < result.length; key++){
                 newcountry = result[key];
                
                var last_object = value[value.length -1];
                if(newcountry === getcountry){
                  $('#txtcovidcase').html(result['data'][getcountry][last_object]['confirmed']);
                }
                console.log(newcountry);
              }
             

        
          })
         
  
                                        
        },
        error: function(jqXHR, textStatus, errorThrown) {
            //error code..
            alert('error');
        }
    });
});

//});



