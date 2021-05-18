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
  const{latitude, longitude} = position.coords;
  fetch(`https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=eb18f0f3e5134530a8ac32ba074e937a&language=en&pretty=1`).then(response => response.json()).then(function(data) {
        
    var lat = data.results[0].geometry.lat;
      console.log(lat);
      var lng = data.results[0].geometry.lng;
      console.log(lng);
      var address = data.results[0].formatted;
      console.log(address);
      var currentLocation = L.marker([lat,lng],{ icon: myIcon }).addTo(mymap);
      currentLocation.bindPopup("<b>" + address + "</b>", { closeButton: false }).openPopup();
    });
};    

navigator.geolocation.getCurrentPosition(successfullLookup, console.log);


//User Current location....



//onClick function on recenter button....

function myFunction() {
  mymap.locate({ setView: true, maxZoom: 18 });

  const successfullLookup = (position) => {
    const{latitude, longitude} = position.coords;
    fetch(`https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=eb18f0f3e5134530a8ac32ba074e937a&language=en&pretty=1`).then(response => response.json()).then(function(data) {
          
      var lat = data.results[0].geometry.lat;
        console.log(lat);
        var lng = data.results[0].geometry.lng;
        console.log(lng);
        var address = data.results[0].formatted;
        console.log(address);
        var currentLocation = L.marker([lat,lng],{ icon: myIcon }).addTo(mymap);
        currentLocation.bindPopup("<b>" + address + "</b>", { closeButton: false }).openPopup();
      });
  };    
  
  navigator.geolocation.getCurrentPosition(successfullLookup, console.log); 
}  

//Add Custom Icons....

var myIcon = L.icon({
  iconUrl: "venders/image/pin3.png",
  iconSize: [38, 48],
  iconAnchor: [22, 55],
  popupAnchor: [-3, -55],
});

var myCastleIcon = L.icon({
  iconUrl: "venders/image/castle.png",
  iconSize: [40, 40],
});

var mytouristPlaceIcon = L.icon({
  iconUrl: "venders/image/beach.png",
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
          countryMarker.bindPopup("<h6>Hello" + " " + countryName + "!</h6>", { closeButton: false });

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

var marker6 = L.marker([-33.869444, 151.2083333], { icon: myIcon }).addTo(
  mymap
);
marker6.bindPopup("<h6>Hello Sydney!</h6>", { closeButton: false });

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
).bindPopup("<h6>129 miles</h6>", { closeButton: false })
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

//add geojson data for lines and marker...
//add fort data using marker....

//add popups.....
function onEachFeature(feature, layer) {
  // does this feature have a property named popupContent?
  if (feature.properties && feature.properties.popupContent) {
    layer.bindPopup(feature.properties.popupContent, {
      closeButton: false,
      offset: L.point(0, -8),
    });
  }
}

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

var mark = new L.geoJSON(castle, {
  pointToLayer: function (geoJsonPoint, latlng) {
    return L.marker(latlng, {
      icon: myCastleIcon,
    });
  },
  onEachFeature: onEachFeature,
}).addTo(mymap);




// add lines.......
var line = new L.geoJSON(mylines, {
  style: myStyle,
  onEachFeature: oneachFeature,
}).addTo(mymap);




//add tourist place marker.....
var place = new L.geoJSON(touristPlace, {
  pointToLayer: function (geoJsonPoint, latlng) {
    return L.marker(latlng, {
      icon: mytouristPlaceIcon,
    });
  },
  onEachFeature: onEachFeature,
}).addTo(mymap);

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
        CLayer0.addTo(mymap).bindPopup(name + "<br>" + population);
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
  mark,
  line,
  place,
  line,
  mark,
  marker5,
  marker6,
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
  CLayer,
  CLayer1,
  CLayer2,
  CLayer3,
  CLayer4,
  CLayer5,
  CLayer6,
  CLayer7,
  CLayer8,
  polygon1,
  polygon2,
  polygon3,
  polygon4,
  polygon5,
  polygon6,
  polygon7,
  polygon8,
  polylines,
  polylines1,
  polylines2,
  polylines3,
  polylines4,
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
];

function populate() {
  for (var i = 0; i < 100; i++) {
    var m = L.marker(getRandomLatLng(mymap));
    markersList.push(m);
    markers.addLayer(m);
  }
  return false;
}
function getRandomLatLng(map) {
  var bounds = map.getBounds(),
    southWest = bounds.getSouthWest(),
    northEast = bounds.getNorthEast(),
    lngSpan = northEast.lng - southWest.lng,
    latSpan = northEast.lat - southWest.lat;

  return L.latLng(
    southWest.lat + latSpan * Math.random(),
    southWest.lng + lngSpan * Math.random()
  );
}

//populate();

mymap.addLayer(markers);

for (var i = 0; i < markersList.length; i++) {
  markers.addLayer(markersList[i]);
}

//Ugly add/remove code

L.DomUtil.get("populate").onclick = function () {
  var bounds = mymap.getBounds(),
    southWest = bounds.getSouthWest(),
    northEast = bounds.getNorthEast(),
    lngSpan = northEast.lng - southWest.lng,
    latSpan = northEast.lat - southWest.lat;
  var m = L.marker([
    southWest.lat + latSpan * 0.5,
    southWest.lng + lngSpan * 0.5,
  ]);
  markersList.push(m);
  markers.addLayer(m);
};
L.DomUtil.get("remove").onclick = function () {
  markers.removeLayer(markersList.pop());
};
