//classes
class terrainobjects{

  constructor() {
    this.satellites=[];
    this.dishes=[];
    this.currentbeam=null;
  }
  get getSatellitesInTerrain(){
    return this.satellites;
  }
  get getDishesInTerrain(){
    return this.dishes;
  }
  get getCurrentbeamInTerrain(){
    return this.currentbeam;
  }
  set setCurrentBeamInTerrain(currentbeam){
    this.currentbeam=currentbeam;
  }
}
class t_satellite{
  constructor(id, name, color, czml,beams){
    this.id=id;
    this.name=name;
    this.color=color;
    this.czml=czml;
    this.beams=beams;
  }
  get getId(){
    return this.id;
  }
  get getName(){
    return this.name;
  }
  get getColor(){
    return this.color;
  }
  get getCzml(){
    return this.czml;
  }
  get getBeams(){
    return this.beams;
  }
  set setBeams(beamsarr){
    this.beams=beamsarr;
  }
}
class dish {
  constructor(id, name, longitude, latitude, size, gain, usage){
      this.id=id;
      this.name=name;
      this.longitude=longitude;
      this.latitude=latitude;
      this.size=size;
      this.gain=gain;
      this.usage=usage;

  }
  get getId(){
    return this.id;
  }
  get getName(){
    return this.name;
  }
  get getLongtitude(){
    return this.longitude;
  }

  get getLatitude(){
    return this.latitude;
  }
  get getSize(){
    return this.size;
  }
  get getSizeString(){
    return this.size + " cm";
  }
  get getGain(){
      return this.gain;
  }
  get getGainString(){
    return this.gain + " dB";
  }
  get getUsage(){
    return this.usage;
  }

}
class beam{
    constructor(name, data){
      this.name=name;
      this.data=data;
    }
    get getName(){
      return this.name;
    }
    get getData(){
      return this.data;
    }
}

//functions

function toggledarkmode(){
    dmswitch=document.getElementById("darkmodeswitch");
    if(dmswitch.checked== true){
      activatedarkmode();
    }
    else{
      deactivatedarkmode();
    }
}
function toggledarkmodeonclick(){
    toggledarkmode();
    settingssaver('darkmodeswitch',document.getElementById("darkmodeswitch").checked);
}

function togglelengthunit(){
  //tbi
}
function togglelengthunitonclick(){
  togglelengthunit();
  settingssaver('lengthunitswitch',document.getElementById("lengthunitswitch").checked);

}

function toggleeciunit(){
  //tbi
}
function toggleeciunitonclick(){
  toggleeciunit();
  settingssaver('eciunitswitch',document.getElementById("eciunitswitch").checked);

}
function toggletempunit(){
  //tbi
}
function toggletempunitonclick(){
  toggletempunit();
  settingssaver('tempunitswitch',document.getElementById("tempunitswitch").checked);

}

function togglexaxis(){
  //tbi
}
function togglexaxisonclick(){
  togglexaxis();
  settingssaver('xaxischeckbox',document.getElementById("xaxischeckbox").checked);

}

function toggleyaxis(){
  //tbi
}
function toggleyaxisonclick(){
  toggleyaxis();
  settingssaver('yaxischeckbox',document.getElementById("yaxischeckbox").checked);

}

function togglezaxis(){
  //tbi
}
function togglezaxisonclick(){
  togglezaxis();
  settingssaver('zaxischeckbox',document.getElementById("zaxischeckbox").checked);

}
function writetolog(message,status){
  var x=null;
  var x=$.ajax({
             url: '/Apps/Logwriter.php',
             type: 'POST',
             data: {message: message, status: status
             },
             success: function(data) {
             },
             fail: function(data){
               document.getElementById('errorwindow').innerHTML='<div style="display: block; margin: auto; text-align:center;">  <img style="vertical-align:middle;" src="Resources/error-icon.png" width="48" height="48">  <span style="color: red; font-size: 18px; font-weight: bold;">Cannot write to logfile.</span> </div>   <div style="text-align:center;"> <button onclick="showlogwindow();" style="margin:auto; text-align:center;">Show Log</button> </div>';
               showerrorwindow();
             }
         });

}

function satellitelistloader(windowname){
  $.ajax({
             url: '/Apps/Satellitelistgetter.php',
             type: 'POST',
             data: {windowname: windowname},
              error:function (xhr, ajaxOptions, thrownError){
                  if(xhr.status!=200) {
                    document.getElementById('errorwindow').innerHTML='<div style="display: block; margin: auto; text-align:center;">  <img style="vertical-align:middle;" src="Resources/error-icon.png" width="48" height="48">  <span style="color: red; font-size: 18px; font-weight: bold;">Cannot load satellite list.</span> </div>   <div style="text-align:center;"> <button onclick="showlogwindow();" style="margin:auto; text-align:center;">Show Log</button> </div>';
                    showerrorwindow();
                  }
              },
              success: function(data) {
               if(windowname=="selectsatellitewindow"){
                  document.getElementById('selectsatelliteloading').style.display="none";
                  document.getElementById('selectsatellitemainwindow').style.display="block";
                  document.getElementById('selectsatellitewindowtablespan').innerHTML=data;
                }
                else if(windowname=="deletesatellitewindow"){
                   document.getElementById('deletesatelliteloading').style.display="none";
                   document.getElementById('deletesatellitemainwindow').style.display="block";
                   document.getElementById('deletesatellitewindowtablespan').innerHTML=data;
                }
                return data;
             }
         });
}

function settingssaver(setting,value){
  $.ajax({
             url: '/Apps/Settingssaver.php',
             type: 'POST',
             data:{
                setting: setting, value: value
              },
              error:function (xhr, ajaxOptions, thrownError){
                  if(xhr.status!=200) {
                    document.getElementById('errorwindow').innerHTML='<div style="display: block; margin: auto; text-align:center;">  <img style="vertical-align:middle;" src="Resources/error-icon.png" width="48" height="48">  <span style="color: red; font-size: 18px; font-weight: bold;">Request failed</span> </div>   <div style="text-align:center;"> <button onclick="showlogwindow();" style="margin:auto; text-align:center;">Show Log</button> </div>';
                    showerrorwindow();
                  }
              },
              success: function(data) {
             }
         });
}

function loadsettings(){
  $.getScript('user_settings.js')
    .done(function( script, textStatus ) {
      writetolog("Loading settings file...","OK");
    })
    .fail(function( jqxhr, settings, exception ) {
      writetolog("Loading settings file...","FAILED");
      document.getElementById('errorwindow').innerHTML='<div style="display: block; margin: auto; text-align:center;">  <img style="vertical-align:middle;" src="Resources/error-icon.png" width="48" height="48">  <span style="color: red; font-size: 18px; font-weight: bold;">Cannot load settings file.</span> </div>   <div style="text-align:center;"> <button onclick="showlogwindow();" style="margin:auto; text-align:center;">Show Log</button> </div>';
      showerrorwindow();

  });
}

function loadsetting(setting,value){
  document.getElementById(setting).checked=value;
  switch (setting) {
    case 'tempunitswitch':
      toggletempunit();
    break;
    case 'lengthunitswitch':
      togglelengthunit();
    break;
    case 'eciunitswitch':
      toggleeciunit();
    break;
    case 'xaxischeckbox':
      togglexaxis();
    break;
    case 'yaxischeckbox':
      toggleyaxis();
    break;
    case 'zaxischeckbox':
      togglezaxis();
    break;
    case 'darkmodeswitch':
      toggledarkmode();
    break;
  }
}

function initializesettings(){
    document.getElementById("tempunitswitch").checked = false;
    document.getElementById("lengthunitswitch").checked = false;
    document.getElementById("eciunitswitch").checked = false;
    document.getElementById("xaxischeckbox").checked = false;
    document.getElementById("yaxischeckbox").checked = false;
    document.getElementById("zaxischeckbox").checked = false;
    document.getElementById("darkmodeswitch").checked = false;
    toggletempunit();
    togglelengthunit();
    toggleeciunit();
    togglexaxis();
    toggleyaxis();
    togglezaxis();
    toggledarkmode();
}

function activatedarkmode(){
  document.getElementById("projectdropdown").className="dropdown dropdown-bubble dropdown-bubble-dark";
  document.getElementById("projectdropdownmenu").className="dropdown-menu dropdown-menu-dark";
  document.getElementById("satellitesdropdown").className="dropdown dropdown-bubble dropdown-bubble-dark";
  document.getElementById("satellitesdropdownmenu").className="dropdown-menu dropdown-menu-dark";
  document.getElementById("antennasdropdown").className="dropdown dropdown-bubble dropdown-bubble-dark";
  document.getElementById("antennasdropdownmenu").className="dropdown-menu dropdown-menu-dark";
  document.getElementById("communicationsdropdown").className="dropdown dropdown-bubble dropdown-bubble-dark";
  document.getElementById("communicationsdropdownmenu").className="dropdown-menu dropdown-menu-dark";
  document.getElementById("beamdropdown").className="dropdown dropdown-bubble dropdown-bubble-dark";
  document.getElementById("beamdropdownmenu").className="dropdown-menu dropdown-menu-dark";
  document.getElementById("rightclickaction").className="rightclickaction rightclickaction-dark";

  if(document.getElementById("settingsdropdown").className.includes("open")){
    document.getElementById("settingsdropdown").className="dropdown dropdown-bubble dropdown-bubble-dark open";
    document.getElementById("settingsdropdownmenu").className="dropdown-menu dropdown-menu-dark";
    return;
  }
  else{
  document.getElementById("settingsdropdown").className="dropdown dropdown-bubble dropdown-bubble-dark";
  document.getElementById("settingsdropdownmenu").className="dropdown-menu dropdown-menu-dark";
  }

}
function deactivatedarkmode(){
  document.getElementById("projectdropdown").className="dropdown dropdown-bubble";
  document.getElementById("projectdropdownmenu").className="dropdown-menu";
  document.getElementById("satellitesdropdown").className="dropdown dropdown-bubble";
  document.getElementById("satellitesdropdownmenu").className="dropdown-menu";
  document.getElementById("antennasdropdown").className="dropdown dropdown-bubble";
  document.getElementById("antennasdropdownmenu").className="dropdown-menu";
  document.getElementById("communicationsdropdown").className="dropdown dropdown-bubble";
  document.getElementById("communicationsdropdownmenu").className="dropdown-menu";
  document.getElementById("beamdropdown").className="dropdown dropdown-bubble";
  document.getElementById("beamdropdownmenu").className="dropdown-menu";
  document.getElementById("rightclickaction").className="rightclickaction";

  if(document.getElementById("settingsdropdown").className.includes("open")){
    document.getElementById("settingsdropdown").className="dropdown dropdown-bubble dropdown-bubble open";
    document.getElementById("settingsdropdownmenu").className="dropdown-menu dropdown-menu";
  }
  else{
  document.getElementById("settingsdropdown").className="dropdown dropdown-bubble";
  document.getElementById("settingsdropdownmenu").className="dropdown-menu";
  }
}

function testPos(positionCartographic){
 try{
   var test=Cesium.Cartesian3.fromRadians(positionCartographic.longitude, positionCartographic.latitude, 10);
   return 0;
 }
 catch (Err){
   return 1;
 }
}


function setMarkerInPos(viewer,position){

viewer.entities.removeById("locationMarker");
viewer.pickTranslucentDepth = true;
var locationMarker = viewer.entities.add({
  id : 'locationMarker',
  name : 'location',
  position : Cesium.Cartesian3.fromDegrees(position.lng, position.lat, 0),
  point : {
    pixelSize : 5,
    color : Cesium.Color.RED,
    outlineColor : Cesium.Color.WHITE,
    outlineWidth : 2,
    heightReference: Cesium.HeightReference.RELATIVE_TO_GROUND

  },
  label : {
    text : "("+position.lng+","+position.lat+")",
    font : '14pt monospace',
    style: Cesium.LabelStyle.FILL_AND_OUTLINE,
    outlineWidth : 2,
    verticalOrigin : Cesium.VerticalOrigin.BOTTOM,
    pixelOffset : new Cesium.Cartesian2(0, -9),
    heightReference: Cesium.HeightReference.RELATIVE_TO_GROUND

  }
});
}

function convertScreenPixelToLocation(viewer,mousePosition) {
  const ellipsoid = viewer.scene.globe.ellipsoid;
  const cartesian = viewer.camera.pickEllipsoid(mousePosition, ellipsoid);
  if (cartesian) {
    const cartographic = ellipsoid.cartesianToCartographic(cartesian);
    const longitudeString = Cesium.Math.toDegrees(cartographic.longitude).toFixed(15);
    const latitudeString = Cesium.Math.toDegrees(cartographic.latitude).toFixed(15);
    return {lat: Number(latitudeString),lng: Number(longitudeString)};
  }
  else {
    return null;
  }
}

function searchSatellite() {
  // Declare variables
  var input, filter,satwindowselect,options, i, optval, txtValue;
   input = document.getElementById('satellitesearchInput');
   filter = input.value.toUpperCase();
   satwindowselect=document.getElementById("sateliteselect");
   options = satwindowselect.getElementsByTagName('option');

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < options.length; i++) {
    optval=options[i].value;
    //txtValue = a.textContent || a.innerText;
    if (optval.toUpperCase().indexOf(filter) > -1) {
      options[i].style.display = "";
    } else {
      options[i].style.display = "none";
    }
  }
}

function searchSatellite_new() {
  // Declare variables
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("satellitesearchInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("sateliteselect");
  tr = table.getElementsByTagName("tr");

  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}

function searchSatellite_new2() {
  // Declare variables
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("satellitesearchInput2");
  filter = input.value.toUpperCase();
  table = document.getElementById("satellitedelete");
  tr = table.getElementsByTagName("tr");

  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}

function highlight(tableid){
var hilite;
var table = document.getElementById(tableid);
for (var i=0;i < table.rows.length;i++){
table.rows[i].onclick= function () {

 if(!this.hilite){
  unhighlight(tableid);
  this.className="newtr selectedtr";
  this.hilite = true;
 }
 else{
  this.className="newtr";
  this.hilite = false;
 }
  }
}
}

function unhighlight(tableid){
var hilite;
var table = document.getElementById(tableid);
for (var i=0;i < table.rows.length;i++){
 var row = table.rows[i];
 row.className="newtr";
 row.hilite = false;
}
}

function addsatellitetoterrain(viewer,terrainobjects){
  var table=document.getElementById('sateliteselect');
  var row=table.getElementsByClassName("selectedtr")[0];
  if(row==null){return;}
  var satname=row.cells[0].innerText;
  for (var i = 0; i<terrainobjects.getSatellitesInTerrain.length;i++){
    if(terrainobjects.getSatellitesInTerrain[i].getName==satname){
      return;
    }
  }
  var beamlist=null;
  var beamfilename="/Apps/CSVs/"+filename_sanitizer_js(satname)+"/beams.csv";


  jQuery.get(beamfilename, function(data) {
    var beamlist=CSVToArray(data,",");
    alert(beamlist);
  })
  .fail(function() {
    alert("error");
    return;
});

  var tle=gettle(satname);
  alert(tle);
  const satrec = satellite.twoline2satrec(
  tle.split('\n')[0].trim(),
  tle.split('\n')[1].trim()
  );
  var date = new Date();
  var positionAndVelocity = satellite.propagate(satrec, date);
  var gmst = satellite.gstime(date);
  var position = satellite.eciToGeodetic(positionAndVelocity.position, gmst);
  var start = Cesium.JulianDate.fromDate(new Date());
  var colorarr=colorrand();
  alert(colorarr);



  var positionsOverTime = new Cesium.SampledPositionProperty();
  for (var i = 0; i < 60*60*6; i+= 6) {
          var time = Cesium.JulianDate.addSeconds(start, i, new Cesium.JulianDate());
          var jsDate = Cesium.JulianDate.toDate(time);

          var positionAndVelocity = satellite.propagate(satrec, jsDate);
          var gmst = satellite.gstime(jsDate);

          var p   = satellite.eciToGeodetic(positionAndVelocity.position, gmst);

          var position = Cesium.Cartesian3.fromRadians(p.longitude, p.latitude, p.height * 1000);

          var pos=new Cesium.Cartesian3();
          var transform=Cesium.Matrix4.fromRotationTranslation(Cesium.Transforms.computeTemeToPseudoFixedMatrix(time));

          var pos=Cesium.Matrix4.multiplyByPoint(transform, position, pos);

          positionsOverTime.addSample(time, pos);

  }
  const satellitemodel = viewer.entities.add({
  id: "satellite_"+satname,
  name: satname,
  description: "Orbit of Satellite: "+satname,
  point: { pixelSize: 5, color: Cesium.Color.RED },

  "path" : {
    "material" : {
        "solidColor" : {
            "color" : {
                "rgba" : [255, 255, 0, 255]
            }
        }
    },
    "width" : 5.0,
    "show" : true
},
  position: positionsOverTime,
  "outlineColor": {"rgba": [0, 0, 0, 255]}, "outlineWidth": 2

  });
  var satelliteobj=new t_satellite("satellite_"+satname,satname,colorarr[0],satellitemodel,beamlist);
  terrainobjects.getSatellitesInTerrain.push(satelliteobj);

  //more later


  constructmanagesatellitetable(terrainobjects);
  generatebeamsdropdownmenu(terrainobjects);
}

function generatebeamsdropdownmenu(terrainobjects){
  //clear beams
  var innerhtml='';
  var satnameli='<li style="text-align:center; margin-top:5px; margin-bottom:5px; padding: 3px 20px 3px 20px; font-size: 16px; font-weight:bold; background-color: #0095ff; color:white;">';
  var endli='</li>';
  var enda='</a>';
  var standard='<li><a onclick="clearselectedbeam(viewer,terrainobjs);" class="focus" style="text-align:center;">No beam selected</a></li>';
  var genbeam1='<li><a onclick="showgeneratetargetedspotbeamwindow('+"'";
  var genbeam2="'"+');" style="text-align:center;">Generate Targeted Spotbeam</a></li>';
  var showbeam1='<li><a id="beam_';
  var showbeam2='" onclick="showbeam(terrainobjs, ';
  var showbeam3=') style="text-align:center;">';
  document.getElementById("beamdropdownmenuli").innerHTML='';
  for (var i = 0; i<terrainobjects.getSatellitesInTerrain.length;i++){
    if (i==0){
      innerhtml+=standard;
    }
    innerhtml+=satnameli+terrainobjects.getSatellitesInTerrain[i].getName+endli+genbeam1+terrainobjects.getSatellitesInTerrain[i].getName+genbeam2;

    if(terrainobjects.getSatellitesInTerrain[i].getBeams!=null){
      for(var j=0;j<terrainobjects.getSatellitesInTerrain[i].getBeams.length;j++){
          innerhtml+=showbeam1+terrainobjects.getSatellitesInTerrain[i].getName+ "_"+terrainobjects.getSatellitesInTerrain[i].getBeams[j].name+showbeam2+terrainobjects.getSatellitesInTerrain[i]+'"'+terrainobjects.getSatellitesInTerrain[i].getBeams[j].name+'"'+showbeam3+terrainobjects.getSatellitesInTerrain[i].getBeams[j].name+enda+endli;
      }
    }
  }
  if(innerhtml==''){
    document.getElementById("beamdropdown").style.display="none";
    return;
  }
  document.getElementById("beamdropdownmenuli").innerHTML=innerhtml;
  document.getElementById("beamdropdown").style.display="inline";
  populatesatdropdownontargetedspotbeam(terrainobjects);
  return;
}

function clearselectedbeam(viewer,terrainobjects){
  alert(terrainobjects.getCurrentbeamInTerrain);
  if(terrainobjects.getCurrentbeamInTerrain==null){
    return;
  }
  for(var i=0;i<terrainobjects.getCurrentbeamInTerrain.getData.length;i++){
    var str="'"+terrainobjects.getCurrentbeamInTerrain.getName+"_element_"+i+"'";
    alert(str);

    viewer.entities.removeById(str);
  }

  terrainobjects.setCurrentbeamInTerrain=null;
  generatebeamsdropdownmenu(terrainobjects);
}

function checkandtargetedspotbeaminterrain(viewer,terrainobjects){
  document.getElementById("targetedspotbeamname").setCustomValidity('');
  document.getElementById("targetedspotbeamlongitude").setCustomValidity('');
  document.getElementById("targetedspotbeamlatitude").setCustomValidity('');
  document.getElementById("targetedspotbeammingain").setCustomValidity('');
  document.getElementById("targetedspotbeammaxgain").setCustomValidity('');
  document.getElementById("targetedspotbeamsemimajoraxis").setCustomValidity('');
  document.getElementById("targetedspotbeameccentricity").setCustomValidity('');
  document.getElementById("targetedspotbeamstep").setCustomValidity('');
  document.getElementById("targetedspotbeamtightness").setCustomValidity('');
  document.getElementById("targetedspotbeamrot").setCustomValidity('');

  document.getElementById("targetedspotbeamnameerror").innerHTML='';
  document.getElementById("targetedspotbeamlongitudeerror").innerHTML='';
  document.getElementById("targetedspotbeamlatitudeerror").innerHTML='';
  document.getElementById("targetedspotbeammingainerror").innerHTML='';
  document.getElementById("targetedspotbeammaxgainerror").innerHTML='';
  document.getElementById("targetedspotbeamsemimajoraxiserror").innerHTML='';
  document.getElementById("targetedspotbeameccentricityerror").innerHTML='';
  document.getElementById("targetedspotbeamsteperror").innerHTML='';
  document.getElementById("targetedspotbeamtightnesserror").innerHTML='';
  document.getElementById("targetedspotbeamroterror").innerHTML='';



      var namestr=document.getElementById("targetedspotbeamname").value;
      var longitude=document.getElementById("targetedspotbeamlongitude").value;
      var latitude=document.getElementById("targetedspotbeamlatitude").value;
      var mingain=document.getElementById("targetedspotbeammingain").value;
      var maxgain=document.getElementById("targetedspotbeammaxgain").value;
      var semimajoraxis=document.getElementById("targetedspotbeamsemimajoraxis").value;
      var eccentricity=document.getElementById("targetedspotbeameccentricity").value;
      var step=document.getElementById("targetedspotbeamstep").value;
      var tightness=document.getElementById("targetedspotbeamtightness").value;

      var rot=document.getElementById("targetedspotbeamrot").value;

      var er=0;

      if(namestr.trim()==""){
       document.getElementById("targetedspotbeamname").setCustomValidity('Name is required.');
       document.getElementById("targetedspotbeamnameerror").innerHTML='Name is required.';
       er=1;
      }

      //namecolisioncheck

      if(longitude.trim()==""){
        document.getElementById("targetedspotbeamlongitude").setCustomValidity('Longitude is required.');
        document.getElementById("targetedspotbeamlongitudeerror").innerHTML='Longitude is required.';
        er=1;
      }
      else{
        if(!isNumber(longitude.trim())){
          document.getElementById("targetedspotbeamlongitude").setCustomValidity('Invalid Longitude.');
          document.getElementById("targetedspotbeamlongitudeerror").innerHTML='Invalid Longitude.';
          er=1;
        }
        else{
          if(Number(longitude.trim())>180 || Number(longitude.trim())<-180){
            document.getElementById("targetedspotbeamlongitude").setCustomValidity('Longitude must be in [-180,180] range.');
            document.getElementById("targetedspotbeamlongitudeerror").innerHTML='Longitude must be in [-180,180] range.';
            er=1;
          }
        }
      }
      if(latitude.trim()==""){
        document.getElementById("targetedspotbeamlatitude").setCustomValidity('Latitude is required.');
        document.getElementById("targetedspotbeamlatitudeerror").innerHTML='Latitude is required.'
        er=1;
      }
      else {
        if(!isNumber(latitude.trim())){
          document.getElementById("targetedspotbeamlatitude").setCustomValidity('Invalid Latitude.');
          document.getElementById("targetedspotbeamlatitudeerror").innerHTML='Invalid Latitude.';
          er=1;
        }
        if(Number(latitude.trim())>90 || Number(latitude.trim())<-90){
          document.getElementById("targetedspotbeamlatitude").setCustomValidity('Latitude must be in [-90,90] range.');
          document.getElementById("targetedspotbeamlatitudeerror").innerHTML='Latitude must be in [-90,90] range.';
          er=1;
        }
      }


      if(mingain.trim()==""){
        document.getElementById("targetedspotbeammingain").setCustomValidity('Min Gain is required.');
        document.getElementById("targetedspotbeammingainerror").innerHTML='Min Gain is required.';
        er=1;
      }
      else{
        if(!isNumber(mingain.trim()) || Number(mingain.trim())>Number(maxgain.trim())){
          document.getElementById("targetedspotbeammingain").setCustomValidity('Invalid Min Gain.');
          document.getElementById("targetedspotbeammingainerror").innerHTML='Invalid Min Gain.';
          er=1;
        }
      }
      if(maxgain.trim()==""){
        document.getElementById("targetedspotbeammaxgain").setCustomValidity('Max Gain is required.');
        document.getElementById("targetedspotbeammaxgainerror").innerHTML='Max Gain is required.';

        er=1;
      }
      else{
        if(!isNumber(maxgain.trim())){
          document.getElementById("targetedspotbeammaxgain").setCustomValidity('Invalid Max Gain.');
          document.getElementById("targetedspotbeammaxgainerror").innerHTML='Invalid Max Gain.';
          er=1;
        }
      }

      if(semimajoraxis.trim()==""){
        document.getElementById("targetedspotbeamsemimajoraxis").setCustomValidity('Semimajor Axis Gain is required.');
        document.getElementById("targetedspotbeamsemimajoraxiserror").innerHTML='Semimajor Axis Gain is required.';
        er=1;
      }
      else{
        if(!isNumber(semimajoraxis.trim()) || Number(semimajoraxis.trim())>Number(semimajoraxis.trim())){
          document.getElementById("targetedspotbeamsemimajoraxis").setCustomValidity('Invalid Min Gain.');
          document.getElementById("targetedspotbeamsemimajoraxiserror").innerHTML='Invalid Min Gain.';
          er=1;
        }
      }

      if(eccentricity.trim()==""){
        document.getElementById("targetedspotbeameccentricity").setCustomValidity('Eccentricity is required.');
        document.getElementById("targetedspotbeameccentricityerror").innerHTML='Eccentricity is required.';
        er=1;
      }
      else{
        if(!isNumber(eccentricity.trim()) || Number(eccentricity.trim())<0){
          document.getElementById("targetedspotbeameccentricity").setCustomValidity('Invalid eccentricity.');
          document.getElementById("targetedspotbeameccentricityerror").innerHTML='Invalid eccentricity.';
          er=1;
        }
      }

      if(step.trim()==""){
        document.getElementById("targetedspotbeamstep").setCustomValidity('Step is required.');
        document.getElementById("targetedspotbeamsteperror").innerHTML='Step is required.';
        er=1;
      }
      else{
        if(!isNumber(step.trim()) || Number(step.trim())<=0){
          document.getElementById("targetedspotbeamstep").setCustomValidity('Invalid step.');
          document.getElementById("targetedspotbeamsteperror").innerHTML='Invalid step.';
          er=1;
        }
      }

      if(tightness.trim()==""){
        document.getElementById("targetedspotbeamtightness").setCustomValidity('Tightness is required.');
        document.getElementById("targetedspotbeamtightnesserror").innerHTML='Tightness is required.';
        er=1;
      }
      else{
        if(!isNumber(tightness.trim()) || Number(tightness.trim())<0){
          document.getElementById("targetedspotbeamstep").setCustomValidity('Invalid Tightness.');
          document.getElementById("targetedspotbeamsteperror").innerHTML='Invalid Tightness.';
          er=1;
        }
      }

      if(rot.trim()==""){
        document.getElementById("targetedspotbeamrot").setCustomValidity('Rotation is required.');
        document.getElementById("targetedspotbeamroterror").innerHTML='Rotation is required.';
        er=1;
      }
      else{
        if(!isNumber(rot.trim())){
          document.getElementById("targetedspotbeamrot").setCustomValidity('Invalid Rotation.');
          document.getElementById("targetedspotbeamroterror").innerHTML='Invalid Rotation.';
          er=1;
        }
      }

      if(er==0){
        var usage;
        var band;
        var val;
        var radios = document.getElementsByName("targetedspotbeamusageselect");
        for( i = 0; i < radios.length; i++ ) {
          if( radios[i].checked ) {
             val=radios[i].value;
           }
         }
         if(val=="D"){
           usage="D";
         }
         else if(val=="U"){
           usage="U";
         }

         var bandselect = document.getElementById('targetedspotbeamband');
         var band = bandselect.options[bandselect.selectedIndex].value;


         TargetedSpotbeamGenerator(viewer,terrainobjects,namestr,usage,band,longitude,latitude,maxgain,mingain,semimajoraxis,eccentricity,step,tightness,rot);

      }
}

function TargetedSpotbeamGenerator(viewer,terrainobjects,beamname,usage,band,locationx,locationy,maxgain,mingain,semimajoraxismaxgain,eccentricity,step,tightness,rotationangle){
  clearselectedbeam(viewer,terrainobjects);
  var unit;
  var color;
  var currentbeamelements=[];
  if(usage=="D"){
    unit="dBW";
  }
  else if(usage=="U"){
    unit="dB/K";
  }
  if(band=="L"){
    color=Cesium.Color.fromCssColorString("#64c2ed").withAlpha(0.3);
  }
  else if(band=="S"){
    color=Cesium.Color.AQUAMARINE.withAlpha(0.3);
  }
  else if(band=="C"){
    color=Cesium.Color.fromCssColorString("#e6a8d7").withAlpha(0.3);
  }
  else if(band=="Ku"){
    color=Cesium.Color.fromCssColorString("#fd5e53").withAlpha(0.3);
  }
  else if(band=="Ka"){
    color=Cesium.Color.ORANGE.withAlpha(0.3);
  }
  var stepsrequired=Math.ceil((maxgain-mingain)/step)+1;
  var currentgain=maxgain;
  for(var i=0;i<stepsrequired;i++){
    var semimajoraxis=semimajoraxismaxgain+ i*(semimajoraxismaxgain/tightness);
    var semiminoraxis=semimajoraxis*Math.sqrt(1-(eccentricity*eccentricity));
    var beamelement=viewer.entities.add({
      id: beamname+"_element_"+i,
      name: beamname,
      description: "Gain: "+ currentgain+unit,
      position: Cesium.Cartesian3.fromDegrees(locationx, locationy),
         ellipse : {
          semiMinorAxis : semiminoraxis,
          semiMajorAxis : semimajoraxis,
          rotation: Cesium.Math.toRadians(rotationangle),
          material : color,
          zIndex : -1-i
        }
  });
  currentbeamelements.push(beamelement);
  currentgain=currentgain-step;
  if(currentgain<mingain){
    currentgain=mingain;
  }
  }
  var newbeam= new beam(beamname,currentbeamelements);
  terrainobjects.setCurrentbeamInTerrain=new beam(beamname,currentbeamelements);
  terrainobjects.currentbeam=new beam(beamname,currentbeamelements);
  var select = document.getElementById('targetedspotbeamsat');
  var value = select.options[select.selectedIndex].value;
  for(var i=0;i<terrainobjects.getSatellitesInTerrain.length;i++){
    if(terrainobjects.getSatellitesInTerrain[i].getName==value){
        if(terrainobjects.getSatellitesInTerrain[i].getBeams==null){
          terrainobjects.getSatellitesInTerrain[i].setBeams=new Array(newbeam);
        }
        else{
          terrainobjects.getSatellitesInTerrain[i].getBeams.push(newbeam);
        }
        break;
    }
  }
  generatebeamsdropdownmenu(terrainobjects);
}


function CSVToArray(str, strDelimiter ){
    // Check to see if the delimiter is defined. If not,

          // slice from start of text to the first \n index
          // use split to create an array from string by delimiter
          const headers = str.slice(0, str.indexOf("\n")).split(strDelimiter);

          // slice from \n index + 1 to the end of the text
          // use split to create an array of each csv value row

          const rows = str.slice(str.indexOf("\n") + 1).split("\n");

          alert(rows);
          return null;

          // Map the rows
          // split values from each row into an array
          // use headers.reduce to create an object
          // object properties derived from headers:values
          // the object passed as an element of the array
          const arr = rows.map(function (row) {
            const values = row.split(strDelimiter);
            const el = headers.reduce(function (object, header, index) {
              object[header] = values[index];
              return object;
            }, {});
            return el;
          });

          // return the array
          return arr;
}

function filename_sanitizer_js(string){

var illegalRe = /[\/\?<>\\:\*\|":]/g;
var controlRe = /[\x00-\x1f\x80-\x9f]/g;
var reservedRe = /^\.+$/;
var windowsReservedRe = /^(con|prn|aux|nul|com[0-9]|lpt[0-9])(\..*)?$/i;

var sanitized = string
    .replace(illegalRe, '')
    .replace(controlRe, '')
    .replace(reservedRe, '')
    .replace(windowsReservedRe, '');
    return sanitized.slice(0,255);
}
function colorrand(){
  var rand=Math.floor(Math.random() * (7 + 0 ) + 1);
  var arr;
  if(rand==1){
    arr=["Violet", '{"solidColor": {"color": {"rgba": ["139", "0", "255", 255]}}},'];
  }
  else if(rand==2){
    arr=["Blue", '{"solidColor": {"color": {"rgba": ["0", "0", "255", 255]}}},'];
  }
  else if(rand==3){
    arr=["Aqua", '{"solidColor": {"color": {"rgba": ["0", "255", "255", 255]}}},'];
  }
  else if(rand==4){
    arr=["Green", '{"solidColor": {"color": {"rgba": ["0", "255", "0", 255]}}},'];
  }
  else if(rand==5){
    arr=["Yellow", '{"solidColor": {"color": {"rgba": ["255", "255", "0", 255]}}},'];
  }
  else if(rand==6){
    arr=["Orange", '{"solidColor": {"color": {"rgba": ["255", "127", "0", 255]}}},'];
  }
  else if(rand==7){
    arr=["Red", '{"solidColor": {"color": {"rgba": ["255", "0", "0", 255]}}},'];

  }
  return arr;
}

function addsatellitetodb(satname,tle1,tle2){
  $.ajax({
               url: '/Apps/addsatellite.php',
               type: 'POST',
               data:{
                  satname: satname,
                  tle1:tle1,
                  tle2:tle2
                },
                error:function (xhr, ajaxOptions, thrownError){
                    if(xhr.status!=200) {
                      document.getElementById('errorwindow').innerHTML='<div style="display: block; margin: auto; text-align:center;">  <img style="vertical-align:middle;" src="Resources/error-icon.png" width="48" height="48">  <span style="color: red; font-size: 18px; font-weight: bold;">Cannot add Satellite.</span> </div>   <div style="text-align:center;"> <button onclick="showlogwindow();" style="margin:auto; text-align:center;">Show Log</button> </div>';
                      showerrorwindow();
                    }
                },
                success: function(data) {
               }
           });
}
function removesatellitefromdb(satname){
  $.ajax({
               url: '/Apps/removesatellite.php',
               type: 'POST',
               data:{
                  satname: satname
                },
                error:function (xhr, ajaxOptions, thrownError){
                    if(xhr.status!=200) {
                      document.sgetElementById('errorwindow').innerHTML='<div style="display: block; margin: auto; text-align:center;">  <img style="vertical-align:middle;" src="Resources/error-icon.png" width="48" height="48">  <span style="color: red; font-size: 18px; font-weight: bold;">Cannot Remove Satellite.</span> </div>   <div style="text-align:center;"> <button onclick="showlogwindow();" style="margin:auto; text-align:center;">Show Log</button> </div>';
                      showerrorwindow();
                    }
                },
                success: function(data) {
               }
           });
}
function gettle(satname){
var x;
$.ajax({
             url: '/Apps/Gettle.php',
             type: 'POST',
             async: false,
             data:{
                satellite: satname
              },
              error:function (xhr, ajaxOptions, thrownError){
                  if(xhr.status!=200) {
                    document.getElementById('errorwindow').innerHTML='<div style="display: block; margin: auto; text-align:center;">  <img style="vertical-align:middle;" src="Resources/error-icon.png" width="48" height="48">  <span style="color: red; font-size: 18px; font-weight: bold;">Cannot get TLE.</span> </div>   <div style="text-align:center;"> <button onclick="showlogwindow();" style="margin:auto; text-align:center;">Show Log</button> </div>';
                    showerrorwindow();
                    return null;
                  }
              },
              success: function(data) {
                x=data;
             }
         });
         return x;
}

function csvbeamfilereader(csvfile){
var x;
$.ajax({
             url: '/Apps/Beamcsvreader.php',
             type: 'POST',
             async: false,
             data:{
                csvfile: csvfile
              },
              error:function (xhr, ajaxOptions, thrownError){
                  if(xhr.status!=200) {
                    showerrorwindow();
                    return null;
                  }
              },
              success: function(data) {
                x=data;
             }
         });
         return x;
}

function constructmanagedishestable(terrainobjects){
  document.getElementById("mdishesloading").style.display="block";
  document.getElementById("managedishesnoselected").style.display="none";
  document.getElementById("managedishesmainwindow").style.display="none";

  if(terrainobjects.getDishesInTerrain.length==0){
    document.getElementById("mdishesloading").style.display="none";
    document.getElementById("managedishesnoselected").style.display="block";
    document.getElementById("managedishesmainwindow").style.display="none";
    return;
  }
  var table=document.getElementById("managedishestable");
  table.innerHTML = "";
  for(var i=0; i<terrainobjects.getDishesInTerrain.length;i++){
    var row = table.insertRow(i);
    var cell0 = row.insertCell(0);
    var cell1 = row.insertCell(1);
    var cell2 = row.insertCell(2);
    var cell3 = row.insertCell(3);
    cell0.innerHTML=(i+1)+")";
    cell1.innerHTML='<img src="data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABx0lEQVQ4y5WRP0hbURTGfzd5L7bVaKgl+KeoSLuVcEEEMxSxldIxQjeXLjqIiATFSnGogx3E4FB1kFIQoQop3apDoGlVKkppKEVQBxcVWn3+QU0b85LbJeojxqjfeM+5v++c7wgukSeoAHQg/vOZOFe3XQYAKoBpYNgTVF5PUNmvC9gGxoEd4C3wyhNUjusASgE/8BToA54Az1OrpQECxg0Cho+AoVleVwAv0A/0AkNAG+AC0NLcGoERd6426JtR3Ss9dRpv6tyAL3nr9vxe84cpTO4DcaAY2NMs7g6gSbcJvaYst+Pb59CDO0q9U0LkAI9t0Z33mHxMfUwChwDCAnABS3fz9eISp4OFjahy7q+NyrmXIbv572Y4HB7LFJA1AxOIFeXpLP35CyhxUFDRPNswWa2ESF6UsBVwJIQIxxJJjuJn/Spmdn6vHXhIwLBnB/gLVWWoa/73lqFUWtNhfnkT8DoT5BQgpcS5sVjl+vSCnINNBSROhgCOU+GlX+0sRCmlDnwFahKOvOi619+6W157D9gFvgA/8BeaGQFSSjfQArQDBSnXYWAiEonMkkUnI7mAemDZUqsGfgFXAqwCj6wrWU6bVf8BVq+PaiEcjLUAAAAASUVORK5CYII=">'+ terrainobjects.getDishesInTerrain[i].name;
    cell2.innerHTML='<div> <button onclick="loadeditdishwindow(terrainobjs,'+"'"+terrainobjects.getDishesInTerrain[i].id+"'"+'); showeditdishwindow();" class="btn btn-info" style="transition: all .3s ease;">Edit Dish</button>'
    cell3.innerHTML='<div> Action: <button id='+'"bid_'+terrainobjects.getDishesInTerrain[i].id+'"'+'onclick="changekeepremovebutton('+"'bid_"+terrainobjects.getDishesInTerrain[i].id+"'"+');" class="btn btn-info" style="transition: all .3s ease;">Keep</button></td>';
  }
  document.getElementById("mdishesloading").style.display="none";
  document.getElementById("managedishesnoselected").style.display="none";
  document.getElementById("managedishesmainwindow").style.display="block";
  return;

}
function constructmanagesatellitetable(terrainobjects){
  document.getElementById("msatelliteloading").style.display="block";
  document.getElementById("managenoselected").style.display="none";
  document.getElementById("managesatellitemainwindow").style.display="none";

  if(terrainobjects.getSatellitesInTerrain.length==0){
    document.getElementById("msatelliteloading").style.display="none";
    document.getElementById("managenoselected").style.display="block";
    document.getElementById("managesatellitemainwindow").style.display="none";
    return;
  }
  var table=document.getElementById("managesatellitetable");
  table.innerHTML = "";
  for(var i=0; i<terrainobjects.getSatellitesInTerrain.length;i++){
    var row = table.insertRow(i);
    var cell0 = row.insertCell(0);
    var cell1 = row.insertCell(1);
    var cell2 = row.insertCell(2);
    var cell3 = row.insertCell(3);
    cell0.innerHTML=(i+1)+")";
    cell1.innerHTML='<img src="data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAADJSURBVDhPnZHRDcMgEEMZjVEYpaNklIzSEfLfD4qNnXAJSFWfhO7w2Zc0Tf9QG2rXrEzSUeZLOGm47WoH95x3Hl3jEgilvDgsOQUTqsNl68ezEwn1vae6lceSEEYvvWNT/Rxc4CXQNGadho1NXoJ+9iaqc2xi2xbt23PJCDIB6TQjOC6Bho/sDy3fBQT8PrVhibU7yBFcEPaRxOoeTwbwByCOYf9VGp1BYI1BA+EeHhmfzKbBoJEQwn1yzUZtyspIQUha85MpkNIXB7GizqDEECsAAAAASUVORK5CYII=">'+ terrainobjects.getSatellitesInTerrain[i].name;
    cell2.innerHTML='  <div id="colordropdown" class="dropdown dropdown-bubble" style="display:inline;"> <button class="btn btn-light" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style="height:32px;">  <span style="display:inline-block; height: 32px; vertical-align: top;">Color:</span>  <span class="dot" style="background-color:#8b00ff; margin-top:-4px; margin-left:3px;"></span>  </button> <ul id="colordropdownmenu" class="dropdown-menu" style="margin-top: 10px;"> <li><a href="" style="text-align:center;">Violet<span class="dot" style="background-color:#8b00ff; margin-top:0px; margin-left:8px;"></span></a> <li><a href="" style="text-align:center;">Blue<span class="dot" style="background-color:#0000ff; margin-top:0px; margin-left:8px;"></span></a> <li><a href="" style="text-align:center;">Aqua<span class="dot" style="background-color:#00ffff; margin-top:0px; margin-left:8px;"></span></a>   <li><a href="" style="text-align:center;">Green<span class="dot" style="background-color:#00ff00; margin-top:0px; margin-left:8px;"></span></a> <li><a href="" style="text-align:center;">Yellow<span class="dot" style="background-color:#ffff00; margin-top:0px; margin-left:8px;"></span></a>  <li><a href="" style="text-align:center;">Orange<span class="dot" style="background-color:#ff7f00; margin-top:0px; margin-left:8px;"></span></a> <li><a href="" style="text-align:center;">Red<span class="dot" style="background-color:#ff0000; margin-top:0px; margin-left:8px;"></span></a>  </ul>  </div>';
    cell3.innerHTML='<div> Action: <button id='+'"bid_'+terrainobjects.getSatellitesInTerrain[i].id+'"'+'onclick="changekeepremovebutton('+"'bid_"+terrainobjects.getSatellitesInTerrain[i].id+"'"+');" class="btn btn-info" style="transition: all .3s ease;">Keep</button></td>';
  }
  document.getElementById("msatelliteloading").style.display="none";
  document.getElementById("managenoselected").style.display="none";
  document.getElementById("managesatellitemainwindow").style.display="block";
  return;

}
function loadeditdishwindow(terrainobjects,dishid){
  document.getElementById("editdishname").setCustomValidity('');
  document.getElementById("editdishlongitude").setCustomValidity('');
  document.getElementById("editdishlatitude").setCustomValidity('');
  document.getElementById("editdishsize").setCustomValidity('');
  document.getElementById("editdishgain").setCustomValidity('');
  document.getElementById("editdishnameerror").innerHTML='';
  document.getElementById("editdishlongitudeerror").innerHTML='';
  document.getElementById("editdishlatitudeerror").innerHTML='';
  document.getElementById("editdishsizeerror").innerHTML='';
  document.getElementById("editdishgainerror").innerHTML='';
  for(var i=0; i<terrainobjects.getDishesInTerrain.length;i++){
    if(terrainobjects.getDishesInTerrain[i].id==dishid){
      document.getElementById("editdishname").value=terrainobjects.getDishesInTerrain[i].name;
      document.getElementById("editdishlongitude").value=terrainobjects.getDishesInTerrain[i].longitude;
      document.getElementById("editdishlatitude").value=terrainobjects.getDishesInTerrain[i].latitude;
      document.getElementById("editdishsize").value=terrainobjects.getDishesInTerrain[i].size;
      document.getElementById("editdishgain").value=terrainobjects.getDishesInTerrain[i].gain;
      if(terrainobjects.getDishesInTerrain[i].usage=="Uplink"){
          document.getElementById("editdishusageselectdnl").checked=false;
          document.getElementById("editdishusageselectupl").checked=true;
      }
      else if(terrainobjects.getDishesInTerrain[i].usage=="Downlink"){
          document.getElementById("editdishusageselectdnl").checked=true;
          document.getElementById("editdishusageselectupl").checked=false;
    }
      document.getElementById("editdishid").innerHTML=terrainobjects.getDishesInTerrain[i].id;
  }
}
}
function changekeepremovebutton(keepremovebuttonid){
  var button=document.getElementById(keepremovebuttonid);
  if(button.innerHTML=="Keep"){
    button.className="btn btn-danger";
    button.innerHTML="Remove";
  }
  else{
    button.className="btn btn-info";
    button.innerHTML="Keep";
  }
}

function managesatelliteapplychanges(viewer,terrainobjects){
  var table=document.getElementById("managesatellitetable");
  for(var i=0, row; row=table.rows[i];i++){
    var rmd=false;
    var colorcol=row.cells[2];
    var removecol=row.cells[3];
    var removebtn=removecol.getElementsByTagName('button')[0];
    alert(removebtn.innerHTML);
    if(removebtn.innerHTML=="Remove"){
      viewer.entities.removeById(terrainobjects.getSatellitesInTerrain[i].id);
      terrainobjects.getSatellitesInTerrain.splice(i,1);
      rmd=true;
      generatebeamsdropdownmenu(terrainobjects);
      populatesatdropdownontargetedspotbeam(terrainobjects);
    }
    //also for color
  }
  constructmanagesatellitetable(terrainobjects);
}
function managedishesapplychanges(viewer,terrainobjects){
  var table=document.getElementById("managedishestable");
  for(var i=0, row; row=table.rows[i];i++){
    var rmd=false;
    var removecol=row.cells[3];
    var removebtn=removecol.getElementsByTagName('button')[0];
    alert(removebtn.innerHTML);
    if(removebtn.innerHTML=="Remove"){
      viewer.entities.removeById(terrainobjects.getDishesInTerrain[i].id);
      terrainobjects.getDishesInTerrain.splice(i,1);
      rmd=true;
    }
  }
  constructmanagedishestable(terrainobjects);
}

function isNumber(n){
  return n!=null && !isNaN(n) && isFinite(n);
}
function checkandadddishinterrain(viewer,terrainobjects){
  document.getElementById("adddishname").setCustomValidity('');
  document.getElementById("adddishlongitude").setCustomValidity('');
  document.getElementById("adddishlatitude").setCustomValidity('');
  document.getElementById("adddishsize").setCustomValidity('');
  document.getElementById("adddishgain").setCustomValidity('');
  document.getElementById("adddishnameerror").innerHTML='';
  document.getElementById("adddishlongitudeerror").innerHTML='';
  document.getElementById("adddishlatitudeerror").innerHTML='';
  document.getElementById("adddishsizeerror").innerHTML='';
  document.getElementById("adddishgainerror").innerHTML='';



      var namestr=document.getElementById("adddishname").value;
      var longitude=document.getElementById("adddishlongitude").value;
      var latitude=document.getElementById("adddishlatitude").value;
      var size=document.getElementById("adddishsize").value;
      var gain=document.getElementById("adddishgain").value;
      var er=0;

      if(namestr.trim()==""){
        document.getElementById("adddishname").setCustomValidity('Name is required.');
        document.getElementById("adddishnameerror").innerHTML='Name is required.';
        er=1;
      }
      for (var i = 0; i<terrainobjects.getDishesInTerrain.length;i++){
        if(terrainobjects.getDishesInTerrain[i].getName==namestr.trim()){
          document.getElementById("adddishname").setCustomValidity('A dish with this name already exists.');
          document.getElementById("adddishnameerror").innerHTML='A dish with this name already exists.';
          er=1;
        }
      }
      if(longitude.trim()==""){
        document.getElementById("adddishlongitude").setCustomValidity('Longitude is required.');
        document.getElementById("adddishlongitudeerror").innerHTML='Longitude is required.';
        er=1;
      }
      else{
        if(!isNumber(longitude.trim())){
          document.getElementById("adddishlongitude").setCustomValidity('Invalid Longitude.');
          document.getElementById("adddishlongitudeerror").innerHTML='Invalid Longitude.';
          er=1;
        }
        else{
          if(Number(longitude.trim())>180 || Number(longitude.trim())<-180){
            document.getElementById("adddishlongitude").setCustomValidity('Longitude must be in [-180,180] range.');
            document.getElementById("adddishlongitudeerror").innerHTML='Longitude must be in [-180,180] range.';
            er=1;
          }
        }
      }
      if(latitude.trim()==""){
        document.getElementById("adddishlatitude").setCustomValidity('Latitude is required.');
        document.getElementById("adddishlatitudeerror").innerHTML='Latitude is required.'
        er=1;
      }
      else {
        if(!isNumber(latitude.trim())){
          document.getElementById("adddishlatitude").setCustomValidity('Invalid Latitude.');
          document.getElementById("adddishlatitudeerror").innerHTML='Invalid Latitude.';
          er=1;
        }
        if(Number(latitude.trim())>90 || Number(latitude.trim())<-90){
          document.getElementById("adddishlatitude").setCustomValidity('Latitude must be in [-90,90] range.');
          document.getElementById("adddishlatitudeerror").innerHTML='Latitude must be in [-90,90] range.';
          er=1;
        }
      }
      if(size.trim()==""){
        document.getElementById("adddishsize").setCustomValidity('Size is required.');
        document.getElementById("adddishsizeerror").innerHTML='Size is required.';
        er=1;
      }
      else{
        if(!isNumber(size.trim()) || Number(size.trim())<=0){
          document.getElementById("adddishsize").setCustomValidity('Invalid Size.');
          document.getElementById("adddishsizeerror").innerHTML='Invalid Size.';
          er=1;
        }
      }
      if(gain.trim()==""){
        document.getElementById("adddishgain").setCustomValidity('Gain is required.');
        document.getElementById("adddishgainerror").innerHTML='Gain is required.';

        er=1;
      }
      else{
        if(!isNumber(gain.trim())){
          document.getElementById("adddishgain").setCustomValidity('Invalid Gain.');
          document.getElementById("adddishgainerror").innerHTML='Invalid Gain.';
          er=1;
        }
      }
      if(er==0){
        var usage;
        var val;
        var radios = document.getElementsByName("adddishusageselect");
        for( i = 0; i < radios.length; i++ ) {
          if( radios[i].checked ) {
             val=radios[i].value;
           }
         }
         if(val==1){
           usage="Downlink";
         }
         else if(val==2){
           usage="Uplink";
         }

         adddishinterrain(viewer,terrainobjects,namestr,longitude,latitude,size,gain,usage,0);
         constructmanagedishestable(terrainobjects);

      }

}

function checkandeditdishinterrain(viewer,terrainobjects){
  document.getElementById("editdishname").setCustomValidity('');
  document.getElementById("editdishlongitude").setCustomValidity('');
  document.getElementById("editdishlatitude").setCustomValidity('');
  document.getElementById("editdishsize").setCustomValidity('');
  document.getElementById("editdishgain").setCustomValidity('');
  document.getElementById("editdishnameerror").innerHTML='';
  document.getElementById("editdishlongitudeerror").innerHTML='';
  document.getElementById("editdishlatitudeerror").innerHTML='';
  document.getElementById("editdishsizeerror").innerHTML='';
  document.getElementById("editdishgainerror").innerHTML='';



      var namestr=document.getElementById("editdishname").value;
      var longitude=document.getElementById("editdishlongitude").value;
      var latitude=document.getElementById("editdishlatitude").value;
      var size=document.getElementById("editdishsize").value;
      var gain=document.getElementById("editdishgain").value;
      var er=0;

      if(namestr.trim()==""){
        document.getElementById("editdishname").setCustomValidity('Name is required.');
        document.getElementById("editdishnameerror").innerHTML='Name is required.';
        er=1;
      }

      if(longitude.trim()==""){
        document.getElementById("editdishlongitude").setCustomValidity('Longitude is required.');
        document.getElementById("editdishlongitudeerror").innerHTML='Longitude is required.';
        er=1;
      }
      else{
        if(!isNumber(longitude.trim())){
          document.getElementById("editdishlongitude").setCustomValidity('Invalid Longitude.');
          document.getElementById("editdishlongitudeerror").innerHTML='Invalid Longitude.';
          er=1;
        }
        else{
          if(Number(longitude.trim())>180 || Number(longitude.trim())<-180){
            document.getElementById("editdishlongitude").setCustomValidity('Longitude must be in [-180,180] range.');
            document.getElementById("editdishlongitudeerror").innerHTML='Longitude must be in [-180,180] range.';
            er=1;
          }
        }
      }
      if(latitude.trim()==""){
        document.getElementById("editdishlatitude").setCustomValidity('Latitude is required.');
        document.getElementById("editdishlatitudeerror").innerHTML='Latitude is required.'
        er=1;
      }
      else {
        if(!isNumber(latitude.trim())){
          document.getElementById("editdishlatitude").setCustomValidity('Invalid Latitude.');
          document.getElementById("editdishlatitudeerror").innerHTML='Invalid Latitude.';
          er=1;
        }
        if(Number(latitude.trim())>90 || Number(latitude.trim())<-90){
          document.getElementById("editdishlatitude").setCustomValidity('Latitude must be in [-90,90] range.');
          document.getElementById("editdishlatitudeerror").innerHTML='Latitude must be in [-90,90] range.';
          er=1;
        }
      }
      if(size.trim()==""){
        document.getElementById("editdishsize").setCustomValidity('Size is required.');
        document.getElementById("editdishsizeerror").innerHTML='Size is required.';
        er=1;
      }
      else{
        if(!isNumber(size.trim()) || Number(size.trim())<=0){
          document.getElementById("editdishsize").setCustomValidity('Invalid Size.');
          document.getElementById("editdishsizeerror").innerHTML='Invalid Size.';
          er=1;
        }
      }
      if(gain.trim()==""){
        document.getElementById("editdishgain").setCustomValidity('Gain is required.');
        document.getElementById("editdishgainerror").innerHTML='Gain is required.';

        er=1
      }
      else{
        if(!isNumber(gain.trim())){
          document.getElementById("editdishgain").setCustomValidity('Invalid Gain.');
          document.getElementById("editdishgainerror").innerHTML='Invalid Gain.';
          er=1;
        }
      }
      if(er==0){
        var usage;
        var val;
        var radios = document.getElementsByName("editdishusageselect");
        for( i = 0; i < radios.length; i++ ) {
          if( radios[i].checked ) {
             val=radios[i].value;
           }
         }
         if(val==1){
           usage="Downlink";
         }
         else if(val==2){
           usage="Uplink";
         }
         var dishid=document.getElementById("editdishid").innerHTML;
         viewer.entities.removeById(dishid);
         var oldpos=0;
         for(var i=0; i<terrainobjects.getDishesInTerrain.length;i++){
            if(terrainobjects.getDishesInTerrain.id=dishid){
              oldpos=i;
            }
         }
         terrainobjects.getDishesInTerrain.splice(oldpos,1);
         adddishinterrain(viewer,terrainobjects,namestr,longitude,latitude,size,gain,usage,oldpos);
         constructmanagedishestable(terrainobjects);

      }
}
function adddishinterrain(viewer,terrainobjects,namestr,longitude,latitude,size,gain,usage,pos){
  const dishmodel = viewer.entities.add({
  id: "dish_"+namestr.trim(),
  name: namestr.trim(),
  description: "Dish Antenna: "+namestr.trim()+"\n"+"Specifications:\n"+"Position: "+longitude.trim()+","+latitude.trim()+"\n"+"Size: "+size.trim()+"\n"+"Gain: "+gain.trim()+"\n"+"Usage: "+usage,
    position: Cesium.Cartesian3.fromDegrees(longitude.trim(), latitude.trim()),
    model:{
        uri : 'Resources/dish.gltf'
    }

  });
  var dishobj=new dish("dish_"+namestr.trim(),namestr.trim(),longitude.trim(),latitude.trim(),size.trim(),gain.trim(),usage);
  if(pos==0){
    terrainobjects.getDishesInTerrain.push(dishobj);
  }
  else{
    terrainobjects.getDishesInTerrain.splice(pos,0,dishobj);
  }
  viewer.zoomTo(dishmodel);
}
function checkandaddsatellite(){
  document.getElementById("addsatellitename").setCustomValidity('');
  document.getElementById("addsatellitetle1").setCustomValidity('');
  document.getElementById("addsatellitetle2").setCustomValidity('');
  document.getElementById("addsatellitenameerror").innerHTML='';
  document.getElementById("addsatellitetle1error").innerHTML='';
  document.getElementById("addsatellitetle2error").innerHTML='';
  var namestr=document.getElementById("addsatellitename").value;
  var tle1str=document.getElementById("addsatellitetle1").value;
  var tle2str=document.getElementById("addsatellitetle2").value;
  var er=0;
  if(namestr.trim()==""){
    document.getElementById("addsatellitename").setCustomValidity('Name is required.');
    document.getElementById("addsatellitenameerror").innerHTML='Name is required.';
    er=1;
  }

  if(tle1str.trim()==""){
    document.getElementById("addsatellitetle1").setCustomValidity('TLE line 1 is required.');
    document.getElementById("addsatellitetle1error").innerHTML='TLE line 1 is required.';
    er=1;
  }
  if(tle2str.trim()==""){
    document.getElementById("addsatellitetle2").setCustomValidity('TLE line 2 is required.');
    document.getElementById("addsatellitetle2error").innerHTML='TLE line 2 is required.';
    er=1;
  }
 //more checks later
  if(er==0){
    addsatellitetodb(namestr,tle1str,tle2str);
      document.getElementById("deletesatellitewindowtablespan").style.display="none";
      document.getElementById("selectsatellitewindowtablespan").style.display="none";
      document.getElementById("deletesatelliteloading").style.display="block";
      document.getElementById("selectsatelliteloading").style.display="block";
      document.getElementById("deletesatellitewindowtablespan").innerHTML="";
      document.getElementById("selectsatellitewindowtablespan").innerHTML="";
      document.getElementById("deletesatellitewindowtablespan").innerHTML=satellitelistloader("deletesatellitewindow");
      document.getElementById("selectsatellitewindowtablespan").innerHTML=satellitelistloader("selectsatellitewindow");
      document.getElementById("deletesatellitewindowtablespan").style.display="block";
      document.getElementById("selectsatellitewindowtablespan").style.display="block";
      document.getElementById("deletesatelliteloading").style.display="none";
      document.getElementById("selectsatelliteloading").style.display="none";

  }
}

function getweather(){
  var cityloc= document.getElementById("weathersearchInput").value;
  alert(cityloc);
  if(cityloc==""){
    document.getElementById("weatherwaittoenter").style.display="none";
    document.getElementById("weatherloading").style.display="none";
    document.getElementById("weathernotfound").style.display="none";
    document.getElementById("weathernottyped").style.display="block";
    document.getElementById("weatherapp").style.display="none";
    return;
  }
  const regex = /^((\-?|\+?)?\d+(\.\d+)?),\s*((\-?|\+?)?\d+(\.\d+)?)$/gi;
  const apiKey = "4d8fb5b93d4af21d66a2948710284366";
  var url1 = 'https://api.openweathermap.org/data/2.5/weather?q='+cityloc+'&appid='+apiKey+'&units=metric';
  var longitude="";
  var latitude="";
  if(regex.test(cityloc)){
    var arr=cityloc.split(",");
    longitude=arr[0];
    latitude=arr[1];
    var url2=  'https://api.openweathermap.org/data/2.5/onecall?lat='+latitude+'&lon='+longitude+'&appid='+apiKey+'&units=metric';

    document.getElementById("weatherwaittoenter").style.display="none";
    document.getElementById("weatherloading").style.display="block";
    document.getElementById("weathernotfound").style.display="none";
    document.getElementById("weathernottyped").style.display="none";
    document.getElementById("weatherapp").style.display="none";
    fetch(url2).then(function(resp) { if(resp.ok){ return resp.json(); }else{return null;}}).then(function(data) {
     if(data==null){
         document.getElementById("weatherwaittoenter").style.display="none";
         document.getElementById("weatherloading").style.display="none";
         document.getElementById("weathernotfound").style.display="block";
         document.getElementById("weathernottyped").style.display="none";
         document.getElementById("weatherapp").style.display="none";
         return;
     }

     alert(JSON.stringify(data));
     document.getElementById("currentweatherloc").innerHTML=cityloc;
     getcurrentdayweatherdata(data);
     getmultipledayweatherdata(data,5);


     document.getElementById("weatherwaittoenter").style.display="none";
     document.getElementById("weatherloading").style.display="none";
     document.getElementById("weathernotfound").style.display="none";
     document.getElementById("weathernottyped").style.display="none";
     document.getElementById("weatherapp").style.display="block";
   })
   .catch(function() {
     // catch any errors
      document.getElementById("weatherwaittoenter").style.display="none";
      document.getElementById("weatherloading").style.display="none";
      document.getElementById("weathernotfound").style.display="block";
      document.getElementById("weathernottyped").style.display="none";
      document.getElementById("weatherapp").style.display="none";

    });
  }
  else{
    document.getElementById("weatherwaittoenter").style.display="none";
    document.getElementById("weatherloading").style.display="block";
    document.getElementById("weathernotfound").style.display="none";
    document.getElementById("weathernottyped").style.display="none";
    document.getElementById("weatherapp").style.display="none";

    fetch(url1).then(function(resp) { if(resp.ok){ return resp.json(); }else{return null;}}).then(function(data) {
     if(data==null){
         document.getElementById("weatherwaittoenter").style.display="none";
         document.getElementById("weatherloading").style.display="none";
         document.getElementById("weathernotfound").style.display="block";
         document.getElementById("weathernottyped").style.display="none";
         document.getElementById("weatherapp").style.display="none";

         return;
     }

     alert(JSON.stringify(data));
     document.getElementById("currentweatherloc").innerHTML=data.name + "," + data.sys.country;
     longitude=data.coord.lon;
     latitude=data.coord.lat;
     var url2=  'https://api.openweathermap.org/data/2.5/onecall?lat='+latitude+'&lon='+longitude+'&appid='+apiKey+'&units=metric';
     fetch(url2).then(function(resp) { if(resp.ok){ return resp.json(); }else{return null;}}).then(function(data) {
      if(data==null){
          document.getElementById("weatherwaittoenter").style.display="none";
          document.getElementById("weatherloading").style.display="none";
          document.getElementById("weathernotfound").style.display="block";
          document.getElementById("weathernottyped").style.display="none";
          document.getElementById("weatherapp").style.display="none";
          return;
      }

      alert(JSON.stringify(data));
      getcurrentdayweatherdata(data);
      getmultipledayweatherdata(data,5);

    })

     document.getElementById("weatherwaittoenter").style.display="none";
     document.getElementById("weatherloading").style.display="none";
     document.getElementById("weathernotfound").style.display="none";
     document.getElementById("weathernottyped").style.display="none";
     document.getElementById("weatherapp").style.display="block";
   })
   .catch(function() {
      document.getElementById("weatherwaittoenter").style.display="none";
      document.getElementById("weatherloading").style.display="none";
      document.getElementById("weathernotfound").style.display="block";
      document.getElementById("weathernottyped").style.display="none";
      document.getElementById("weatherapp").style.display="none";

    });
  }

}
function getcurrentdayweatherdata(data){
   document.getElementById("cweathericon").src=returnweathericon(data.current.weather[0].id);
  document.getElementById("ctempspan").innerHTML=showtempinrespecttosettings(data.current.temp);
  var cstring=data.current.weather[0].description.charAt(0).toUpperCase()+data.current.weather[0].description.slice(1);
  document.getElementById("cweatherdescription").innerHTML=cstring;
  document.getElementById("cweatherwind").innerHTML=data.current.wind_speed +" m/s";
  document.getElementById("Estimatedweathersiglosses").innerHTML=calculatedsiglosses(data.current.weather[0].id);

}
function getmultipledayweatherdata(data,maxdays){
  data.daily.forEach((value, index) => {
     if (index > 0 && index<=maxdays) {
       var dayname = new Date(value.dt * 1000).toLocaleDateString("en", {
         weekday: "short",

       });
       document.getElementById("day"+index+"day").innerHTML=dayname.toUpperCase();

       document.getElementById("day"+index+"weathericon").src=returnweathericon(value.weather[0].id);

       document.getElementById("day"+index+"tempspan").innerHTML=showtempinrespecttosettings(value.temp.day);

     }
   });
}
function changegainunit(occasion){
    if(occasion=='U'){
      document.getElementById("targetedspotbeammingainunit").innerHTML="dB/K";
      document.getElementById("targetedspotbeammaxgainunit").innerHTML="dB/K";
      document.getElementById("targetedspotbeamsemimajoraxisunit").innerHTML="dB/K";
    }
    else if(occasion=='D'){
      document.getElementById("targetedspotbeammingainunit").innerHTML="dBW";
      document.getElementById("targetedspotbeammaxgainunit").innerHTML="dBW";
      document.getElementById("targetedspotbeamsemimajoraxisunit").innerHTML="dBW";
    }
}

function populatesatdropdownontargetedspotbeam(terrainobjects){
  var select=document.getElementById("targetedspotbeamsat");
  select.options.length = 0;
  for (var i = 0; i<terrainobjects.getSatellitesInTerrain.length; i++){
    var opt = document.createElement('option');
    opt.value = terrainobjects.getSatellitesInTerrain[i].getName;
    opt.innerHTML = terrainobjects.getSatellitesInTerrain[i].getName;
    select.appendChild(opt);
  }
}

function showtempinrespecttosettings(temp){
  if(document.getElementById("tempunitswitch").checked){
    var converted=Math.round(temp*(9/5)+32);
    return converted+ " &degF";
  }
  return Math.round(temp) + " &degC";
}
function calculatedsiglosses(weatherid){
  if(weatherid==800){
    return "0dB";
  }
  else if(weatherid==801){
    return "-0.1dB";
  }
  else if(weatherid==802){
    return "-0.2dB";
  }
  else if(weatherid==803){
    return "-0.3dB";
  }
  else if(weatherid==804){
    return "-0.6dB";
  }
  else if(weatherid==701){
    return "-3.0dB";
  }
  else if(weatherid==711){
    return "-1.8dB";
  }
  else if(weatherid==721){
    return "-2.1dB";
  }
  else if(weatherid==731){
    return "-2.6dB";
  }
  else if(weatherid==741){
    return "-5.5dB";
  }
  else if(weatherid==751){
    return "-1.2dB";
  }
  else if(weatherid==761){
    return "-1.4dB";
  }
  else if(weatherid==762){
    return "-2.1dB";
  }
  else if(weatherid==771){
    return "-5.0dB";
  }
  else if(weatherid==781){
    return "-0.2dB";
  }
  else if(weatherid==600){
    return "-0.6dB";
  }
  else if(weatherid==601){
    return "-2.6dB";
  }
  else if(weatherid==602){
    return "-4.8dB";
  }
  else if(weatherid==611){
    return "-2.3dB";
  }
  else if(weatherid==612){
    return "-1.0dB";
  }
  else if(weatherid==613){
    return "-2.3dB";
  }
  else if(weatherid==615){
    return "-1.4dB";
  }
  else if(weatherid==616){
    return "-3.4dB";
  }
  else if(weatherid==620){
    return "-0.6dB";
  }
  else if(weatherid==621){
    return "-2.6dB";
  }
  else if(weatherid==622){
    return "-4.8dB";
  }
  else if(weatherid==500){
    return "-1.8dB";
  }
  else if(weatherid==501){
    return "-3.2dB";
  }
  else if(weatherid==502){
    return "-5.4dB";
  }
  else if(weatherid==503){
    return "-8.5dB";
  }
  else if(weatherid==504){
    return "-13.4dB";
  }
  else if(weatherid==511){
    return "-3.1dB";
  }
  else if(weatherid==520){
    return "-1.8dB";
  }
  else if(weatherid==521){
    return "-4.2dB";
  }
  else if(weatherid==522){
    return "-8.5dB";
  }
  else if(weatherid==531){
    return "-13.4dB";
  }
  else if(weatherid==300){
    return "-0.7dB";
  }
  else if(weatherid==301){
    return "-1.7dB";
  }
  else if(weatherid==302){
    return "-4.6dB";
  }
  else if(weatherid==310){
    return "-0.9dB";
  }
  else if(weatherid==311){
    return "-2.6dB";
  }
  else if(weatherid==312){
    return "-5.3dB";
  }
  else if(weatherid==313){
    return "-4.4dB";
  }
  else if(weatherid==314){
    return "-9.2dB";
  }
  else if(weatherid==321){
    return "-0.7dB";
  }
  else if(weatherid==500){
    return "-1.8dB";
  }
  else if(weatherid==200){
    return "-2.2dB";
  }
  else if(weatherid==201){
    return "-4.4dB";
  }
  else if(weatherid==202){
    return "-14.4dB";
  }
  else if(weatherid==210){
    return "-1.6dB";
  }
  else if(weatherid==211){
    return "-2.9dB";
  }
  else if(weatherid==212){
    return "-4.7dB";
  }
  else if(weatherid==221){
    return "-5.6dB";
  }
  else if(weatherid==230){
    return "-2.0dB";
  }
  else if(weatherid==231){
    return "-3.9dB";
  }
  else if(weatherid==232){
    return "-8.4dB";
  }


}

function returnweathericon(weatherid){
  if(weatherid==800){
    return 'Resources/WeatherIcons/sunny_light_color_96dp.png';
  }
  else if(weatherid==801){
    return 'Resources/WeatherIcons/mostly_sunny_light_color_96dp.png';
  }
  else if(weatherid==802){
    return 'Resources/WeatherIcons/partly_cloudy_light_color_96dp.png';
  }
  else if(weatherid==803){
    return 'Resources/WeatherIcons/mostly_cloudy_day_light_color_96dp.png';
  }
  else if(weatherid==804){
     return 'Resources/WeatherIcons/cloudy_light_color_96dp.png';
  }
  else if(String(weatherid)[0]=="7"){
     return 'Resources/WeatherIcons/haze_fog_dust_smoke_light_color_96dp.png';
  }
  else if(weatherid==600 || weatherid==620){
     return 'Resources/WeatherIcons/flurries_light_color_96dp.png';
  }
  else if(weatherid==601 || weatherid==602 || weatherid==621 || weatherid==622){
    return 'Resources/WeatherIcons/snow_showers_snow_light_color_96dp.png';
  }
  else if(weatherid>=611 && weatherid<=616){
    return 'Resources/WeatherIcons/wintry_mix_rain_snow_light_color_96dp.png';
  }
  else if(weatherid==500 || String(weatherid)[0]=="3"){
    return 'Resources/WeatherIcons/drizzle_light_color_96dp.png';
  }
  else if(weatherid==501 || weatherid==502){
    return 'Resources/WeatherIcons/showers_rain_light_color_96dp.png';
  }
  else if(weatherid==502 || weatherid==503 || weatherid==504 || weatherid==522 || weatherid==531){
    return 'Resources/WeatherIcons/heavy_rain_light_color_96dp.png';
  }
  else if(weatherid==511){
    return 'Resources/WeatherIcons/wintry_mix_rain_snow_light_color_96dp.png';
  }
  else if(weatherid==520 || weatherid==521){
    return 'Resources/WeatherIcons/scattered_showers_day_light_color_96dp.png';
  }
  else if(weatherid==200 || weatherid==210 || weatherid==230 || weatherid==231){
      return 'Resources/WeatherIcons/isolated_scattered_tstorms_day_light_color_96dp.png';
  }
  else{
    return 'Resources/WeatherIcons/strong_tstorms_light_color_96dp.png';
  }

}

//show windows

function showlogwindow(){

  $.ajax({
             url: '/Apps/loggetter.php',
             type: 'GET',
             success: function(data) {
               document.getElementById("logtextarea").value=data;
             },
         });

  $('#logwindow').PopupWindow({
          title: "Log Window",
          autoOpen: false,
          nativeDrag: false,
  	      height              : 300,
  	      width               : 400,
  	      maxHeight           : undefined,
  	      maxWidth            : undefined,
  	      minHeight           : 300,
  	      minWidth            : 400,
  	      collapsedWidth      : undefined,
  });
    $("#logwindow").PopupWindow("open");

}

function showerrorwindow(){
  $('#errorwindow').PopupWindow({
          title: "Error Window",
          autoOpen: false,
          nativeDrag: false,
  	      height              : 200,
  	      width               : 400,
  	      maxHeight           : undefined,
  	      maxWidth            : undefined,
  	      minHeight           : 200,
  	      minWidth            : 400,
  	      collapsedWidth      : undefined,
  });
    $("#errorwindow").PopupWindow("open");
}

function showselectsatellitewindow(){
  $('#selectsatellitewindow').PopupWindow({
          title: "Select Satellite Window",
          autoOpen: false,
          nativeDrag: false,
  	      height              : 450,
  	      width               : 500,
  	      maxHeight           : undefined,
  	      maxWidth            : undefined,
  	      minHeight           : 450,
  	      minWidth            : 500,
  	      collapsedWidth      : undefined,
  });
    $("#selectsatellitewindow").PopupWindow("open");
}

function showdeletesatellitewindow(){
  $('#deletesatellitewindow').PopupWindow({
          title: "Delete Satellite Window",
          autoOpen: false,
          nativeDrag: false,
  	      height              : 450,
  	      width               : 500,
  	      maxHeight           : undefined,
  	      maxWidth            : undefined,
  	      minHeight           : 450,
  	      minWidth            : 500,
  	      collapsedWidth      : undefined,
  });
    $("#deletesatellitewindow").PopupWindow("open");
}

function showmanagesatellitewindow(){
  $('#managesatellitewindow').PopupWindow({
          title: "Manage Satellite Window",
          autoOpen: false,
          nativeDrag: false,
  	      height              : 450,
  	      width               : 500,
  	      maxHeight           : undefined,
  	      maxWidth            : undefined,
  	      minHeight           : 450,
  	      minWidth            : 500,
  	      collapsedWidth      : undefined,
  });
    $("#managesatellitewindow").PopupWindow("open");
}

function showmanagedisheswindow(){
  $('#managedisheswindow').PopupWindow({
          title: "Manage Dishes Window",
          autoOpen: false,
          nativeDrag: false,
  	      height              : 450,
  	      width               : 500,
  	      maxHeight           : undefined,
  	      maxWidth            : undefined,
  	      minHeight           : 450,
  	      minWidth            : 500,
  	      collapsedWidth      : undefined,
  });
    $("#managedisheswindow").PopupWindow("open");
}

function showadddishwindow(){
  $('#adddishwindow').PopupWindow({
          title: "Add Dish Window",
          autoOpen: false,
          nativeDrag: false,
  	      height              : 450,
  	      width               : 640,
  	      maxHeight           : undefined,
  	      maxWidth            : undefined,
  	      minHeight           : 450,
  	      minWidth            : 640,
  	      collapsedWidth      : undefined,
  });
    $("#adddishwindow").PopupWindow("open");
}

function showeditdishwindow(){
  $('#editdishwindow').PopupWindow({
          title: "Edit Dish Window",
          autoOpen: false,
          nativeDrag: false,
  	      height              : 450,
  	      width               : 640,
  	      maxHeight           : undefined,
  	      maxWidth            : undefined,
  	      minHeight           : 450,
  	      minWidth            : 640,
  	      collapsedWidth      : undefined,
  });
    $("#editdishwindow").PopupWindow("open");
}

function showaddsatellitewindow(){
$('#addsatellitewindow').PopupWindow({
        title: "Add Satellite Window",
        autoOpen: false,
        nativeDrag: false,
        height              : 270,
        width               : 750,
        maxHeight           : undefined,
        maxWidth            : undefined,
        minHeight           : 270,
        minWidth            : 750,
        collapsedWidth      : undefined,
});
  $("#addsatellitewindow").PopupWindow("open");
}

function showconfirmdeletesatellitewindow(){
  var table=document.getElementById('satellitedelete');
  var row=table.getElementsByClassName("selectedtr")[0];
  var satname=row.cells[0].innerText;
  document.getElementById('confirmdeletesatellitespan').innerHTML="Are you sure to delete satellite "+ satname+"?"
  document.getElementById('sattodelete').innerHTML=satname;
  $('#confirmdeletesatellitewindow').PopupWindow({
          title: "Confirm Deletion",
          autoOpen: false,
          nativeDrag: false,
  	      height              : 200,
  	      width               : 500,
  	      maxHeight           : undefined,
  	      maxWidth            : undefined,
  	      minHeight           : 200,
  	      minWidth            : 400,
  	      collapsedWidth      : undefined,
  });
    $("#confirmdeletesatellitewindow").PopupWindow("open");
}

function showweatherwindow(){
  $('#weatherwindow').PopupWindow({
          title: "Weather Forecast",
          autoOpen: false,
          nativeDrag: false,
  	      height              : 655,
  	      width               : 720,
  	      maxHeight           : undefined,
  	      maxWidth            : undefined,
  	      minHeight           : 200,
  	      minWidth            : 400,
  	      collapsedWidth      : undefined,
  });
    $("#weatherwindow").PopupWindow("open");
}


function showgeneratetargetedspotbeamwindow(sattoselect){

   var elements = document.getElementById("targetedspotbeamsat").options;

   for(var i = 0; i < elements.length; i++){
     elements[i].selected = false;
     if(elements[i].value==sattoselect){
       elements[i].selected = true;
     }
   }

   $('#generatetargetedspotbeamwindow').PopupWindow({
          title: "Generate Targeted Spotbeam",
          autoOpen: false,
          nativeDrag: false,
          height              : 655,
          width               : 720,
          maxHeight           : undefined,
          maxWidth            : undefined,
          minHeight           : 200,
          minWidth            : 400,
          collapsedWidth      : undefined,
   });
     $("#generatetargetedspotbeamwindow").PopupWindow("open");
 }
