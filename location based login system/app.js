var lat1 = 0;
var long1 = 0;

var lat2 = 0;
var long2 = 0;

function getLocation(){
    var x = document.getElementById("userLocation");

    var lat1 = 0;
    var long1 = 0;

    var lat2 = 0;
    var long2 = 0;
    if(navigator.geolocation){

      navigator.geolocation.getCurrentPosition(showPosition);
      
    }

    else{
      x.innerHTML="Geolocation not supported";
    }
    function showPosition(position){
      x.innerHTML = "Latitude: " + position.coords.latitude + "<br>Longitude: " + position.coords.longitude;
    }
  }

function fived (latitude1,longitude1,latitude2,longitude2){
latitude1 = lat1;
longitude1 = long1;
latitude2 = lat2;
longitude2 = long2; 

}


alert(getDistanceFromLatLonInKm(59.3293371,13.4877472,59.3225525,13.4619422).toFixed(1));



function getDistanceFromLatLonInKm(lat1,lon1,lat2,lon2) {
  var R = 6371; // Radius of the earth in km
  var dLat = deg2rad(lat2-lat1);  // deg2rad below
  var dLon = deg2rad(lon2-lon1); 
  var a = 
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
    Math.sin(dLon/2) * Math.sin(dLon/2)
    ; 
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
  var d = R * c; // Distance in km
  return d;
}

function deg2rad(deg) {
  return deg * (Math.PI/180)
}