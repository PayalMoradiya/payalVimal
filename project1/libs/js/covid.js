/*

fetch("https://pomber.github.io/covid19/timeseries.json")
  .then(response => response.json())
  .then(data => {
    data["United Kingdom"].forEach(({ date, confirmed, recovered, deaths }) =>
      console.log(`${date} active cases: ${confirmed - recovered - deaths}`)
    );
  }); 
    let last;

            last = result[getcountry].length - 1;
            console.log(last);
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

          $.each(result, function(key, value) {
              if(key === getcountry){
               var last_object = value[value.length -1];
                $('#txtcovidcase').html(result[getcountry][last_object]['confirmed']);
                
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



