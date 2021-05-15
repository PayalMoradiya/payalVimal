
 var fort = [{
    "type": "Feature",
    "properties": {
        "name": "Maiden Castle,Dorset",
        "image_Url": "venders/image/maiden.jpg",
        "popupContent": "Maiden Castle,Dorset!"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [-2.4746, 50.6955]
    }
 },
    { "type": "Feature",
     "properties": {
        "name": "Old Oswestry",
        "image_Url": "venders/image/maiden.jpg",
        "popupContent": "Old Oswestry!"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [-3.0512, 52.8712]
      }
 },
    {
     "type": "Feature",
     "properties": {
        "name": "Traprain Law",
        "image_Url": "venders/image/maiden.jpg",
        "popupContent": "Traprain Law"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [-2.67170523, 55.96310043]
      }
 },
    {
     "type": "Feature",
     "properties": {
        "name": "Hambledon Hill",
        "popupContent": `<div class="popup">
                            <h6>Hambledon Hill</h6>
                            <img  class="popup_image" src="venders/image/maiden.jpg" >
                        </div> `
    },
    "geometry": {
        "type": "Point",
        "coordinates": [-2.22, 50.91]
      }
    
},

];


var mylines = [
{
    "type": "Feature",
     "properties": {
        "name": "Hambledon Hill",
        "popupContent": "distance between Hambledon Hill Castle and Nine Barrow Down is 35.5 KM. "
    },
    "geometry": {
       "type": "LineString",
    "coordinates":[[-2.22, 50.91], [-2.00, 50.63]]
      }

}];

var touristPlace = [{
    "type": "Feature",
     "properties": {
        "name": "Nine Barrow Down",
        "popupContent": `<div style="text-align:center">
                            <h6>Nine Barrow Down</h6>
                            <img width="150" height="150" src="venders/image/nine.jpg" >
                        </div> `
    },
    "geometry": {
        "type": "Point",
        "coordinates": [-2.00, 50.63]
      }
    

}]

var myStyle = {
    "color": "#ff7800",
    "weight": 5,
    "opacity": 0.65
};
