// Google map
function initMap() {
  var uluru = {lat: 0.20583, lng: 32.58250};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: uluru
  });
  var marker = new google.maps.Marker({
    position: uluru,
    map: map
  });
}