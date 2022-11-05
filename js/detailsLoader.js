/*
        <button id="details-btn" onclick="document.getElementById('details-tab').classList.add('active');">DETAILS</button>
      <div id="details-tab" class="active">
            <a href="#" class="btn-close" id="btn-close-test" onclick="this.parentNode.classList.remove('active');">+</a>
            <div class="details-content">
                <div class="det detail-city" style="display: flex; align-items:center;">
                    <i class="fa-solid fa-map-pin" style="padding-right: 1rem;"></i>
                    <div class="text">
                        <span class="det-nuked-city">PARIS</span> has been nuked
                    </div>
                </div>
                <div class="det details-death" style="display: flex; align-items:center;">
                    <i class="fa-solid fa-skull" style="padding-right: 1rem;"></i>
                    <div class="text">
                        You have a <span class="det-death-prob">90%</span> chance of dying
                    </div>
                </div>
                <div class="det details-radius" style="display: flex; align-items:center;">
                    <i class="fa-solid fa-bullseye" style="padding-right: 1rem;"></i>
                    <div class="text">
                        <div class="details-radius-text">
                            0 to 3.0Km: Total destruction (assured death) <br>
                            3.0Km to 4.5Km : Severe damages<br>
                            4.5Km to 6Km : Moderate damages <br>
                            6Km to 30Km : Light damages <br>
                            30Km to 60Km : Shockwave & heat residues <br>
                        </div>
                    </div>
                </div>
                <div class="det details-radius" style="display: flex; align-items:center;">
                    <i class="fa-solid fa-ruler" style="padding-right: 1rem;"></i>
                    <div class="text">
                        You are <span class="details-distance">1680</span> metres from the point of impact
                    </div>
                </div>
            </div>
        </div>  

        
    Ville ciblée par le bombardement.
    Différents rayons et signification


    Explication du calcul
    Voir la 
*/
function loadDetails(city, bomb, radiusFactor, deathProb, distance) {
  document.getElementById("det-nuked-city").innerText = city;
  document.getElementById("details-distance").innerHTML = Math.trunc(distance);
  document.getElementById("det-death-prob").innerHTML = deathProb;

  let legends = ['Nuke point',...bomb.fields.map((a) => a.description)];

  let causeDiv = document.getElementsByClassName('details-cause');
  for(let legend of legends){
    let child = "";
    child += "oui"
    causeDiv.innerHTML += child;
  }

}

function getRadiusStr(bomb, bombIndex, radiusFactor) {
  return getRealValue(getRadiusAt(bomb, bombIndex), radiusFactor).toString();
}
function getRealValue(radius, radiusFactor) {
  return (radius / 1000) * radiusFactor;
}
function getRadiusAt(bomb, bombIndex) {
  return bomb.fields[bombIndex].radius;
}
