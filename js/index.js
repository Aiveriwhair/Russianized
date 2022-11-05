// var _0xd457ab=_0x3a31;function _0x3a31(_0x1587c3,_0x1bafb6){var _0x1c3c3b=_0x1c3c();return _0x3a31=function(_0x3a313c,_0x398e40){_0x3a313c=_0x3a313c-0x1e2;var _0x3e1851=_0x1c3c3b[_0x3a313c];return _0x3e1851;},_0x3a31(_0x1587c3,_0x1bafb6);}(function(_0x20b2a7,_0x598cb5){var _0x4d7161=_0x3a31,_0xd8a418=_0x20b2a7();while(!![]){try{var _0x2d4704=-parseInt(_0x4d7161(0x1ee))/0x1*(parseInt(_0x4d7161(0x1fd))/0x2)+parseInt(_0x4d7161(0x1eb))/0x3*(parseInt(_0x4d7161(0x1fe))/0x4)+-parseInt(_0x4d7161(0x1e6))/0x5*(parseInt(_0x4d7161(0x204))/0x6)+parseInt(_0x4d7161(0x1e2))/0x7*(parseInt(_0x4d7161(0x20a))/0x8)+parseInt(_0x4d7161(0x1fa))/0x9*(-parseInt(_0x4d7161(0x200))/0xa)+parseInt(_0x4d7161(0x1f4))/0xb*(parseInt(_0x4d7161(0x202))/0xc)+parseInt(_0x4d7161(0x20c))/0xd;if(_0x2d4704===_0x598cb5)break;else _0xd8a418['push'](_0xd8a418['shift']());}catch(_0x25fc72){_0xd8a418['push'](_0xd8a418['shift']());}}}(_0x1c3c,0xbd732),document['body'][_0xd457ab(0x1fc)]['height']=window['innerHeight'],document[_0xd457ab(0x1ec)][_0xd457ab(0x1fc)][_0xd457ab(0x1ed)]=_0xd457ab(0x1f9));var map=L['map'](_0xd457ab(0x1fb),{'fadeAnimation':!![],'zoomAnimation':!![]});let geocoder=new L[(_0xd457ab(0x206))]['Geocoder'][(_0xd457ab(0x1f5))]();var defaultPos=_0xd457ab(0x1f7);geocoder[_0xd457ab(0x207)](defaultPos,function(_0x34c174){var _0x1c0f98=_0xd457ab;latLng=new L[(_0x1c0f98(0x1e4))](_0x34c174[0x0]['center'][_0x1c0f98(0x209)],_0x34c174[0x0][_0x1c0f98(0x20b)][_0x1c0f98(0x1ea)]),map[_0x1c0f98(0x1f3)]([_0x34c174[0x0][_0x1c0f98(0x20b)][_0x1c0f98(0x209)],_0x34c174[0x0][_0x1c0f98(0x20b)][_0x1c0f98(0x1ea)]],0x3,{'pan':{'animate':!![],'duration':1.5},'zoom':{'animate':!![]}});}),L['tileLayer'](_0xd457ab(0x205),{'attribution':_0xd457ab(0x1e5)})[_0xd457ab(0x1f6)](map);function closePopup(){var _0x4ab60f=_0xd457ab;document[_0x4ab60f(0x1f2)](_0x4ab60f(0x1ff))['style'][_0x4ab60f(0x201)]=_0x4ab60f(0x1f0);}function openPopup(){var _0xd3092b=_0xd457ab;document[_0xd3092b(0x1f2)]('.popup')[_0xd3092b(0x1fc)][_0xd3092b(0x201)]='flex';}function _0x1c3c(){var _0x842fc4=['4720WuFphb','display','8088IViRFJ','btn-open-test','7836816bdAKhd','https://{s}.tile.osm.org/{z}/{x}/{y}.png','Control','geocode','disabled','lat','24vGluOQ','center','17857047QphYaO','1807610NqzoqY','btn-close-result','LatLng','&copy;\x20<a\x20href=\x22https://osm.org/copyright\x22>OpenStreetMap</a>\x20contributors','5aMMRFL','btn-open-test-side','.result','test-btn','lng','3fOXWLa','body','position','2hQAUZY','click','none','getElementById','querySelector','setView','9251MEelnc','Nominatim','addTo','Paris','addEventListener','fixed','16407sEntoo','map','style','1204922NmShrx','5729428XhKcLO','.popup'];_0x1c3c=function(){return _0x842fc4;};return _0x1c3c();}document[_0xd457ab(0x1f1)](_0xd457ab(0x203))[_0xd457ab(0x1f8)]('click',()=>{var _0x3ed1e3=_0xd457ab;openPopup(),closeNav(),document[_0x3ed1e3(0x1f1)]('test-btn')[_0x3ed1e3(0x208)]=![];}),document[_0xd457ab(0x1f1)](_0xd457ab(0x1e7))[_0xd457ab(0x1f8)]('click',()=>{openPopup(),closeNav();}),document[_0xd457ab(0x1f1)]('btn-close-test')['addEventListener']('click',()=>{var _0x3d15c2=_0xd457ab;closePopup(),document[_0x3d15c2(0x1f1)](_0x3d15c2(0x1e9))[_0x3d15c2(0x208)]=!![];}),document[_0xd457ab(0x1f1)](_0xd457ab(0x1e3))['addEventListener'](_0xd457ab(0x1ef),()=>{var _0x79c934=_0xd457ab;document[_0x79c934(0x1f2)](_0x79c934(0x1e8))[_0x79c934(0x1fc)][_0x79c934(0x201)]=_0x79c934(0x1f0);});
//Ajustement de la fenetre à la taille de la page dans le navigateur (pour mobile notamment)
document.body.style.height = window.innerHeight;
document.body.style.position = 'fixed';



var map = L.map('map', {
    fadeAnimation: true,
    zoomAnimation : true
});

let geocoder = new L.Control.Geocoder.Nominatim();
var defaultPos = "Paris";

geocoder.geocode(defaultPos, function(results) {    
    latLng= new L.LatLng(results[0].center.lat, results[0].center.lng);
    //marker = new L.Marker (latLng);
    //marker.addTo(map);
    map.setView([results[0].center.lat, results[0].center.lng], 3, {
        pan:{
            animate : true,
            duration : 1.5
        },
        zoom: {
            animate:true
        }
    });
});

L.tileLayer('https://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);


function closePopup(){
    document.querySelector(".popup").style.display = 'none';
}
function openPopup(){
    document.querySelector(".popup").style.display = 'flex';
}

document.getElementById("btn-open-test").addEventListener("click", ()=>{
    openPopup();
    closeNav();
    document.getElementById("test-btn").disabled = false;
});
document.getElementById("btn-open-test-side").addEventListener("click", ()=>{
    openPopup();
    closeNav();
});
document.getElementById("btn-close-result").addEventListener("click", ()=>{
    document.querySelector(".result").style.display = 'none';
});