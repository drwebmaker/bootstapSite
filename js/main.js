$(document).ready(function(){
  function init_map() {
    var var_location = new google.maps.LatLng(51.488352, -0.165316);

    var var_mapoptions = {
      center: var_location,
      zoom: 14
    };

    var var_marker = new google.maps.Marker({
      position: var_location,
      map: var_map,
      title:"Venice"});

    var var_map = new google.maps.Map(document.getElementById("map-container"),
      var_mapoptions);

    var_marker.setMap(var_map);

  }

  google.maps.event.addDomListener(window, 'load', init_map);





$(".scrollTo").on("click","a", function (event) {
  event.preventDefault();

  var id  = $(this).attr('href'),

    top = $(id).offset().top;

  $('body,html').animate({scrollTop: top}, 1000);
});

});