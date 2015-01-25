document.addEventListener('DOMContentLoaded', function () {
    if (navigator.geolocation) {
        //code goes here to find position
        var params = {
            enableHighAccuracy: true,
            timeout: 360000,
            maximumAge: 0
        };
        navigator.geolocation.getCurrentPosition(watchPosition, gpsError, params);
    }
});

function watchPosition( position ){ 
    var curLatitude=position.coords.latitude;
    var curLongitude=position.coords.longitude;
  console.log( position.coords.latitude );
  console.log( position.coords.longitude );
  console.log( position.coords.accuracy );
  console.log( position.coords.altitude );
   var canvas = document.createElement("canvas"); 
    canvas.id="mapCanvas";
    canvas.setAttribute("width", 400);
    canvas.setAttribute("height", 400);
    document.body.appendChild(canvas);
        
    console.log(canvas);
    var context = canvas.getContext("2d");
    var imageObj = new Image();
//
    imageObj.onload = function() {
        console.log("now image loaded");
        context.drawImage(imageObj, 0, 0, 400, 400);
        //var dataURL=canvas.toDataURL();
        //document.querySelector("#hiddenposter").innerHTML=dataURL;
    }
    imageObj.src="https://maps.googleapis.com/maps/api/staticmap?center="+curLatitude+","+curLongitude+"&zoom=14&size=400x400&maptype=roadmap&markers=color:blue%7Clabel:A%7C"+curLatitude+","+curLongitude;
}

function gpsError( error ){   
  var errors = {
    1: 'Permission denied',
    2: 'Position unavailable',
    3: 'Request timeout'
  };
  alert("Error: " + errors[error.code]);
}