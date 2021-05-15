$(document).ready(function () {
  // $('#btnwiki').on("click", function() {

  $.ajax({
    url: "libs/php/getcovid.php",
    type: "GET",
    dataType: "json",
    data: {
      // postalcode: $('#selPostcode').val(),
    },
    success: function (result) {
      console.log(result);
      console.log(result.data);

      const log = console.log;
      const areaSelect = document.querySelector(`[id="selcountry"]`);
      var dropdownItems ;
      var select;
      var Value;
      areaSelect.addEventListener(`change`, (e) => {
        // Select country name from dropdown list...
        select = e.target;
        Value = e.target.value;
        dropdownItems = select.options[select.selectedIndex].text;
      

        $.each(result.data, function (keys, value) {
          if (keys === dropdownItems) {

              var index = value[value.length - 1];
              var activecase = (index.confirmed) - (index.deaths) - (index.recovered);
              console.log(activecase);
              console.log(index.confirmed);
              console.log(index.deaths);
              console.log(index.recovered);

              $('#txtcovidcase').html(activecase);
              $('#txtconcovidcase').html(index.confirmed);
              $('#txtdeacovidcase').html(index.deaths);
              $('#txtreccovidcase').html(index.recovered);
          }
        });
      });
    },
  });
});   
