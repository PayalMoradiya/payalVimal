
//Drop down select option function....
function onFocusFunction() {
  var select_size = document.getElementById("selcountry");
  select_size.size = 3;
}
function onChangeFunction() {
  var select_size = document.getElementById("selcountry");
  select_size.size = 1;
}


//getcovid.php file....

$(document).ready(function () {
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
      var dropdownItems;
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
            var activecase = index.confirmed - index.deaths - index.recovered;
            console.log(activecase);
            console.log(index.confirmed);
            console.log(index.deaths);
            console.log(index.recovered);

            $("#txtcovidcase").html(activecase);
            $("#txtconcovidcase").html(index.confirmed);
            $("#txtdeacovidcase").html(index.deaths);
            $("#txtreccovidcase").html(index.recovered);
          }
        });
      });
    },
  });
});

//getRestCountry.php file....

//$(document).ready(function () {
  $("#selcountry").change( function () {
  $.ajax({
    url: "libs/php/getRestCountry.php",
    type: "POST",
    dataType: "json",
    data: {
      // postalcode: $('#selPostcode').val(),
      q: $("#selcountry").val(),
    },
    success: function (result) {
      console.log(result);

      if (result.status.name == "ok") {
        $("#txtcountryname").html(result["data"][0]["name"]);
        $("#txtcapital").html(result["data"][0]["capital"]);
        $("#txtcurrency").html(result["data"][0]["currencies"][0]["name"]);
        $("#txtsymbol").html(result["data"][0]["currencies"][0]["symbol"]);
        $("#txtcountrycode").html(result["data"][0]["alpha2Code"]);
        $("#txtnative").html(result["data"][0]["nativeName"]);
      }
    },
    error: function (jqXHR, textStatus, errorThrown) {
      //error code..
      alert("error");
    },
  });
});

//getSearch.php file.....

//$(document).ready(function () {
  $("#selcountry").change( function () {
  $.ajax({
    url: "libs/php/getSearch.php",
    type: "POST",
    dataType: "json",
    data: {
      // postalcode: $('#selPostcode').val(),
      q: $("#selcountry").val(),
    },
    success: function (result) {
      console.log(result);

      if (result.status.name == "ok") {
        $("#txtcontinentcode").html(result["data"][0]["continentCode"]);
        $("#txttop").html(result["data"][0]["toponymName"]);
        $("#txtlat").html(result["data"][0]["lat"]);
        $("#txtlng").html(result["data"][0]["lng"]);
        $("#txtpopulation").html(result["data"][0]["population"]);
       // $("#txtcountrycode").html(result["data"][0]["countryCode"]);
        $("#txtgeoname").html(result["data"][0]["geonameId"]);
      }
    },
    error: function (jqXHR, textStatus, errorThrown) {
      //error code..
      alert("error");
    },
  });
});

//getWeather.php file.....

//$(document).ready(function () {
  
  $("#selcountry").change( function () {
  $.ajax({
    url: "libs/php/getWeather.php",
    type: "POST",
    dataType: "json",
    data: {
      q: $("#selcountry").val(),
    },
    success: function (result) {
      console.log(result);

      if (result.status.name == "ok") {
        $("#txtclouds").html(result["data"]["weather"][0]["description"]);
        $("#txttemp").html(result["data"]["main"]["temp"]);
        $("#txthum").html(result["data"]["main"]["humidity"]);
      }
    },
    error: function (jqXHR, textStatus, errorThrown) {
      //error code..
      alert("error");
    },
  });
});

//getWiki.php file...

//$(document).ready(function () {
  $("#selcountry").change( function () {
  $.ajax({
    url: "libs/php/getWiki.php",
    type: "POST",
    dataType: "json",
    data: {
      q: $("#selcountry").val(),
    },
    success: function (result) {
      console.log(result);

      if (result.status.name == "ok") {
        $("#txtlang").html(result["data"]["geonames"][0]["lang"]);
        $("#txtwiki").html(result["data"]["geonames"][0]["wikipediaUrl"]);
       // $("#txtcountrycode").html(result["data"]["geonames"][0]["countryCode"]);
      }
    },
    error: function (jqXHR, textStatus, errorThrown) {
      //error code..
      alert("error");
    },
  });
});

//


           