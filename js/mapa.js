var map;
// Initialize and add the map
function initMap() {
    // The location of campinas
    var localinicio = {
        lat: -23.540787, 
        lng: -46.734394
    };
    // The map, centered at campinas
    map = new google.maps.Map(
        document.getElementById('map'), {
            zoom: 15,
            center: localinicio
        });
    // Set the markers
    setMarkers();
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
    
    // no need to pass map or results div since
// we are only interested in travel time.
/*var directions = new GDirections (); 
    var wp = new Array ();
wp[0] = new GLatLng(32.742149,119.337218);
wp[1] = new GLatLng(32.735347,119.328485);
directions.loadFromWaypoints(wp);*/
    
}