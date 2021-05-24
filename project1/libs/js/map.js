//map....

var mymap = L.map("mapid").setView([54.75844, -2.69531], 13).fitWorld();

var tiles = L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 18,
  tileSize: 512,
  zoomOffset: -1,
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
});
tiles.addTo(mymap);

//User Current Location....

mymap.locate({ setView: true, maxZoom: 18 });

const successfullLookup = (position) => {
  const { latitude, longitude } = position.coords;
  fetch(
    `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=eb18f0f3e5134530a8ac32ba074e937a&language=en&pretty=1`
  )
    .then((response) => response.json())
    .then(function (data) {
      console.log(data);
      var lat = data.results[0].geometry.lat;
      console.log(lat);
      var lng = data.results[0].geometry.lng;
      console.log(lng);
      var address = data.results[0].formatted;
      console.log(address);
      var country_name = data.results[0].components.country;
      console.log(country_name);
      var country_code = data.results[0].components.country_code;
      console.log(country_code);
      var currency_name = data.results[0].annotations.currency.name;
      console.log(currency_name);
      var currency_symbol = data.results[0].annotations.currency.symbol;
      console.log(currency_symbol);

      var currentLocation = L.marker([lat, lng], { icon: myIcon }).addTo(mymap);
      currentLocation
        .bindPopup("<b>" + address + "</b>", { closeButton: false })
        .openPopup();

        //update map with border..
        L.geoJSON(geoJSON, {
          filter: function (feature, layer) {
            if (feature.properties.name === country_name) {
              return feature.geometry.coordinates;
            }
          },
        }).addTo(mymap);


        //getCountryInfo.php file....

$(document).ready(function () {
    $.ajax({
      url: "libs/php/getCountryInfo.php",
      type: "POST",
      dataType: "json",
      data: {
        q: country_name,
      },
      success: function (result) {
        console.log(result);
  
        if (result.status.name == "ok") {
         
        
          $("#txtcurrency").html(currency_name);
          $("#txtsymbol").html(currency_symbol);
          //  $("#txtnative").html(result["data"][0]["nativeName"]);
        }
      },
      error: function (jqXHR, textStatus, errorThrown) {
        //error code..
        alert("error");
      },
    });
  });

     
  //getWeather.php file.....

$(document).ready(function () {
    $.ajax({
      url: "libs/php/weather.php",
      type: "POST",
      dataType: "json",
      data: {
        lat: lat,
        lng: lng
      },
      success: function (result) {
        console.log(result);
  
        if (result.status.name == "ok") {
          $("#txtclouds").html(result["data"]["clouds"]);
          $("#txttemp").html(result["data"]["temperature"]);
          $("#txthum").html(result["data"]["humidity"]);
        }
      },
      error: function (jqXHR, textStatus, errorThrown) {
        //error code..
        alert("error");
      },
    });
  });
  
  //wiki.php file...

$(document).ready(function () {
    $.ajax({
      url: "libs/php/wiki.php",
      type: "POST",
      dataType: "json",
      data: {
        q: country_code,
      },
      success: function (result) {
        console.log(result);
  
        if (result.status.name == "ok") {
          $("#txtlang").html(result["data"]["geonames"][0]["languages"]);
          $("#txtcontinentcode").html(result["data"]["geonames"][0]["continent"]);
          $("#txttop").html(result["data"]["geonames"][0]["toponymName"]);
          $("#txtpopulation").html(result["data"]["geonames"][0]["population"]);
          $("#txtcountrycode").html(result["data"]["geonames"][0]["countryCode"]);
          $("#txtgeoname").html(result["data"]["geonames"][0]["geonameId"]);
          $("#txtcapital").html(result["data"]["geonames"][0]["capital"]);
          $("#txtcountryname").html(result["data"]["geonames"][0]["countryName"]);
        }
      },
      error: function (jqXHR, textStatus, errorThrown) {
        //error code..
        alert("error");
      },
    });
  });

  //getWiki.php file...

$(document).ready(function () {
     $.ajax({
       url: "libs/php/getUrl.php",
       type: "POST",
       dataType: "json",
       data: {
         lat: lat,
         lng: lng
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
   });

//covid data...
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
  
      
        var country_name = data.results[0].components.country;
  
          $.each(result.data, function (keys, value) {
            if (keys === country_name) {
              var index = value[value.length - 1];
              var activecase = index.confirmed - index.deaths - index.recovered;
             // console.log(activecase);
           //  console.log(index.confirmed);
            //  console.log(index.deaths);
            //  console.log(index.recovered);
  
              $("#txtcovidcase").html(activecase);
              $("#txtconcovidcase").html(index.confirmed);
              $("#txtdeacovidcase").html(index.deaths);
              $("#txtreccovidcase").html(index.recovered);
            } 
          
        });
    }
    });
  });




    });
    
};



navigator.geolocation.getCurrentPosition(successfullLookup, console.log);

//User Current location....

//onClick function on recenter button....

function myFunction() {
  mymap.locate({ setView: true, maxZoom: 18 });

  const successfullLookup = (position) => {
    const { latitude, longitude } = position.coords;
    fetch(
      `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=eb18f0f3e5134530a8ac32ba074e937a&language=en&pretty=1`
    )
      .then((response) => response.json())
      .then(function (data) {
        var lat = data.results[0].geometry.lat;
        console.log(lat);
        var lng = data.results[0].geometry.lng;
        console.log(lng);
        var address = data.results[0].formatted;
        console.log(address);
        var currentLocation = L.marker([lat, lng], { icon: myIcon }).addTo(
          mymap
        );
        currentLocation
          .bindPopup("<b>" + address + "</b>", { closeButton: false })
          .openPopup();
      });
  };

  navigator.geolocation.getCurrentPosition(successfullLookup, console.log);
}

//Add Custom Icons....

var myIcon = L.icon({
  iconUrl: "venders/image/pin3.png",
  iconSize: [38, 39],
  iconAnchor: [22, 55],
  popupAnchor: [-3, -55],
});

var myCastleIcon = L.icon({
  iconUrl: "venders/image/travel.png",
  iconSize: [40, 40],
});

var mytouristPlaceIcon = L.icon({
  iconUrl: "venders/image/travel.png",
  iconSize: [40, 40],
});

//Get Lat and Lng from OpenCage and fly to that location....

$("#btnwiki").on("click", function () {
  $.ajax({
    url: "libs/php/getLatLng.php",
    type: "POST",
    dataType: "json",
    data: {
      q: $("#selcountry").val(),
    },
    success: function (result) {
      if (result.status.name == "ok") {
        var lat = result["data"][0]["geometry"]["lat"];

        var lng = result["data"][0]["geometry"]["lng"];

        var countryName = result["data"][0]["components"]["country"];

        function flyToplace() {
          var countryMarker = L.marker([lat, lng], { icon: myIcon }).addTo(
            mymap
          );
          countryMarker.bindPopup("<h6>Hello" + " " + countryName + "!</h6>", {
            closeButton: false,
          });

          mymap.flyTo([lat, lng], 10, {
            duration: 3,
          });
        }
        flyToplace();
      }
    },
    error: function (jqXHR, textStatus, errorThrown) {
      //error code..
      alert("error");
    },
  });
});

//Add marker....
var marker = L.marker([51.50939, -0.11832], { icon: myIcon }).addTo(mymap);
marker.bindPopup("<h6>Hello London!</h6>", { closeButton: false });

var marker2 = L.marker([48.1372222, 11.5755555], { icon: myIcon }).addTo(mymap);
marker2.bindPopup("<h6>Hello Munich!</h6>", { closeButton: false });

var marker3 = L.marker([23.22, 72.68], { icon: myIcon }).addTo(mymap);
marker3.bindPopup("<h6>Hello Gujarat!</h6>", { closeButton: false });

var marker4 = L.marker([52.5002777, 13.39888], { icon: myIcon }).addTo(mymap);
marker4.bindPopup("<h6>Hello Berlin!</h6>", { closeButton: false });

var marker5 = L.marker([50.1447222, 8.7269444], { icon: myIcon }).addTo(mymap);
marker5.bindPopup("<h6>Hello Frankfurt!</h6>", { closeButton: false });

var marker7 = L.marker([48.856578, 2.351828], { icon: myIcon }).addTo(mymap);
marker7.bindPopup("<h6>Hello Paris!</h6>", { closeButton: false });

var marker8 = L.marker([41.383333, 2.166667], { icon: myIcon }).addTo(mymap);
marker8.bindPopup("<h6>Hello Barcelona!</h6>", { closeButton: false });

//marker for gujarat fort...
var guj1 = L.marker([23.2001, 69.2685], { icon: myCastleIcon }).addTo(mymap);
guj1.bindPopup("<h6>Roha Fort!</h6>", { closeButton: false });

var guj2 = L.marker([23.4849, 70.4642], { icon: myCastleIcon }).addTo(mymap);
guj2.bindPopup("<h6>Kanthkot Fort!</h6>", { closeButton: false });

var guj3 = L.marker([22.4647, 70.0697], { icon: myCastleIcon }).addTo(mymap);
guj3.bindPopup("<h6>Lakhota Fort!</h6>", { closeButton: false });

var guj4 = L.marker([24.2291, 69.1897], { icon: myCastleIcon }).addTo(mymap);
guj4.bindPopup("<h6>Vighakot Fort!</h6>", { closeButton: false });

var guj5 = L.marker([22.1544, 71.3308], { icon: myCastleIcon }).addTo(mymap);
guj5.bindPopup("<h6>Hingolgadh Fort!</h6>", { closeButton: false });

var guj6 = L.marker([23.8525, 73.0052], { icon: myCastleIcon }).addTo(mymap);
guj6.bindPopup("<h6>Idar Fort!</h6>", { closeButton: false });

//marker for germany fort...

var berlin1 = L.marker([52.52, 13.29], { icon: myCastleIcon }).addTo(mymap);
berlin1.bindPopup(
  `<div class="popup">
                      <h6>Charlottenburg Palace</h6>
                      <img  class="popup_image" src="venders/image/char.jpg" >
                    </div> `,
  { closeButton: false, offset: L.point(0, -8) }
);

var berlin2 = L.marker([52.51, 13.35], { icon: myCastleIcon }).addTo(mymap);
berlin2.bindPopup(
  `<div class="popup">
                      <h6>Bellevue Palace </h6>
                      <img  class="popup_image" src="venders/image/bell.jpg" >
                    </div> `,
  { closeButton: false, offset: L.point(0, -8) }
);

var berlin3 = L.marker([52.43, 13.11], { icon: myCastleIcon }).addTo(mymap);
berlin3.bindPopup(
  `<div class="popup">
                      <h6>Schloss Pfaueninsel</h6>
                      <img  class="popup_image" src="venders/image/pala.jpg" >
                    </div> `,
  { closeButton: false, offset: L.point(0, -8) }
);

var berlin4 = L.marker([52.57, 13.4], { icon: myCastleIcon }).addTo(mymap);
berlin4.bindPopup(
  `<div class="popup">
                      <h6>Schoenhausen Palace</h6>
                      <img  class="popup_image" src="venders/image/scho.jpg" >
                    </div> `,
  { closeButton: false, offset: L.point(0, -8) }
);

var africa1 = L.marker([-33.9249, 18.4241], { icon: mytouristPlaceIcon }).addTo(
  mymap
);
africa1.bindPopup(
  `<div class="popup">
                      <h6>Cape Town, Western Cape</h6>
                      <img  class="popup_image" src="venders/image/cap.jpg" >
                    </div> `,
  { closeButton: false, offset: L.point(0, -8) }
);

var africa2 = L.marker([-33.9321, 18.8602], { icon: mytouristPlaceIcon }).addTo(
  mymap
);
africa2.bindPopup(
  `<div class="popup">
                      <h6>Stellenbosch, Western Cape</h6>
                      <img  class="popup_image" src="venders/image/ste.jpg" >
                    </div> `,
  { closeButton: false, offset: L.point(0, -8) }
);

var africa3 = L.marker([-29.4667, 29.2667], { icon: mytouristPlaceIcon }).addTo(
  mymap
);
africa3.bindPopup(
  `<div class="popup">
                      <h6> The Drakensberg, KwaZulu-Natal</h6>
                      <img  class="popup_image" src="venders/image/kwa.jpg" >
                    </div> `,
  { closeButton: false, offset: L.point(0, -8) }
);

var africa4 = L.marker([-25.2449, 27.0891], { icon: mytouristPlaceIcon }).addTo(
  mymap
);
africa4.bindPopup(
  `<div class="popup">
                      <h6>Pilanesberg National Park</h6>
                      <img  class="popup_image" src="venders/image/pil.jpg" >
                    </div> `,
  { closeButton: false, offset: L.point(0, -8) }
);

var africa5 = L.marker([29.9792, 31.1342], { icon: mytouristPlaceIcon }).addTo(
  mymap
);
africa5.bindPopup(
  `<div class="popup">
                      <h6>Pyramids of Giza, Egypt</h6>
                      <img  class="popup_image" src="venders/image/pyr.jpg" >
                    </div> `,
  { closeButton: false, offset: L.point(0, -8) }
);

var africa6 = L.marker([36.8065, 10.1815], { icon: mytouristPlaceIcon }).addTo(
  mymap
);
africa6.bindPopup(
  `<div class="popup">
                      <h6>Tunis, Tunisia</h6>
                      <img  class="popup_image" src="venders/image/tun.jpg" >
                    </div> `,
  { closeButton: false, offset: L.point(0, -8) }
);

var africa7 = L.marker([22.346, 31.6156], { icon: mytouristPlaceIcon }).addTo(
  mymap
);
africa7.bindPopup(
  `<div class="popup">
                      <h6>Abu Simbel, Egypt</h6>
                      <img  class="popup_image" src="venders/image/abu.jpg" >
                    </div> `,
  { closeButton: false, offset: L.point(0, -8) }
);

var africa8 = L.marker([35.0391, 0.2909], { icon: mytouristPlaceIcon }).addTo(
  mymap
);
africa8.bindPopup(
  `<div class="popup">
                      <h6>Atlas Mountains, Morocco</h6>
                      <img  class="popup_image" src="venders/image/atl.jpg" >
                    </div> `,
  { closeButton: false, offset: L.point(0, -8) }
);

var africa9 = L.marker([33.8869, 9.5375], { icon: mytouristPlaceIcon }).addTo(
  mymap
);
africa9.bindPopup(
  `<div class="popup">
                      <h6>Sahara Desert, Tunisia</h6>
                      <img  class="popup_image" src="venders/image/des.jpg" >
                    </div> `,
  { closeButton: false, offset: L.point(0, -8) }
);

var russia1 = L.marker([53.5587, 108.165], { icon: mytouristPlaceIcon }).addTo(
  mymap
);
russia1.bindPopup(
  `<div class="popup">
                      <h6> Lake Baikal</h6>
                      <img  class="popup_image" src="venders/image/bai.jpg" >
                    </div> `,
  { closeButton: false, offset: L.point(0, -8) }
);

var russia2 = L.marker([59.9375, 30.308611], {
  icon: mytouristPlaceIcon,
}).addTo(mymap);
russia2.bindPopup(
  `<div class="popup">
                      <h6>St. Peterburg</h6>
                      <img  class="popup_image" src="venders/image/pet.jpg" >
                    </div> `,
  { closeButton: false, offset: L.point(0, -8) }
);

var russia3 = L.marker([43.6028, 39.7342], { icon: mytouristPlaceIcon }).addTo(
  mymap
);
russia3.bindPopup(
  `<div class="popup">
                      <h6>Sochi</h6>
                      <img  class="popup_image" src="venders/image/soc.jpg" >
                    </div> `,
  { closeButton: false, offset: L.point(0, -8) }
);

var russia4 = L.marker([59.8863, 29.9086], { icon: mytouristPlaceIcon }).addTo(
  mymap
);
russia4.bindPopup(
  `<div class="popup">
                      <h6>Peterhof</h6>
                      <img  class="popup_image" src="venders/image/pal.jpg" >
                    </div> `,
  { closeButton: false, offset: L.point(0, -8) }
);

var china1 = L.marker([40.4319, 116.5704], { icon: mytouristPlaceIcon }).addTo(
  mymap
);
china1.bindPopup(
  `<div class="popup">
                      <h6>The Great Wall of China</h6>
                      <img  class="popup_image" src="venders/image/wal.jpg" >
                    </div> `,
  { closeButton: false, offset: L.point(0, -8) }
);

var china2 = L.marker([34.3841, 109.2785], { icon: mytouristPlaceIcon }).addTo(
  mymap
);
china2.bindPopup(
  `<div class="popup">
                      <h6>The Terracotta Army, Xi'an</h6>
                      <img  class="popup_image" src="venders/image/ter.jpg" >
                    </div> `,
  { closeButton: false, offset: L.point(0, -8) }
);

var usa1 = L.marker([43.0962, -79.0377], { icon: mytouristPlaceIcon }).addTo(
  mymap
);
usa1.bindPopup(
  `<div class="popup">
                      <h6>Niagara Falls</h6>
                      <img  class="popup_image" src="venders/image/nia.jpg" >
                    </div> `,
  { closeButton: false, offset: L.point(0, -8) }
);

var usa2 = L.marker([40.6892, -74.0445], { icon: mytouristPlaceIcon }).addTo(
  mymap
);
usa2.bindPopup(
  `<div class="popup">
                      <h6>Statue of Liberty</h6>
                      <img  class="popup_image" src="venders/image/sta.jpg" >
                    </div> `,
  { closeButton: false, offset: L.point(0, -8) }
);

var usa3 = L.marker([38.8977, -77.0365], { icon: mytouristPlaceIcon }).addTo(
  mymap
);
usa3.bindPopup(
  `<div class="popup">
                      <h6>White House</h6>
                      <img  class="popup_image" src="venders/image/whi.jpg" >
                    </div> `,
  { closeButton: false, offset: L.point(0, -8) }
);

var usa4 = L.marker([36.1147, -115.1728], { icon: mytouristPlaceIcon }).addTo(
  mymap
);
usa4.bindPopup(
  `<div class="popup">
                      <h6> Las Vegas Strip</h6>
                      <img  class="popup_image" src="venders/image/las.jpg" >
                    </div> `,
  { closeButton: false, offset: L.point(0, -8) }
);

var usa5 = L.marker([37.8199, -122.4783], { icon: mytouristPlaceIcon }).addTo(
  mymap
);
usa5.bindPopup(
  `<div class="popup">
                      <h6> Golden Gate Bridge</h6>
                      <img  class="popup_image" src="venders/image/glo.jpg" >
                    </div> `,
  { closeButton: false, offset: L.point(0, -8) }
);

var usa6 = L.marker([40.758, -73.9855], { icon: mytouristPlaceIcon }).addTo(
  mymap
);
usa6.bindPopup(
  `<div class="popup">
                      <h6>Times Square</h6>
                      <img  class="popup_image" src="venders/image/tim.jpg" >
                    </div> `,
  { closeButton: false, offset: L.point(0, -8) }
);

var usa7 = L.marker([44.428, -110.5885], { icon: mytouristPlaceIcon }).addTo(
  mymap
);
usa7.bindPopup(
  `<div class="popup">
                      <h6>Yellowstone National Park</h6>
                      <img  class="popup_image" src="venders/image/yel.jpg" >
                    </div> `,
  { closeButton: false, offset: L.point(0, -8) }
);

var canada1 = L.marker([51.4968, -115.9281], {
  icon: mytouristPlaceIcon,
}).addTo(mymap);
canada1.bindPopup(
  `<div class="popup">
                      <h6>Banff National Park</h6>
                      <img  class="popup_image" src="venders/image/ban.jpg" >
                    </div> `,
  { closeButton: false, offset: L.point(0, -8) }
);

var canada2 = L.marker([43.6426, -79.3871], { icon: mytouristPlaceIcon }).addTo(
  mymap
);
canada2.bindPopup(
  `<div class="popup">
                      <h6>Toronto's CN Tower</h6>
                      <img  class="popup_image" src="venders/image/cn.jpg" >
                    </div> `,
  { closeButton: false, offset: L.point(0, -8) }
);

var canada3 = L.marker([46.8122, -71.2065], { icon: mytouristPlaceIcon }).addTo(
  mymap
);
canada3.bindPopup(
  `<div class="popup">
                      <h6>Old Quebec</h6>
                      <img  class="popup_image" src="venders/image/bec.jpg" >
                    </div> `,
  { closeButton: false, offset: L.point(0, -8) }
);

var brazil1 = L.marker([-22.9847, -43.1986], {
  icon: mytouristPlaceIcon,
}).addTo(mymap);
brazil1.bindPopup(
  `<div class="popup">
                      <h6> Ipanema</h6>
                      <img  class="popup_image" src="venders/image/ipa.jpg" >
                    </div> `,
  { closeButton: false, offset: L.point(0, -8) }
);

var brazil2 = L.marker([-3.4653, -62.2169], { icon: mytouristPlaceIcon }).addTo(
  mymap
);
brazil2.bindPopup(
  `<div class="popup">
                      <h6>Amazon Rain Forests </h6>
                      <img  class="popup_image" src="venders/image/ama.jpg" >
                    </div> `,
  { closeButton: false, offset: L.point(0, -8) }
);

var brazil3 = L.marker([-19.9167, -43.9345], {
  icon: mytouristPlaceIcon,
}).addTo(mymap);
brazil3.bindPopup(
  `<div class="popup">
                      <h6>Belo Horizonte</h6>
                      <img  class="popup_image" src="venders/image/bel.jpg" >
                    </div> `,
  { closeButton: false, offset: L.point(0, -8) }
);

var peru = L.marker([-15.9254, -69.3354], { icon: mytouristPlaceIcon }).addTo(
  mymap
);
peru.bindPopup(
  `<div class="popup">
                      <h6>Lake Titicaca</h6>
                      <img  class="popup_image" src="venders/image/tit.jpg" >
                    </div> `,
  { closeButton: false, offset: L.point(0, -8) }
);

var argentina1 = L.marker([-50.4967, -73.1377], {
  icon: mytouristPlaceIcon,
}).addTo(mymap);
argentina1.bindPopup(
  `<div class="popup">
                      <h6>Perito Moreno Glacier</h6>
                      <img  class="popup_image" src="venders/image/gla.jpg" >
                    </div> `,
  { closeButton: false, offset: L.point(0, -8) }
);

var spain = L.marker([37.8742, -4.7794], { icon: mytouristPlaceIcon }).addTo(
  mymap
);
spain.bindPopup(
  `<div class="popup">
                      <h6>Historic Córdoba Cathedral</h6>
                      <img  class="popup_image" src="venders/image/cor.jpg" >
                    </div> `,
  { closeButton: false, offset: L.point(0, -8) }
);

var place1 = L.marker([50.6955, -2.4746], { icon: mytouristPlaceIcon }).addTo(
  mymap
);
place1.bindPopup(
  `<div class="popup">
  <h6>Maiden Castle</h6>
  <img  class="popup_image" src="venders/image/maiden.jpg" >
                    </div> `,
  { closeButton: false, offset: L.point(0, -8) }
);

var place2 = L.marker([52.8712, -3.0512], { icon: mytouristPlaceIcon }).addTo(
  mymap
);
place2.bindPopup(
  `<div class="popup">
  <h6>Old Oswestry</h6>
                              <img  class="popup_image" src="venders/image/oswestry.jpg" >
                    </div> `,
  { closeButton: false, offset: L.point(0, -8) }
);

var place3 = L.marker([55.96310043, -2.67170523], {
  icon: mytouristPlaceIcon,
}).addTo(mymap);
place3.bindPopup(
  `<div class="popup">
  <h6>Traprain Law</h6>
  <img  class="popup_image" src="venders/image/traprain.jpg" > </div>`,
  { closeButton: false, offset: L.point(0, -8) }
);

var place4 = L.marker([50.91, -2.22], { icon: mytouristPlaceIcon }).addTo(
  mymap
);
place4.bindPopup(
  `<div class="popup">
  <h6>Hambledon Hill</h6>
  <img  class="popup_image" src="venders/image/hamb.jpg" >
                    </div> `,
  { closeButton: false, offset: L.point(0, -8) }
);

var place5 = L.marker([51.024058, -2.53178], {
  icon: mytouristPlaceIcon,
}).addTo(mymap);
place5.bindPopup(
  `<div class="popup">
  <h6>Cadbury Castle</h6>
                            <img  class="popup_image" src="venders/image/cadb.jpg" >
                    </div> `,
  { closeButton: false, offset: L.point(0, -8) }
);

var place6 = L.marker([51.209513, -2.147398], {
  icon: mytouristPlaceIcon,
}).addTo(mymap);
place6.bindPopup(
  `<div class="popup">
  <h6>Battlesbury Camp</h6>
                            <img  class="popup_image" src="venders/image/batt.jpg" >
                    </div> `,
  { closeButton: false, offset: L.point(0, -8) }
);

var place7 = L.marker([52.0582, -2.352], { icon: mytouristPlaceIcon }).addTo(
  mymap
);
place7.bindPopup(
  `<div class="popup">
  <h6>The British Camp</h6>
                            <img  class="popup_image" src="venders/image/brit.jpg" >
                    </div> `,
  { closeButton: false, offset: L.point(0, -8) }
);

var place8 = L.marker([50.86057, -0.382867], {
  icon: mytouristPlaceIcon,
}).addTo(mymap);
place8.bindPopup(
  `<div class="popup">
  <h6>Cissbury Ring</h6>
  <img  class="popup_image" src="venders/image/ciss.jpg" >
                    </div> `,
  { closeButton: false, offset: L.point(0, -8) }
);

var touristPlace1 = L.marker([50.6304, -1.9904], {
  icon: mytouristPlaceIcon,
}).addTo(mymap);
touristPlace1.bindPopup(
  `<div class="popup">
  <h6>Nine Barrow Down</h6>
  <img  class="popup_image" src="venders/image/nine.jpg" >
                    </div> `,
  { closeButton: false, offset: L.point(0, -8) }
);

var touristPlace2 = L.marker([50.621, -2.2801], {
  icon: mytouristPlaceIcon,
}).addTo(mymap);
touristPlace2.bindPopup(
  `<div class="popup">
  <h6>Durdle Door</h6>
                        <img  class="popup_image" src="venders/image/durd.jpg" >
                    </div> `,
  { closeButton: false, offset: L.point(0, -8) }
);

var touristPlace3 = L.marker([50.6908, -1.9865], {
  icon: mytouristPlaceIcon,
}).addTo(mymap);
touristPlace3.bindPopup(
  `<div class="popup">
  <h6>Poole Harbour</h6>
  <img  class="popup_image" src="venders/image/pool.jpg" >
                    </div> `,
  { closeButton: false, offset: L.point(0, -8) }
);

var touristPlace4 = L.marker([50.5475, -2.4343], {
  icon: mytouristPlaceIcon,
}).addTo(mymap);
touristPlace4.bindPopup(
  `<div class="popup">
  <h6>Isle Of Portland</h6>
  <img  class="popup_image" src="venders/image/isle.jpg" >
                    </div> `,
  { closeButton: false, offset: L.point(0, -8) }
);

var touristPlace5 = L.marker([50.6429, -1.9225], {
  icon: mytouristPlaceIcon,
}).addTo(mymap);
touristPlace5.bindPopup(
  `<div class="popup">
  <h6>Old Harry Rocks</h6>
  <img  class="popup_image" src="venders/image/old.jpg" >
                    </div> `,
  { closeButton: false, offset: L.point(0, -8) }
);

var touristPlace6 = L.marker([52.9704, -3.0878], {
  icon: mytouristPlaceIcon,
}).addTo(mymap);
touristPlace6.bindPopup(
  `<div class="popup">
  <h6>Pontcysyllte Aqueduct</h6>
                        <img  class="popup_image" src="venders/image/pont.jpg" >
                    </div> `,
  { closeButton: false, offset: L.point(0, -8) }
);

var touristPlace7 = L.marker([52.9791, -3.1589], {
  icon: mytouristPlaceIcon,
}).addTo(mymap);
touristPlace7.bindPopup(
  `<div class="popup">
  <h6>Castell Dinas Bran</h6>
  <img  class="popup_image" src="venders/image/cast.jpg" >
                    </div> `,
  { closeButton: false, offset: L.point(0, -8) }
);

var touristPlace8 = L.marker([52.9813, -3.1998], {
  icon: mytouristPlaceIcon,
}).addTo(mymap);
touristPlace8.bindPopup(
  `<div class="popup">
  <h6>Horseshoe Falls</h6>
                        <img  class="popup_image" src="venders/image/hors.jpg" >
                    </div> `,
  { closeButton: false, offset: L.point(0, -8) }
);

var touristPlace9 = L.marker([51.1444, -2.6986], {
  icon: mytouristPlaceIcon,
}).addTo(mymap);
touristPlace9.bindPopup(
  `<div class="popup">
  <h6>Glastonbury Tor</h6>
  <img  class="popup_image" src="venders/image/glas.jpg" >
                    </div> `,
  { closeButton: false, offset: L.point(0, -8) }
);

var touristPlace10 = L.marker([51.1051, -2.3179], {
  icon: mytouristPlaceIcon,
}).addTo(mymap);
touristPlace10.bindPopup(
  `<div class="popup">
  <h6>Stourhead</h6>
  <img  class="popup_image" src="venders/image/stou.jpg" >
                    </div> `,
  { closeButton: false, offset: L.point(0, -8) }
);

var touristPlace11 = L.marker([51.1461, -2.7153], {
  icon: mytouristPlaceIcon,
}).addTo(mymap);
touristPlace11.bindPopup(
  `<div class="popup">
  <h6>Glastonbury Abbey</h6>
  <img  class="popup_image" src="venders/image/abbe.jpg" >
                    </div> `,
  { closeButton: false, offset: L.point(0, -8) }
);

var touristPlace12 = L.marker([52.0491, -2.347], {
  icon: mytouristPlaceIcon,
}).addTo(mymap);
touristPlace12.bindPopup(
  `<div class="popup">
  <h6>Swinyard Hill</h6>
  <img  class="popup_image" src="venders/image/swin.jpg" >
                    </div> `,
  { closeButton: false, offset: L.point(0, -8) }
);

var touristPlace13 = L.marker([52.0612, -2.3369], {
  icon: mytouristPlaceIcon,
}).addTo(mymap);
touristPlace13.bindPopup(
  `<div class="popup">
  <h6>Malvern Court & Gardens</h6>
  <img  class="popup_image" src="venders/image/malv.jpg" >
                    </div> `,
  { closeButton: false, offset: L.point(0, -8) }
);

var touristPlace14 = L.marker([51.0608, -1.4104], {
  icon: mytouristPlaceIcon,
}).addTo(mymap);
touristPlace14.bindPopup(
  `<div class="popup">
  <h6>Farley Mount Country Park</h6>
  <img  class="popup_image" src="venders/image/farl.jpg" >
                    </div> `,
  { closeButton: false, offset: L.point(0, -8) }
);

var touristPlace15 = L.marker([53.5587, 108.165], {
  icon: mytouristPlaceIcon,
}).addTo(mymap);
touristPlace15.bindPopup(
  `<div class="popup">
  <h6>Lake Baikal</h6>
                        <img  class="popup_image" src="venders/image/lak.jpg" >
                    </div> `,
  { closeButton: false, offset: L.point(0, -8) }
);

var touristPlace16 = L.marker([55.7558, 37.6173], {
  icon: mytouristPlaceIcon,
}).addTo(mymap);
touristPlace16.bindPopup(
  `<div class="popup">
  <h6>Moscow</h6>
                        <img  class="popup_image" src="venders/image/mas.jpg" >
                    </div> `,
  { closeButton: false, offset: L.point(0, -8) }
);

//marker for fort.....
var fort1 = L.marker([40.95, -4.1325], { icon: myCastleIcon }).addTo(mymap);
fort1.bindPopup(
  `<div class="popup">
                      <h6>Alcázar of Segovia, Spain</h6>
                      <img  class="popup_image" src="venders/image/alc.jpg" >
                    </div> `,
  { closeButton: false, offset: L.point(0, -8) }
);

var fort2 = L.marker([40.73, 13.965], { icon: myCastleIcon }).addTo(mymap);
fort2.bindPopup(
  `<div class="popup">
                      <h6>Aragonese Castle, Italy</h6>
                      <img  class="popup_image" src="venders/image/ara.jpg" >
                    </div> `,
  { closeButton: false, offset: L.point(0, -8) }
);

var fort3 = L.marker([47.6161, 1.5172], { icon: myCastleIcon }).addTo(mymap);
fort3.bindPopup(
  `<div class="popup">
                      <h6>Château de Chambord, France</h6>
                      <img  class="popup_image" src="venders/image/cha.jpg" >
                    </div> `,
  { closeButton: false, offset: L.point(0, -8) }
);

var fort4 = L.marker([45.4337, 12.4304], { icon: myCastleIcon }).addTo(mymap);
fort4.bindPopup(
  `<div class="popup">
                      <h6>Doge’s Palace, Italy</h6>
                      <img  class="popup_image" src="venders/image/dog.jpg" >
                    </div> `,
  { closeButton: false, offset: L.point(0, -8) }
);

var fort5 = L.marker([53.3429, 6.2674], { icon: myCastleIcon }).addTo(mymap);
fort5.bindPopup(
  `<div class="popup">
                      <h6>Dublin Castle, Ireland</h6>
                      <img  class="popup_image" src="venders/image/dub.jpg" >
                    </div> `,
  { closeButton: false, offset: L.point(0, -8) }
);

var fort6 = L.marker([59.9404, 30.3138], { icon: myCastleIcon }).addTo(mymap);
fort6.bindPopup(
  `<div class="popup">
                      <h6>Winter Palace, Russia</h6>
                      <img  class="popup_image" src="venders/image/win.jpg" >
                    </div> `,
  { closeButton: false, offset: L.point(0, -8) }
);

var fort7 = L.marker([38.7507, -9.2591], { icon: myCastleIcon }).addTo(mymap);
fort7.bindPopup(
  `<div class="popup">
                      <h6>Queluz National Palace, Portugal</h6>
                      <img  class="popup_image" src="venders/image/que.jpg" >
                    </div> `,
  { closeButton: false, offset: L.point(0, -8) }
);

var fort8 = L.marker([37.3831, -5.9902], { icon: myCastleIcon }).addTo(mymap);
fort8.bindPopup(
  `<div class="popup">
                      <h6> Real Alcazar of Seville, Spain </h6>
                      <img  class="popup_image" src="venders/image/rea.jpg" >
                    </div> `,
  { closeButton: false, offset: L.point(0, -8) }
);

var fort9 = L.marker([47.4962, 19.0396], { icon: myCastleIcon }).addTo(mymap);
fort9.bindPopup(
  `<div class="popup">
                      <h6> Buda Castle, Hungary</h6>
                      <img  class="popup_image" src="venders/image/bud.jpg" >
                    </div> `,
  { closeButton: false, offset: L.point(0, -8) }
);

var fort10 = L.marker([59.3217, 17.8863], { icon: myCastleIcon }).addTo(mymap);
fort10.bindPopup(
  `<div class="popup">
                      <h6> Drottningholm Castle, Sweden</h6>
                      <img  class="popup_image" src="venders/image/dro.jpg" >
                    </div> `,
  { closeButton: false, offset: L.point(0, -8) }
);

// Add circle...for population....
var CLayer = L.circle([51.94087861255871, -0.7525634765625], {
  radius: 10000,
  color: "#ff4500",
});
CLayer.addTo(mymap).bindPopup(
  "<h6>Density of population in United Kingdom is 275 persons per sq Km.</h6>",
  { closeButton: false }
);

var CLayer1 = L.circle([22.755920681486405, 78.72802734375], {
  radius: 10000,
  color: "#ff4500",
});
CLayer1.addTo(mymap).bindPopup(
  "<h6>Density of population in India is 382 persons per sq Km.</h6>",
  { closeButton: false }
);

var CLayer2 = L.circle([49.32512199104001, 10.37109375], {
  radius: 10000,
  color: "#ff4500",
});
CLayer2.addTo(mymap).bindPopup(
  "<h6>Density of population in Germany is 233 persons per sq Km.</h6>",
  { closeButton: false }
);

var CLayer3 = L.circle([41.60722821271717, -5.888671875], {
  radius: 10000,
  color: "#ff4500",
});
CLayer3.addTo(mymap).bindPopup(
  "<h6>Density of population in Spain is 93.67 persons per sq Km.</h6>",
  { closeButton: false }
);

var CLayer4 = L.circle([41.409775832009565, 14.666748046875], {
  radius: 10000,
  color: "#ff4500",
});
CLayer4.addTo(mymap).bindPopup(
  "<h6>Density of population in Italy is 205.45 persons per sq Km.</h6>",
  { closeButton: false }
);

var CLayer5 = L.circle([48.472921272487824, 5.537109374999999], {
  radius: 10000,
  color: "#ff4500",
});
CLayer5.addTo(mymap).bindPopup(
  "<h6>Density of population in France is 122.34 persons per sq Km.</h6>",
  { closeButton: false }
);

var CLayer6 = L.circle([56.65622649350222, -108.369140625], {
  radius: 10000,
  color: "#ff4500",
});
CLayer6.addTo(mymap).bindPopup(
  "<h6>Density of population in Canada is 4 persons per sq Km.</h6>",
  { closeButton: false }
);

var CLayer7 = L.circle([-45.259422036351694, 169.4091796875], {
  radius: 10000,
  color: "#ff4500",
});
CLayer7.addTo(mymap).bindPopup(
  "<h6>Density of population in New Zealand is 18 persons per sq Km.</h6>",
  { closeButton: false }
);

var CLayer8 = L.circle([-27.449790329784214, 145.458984375], {
  radius: 10000,
  color: "#ff4500",
});
CLayer8.addTo(mymap).bindPopup(
  "<h6>Density of population in Australia is 3.3 persons per sq Km.</h6>",
  { closeButton: false }
);

//Add polygon....
var coord1 = [
  [
    [40.32246702124231, -3.703765869140625],
    [40.40931350359072, -3.5321044921874996],
    [40.48664852056083, -3.6309814453125],
    [40.491870649809165, -3.742218017578125],
    [40.40722213305287, -3.834228515625],
    [40.32246702124231, -3.703765869140625],
  ],
];
var polygon1 = L.polygon(coord1)
  .bindPopup("<h6><em>Maiden</em>, The Capital of Spain!</h6>", {
    closeButton: false,
  })
  .addTo(mymap);

var coord2 = [
  [
    [52.13348804077147, 12.83203125],
    [52.482780222078226, 14.084472656249998],
    [53.08082737207479, 13.29345703125],
    [52.9883372533954, 11.79931640625],
    [52.496159531097106, 11.79931640625],
    [52.13348804077147, 12.83203125],
  ],
];
var polygon2 = L.polygon(coord2)
  .bindPopup("<h6><em>Berlin</em>, The Capital of Germany!</h6>", {
    closeButton: false,
  })
  .addTo(mymap);

var coord3 = [
  [
    [-35.3190471425283, 149.09133911132812],
    [-35.31008240129421, 149.1352844238281],
    [-35.28822668202956, 149.1359710693359],
    [-35.280940130659246, 149.08721923828125],
    [-35.30167705397599, 149.06455993652344],
    [-35.3190471425283, 149.09133911132812],
  ],
];
var polygon3 = L.polygon(coord3)
  .bindPopup("<h6><em>Canberra</em>, The Capital of Australia!</h6>", {
    closeButton: false,
  })
  .addTo(mymap);

var coord4 = [
  [
    [-41.31494988250964, 174.649658203125],
    [-41.45919537950705, 175.10009765625],
    [-41.36444153054222, 175.3692626953125],
    [-41.10832999732831, 175.23193359375],
    [-41.11660732012895, 174.74853515625],
    [-41.31494988250964, 174.649658203125, -41.31494988250964],
  ],
];
var polygon4 = L.polygon(coord4)
  .bindPopup("<h6><em>Wellington</em>, The Capital of New Zealand!</h6>", {
    closeButton: false,
  })
  .addTo(mymap);

var coord5 = [
  [
    [51.51216124955515, -0.63720703125],
    [51.303145259199056, -0.6042480468749999],
    [51.23440735163459, 0.0439453125],
    [51.29971080556154, 0.5438232421874999],
    [51.635066908847826, 0.4449462890625],
    [51.76104049272952, -0.296630859375],
    [51.51216124955515, -0.63720703125],
  ],
];
var polygon5 = L.polygon(coord5)
  .bindPopup("<h6><em>London</em>, The Capital of United Kingdom!</h6>", {
    closeButton: false,
  })
  .addTo(mymap);

var coord6 = [
  [
    [48.87555444355432, 2.275543212890625],
    [48.83579746243093, 2.2659301757812496],
    [48.817715668996435, 2.3455810546875],
    [48.838961105496054, 2.415618896484375],
    [48.89722676235673, 2.3957061767578125],
    [48.90128927649513, 2.327728271484375],
    [48.87555444355432, 2.275543212890625],
  ],
];
var polygon6 = L.polygon(coord6)
  .bindPopup("<h6><em>Paris</em>, The Capital of France!</h6>", {
    closeButton: false,
  })
  .addTo(mymap);

var coord7 = [
  [
    [41.90023276842022, 12.38433837890625],
    [41.81021999190292, 12.41180419921875],
    [41.81636125072054, 12.5848388671875],
    [41.94314874732696, 12.60406494140625],
    [41.98603585974727, 12.450256347656248],
    [41.90023276842022, 12.38433837890625],
  ],
];
var polygon7 = L.polygon(coord7)
  .bindPopup("<h6><em>Rome</em>, The Capital of Italy!</h6>", {
    closeButton: false,
  })
  .addTo(mymap);

var coord8 = [
  [
    [45.40230699238177, -75.87432861328125],
    [45.29034662473613, -75.750732421875],
    [45.33284041773058, -75.4925537109375],
    [45.49672163945861, -75.52001953125],
    [45.51404592560424, -75.79193115234374],
    [45.40230699238177, -75.87432861328125],
  ],
];
var polygon8 = L.polygon(coord8)
  .bindPopup("<h6><em>Ottawa</em>, The Capital of Canada!</h6>", {
    closeButton: false,
  })
  .addTo(mymap);

//using polylines....
var polylines = L.polyline(
  [
    [24.2291, 69.1897],
    [23.2001, 69.2685],
  ],
  { color: "#ff4500" }
)
  .bindPopup("<h6>129 miles</h6>", { closeButton: false })
  .addTo(mymap);
var polylines1 = L.polyline(
  [
    [23.2001, 69.2685],
    [23.4849, 70.4642],
  ],
  { color: "#ff4500" }
)
  .bindPopup("<h6>89 miles</h6>", { closeButton: false })
  .addTo(mymap);
var polylines2 = L.polyline(
  [
    [23.4849, 70.4642],
    [22.4647, 70.0697],
  ],
  { color: "#ff4500" }
)
  .bindPopup("<h6>115 miles</h6>", { closeButton: false })
  .addTo(mymap);
var polylines3 = L.polyline(
  [
    [22.4647, 70.0697],
    [22.1544, 71.3308],
  ],
  { color: "#ff4500" }
)
  .bindPopup("<h6>100 miles</h6>", { closeButton: false })
  .addTo(mymap);
var polylines4 = L.polyline(
  [
    [22.1544, 71.3308],
    [23.8525, 73.0052],
  ],
  { color: "#ff4500" }
)
  .bindPopup("<h6>125 miles</h6>", { closeButton: false })
  .addTo(mymap);

//add geojson data for lines and tourist place......

var mylines = [
  {
    type: "Feature",
    properties: {
      name: "Hambledon Hill",
      popupContent:
        "Distance between Hambledon Hill Castle and Nine Barrow Down is 35.5 KM. ",
    },
    geometry: {
      type: "LineString",
      coordinates: [
        [-2.22, 50.91],
        [-2.0, 50.63],
      ],
    },
  },
  {
    type: "Feature",
    properties: {
      name: "Maiden Castle",
      popupContent: "Distance between Maiden Castle and Durdle Door is 14 mi. ",
    },
    geometry: {
      type: "LineString",
      coordinates: [
        [-2.4746, 50.6955],
        [-2.2801, 50.621],
      ],
    },
  },
  {
    type: "Feature",
    properties: {
      name: "Maiden Castle",
      popupContent:
        "Distance between Maiden Castle and PooleHarbour is 32 mi. ",
    },
    geometry: {
      type: "LineString",
      coordinates: [
        [-2.4746, 50.6955],
        [-1.9865, 50.6908],
      ],
    },
  },
  {
    type: "Feature",
    properties: {
      name: "Maiden Castle",
      popupContent:
        "Distance between Maiden Castle and Isle Of Portland is 15 mi. ",
    },
    geometry: {
      type: "LineString",
      coordinates: [
        [-2.4746, 50.6955],
        [-2.4343, 50.5475],
      ],
    },
  },
  {
    type: "Feature",
    properties: {
      name: "Maiden Castle",
      popupContent:
        "Distance between Maiden Castle and Old Harry Rocks is 28 mi. ",
    },
    geometry: {
      type: "LineString",
      coordinates: [
        [-2.4746, 50.6955],
        [-1.9225, 50.6429],
      ],
    },
  },
  {
    type: "Feature",
    properties: {
      name: "Old Oswestry",
      popupContent:
        "Distance between Old Oswestry Castle and Pontcysyllte Aqueduct is 9 mi. ",
    },
    geometry: {
      type: "LineString",
      coordinates: [
        [-3.0512, 52.8712],
        [-3.0878, 52.9704],
      ],
    },
  },
  {
    type: "Feature",
    properties: {
      name: "Old Oswestry",
      popupContent:
        "Distance between Old Oswestry Castle and Castell Dinas Bran is 14 mi. ",
    },
    geometry: {
      type: "LineString",
      coordinates: [
        [-3.0512, 52.8712],
        [-3.1589, 52.9791],
      ],
    },
  },
  {
    type: "Feature",
    properties: {
      name: "Old Oswestry",
      popupContent:
        "Distance between Old Oswestry Castle and Horseshoe Falls is 15 mi. ",
    },
    geometry: {
      type: "LineString",
      coordinates: [
        [-3.0512, 52.8712],
        [-3.1998, 52.9813],
      ],
    },
  },
  {
    type: "Feature",
    properties: {
      name: "Cadbury Castle",
      popupContent:
        "Distance between Cadbury Castle and Glastonbury Tor is 18 mi. ",
    },
    geometry: {
      type: "LineString",
      coordinates: [
        [-2.53178, 51.024058],
        [-2.6986, 51.1444],
      ],
    },
  },
  {
    type: "Feature",
    properties: {
      name: "Cadbury Castle",
      popupContent: "Distance between Cadbury Castle and Stourhead is 14 mi. ",
    },
    geometry: {
      type: "LineString",
      coordinates: [
        [-2.53178, 51.024058],
        [-2.3179, 51.1051],
      ],
    },
  },
  {
    type: "Feature",
    properties: {
      name: "Cadbury Castle",
      popupContent:
        "Distance between Cadbury Castle and Glastonbury Abbey is 17 mi. ",
    },
    geometry: {
      type: "LineString",
      coordinates: [
        [-2.53178, 51.024058],
        [-2.7153, 51.1461],
      ],
    },
  },
  {
    type: "Feature",
    properties: {
      name: "The British Camp",
      popupContent:
        "Distance between The British Camp Castle and Swinyard Hill is 6 mi. ",
    },
    geometry: {
      type: "LineString",
      coordinates: [
        [-2.352, 52.0582],
        [-2.347, 52.0491],
      ],
    },
  },
  {
    type: "Feature",
    properties: {
      name: "The British Camp",
      popupContent:
        "Distance between The British Camp Castle and Little Malvern Court & Garden is 2 mi. ",
    },
    geometry: {
      type: "LineString",
      coordinates: [
        [-2.352, 52.0582],
        [-2.3369, 52.0612],
      ],
    },
  },
  {
    type: "Feature",
    properties: {
      name: "Danebury Castle",
      popupContent:
        "Distance between Danebury Castle and Farley Mount Court Park is 10 mi. ",
    },
    geometry: {
      type: "LineString",
      coordinates: [
        [-2.352, 52.0582],
        [-1.4104, 51.0608],
      ],
    },
  },
];

var myStyle = {
  color: "#ff7800",
  weight: 5,
  opacity: 0.65,
};

//add popups for tourist place.....

//add popups for lines....
function oneachFeature(feature, layer) {
  // does this feature have a property named popupContent?
  if (feature.properties && feature.properties.popupContent) {
    layer.bindPopup(feature.properties.popupContent, {
      closeButton: false,
      offset: L.point(0, 0),
    });
  }
}

// add lines.......
var line = new L.geoJSON(mylines, {
  style: myStyle,
  onEachFeature: oneachFeature,
}).addTo(mymap);

//add tourist place marker.....

//country boundry....

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
  console.log(dropdownItems);

  L.geoJSON(geoJSON, {
    filter: function (feature, layer) {
      if (feature.properties.name === dropdownItems) {
        return feature.geometry.coordinates;
      }
    },
  }).addTo(mymap);
});

//World population...

$(document).ready(function () {
  // $('#btnwiki').on("click", function() {

  $.ajax({
    url: "libs/php/getpopulation.php",
    type: "POST",
    dataType: "json",
    data: {
      // q: $('#selcountry').val()
    },
    success: function (result) {
      // console.log(result);

      for (let i = 0; i < result.data.length; i++) {
        var Lat = result["data"][i]["latlng"][0];
        var Lng = result["data"][i]["latlng"][1];
        //  console.log(Lat);
        //  console.log(Lng);

        var population = result["data"][i]["population"];
        // console.log(population);

        var name = result["data"][i]["name"];
        //console.log(name);

        if (Lat === undefined && Lng === undefined) {
          continue;
        }

        var CLayer0 = L.circle([Lat, Lng], {
          radius: 10000,
          color: "red",
        });
        CLayer0.addTo(mymap).bindPopup("<h6>" + name + "<br>" + population + "</h6>",{
          closeButton: false,
          offset: L.point(0, 0)
        });
      }
    },
    error: function (jqXHR, textStatus, errorThrown) {
      //error code..
      alert("error");
    },
  });
});

//});

var basemaps = {
  Places: L.tileLayer.wms("http://ows.mundialis.de/services/service?", {
    layers: "OSM-WMS",
  }),

  "Topography, then places": L.tileLayer.wms(
    "http://ows.mundialis.de/services/service?",
    {
      layers: "TOPO-WMS,OSM-Overlay-WMS",
    }
  ),

  "Places, then topography": L.tileLayer.wms(
    "http://ows.mundialis.de/services/service?",
    {
      layers: "OSM-Overlay-WMS,TOPO-WMS",
    }
  ),
};

L.control.layers(basemaps).addTo(mymap);

//custering....

var markers = L.markerClusterGroup({ animateAddingMarkers: true });
var markersList = [
  marker,
  marker4,
  marker2,
  marker3,
  marker5,
  marker7,
  marker8,
  guj1,
  guj2,
  guj3,
  guj4,
  guj5,
  guj6,
  berlin1,
  berlin2,
  berlin3,
  berlin4,
  fort1,
  fort2,
  fort3,
  fort4,
  fort5,
  fort6,
  fort7,
  fort8,
  fort9,
  fort10,
  africa1,
  africa2,
  africa3,
  africa4,
  africa5,
  africa6,
  africa7,
  africa8,
  africa9,
  russia1,
  russia2,
  russia3,
  russia4,
  china1,
  china2,
  usa1,
  usa2,
  usa3,
  usa4,
  usa5,
  usa6,
  usa7,
  canada1,
  canada2,
  canada3,
  brazil1,
  brazil2,
  brazil3,
  peru,
  argentina1,
  spain,
  place1,
  place2,
  place3,
  place4,
  place5,
  place6,
  place7,
  place8,
  touristPlace1,
  touristPlace2,
  touristPlace3,
  touristPlace4,
  touristPlace5,
  touristPlace6,
  touristPlace7,
  touristPlace8,
  touristPlace9,
  touristPlace10,
  touristPlace11,
  touristPlace12,
  touristPlace13,
  touristPlace14,
  touristPlace15,
  touristPlace16
];

mymap.addLayer(markers);

for (var i = 0; i < markersList.length; i++) {
  markers.addLayer(markersList[i]);
};
