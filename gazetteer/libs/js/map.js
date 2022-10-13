//map....

var mymap = L.map("mapid").setView([54.75844, -2.69531], 13).fitWorld();

var tiles = L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 18,

  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
});
tiles.addTo(mymap);

//leaflet easy button...

var easybutton = L.easyButton(
  '<img src="venders/image/info.png">',
  function (e) {
    $("#info").modal("show");
  }
).addTo(mymap);

var easybutton1 = L.easyButton(
  '<img src="venders/image/virus.png">',
  function (e) {
    $("#covid").modal("show");
  }
).addTo(mymap);

var easybutton2 = L.easyButton(
  '<img src="venders/image/cloudy1.png">',
  function (e) {
    $("#weather").modal("show");
  }
).addTo(mymap);

//User Current Location....

mymap.locate({ setView: true, maxZoom: 5 });

const successfullLookup = (position) => {
  const { latitude, longitude } = position.coords;

  //openCagedata.php file.....
  $(document).ready(function () {
    $.ajax({
      url: "libs/php/openCagedata.php",
      type: "POST",
      dataType: "json",
      data: {
        q: `${latitude}+${longitude}`,
      },
      success: function (result) {
        var lat = result.data.results[0].geometry.lat;
        
        var lng = result.data.results[0].geometry.lng;
        
        var address = result.data.results[0].formatted;
        
        var country_name = result.data.results[0].components.country;
        
        var encoded_countryName = encodeURIComponent(country_name.trim());

        var country_code = result.data.results[0].components.country_code;
        
        var currency_name = result.data.results[0].annotations.currency.name;
        
        var currency_symbol =
          result.data.results[0].annotations.currency.symbol;

        //update map with border..
        $(document).ready(function () {
          $.ajax({
            url: "libs/php/getBorder.php",
            type: "POST",
            dataType: "json",
            data: {
              // q: $("#selcountry").val(),
            },
            success: function (geojson_result) {

              var geoJSON = geojson_result.data;
              var Country_Code = country_code.toUpperCase();
            
              var border = L.geoJSON(geoJSON, {
                filter: function (feature) {
                  if (feature.properties.iso_a2 === Country_Code) {
                    return feature.geometry.coordinates;
                  }
                },
              }).addTo(mymap);
              console.log(border);

              mymap.fitBounds(border.getBounds(), {
                padding: [20, 20],
              });

              border.setStyle({
                fillColor: "#0f07f5",
                color: "#803af0",
                weight: 7,
                opacity: 0.1,
                fillOpacity: 0.2,
              });

              //markers....
              switch (Country_Code) {
                case "GB":
                  var place1 = L.marker([50.6955, -2.4746], {
                    icon: mytouristPlaceIcon,
                  }).addTo(mymap);
                  place1.bindPopup(
                    `<div class="popup">
              <h6>Maiden Castle</h6>
              <img  class="popup_image" src="venders/image/maiden.jpg" >
                                </div> `,
                    { closeButton: false, offset: L.point(0, -8) }
                  );

                  var place2 = L.marker([52.8712, -3.0512], {
                    icon: mytouristPlaceIcon,
                  }).addTo(mymap);
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

                  var place4 = L.marker([50.91, -2.22], {
                    icon: mytouristPlaceIcon,
                  }).addTo(mymap);
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

                  var place7 = L.marker([52.0582, -2.352], {
                    icon: mytouristPlaceIcon,
                  }).addTo(mymap);
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

                  //custering for uk....

                  var markers_uk = L.markerClusterGroup({
                    animateAddingMarkers: true,
                  });
                  var markersList_uk = [
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
                  ];

                  mymap.addLayer(markers_uk);

                  for (var i = 0; i < markersList_uk.length; i++) {
                    markers_uk.addLayer(markersList_uk[i]);
                  }

                  var areaSelect = document.querySelector(`[id="selcountry"]`);
                  areaSelect.addEventListener(`change`, (e) => {
                    setTimeout(function () {
                      mymap.removeLayer(place1);
                      mymap.removeLayer(place2);
                      mymap.removeLayer(place3);
                      mymap.removeLayer(place4);
                      mymap.removeLayer(place5);
                      mymap.removeLayer(place6);
                      mymap.removeLayer(place7);
                      mymap.removeLayer(place8);
                      mymap.removeLayer(touristPlace1);
                      mymap.removeLayer(touristPlace2);
                      mymap.removeLayer(touristPlace3);
                      mymap.removeLayer(touristPlace4);
                      mymap.removeLayer(touristPlace5);
                      mymap.removeLayer(touristPlace6);
                      mymap.removeLayer(touristPlace7);
                      mymap.removeLayer(touristPlace8);
                      mymap.removeLayer(touristPlace9);
                      mymap.removeLayer(touristPlace10);
                      mymap.removeLayer(touristPlace11);
                      mymap.removeLayer(touristPlace12);
                      mymap.removeLayer(touristPlace13);
                      mymap.removeLayer(touristPlace14);
                      mymap.removeLayer(markers_uk);
                    }, 2000);
                  });
                  break;
                case "IN":
                  //marker for gujarat fort...
                  var guj1 = L.marker([23.2001, 69.2685], {
                    icon: myCastleIcon,
                  }).addTo(mymap);
                  guj1.bindPopup("<h6>Roha Fort!</h6>", { closeButton: false });

                  var guj2 = L.marker([23.4849, 70.4642], {
                    icon: myCastleIcon,
                  }).addTo(mymap);
                  guj2.bindPopup("<h6>Kanthkot Fort!</h6>", {
                    closeButton: false,
                  });

                  var guj3 = L.marker([22.4647, 70.0697], {
                    icon: myCastleIcon,
                  }).addTo(mymap);
                  guj3.bindPopup("<h6>Lakhota Fort!</h6>", {
                    closeButton: false,
                  });

                  var guj4 = L.marker([24.2291, 69.1897], {
                    icon: myCastleIcon,
                  }).addTo(mymap);
                  guj4.bindPopup("<h6>Vighakot Fort!</h6>", {
                    closeButton: false,
                  });

                  var guj5 = L.marker([22.1544, 71.3308], {
                    icon: myCastleIcon,
                  }).addTo(mymap);
                  guj5.bindPopup("<h6>Hingolgadh Fort!</h6>", {
                    closeButton: false,
                  });

                  var guj6 = L.marker([23.8525, 73.0052], {
                    icon: myCastleIcon,
                  }).addTo(mymap);
                  guj6.bindPopup("<h6>Idar Fort!</h6>", { closeButton: false });

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

                  //custering for india...

                  var markers_in = L.markerClusterGroup({
                    animateAddingMarkers: true,
                  });
                  var markersList_in = [
                    guj1,
                    guj2,
                    guj3,
                    guj4,
                    guj5,
                    guj6,
                    polylines,
                    polylines1,
                    polylines2,
                    polylines3,
                    polylines4,
                  ];

                  mymap.addLayer(markers_in);

                  for (var i = 0; i < markersList_in.length; i++) {
                    markers_in.addLayer(markersList_in[i]);
                  }

                  var areaSelect = document.querySelector(`[id="selcountry"]`);
                  areaSelect.addEventListener(`change`, (e) => {
                    setTimeout(function () {
                      mymap.removeLayer(guj1);
                      mymap.removeLayer(guj2);
                      mymap.removeLayer(guj3);
                      mymap.removeLayer(guj4);
                      mymap.removeLayer(guj5);
                      mymap.removeLayer(guj6);
                      mymap.removeLayer(polylines);
                      mymap.removeLayer(polylines1);
                      mymap.removeLayer(polylines2);
                      mymap.removeLayer(polylines3);
                      mymap.removeLayer(polylines4);
                      mymap.removeLayer(markers_in);
                    }, 2000);
                  });
                  break;
                case "CN":
                  var china1 = L.marker([40.4319, 116.5704], {
                    icon: mytouristPlaceIcon,
                  }).addTo(mymap);
                  china1.bindPopup(
                    `<div class="popup">
                                  <h6>The Great Wall of China</h6>
                                  <img  class="popup_image" src="venders/image/wal.jpg" >
                                </div> `,
                    { closeButton: false, offset: L.point(0, -8) }
                  );

                  var china2 = L.marker([34.3841, 109.2785], {
                    icon: mytouristPlaceIcon,
                  }).addTo(mymap);
                  china2.bindPopup(
                    `<div class="popup">
                                  <h6>Terracotta Army</h6>
                                  <img  class="popup_image" src="venders/image/ter.jpg" >
                                </div> `,
                    { closeButton: false, offset: L.point(0, -8) }
                  );

                  //custering for china...

                  var markers_ch = L.markerClusterGroup({
                    animateAddingMarkers: true,
                  });
                  var markersList_ch = [china1, china2];

                  mymap.addLayer(markers_ch);

                  for (var i = 0; i < markersList_ch.length; i++) {
                    markers_ch.addLayer(markersList_ch[i]);
                  }

                  var areaSelect = document.querySelector(`[id="selcountry"]`);
                  areaSelect.addEventListener(`change`, (e) => {
                    setTimeout(function () {
                      mymap.removeLayer(china1);
                      mymap.removeLayer(china2);
                      mymap.removeLayer(markers_ch);
                    }, 2000);
                  });
                  break;
                case "RU":
                  var russia1 = L.marker([53.5587, 108.165], {
                    icon: mytouristPlaceIcon,
                  }).addTo(mymap);
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

                  var russia3 = L.marker([43.6028, 39.7342], {
                    icon: mytouristPlaceIcon,
                  }).addTo(mymap);
                  russia3.bindPopup(
                    `<div class="popup">
                                  <h6>Sochi</h6>
                                  <img  class="popup_image" src="venders/image/soc.jpg" >
                                </div> `,
                    { closeButton: false, offset: L.point(0, -8) }
                  );

                  var russia4 = L.marker([59.8863, 29.9086], {
                    icon: mytouristPlaceIcon,
                  }).addTo(mymap);
                  russia4.bindPopup(
                    `<div class="popup">
                                  <h6>Peterhof</h6>
                                  <img  class="popup_image" src="venders/image/pal.jpg" >
                                </div> `,
                    { closeButton: false, offset: L.point(0, -8) }
                  );
                  var fort6 = L.marker([59.9404, 30.3138], {
                    icon: myCastleIcon,
                  }).addTo(mymap);
                  fort6.bindPopup(
                    `<div class="popup">
                                  <h6>Winter Palace</h6>
                                  <img  class="popup_image" src="venders/image/win.jpg" >
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

                  //custering for russia...

                  var markers_rs = L.markerClusterGroup({
                    animateAddingMarkers: true,
                  });
                  var markersList_rs = [
                    russia1,
                    russia2,
                    russia3,
                    russia4,
                    fort6,
                    touristPlace15,
                    touristPlace16,
                  ];

                  mymap.addLayer(markers_rs);

                  for (var i = 0; i < markersList_rs.length; i++) {
                    markers_rs.addLayer(markersList_rs[i]);
                  }

                  var areaSelect = document.querySelector(`[id="selcountry"]`);
                  areaSelect.addEventListener(`change`, (e) => {
                    setTimeout(function () {
                      mymap.removeLayer(russia1);
                      mymap.removeLayer(russia2);
                      mymap.removeLayer(russia3);
                      mymap.removeLayer(russia4);
                      mymap.removeLayer(fort6);
                      mymap.removeLayer(touristPlace15);
                      mymap.removeLayer(touristPlace16);
                      mymap.removeLayer(markers_rs);
                    }, 2000);
                  });
                  break;

                case "ZA":
                  var safrica1 = L.marker([-33.9249, 18.4241], {
                    icon: mytouristPlaceIcon,
                  }).addTo(mymap);
                  safrica1.bindPopup(
                    `<div class="popup">
                                  <h6>Cape Town</h6>
                                  <img  class="popup_image" src="venders/image/cap.jpg" >
                                </div> `,
                    { closeButton: false, offset: L.point(0, -8) }
                  );

                  var safrica2 = L.marker([-33.9321, 18.8602], {
                    icon: mytouristPlaceIcon,
                  }).addTo(mymap);
                  safrica2.bindPopup(
                    `<div class="popup">
                                  <h6>Stellenbosch</h6>
                                  <img  class="popup_image" src="venders/image/ste.jpg" >
                                </div> `,
                    { closeButton: false, offset: L.point(0, -8) }
                  );

                  var safrica3 = L.marker([-29.4667, 29.2667], {
                    icon: mytouristPlaceIcon,
                  }).addTo(mymap);
                  safrica3.bindPopup(
                    `<div class="popup">
                                  <h6> The Drakensberg</h6>
                                  <img  class="popup_image" src="venders/image/kwa.jpg" >
                                </div> `,
                    { closeButton: false, offset: L.point(0, -8) }
                  );

                  var safrica4 = L.marker([-25.2449, 27.0891], {
                    icon: mytouristPlaceIcon,
                  }).addTo(mymap);
                  safrica4.bindPopup(
                    `<div class="popup">
                                  <h6>Pilanesberg Park</h6>
                                  <img  class="popup_image" src="venders/image/pil.jpg" >
                                </div> `,
                    { closeButton: false, offset: L.point(0, -8) }
                  );

                  //custering for south africa...

                  var markers_sa = L.markerClusterGroup({
                    animateAddingMarkers: true,
                  });
                  var markersList_sa = [safrica1, safrica2, safrica3, safrica4];

                  mymap.addLayer(markers_sa);

                  for (var i = 0; i < markersList_sa.length; i++) {
                    markers_sa.addLayer(markersList_sa[i]);
                  }

                  var areaSelect = document.querySelector(`[id="selcountry"]`);
                  areaSelect.addEventListener(`change`, (e) => {
                    setTimeout(function () {
                      mymap.removeLayer(safrica1);
                      mymap.removeLayer(safrica2);
                      mymap.removeLayer(safrica3);
                      mymap.removeLayer(safrica4);
                      mymap.removeLayer(markers_sa);
                    }, 2000);
                  });
                  break;
                case "EG":
                  var africa5 = L.marker([29.9792, 31.1342], {
                    icon: mytouristPlaceIcon,
                  }).addTo(mymap);
                  africa5.bindPopup(
                    `<div class="popup">
                                  <h6>Pyramids of Giza</h6>
                                  <img  class="popup_image" src="venders/image/pyr.jpg" >
                                </div> `,
                    { closeButton: false, offset: L.point(0, -8) }
                  );
                  var africa7 = L.marker([22.346, 31.6156], {
                    icon: mytouristPlaceIcon,
                  }).addTo(mymap);
                  africa7.bindPopup(
                    `<div class="popup">
                                  <h6>Abu Simbel</h6>
                                  <img  class="popup_image" src="venders/image/abu.jpg" >
                                </div> `,
                    { closeButton: false, offset: L.point(0, -8) }
                  );

                  //custering for north africa...

                  var markers_a = L.markerClusterGroup({
                    animateAddingMarkers: true,
                  });
                  var markersList_a = [africa5, africa7];

                  mymap.addLayer(markers_a);

                  for (var i = 0; i < markersList_a.length; i++) {
                    markers_a.addLayer(markersList_a[i]);
                  }

                  var areaSelect = document.querySelector(`[id="selcountry"]`);
                  areaSelect.addEventListener(`change`, (e) => {
                    setTimeout(function () {
                      mymap.removeLayer(africa5);
                      mymap.removeLayer(africa7);
                      mymap.removeLayer(markers_a);
                    }, 2000);
                  });

                  break;
                case "DZ":
                  var algeria = L.marker([35.0391, 0.2909], {
                    icon: mytouristPlaceIcon,
                  }).addTo(mymap);
                  algeria.bindPopup(
                    `<div class="popup">
                                  <h6>Atlas Mountains</h6>
                                  <img  class="popup_image" src="venders/image/atl.jpg" >
                                </div> `,
                    { closeButton: false, offset: L.point(0, -8) }
                  );
                  var areaSelect = document.querySelector(`[id="selcountry"]`);
                  areaSelect.addEventListener(`change`, (e) => {
                    setTimeout(function () {
                      mymap.removeLayer(algeria);
                    }, 2000);
                  });
                  break;
                case "TN":
                  var africa6 = L.marker([36.8065, 10.1815], {
                    icon: mytouristPlaceIcon,
                  }).addTo(mymap);
                  africa6.bindPopup(
                    `<div class="popup">
                                  <h6>Tunis</h6>
                                  <img  class="popup_image" src="venders/image/tun.jpg" >
                                </div> `,
                    { closeButton: false, offset: L.point(0, -8) }
                  );
                  var africa9 = L.marker([33.8869, 9.5375], {
                    icon: mytouristPlaceIcon,
                  }).addTo(mymap);
                  africa9.bindPopup(
                    `<div class="popup">
                                  <h6>Sahara Desert</h6>
                                  <img  class="popup_image" src="venders/image/des.jpg" >
                                </div> `,
                    { closeButton: false, offset: L.point(0, -8) }
                  );

                  //custering for north africa...

                  var markers_tn = L.markerClusterGroup({
                    animateAddingMarkers: true,
                  });
                  var markersList_tn = [africa6, africa9];

                  mymap.addLayer(markers_tn);

                  for (var i = 0; i < markersList_tn.length; i++) {
                    markers_tn.addLayer(markersList_tn[i]);
                  }

                  var areaSelect = document.querySelector(`[id="selcountry"]`);
                  areaSelect.addEventListener(`change`, (e) => {
                    setTimeout(function () {
                      mymap.removeLayer(africa6);
                      mymap.removeLayer(africa9);
                      mymap.removeLayer(markers_tn);
                    }, 2000);
                  });
                  break;
                case "IT":
                  var fort2 = L.marker([40.73, 13.965], {
                    icon: myCastleIcon,
                  }).addTo(mymap);
                  fort2.bindPopup(
                    `<div class="popup">
                                      <h6>Aragonese Castle</h6>
                                      <img  class="popup_image" src="venders/image/ara.jpg" >
                                    </div> `,
                    { closeButton: false, offset: L.point(0, -8) }
                  );
                  var fort4 = L.marker([45.4337, 12.4304], {
                    icon: myCastleIcon,
                  }).addTo(mymap);
                  fort4.bindPopup(
                    `<div class="popup">
                                      <h6>Doge’s Palace</h6>
                                      <img  class="popup_image" src="venders/image/dog.jpg" >
                                    </div> `,
                    { closeButton: false, offset: L.point(0, -8) }
                  );

                  //custering for italy...

                  var markers_t = L.markerClusterGroup({
                    animateAddingMarkers: true,
                  });
                  var markersList_t = [fort2, fort4];

                  mymap.addLayer(markers_t);

                  for (var i = 0; i < markersList_t.length; i++) {
                    markers_t.addLayer(markersList_t[i]);
                  }

                  var areaSelect = document.querySelector(`[id="selcountry"]`);
                  areaSelect.addEventListener(`change`, (e) => {
                    setTimeout(function () {
                      mymap.removeLayer(fort2);
                      mymap.removeLayer(fort4);
                      mymap.removeLayer(markers_t);
                    }, 2000);
                  });
                  break;
                case "ES":
                  var spain_1 = L.marker([40.95, -4.1325], {
                    icon: myCastleIcon,
                  }).addTo(mymap);
                  spain_1.bindPopup(
                    `<div class="popup">
                                        <h6>Alcázar of Segovia</h6>
                                        <img  class="popup_image" src="venders/image/alc.jpg" >
                                      </div> `,
                    { closeButton: false, offset: L.point(0, -8) }
                  );

                  var spain_2 = L.marker([37.3831, -5.9902], {
                    icon: myCastleIcon,
                  }).addTo(mymap);
                  spain_2.bindPopup(
                    `<div class="popup">
                                        <h6> Real Alcazar of Seville</h6>
                                        <img  class="popup_image" src="venders/image/rea.jpg" >
                                      </div> `,
                    { closeButton: false, offset: L.point(0, -8) }
                  );
                  var spain = L.marker([37.8742, -4.7794], {
                    icon: mytouristPlaceIcon,
                  }).addTo(mymap);
                  spain.bindPopup(
                    `<div class="popup">
                                  <h6>Córdoba Cathedral</h6>
                                  <img  class="popup_image" src="venders/image/cor.jpg" >
                                </div> `,
                    { closeButton: false, offset: L.point(0, -8) }
                  );

                  //custering for spain...

                  var markers_sp = L.markerClusterGroup({
                    animateAddingMarkers: true,
                  });
                  var markersList_sp = [spain, spain_1, spain_2];

                  mymap.addLayer(markers_sp);

                  for (var i = 0; i < markersList_sp.length; i++) {
                    markers_sp.addLayer(markersList_sp[i]);
                  }

                  var areaSelect = document.querySelector(`[id="selcountry"]`);
                  areaSelect.addEventListener(`change`, (e) => {
                    setTimeout(function () {
                      mymap.removeLayer(spain);
                      mymap.removeLayer(spain_1);
                      mymap.removeLayer(spain_2);
                      mymap.removeLayer(markers_sp);
                    }, 2000);
                  });
                  break;
                case "DE":
                  var berlin1 = L.marker([52.52, 13.29], {
                    icon: myCastleIcon,
                  }).addTo(mymap);
                  berlin1.bindPopup(
                    `<div class="popup">
                                    <h6>Charlottenburg Palace</h6>
                                    <img  class="popup_image" src="venders/image/char.jpg" >
                                  </div> `,
                    { closeButton: false, offset: L.point(0, -8) }
                  );

                  var berlin2 = L.marker([52.51, 13.35], {
                    icon: myCastleIcon,
                  }).addTo(mymap);
                  berlin2.bindPopup(
                    `<div class="popup">
                                    <h6>Bellevue Palace </h6>
                                    <img  class="popup_image" src="venders/image/bell.jpg" >
                                  </div> `,
                    { closeButton: false, offset: L.point(0, -8) }
                  );

                  var berlin3 = L.marker([52.43, 13.11], {
                    icon: myCastleIcon,
                  }).addTo(mymap);
                  berlin3.bindPopup(
                    `<div class="popup">
                                    <h6>Schloss Pfaueninsel</h6>
                                    <img  class="popup_image" src="venders/image/pala.jpg" >
                                  </div> `,
                    { closeButton: false, offset: L.point(0, -8) }
                  );

                  var berlin4 = L.marker([52.57, 13.4], {
                    icon: myCastleIcon,
                  }).addTo(mymap);
                  berlin4.bindPopup(
                    `<div class="popup">
                                    <h6>Schoenhausen Palace</h6>
                                    <img  class="popup_image" src="venders/image/scho.jpg" >
                                  </div> `,
                    { closeButton: false, offset: L.point(0, -8) }
                  );

                  //custering for berlin...

                  var markers_br = L.markerClusterGroup({
                    animateAddingMarkers: true,
                  });
                  var markersList_br = [berlin1, berlin2, berlin3, berlin4];

                  mymap.addLayer(markers_br);

                  for (var i = 0; i < markersList_br.length; i++) {
                    markers_br.addLayer(markersList_br[i]);
                  }

                  var areaSelect = document.querySelector(`[id="selcountry"]`);
                  areaSelect.addEventListener(`change`, (e) => {
                    setTimeout(function () {
                      mymap.removeLayer(berlin1);
                      mymap.removeLayer(berlin2);
                      mymap.removeLayer(berlin3);
                      mymap.removeLayer(berlin4);
                      mymap.removeLayer(markers_br);
                    }, 2000);
                  });
                  break;
                case "CA":
                  var canada1 = L.marker([51.4968, -115.9281], {
                    icon: mytouristPlaceIcon,
                  }).addTo(mymap);
                  canada1.bindPopup(
                    `<div class="popup">
                                  <h6>Banff Park</h6>
                                  <img  class="popup_image" src="venders/image/ban.jpg" >
                                </div> `,
                    { closeButton: false, offset: L.point(0, -8) }
                  );

                  var canada2 = L.marker([43.6426, -79.3871], {
                    icon: mytouristPlaceIcon,
                  }).addTo(mymap);
                  canada2.bindPopup(
                    `<div class="popup">
                                  <h6> CN Tower</h6>
                                  <img  class="popup_image" src="venders/image/cn.jpg" >
                                </div> `,
                    { closeButton: false, offset: L.point(0, -8) }
                  );

                  var canada3 = L.marker([46.8122, -71.2065], {
                    icon: mytouristPlaceIcon,
                  }).addTo(mymap);
                  canada3.bindPopup(
                    `<div class="popup">
                                  <h6>Old Quebec</h6>
                                  <img  class="popup_image" src="venders/image/bec.jpg" >
                                </div> `,
                    { closeButton: false, offset: L.point(0, -8) }
                  );

                  //custering for canada...

                  var markers_ca = L.markerClusterGroup({
                    animateAddingMarkers: true,
                  });
                  var markersList_ca = [canada1, canada2, canada3];

                  mymap.addLayer(markers_ca);

                  for (var i = 0; i < markersList_ca.length; i++) {
                    markers_ca.addLayer(markersList_ca[i]);
                  }

                  var areaSelect = document.querySelector(`[id="selcountry"]`);
                  areaSelect.addEventListener(`change`, (e) => {
                    setTimeout(function () {
                      mymap.removeLayer(canada1);
                      mymap.removeLayer(canada2);
                      mymap.removeLayer(canada3);
                      mymap.removeLayer(markers_ca);
                    }, 2000);
                  });

                  break;
                case "US":
                  var usa1 = L.marker([43.0962, -79.0377], {
                    icon: mytouristPlaceIcon,
                  }).addTo(mymap);
                  usa1.bindPopup(
                    `<div class="popup">
                                  <h6>Niagara Falls</h6>
                                  <img  class="popup_image" src="venders/image/nia.jpg" >
                                </div> `,
                    { closeButton: false, offset: L.point(0, -8) }
                  );

                  var usa2 = L.marker([40.6892, -74.0445], {
                    icon: mytouristPlaceIcon,
                  }).addTo(mymap);
                  usa2.bindPopup(
                    `<div class="popup">
                                  <h6>Statue of Liberty</h6>
                                  <img  class="popup_image" src="venders/image/sta.jpg" >
                                </div> `,
                    { closeButton: false, offset: L.point(0, -8) }
                  );

                  var usa3 = L.marker([38.8977, -77.0365], {
                    icon: mytouristPlaceIcon,
                  }).addTo(mymap);
                  usa3.bindPopup(
                    `<div class="popup">
                                  <h6>White House</h6>
                                  <img  class="popup_image" src="venders/image/whi.jpg" >
                                </div> `,
                    { closeButton: false, offset: L.point(0, -8) }
                  );

                  var usa4 = L.marker([36.1147, -115.1728], {
                    icon: mytouristPlaceIcon,
                  }).addTo(mymap);
                  usa4.bindPopup(
                    `<div class="popup">
                                  <h6> Las Vegas</h6>
                                  <img  class="popup_image" src="venders/image/las.jpg" >
                                </div> `,
                    { closeButton: false, offset: L.point(0, -8) }
                  );

                  var usa5 = L.marker([37.8199, -122.4783], {
                    icon: mytouristPlaceIcon,
                  }).addTo(mymap);
                  usa5.bindPopup(
                    `<div class="popup">
                                  <h6> Golden Gate Bridge</h6>
                                  <img  class="popup_image" src="venders/image/glo.jpg" >
                                </div> `,
                    { closeButton: false, offset: L.point(0, -8) }
                  );

                  var usa6 = L.marker([40.758, -73.9855], {
                    icon: mytouristPlaceIcon,
                  }).addTo(mymap);
                  usa6.bindPopup(
                    `<div class="popup">
                                  <h6>Times Square</h6>
                                  <img  class="popup_image" src="venders/image/tim.jpg" >
                                </div> `,
                    { closeButton: false, offset: L.point(0, -8) }
                  );

                  var usa7 = L.marker([44.428, -110.5885], {
                    icon: mytouristPlaceIcon,
                  }).addTo(mymap);
                  usa7.bindPopup(
                    `<div class="popup">
                                  <h6>Yellowstone Park</h6>
                                  <img  class="popup_image" src="venders/image/yel.jpg" >
                                </div> `,
                    { closeButton: false, offset: L.point(0, -8) }
                  );

                  //custering for usa...

                  var markers_usa = L.markerClusterGroup({
                    animateAddingMarkers: true,
                  });
                  var markersList_usa = [
                    usa1,
                    usa2,
                    usa3,
                    usa4,
                    usa5,
                    usa6,
                    usa7,
                  ];

                  mymap.addLayer(markers_usa);

                  for (var i = 0; i < markersList_usa.length; i++) {
                    markers_usa.addLayer(markersList_usa[i]);
                  }

                  var areaSelect = document.querySelector(`[id="selcountry"]`);
                  areaSelect.addEventListener(`change`, (e) => {
                    setTimeout(function () {
                      mymap.removeLayer(usa1);
                      mymap.removeLayer(usa2);
                      mymap.removeLayer(usa3);
                      mymap.removeLayer(usa4);
                      mymap.removeLayer(usa5);
                      mymap.removeLayer(usa6);
                      mymap.removeLayer(usa7);
                      mymap.removeLayer(markers_usa);
                    }, 2000);
                  });
                  break;
                case "BR":
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

                  var brazil2 = L.marker([-3.4653, -62.2169], {
                    icon: mytouristPlaceIcon,
                  }).addTo(mymap);
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
                  //custering for brazil...

                  var markers_bz = L.markerClusterGroup({
                    animateAddingMarkers: true,
                  });
                  var markersList_bz = [brazil1, brazil2, brazil3];

                  mymap.addLayer(markers_bz);

                  for (var i = 0; i < markersList_bz.length; i++) {
                    markers_bz.addLayer(markersList_bz[i]);
                  }

                  var areaSelect = document.querySelector(`[id="selcountry"]`);

                  areaSelect.addEventListener(`change`, (e) => {
                    setTimeout(function () {
                      mymap.removeLayer(brazil1);
                      mymap.removeLayer(brazil2);
                      mymap.removeLayer(brazil3);
                      mymap.removeLayer(markers_bz);
                    }, 2000);
                  });

                  break;

                case "AR":
                  var argentina1 = L.marker([-50.4967, -73.1377], {
                    icon: mytouristPlaceIcon,
                  }).addTo(mymap);
                  argentina1.bindPopup(
                    `<div class="popup">
                                  <h6>Perito Moreno</h6>
                                  <img  class="popup_image" src="venders/image/gla.jpg" >
                                </div> `,
                    { closeButton: false, offset: L.point(0, -8) }
                  );
                  var areaSelect = document.querySelector(`[id="selcountry"]`);
                  areaSelect.addEventListener(`change`, (e) => {
                    setTimeout(function () {
                      mymap.removeLayer(argentina1);
                    }, 2000);
                  });
                  break;

                case "FR":
                  var fort3 = L.marker([47.6161, 1.5172], {
                    icon: myCastleIcon,
                  }).addTo(mymap);
                  fort3.bindPopup(
                    `<div class="popup">
                                        <h6>Château de Chambord</h6>
                                        <img  class="popup_image" src="venders/image/cha.jpg" >
                                      </div> `,
                    { closeButton: false, offset: L.point(0, -8) }
                  );
                  var areaSelect = document.querySelector(`[id="selcountry"]`);
                  areaSelect.addEventListener(`change`, (e) => {
                    setTimeout(function () {
                      mymap.removeLayer(fort3);
                    }, 2000);
                  });
                  break;

                case "PE":
                  var peru = L.marker([-15.9254, -69.3354], {
                    icon: mytouristPlaceIcon,
                  }).addTo(mymap);
                  peru.bindPopup(
                    `<div class="popup">
                                  <h6>Lake Titicaca</h6>
                                  <img  class="popup_image" src="venders/image/tit.jpg" >
                                </div> `,
                    { closeButton: false, offset: L.point(0, -8) }
                  );
                  var areaSelect = document.querySelector(`[id="selcountry"]`);
                  areaSelect.addEventListener(`change`, (e) => {
                    setTimeout(function () {
                      mymap.removeLayer(peru);
                    }, 2000);
                  });
                  break;
                case "NL":
                  var fort5 = L.marker([53.3429, 6.2674], {
                    icon: myCastleIcon,
                  }).addTo(mymap);
                  fort5.bindPopup(
                    `<div class="popup">
                                  <h6>Dublin Castle</h6>
                                  <img  class="popup_image" src="venders/image/dub.jpg" >
                                </div> `,
                    { closeButton: false, offset: L.point(0, -8) }
                  );
                  var areaSelect = document.querySelector(`[id="selcountry"]`);
                  areaSelect.addEventListener(`change`, (e) => {
                    setTimeout(function () {
                      mymap.removeLayer(fort5);
                    }, 2000);
                  });
                  break;
                case "HU":
                  var fort9 = L.marker([47.4962, 19.0396], {
                    icon: myCastleIcon,
                  }).addTo(mymap);
                  fort9.bindPopup(
                    `<div class="popup">
                                  <h6> Buda Castle</h6>
                                  <img  class="popup_image" src="venders/image/bud.jpg" >
                                </div> `,
                    { closeButton: false, offset: L.point(0, -8) }
                  );
                  var areaSelect = document.querySelector(`[id="selcountry"]`);
                  areaSelect.addEventListener(`change`, (e) => {
                    setTimeout(function () {
                      mymap.removeLayer(fort9);
                    }, 2000);
                  });
                  break;
                case "SE":
                  var fort10 = L.marker([59.3217, 17.8863], {
                    icon: myCastleIcon,
                  }).addTo(mymap);
                  fort10.bindPopup(
                    `<div class="popup">
                                  <h6> Drottningholm Castle</h6>
                                  <img  class="popup_image" src="venders/image/dro.jpg" >
                                </div> `,
                    { closeButton: false, offset: L.point(0, -8) }
                  );
                  var areaSelect = document.querySelector(`[id="selcountry"]`);
                  areaSelect.addEventListener(`change`, (e) => {
                    setTimeout(function () {
                      mymap.removeLayer(fort10);
                    }, 2000);
                  });
                  break;

                default:
                //none...
              }

              //World population...

              $.ajax({
                url: "libs/php/getpopulation.php",
                type: "POST",
                dataType: "json",
                data: {
                  // q: $('#selcountry').val()
                },
                success: function (result) {
                  console.log(result);
                  var alpha2_code = result["data"][0]["alpha2Code"];
                  console.log(alpha2_code);

                  for (let i = 0; i < result.data.length; i++) {
                    var Lat = result["data"][i]["latlng"][0];
                    var Lng = result["data"][i]["latlng"][1];
                    var alpha2_code = result["data"][i]["alpha2Code"];
                    //  console.log(Lat);
                    //  console.log(Lng);

                    var population = result["data"][i]["population"];
                    // console.log(population);
                    var nf = new Intl.NumberFormat();
                    var population_formatted = nf.format(population);

                    var name = result["data"][i]["name"];
                    //console.log(name);

                    if (Lat === undefined && Lng === undefined) {
                      continue;
                    }
                    if (alpha2_code === Country_Code) {
                      var CLayer0 = L.circle([Lat, Lng], {
                        radius: 10000,
                        color: "red",
                      });
                      CLayer0.addTo(mymap).bindPopup(
                        "<h6>" + name + "<br>" + population_formatted + "</h6>",
                        {
                          closeButton: false,
                          offset: L.point(0, 0),
                        }
                      );
                      var areaSelect =
                        document.querySelector(`[id="selcountry"]`);
                      areaSelect.addEventListener(`change`, (e) => {
                        setTimeout(function () {
                          mymap.removeLayer(CLayer0);
                        }, 2000);
                      });
                    }
                  }
                },
              });

              const areaSelect1 = document.querySelector(`[id="selcountry"]`);
              areaSelect1.addEventListener(`change`, (e) => {
                setTimeout(function () {
                  mymap.removeLayer(border);
                  // mymap.removeLayer(CLayer0);
                }, 2000);
              });
            },
          });
        });
        //fetch data from opencage api....

        $(document).ready(function () {
          $("#txtcurrency").html(currency_name);
          $("#txtsymbol").html(currency_symbol);
          $("#txtnative").html(country_name);
        });

        //weather.php file.....

        $(document).ready(function () {
          $.ajax({
            url: "libs/php/getWeather.php",
            type: "POST",
            dataType: "json",
            data: {
              q: encoded_countryName,
            },
            success: function (result) {
              //  console.log(result);
              
              if (result.status.name == "ok") {
                $("#txtclouds").html(
                  result["data"]["weather"][0]["description"]
                );
                $("#txttemp").html(result["data"]["main"]["temp"]);
                $("#txtmin").html(result["data"]["main"]["temp_min"]);
                $("#txtmax").html(result["data"]["main"]["temp_max"]);
                $("#txthum").html(result["data"]["main"]["humidity"]);
                $("#txtspeed").html(result["data"]["wind"]["speed"]);
                $("#txtpressure").html(result["data"]["main"]["pressure"]);
                $("#txtvisi").html(result["data"]["visibility"]);
              }
            },
            error: function (jqXHR, textStatus, errorThrown) {
              //error code..
              alert("error");
            },
          });
        });

        //getCountryInfo.php file...

        $(document).ready(function () {
          $.ajax({
            url: "libs/php/getCountryInfo.php",
            type: "POST",
            dataType: "json",
            data: {
              q: country_code,
            },
            success: function (result) {
              // console.log(result);

              var population = result["data"]["geonames"][0]["population"];
              var nf = new Intl.NumberFormat();
              var population_formatted = nf.format(population);

              if (result.status.name == "ok") {
                $("#txtlang").html(result["data"]["geonames"][0]["languages"]);
                $("#txtcontinentcode").html(
                  result["data"]["geonames"][0]["continentName"]
                );
                $("#txttop").html(result["data"]["geonames"][0]["toponymName"]);
                $("#txtpopulation").html(population_formatted);
                $("#txtcountrycode").html(
                  result["data"]["geonames"][0]["countryCode"]
                );
                $("#txtgeoname").html(
                  result["data"]["geonames"][0]["geonameId"]
                );
                $("#txtcapital").html(result["data"]["geonames"][0]["capital"]);
                $("#txtcountryname").html(
                  result["data"]["geonames"][0]["countryName"]
                );
                $("#txtcountryname1").html(
                  result["data"]["geonames"][0]["countryName"]
                );
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
            url: "libs/php/getWiki.php",
            type: "POST",
            dataType: "json",
            data: {
              //  lat: lat,
              //  lng: lng,
              q: encoded_countryName,
            },
            success: function (result) {
              //  console.log(result);

              if (result.status.name == "ok") {
                $("#txtwiki").html(
                  result["data"]["geonames"][0]["wikipediaUrl"]
                );
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
            success: function (result1) {
              // console.log(result1);
              // console.log(result1.data);

              var country_name = result.data.results[0].components.country;

              $.each(result1.data, function (keys, value) {
                if (keys === country_name) {
                  var index = value[value.length - 1];
                  var activecase = (
                    index.confirmed -
                    index.deaths -
                    index.recovered
                  ).toLocaleString();
                  // console.log(activecase);
                  //  console.log(index.confirmed);
                  //  console.log(index.deaths);
                  //  console.log(index.recovered);

                  $("#txtcovidcase").html(activecase);
                  $("#txtconcovidcase").html(index.confirmed.toLocaleString());
                  $("#txtdeacovidcase").html(index.deaths.toLocaleString());
                  $("#txtreccovidcase").html(index.recovered.toLocaleString());
                }
              });
            },
          });
        });
      },
    });
  });
};

navigator.geolocation.getCurrentPosition(successfullLookup, console.log);

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

$("#selcountry").on("change", function () {
  $.ajax({
    url: "libs/php/getLatLng.php",
    type: "POST",
    dataType: "json",
    data: {
      q: $("#selcountry").val(),
    },
    success: function (result) {
      //console.log(result);
      if (result.status.name == "ok") {
        var lat = result["data"]["latlng"][0];
        //  console.log(lat);
        var lng = result["data"]["latlng"][1];
        //  console.log(lng);
        var countryName = result["data"]["name"];
        //  console.log(countryName);

        function flyToplace() {
          var countryMarker = L.marker([lat, lng], { icon: myIcon }).addTo(
            mymap
          );
          countryMarker.bindPopup("<h6>Hello" + " " + countryName + "!</h6>", {
            closeButton: false,
          });

          mymap.flyTo([lat, lng], 8, {
            duration: 3,
          });

          const areaSelect = document.querySelector(`[id="selcountry"]`);
          areaSelect.addEventListener(`change`, (e) => {
            setTimeout(function () {
              mymap.removeLayer(countryMarker);
            }, 2000);
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



var myStyle = {
  color: "#ff7800",
  weight: 5,
  opacity: 0.65,
};


//getBorder.php file....

$(document).ready(function () {
  $.ajax({
    url: "libs/php/getBorder.php",
    type: "POST",
    dataType: "json",
    data: {
      // q: $("#selcountry").val(),
    },
    success: function (geojson_result) {
      //console.log(geojson_result);

      var geoJSON = geojson_result.data;

      //add country name into dropdown select option....
      var len = geojson_result.data.features.length;
      //console.log(len);

      for (var i = 0; i < len; i++) {
        $("#selcountry").append(
          "<option value= '" +
            geojson_result.data.features[i].properties.iso_a2 +
            "'>" +
            geojson_result.data.features[i].properties.name +
            " </option>"
        );
      }

      var list, i, switching, b, shouldSwitch;
      list = document.getElementById("selcountry");
      switching = true;

      while (switching) {
        switching = false;
        b = list.getElementsByTagName("OPTION");

        for (i = 0; i < b.length - 1; i++) {
          shouldSwitch = false;

          if (b[i].innerHTML.toLowerCase() > b[i + 1].innerHTML.toLowerCase()) {
            shouldSwitch = true;
            break;
          }
        }
        if (shouldSwitch) {
          b[i].parentNode.insertBefore(b[i + 1], b[i]);
          switching = true;
        }
      }

      const log = console.log;
      const areaSelect = document.querySelector(`[id="selcountry"]`);
      var dropdownItems;
      var select;
      var Value;
      areaSelect.addEventListener(`change`, (e) => {
        select = e.target;
        // console.log(select);
        Value = e.target.value;
        console.log(Value);
        dropdownItems = select.options[select.selectedIndex].text;
        // console.log(dropdownItems);

        var boundry = L.geoJSON(geoJSON, {
          filter: function (feature, layer) {
            if (feature.properties.iso_a2 === Value) {
              return feature.geometry.coordinates;
            }
          },
        }).addTo(mymap);

        boundry.setStyle({
          fillColor: "#0f07f5",
          color: "#803af0",
          weight: 7,
          opacity: 0.1,
          fillOpacity: 0.2,
        });

        //markers....
        switch (Value) {
          case "GB":
            var place1 = L.marker([50.6955, -2.4746], {
              icon: mytouristPlaceIcon,
            }).addTo(mymap);
            place1.bindPopup(
              `<div class="popup">
        <h6>Maiden Castle</h6>
        <img  class="popup_image" src="venders/image/maiden.jpg" >
                          </div> `,
              { closeButton: false, offset: L.point(0, -8) }
            );

            var place2 = L.marker([52.8712, -3.0512], {
              icon: mytouristPlaceIcon,
            }).addTo(mymap);
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

            var place4 = L.marker([50.91, -2.22], {
              icon: mytouristPlaceIcon,
            }).addTo(mymap);
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

            var place7 = L.marker([52.0582, -2.352], {
              icon: mytouristPlaceIcon,
            }).addTo(mymap);
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

            //custering for uk....

            var markers_uk = L.markerClusterGroup({
              animateAddingMarkers: true,
            });
            var markersList_uk = [
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
            ];

            mymap.addLayer(markers_uk);

            for (var i = 0; i < markersList_uk.length; i++) {
              markers_uk.addLayer(markersList_uk[i]);
            }

            var areaSelect = document.querySelector(`[id="selcountry"]`);
            areaSelect.addEventListener(`change`, (e) => {
              setTimeout(function () {
                mymap.removeLayer(place1);
                mymap.removeLayer(place2);
                mymap.removeLayer(place3);
                mymap.removeLayer(place4);
                mymap.removeLayer(place5);
                mymap.removeLayer(place6);
                mymap.removeLayer(place7);
                mymap.removeLayer(place8);
                mymap.removeLayer(touristPlace1);
                mymap.removeLayer(touristPlace2);
                mymap.removeLayer(touristPlace3);
                mymap.removeLayer(touristPlace4);
                mymap.removeLayer(touristPlace5);
                mymap.removeLayer(touristPlace6);
                mymap.removeLayer(touristPlace7);
                mymap.removeLayer(touristPlace8);
                mymap.removeLayer(touristPlace9);
                mymap.removeLayer(touristPlace10);
                mymap.removeLayer(touristPlace11);
                mymap.removeLayer(touristPlace12);
                mymap.removeLayer(touristPlace13);
                mymap.removeLayer(touristPlace14);
                mymap.removeLayer(markers_uk);
              }, 2000);
            });
            break;
          case "IN":
            //marker for gujarat fort...
            var guj1 = L.marker([23.2001, 69.2685], {
              icon: myCastleIcon,
            }).addTo(mymap);
            guj1.bindPopup("<h6>Roha Fort!</h6>", { closeButton: false });

            var guj2 = L.marker([23.4849, 70.4642], {
              icon: myCastleIcon,
            }).addTo(mymap);
            guj2.bindPopup("<h6>Kanthkot Fort!</h6>", { closeButton: false });

            var guj3 = L.marker([22.4647, 70.0697], {
              icon: myCastleIcon,
            }).addTo(mymap);
            guj3.bindPopup("<h6>Lakhota Fort!</h6>", { closeButton: false });

            var guj4 = L.marker([24.2291, 69.1897], {
              icon: myCastleIcon,
            }).addTo(mymap);
            guj4.bindPopup("<h6>Vighakot Fort!</h6>", { closeButton: false });

            var guj5 = L.marker([22.1544, 71.3308], {
              icon: myCastleIcon,
            }).addTo(mymap);
            guj5.bindPopup("<h6>Hingolgadh Fort!</h6>", { closeButton: false });

            var guj6 = L.marker([23.8525, 73.0052], {
              icon: myCastleIcon,
            }).addTo(mymap);
            guj6.bindPopup("<h6>Idar Fort!</h6>", { closeButton: false });

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

            //custering for india...

            var markers_in = L.markerClusterGroup({
              animateAddingMarkers: true,
            });
            var markersList_in = [
              guj1,
              guj2,
              guj3,
              guj4,
              guj5,
              guj6,
              polylines,
              polylines1,
              polylines2,
              polylines3,
              polylines4,
            ];

            mymap.addLayer(markers_in);

            for (var i = 0; i < markersList_in.length; i++) {
              markers_in.addLayer(markersList_in[i]);
            }

            var areaSelect = document.querySelector(`[id="selcountry"]`);
            areaSelect.addEventListener(`change`, (e) => {
              setTimeout(function () {
                mymap.removeLayer(guj1);
                mymap.removeLayer(guj2);
                mymap.removeLayer(guj3);
                mymap.removeLayer(guj4);
                mymap.removeLayer(guj5);
                mymap.removeLayer(guj6);
                mymap.removeLayer(polylines);
                mymap.removeLayer(polylines1);
                mymap.removeLayer(polylines2);
                mymap.removeLayer(polylines3);
                mymap.removeLayer(polylines4);
                mymap.removeLayer(markers_in);
              }, 2000);
            });
            break;
          case "CN":
            var china1 = L.marker([40.4319, 116.5704], {
              icon: mytouristPlaceIcon,
            }).addTo(mymap);
            china1.bindPopup(
              `<div class="popup">
                            <h6>The Great Wall of China</h6>
                            <img  class="popup_image" src="venders/image/wal.jpg" >
                          </div> `,
              { closeButton: false, offset: L.point(0, -8) }
            );

            var china2 = L.marker([34.3841, 109.2785], {
              icon: mytouristPlaceIcon,
            }).addTo(mymap);
            china2.bindPopup(
              `<div class="popup">
                            <h6>Terracotta Army</h6>
                            <img  class="popup_image" src="venders/image/ter.jpg" >
                          </div> `,
              { closeButton: false, offset: L.point(0, -8) }
            );

            //custering for china...

            var markers_ch = L.markerClusterGroup({
              animateAddingMarkers: true,
            });
            var markersList_ch = [china1, china2];

            mymap.addLayer(markers_ch);

            for (var i = 0; i < markersList_ch.length; i++) {
              markers_ch.addLayer(markersList_ch[i]);
            }

            var areaSelect = document.querySelector(`[id="selcountry"]`);
            areaSelect.addEventListener(`change`, (e) => {
              setTimeout(function () {
                mymap.removeLayer(china1);
                mymap.removeLayer(china2);
                mymap.removeLayer(markers_ch);
              }, 2000);
            });
            break;
          case "RU":
            var russia1 = L.marker([53.5587, 108.165], {
              icon: mytouristPlaceIcon,
            }).addTo(mymap);
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

            var russia3 = L.marker([43.6028, 39.7342], {
              icon: mytouristPlaceIcon,
            }).addTo(mymap);
            russia3.bindPopup(
              `<div class="popup">
                            <h6>Sochi</h6>
                            <img  class="popup_image" src="venders/image/soc.jpg" >
                          </div> `,
              { closeButton: false, offset: L.point(0, -8) }
            );

            var russia4 = L.marker([59.8863, 29.9086], {
              icon: mytouristPlaceIcon,
            }).addTo(mymap);
            russia4.bindPopup(
              `<div class="popup">
                            <h6>Peterhof</h6>
                            <img  class="popup_image" src="venders/image/pal.jpg" >
                          </div> `,
              { closeButton: false, offset: L.point(0, -8) }
            );
            var fort6 = L.marker([59.9404, 30.3138], {
              icon: myCastleIcon,
            }).addTo(mymap);
            fort6.bindPopup(
              `<div class="popup">
                            <h6>Winter Palace</h6>
                            <img  class="popup_image" src="venders/image/win.jpg" >
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

            //custering for russia...

            var markers_rs = L.markerClusterGroup({
              animateAddingMarkers: true,
            });
            var markersList_rs = [
              russia1,
              russia2,
              russia3,
              russia4,
              fort6,
              touristPlace15,
              touristPlace16,
            ];

            mymap.addLayer(markers_rs);

            for (var i = 0; i < markersList_rs.length; i++) {
              markers_rs.addLayer(markersList_rs[i]);
            }

            var areaSelect = document.querySelector(`[id="selcountry"]`);
            areaSelect.addEventListener(`change`, (e) => {
              setTimeout(function () {
                mymap.removeLayer(russia1);
                mymap.removeLayer(russia2);
                mymap.removeLayer(russia3);
                mymap.removeLayer(russia4);
                mymap.removeLayer(fort6);
                mymap.removeLayer(touristPlace15);
                mymap.removeLayer(touristPlace16);
                mymap.removeLayer(markers_rs);
              }, 2000);
            });
            break;

          case "ZA":
            var safrica1 = L.marker([-33.9249, 18.4241], {
              icon: mytouristPlaceIcon,
            }).addTo(mymap);
            safrica1.bindPopup(
              `<div class="popup">
                            <h6>Cape Town</h6>
                            <img  class="popup_image" src="venders/image/cap.jpg" >
                          </div> `,
              { closeButton: false, offset: L.point(0, -8) }
            );

            var safrica2 = L.marker([-33.9321, 18.8602], {
              icon: mytouristPlaceIcon,
            }).addTo(mymap);
            safrica2.bindPopup(
              `<div class="popup">
                            <h6>Stellenbosch</h6>
                            <img  class="popup_image" src="venders/image/ste.jpg" >
                          </div> `,
              { closeButton: false, offset: L.point(0, -8) }
            );

            var safrica3 = L.marker([-29.4667, 29.2667], {
              icon: mytouristPlaceIcon,
            }).addTo(mymap);
            safrica3.bindPopup(
              `<div class="popup">
                            <h6> The Drakensberg</h6>
                            <img  class="popup_image" src="venders/image/kwa.jpg" >
                          </div> `,
              { closeButton: false, offset: L.point(0, -8) }
            );

            var safrica4 = L.marker([-25.2449, 27.0891], {
              icon: mytouristPlaceIcon,
            }).addTo(mymap);
            safrica4.bindPopup(
              `<div class="popup">
                            <h6>Pilanesberg Park</h6>
                            <img  class="popup_image" src="venders/image/pil.jpg" >
                          </div> `,
              { closeButton: false, offset: L.point(0, -8) }
            );

            //custering for south africa...

            var markers_sa = L.markerClusterGroup({
              animateAddingMarkers: true,
            });
            var markersList_sa = [safrica1, safrica2, safrica3, safrica4];

            mymap.addLayer(markers_sa);

            for (var i = 0; i < markersList_sa.length; i++) {
              markers_sa.addLayer(markersList_sa[i]);
            }

            var areaSelect = document.querySelector(`[id="selcountry"]`);
            areaSelect.addEventListener(`change`, (e) => {
              setTimeout(function () {
                mymap.removeLayer(safrica1);
                mymap.removeLayer(safrica2);
                mymap.removeLayer(safrica3);
                mymap.removeLayer(safrica4);
                mymap.removeLayer(markers_sa);
              }, 2000);
            });
            break;
          case "EG":
            var africa5 = L.marker([29.9792, 31.1342], {
              icon: mytouristPlaceIcon,
            }).addTo(mymap);
            africa5.bindPopup(
              `<div class="popup">
                            <h6>Pyramids of Giza</h6>
                            <img  class="popup_image" src="venders/image/pyr.jpg" >
                          </div> `,
              { closeButton: false, offset: L.point(0, -8) }
            );
            var africa7 = L.marker([22.346, 31.6156], {
              icon: mytouristPlaceIcon,
            }).addTo(mymap);
            africa7.bindPopup(
              `<div class="popup">
                            <h6>Abu Simbel</h6>
                            <img  class="popup_image" src="venders/image/abu.jpg" >
                          </div> `,
              { closeButton: false, offset: L.point(0, -8) }
            );

            //custering for north africa...

            var markers_a = L.markerClusterGroup({
              animateAddingMarkers: true,
            });
            var markersList_a = [africa5, africa7];

            mymap.addLayer(markers_a);

            for (var i = 0; i < markersList_a.length; i++) {
              markers_a.addLayer(markersList_a[i]);
            }

            var areaSelect = document.querySelector(`[id="selcountry"]`);
            areaSelect.addEventListener(`change`, (e) => {
              setTimeout(function () {
                mymap.removeLayer(africa5);
                mymap.removeLayer(africa7);
                mymap.removeLayer(markers_a);
              }, 2000);
            });

            break;
          case "DZ":
            var algeria = L.marker([35.0391, 0.2909], {
              icon: mytouristPlaceIcon,
            }).addTo(mymap);
            algeria.bindPopup(
              `<div class="popup">
                            <h6>Atlas Mountains</h6>
                            <img  class="popup_image" src="venders/image/atl.jpg" >
                          </div> `,
              { closeButton: false, offset: L.point(0, -8) }
            );
            var areaSelect = document.querySelector(`[id="selcountry"]`);
            areaSelect.addEventListener(`change`, (e) => {
              setTimeout(function () {
                mymap.removeLayer(algeria);
              }, 2000);
            });
            break;
          case "TN":
            var africa6 = L.marker([36.8065, 10.1815], {
              icon: mytouristPlaceIcon,
            }).addTo(mymap);
            africa6.bindPopup(
              `<div class="popup">
                            <h6>Tunis</h6>
                            <img  class="popup_image" src="venders/image/tun.jpg" >
                          </div> `,
              { closeButton: false, offset: L.point(0, -8) }
            );
            var africa9 = L.marker([33.8869, 9.5375], {
              icon: mytouristPlaceIcon,
            }).addTo(mymap);
            africa9.bindPopup(
              `<div class="popup">
                            <h6>Sahara Desert</h6>
                            <img  class="popup_image" src="venders/image/des.jpg" >
                          </div> `,
              { closeButton: false, offset: L.point(0, -8) }
            );

            //custering for north africa...

            var markers_tn = L.markerClusterGroup({
              animateAddingMarkers: true,
            });
            var markersList_tn = [africa6, africa9];

            mymap.addLayer(markers_tn);

            for (var i = 0; i < markersList_tn.length; i++) {
              markers_tn.addLayer(markersList_tn[i]);
            }

            var areaSelect = document.querySelector(`[id="selcountry"]`);
            areaSelect.addEventListener(`change`, (e) => {
              setTimeout(function () {
                mymap.removeLayer(africa6);
                mymap.removeLayer(africa9);
                mymap.removeLayer(markers_tn);
              }, 2000);
            });
            break;
          case "IT":
            var fort2 = L.marker([40.73, 13.965], { icon: myCastleIcon }).addTo(
              mymap
            );
            fort2.bindPopup(
              `<div class="popup">
                                <h6>Aragonese Castle</h6>
                                <img  class="popup_image" src="venders/image/ara.jpg" >
                              </div> `,
              { closeButton: false, offset: L.point(0, -8) }
            );
            var fort4 = L.marker([45.4337, 12.4304], {
              icon: myCastleIcon,
            }).addTo(mymap);
            fort4.bindPopup(
              `<div class="popup">
                                <h6>Doge’s Palace</h6>
                                <img  class="popup_image" src="venders/image/dog.jpg" >
                              </div> `,
              { closeButton: false, offset: L.point(0, -8) }
            );

            //custering for italy...

            var markers_t = L.markerClusterGroup({
              animateAddingMarkers: true,
            });
            var markersList_t = [fort2, fort4];

            mymap.addLayer(markers_t);

            for (var i = 0; i < markersList_t.length; i++) {
              markers_t.addLayer(markersList_t[i]);
            }

            var areaSelect = document.querySelector(`[id="selcountry"]`);
            areaSelect.addEventListener(`change`, (e) => {
              setTimeout(function () {
                mymap.removeLayer(fort2);
                mymap.removeLayer(fort4);
                mymap.removeLayer(markers_t);
              }, 2000);
            });
            break;
          case "ES":
            var spain_1 = L.marker([40.95, -4.1325], {
              icon: myCastleIcon,
            }).addTo(mymap);
            spain_1.bindPopup(
              `<div class="popup">
                                  <h6>Alcázar of Segovia</h6>
                                  <img  class="popup_image" src="venders/image/alc.jpg" >
                                </div> `,
              { closeButton: false, offset: L.point(0, -8) }
            );

            var spain_2 = L.marker([37.3831, -5.9902], {
              icon: myCastleIcon,
            }).addTo(mymap);
            spain_2.bindPopup(
              `<div class="popup">
                                  <h6> Real Alcazar of Seville</h6>
                                  <img  class="popup_image" src="venders/image/rea.jpg" >
                                </div> `,
              { closeButton: false, offset: L.point(0, -8) }
            );
            var spain = L.marker([37.8742, -4.7794], {
              icon: mytouristPlaceIcon,
            }).addTo(mymap);
            spain.bindPopup(
              `<div class="popup">
                            <h6>Córdoba Cathedral</h6>
                            <img  class="popup_image" src="venders/image/cor.jpg" >
                          </div> `,
              { closeButton: false, offset: L.point(0, -8) }
            );

            //custering for spain...

            var markers_sp = L.markerClusterGroup({
              animateAddingMarkers: true,
            });
            var markersList_sp = [spain, spain_1, spain_2];

            mymap.addLayer(markers_sp);

            for (var i = 0; i < markersList_sp.length; i++) {
              markers_sp.addLayer(markersList_sp[i]);
            }

            var areaSelect = document.querySelector(`[id="selcountry"]`);
            areaSelect.addEventListener(`change`, (e) => {
              setTimeout(function () {
                mymap.removeLayer(spain);
                mymap.removeLayer(spain_1);
                mymap.removeLayer(spain_2);
                mymap.removeLayer(markers_sp);
              }, 2000);
            });
            break;
          case "DE":
            var berlin1 = L.marker([52.52, 13.29], {
              icon: myCastleIcon,
            }).addTo(mymap);
            berlin1.bindPopup(
              `<div class="popup">
                              <h6>Charlottenburg Palace</h6>
                              <img  class="popup_image" src="venders/image/char.jpg" >
                            </div> `,
              { closeButton: false, offset: L.point(0, -8) }
            );

            var berlin2 = L.marker([52.51, 13.35], {
              icon: myCastleIcon,
            }).addTo(mymap);
            berlin2.bindPopup(
              `<div class="popup">
                              <h6>Bellevue Palace </h6>
                              <img  class="popup_image" src="venders/image/bell.jpg" >
                            </div> `,
              { closeButton: false, offset: L.point(0, -8) }
            );

            var berlin3 = L.marker([52.43, 13.11], {
              icon: myCastleIcon,
            }).addTo(mymap);
            berlin3.bindPopup(
              `<div class="popup">
                              <h6>Schloss Pfaueninsel</h6>
                              <img  class="popup_image" src="venders/image/pala.jpg" >
                            </div> `,
              { closeButton: false, offset: L.point(0, -8) }
            );

            var berlin4 = L.marker([52.57, 13.4], { icon: myCastleIcon }).addTo(
              mymap
            );
            berlin4.bindPopup(
              `<div class="popup">
                              <h6>Schoenhausen Palace</h6>
                              <img  class="popup_image" src="venders/image/scho.jpg" >
                            </div> `,
              { closeButton: false, offset: L.point(0, -8) }
            );

            //custering for berlin...

            var markers_br = L.markerClusterGroup({
              animateAddingMarkers: true,
            });
            var markersList_br = [berlin1, berlin2, berlin3, berlin4];

            mymap.addLayer(markers_br);

            for (var i = 0; i < markersList_br.length; i++) {
              markers_br.addLayer(markersList_br[i]);
            }

            var areaSelect = document.querySelector(`[id="selcountry"]`);
            areaSelect.addEventListener(`change`, (e) => {
              setTimeout(function () {
                mymap.removeLayer(berlin1);
                mymap.removeLayer(berlin2);
                mymap.removeLayer(berlin3);
                mymap.removeLayer(berlin4);
                mymap.removeLayer(markers_br);
              }, 2000);
            });
            break;
          case "CA":
            var canada1 = L.marker([51.4968, -115.9281], {
              icon: mytouristPlaceIcon,
            }).addTo(mymap);
            canada1.bindPopup(
              `<div class="popup">
                            <h6>Banff Park</h6>
                            <img  class="popup_image" src="venders/image/ban.jpg" >
                          </div> `,
              { closeButton: false, offset: L.point(0, -8) }
            );

            var canada2 = L.marker([43.6426, -79.3871], {
              icon: mytouristPlaceIcon,
            }).addTo(mymap);
            canada2.bindPopup(
              `<div class="popup">
                            <h6> CN Tower</h6>
                            <img  class="popup_image" src="venders/image/cn.jpg" >
                          </div> `,
              { closeButton: false, offset: L.point(0, -8) }
            );

            var canada3 = L.marker([46.8122, -71.2065], {
              icon: mytouristPlaceIcon,
            }).addTo(mymap);
            canada3.bindPopup(
              `<div class="popup">
                            <h6>Old Quebec</h6>
                            <img  class="popup_image" src="venders/image/bec.jpg" >
                          </div> `,
              { closeButton: false, offset: L.point(0, -8) }
            );

            //custering for canada...

            var markers_ca = L.markerClusterGroup({
              animateAddingMarkers: true,
            });
            var markersList_ca = [canada1, canada2, canada3];

            mymap.addLayer(markers_ca);

            for (var i = 0; i < markersList_ca.length; i++) {
              markers_ca.addLayer(markersList_ca[i]);
            }

            var areaSelect = document.querySelector(`[id="selcountry"]`);
            areaSelect.addEventListener(`change`, (e) => {
              setTimeout(function () {
                mymap.removeLayer(canada1);
                mymap.removeLayer(canada2);
                mymap.removeLayer(canada3);
                mymap.removeLayer(markers_ca);
              }, 2000);
            });

            break;
          case "US":
            var usa1 = L.marker([43.0962, -79.0377], {
              icon: mytouristPlaceIcon,
            }).addTo(mymap);
            usa1.bindPopup(
              `<div class="popup">
                            <h6>Niagara Falls</h6>
                            <img  class="popup_image" src="venders/image/nia.jpg" >
                          </div> `,
              { closeButton: false, offset: L.point(0, -8) }
            );

            var usa2 = L.marker([40.6892, -74.0445], {
              icon: mytouristPlaceIcon,
            }).addTo(mymap);
            usa2.bindPopup(
              `<div class="popup">
                            <h6>Statue of Liberty</h6>
                            <img  class="popup_image" src="venders/image/sta.jpg" >
                          </div> `,
              { closeButton: false, offset: L.point(0, -8) }
            );

            var usa3 = L.marker([38.8977, -77.0365], {
              icon: mytouristPlaceIcon,
            }).addTo(mymap);
            usa3.bindPopup(
              `<div class="popup">
                            <h6>White House</h6>
                            <img  class="popup_image" src="venders/image/whi.jpg" >
                          </div> `,
              { closeButton: false, offset: L.point(0, -8) }
            );

            var usa4 = L.marker([36.1147, -115.1728], {
              icon: mytouristPlaceIcon,
            }).addTo(mymap);
            usa4.bindPopup(
              `<div class="popup">
                            <h6> Las Vegas</h6>
                            <img  class="popup_image" src="venders/image/las.jpg" >
                          </div> `,
              { closeButton: false, offset: L.point(0, -8) }
            );

            var usa5 = L.marker([37.8199, -122.4783], {
              icon: mytouristPlaceIcon,
            }).addTo(mymap);
            usa5.bindPopup(
              `<div class="popup">
                            <h6> Golden Gate Bridge</h6>
                            <img  class="popup_image" src="venders/image/glo.jpg" >
                          </div> `,
              { closeButton: false, offset: L.point(0, -8) }
            );

            var usa6 = L.marker([40.758, -73.9855], {
              icon: mytouristPlaceIcon,
            }).addTo(mymap);
            usa6.bindPopup(
              `<div class="popup">
                            <h6>Times Square</h6>
                            <img  class="popup_image" src="venders/image/tim.jpg" >
                          </div> `,
              { closeButton: false, offset: L.point(0, -8) }
            );

            var usa7 = L.marker([44.428, -110.5885], {
              icon: mytouristPlaceIcon,
            }).addTo(mymap);
            usa7.bindPopup(
              `<div class="popup">
                            <h6>Yellowstone Park</h6>
                            <img  class="popup_image" src="venders/image/yel.jpg" >
                          </div> `,
              { closeButton: false, offset: L.point(0, -8) }
            );

            //custering for usa...

            var markers_usa = L.markerClusterGroup({
              animateAddingMarkers: true,
            });
            var markersList_usa = [usa1, usa2, usa3, usa4, usa5, usa6, usa7];

            mymap.addLayer(markers_usa);

            for (var i = 0; i < markersList_usa.length; i++) {
              markers_usa.addLayer(markersList_usa[i]);
            }

            var areaSelect = document.querySelector(`[id="selcountry"]`);
            areaSelect.addEventListener(`change`, (e) => {
              setTimeout(function () {
                mymap.removeLayer(usa1);
                mymap.removeLayer(usa2);
                mymap.removeLayer(usa3);
                mymap.removeLayer(usa4);
                mymap.removeLayer(usa5);
                mymap.removeLayer(usa6);
                mymap.removeLayer(usa7);
                mymap.removeLayer(markers_usa);
              }, 2000);
            });
            break;
          case "BR":
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

            var brazil2 = L.marker([-3.4653, -62.2169], {
              icon: mytouristPlaceIcon,
            }).addTo(mymap);
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
            //custering for brazil...

            var markers_bz = L.markerClusterGroup({
              animateAddingMarkers: true,
            });
            var markersList_bz = [brazil1, brazil2, brazil3];

            mymap.addLayer(markers_bz);

            for (var i = 0; i < markersList_bz.length; i++) {
              markers_bz.addLayer(markersList_bz[i]);
            }

            var areaSelect = document.querySelector(`[id="selcountry"]`);

            areaSelect.addEventListener(`change`, (e) => {
              setTimeout(function () {
                mymap.removeLayer(brazil1);
                mymap.removeLayer(brazil2);
                mymap.removeLayer(brazil3);
                mymap.removeLayer(markers_bz);
              }, 2000);
            });

            break;

          case "AR":
            var argentina1 = L.marker([-50.4967, -73.1377], {
              icon: mytouristPlaceIcon,
            }).addTo(mymap);
            argentina1.bindPopup(
              `<div class="popup">
                            <h6>Perito Moreno</h6>
                            <img  class="popup_image" src="venders/image/gla.jpg" >
                          </div> `,
              { closeButton: false, offset: L.point(0, -8) }
            );
            var areaSelect = document.querySelector(`[id="selcountry"]`);
            areaSelect.addEventListener(`change`, (e) => {
              setTimeout(function () {
                mymap.removeLayer(argentina1);
              }, 2000);
            });
            break;

          case "FR":
            var fort3 = L.marker([47.6161, 1.5172], {
              icon: myCastleIcon,
            }).addTo(mymap);
            fort3.bindPopup(
              `<div class="popup">
                                  <h6>Château de Chambord</h6>
                                  <img  class="popup_image" src="venders/image/cha.jpg" >
                                </div> `,
              { closeButton: false, offset: L.point(0, -8) }
            );
            var areaSelect = document.querySelector(`[id="selcountry"]`);
            areaSelect.addEventListener(`change`, (e) => {
              setTimeout(function () {
                mymap.removeLayer(fort3);
              }, 2000);
            });
            break;

          case "PE":
            var peru = L.marker([-15.9254, -69.3354], {
              icon: mytouristPlaceIcon,
            }).addTo(mymap);
            peru.bindPopup(
              `<div class="popup">
                            <h6>Lake Titicaca</h6>
                            <img  class="popup_image" src="venders/image/tit.jpg" >
                          </div> `,
              { closeButton: false, offset: L.point(0, -8) }
            );
            var areaSelect = document.querySelector(`[id="selcountry"]`);
            areaSelect.addEventListener(`change`, (e) => {
              setTimeout(function () {
                mymap.removeLayer(peru);
              }, 2000);
            });
            break;
          case "NL":
            var fort5 = L.marker([53.3429, 6.2674], {
              icon: myCastleIcon,
            }).addTo(mymap);
            fort5.bindPopup(
              `<div class="popup">
                            <h6>Dublin Castle</h6>
                            <img  class="popup_image" src="venders/image/dub.jpg" >
                          </div> `,
              { closeButton: false, offset: L.point(0, -8) }
            );
            var areaSelect = document.querySelector(`[id="selcountry"]`);
            areaSelect.addEventListener(`change`, (e) => {
              setTimeout(function () {
                mymap.removeLayer(fort5);
              }, 2000);
            });
            break;
          case "HU":
            var fort9 = L.marker([47.4962, 19.0396], {
              icon: myCastleIcon,
            }).addTo(mymap);
            fort9.bindPopup(
              `<div class="popup">
                            <h6> Buda Castle</h6>
                            <img  class="popup_image" src="venders/image/bud.jpg" >
                          </div> `,
              { closeButton: false, offset: L.point(0, -8) }
            );
            var areaSelect = document.querySelector(`[id="selcountry"]`);
            areaSelect.addEventListener(`change`, (e) => {
              setTimeout(function () {
                mymap.removeLayer(fort9);
              }, 2000);
            });
            break;
          case "SE":
            var fort10 = L.marker([59.3217, 17.8863], {
              icon: myCastleIcon,
            }).addTo(mymap);
            fort10.bindPopup(
              `<div class="popup">
                            <h6> Drottningholm Castle</h6>
                            <img  class="popup_image" src="venders/image/dro.jpg" >
                          </div> `,
              { closeButton: false, offset: L.point(0, -8) }
            );
            var areaSelect = document.querySelector(`[id="selcountry"]`);
            areaSelect.addEventListener(`change`, (e) => {
              setTimeout(function () {
                mymap.removeLayer(fort10);
              }, 2000);
            });
            break;

          default:
          //none...
        }

        var areaSelect = document.querySelector(`[id="selcountry"]`);
        areaSelect.addEventListener(`change`, (e) => {
          setTimeout(function () {
            mymap.removeLayer(boundry);
            // mymap.removeLayer(CLayer0);
          }, 2000);
        });
      });
    },
  });
});



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
