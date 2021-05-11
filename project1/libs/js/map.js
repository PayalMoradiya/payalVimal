
         var mymap = L.map('mapid').setView([54.75844, -2.69531], 5);
    
  
         var tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
         maxZoom: 19,
         attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
         });
         tiles.addTo(mymap);
   
 
       //  const icon = L.icon({
         //    iconUrl: 'mark.jfif',
           //  iconSize: [80,60]
         //})
         
        //marker for country....
        mymap.setView([54.75844, -2.69531])
        L.marker([40, -4]).bindPopup('<h4>Hello Spain!</h4>').addTo(mymap);
        L.marker([-25, 135]).bindPopup('<h4>Hello Australia!</h4>').addTo(mymap);
        L.marker([-42, 174]).bindPopup('<h4>Hello New Zealand!</h4>').addTo(mymap);
 
        L.marker([54.75844, -2.69531]).bindPopup('<h4>Hello United Kingdom!</h4>').addTo(mymap);
        L.marker([22, 79]).bindPopup('<h4>Hello India!</h4>').addTo(mymap);
        L.marker([42.83333, 12.83333]).bindPopup('<h4>Hello Italy!</h4>').addTo(mymap);
        L.marker([51.5, 10.5]).bindPopup('<h4>Hello Germany!</h4>').addTo(mymap);
        L.marker([46, 2]).bindPopup('<h4>Hello France!</h4>').addTo(mymap);
  
 
 
 
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
 
 
       
 
 
 
 
       //marker fly.....
        search = document.getElementById('btnwiki');
       
        search.addEventListener('click', () => {
          flyToplace();
        });
 
        function flyToplace() {
          latitude = document.getElementById('txtlat').textContent;
         longitude = document.getElementById('txtlng').textContent;
        
 
          mymap.flyTo([latitude, longitude], 10, {
            duration: 3
           })
          };
          flyToplace();
 
 
          // Add circle...for population....
          var CLayer = L.circle([51.515193,-0.092468 ], { radius: 1000, color: 'coral'});
          CLayer.addTo(mymap).bindPopup('<h4>London polulation per square kilometre is 5701.</h4>');
 
          var CLayer1 = L.circle([22.58358253773391, 73.355712890625], { radius: 1000, color: 'coral'});
          CLayer1.addTo(mymap).bindPopup('<h4>Gujarat polulation per square kilometre is 310.</h4>');
 
       
            
           //Add geojson data...
           let coordinate;
          coordinate = document.getElementById('name1').textContent;

          
 
          var polygon = L.polygon( coordinate, {color: 'red'}).addTo(mymap);
                     
           //custering...
          // var cluster = L.markerClusterGroup();
         //  mymap.addLayer(cluster);
 
          //using polylines....
          var polylines = L.polyline([[24.2291, 69.1897], [23.2001, 69.2685] ], {color: 'red'}).bindPopup('<h5>129 miles</h5>').addTo(mymap);
          var polylines1 = L.polyline([[23.2001, 69.2685], [23.4849, 70.4642] ], {color: 'red'}).bindPopup('<h5>89 miles</h5>').addTo(mymap);
          var polylines2 = L.polyline([[23.4849, 70.4642], [22.4647, 70.0697] ], {color: 'red'}).bindPopup('<h5>115 miles</h5>').addTo(mymap);
          var polylines3 = L.polyline([[22.4647, 70.0697], [22.1544, 71.3308] ], {color: 'red'}).bindPopup('<h5>100 miles</h5>').addTo(mymap);
          var polylines4 = L.polyline([[22.1544, 71.3308], [23.8525, 73.0052] ], {color: 'red'}).bindPopup('<h5>125 miles</h5>').addTo(mymap);
 
 