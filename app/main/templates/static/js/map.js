function initMap() {
    // Obtener el elemento del mapa
    var mapDiv = document.getElementById('map');
    // Crear el mapa con centro y zoom
    var map = new google.maps.Map(mapDiv, {
        center: {lat: 25.375689, lng: -57.555215},
        zoom: 13
    });

var locations = [
    { lat: 25.375377, lng: -57.556346 }, // botiburguer
    { lat: 25.372701, lng: -57.559500 }, // villa anita
    { lat: 25.373913, lng: -57.560314 }, // posible casa de marcos
  ];

  locations.forEach(function(loc) {
    new google.maps.Marker({
      position: loc,
      map: map
    });
  });
}