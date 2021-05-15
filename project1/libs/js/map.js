
     //map....

    var mymap = L.map('mapid').setView([54.75844, -2.69531], 13).fitWorld();
    
  
         var tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
         maxZoom: 18,
         tileSize: 512,
         zoomOffset: -1,
         attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
         });
         tiles.addTo(mymap);


         //User Current location....

         mymap.locate({setView: true, maxZoom: 18});

         function onLocationFound(e) {
          var radius = e.accuracy;
      
          L.marker(e.latlng).addTo(mymap)
              .bindPopup("You are within " + radius + " meters from this point").openPopup();
      
          L.circle(e.latlng, radius).addTo(mymap);
      }
      
      mymap.on('locationfound', onLocationFound);

   
      //Add Custom Icons....
       
         var myIcon = L.icon({
          iconUrl: 'venders/image/leaf-red.png',
          iconSize: [50, 60],
          iconAnchor: [22, 94],
          popupAnchor: [-3, -76],
          //shadowUrl: 'my-icon-shadow.png',
         // shadowSize: [68, 95],
         // shadowAnchor: [22, 94]
      });
          var myCastleIcon = L.icon({
          iconUrl: 'venders/image/castle.png',
          iconSize: [40, 40],
          iconAnchor: [22, 94],
          popupAnchor: [-3, -76],
          
      });
      var mytouristPlaceIcon = L.icon({
          iconUrl: 'venders/image/beach.png',
          iconSize: [40, 40],
          iconAnchor: [22, 94],
          popupAnchor: [-3, -76],
          
      });
 
         //Add marker....
         var marker = L.marker([51.50939, -0.11832]).addTo(mymap);
         marker.bindPopup('<h4>Hello London!</h4>');
       // marker.setLatLng([51.50939, -0.11832]).addTo(mymap);
 
       var marker2 = L.marker([48.1372222, 11.5755555]).addTo(mymap);
         marker2.bindPopup('<h4>Hello Munich!</h4>');
 
        var marker3 = L.marker([23.22, 72.68]).addTo(mymap);
         marker3.bindPopup('<h4>Hello Gujarat!</h4>');
 
        var marker4 = L.marker([52.5002777, 13.39888]).addTo(mymap);
        marker4.bindPopup('<h4>Hello Berlin!</h4>');
 
        var marker5 = L.marker([50.1447222, 8.7269444]).addTo(mymap);
         marker5.bindPopup('<h4>Hello Frankfurt!</h4>');
 
        var marker6 = L.marker([-33.869444, 151.2083333]).addTo(mymap);
        marker6.bindPopup('<h4>Hello Sydney!</h4>');
 
        var marker7 = L.marker([48.856578, 2.351828]).addTo(mymap);
         marker7.bindPopup('<h4>Hello Paris!</h4>');
 
        var marker8 = L.marker([41.383333, 2.166667]).addTo(mymap);
        marker8.bindPopup('<h4>Hello Barcelona!</h4>');
 
        //marker for gujarat fort...
        var guj1 = L.marker([23.2001, 69.2685]).addTo(mymap);
         guj1.bindPopup('<h4>Roha Fort!</h4>');
 
       var guj2 = L.marker([23.4849, 70.4642]).addTo(mymap);
         guj2.bindPopup('<h4>Kanthkot Fort!</h4>');
 
         var guj3 = L.marker([22.4647, 70.0697]).addTo(mymap);
         guj3.bindPopup('<h4>Lakhota Fort!</h4>');
 
       var guj4 = L.marker([24.2291, 69.1897]).addTo(mymap);
         guj4.bindPopup('<h4>Vighakot Fort!</h4>');
 
         var guj5 = L.marker([22.1544, 71.3308]).addTo(mymap);
         guj5.bindPopup('<h4>Hingolgadh Fort!</h4>');
 
       var guj6 = L.marker([23.8525, 73.0052]).addTo(mymap);
         guj6.bindPopup('<h4>Idar Fort!</h4>');
 
 
 //Get Lat and Lng from OpenCage and fly to that location....      
 
 $('#btnwiki').on("click", function() {

        $.ajax({
            url: "libs/php/getLatLng.php",
            type: 'POST',
            dataType: 'json',
            data: {
              q: $('#selcountry').val()
            },
            success: function(result) {

                if (result.status.name == "ok") {
                   var lat = result['data'][0]["geometry"][ "lat"];
                   console.log(lat);
                    var lng = result['data'][0]["geometry"][ "lng"];
                   console.log(lng);
                    var countryName = result['data'][0]["components"]["country"];
                   console.log(countryName);
                
                   function flyToplace() {
                       var countryMarker = L.marker([lat, lng], {icon: myIcon}).addTo(mymap);
                     countryMarker.bindPopup('Hello' + ' ' + countryName + '!');

                        mymap.flyTo([lat, lng], 10, {
                            duration: 3
                        });
                   };
                   flyToplace();
                };
            },
            error: function(jqXHR, textStatus, errorThrown) {
                //error code..
                alert('error');
            }
        });
    });

 
          // Add circle...for population....
          var CLayer = L.circle([51.515193,-0.092468 ], { radius: 1000, color: 'coral'});
          CLayer.addTo(mymap).bindPopup('<h4>London polulation per square kilometre is 5701.</h4>');
 
          var CLayer1 = L.circle([22.58358253773391, 73.355712890625], { radius: 1000, color: 'coral'});
          CLayer1.addTo(mymap).bindPopup('<h4>Gujarat polulation per square kilometre is 310.</h4>');

       
    
         // var polygon = L.polygon( coors, {color: 'red'}).addTo(mymap);
                     
           //custering...
          // var cluster = L.markerClusterGroup();
         //  mymap.addLayer(cluster);
 
          //using polylines....
        //  var polylines = L.polyline([[24.2291, 69.1897], [23.2001, 69.2685]], {color: 'red'}).bindPopup('<h5>129 miles</h5>').addTo(mymap);
          //var polylines1 = L.polyline([[23.2001, 69.2685], [23.4849, 70.4642]], {color: 'red'}).bindPopup('<h5>89 miles</h5>').addTo(mymap);
      //    var polylines2 = L.polyline([[23.4849, 70.4642], [22.4647, 70.0697]], {color: 'red'}).bindPopup('<h5>115 miles</h5>').addTo(mymap);
        //  var polylines3 = L.polyline([[22.4647, 70.0697], [22.1544, 71.3308]], {color: 'red'}).bindPopup('<h5>100 miles</h5>').addTo(mymap);
         // var polylines4 = L.polyline([[22.1544, 71.3308], [23.8525, 73.0052]], {color: 'red'}).bindPopup('<h5>125 miles</h5>').addTo(mymap);
 
          //add geojson data for lines and marker...
        
     
    //add fort data using marker....

        //add popups.....
          function onEachFeature(feature, layer) {
              // does this feature have a property named popupContent?
              if (feature.properties && feature.properties.popupContent) {
                  layer.bindPopup(feature.properties.popupContent, {closeButton: false, offset: L.point(0, -8)});
              }
          }

          L.geoJSON(fort,{
            pointToLayer : function(geoJsonPoint, latlng) {
                     return L.marker(latlng, {
                       icon :myCastleIcon
                     });
                  },
            onEachFeature: onEachFeature
          }).addTo(mymap);

        // add lines.......
          L.geoJSON(mylines, {
               style: myStyle,
              onEachFeature: onEachFeature
          }).addTo(mymap);

        //add tourist place marker.....
         L.geoJSON(touristPlace,{
            pointToLayer : function(geoJsonPoint, latlng) {
                     return L.marker(latlng, {
                       icon : mytouristPlaceIcon
                     });
                  },
            onEachFeature: onEachFeature
          }).addTo(mymap);


          //country boundry....
          
        const log = console.log;
              const areaSelect = document.querySelector(`[id="selcountry"]`);
              var desc;
              var select;
              var Value;
        areaSelect.addEventListener(`change`, (e) => {
                // log(`e.target`, e.target);
                 select = e.target;
                 Value = e.target.value;
                 desc = select.options[select.selectedIndex].text;
                log( Value);

            L.geoJSON(geoJSON, {
                     filter: function(feature, layer) {

                          if(feature.properties.name === desc) {
                            return feature.geometry.coordinates;
                          }
                      
                      }
               }).addTo(mymap);

          });    


