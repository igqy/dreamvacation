function myMap() {
  //Sukiyabashi Jiro
  var jiroCenter = new google.maps.LatLng(35.672661,139.764039);
  //myCenter is a Latitude amd Longitude object. It stores a point.

  var jiroMapCanvas = document.getElementById("jiro");
  //stores the link to the div that the map will go in.

  var jiroMapOptions = {
    center: jiroCenter,
    zoom: 18
  };
  //stores the options for the map. not we used
  //myCenter, the variable storing the point, in
  //the center option.

  var jiroMap = new google.maps.Map(jiroMapCanvas, jiroMapOptions);
  //creates the map itself. we gave it the variables for
  //the mapCanvas (where to put it) and mapOptions (what
  //it will look like)

  var jiroMarker = new google.maps.Marker({position:jiroCenter});
  //creates a new marker at the myCenter location (we used
  //that myCenter LatLng variable again).

  jiroMarker.setMap(jiroMap);
  //follows  object.method() notation.
  //the marker is the object. it's being told to
  //set its map  to the map we created two lines up.
  //this PUTS the marker on the map.

  //Sukiyabashi Jiro Satellite View
  var jiroCenterSat = new google.maps.LatLng(35.672661,139.764039);

  var jiroMapCanvasSat = document.getElementById("jiroSat");

  var jiroMapOptionsSat = {
    center: jiroCenterSat,
    zoom: 18,
    mapTypeId: 'satellite'
    };

  var jiroMapSat = new google.maps.Map(jiroMapCanvasSat, jiroMapOptionsSat);

  var jiroMarkerSat = new google.maps.Marker({position:jiroCenterSat});

  jiroMarkerSat.setMap(jiroMapSat);

  //Times Square
  var timesSquare = new google.maps.LatLng(40.758900, -73.985100);

  var timesSquareCanvas = document.getElementById("times");

  var timesSquareOptions = {
    center: timesSquare,
    zoom: 18,
  };

  var timesSquareMap = new google.maps.Map(timesSquareCanvas, timesSquareOptions);

  var timesSquareMarker = new google.maps.Marker({position:timesSquare});

  timesSquareMarker.setMap(timesSquareMap);

  //Times Square Satellite View
  var timesSquareSat = new google.maps.LatLng(40.758900, -73.985100);

  var timesSquareCanvasSat = document.getElementById("timessat");

  var timesSquareOptionsSat = {
    center: timesSquareSat,
    zoom: 18,
    mapTypeId: 'satellite'
  };

  var timesSquareMapSat = new google.maps.Map(timesSquareCanvasSat, timesSquareOptionsSat);

  var timesSquareMarkerSat = new google.maps.Marker({position:timesSquareSat});

  timesSquareMarkerSat.setMap(timesSquareMapSat);
}

$(document).ready(function(){
	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 900, 'swing', function () {
	        window.location.hash = target;
	    });
	});
});
