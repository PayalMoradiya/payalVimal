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

//User Current location....


mymap.locate({ setView: true, maxZoom: 18 });

function onLocationFound(e) {
  var radius = e.accuracy;

  L.marker(e.latlng)
    .addTo(mymap)
    .bindPopup("You are within " + radius + " meters from this point")
    .openPopup();

  L.circle(e.latlng, radius).addTo(mymap);
}

mymap.on("locationfound", onLocationFound);

//onClick function on recenter button....

function myFunction(){
  mymap.locate({ setView: true, maxZoom: 18 });

function onLocationFound(e) {
  var radius = e.accuracy;

  L.marker(e.latlng)
    .addTo(mymap)
    .bindPopup("You are within " + radius + " meters from this point")
    .openPopup();

  L.circle(e.latlng, radius).addTo(mymap);
}

mymap.on("locationfound", onLocationFound);

}

//Add Custom Icons....

var myIcon = L.icon({
  iconUrl: "venders/image/pin3.png",
  iconSize: [38, 48],
  iconAnchor: [22, 55],
  popupAnchor: [-3, -55]
  });

var myCastleIcon = L.icon({
  iconUrl: "venders/image/castle.png",
  iconSize: [40, 40]
});

var mytouristPlaceIcon = L.icon({
  iconUrl: "venders/image/beach.png",
  iconSize: [40, 40]
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
          countryMarker.bindPopup("Hello" + " " + countryName + "!");

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
var marker = L.marker([51.50939, -0.11832], {icon:myIcon}).addTo(mymap);
marker.bindPopup("<h6>Hello London!</h6>", { closeButton: false});

var marker2 = L.marker([48.1372222, 11.5755555], {icon:myIcon}).addTo(mymap);
marker2.bindPopup("<h6>Hello Munich!</h6>", { closeButton: false});

var marker3 = L.marker([23.22, 72.68], {icon:myIcon}).addTo(mymap);
marker3.bindPopup("<h6>Hello Gujarat!</h6>", { closeButton: false});

var marker4 = L.marker([52.5002777, 13.39888], {icon:myIcon}).addTo(mymap);
marker4.bindPopup("<h6>Hello Berlin!</h6>", { closeButton: false});

var marker5 = L.marker([50.1447222, 8.7269444], {icon:myIcon}).addTo(mymap);
marker5.bindPopup("<h6>Hello Frankfurt!</h6>", { closeButton: false});

var marker6 = L.marker([-33.869444, 151.2083333], {icon:myIcon}).addTo(mymap);
marker6.bindPopup("<h6>Hello Sydney!</h6>", { closeButton: false});

var marker7 = L.marker([48.856578, 2.351828], {icon:myIcon}).addTo(mymap);
marker7.bindPopup("<h6>Hello Paris!</h6>", { closeButton: false});

var marker8 = L.marker([41.383333, 2.166667], {icon:myIcon}).addTo(mymap);
marker8.bindPopup("<h6>Hello Barcelona!</h6>", { closeButton: false});

//marker for gujarat fort...
var guj1 = L.marker([23.2001, 69.2685], {icon:myCastleIcon}).addTo(mymap);
guj1.bindPopup("<h6>Roha Fort!</h6>", { closeButton: false});

var guj2 = L.marker([23.4849, 70.4642], {icon:myCastleIcon}).addTo(mymap);
guj2.bindPopup("<h6>Kanthkot Fort!</h6>", { closeButton: false});

var guj3 = L.marker([22.4647, 70.0697], {icon:myCastleIcon}).addTo(mymap);
guj3.bindPopup("<h6>Lakhota Fort!</h6>", { closeButton: false});

var guj4 = L.marker([24.2291, 69.1897], {icon:myCastleIcon}).addTo(mymap);
guj4.bindPopup("<h6>Vighakot Fort!</h6>", { closeButton: false});

var guj5 = L.marker([22.1544, 71.3308], {icon:myCastleIcon}).addTo(mymap);
guj5.bindPopup("<h6>Hingolgadh Fort!</h6>", { closeButton: false});

var guj6 = L.marker([23.8525, 73.0052], {icon:myCastleIcon}).addTo(mymap);
guj6.bindPopup("<h6>Idar Fort!</h6>", { closeButton: false});

//marker for germany fort...

var berlin1 = L.marker([52.52, 13.29], {icon:myCastleIcon}).addTo(mymap);
berlin1.bindPopup( `<div class="popup">
                      <h6>Charlottenburg Palace</h6>
                      <img  class="popup_image" src="venders/image/char.jpg" >
                    </div> `, { closeButton: false,offset: L.point(0, -8)});
                  
var berlin2 = L.marker([52.51, 13.35], {icon:myCastleIcon}).addTo(mymap);
berlin2.bindPopup( `<div class="popup">
                      <h6>Bellevue Palace </h6>
                      <img  class="popup_image" src="venders/image/bell.jpg" >
                    </div> `, { closeButton: false,offset: L.point(0, -8)});

var berlin3 = L.marker([52.43, 13.11], {icon:myCastleIcon}).addTo(mymap);
berlin3.bindPopup( `<div class="popup">
                      <h6>Schloss Pfaueninsel</h6>
                      <img  class="popup_image" src="venders/image/pala.jpg" >
                    </div> `, { closeButton: false,offset: L.point(0, -8)});

var berlin4 = L.marker([52.57, 13.40], {icon:myCastleIcon}).addTo(mymap);
berlin4.bindPopup( `<div class="popup">
                      <h6>Schoenhausen Palace</h6>
                      <img  class="popup_image" src="venders/image/scho.jpg" >
                    </div> `, { closeButton: false,offset: L.point(0, -8)});



// Add circle...for population....
var CLayer = L.circle([51.515193, -0.092468], { radius: 5000, color: "coral" });
CLayer.addTo(mymap).bindPopup(
  "<h6>London polulation per square kilometre is 5701.</h6>" , { closeButton: false}
);

var CLayer1 = L.circle([22.58358253773391, 73.355712890625], {
  radius: 1000,
  color: "coral",
});
CLayer1.addTo(mymap).bindPopup(
  "<h6>Gujarat polulation per square kilometre is 310.</h6>", { closeButton: false}
);

var coord1 = [[[40.32246702124231, -3.703765869140625],[40.40931350359072,-3.5321044921874996],[40.48664852056083, -3.6309814453125],[40.491870649809165, -3.742218017578125],[40.40722213305287,-3.834228515625],[40.32246702124231, -3.703765869140625]]];
var polygon1 = L.polygon(coord1).bindPopup("<h6><em>Maiden</em>, The Capital of Spain!</h6>" ,
                                             { closeButton: false}).addTo(mymap);

var coord2 = [[[52.13348804077147,12.83203125],[52.482780222078226, 14.084472656249998],[53.08082737207479, 13.29345703125],[52.9883372533954, 11.79931640625],[52.496159531097106, 11.79931640625],[52.13348804077147, 12.83203125]]];                                            
var polygon2 = L.polygon(coord2).bindPopup("<h6><em>Berlin</em>, The Capital of Germany!</h6>" ,
                                             { closeButton: false}).addTo(mymap);

var coord3 = [[[-35.3190471425283, 149.09133911132812],[-35.31008240129421, 149.1352844238281],[-35.28822668202956, 149.1359710693359],[-35.280940130659246, 149.08721923828125],[-35.30167705397599, 149.06455993652344],[-35.3190471425283, 149.09133911132812]]];
var polygon3 = L.polygon(coord3).bindPopup("<h6><em>Canberra</em>, The Capital of Australia!</h6>" ,
                                             { closeButton: false}).addTo(mymap);









//custering...
// var cluster = L.markerClusterGroup();
//  mymap.addLayer(cluster);

//using polylines....
  var polylines = L.polyline([[24.2291, 69.1897], [23.2001, 69.2685]]).bindPopup('<h6>129 miles</h6>', { closeButton: false}).addTo(mymap);
var polylines1 = L.polyline([[23.2001, 69.2685], [23.4849, 70.4642]]).bindPopup('<h6>89 miles</h6>', { closeButton: false}).addTo(mymap);
    var polylines2 = L.polyline([[23.4849, 70.4642], [22.4647, 70.0697]]).bindPopup('<h6>115 miles</h6>', { closeButton: false}).addTo(mymap);
  var polylines3 = L.polyline([[22.4647, 70.0697], [22.1544, 71.3308]]).bindPopup('<h6>100 miles</h6>', { closeButton: false}).addTo(mymap);
 var polylines4 = L.polyline([[22.1544, 71.3308], [23.8525, 73.0052]]).bindPopup('<h6>125 miles</h6>', { closeButton: false}).addTo(mymap);



//add geojson data for lines and marker...
//add fort data using marker....

//add popups.....
function onEachFeature(feature, layer) {
  // does this feature have a property named popupContent?
  if (feature.properties && feature.properties.popupContent) {
    layer.bindPopup(feature.properties.popupContent, {
      closeButton: false,
      offset: L.point(0, -8)
    });
  }
}

//add popups for lines....
function oneachFeature(feature, layer) {
  // does this feature have a property named popupContent?
  if (feature.properties && feature.properties.popupContent) {
    layer.bindPopup(feature.properties.popupContent, {
      closeButton: false,
      offset: L.point(0, 0)
    });
  }
}

L.geoJSON(castle, {
  pointToLayer: function (geoJsonPoint, latlng) {
    return L.marker(latlng, {
      icon: myCastleIcon,
    });
  },
  onEachFeature: onEachFeature,
}).addTo(mymap);

// add lines.......
L.geoJSON(mylines, {
  style: myStyle,
  onEachFeature: oneachFeature,
}).addTo(mymap);

//add tourist place marker.....
L.geoJSON(touristPlace, {
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
var dropdownItems ;
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

//fitbounds....
var featureGroup = L.featureGroup([ guj1, guj2, guj3, guj4, guj5, guj6]);
mymap.fitBounds(featureGroup.getBounds());

/*
//World population...

$(document).ready(function() {
 // $('#btnwiki').on("click", function() {

    $.ajax({
        url: "libs/php/population.php",
        type: 'POST',
        dataType: 'json',
        data: {
           // q: $('#selcountry').val()
        },
        success: function(result) {



           console.log(result);

           $.each(result.data, function (i) {

             for(i=0; i<result.data.length; i++) {

              var Lat = result['data'][i]['latlng'][0];
              var Lng = result['data'][i]['latlng'][1];
              console.log(Lat);
              console.log(Lng);
   
              var population = result['data'][i]['population'];
              console.log(population);
             
              var name = result['data'][i]['name'];
              console.log(name);

              if(Lat === undefined && Lng === undefined) {
                continue;
              }
   
               var CLayer2 = L.circle([Lat, Lng], {
               radius: 10000,
               color: "red",
             });
             CLayer2.addTo(mymap).bindPopup(
             name + "<br>" + population
             );
   
             

             };

          
           });

                                     
        },
        error: function(jqXHR, textStatus, errorThrown) {
            //error code..
            alert('error');
        }
    });
});

//});
  */
var basemaps = {
  Places: L.tileLayer.wms('http://ows.mundialis.de/services/service?', {
    layers: 'OSM-WMS'
}),

'Topography, then places': L.tileLayer.wms('http://ows.mundialis.de/services/service?', {
    layers: 'TOPO-WMS,OSM-Overlay-WMS'
}),

'Places, then topography': L.tileLayer.wms('http://ows.mundialis.de/services/service?', {
    layers: 'OSM-Overlay-WMS,TOPO-WMS'
})
};

L.control.layers(basemaps).addTo(mymap);



