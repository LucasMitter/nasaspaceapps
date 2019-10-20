var map;
// Initialize and add the map
function initMap() {
    // The location of state
    var localinicio = {
        lat: -23.5354545, 
        lng: -46.7350709
    };
    // The map, centered at state
    map = new google.maps.Map(
        document.getElementById('map'), {
            zoom: 15,
            center: localinicio
        });
    // Set the markers
    setMarkers();
    directionsDisplay.setMap(map);
   calcRoute(map);
}

// Data for the markers consisting of a name, a LatLng and order
var marcas = [
            ['Metro Vila Lobos', -23.546003, -46.732764, 1],
            ['Mc Donalds', -23.5345029,-46.7335499, 2],
            ['NASA Space Apps', -23.5406247,-46.7341621, 3],
            ['Shopping Vila Lobos', -23.5510944,-46.7219555, 4],
            ['Leroy Merlin', -23.5459046,-46.7368972, 5]
        ];

function setMarkers() {
    // Adds markers to the map.

    // Marker sizes are expressed as a Size of X,Y
    var image = {
        url: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
        // This marker is 20 pixels wide by 32 pixels high.
        size: new google.maps.Size(20, 32),
        // The origin for this image is (0, 0).
        origin: new google.maps.Point(0, 0),
        // The anchor for this image is the base of the flagpole at (0, 32).
        anchor: new google.maps.Point(0, 32)
    };
    // Shapes define the clickable region of the icon.
    var shape = {
        coords: [1, 1, 1, 20, 18, 20, 18, 1],
        type: 'poly'
    };
    for (var i = 0; i < marcas.length; i++) {
        var marca = marcas[i];
        var marker = new google.maps.Marker({
            position: {
                lat: marca[1],
                lng: marca[2]
            },
            map: map,
            icon: image,
            shape: shape,
            title: marca[0],
            zIndex: marca[3]
        });
    }
}

function buscar(){
    var stringbusca = document.getElementById("campobusca").nodeValue;
    
}

function calcRoute(map) {
  var start = new google.maps.LatLng(41.850033, -87.6500523);
  var end = new google.maps.LatLng(37.3229978, -122.0321823);
  var request = {
    origin: start,
    destination: end,
    travelMode: 'WALKING'
  };

  directionsService.route(request, function(response, status) {
    if (status == 'OK') {
      directionsDisplay.setDirections(response);
    } else {
      alert("directions request failed, status=" + status)
    }
  });
}
google.maps.event.addDomListener(window, "load", initMap);

