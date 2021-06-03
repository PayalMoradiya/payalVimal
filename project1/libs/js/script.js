//close button on model...
var dismiss = document.getElementById("btn_cls");
dismiss.addEventListener("click", function () {
  $("#covid").modal("hide");
});

var dismiss1 = document.getElementById("info_btn_cls");
dismiss1.addEventListener("click", function () {
  $("#info").modal("hide");
});

var dismiss2 = document.getElementById("weather_btn_cls");
dismiss2.addEventListener("click", function () {
  $("#weather").modal("hide");
});

//openCagedata.php file.....
//$(document).ready(function () {
$("#selcountry").change(function () {
  $.ajax({
    url: "libs/php/getCountryInfo.php",
    type: "POST",
    dataType: "json",
    data: {
      q: $("#selcountry").val(),
    },
    success: function (result) {
      console.log(result);

      var country_name = result.data.geonames[0].countryName;
      var north = result.data.geonames[0].north;
      var south = result.data.geonames[0].south;
      var east = result.data.geonames[0].east;
      var west = result.data.geonames[0].west;
      console.log(country_name);

      var encoded_countryName = encodeURIComponent(country_name.trim());
      console.log(encoded_countryName);

      console.log(north);
      console.log(south);
      console.log(east);
      console.log(west);

      var population = result["data"]["geonames"][0]["population"];
      var nf = new Intl.NumberFormat();
      var population_formatted = nf.format(population);

      if (result.status.name == "ok") {
        $("#txtcapital").html(result["data"]["geonames"][0]["capital"]);
        $("#txtcountrycode").html(result["data"]["geonames"][0]["countryCode"]);
        $("#txtgeoname").html(result["data"]["geonames"][0]["geonameId"]);
        $("#txtpopulation").html(population_formatted);
        $("#txtcontinentcode").html(
          result["data"]["geonames"][0]["continentName"]
        );
        $("#txtlang").html(result["data"]["geonames"][0]["languages"]);
        $("#txtcountryname").html(result["data"]["geonames"][0]["countryName"]);
      }

      //getWeather.php file.....

      $.ajax({
        url: "libs/php/getWeather.php",
        type: "POST",
        dataType: "json",
        data: {
          q: encoded_countryName,
        },
        success: function (result) {
          console.log(result);

          if (result.status.name == "ok") {
            $("#txtclouds").html(result["data"]["weather"][0]["description"]);
            $("#txttemp").html(result["data"]["main"]["temp"]);
            $("#txthum").html(result["data"]["main"]["humidity"]);
            $("#txtspeed").html(result["data"]["wind"]["speed"]);
          }
        },
        error: function (jqXHR, textStatus, errorThrown) {
          //error code..
          alert("error");
        },
      });

      //getWiki.php file...

      $.ajax({
        url: "libs/php/getWiki.php",
        type: "POST",
        dataType: "json",
        data: {
          q: encoded_countryName,
        },
        success: function (result) {
          console.log(result);

          if (result.status.name == "ok") {
            $("#txtwiki").html(result["data"]["geonames"][0]["wikipediaUrl"]);
          }
        },
        error: function (jqXHR, textStatus, errorThrown) {
          //error code..
          alert("error");
        },
      });

      //getcovid.php file....

      $.ajax({
        url: "libs/php/getcovid.php",
        type: "GET",
        dataType: "json",
        data: {
          // postalcode: $('#selPostcode').val(),
        },
        success: function (result) {
          console.log(result.data);

          $.each(result.data, function (keys, value) {
            if (keys === country_name) {
              var index = value[value.length - 1];
              var activecase = (
                index.confirmed -
                index.deaths -
                index.recovered
              ).toLocaleString();
              console.log(activecase);
              console.log(index.confirmed);
              console.log(index.deaths);
              console.log(index.recovered);

              $("#txtcovidcase").html(activecase);
              $("#txtconcovidcase").html(index.confirmed.toLocaleString());
              $("#txtdeacovidcase").html(index.deaths.toLocaleString());
              $("#txtreccovidcase").html(index.recovered.toLocaleString());
            }
          });
        },
      });

      //getRestCountry.php file....

      $.ajax({
        url: "libs/php/getRestCountry.php",
        type: "POST",
        dataType: "json",
        data: {
          q: encoded_countryName,
        },
        success: function (result) {
          console.log(result);

          if (result.status.name == "ok") {
            $("#txtcurrency").html(result["data"][0]["currencies"][0]["name"]);
            $("#txtsymbol").html(result["data"][0]["currencies"][0]["symbol"]);
            $("#txtnative").html(result["data"][0]["nativeName"]);
          }
        },
        error: function (jqXHR, textStatus, errorThrown) {
          //error code..
          alert("error");
        },
      });
    },
  });
});
