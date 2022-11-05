document.getElementById("test-btn").addEventListener("click", ()=>{
    clearMarkers();
    clearCircles();
    closePopup();
    document.getElementById("test-btn").disabled = true;
    let address = document.querySelector("#popup-address").value;
    document.getElementById("details-btn").style.display = 'flex';
    computeAddress(address);
});
let bomb = bombs[0];
let markers = [];
let circles = [];

function computeCoords(coords){
    let ll = new L.LatLng(parseFloat(coords[0].lat), parseFloat(coords[0].lon));
    //set view to the address, create a marker and delete old marker
    setViewAt(ll);
        //Find the closest big city
    let closestcity = findClosestCity(ll);
    let radiusFactor = closestcity.radiusFactor;
    radiusFactor > 1 ? radiusFactor = 1  : radiusFactor = radiusFactor;
    //Set a marker to closest city
    let cityLatLn = LatLngObject(closestcity);
    let m = new L.Marker(cityLatLn).addTo(map)
    m.setIcon(new explosionIcon());
    markers.push(m);        
    
    //Draw circles to represent the potential blast radius
    drawBlastRadius(cityLatLn, bomb.fields, radiusFactor);

    //Compute distance in meters between the big city and the address
    let distance = distanceBetween(ll, LatLngObject(closestcity));
    
    //Compute probability of dying depeding on the distance base on data :
    let res = computeDeathProb(bomb, distance, radiusFactor);
    let dyingProb = res[0];
    let bombfield = res[1];

    //show the results
    showResult(dyingProb,bombfield);
    loadDetails(closestcity.name, bomb, radiusFactor, dyingProb, distance);
}

function LatLngObject(cityObject){
    return new L.LatLng(cityObject.coordinates[0], cityObject.coordinates[1]);
}


function setViewAt(latLng){
    lastMarker = new L.Marker(latLng);
    lastMarker.addTo(map);
    markers.push(lastMarker);
    map.setView([latLng.lat, latLng.lng], 7, {
        pan:{
            animate : true,
            duration : 1.5
        },
        zoom: {
            animate:true
        }
    });
}

function clearMarkers(){
    for(let marker of markers){
        map.removeLayer(marker);
    }
}
function clearCircles(){
    for(let circle of circles){
        map.removeLayer(circle);
    }
}


function distanceBetween(latln1, latln2){
    let _firstPoint = latln1;
    let _secondPoint = latln2;
    return L.GeometryUtil.length([_firstPoint, _secondPoint]);
}


// latln : L.LatLng
// @returns : cityObject {}
function findClosestCity(latln){
    let closestCity;
    let closestDistance = Number.POSITIVE_INFINITY;
    for(let city of newdataCities) {
        let tempLatLng = new L.LatLng(city.coordinates[0], city.coordinates[1]);
        let temp = distanceBetween(latln, tempLatLng);  
        if(temp < closestDistance){
                closestDistance = temp;
                closestCity = city;
        }
    } 
    return closestCity;
}

//Retourne un tableau contenant toutes les coords correspondant à l'address passée
//en paramètres
function computeAddress(address) {
    var url = "https://nominatim.openstreetmap.org/search?format=json&limit=3&q=" + address 
    fetch(url)
                  .then(response => response.json())
                  .then(data => addressArr = data)
                  .then(show => computeCoords(addressArr))
                  .catch(err => document.getElementById("details-btn").style.display = 'none')    
}

function drawBlastRadius(latln, bombRadius, radiusFactor){
    for(let radius of bombRadius)
    {
        let circle = L.circle(latln, radius.radius * radiusFactor).addTo(map);
        circles.push(circle);
        circle.setStyle({fillColor: radius.color, color:radius.color, fillopacity:0.01});
    }
}

function computeDeathProb(bomb, distance, radiusFactor){
    let previousRadius = 0;
    let previousDanger = 1;
    for(field of bomb.fields){
        if(distance < field.radius * radiusFactor)
            return [Math.round((lerp(distance, previousRadius, field.radius* radiusFactor, previousDanger, field.danger))* 100), field];
        else
        {
            previousRadius = field.radius * radiusFactor;
            previousDanger = field.danger;
        }
    }
    return [0, null];
}

//Compute dying probability linearly decreasing with the distance of impact
function lerp(distance, previousRadius, Radius, previousProb, Prob){
    if(Radius-previousRadius == 0)
        return 0;
    return (Prob-previousProb) / (Radius-previousRadius) * (distance - previousRadius) + previousProb;
}


var explosionIcon = L.Icon.extend({
    options: {
        iconUrl: './ressources/images/markerExplosion.svg',
        iconSize: [50,50],
    }
})


function showResult(dyingProb, Bombfield){
    if(dyingProb == 0)
    {
        return
    }
    else{
        document.querySelector("#dyingProb").innerHTML = dyingProb; 
        document.querySelector(".result").style.display = 'flex'; 
        document.querySelector(".deathCause").innerHTML = field.deathCause[getRandomInt(field.deathCause.length)];
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}