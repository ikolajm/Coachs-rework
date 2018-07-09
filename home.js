// Slideout Menu Function

  // Open
  function slideout() {
    document.getElementById("navToggle").style.width = "40%";
  }

  // Close
  function slidein() {
    document.getElementById("navToggle").style.width = "0%";
  }
// End Slideout


//Google Maps
  // Initialize and add the map
  function initMap() {
    // Coaches
    var coachs = {lat: 42.043153, lng: -86.51485};
    // The map, centered at Coachs
    var map = new google.maps.Map(
        document.getElementById('map'), {zoom: 4, center: coachs});
    // The marker, positioned at Coachs
    var marker = new google.maps.Marker({position: coachs, map: map});
  }
//End Maps
