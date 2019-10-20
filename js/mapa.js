var map;
// Initialize and add the map
function initMap() {
    // The location of campinas
    var campinas = {
        lat: -22.8723,
        lng: -47.044
    };
    // The map, centered at campinas
    map = new google.maps.Map(
        document.getElementById('map'), {
            zoom: 15,
            center: campinas
        });
    // Set the markers
    setMarkers();
}
// Data for the markers consisting of a name, a LatLng and order
var marcas = [
            ['Kartodromo', -22.8782, -47.0620, 1],
            ['Praça Arautos', -22.8741, -47.0431, 4],
            ['Lago do Café', -22.8709, -47.0479, 3],
            ['Locomotiva', -22.8755, -47.0489, 5],
            ['Portao2', -22.873, -47.058, 2]
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