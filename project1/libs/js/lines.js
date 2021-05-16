var castle = [
  {
    type: "Feature",
    properties: {
        name: "Maiden Castle",
        popupContent: `<div class="popup">
                              <h6>Maiden Castle</h6>
                              <img  class="popup_image" src="venders/image/maiden.jpg" >
                          </div> `,
    },
    geometry: {
      type: "Point",
      coordinates: [-2.4746, 50.6955],
    },
  },
  {
    type: "Feature",
    properties: {
        name: "Old Oswestry",
        popupContent: `<div class="popup">
                              <h6>Old Oswestry</h6>
                              <img  class="popup_image" src="venders/image/oswestry.jpg" >
                          </div> `,
    },
    geometry: {
      type: "Point",
      coordinates: [-3.0512, 52.8712],
    },
  },
  {
    type: "Feature",
    properties: {
        name: "Traprain Law",
        popupContent: `<div class="popup">
                              <h6>Traprain Law</h6>
                              <img  class="popup_image" src="venders/image/traprain.jpg" >
                          </div> `,
    },
    geometry: {
      type: "Point",
      coordinates: [-2.67170523, 55.96310043],
    },
  },
  {
    type: "Feature",
    properties: {
      name: "Hambledon Hill",
      popupContent: `<div class="popup">
                            <h6>Hambledon Hill</h6>
                            <img  class="popup_image" src="venders/image/hamb.jpg" >
                        </div> `,
    },
    geometry: {
      type: "Point",
      coordinates: [-2.22, 50.91],
    },
  },
  {
    type: "Feature",
    properties: {
      name: "Cadbury Castle",
      popupContent: `<div class="popup">
                            <h6>Cadbury Castle</h6>
                            <img  class="popup_image" src="venders/image/cadb.jpg" >
                        </div> `,
    },
    geometry: {
      type: "Point",
      coordinates: [-2.53178, 51.024058],
    },
  },
  {
    type: "Feature",
    properties: {
      name: "Battlesbury Camp",
      popupContent: `<div class="popup">
                            <h6>Battlesbury Camp</h6>
                            <img  class="popup_image" src="venders/image/batt.jpg" >
                        </div> `,
    },
    geometry: {
      type: "Point",
      coordinates: [-2.147398, 51.209513],
    },
  },
  {
    type: "Feature",
    properties: {
      name: "The British Camp",
      popupContent: `<div class="popup">
                            <h6>The British Camp</h6>
                            <img  class="popup_image" src="venders/image/brit.jpg" >
                        </div> `,
    },
    geometry: {
      type: "Point",
      coordinates: [-2.3520, 52.0582],
    },
  },
  {
    type: "Feature",
    properties: {
      name: "Cissbury Ring",
      popupContent: `<div class="popup">
                            <h6>Cissbury Ring</h6>
                            <img  class="popup_image" src="venders/image/ciss.jpg" >
                        </div> `,
    },
    geometry: {
      type: "Point",
      coordinates: [-0.382867, 50.86057],
    },
  },
  {
    type: "Feature",
    properties: {
      name: "Danebury",
      popupContent: `<div class="popup">
                            <h6>Danebury</h6>
                            <img  class="popup_image" src="venders/image/dane.jpg" >
                        </div> `,
    },
    geometry: {
      type: "Point",
      coordinates: [-1.537569, 51.136681],
    },
  },
  {
    type: "Feature",
    properties: {
      name: "Woden Law",
      popupContent: `<div class="popup">
                            <h6>Woden Law</h6>
                            <img  class="popup_image" src="venders/image/wode.jpg" >
                        </div> `,
    },
    geometry: {
      type: "Point",
      coordinates: [-2.368404, 55.406238],
    },
  },
];







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
      popupContent:
        "Distance between Maiden Castle and Durdle Door is 14 mi. ",
    },
    geometry: {
      type: "LineString",
      coordinates: [
        [-2.4746, 50.6955],
        [-2.2801, 50.6210],
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
      popupContent:
        "Distance between Cadbury Castle and Stourhead is 14 mi. ",
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
        [-2.3520, 52.0582],
        [-2.3470, 52.0491],
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
        [-2.3520, 52.0582],
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
        [-2.3520, 52.0582],
        [-1.4104, 51.0608],
      ],
    },
  }
];








var touristPlace = [
  {
    type: "Feature",
    properties: {
      name: "Nine Barrow Down",
      popupContent: `<div class="popup">
                        <h6>Nine Barrow Down</h6>
                        <img  class="popup_image" src="venders/image/nine.jpg" >
                    </div> `,
    },
    geometry: {
      type: "Point",
      coordinates: [-1.9904, 50.6304],
    }
  },
  {
    type: "Feature",
    properties: {
      name: "Durdle Door",
      popupContent: `<div class="popup">
                        <h6>Durdle Door</h6>
                        <img  class="popup_image" src="venders/image/durd.jpg" >
                    </div> `,
    },
    geometry: {
      type: "Point",
      coordinates: [-2.2801, 50.6210],
    }
  },
  {
    type: "Feature",
    properties: {
      name: "Poole Harbour",
      popupContent: `<div class="popup">
                        <h6>Poole Harbour</h6>
                        <img  class="popup_image" src="venders/image/pool.jpg" >
                    </div> `,
    },
    geometry: {
      type: "Point",
      coordinates: [-1.9865, 50.6908],
    }
  },
  {
    type: "Feature",
    properties: {
      name: "Isle Of Portland",
      popupContent: `<div class="popup">
                        <h6>Isle Of Portland</h6>
                        <img  class="popup_image" src="venders/image/isle.jpg" >
                    </div> `,
    },
    geometry: {
      type: "Point",
      coordinates: [-2.4343, 50.5475],
    }
  },
  {
    type: "Feature",
    properties: {
      name: "Old Harry Rocks",
      popupContent: `<div class="popup">
                        <h6>Old Harry Rocks</h6>
                        <img  class="popup_image" src="venders/image/old.jpg" >
                    </div> `,
    },
    geometry: {
      type: "Point",
      coordinates: [-1.9225, 50.6429],
    }
  },
  {
    type: "Feature",
    properties: {
      name: "Pontcysyllte Aqueduct",
      popupContent: `<div class="popup">
                        <h6>Pontcysyllte Aqueduct</h6>
                        <img  class="popup_image" src="venders/image/pont.jpg" >
                    </div> `,
    },
    geometry: {
      type: "Point",
      coordinates: [-3.0878, 52.9704],
    }
  },
  {
    type: "Feature",
    properties: {
      name: "Castell Dinas Bran",
      popupContent: `<div class="popup">
                        <h6>Castell Dinas Bran</h6>
                        <img  class="popup_image" src="venders/image/cast.jpg" >
                    </div> `,
    },
    geometry: {
      type: "Point",
      coordinates: [-3.1589, 52.9791],
    }
  },
  {
    type: "Feature",
    properties: {
      name: "Horseshoe Falls",
      popupContent: `<div class="popup">
                        <h6>Horseshoe Falls</h6>
                        <img  class="popup_image" src="venders/image/hors.jpg" >
                    </div> `,
    },
    geometry: {
      type: "Point",
      coordinates: [-3.1998, 52.9813],
    }
  },
  {
    type: "Feature",
    properties: {
      name: "Glastonbury Tor",
      popupContent: `<div class="popup">
                        <h6>Glastonbury Tor</h6>
                        <img  class="popup_image" src="venders/image/glas.jpg" >
                    </div> `,
    },
    geometry: {
      type: "Point",
      coordinates: [-2.6986, 51.1444],
    }
  },
  {
    type: "Feature",
    properties: {
      name: "Stourhead",
      popupContent: `<div class="popup">
                        <h6>Stourhead</h6>
                        <img  class="popup_image" src="venders/image/stou.jpg" >
                    </div> `,
    },
    geometry: {
      type: "Point",
      coordinates: [-2.3179, 51.1051],
    }
  },
  {
    type: "Feature",
    properties: {
      name: "Glastonbury Abbey",
      popupContent: `<div class="popup">
                        <h6>Glastonbury Abbey</h6>
                        <img  class="popup_image" src="venders/image/abbe.jpg" >
                    </div> `,
    },
    geometry: {
      type: "Point",
      coordinates: [-2.7153, 51.1461],
    }
  },
  {
    type: "Feature",
    properties: {
      name: "Swinyard Hill",
      popupContent: `<div class="popup">
                        <h6>Swinyard Hill</h6>
                        <img  class="popup_image" src="venders/image/swin.jpg" >
                    </div> `,
    },
    geometry: {
      type: "Point",
      coordinates: [-2.3470, 52.0491],
    }
  },
  {
    type: "Feature",
    properties: {
      name: "Malvern Court & Gardens",
      popupContent: `<div class="popup">
                        <h6>Malvern Court & Gardens</h6>
                        <img  class="popup_image" src="venders/image/malv.jpg" >
                    </div> `,
    },
    geometry: {
      type: "Point",
      coordinates: [-2.3369, 52.0612],
    }
  },
  {
    type: "Feature",
    properties: {
      name: "Farley Mount Country Park",
      popupContent: `<div class="popup">
                        <h6>Farley Mount Country Park</h6>
                        <img  class="popup_image" src="venders/image/farl.jpg" >
                    </div> `,
    },
    geometry: {
      type: "Point",
      coordinates: [-1.4104, 51.0608],
    }
  }
  
];

var myStyle = {
  color: "#ff7800",
  weight: 5,
  opacity: 0.65,
};
