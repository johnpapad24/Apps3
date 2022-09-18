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
  set setSatellitesInTerrain(sit){
    this.satellites=sit;
  }
  set setDishesInTerrain(dit){
    this.dishes=dit;
  }
  set setCurrentBeamInTerrain(currentbeam){
    this.currentbeam=currentbeam;
  }

  get jsonfyterrainobjects(){
    var json='{ "satellites":[';
    for(var i=0;i<this.getSatellitesInTerrain.length;i++){

      json=json+'{"id":"'+this.getSatellitesInTerrain[i].getId+'",  "name":"'+this.getSatellitesInTerrain[i].getName+'",  "color":"'+this.getSatellitesInTerrain[i].getColor+'",  "czml": null, "tle1":"'+this.getSatellitesInTerrain[i].getsattle1+'", "tle2":"'+this.getSatellitesInTerrain[i].getsattle2+ '", "beams":';

      if(this.getSatellitesInTerrain[i].getBeams!=null){
        var json=json+'[';
        var beamjson2="";
        for(var k=0;k<this.getSatellitesInTerrain[i].getBeams.length;k++){

          beamjson2='{"id":"'+this.getSatellitesInTerrain[i].getBeams[k].getId+'",  "name":"'+this.getSatellitesInTerrain[i].getBeams[k].getName+'",  "satellite":"'+this.getSatellitesInTerrain[i].getBeams[k].getSatellite+'", "data": null, "usage":"'+ this.getSatellitesInTerrain[i].getBeams[k].getUsage+ '", "band":"'+ this.getSatellitesInTerrain[i].getBeams[k].getBand+'", "locationx":'+ this.getSatellitesInTerrain[i].getBeams[k].getLocationx+', "locationy":'+ this.getSatellitesInTerrain[i].getBeams[k].getLocationy+', "maxgain":'+ this.getSatellitesInTerrain[i].getBeams[k].getMaxgain+', "mingain":'+ this.getSatellitesInTerrain[i].getBeams[k].getMingain+', "semimajoraxismaxgain":'+ this.getSatellitesInTerrain[i].getBeams[k].getSemimajoraxismaxgain+', "eccentricity":'+ this.getSatellitesInTerrain[i].getBeams[k].getEccentricity+', "step":'+ this.getSatellitesInTerrain[i].getBeams[k].getStep+', "tightness":'+ this.getSatellitesInTerrain[i].getBeams[k].getTightness+', "rotationangle":'+ this.getSatellitesInTerrain[i].getBeams[k].getRotationangle;

         if(k<this.getSatellitesInTerrain[i].getBeams.length-1){
           json=json+beamjson2+'},';
         }
         else{
           json=json+beamjson2+'}';
         }
       }
       json=json+']}';
     }
     else{
       json=json+' null}'
     }
      if(i<this.getSatellitesInTerrain.length-1){
        json=json+",";
      }
    }
    json=json+'], "dishes":';
    json=json+JSON.stringify(this.getDishesInTerrain);
    json=json+', "currentbeam":';
    if(this.getCurrentbeamInTerrain!=null){
      var beamjson='{"id":"'+this.getCurrentbeamInTerrain.getId+'",  "name":"'+this.getCurrentbeamInTerrain.getName+'",  "satellite":"'+this.getCurrentbeamInTerrain.getSatellite+'", "data": null, "usage":"'+ this.getCurrentbeamInTerrain.getUsage+ '", "band":"'+ this.getCurrentbeamInTerrain.getBand+'", "locationx":'+ this.getCurrentbeamInTerrain.getLocationx+', "locationy":'+ this.getCurrentbeamInTerrain.getLocationy+', "maxgain":'+ this.getCurrentbeamInTerrain.getMaxgain+', "mingain":'+ this.getCurrentbeamInTerrain.getMingain+', "semimajoraxismaxgain":'+ this.getCurrentbeamInTerrain.getSemimajoraxismaxgain+', "eccentricity":'+ this.getCurrentbeamInTerrain.getEccentricity+', "step":'+ this.getCurrentbeamInTerrain.getStep+', "tightness":'+ this.getCurrentbeamInTerrain.getTightness+', "rotationangle":'+ this.getCurrentbeamInTerrain.getRotationangle+'}';
      json=json+beamjson+"}";
    }
    else{
      json=json+" null }";
    }

    return json;
  }

}
class t_satellite{
  constructor(id, name, color, czml,tle1,tle2,beams){
    this.id=id;
    this.name=name;
    this.color=color;
    this.czml=czml;
    this.tle1=tle1;
    this.tle2=tle2;
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
  get getsattle1(){
    return this.tle1;
  }
  get getsattle2(){
    return this.tle2;
  }
  get getBeams(){
    return this.beams;
  }
  set setBeams(beamsarr){
    this.beams=beamsarr;
  }
  set setCzml(czmlobj){
    this.czml=czmlobj;
  }
}
class dish {
  constructor(id, name, longitude, latitude, size, gain,efficiencyk, usage){
      this.id=id;
      this.name=name;
      this.longitude=longitude;
      this.latitude=latitude;
      this.size=size;
      this.gain=gain;
      this.efficiencyk=efficiencyk;
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
  get getEfficiencyk(){
    return this.efficiencyk;
  }
  get getEfficiencykString(){
    return this.efficiencyk+" %";
  }
  get getUsage(){
    return this.usage;
  }

}
class beam{
    constructor(id,name,satellite,data,usage,band,locationx,locationy,maxgain,mingain,semimajoraxismaxgain,eccentricity,step,tightness,rotationangle){
      this.id=id;
      this.name=name;
      this.satellite=satellite;
      this.data=data;
      this.usage=usage;
      this.band=band;
      this.locationx=locationx;
      this.locationy=locationy;
      this.maxgain=maxgain;
      this.mingain=mingain;
      this.semimajoraxismaxgain=semimajoraxismaxgain;
      this.eccentricity=eccentricity;
      this.step=step;
      this.tightness=tightness;
      this.rotationangle=rotationangle;

    }
    get getId(){
      return this.id;
    }
    get getName(){
      return this.name;
    }
    get getSatellite(){
      return this.satellite;
    }
    get getData(){
      return this.data;
    }
    get getUsage(){
      return this.usage;
    }
    get getBand(){
      return this.band;
    }
    get getLocationx(){
      return this.locationx;
    }
    get getLocationy(){
      return this.locationy;
    }
    get getMaxgain(){
      return this.maxgain;
    }
    get getMingain(){
      return this.mingain;
    }
    get getSemimajoraxismaxgain(){
      return this.semimajoraxismaxgain;
    }
    get getEccentricity(){
      return this.eccentricity;
    }
    get getStep(){
      return this.step;
    }
    get getTightness(){
      return this.tightness;
    }
    get getRotationangle(){
      return this.rotationangle;
    }
    set setData(data){
      this.data=data;
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
    if(document.getElementById("lengthunitswitch").checked){
        document.getElementById("distanceunit").innerHTML=" mi";
        document.getElementById("targetedspotbeamlengthunit").innerHTML=" mi";
        document.getElementById("linkbudgetdownlinksatdistanceunitspan").innerHTML=" mi";
        document.getElementById("linkbudgetuplinksatdistanceunitspan").innerHTML=" mi";

        if(document.getElementById("targetedspotbeamsemimajoraxisonmaxgain").value!=""){
          var smavtoconvert=document.getElementById("targetedspotbeamsemimajoraxisonmaxgain").value;
          smavtoconvert=convertkmtomiles(smavtoconvert);
          document.getElementById("targetedspotbeamsemimajoraxisonmaxgain").value=smavtoconvert;
        }
        if(document.getElementById("linkbudgetuplinksatdistance").value!=""){
          var smavtoconvert=document.getElementById("linkbudgetuplinksatdistance").value;
          smavtoconvert=convertkmtomiles(smavtoconvert);
          document.getElementById("linkbudgetuplinksatdistance").value=smavtoconvert;
        }
        if(document.getElementById("linkbudgetdownlinksatdistance").value!=""){
          var smavtoconvert=document.getElementById("linkbudgetdownlinksatdistance").value;
          smavtoconvert=convertkmtomiles(smavtoconvert);
          document.getElementById("linkbudgetdownlinksatdistance").value=smavtoconvert;
        }
        var toconvert=document.getElementById("distancevalue").innerHTML;
        toconvert=convertkmtomiles(toconvert);
        document.getElementById("distancevalue").innerHTML=toconvert;


      }
    else{
      document.getElementById("distanceunit").innerHTML=" km";
      document.getElementById("targetedspotbeamlengthunit").innerHTML=" km";
      document.getElementById("linkbudgetdownlinksatdistanceunitspan").innerHTML=" km";
      document.getElementById("linkbudgetuplinksatdistanceunitspan").innerHTML=" km";
      if(document.getElementById("targetedspotbeamsemimajoraxisonmaxgain").value!=""){
        var smavtoconvert=document.getElementById("targetedspotbeamsemimajoraxisonmaxgain").value;
        smavtoconvert=convertmilestokm(smavtoconvert);
        document.getElementById("targetedspotbeamsemimajoraxisonmaxgain").value=smavtoconvert;
      }
      if(document.getElementById("linkbudgetuplinksatdistance").value!=""){
        var smavtoconvert=document.getElementById("linkbudgetuplinksatdistance").value;
        smavtoconvert=convertmilestokm(smavtoconvert);
        document.getElementById("linkbudgetuplinksatdistance").value=smavtoconvert;
      }
      if(document.getElementById("linkbudgetdownlinksatdistance").value!=""){
        var smavtoconvert=document.getElementById("linkbudgetdownlinksatdistance").value;
        smavtoconvert=convertmilestokm(smavtoconvert);
        document.getElementById("linkbudgetdownlinksatdistance").value=smavtoconvert;
      }
      var toconvert=document.getElementById("distancevalue").innerHTML;
      toconvert=convertmilestokm(toconvert);
      document.getElementById("distancevalue").innerHTML=toconvert;

    }
    for(i=0;i<rullerlocationsarray.length;i++){
      var distancetext=showlengthinrespecttosettings(rullerlocationsarray[i].value);
      var distancetexttrimmed=showtrimmedlengthinrespecttosettings(rullerlocationsarray[i].value);
      rullerlocationsarray[i].label.text=distancetexttrimmed;
      var description=rullerlocationsarray[i].description.toString();

      var deslines = description.split("<br>");
      var newdesline2="Distance: "+distancetext;
      var newdescription=deslines[0]+"<br>"+newdesline2;
      rullerlocationsarray[i].description=newdescription;

    }
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
function toggletempunit(maxdays){
  if(document.getElementById("weatherapp").style.display!="none"){
    if(document.getElementById("tempunitswitch").checked){
        liveconverttofarenheit(maxdays);
      }
    else{
      liveconverttocelcius(maxdays);
    }
  }
}

function  liveconverttocelcius(maxdays){
  var num = document.getElementById("ctempspan").innerHTML;
  num=num.slice(0,num.length-2);
  var converted=Math.round((Number(num)-32)/1.800);
  document.getElementById("ctempspan").innerHTML=converted+"&degC"
  for(var i=1;i<=maxdays;i++){
    num=document.getElementById("day"+i+"tempspan").innerHTML;
    num=num.slice(0,num.length-2);
    converted=Math.round((Number(num)-32)/1.800);
    document.getElementById("day"+i+"tempspan").innerHTML=converted+"&degC"

  }
}
function liveconverttofarenheit(maxdays){
  var num = document.getElementById("ctempspan").innerHTML;
  num=num.slice(0,num.length-2);
  var converted=Math.round(num*(9/5)+32);
  document.getElementById("ctempspan").innerHTML=converted+"&degF"
  for(var i=1;i<=maxdays;i++){
    num=document.getElementById("day"+i+"tempspan").innerHTML;
    num=num.slice(0,num.length-2);
    converted=Math.round(num*(9/5)+32);
    document.getElementById("day"+i+"tempspan").innerHTML=converted+"&degF"

  }
}

function toggletempunitonclick(maxdays){
  toggletempunit(maxdays);
  settingssaver('tempunitswitch',document.getElementById("tempunitswitch").checked);

}

function togglexaxis(viewer){
  if(document.getElementById("xaxischeckbox").checked){
    var pointsx =  Cesium.Cartesian3.fromDegreesArrayHeights([0.0, 0.0, 0.0, 0.0, 0.0, 8000000.0]);
    viewer.entities.add({
      id: "X axis",
      name: "X axis",
      polyline: {
        positions: pointsx,
        width: 20,
        arcType: Cesium.ArcType.NONE,
        material: new Cesium.PolylineArrowMaterialProperty(Cesium.Color.RED)
      },
    });
  }
  else{
    viewer.entities.removeById("X axis");
  }
}
function togglexaxisonclick(viewer){
  togglexaxis(viewer);
  settingssaver('xaxischeckbox',document.getElementById("xaxischeckbox").checked);

}

function toggleyaxis(viewer){
  if(document.getElementById("yaxischeckbox").checked){
    var pointsy =  Cesium.Cartesian3.fromDegreesArrayHeights([90.0, 0.0, 0.0, 90.0, 0.0, 8000000.0]);
    viewer.entities.add({
      id:"Y axis",
      name: "Y axis",
      polyline: {
        positions: pointsy,
        width: 20,
        arcType: Cesium.ArcType.NONE,
        material: new Cesium.PolylineArrowMaterialProperty(Cesium.Color.GREEN)
      },
    });
  }
  else{
    viewer.entities.removeById("Y axis");
  }
}
function toggleyaxisonclick(viewer){
  toggleyaxis(viewer);
  settingssaver('yaxischeckbox',document.getElementById("yaxischeckbox").checked);

}

function togglezaxis(viewer){
 if(document.getElementById("zaxischeckbox").checked){
   var pointsz = Cesium.Cartesian3.fromDegreesArrayHeights([0.0, 90.0, 0.0, 0.0, 90.0, 8000000.0]);
   viewer.entities.add({
     id:"Z axis",
     name: "Z axis",
     polyline: {
       positions: pointsz,
       width: 20,
       arcType: Cesium.ArcType.NONE,
       material: new Cesium.PolylineArrowMaterialProperty(Cesium.Color.BLUE)
     },
   });
 }
 else{
   viewer.entities.removeById("Z axis");
 }
}
function togglezaxisonclick(viewer){
  togglezaxis(viewer);
  settingssaver('zaxischeckbox',document.getElementById("zaxischeckbox").checked);

}
function toggleprimemeridian(viewer){
  if(document.getElementById("allmeridianscheckbox").checked){
    return;
  }
  if(document.getElementById("primemeridiancheckbox").checked){
    viewer.entities.add({
      id:"Prime meridian",
      name: "Prime meridian",
      polyline: {
        positions: Cesium.Cartesian3.fromDegreesArray([
        0,
        90,
        0,
        0,
        0,
        -90,
      ]),
      width: 2,
      arcType: Cesium.ArcType.RHUMB,
      material: Cesium.Color.BLUE,
      granularity: 0.001,
      },
    });
  }
  else{
    viewer.entities.removeById("Prime meridian");
  }
}
function toggleprimemeridianonclick(viewer){
  toggleprimemeridian(viewer);
  settingssaver('primemeridiancheckbox',document.getElementById("primemeridiancheckbox").checked);
}

function toggleallmeridians(viewer){

  if(document.getElementById("allmeridianscheckbox").checked){

    for(var i=10;i<190;i=i+10){
      viewer.entities.add({
        id:"Meridian "+i+" E",
        name: "Meridian "+i+"\xB0 E",
        polyline: {
         positions: Cesium.Cartesian3.fromDegreesArray([
          i,
          90,
          i,
          0,
          i,
          -90,
        ]),
        width: 2,
        arcType: Cesium.ArcType.RHUMB,
        material: Cesium.Color.BLACK,
        granularity: 0.001,
        },
      });
    }
      for(var i=10;i<180;i=i+10){
        viewer.entities.add({
          id:"Meridian "+i+" W",
          name: "Meridian "+i+"\xB0 W",
          polyline: {
           positions: Cesium.Cartesian3.fromDegreesArray([
            -i,
            90,
            -i,
            0,
            -i,
            -90,
          ]),
          width: 2,
          arcType: Cesium.ArcType.RHUMB,
          material: Cesium.Color.BLACK,
          granularity: 0.001,
          },
        });

    }
    if(document.getElementById("primemeridiancheckbox").checked==false){
      viewer.entities.add({
        id:"Prime meridian",
        name: "Prime meridian",
        polyline: {
          positions: Cesium.Cartesian3.fromDegreesArray([
          0,
          90,
          0,
          0,
          0,
          -90,
        ]),
        width: 2,
        arcType: Cesium.ArcType.RHUMB,
        material: Cesium.Color.BLUE,
        granularity: 0.001,
        },
      });
    }
  }
  else{
      for(var i=10;i<190;i=i+10){
        viewer.entities.removeById("Meridian "+i+" E");
      }
      for(var i=10;i<180;i=i+10){
        viewer.entities.removeById("Meridian "+i+" W");
      }
      if(!document.getElementById("primemeridiancheckbox").checked){
        viewer.entities.removeById("Prime meridian");
      }
  }
}
function toggleallmeridiansonclick(viewer){
  toggleallmeridians(viewer);
  settingssaver('allmeridianscheckbox',document.getElementById("allmeridianscheckbox").checked);
}


function toggleprimeparallel(){
  if(document.getElementById("allparallelscheckbox").checked){
    return;
  }
  if(document.getElementById("primeparallelcheckbox").checked){
    viewer.entities.add({
      id:"Prime parallel",
      name: "Prime parallel",
      polyline: {
        positions: Cesium.Cartesian3.fromDegreesArray([
          -180,
            0,
          -90,
          0,
          0,
          0,
          90,
          0,
        180,
          0,
    ]),
      width: 2,
      arcType: Cesium.ArcType.RHUMB,
      material: Cesium.Color.RED,
      granularity: 0.001,
      },
    });
  }
  else{
    viewer.entities.removeById("Prime parallel");
  }
}
function toggleprimeparallelonclick(viewer){
  toggleprimeparallel(viewer);
  settingssaver('primeparallelcheckbox',document.getElementById("primeparallelcheckbox").checked);
}

function toggleallparallels(viewer){
  if(document.getElementById("allparallelscheckbox").checked){
    for(var i=10;i<90;i=i+10){
      viewer.entities.add({
        id:"Parallel "+i+" N",
        name: "Parallel "+i+"\xB0 N",
        polyline: {
          positions: Cesium.Cartesian3.fromDegreesArray([
            -180,
            i,
            -90,
            i,
            0,
            i,
            90,
            i,
            180,
            i,
      ]),
        width: 2,
        arcType: Cesium.ArcType.RHUMB,
        material: Cesium.Color.BLACK,
        granularity: 0.001,
        },
      });

      viewer.entities.add({
        id:"Parallel "+i+" S",
        name: "Parallel "+i+"\xB0 S",
        polyline: {
          positions: Cesium.Cartesian3.fromDegreesArray([
            -180,
            -i,
            -90,
            -i,
            0,
            -i,
            90,
            -i,
            180,
            -i,
      ]),
        width: 2,
        arcType: Cesium.ArcType.RHUMB,
        material: Cesium.Color.BLACK,
        granularity: 0.001,
        },
      });

    }


    if(!document.getElementById("primeparallelcheckbox").checked){
      viewer.entities.add({
        id:"Prime parallel",
        name: "Prime parallel",
        polyline: {
          positions: Cesium.Cartesian3.fromDegreesArray([
            -180,
              0,
            -90,
            0,
            0,
            0,
            90,
            0,
          180,
            0,
      ]),
        width: 2,
        arcType: Cesium.ArcType.RHUMB,
        material: Cesium.Color.RED,
        granularity: 0.001,
        },
      });
    }
  }
  else{
      for(var i=10;i<90;i=i+10){
        viewer.entities.removeById("Parallel "+i+" N");
        viewer.entities.removeById("Parallel "+i+" S");
      }
      if(!document.getElementById("primeparallelcheckbox").checked){
        viewer.entities.removeById("Prime parallel");
      }
  }
}
function toggleallparallelsonclick(viewer){
  toggleallparallels(viewer);
  settingssaver('allparallelscheckbox',document.getElementById("allparallelscheckbox").checked);
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
               document.getElementById('errorwindow').innerHTML='<div style="display: block; margin: auto; text-align:center;">  <img style="vertical-align:middle;" src="Resources/error-icon.png" width="48" height="48">  <span style="color: red; font-size: 18px; font-weight: bold;">Cannot write to logfile.</span> </div>   <div style="text-align:center;"> <button onclick="showlogwindow();" style="margin:auto; text-align:center;" class="btn btn-info">Show Log</button> </div>';
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
                    writetolog("Loading satellite list...","FAILED");
                    document.getElementById('errorwindow').innerHTML='<div style="display: block; margin: auto; text-align:center;">  <img style="vertical-align:middle;" src="Resources/error-icon.png" width="48" height="48">  <span style="color: red; font-size: 18px; font-weight: bold;">Cannot load satellite list.</span> </div>   <div style="text-align:center;"> <button onclick="showlogwindow();" style="margin:auto; text-align:center;" class="btn btn-info">Show Log</button> </div>';
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
                writetolog("Loading satellite list...","OK");
                return data;
             }
         });
}

function browsefileloader(windowname){

  if(windowname=="browsefileopenwindow"){
       document.getElementById('browsefileopenloading').style.display="block";
       document.getElementById('browsefileopennofiles').style.display="none";
       document.getElementById('browsefileopenmainwindow').style.display="none";

   }
   else if(windowname=="browsefilesavewindow"){
      document.getElementById('browsefilesaveloading').style.display="block";
      document.getElementById('browsefilesavenofiles').style.display="none";
      document.getElementById('browsefilesavemainwindow').style.display="none";

  }
  $.ajax({
             url: '/Apps/Browsefilegetter.php',
             type: 'POST',
             data: {windowname: windowname},
              error:function (xhr, ajaxOptions, thrownError){
                  if(xhr.status!=200) {
                    document.getElementById('errorwindow').innerHTML='<div style="display: block; margin: auto; text-align:center;">  <img style="vertical-align:middle;" src="Resources/error-icon.png" width="48" height="48">  <span style="color: red; font-size: 18px; font-weight: bold;">Cannot load file list.</span> </div>   <div style="text-align:center;"> <button onclick="showlogwindow();" style="margin:auto; text-align:center;" class="btn btn-info">Show Log</button> </div>';
                    showerrorwindow();
                  }
              },
              success: function(data) {
                alert(data);
               if(windowname=="browsefileopenwindow"){
                  document.getElementById('browsefileopentablespan').innerHTML=data;
                  var table = document.getElementById("browsefileopentable");
                  if(document.querySelectorAll('#browsefileopentable tbody tr').length==0){
                    document.getElementById('browsefileopenloading').style.display="none";
                    document.getElementById('browsefileopennofiles').style.display="block";
                    document.getElementById('browsefileopenmainwindow').style.display="none";
                    return;
                  }
                  document.getElementById('browsefileopenloading').style.display="none";
                  document.getElementById('browsefileopennofiles').style.display="none";
                  document.getElementById('browsefileopenmainwindow').style.display="block";
                }
                else if(windowname=="browsefilesavewindow"){

                  document.getElementById('browsefilesavetablespan').innerHTML=data;
                   var table = document.getElementById("browsefilesavetable");
                   if(document.querySelectorAll('#browsefilesavetable tbody tr').length==0){
                     document.getElementById('browsefilesaveloading').style.display="none";
                     document.getElementById('browsefilesavenofiles').style.display="block";
                     document.getElementById('browsefilesavemainwindow').style.display="none";

                     return;
                   }
                   document.getElementById('browsefilesaveloading').style.display="none";
                   document.getElementById('browsefilesavenofiles').style.display="none";
                   document.getElementById('browsefilesavemainwindow').style.display="block";
                }
                return data;
             }
         });
}

function projectsaver(filename,terrainobjects){
  if(filename==""){
    return;
  }
  var psav=terrainobjects.jsonfyterrainobjects;
  alert(psav);
  var searchTxt = ".psav";
  var rgx = RegExp(searchTxt, "gi");
  var strArr = filename.split(searchTxt);
  var filename2=strArr[0]+".psav";
  alert(filename2);
  $.ajax({
             url: '/Apps/Savefilecreator.php',
             type: 'POST',
             async:false,
             data: {filename: filename2, data:psav},
              error:function (xhr, ajaxOptions, thrownError){
                  if(xhr.status!=200) {
                    document.getElementById('errorwindow').innerHTML='<div style="display: block; margin: auto; text-align:center;">  <img style="vertical-align:middle;" src="Resources/error-icon.png" width="48" height="48">  <span style="color: red; font-size: 18px; font-weight: bold;">Cannot save file.</span> </div>   <div style="text-align:center;"> <button onclick="showlogwindow();" style="margin:auto; text-align:center;" class="btn btn-info">Show Log</button> </div>';
                    showerrorwindow();
                  }
              },
              success: function(data) {
                currentsavefile=filename2;
                browsefileloader("browsefileopenwindow");
                browsefileloader("browsefilesavewindow");
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
                    writetolog("Saving Settings...","FAILED");
                    document.getElementById('errorwindow').innerHTML='<div style="display: block; margin: auto; text-align:center;">  <img style="vertical-align:middle;" src="Resources/error-icon.png" width="48" height="48">  <span style="color: red; font-size: 18px; font-weight: bold;">Request failed</span> </div>   <div style="text-align:center;"> <button onclick="showlogwindow();" style="margin:auto; text-align:center;" class="btn btn-info">Show Log</button> </div>';
                    showerrorwindow();
                  }
              },
              success: function(data) {
                writetolog("Saving Settings...","OK");

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
      document.getElementById('errorwindow').innerHTML='<div style="display: block; margin: auto; text-align:center;">  <img style="vertical-align:middle;" src="Resources/error-icon.png" width="48" height="48">  <span style="color: red; font-size: 18px; font-weight: bold;">Cannot load settings file.</span> </div>   <div style="text-align:center;"> <button onclick="showlogwindow();" style="margin:auto; text-align:center;" class="btn btn-info">Show Log</button> </div>';
      showerrorwindow();

  });
}
function clearterrainobjects(viewer,terrainobjects){
  for(var i=0;i<terrainobjs.getSatellitesInTerrain.length;i++){
    viewer.entities.removeById(terrainobjects.getSatellitesInTerrain[i].id);
  }
  for(var i=0;i<terrainobjs.getDishesInTerrain.length;i++){
    viewer.entities.removeById(terrainobjects.getDishesInTerrain[i].id);
  }
  clearselectedbeam(viewer,terrainobjects);

  terrainobjs.setSatellitesInTerrain=new Array();
  terrainobjs.setDishesInTerrain=new Array();
  terrainobjs.currentbeam=null;

}
function openproject(viewer){
  if(filename==""){
    return;
  }
  var projectfile=document.getElementById("openfiledir").value;
  var searchTxt = ".psav";
  var rgx = RegExp(searchTxt, "gi");
  var strArr = projectfile.split(searchTxt);
  var filename2=strArr[0]+".psav";

  projectloader(filename2,viewer);
}

function projectloader(projectfile,viewer){
  $.ajax({
               url: '/Apps/Getfilecontentsstring.php',
               type: 'POST',
               async: false,
               data:{
                  filename: projectfile
                },
                fail: function (data){
                  writetolog("Loading project file...","FAILED");
                  document.getElementById('errorwindow').innerHTML='<div style="display: block; margin: auto; text-align:center;">  <img style="vertical-align:middle;" src="Resources/error-icon.png" width="48" height="48">  <span style="color: red; font-size: 18px; font-weight: bold;">Cannot load project file.</span> </div>   <div style="text-align:center;"> <button onclick="showlogwindow();" style="margin:auto; text-align:center;" class="btn btn-info">Show Log</button> </div>';
                  showerrorwindow();

                },
                success: function(data) {
                  alert(data);
                  if(data=="false"){
                    writetolog("Loading project file...","FAILED");
                    document.getElementById('errorwindow').innerHTML='<div style="display: block; margin: auto; text-align:center;">  <img style="vertical-align:middle;" src="Resources/error-icon.png" width="48" height="48">  <span style="color: red; font-size: 18px; font-weight: bold;">Cannot load project file.</span> </div>   <div style="text-align:center;"> <button onclick="showlogwindow();" style="margin:auto; text-align:center;" class="btn btn-info">Show Log</button> </div>';
                    showerrorwindow();
                    return;
                  }
                  var tbjs=JSON.parse(data);
                  clearterrainobjects(viewer,terrainobjs);

                  for(var i=0;i<tbjs.satellites.length;i++){
                    const satrec = satellite.twoline2satrec(
                    tbjs.satellites[i].tle1,
                    tbjs.satellites[i].tle2
                    );
                    var date = new Date();
                    var positionAndVelocity = satellite.propagate(satrec, date);
                    var gmst = satellite.gstime(date);
                    var position = satellite.eciToGeodetic(positionAndVelocity.position, gmst);
                    var start = Cesium.JulianDate.fromDate(new Date());
                    var starttime;
                    var satellitemodel = viewer.entities.add({
                    id: "satellite_"+tbjs.satellites[i].name,
                    name: tbjs.satellites[i].name,
                    position: new Cesium.CallbackProperty(function (time, result) {
                      var jsDate = Cesium.JulianDate.toDate(time);
                      var positionAndVelocity = satellite.propagate(satrec, jsDate);
                      var gmst = satellite.gstime(jsDate);
                      var p   = satellite.eciToGeodetic(positionAndVelocity.position, gmst);
                      var position = Cesium.Cartesian3.fromRadians(p.longitude, p.latitude, p.height * 1000);

                     var pos=new Cesium.Cartesian3();
                      var transform=Cesium.Matrix4.fromRotationTranslation(Cesium.Transforms.computeTemeToPseudoFixedMatrix(time));

                      var pos=Cesium.Matrix4.multiplyByPoint(transform, position, pos);

                      return pos;


                  }, false),
                    description: "Orbit of Satellite: "+tbjs.satellites[i].name,
                    model: {
                      uri : "Resources/10477_Satellite_v1_L3.glb",
                      minimumPixelSize: 96

                    },        });
                    var beamlist=[];
                    for(var j=0;j<tbjs.satellites[i].beams.length;j++){
                      var cbeam=new beam(tbjs.satellites[i].beams[j].id,tbjs.satellites[i].beams[j].name,tbjs.satellites[i].beams[j].satellite,null,tbjs.satellites[i].beams[j].usage,tbjs.satellites[i].beams[j].band,tbjs.satellites[i].beams[j].locationx,tbjs.satellites[i].beams[j].locationy,tbjs.satellites[i].beams[j].maxgain,tbjs.satellites[i].beams[j].mingain,tbjs.satellites[i].beams[j].semimajoraxismaxgain,tbjs.satellites[i].beams[j].eccentricity,tbjs.satellites[i].beams[j].step,tbjs.satellites[i].beams[j].tightness, tbjs.satellites[i].beams[j].rotationangle);
                      alert(JSON.stringify(cbeam));
                      beamlist.push(cbeam);
                    }
                    if(beamlist.length==0){
                      beamlist=null;
                    }

                    var satelliteobj=new t_satellite("satellite_"+tbjs.satellites[i].name,tbjs.satellites[i].name,tbjs.satellites[i].color,satellitemodel,tbjs.satellites[i].tle1,tbjs.satellites[i].tle2.trim(),beamlist);
                    terrainobjs.getSatellitesInTerrain.push(satelliteobj);
                }
                  constructmanagesatellitetable(terrainobjs);
                  for(var i=0;i<tbjs.dishes.length;i++){
                    const dishmodel = viewer.entities.add({
                    id: "dish_"+tbjs.dishes[i].name,
                    name: tbjs.dishes[i].name,
                    description: "Dish Antenna: "+tbjs.dishes[i].name+"<br>"+"Specifications:<br>"+"Position: "+tbjs.dishes[i].longitude+","+tbjs.dishes[i].latitude+"<br>"+"Size: "+tbjs.dishes[i].size+" cm<br>"+"Gain: "+tbjs.dishes[i].gain+" dB<br>"+"Efficincy (k): "+tbjs.dishes[i].efficiencyk+"%<br>"+"Usage: "+tbjs.dishes[i].usage,
                      position: Cesium.Cartesian3.fromDegrees(tbjs.dishes[i].longitude, tbjs.dishes[i].latitude),
                      model:{
                          uri : 'Resources/dish.gltf'
                      }

                    });
                    var dishobj=new dish("dish_"+tbjs.dishes[i].name,tbjs.dishes[i].name,tbjs.dishes[i].longitude,tbjs.dishes[i].latitude,tbjs.dishes[i].size,tbjs.dishes[i].gain,tbjs.dishes[i].efficiencyk,tbjs.dishes[i].usage);
                    terrainobjs.getDishesInTerrain.push(dishobj);
                  }
                  constructmanagedishestable(terrainobjs);


                  generatebeamsdropdownmenu(terrainobjs);
                  if(tbjs.currentbeam!=null){
                    beamchooser(viewer,terrainobjs,tbjs.currentbeam.id);
                  }
                  writetolog("Loading project file...","OK");


               }



    });

}


function loadsetting(setting,value,viewer){
  document.getElementById(setting).checked=value;
  switch (setting) {
    case 'tempunitswitch':
      toggletempunit(5);
    break;
    case 'lengthunitswitch':
      togglelengthunit();
    break;
    //case 'eciunitswitch':
    //  toggleeciunit();
  //  break;
    case 'xaxischeckbox':
      togglexaxis(viewer);
    break;
    case 'yaxischeckbox':
      toggleyaxis(viewer);
    break;
    case 'zaxischeckbox':
      togglezaxis(viewer);
    break;
    case 'primemeridiancheckbox':
      toggleprimemeridian(viewer);
    break;
    case 'allmeridianscheckbox':
      toggleallmeridians(viewer);
    break;
    case 'primeparallelcheckbox':
      toggleprimeparallel(viewer);
    break;
    case 'allparallelscheckbox':
      toggleallparallels(viewer);
    break;
    case 'darkmodeswitch':
      toggledarkmode();
    break;
  }
}

function deletefile(){
  var filename= document.getElementById("filetodelete").innerHTML;
  $.ajax({
               url: '/Apps/Deleteprojectfile.php',
               type: 'POST',
               async: false,
               data:{
                  filename: filename
                },
                fail: function (data){
                  writetolog("Deleting project file...","FAILED");
                  document.getElementById('errorwindow').innerHTML='<div style="display: block; margin: auto; text-align:center;">  <img style="vertical-align:middle;" src="Resources/error-icon.png" width="48" height="48">  <span style="color: red; font-size: 18px; font-weight: bold;">Failed to delete project file.</span> </div>   <div style="text-align:center;"> <button onclick="showlogwindow();" style="margin:auto; text-align:center;" class="btn btn-info">Show Log</button> </div>';
                  showerrorwindow();

                },
                success: function(data) {
                  if(data==0){
                    browsefileloader("browsefileopenwindow");
                    browsefileloader("browsefilesavewindow");
                    writetolog("Deleting project file...","OK");
                  }
                  else if(data==1){
                    writetolog("Deleting project file...","FAILED");
                    document.getElementById('errorwindow').innerHTML='<div style="display: block; margin: auto; text-align:center;">  <img style="vertical-align:middle;" src="Resources/error-icon.png" width="48" height="48">  <span style="color: red; font-size: 18px; font-weight: bold;">Failed to delete project file.</span> </div>   <div style="text-align:center;"> <button onclick="showlogwindow();" style="margin:auto; text-align:center;" class="btn btn-info">Show Log</button> </div>';
                    showerrorwindow();

                  }
                  else {
                    writetolog("Deleting project file...","FAILED");
                    document.getElementById('errorwindow').innerHTML='<div style="display: block; margin: auto; text-align:center;">  <img style="vertical-align:middle;" src="Resources/error-icon.png" width="48" height="48">  <span style="color: red; font-size: 18px; font-weight: bold;">Failed to delete project file.</span> </div>   <div style="text-align:center;"> <button onclick="showlogwindow();" style="margin:auto; text-align:center;" class="btn btn-info">Show Log</button> </div>';
                    showerrorwindow();
                  }

                }
              });

}

function initializesettings(viewer){
    document.getElementById("tempunitswitch").checked = false;
    document.getElementById("lengthunitswitch").checked = false;
  //  document.getElementById("eciunitswitch").checked = false;
    document.getElementById("xaxischeckbox").checked = false;
    document.getElementById("yaxischeckbox").checked = false;
    document.getElementById("zaxischeckbox").checked = false;
    document.getElementById("primemeridiancheckbox").checked = false;
    document.getElementById("primeparallelcheckbox").checked = false;
    document.getElementById("allmeridianscheckbox").checked = false;
    document.getElementById("allparallelscheckbox").checked = false;
    document.getElementById("darkmodeswitch").checked = false;
    toggletempunit();
    togglelengthunit();
    toggleeciunit();
    togglexaxis(viewer);
    toggleyaxis(viewer);
    togglezaxis(viewer);
    toggleprimemeridian(viewer);
    toggleprimeparallel(viewer);
    toggleallmeridians(viewer);
    toggleallparallels(viewer);
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
  }
  else{
  document.getElementById("settingsdropdown").className="dropdown dropdown-bubble dropdown-bubble-dark";
  document.getElementById("settingsdropdownmenu").className="dropdown-menu dropdown-menu-dark";
  }
  var popupwindowcollection = document.getElementsByClassName("popupwindow");
  for (var i=0;i<popupwindowcollection.length;i++){
      popupwindowcollection[i].className="popupwindow popupwindow-dark";
    }
  var popupwindowcontentcollection = document.getElementsByClassName("popupwindow_content");
  for (var i=0;i<popupwindowcontentcollection.length;i++){
      popupwindowcontentcollection[i].className="popupwindow_content popupwindow_content-dark";
    }
    var popuptitlebarcollection = document.getElementsByClassName("popupwindow_titlebar");
    for (var i=0;i<popuptitlebarcollection.length;i++){
        popuptitlebarcollection[i].className="popupwindow_titlebar popupwindow_titlebar_draggable popupwindow_titlebar-dark";
    }
    var popuptitlebartextcollection = document.getElementsByClassName("popupwindow_titlebar_text");
    for (var i=0;i<popuptitlebartextcollection.length;i++){
        popuptitlebartextcollection[i].className="popupwindow_titlebar_text popupwindow_titlebar_text-dark";
    }
    var popupstatusbarcollection = document.getElementsByClassName("popupwindow_statusbar");
    for (var i=0;i<popupstatusbarcollection.length;i++){
        popupstatusbarcollection[i].className="popupwindow_statusbar popupwindow_statusbar-dark";
    }
  document.getElementById("rullersemiwindow").className="rullersemiwindow semiwindow-dark";
  var textinputs= document.querySelectorAll("input[type=text]");
  for(var i=0;i<textinputs.length;i++){
    textinputs[i].className="input-dark";
  }
  document.getElementById("projectbutton").className="btn btn-dark";
  document.getElementById("satellitesbutton").className="btn btn-dark";
  document.getElementById("antennasbutton").className="btn btn-dark";
  document.getElementById("communicationsbutton").className="btn btn-dark";
  document.getElementById("settingsbutton").className="btn btn-dark";
  document.getElementById("beambutton").className="btn btn-dark";


  document.getElementById("projecticon").className="projecticon icons-dark";
  document.getElementById("satellitesicon").className="satellitesicon icons-dark";
  document.getElementById("antennasicon").className="antennasicon icons-dark";
  document.getElementById("communicationsicon").className="communicationsicon icons-dark";
  document.getElementById("settingsicon").className="settingsicon icons-dark";

  document.getElementById("targetedspotbeamsat").className="select-dark";
  document.getElementById("targetedspotbeamband").className="select-dark";
  document.getElementById("weatherlossband").className="select-dark";
  document.getElementById("minsnrberprotocol").className="select-dark";
  document.getElementById("modulationscheme").className="select-dark";
  document.getElementById("minsnrberfecvalue").className="select-dark";

  document.getElementById("logtextarea").className="textarea-dark";

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
  var popupwindowcollection = document.getElementsByClassName("popupwindow-dark");
  while(popupwindowcollection.length>0){
    popupwindowcollection[0].className="popupwindow";
  }
  var popupwindowcontentcollection = document.getElementsByClassName("popupwindow_content-dark");
  while(popupwindowcontentcollection.length>0){
    popupwindowcontentcollection[0].className="popupwindow_content";
  }
  var popuptitlebarcollection = document.getElementsByClassName("popupwindow_titlebar-dark");
  while(popuptitlebarcollection.length>0){
    popuptitlebarcollection[0].className="popupwindow_titlebar popupwindow_titlebar_draggable";
  }
  var popuptitlebartextcollection = document.getElementsByClassName("popupwindow_titlebar_text-dark");
  while(popuptitlebartextcollection.length>0){
    popuptitlebartextcollection[0].className="popupwindow_titlebar_text";
  }
  var popupstatusbarcollection = document.getElementsByClassName("popupwindow_statusbar-dark");
  while(popupstatusbarcollection.length>0){
    popupstatusbarcollection[0].className="popupwindow_statusbar";
  }
  document.getElementById("rullersemiwindow").className="rullersemiwindow";
  var textinputs= document.querySelectorAll("input[type=text]");
  for(var i=0;i<textinputs.length;i++){
    textinputs[i].className="";
  }
  document.getElementById("projectbutton").className="btn btn-light";
  document.getElementById("satellitesbutton").className="btn btn-light";
  document.getElementById("antennasbutton").className="btn btn-light";
  document.getElementById("communicationsbutton").className="btn btn-light";
  document.getElementById("settingsbutton").className="btn btn-light";
  document.getElementById("beambutton").className="btn btn-light";


  document.getElementById("projecticon").className="projecticon";
  document.getElementById("satellitesicon").className="satellitesicon";
  document.getElementById("antennasicon").className="antennasicon";
  document.getElementById("communicationsicon").className="communicationsicon";
  document.getElementById("settingsicon").className="settingsicon";

  document.getElementById("targetedspotbeamsat").className="";
  document.getElementById("targetedspotbeamband").className="";
  document.getElementById("weatherlossband").className="";
  document.getElementById("minsnrberprotocol").className="";
  document.getElementById("modulationscheme").className="";
  document.getElementById("minsnrberfecvalue").className="";

  document.getElementById("logtextarea").className="";


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
  name : 'Location',
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

function findfilename(tablename){
  var table=document.getElementById(tablename);
  var row=table.getElementsByClassName("selectedtr")[0];
  if(row==null){return;}

  var filename=row.id;

  if(tablename=="browsefileopentable"){
    document.getElementById('openfiledir').value=filename;

  }
  if(tablename=="browsefilesavetable"){
    document.getElementById('savefiledir').value=filename;
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
    writetolog("Adding Satelite in terrain...","FAILED");
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
  var starttime;



  /*var positionsOverTime = new Cesium.SampledPositionProperty();
  for (var i = 0; i < 60*60*600; i+= 6) {
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
  */
  var satellitemodel = viewer.entities.add({
  id: "satellite_"+satname,
  name: satname,
  position: new Cesium.CallbackProperty(function (time, result) {
    var jsDate = Cesium.JulianDate.toDate(time);
    var positionAndVelocity = satellite.propagate(satrec, jsDate);
    var gmst = satellite.gstime(jsDate);
    var p   = satellite.eciToGeodetic(positionAndVelocity.position, gmst);
    var position = Cesium.Cartesian3.fromRadians(p.longitude, p.latitude, p.height * 1000);

   var pos=new Cesium.Cartesian3();
    var transform=Cesium.Matrix4.fromRotationTranslation(Cesium.Transforms.computeTemeToPseudoFixedMatrix(time));

    var pos=Cesium.Matrix4.multiplyByPoint(transform, position, pos);

    return pos;


}, false),
  description: "Orbit of Satellite: "+satname,
  model: {
    uri : "Resources/10477_Satellite_v1_L3.glb",
    minimumPixelSize: 96

  },



  });
  /*var satellitemodel = viewer.entities.add({
  id: "satellite_"+satname,
  name: satname,
  position: positionsOverTime,
  description: "Orbit of Satellite: "+satname,
  model: {
    uri : "Resources/10477_Satellite_v1_L3.glb",
    minimumPixelSize: 96

  },



  });
/*  var polylinepos=Cesium.Cartesian3.fromDegreesArray(positionsOverTime);
  var polyline =  viewer.entities.add({
    id: "orbit_satellite_"+satname,
    description: "Orbit of Satellite: "+satname,
    path: {
      material: {
          polylineOutline: {
            color: {
              rgba: [255, 0, 255, 255],
            },
            outlineColor: {
              rgba: [0, 255, 255, 255],
            },
            outlineWidth: 5,
          },
        },
        width: 8
      },
      position:positionsOverTime,


  });
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
  */
  var satelliteobj=new t_satellite("satellite_"+satname,satname,colorarr[0],satellitemodel,tle.split('\n')[0].trim(),tle.split('\n')[1].trim(),beamlist);
  terrainobjects.getSatellitesInTerrain.push(satelliteobj);

  //more later


  constructmanagesatellitetable(terrainobjects);
  generatebeamsdropdownmenu(terrainobjects);
  writetolog("Adding Satelite in terrain...","OK");

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
  var showbeam1='<li><a id="';
  var showbeam2='" onclick="beamchooser(viewer,terrainobjs,';
  var showbeam3=');" style="text-align:center;">';
  var beamid='';
  document.getElementById("beamdropdownmenuli").innerHTML='';
  for (var i = 0; i<terrainobjects.getSatellitesInTerrain.length;i++){
    if (i==0){
      innerhtml+=standard;
    }
    innerhtml+=satnameli+terrainobjects.getSatellitesInTerrain[i].getName+endli+genbeam1+terrainobjects.getSatellitesInTerrain[i].getName+genbeam2;

    if(terrainobjects.getSatellitesInTerrain[i].getBeams!=null){
      for(var j=0;j<terrainobjects.getSatellitesInTerrain[i].getBeams.length;j++){
          beamid="satname:_"+terrainobjects.getSatellitesInTerrain[i].getName+"_beamname:_"+terrainobjects.getSatellitesInTerrain[i].getBeams[j].name;
          innerhtml+=showbeam1+beamid+showbeam2+"'"+beamid+"'"+showbeam3+terrainobjects.getSatellitesInTerrain[i].getBeams[j].name+enda+endli;
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
  if(terrainobjects.getCurrentbeamInTerrain==null){
    return;
  }
  for(var i=0;i<terrainobjects.getCurrentbeamInTerrain.getData.length;i++){
    var str=terrainobjects.getCurrentbeamInTerrain.getName+"_element_"+i;
    viewer.entities.removeById(str);
  }

  terrainobjects.currentbeam=null;
  generatebeamsdropdownmenu(terrainobjects);
}

function checkandtargetedspotbeaminterrain(viewer,terrainobjects){
  document.getElementById("targetedspotbeamname").setCustomValidity('');
  document.getElementById("targetedspotbeamlongitude").setCustomValidity('');
  document.getElementById("targetedspotbeamlatitude").setCustomValidity('');
  document.getElementById("targetedspotbeammingain").setCustomValidity('');
  document.getElementById("targetedspotbeammaxgain").setCustomValidity('');
  document.getElementById("targetedspotbeamsemimajoraxisonmaxgain").setCustomValidity('');
  document.getElementById("targetedspotbeameccentricity").setCustomValidity('');
  document.getElementById("targetedspotbeamstep").setCustomValidity('');
  document.getElementById("targetedspotbeamtightness").setCustomValidity('');
  document.getElementById("targetedspotbeamrot").setCustomValidity('');

  document.getElementById("targetedspotbeamnameerror").innerHTML='';
  document.getElementById("targetedspotbeamlongitudeerror").innerHTML='';
  document.getElementById("targetedspotbeamlatitudeerror").innerHTML='';
  document.getElementById("targetedspotbeammingainerror").innerHTML='';
  document.getElementById("targetedspotbeammaxgainerror").innerHTML='';
  document.getElementById("targetedspotbeamsemimajoraxisonmaxgainerror").innerHTML='';
  document.getElementById("targetedspotbeameccentricityerror").innerHTML='';
  document.getElementById("targetedspotbeamsteperror").innerHTML='';
  document.getElementById("targetedspotbeamtightnesserror").innerHTML='';
  document.getElementById("targetedspotbeamroterror").innerHTML='';



      var namestr=document.getElementById("targetedspotbeamname").value;
      var longitude=document.getElementById("targetedspotbeamlongitude").value;
      var latitude=document.getElementById("targetedspotbeamlatitude").value;
      var mingain=document.getElementById("targetedspotbeammingain").value;
      var maxgain=document.getElementById("targetedspotbeammaxgain").value;
      var semimajoraxisonmaxgain=document.getElementById("targetedspotbeamsemimajoraxisonmaxgain").value;
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

      if(semimajoraxisonmaxgain.trim()==""){
        document.getElementById("targetedspotbeamsemimajoraxisonmaxgain").setCustomValidity('Semimajor Axis Gain is required.');
        document.getElementById("targetedspotbeamsemimajoraxisonmaxgainerror").innerHTML='Semimajor Axis Gain is required.';
        er=1;
      }
      else{
        if(!isNumber(semimajoraxisonmaxgain.trim()) || Number(semimajoraxisonmaxgain.trim())>Number(semimajoraxisonmaxgain.trim())){
          document.getElementById("targetedspotbeamsemimajoraxisonmaxgain").setCustomValidity('Invalid Min Gain.');
          document.getElementById("targetedspotbeamsemimajoraxisonmaxgainerror").innerHTML='Invalid Min Gain.';
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
         if(document.getElementById("lengthunitswitch").checked){
           semimajoraxisonmaxgain=convertmilestokm(semimajoraxisonmaxgain);
         }
         if(val=="D"){
           usage="D";
         }
         else if(val=="U"){
           usage="U";
         }

         var bandselect = document.getElementById('targetedspotbeamband');
         var band = bandselect.options[bandselect.selectedIndex].value;
         semimajoraxisonmaxgain=semimajoraxisonmaxgain*1000;


         TargetedSpotbeamGenerator(viewer,terrainobjects,namestr,usage,band,longitude,latitude,maxgain,mingain,semimajoraxisonmaxgain,eccentricity,step,tightness,rot);

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
    var semimajoraxis=Number(semimajoraxismaxgain)+ i*(Number(semimajoraxismaxgain)/Number(tightness));
    var semiminoraxis=semimajoraxis*Math.sqrt(1-(eccentricity*eccentricity));

    var idstr=beamname+"_element_"+i;
    var beamelement=viewer.entities.add({
      id: idstr,
      name: beamname,
      description: "Gain: "+ currentgain+unit,
      position: Cesium.Cartesian3.fromDegrees(locationx, locationy),
         ellipse : {
          semiMinorAxis : Number(semiminoraxis),
          semiMajorAxis : Number(semimajoraxis),
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

  var select = document.getElementById('targetedspotbeamsat');
  var value = select.options[select.selectedIndex].value;
  var bbeamid="satname:_"+value+"_beamname:_"+beamname;
  var newbeam= new beam(bbeamid,beamname,value,currentbeamelements,usage,band,locationx,locationy,maxgain,mingain,semimajoraxismaxgain,eccentricity,step,tightness,rotationangle);
  terrainobjects.setCurrentbeamInTerrain=new beam(bbeamid,beamname,value,currentbeamelements,usage,band,locationx,locationy,maxgain,mingain,semimajoraxismaxgain,eccentricity,step,tightness,rotationangle);
  terrainobjects.currentbeam=new beam(bbeamid,beamname,value,currentbeamelements,usage,band,locationx,locationy,maxgain,mingain,semimajoraxismaxgain,eccentricity,step,tightness,rotationangle);

  for(var i=0;i<terrainobjects.getSatellitesInTerrain.length;i++){
    if(terrainobjects.getSatellitesInTerrain[i].getName==value){
        if(terrainobjects.getSatellitesInTerrain[i].getBeams==null){
          terrainobjects.getSatellitesInTerrain[i].setBeams=new Array(newbeam);
        }
        else{
          var t=0;
          for(var j=0;j<terrainobjects.getSatellitesInTerrain[i].getBeams.length;j++){

            if(terrainobjects.getSatellitesInTerrain[i].getBeams[j].getName==beamname){
             terrainobjects.getSatellitesInTerrain[i].getBeams[j].setData=currentbeamelements;
             t=1;
             break;
            }
          }
          if(t==0){
          terrainobjects.getSatellitesInTerrain[i].getBeams.push(newbeam);
         }
        }
        break;
    }
  }
  generatebeamsdropdownmenu(terrainobjects);
  var beamid="satname:_"+value+"_beamname:_"+beamname;
  selectedbeamhighligher(viewer,terrainobjects,beamid);
}


function selectedbeamhighligher(viewer,terrainobjs,beamid){
  var as = document.getElementById('beamdropdownmenuli').getElementsByTagName('a');

  for(var i=0;i<as.length;i++){
    if(as[i].className.includes("focus")){
      as[i].className="";
    }
    if(as[i].id==beamid){
      as[i].className+="focus";
    }
  }
}

function beamchooser(viewer,terrainobjs,beamid){
  clearselectedbeam(viewer,terrainobjs);

  var as = document.getElementById('beamdropdownmenuli').getElementsByTagName('a');

  for(var i=0;i<as.length;i++){
    if(as[i].className.includes("focus")){
      as[i].className="";
    }
    if(as[i].id==beamid){
      as[i].className+="focus";
      var beamdat=beamid.split("satname:_");
      var beamdata=beamdat[1].split("_beamname:_");
      for(var j=0;j<terrainobjs.getSatellitesInTerrain.length;j++){

        if(terrainobjs.getSatellitesInTerrain[j].getName==beamdata[0]){

          for(var k=0;k<terrainobjs.getSatellitesInTerrain[j].getBeams.length;k++){

            if(terrainobjs.getSatellitesInTerrain[j].getBeams[k].getName==beamdata[1]){
              if(terrainobjs.getSatellitesInTerrain[j].getBeams[k].data==null){
                var unit;
                var color;
                var currentbeamelements=[];
                if(terrainobjs.getSatellitesInTerrain[j].getBeams[k].getUsage=="D"){
                  unit="dBW";
                }
                else if(terrainobjs.getSatellitesInTerrain[j].getBeams[k].getUsage=="U"){
                  unit="dB/K";
                }
                if(terrainobjs.getSatellitesInTerrain[j].getBeams[k].getBand=="L"){
                  color=Cesium.Color.fromCssColorString("#64c2ed").withAlpha(0.3);
                }
                else if(terrainobjs.getSatellitesInTerrain[j].getBeams[k].getBand=="S"){
                  color=Cesium.Color.AQUAMARINE.withAlpha(0.3);
                }
                else if(terrainobjs.getSatellitesInTerrain[j].getBeams[k].getBand=="C"){
                  color=Cesium.Color.fromCssColorString("#e6a8d7").withAlpha(0.3);
                }
                else if(terrainobjs.getSatellitesInTerrain[j].getBeams[k].getBand=="Ku"){
                  color=Cesium.Color.fromCssColorString("#fd5e53").withAlpha(0.3);
                }
                else if(terrainobjs.getSatellitesInTerrain[j].getBeams[k].getBand=="Ka"){
                  color=Cesium.Color.ORANGE.withAlpha(0.3);
                }
                var rotationangle=terrainobjs.getSatellitesInTerrain[j].getBeams[k].getRotationangle;

                var stepsrequired=Math.ceil((terrainobjs.getSatellitesInTerrain[j].getBeams[k].getMaxgain-terrainobjs.getSatellitesInTerrain[j].getBeams[k].getMingain)/terrainobjs.getSatellitesInTerrain[j].getBeams[k].getStep)+1;
                var currentgain=terrainobjs.getSatellitesInTerrain[j].getBeams[k].getMaxgain;
                for(var m=0;m<stepsrequired;m++){
                  var semimajoraxis=Number(terrainobjs.getSatellitesInTerrain[j].getBeams[k].getSemimajoraxismaxgain)+ m*(Number(terrainobjs.getSatellitesInTerrain[j].getBeams[k].getSemimajoraxismaxgain)/Number(terrainobjs.getSatellitesInTerrain[j].getBeams[k].getTightness));
                  var semiminoraxis=semimajoraxis*Math.sqrt(1-(terrainobjs.getSatellitesInTerrain[j].getBeams[k].getEccentricity*terrainobjs.getSatellitesInTerrain[j].getBeams[k].getEccentricity));

                  var idstr=terrainobjs.getSatellitesInTerrain[j].getBeams[k].getName+"_element_"+m;
                  var beamelement=viewer.entities.add({
                    id: idstr,
                    name: terrainobjs.getSatellitesInTerrain[j].getBeams[k].getName,
                    description: "Gain: "+ currentgain+unit,
                    position: Cesium.Cartesian3.fromDegrees(terrainobjs.getSatellitesInTerrain[j].getBeams[k].getLocationx, terrainobjs.getSatellitesInTerrain[j].getBeams[k].getLocationy),
                       ellipse : {
                        semiMinorAxis : Number(semiminoraxis),
                        semiMajorAxis : Number(semimajoraxis),
                        rotation: Cesium.Math.toRadians(terrainobjs.getSatellitesInTerrain[j].getBeams[k].getRotationangle),
                        material : color,
                        zIndex : -1-m
                      }
                });
                currentbeamelements.push(beamelement);
                currentgain=currentgain-terrainobjs.getSatellitesInTerrain[j].getBeams[k].getStep;

                if(currentgain<terrainobjs.getSatellitesInTerrain[j].getBeams[k].getMingain){
                  currentgain=terrainobjs.getSatellitesInTerrain[j].getBeams[k].getMingain;
                }
                }
                terrainobjs.setCurrentBeamInTerrain=new beam(beamid,beamdata[1],beamdata[0],currentbeamelements,terrainobjs.getSatellitesInTerrain[j].getBeams[k].getUsage,terrainobjs.getSatellitesInTerrain[j].getBeams[k].getBand,terrainobjs.getSatellitesInTerrain[j].getBeams[k].getLocationx,terrainobjs.getSatellitesInTerrain[j].getBeams[k].getLocationy,terrainobjs.getSatellitesInTerrain[j].getBeams[k].getMaxgain,terrainobjs.getSatellitesInTerrain[j].getBeams[k].getMingain,terrainobjs.getSatellitesInTerrain[j].getBeams[k].getSemimajoraxismaxgain,terrainobjs.getSatellitesInTerrain[j].getBeams[k].getEccentricity,terrainobjs.getSatellitesInTerrain[j].getBeams[k].getStep,terrainobjs.getSatellitesInTerrain[j].getBeams[k].getTightness,terrainobjs.getSatellitesInTerrain[j].getBeams[k].getRotationangle);
                terrainobjs.currentbeam=new beam(beamid,beamdata[1],beamdata[0],currentbeamelements,terrainobjs.getSatellitesInTerrain[j].getBeams[k].getUsage,terrainobjs.getSatellitesInTerrain[j].getBeams[k].getBand,terrainobjs.getSatellitesInTerrain[j].getBeams[k].getLocationx,terrainobjs.getSatellitesInTerrain[j].getBeams[k].getLocationy,terrainobjs.getSatellitesInTerrain[j].getBeams[k].getMaxgain,terrainobjs.getSatellitesInTerrain[j].getBeams[k].getMingain,terrainobjs.getSatellitesInTerrain[j].getBeams[k].getSemimajoraxismaxgain,terrainobjs.getSatellitesInTerrain[j].getBeams[k].getEccentricity,terrainobjs.getSatellitesInTerrain[j].getBeams[k].getStep,terrainobjs.getSatellitesInTerrain[j].getBeams[k].getTightness,terrainobjs.getSatellitesInTerrain[j].getBeams[k].getRotationangle);
              }
              else{
                terrainobjs.setCurrentBeamInTerrain=new beam(beamid,beamdata[1],beamdata[0],terrainobjs.getSatellitesInTerrain[j].getBeams[k].getData,terrainobjs.getSatellitesInTerrain[j].getBeams[k].getUsage,terrainobjs.getSatellitesInTerrain[j].getBeams[k].getBand,terrainobjs.getSatellitesInTerrain[j].getBeams[k].getLocationx,terrainobjs.getSatellitesInTerrain[j].getBeams[k].getLocationy,terrainobjs.getSatellitesInTerrain[j].getBeams[k].getMaxgain,terrainobjs.getSatellitesInTerrain[j].getBeams[k].getMingain,terrainobjs.getSatellitesInTerrain[j].getBeams[k].getSemimajoraxismaxgain,terrainobjs.getSatellitesInTerrain[j].getBeams[k].getEccentricity,terrainobjs.getSatellitesInTerrain[j].getBeams[k].getStep,terrainobjs.getSatellitesInTerrain[j].getBeams[k].getTightness,terrainobjs.getSatellitesInTerrain[j].getBeams[k].getRotationangle);
                terrainobjs.currentbeam=new beam(beamid,beamdata[1],beamdata[0],terrainobjs.getSatellitesInTerrain[j].getBeams[k].getData,terrainobjs.getSatellitesInTerrain[j].getBeams[k].getUsage,terrainobjs.getSatellitesInTerrain[j].getBeams[k].getBand,terrainobjs.getSatellitesInTerrain[j].getBeams[k].getLocationx,terrainobjs.getSatellitesInTerrain[j].getBeams[k].getLocationy,terrainobjs.getSatellitesInTerrain[j].getBeams[k].getMaxgain,terrainobjs.getSatellitesInTerrain[j].getBeams[k].getMingain,terrainobjs.getSatellitesInTerrain[j].getBeams[k].getSemimajoraxismaxgain,terrainobjs.getSatellitesInTerrain[j].getBeams[k].getEccentricity,terrainobjs.getSatellitesInTerrain[j].getBeams[k].getStep,terrainobjs.getSatellitesInTerrain[j].getBeams[k].getTightness,terrainobjs.getSatellitesInTerrain[j].getBeams[k].getRotationangle);
                for(var l=0; l<terrainobjs.getSatellitesInTerrain[j].getBeams[k].data.length;l++){
                  viewer.entities.add(terrainobjs.getSatellitesInTerrain[j].getBeams[k].data[l]);
                }
              }
              break;
            }
          }
          break;
        }
      }
    }
  }
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
               url: '/Apps/Addsatellitetodb.php',
               type: 'POST',
               data:{
                  satname: satname,
                  tle1:tle1,
                  tle2:tle2
                },
                error:function (xhr, ajaxOptions, thrownError){
                    if(xhr.status!=200) {
                      writetolog("Add satellite to db...","FAILED");
                      document.getElementById('errorwindow').innerHTML='<div style="display: block; margin: auto; text-align:center;">  <img style="vertical-align:middle;" src="Resources/error-icon.png" width="48" height="48">  <span style="color: red; font-size: 18px; font-weight: bold;">Cannot add Satellite.</span> </div>   <div style="text-align:center;"> <button onclick="showlogwindow();" style="margin:auto; text-align:center;" class="btn btn-info">Show Log</button> </div>';
                      showerrorwindow();
                    }
                },
                success: function(data) {
                  if(data==0){
                    writetolog("Add satellite to db...","OK");
                  }
                  else{
                    writetolog("Add satellite to db...","FAILED");
                    document.getElementById('errorwindow').innerHTML='<div style="display: block; margin: auto; text-align:center;">  <img style="vertical-align:middle;" src="Resources/error-icon.png" width="48" height="48">  <span style="color: red; font-size: 18px; font-weight: bold;">Cannot add Satellite.</span> </div>   <div style="text-align:center;"> <button onclick="showlogwindow();" style="margin:auto; text-align:center;" class="btn btn-info">Show Log</button> </div>';
                    showerrorwindow();
                  }
               }
           });
}
function deletesatellitefromdb(viewer,terrainobjs){
  var satname=document.getElementById("sattodelete").innerHTML;
  for(var i=0;i<terrainobjs.getSatellitesInTerrain.length;i++){
    if(terrainobjs.getSatellitesInTerrain[i].getName==satname){
      viewer.entities.removeById(terrainobjects.getSatellitesInTerrain[i].id);
    }
  }

  $.ajax({
               url: '/Apps/Deletesatellitefromdb.php',
               type: 'POST',
               data:{
                  satname: satname
                },
                error:function (xhr, ajaxOptions, thrownError){
                    if(xhr.status!=200) {
                      writetolog("Delete satellite from db...","FAILED");
                      document.sgetElementById('errorwindow').innerHTML='<div style="display: block; margin: auto; text-align:center;">  <img style="vertical-align:middle;" src="Resources/error-icon.png" width="48" height="48">  <span style="color: red; font-size: 18px; font-weight: bold;">Cannot delete satellite.</span> </div>   <div style="text-align:center;"> <button onclick="showlogwindow();" style="margin:auto; text-align:center;" class="btn btn-info">Show Log</button> </div>';
                      showerrorwindow();
                    }
                },
                success: function(data) {
                  if(data==0){
                    writetolog("Delete satellite from db...","OK");
                  }
                  else{
                    writetolog("Delete satellite from db...","FAILED");
                    document.getElementById('errorwindow').innerHTML='<div style="display: block; margin: auto; text-align:center;">  <img style="vertical-align:middle;" src="Resources/error-icon.png" width="48" height="48">  <span style="color: red; font-size: 18px; font-weight: bold;">Cannot delete satellite.</span> </div>   <div style="text-align:center;"> <button onclick="showlogwindow();" style="margin:auto; text-align:center;" class="btn btn-info">Show Log</button> </div>';
                    showerrorwindow();
                  }

               }
           });

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
                    writetolog("Getting TLE...","FAILED");
                    document.getElementById('errorwindow').innerHTML='<div style="display: block; margin: auto; text-align:center;">  <img style="vertical-align:middle;" src="Resources/error-icon.png" width="48" height="48">  <span style="color: red; font-size: 18px; font-weight: bold;">Cannot get TLE.</span> </div>   <div style="text-align:center;"> <button onclick="showlogwindow();" style="margin:auto; text-align:center;" class="btn btn-info">Show Log</button> </div>';
                    showerrorwindow();
                    return null;
                  }
              },
              success: function(data) {
                writetolog("Getting TLE...","OK");
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
    row.classList="newtr";
    var cell0 = row.insertCell(0);
    var cell1 = row.insertCell(1);
    var cell2 = row.insertCell(2);
    var cell3 = row.insertCell(3);
    cell0.classList="newtd2";
    cell1.classList="newtd2";
    cell2.classList="newtd2";
    cell3.classList="newtd2";
    var tBody = table.getElementsByTagName('tbody')[0];
    tBody.classList="newtbody";

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
    row.classList="newrow";
    var cell0 = row.insertCell(0);
    var cell1 = row.insertCell(1);
    var cell2 = row.insertCell(2);
    var cell3 = row.insertCell(3);
    cell0.classList="newtd2";
    cell1.classList="newtd2";
    cell2.classList="newtd2";
    cell3.classList="newtd2";
    var tBody = table.getElementsByTagName('tbody')[0];
    tBody.classList="newtbody";
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
  document.getElementById("editdishefficiencyk").setCustomValidity('');
  document.getElementById("editdishnameerror").innerHTML='';
  document.getElementById("editdishlongitudeerror").innerHTML='';
  document.getElementById("editdishlatitudeerror").innerHTML='';
  document.getElementById("editdishsizeerror").innerHTML='';
  document.getElementById("editdishgainerror").innerHTML='';
  document.getElementById("editdishefficiencykerror").innerHTML='';
  for(var i=0; i<terrainobjects.getDishesInTerrain.length;i++){
    if(terrainobjects.getDishesInTerrain[i].id==dishid){
      document.getElementById("editdishname").value=terrainobjects.getDishesInTerrain[i].name;
      document.getElementById("editdishlongitude").value=terrainobjects.getDishesInTerrain[i].longitude;
      document.getElementById("editdishlatitude").value=terrainobjects.getDishesInTerrain[i].latitude;
      document.getElementById("editdishsize").value=terrainobjects.getDishesInTerrain[i].size;
      document.getElementById("editdishgain").value=terrainobjects.getDishesInTerrain[i].gain;
      document.getElementById("editdishefficiencyk").value=terrainobjects.getDishesInTerrain[i].efficiencyk;
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
  document.getElementById("adddishefficiencyk").setCustomValidity('');
  document.getElementById("adddishnameerror").innerHTML='';
  document.getElementById("adddishlongitudeerror").innerHTML='';
  document.getElementById("adddishlatitudeerror").innerHTML='';
  document.getElementById("adddishsizeerror").innerHTML='';
  document.getElementById("adddishgainerror").innerHTML='';
  document.getElementById("adddishefficiencykerror").innerHTML='';


      var namestr=document.getElementById("adddishname").value;
      var longitude=document.getElementById("adddishlongitude").value;
      var latitude=document.getElementById("adddishlatitude").value;
      var size=document.getElementById("adddishsize").value;
      var gain=document.getElementById("adddishgain").value;
      var efficiencyk=document.getElementById("adddishefficiencyk").value;
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
      if(efficiencyk.trim()==""){
        document.getElementById("adddishefficiencyk").setCustomValidity('Efficincy (k) is required.');
        document.getElementById("adddishefficiencykerror").innerHTML='Efficincy (k) is required.';

        er=1
      }
      else{
        if(!isNumber(efficiencyk.trim())){
          document.getElementById("adddishefficiencyk").setCustomValidity('Invalid fficincy (k).');
          document.getElementById("adddishefficiencykerror").innerHTML='Invalid Efficincy (k).';
          er=1;
        }
        if(Number(efficiencyk.trim())>100 || Number(efficiencyk.trim())<0){
          document.getElementById("adddishefficiencyk").setCustomValidity('Efficincy (k) must be in [0-100]% range.');
          document.getElementById("adddishefficiencykerror").innerHTML='Efficincy (k) must be in [0-100]% range.';
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

         adddishinterrain(viewer,terrainobjects,namestr,longitude,latitude,size,gain,efficiencyk,usage,0);
         constructmanagedishestable(terrainobjects);
         fillandactivatelinkbudgetwindow(terrainobjects);
      }

}

function checkandeditdishinterrain(viewer,terrainobjects){
  document.getElementById("editdishname").setCustomValidity('');
  document.getElementById("editdishlongitude").setCustomValidity('');
  document.getElementById("editdishlatitude").setCustomValidity('');
  document.getElementById("editdishsize").setCustomValidity('');
  document.getElementById("editdishgain").setCustomValidity('');
  document.getElementById("editdishefficiencyk").setCustomValidity('');
  document.getElementById("editdishnameerror").innerHTML='';
  document.getElementById("editdishlongitudeerror").innerHTML='';
  document.getElementById("editdishlatitudeerror").innerHTML='';
  document.getElementById("editdishsizeerror").innerHTML='';
  document.getElementById("editdishgainerror").innerHTML='';
  document.getElementById("editdishefficiencykerror").innerHTML='';



      var namestr=document.getElementById("editdishname").value;
      var longitude=document.getElementById("editdishlongitude").value;
      var latitude=document.getElementById("editdishlatitude").value;
      var size=document.getElementById("editdishsize").value;
      var gain=document.getElementById("editdishgain").value;
      var efficiencyk=document.getElementById("editdishefficiencyk").value;
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
        er=1;
      }
      else{
        if(!isNumber(gain.trim())){
          document.getElementById("editdishgain").setCustomValidity('Invalid Gain.');
          document.getElementById("editdishgainerror").innerHTML='Invalid Gain.';
          er=1;
        }
      }

      if(efficiencyk.trim()==""){
        document.getElementById("editdishefficiencyk").setCustomValidity('Efficincy (k) is required.');
        document.getElementById("editdishefficiencykerror").innerHTML='Efficincy (k) is required.';
        er=1;
      }
      else{
        if(!isNumber(efficiencyk.trim())){
          document.getElementById("editdishefficiencyk").setCustomValidity('Invalid fficincy (k).');
          document.getElementById("editdishefficiencykerror").innerHTML='Invalid Efficincy (k).';
          er=1;
        }
        if(Number(efficiencyk.trim())>100 || Number(efficiencyk.trim())<0){
          document.getElementById("editdishefficiencyk").setCustomValidity('Efficincy (k) must be in [0-100]% range.');
          document.getElementById("editdishefficiencykerror").innerHTML='Efficincy (k) must be in [0-100]% range.';
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
         adddishinterrain(viewer,terrainobjects,namestr,longitude,latitude,size,gain,efficiencyk,usage,oldpos);
         constructmanagedishestable(terrainobjects);
         fillandactivatelinkbudgetwindow(terrainobjects);
      }
}
function adddishinterrain(viewer,terrainobjects,namestr,longitude,latitude,size,gain,efficiencyk,usage,pos){
  const dishmodel = viewer.entities.add({
  id: "dish_"+namestr.trim(),
  name: namestr.trim(),
  description: "Dish Antenna: "+namestr.trim()+"<br>"+"Specifications:<br>"+"Position: "+longitude.trim()+","+latitude.trim()+"<br>"+"Size: "+size.trim()+" cm<br>"+"Gain: "+gain.trim()+" dB<br>"+"Efficincy (k): "+efficiencyk.trim()+"%<br>"+"Usage: "+usage,
    position: Cesium.Cartesian3.fromDegrees(longitude.trim(), latitude.trim()),
    model:{
        uri : 'Resources/dish.gltf'
    }

  });
  var dishobj=new dish("dish_"+namestr.trim(),namestr.trim(),longitude.trim(),latitude.trim(),size.trim(),gain.trim(),efficiencyk.trim(),usage);
  if(pos==0){
    terrainobjects.getDishesInTerrain.push(dishobj);
  }
  else{
    terrainobjects.getDishesInTerrain.splice(pos,0,dishobj);
  }
  viewer.zoomTo(dishmodel);
}
function fillandactivatelinkbudgetwindow(terrainobjects){
  var hasuplinkdish=0;
  var hasdownlinkdish=0;
  var uselect=document.getElementById("linkbudgetuplinkdish");
  var dselect=document.getElementById("linkbudgetdownlinkdish");
  dselect.options.length = 0;
  uselect.options.length = 0;
  for(var i=0;i<terrainobjects.getDishesInTerrain.length;i++){
    if(terrainobjects.getDishesInTerrain[i].getUsage=="Uplink"){
      var opt = document.createElement('option');
      opt.value = terrainobjects.getDishesInTerrain[i].getName;
      opt.innerHTML = terrainobjects.getDishesInTerrain[i].getName;
      uselect.appendChild(opt);
      hasuplinkdish = 1;

    }
    if(terrainobjects.getDishesInTerrain[i].getUsage=="Downlink"){
      var opt = document.createElement('option');
      opt.value = terrainobjects.getDishesInTerrain[i].getName;
      opt.innerHTML = terrainobjects.getDishesInTerrain[i].getName;
      dselect.appendChild(opt);
      hasdownlinkdish=1;
    }
  }
  if(uselect.options.length == 1){
    uselect.selectedIndex = "0";
    document.getElementById("linkbudgetcalulateuplink").disabled = false;
    document.getElementById("linkbudgetuplinkdish").disabled = false;

  }
  if(dselect.options.length == 1){
    dselect.selectedIndex = "0";
    document.getElementById("linkbudgetcalulatedownlink").disabled = false;
    document.getElementById("linkbudgetdownlinkdish").disabled = false;
  }
  if(uselect.options.length == 0){
    var opt = document.createElement('option');
    opt.innerHTML = "-- No dishes available --";
    uselect.appendChild(opt);
    uselect.selectedIndex = "0";
    document.getElementById("linkbudgetcalulateuplink").disabled = true;
    document.getElementById("linkbudgetuplinkdish").disabled = true;

  }
  if(dselect.options.length == 0){
    var opt = document.createElement('option');
    opt.innerHTML = "-- No dishes available --";
    dselect.appendChild(opt);
    dselect.selectedIndex = "0";
    document.getElementById("linkbudgetcalulatedownlink").disabled = true;
    document.getElementById("linkbudgetdownlinkdish").disabled = true;
  }




}
function checkandaddsatellite(checksumcheck){
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
  if(checksumcheck==true){
    var tle1chars=tle1str.split('');
    var tle2chars=tle2str.split('');
    var lastchartle1=tle1chars[tle1chars.length-1];
    var lastchartle2=tle2chars[tle2chars.length-1];
    var sumtle1=0;
    var sumtle2=0;
    var checksumerror1=0;
    var checksumerror2=0;
    if(!isNumber(lastchartle1)){
      er=1;
      checksumerror1=1;
    }
    if(!isNumber(lastchartle2)){
      er=1;
     checksumerror2=1;
    }
    if(tle1chars[0]!=1){
      er=1;
      checksumerror1=1;
    }
    if(tle2chars[0]!=2){
      er=1;
     checksumerror2=1;
    }
    if(er==0){
      for(var i=0; i<tle1chars.length-1;i++){
        if(tle1chars[i]=='-'){
          sumtle1=sumtle1+1;
        }
        if(isNumber(tle1chars[i])){
          sumtle1=sumtle1+Number(tle1chars[i]);
        }
      }

      for(var i=0; i<tle2chars.length-1;i++){
        if(tle2chars[i]=='-'){
          sumtle2=sumtle2+1;
        }
        if(isNumber(tle2chars[i])){
          sumtle2=sumtle2+Number(tle2chars[i]);
        }
      }

      if(sumtle1%10!=Number(lastchartle1)){
        er=1;
        checksumerror1=1;
      }
      if(sumtle2%10!=Number(lastchartle2)){
        er=1;
        checksumerror2=1;
      }

    }
    if(checksumerror1==1 && checksumerror2==1){
      document.getElementById("checksumerror").innerHTML="Checksum error on TLE lines 1 & 2.<br> The recommend action is to check your TLE line again for errors.<br> You can continue to force add satellite to db although problems may occur."
      showconfirmaddsatelliteonchecksumerrorwindow();
    }
    else if (checksumerror1==1) {
      document.getElementById("checksumerror").innerHTML="Checksum error on TLE line 1.<br> The recommend action is to check your TLE line again for errors.<br> You can continue to force add satellite to db although problems may occur."
      showconfirmaddsatelliteonchecksumerrorwindow();

    }
    else if (checksumerror2==1) {
      document.getElementById("checksumerror").innerHTML="Checksum error on TLE line 2.<br> The recommend action is to check your TLE line again for errors.<br> You can continue to force add satellite to db although problems may occur."
      showconfirmaddsatelliteonchecksumerrorwindow();
    }

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

function checkandcalculatemaxgainfromhtdt(){
  document.getElementById("beammaxgainht1").setCustomValidity('');
  document.getElementById("beammaxgaindt").setCustomValidity('');
  document.getElementById("beammaxgainfrequency").setCustomValidity('');
  document.getElementById("beammaxgainlamda").setCustomValidity('');
  document.getElementById("beammaxgainht1error").innerHTML='';
  document.getElementById("beammaxgaindterror").innerHTML='';
  document.getElementById("beammaxgainfrequencylamdaerror").innerHTML='';



  var htstr=document.getElementById("beammaxgainht1").value;
  var dtstr=document.getElementById("beammaxgaindt").value;
  var er=0;
  var lamda=document.getElementById("beammaxgainlamda").value;
  if(lamda==""){
    document.getElementById("beammaxgainfrequency").setCustomValidity("Frequency is required.");
    document.getElementById("beammaxgainlamda").setCustomValidity("Lamda is required.");

      document.getElementById("beammaxgainfrequencylamdaerror").innerHTML="Frequency/lamda is required.";
      er=1;
  }
  if(!(isNumber(lamda))){
    document.getElementById("beammaxgainfrequency").setCustomValidity("Invalid frequency.");
    document.getElementById("beammaxgainlamda").setCustomValidity("Invalid lamda.");

      document.getElementById("beammaxgainfrequencylamdaerror").innerHTML="Invalid frequency/lamda.";
    er=1;
  }
  if(htstr.trim()==""){
    document.getElementById("beammaxgainht1").setCustomValidity('ht is required.');
    document.getElementById("beammaxgainht1error").innerHTML='ht is required.';
    er=1;
  }
  if(dtstr.trim()==""){
    document.getElementById("beammaxgaindt").setCustomValidity('Dt is required.');
    document.getElementById("beammaxgaindterror").innerHTML='Dt is required.';
    er=1;
  }

  if(!isNumber(htstr.trim())){
    document.getElementById("beammaxgainht1").setCustomValidity('Invalid ht.');
    document.getElementById("beammaxgainht1error").innerHTML='Invalid ht.';
    er=1;
  }
  if(!isNumber(dtstr.trim())){
    document.getElementById("beammaxgaindt").setCustomValidity('Invalid dt.');
    document.getElementById("beammaxgaindterror").innerHTML='Invalid dt.';
    er=1;
  }
  if(er==0){
    var r1=(Math.PI*dtstr)/(lamda*0.001);
    r1=htstr*Math.pow(r1,2);
    r1=10*Math.log10(r1);

    document.getElementById("targetedspotbeammaxgain").value=r1;
    document.getElementById("beammaxgainht1").setCustomValidity('');
    document.getElementById("beammaxgaindt").setCustomValidity('');
    document.getElementById("beammaxgainfrequency").setCustomValidity('');
    document.getElementById("beammaxgainlamda").setCustomValidity('');
    document.getElementById("beammaxgainht2").setCustomValidity('');
    document.getElementById("beammaxgaintheta3dbt").setCustomValidity('');
    document.getElementById("beammaxgainht1error").innerHTML='';
    document.getElementById("beammaxgaindterror").innerHTML='';
    document.getElementById("beammaxgainfrequencylamdaerror").innerHTML='';
    document.getElementById("beammaxgainht2error").innerHTML='';
    document.getElementById("beammaxgaintheta3dbterror").innerHTML='';
    $("#beammaxgainalternativecalculatorwindow").PopupWindow("close");

  }
}

function checkandcalculatemaxgainfromhttheta3dbt(){
  document.getElementById("beammaxgainht2").setCustomValidity('');
  document.getElementById("beammaxgaintheta3dbt").setCustomValidity('');

  var htstr=document.getElementById("beammaxgainht2").value;
  var theta3dbstr=document.getElementById("beammaxgaintheta3dbt").value;
  var er=0;

  if(htstr.trim()==""){
    document.getElementById("beammaxgaindt").setCustomValidity('ht is required.');
    document.getElementById("beammaxgaintheta3dbterror").innerHTML='ht is required.';
    er=1;
  }
  if(theta3dbstr.trim()==""){
    document.getElementById("beammaxgainht1").setCustomValidity('theta3db is required.');
    document.getElementById("beammaxgainht1error").innerHTML='theta3db is required.';
    er=1;
  }
  if(!isNumber(htstr.trim())){
    document.getElementById("beammaxgainht1").setCustomValidity('Invalid ht.');
    document.getElementById("beammaxgainht1error").innerHTML='Invalid ht.';
    er=1;
  }
  if(!isNumber(theta3dbstr.trim())){
    document.getElementById("beammaxgaindt").setCustomValidity('Invalid theta3db.');
    document.getElementById("beammaxgaindterror").innerHTML='Invalid theta3db.';
    er=1;
  }
  if(er==0){
    var r1=(Math.PI*50)/(theta3dbstr);
    r1=htstr*Math.pow(r1,2);
    r1=10*Math.log10(htstr*r1);

    document.getElementById("targetedspotbeammaxgain").value=r1;
    document.getElementById("beammaxgainht1").setCustomValidity('');
    document.getElementById("beammaxgaindt").setCustomValidity('');
    document.getElementById("beammaxgainfrequency").setCustomValidity('');
    document.getElementById("beammaxgainlamda").setCustomValidity('');
    document.getElementById("beammaxgainht2").setCustomValidity('');
    document.getElementById("beammaxgaintheta3dbt").setCustomValidity('');
    document.getElementById("beammaxgainht1error").innerHTML='';
    document.getElementById("beammaxgaindterror").innerHTML='';
    document.getElementById("beammaxgainfrequencylamdaerror").innerHTML='';
    document.getElementById("beammaxgainht2error").innerHTML='';
    document.getElementById("beammaxgaintheta3dbterror").innerHTML='';

    $("#beammaxgainalternativecalculatorwindow").PopupWindow("close");
  }
}

function checkandcalculateuplinktotalsnr(terrainobjects){
  document.getElementById("linkbudgetuplinkbucpower").setCustomValidity('');
  document.getElementById("linkbudgetuplinkdbk").setCustomValidity('');
  document.getElementById("linkbudgetuplinkbandwidth").setCustomValidity('');
  document.getElementById("linkbudgetuplinksatdistance").setCustomValidity('');
  document.getElementById("linkbudgetuplinkotherlosses").setCustomValidity('');
  var select1=document.getElementById("linkbudgetuplinkdish");
  var select2=document.getElementById("linkbudgetuplinkband");
  document.getElementById("linkbudgetuplinkbucpowererror").innerHTML='';
  document.getElementById("linkbudgetuplinkdbkerror").innerHTML='';
  document.getElementById("linkbudgetuplinksatdistanceerror").innerHTML='';
  document.getElementById("linkbudgetuplinkotherlosseserror").innerHTML='';
  document.getElementById("linkbudgetuplinkbandwidtherror").innerHTML='';
  document.getElementById("linkbudgetuplinkcalcerror").innerHTML='';
  document.getElementById("linkbudgetuplinkweatherlosses").style.display="none";
  document.getElementById("linkbudgetuplinktotalsnr").style.display="none";


      var bucpower=document.getElementById("linkbudgetuplinkbucpower").value;
      var uplinkdbk=document.getElementById("linkbudgetuplinkdbk").value;
      var otherlosses=document.getElementById("linkbudgetuplinkotherlosses").value;
      var bandwidth=document.getElementById("linkbudgetuplinkbandwidth").value;
      var satdistance=document.getElementById("linkbudgetuplinksatdistance").value;
      var dishname= select1.options[select1.selectedIndex].value;
      var band=select2.options[select2.selectedIndex].value;

      var er=0;

      if(bucpower.trim()==""){
        document.getElementById("linkbudgetuplinkbucpower").setCustomValidity('BUC power is required.');
        document.getElementById("linkbudgetuplinkbucpowererror").innerHTML='BUC power is required.';
        er=1;
      }
      if(!isNumber(bucpower.trim())){
        document.getElementById("linkbudgetuplinkbucpower").setCustomValidity('Invalid BUC power.');
        document.getElementById("linkbudgetuplinkbucpowererror").innerHTML='Invalid BUC power.';
        er=1;
      }
      if(uplinkdbk.trim()==""){
        document.getElementById("linkbudgetuplinkdbk").setCustomValidity('Uplink dB/K is required.');
        document.getElementById("linkbudgetuplinkdbkerror").innerHTML='Uplink dB/K is required.';
        er=1;
      }
      if(!isNumber(uplinkdbk.trim())){
        document.getElementById("linkbudgetuplinkdbk").setCustomValidity('Invalid Uplink dB/K.');
        document.getElementById("linkbudgetuplinkdbkerror").innerHTML='Invalid Uplink dB/K.';
        er=1;
      }
      if(satdistance.trim()==""){
        document.getElementById("linkbudgetuplinksatdistance").setCustomValidity('Uplink satellite distance is required.');
        document.getElementById("linkbudgetuplinksatdistanceerror").innerHTML='Uplink satellite distance is required.';
        er=1;
      }
      if(!isNumber(satdistance.trim())){
        document.getElementById("linkbudgetuplinksatdistance").setCustomValidity('Invalid uplink satellite distance.');
        document.getElementById("linkbudgetuplinksatdistanceerror").innerHTML='Invalid uplink satellite distance.';
        er=1;
      }
      if(bandwidth.trim()==""){
        document.getElementById("linkbudgetuplinkbandwidth").setCustomValidity('Uplink bandwidth required.');
        document.getElementById("linkbudgetuplinkbandwidtherror").innerHTML='Uplink bandwidth is required.';
        er=1;
      }
      if(!isNumber(bandwidth.trim())){
        document.getElementById("linkbudgetuplinkbandwidth").setCustomValidity('Invalid bandwidth.');
        document.getElementById("linkbudgetuplinkbandwidtherror").innerHTML='Invalid bandwidth.';
        er=1;
      }
      if(otherlosses.trim()==""){
        otherlosses=0;
      }
      else if(!isNumber(otherlosses.trim())){
        document.getElementById("linkbudgetuplinkotherlosses").setCustomValidity('Invalid other losses.');
        document.getElementById("linkbudgetuplinkotherlosseserror").innerHTML='Invalid other losses.';
        er=1;
      }

      if(er==0){
        var dishgain;
        var longitude;
        var latitude;
        var found=0;
        var fspl;
        bandwidth=bandwidth*1000;
        if(document.getElementById("lengthunitswitch").checked){
          satdistance=convertmilestokm(satdistance);
        }
        for(var i=0;i<terrainobjects.getDishesInTerrain.length;i++){
          if(terrainobjects.getDishesInTerrain[i].getName==dishname){
            dishgain=terrainobjects.getDishesInTerrain[i].getGain;
            longitude=terrainobjects.getDishesInTerrain[i].getLongtitude;
            latitude=terrainobjects.getDishesInTerrain[i].getLatitude;
            found=1;
          }
        }
        var data=getweatherlite(longitude,latitude);

        var wsiglosses=calculatedsiglosseslite(data,band);
        if(band=="L"){
          fspl=20*Math.log10(satdistance)+20*Math.log10(1.5)+92.45;//-20*Math.log10(((4*Math.PI)/299792458));
        }
        if(band=="S"){
          fspl=20*Math.log10(satdistance)+20*Math.log10(2.5)+92.45;//-20*Math.log10(((4*Math.PI)/299792458));
        }
        if(band=="C"){
          fspl=20*Math.log10(satdistance)+20*Math.log10(4.0)+92.45;//-20*Math.log10(((4*Math.PI)/299792458));
        }
        if(band=="Ku"){
          fspl=20*Math.log10(satdistance)+20*Math.log10(12)+92.45;//-20*Math.log10(((4*Math.PI)/299792458));
        }
        if(band=="Ka"){
          fspl=20*Math.log10(satdistance)+20*Math.log10(20)+92.45;//-20*Math.log10(((4*Math.PI)/299792458));
        }
        var totalsnr = 10*Math.log10(Number(bucpower))+Number(dishgain)-10*Math.log10(Number(bandwidth))-Number(fspl)-wsiglosses+Number(uplinkdbk)+228.5991672;
        totalsnr=totalsnr.toFixed(2);
        document.getElementById("linkbudgetuplinkweatherlossesvalue").innerHTML=wsiglosses +"dB";
        document.getElementById("linkbudgetuplinktotalsnrvalue").innerHTML=totalsnr;
        document.getElementById("linkbudgetuplinkweatherlosses").style.display="block";
        document.getElementById("linkbudgetuplinktotalsnr").style.display="block";


      }




}
function checkandcalculatedownlinktotalsnr(terrainobjects){
  document.getElementById("linkbudgetdownlinkeirp").setCustomValidity('');
  document.getElementById("linkbudgetdownlinkbandwidth").setCustomValidity('');
  document.getElementById("linkbudgetdownlinksatdistance").setCustomValidity('');
  document.getElementById("linkbudgetdownlinkotherlosses").setCustomValidity('');
  var select1=document.getElementById("linkbudgetdownlinkdish");
  var select2=document.getElementById("linkbudgetdownlinkband");
  document.getElementById("linkbudgetdownlinkeirperror").innerHTML='';
  document.getElementById("linkbudgetdownlinkbandwidtherror").innerHTML='';
  document.getElementById("linkbudgetdownlinksatdistanceerror").innerHTML='';
  document.getElementById("linkbudgetuplinkotherlosseserror").innerHTML='';
  document.getElementById("linkbudgetdownlinkotherlosseserror").innerHTML='';
  document.getElementById("linkbudgetdownlinkcalcerror").innerHTML='';
  document.getElementById("linkbudgetdownlinkweatherlosses").style.display="none";
  document.getElementById("linkbudgetdownlinktotalsnr").style.display="none";


      var downlinkeirp=document.getElementById("linkbudgetdownlinkeirp").value;
      var otherlosses=document.getElementById("linkbudgetdownlinkotherlosses").value;
      var bandwidth=document.getElementById("linkbudgetdownlinkbandwidth").value;
      var satdistance=document.getElementById("linkbudgetdownlinksatdistance").value;
      var dishname= select1.options[select1.selectedIndex].value;
      var band=select2.options[select2.selectedIndex].value;

      var er=0;


      if(downlinkeirp.trim()==""){
        document.getElementById("linkbudgetdownlinkeirp").setCustomValidity('Downlink EIRP is required.');
        document.getElementById("linkbudgetdownlinkeirperror").innerHTML='Downlink EIRP is required.';
        er=1;
      }
      if(!isNumber(downlinkeirp.trim())){
        document.getElementById("linkbudgetdownlinkeirp").setCustomValidity('Invalid downlink EIRP.');
        document.getElementById("linkbudgetdownlinkeirperror").innerHTML='Invalid downlink EIRP.';
        er=1;
      }
      if(satdistance.trim()==""){
        document.getElementById("linkbudgetdownlinksatdistance").setCustomValidity('Downlink satellite distance is required.');
        document.getElementById("linkbudgetdownlinksatdistanceerror").innerHTML='Downlink satellite distance is required.';
        er=1;
      }
      if(!isNumber(satdistance.trim())){
        document.getElementById("linkbudgetdownlinksatdistance").setCustomValidity('Invalid uplink satellite distance.');
        document.getElementById("linkbudgetdownlinksatdistanceerror").innerHTML='Invalid uplink satellite distance.';
        er=1;
      }
      if(bandwidth.trim()==""){
        document.getElementById("linkbudgetdownlinkbandwidth").setCustomValidity('Downlink bandwidth required.');
        document.getElementById("linkbudgetdownlinkbandwidtherror").innerHTML='Downlink bandwidth is required.';
        er=1;
      }
      if(!isNumber(bandwidth.trim())){
        document.getElementById("linkbudgetdownlinkbandwidth").setCustomValidity('Invalid bandwidth.');
        document.getElementById("linkbudgetdownlinkbandwidtherror").innerHTML='Invalid bandwidth.';
        er=1;
      }
      if(otherlosses.trim()==""){
        otherlosses=0;
      }
      else if(!isNumber(otherlosses.trim())){
        document.getElementById("linkbudgetdownlinkotherlosses").setCustomValidity('Invalid other losses.');
        document.getElementById("linkbudgetdownlinkotherlosseserror").innerHTML='Invalid other losses.';
        er=1;
      }

      if(er==0){
        var dishgain;
        var longitude;
        var latitude;
        var found=0;
        var fspl;
        bandwidth=bandwidth*1000;
        if(document.getElementById("lengthunitswitch").checked){
          satdistance=convertmilestokm(satdistance);
        }
        for(var i=0;i<terrainobjects.getDishesInTerrain.length;i++){
          if(terrainobjects.getDishesInTerrain[i].getName==dishname){
            dishgain=terrainobjects.getDishesInTerrain[i].getGain;
            longitude=terrainobjects.getDishesInTerrain[i].getLongtitude;
            latitude=terrainobjects.getDishesInTerrain[i].getLatitude;
            found=1;
          }
        }
        var data=getweatherlite(longitude,latitude);
        var atemp=274.15+data.current.temp;
        var wsiglosses=calculatedsiglosseslite(data,band);
        if(band=="L"){
          fspl=20*Math.log10(satdistance)+20*Math.log10(1.5)+92.45;//-20*Math.log10(((4*Math.PI)/299792458));
        }
        if(band=="S"){
          fspl=20*Math.log10(satdistance)+20*Math.log10(2.5)+92.45;//-20*Math.log10(((4*Math.PI)/299792458));
        }
        if(band=="C"){
          fspl=20*Math.log10(satdistance)+20*Math.log10(4.0)+92.45;//-20*Math.log10(((4*Math.PI)/299792458));
        }
        if(band=="Ku"){
          fspl=20*Math.log10(satdistance)+20*Math.log10(12)+92.45;//-20*Math.log10(((4*Math.PI)/299792458));
        }
        if(band=="Ka"){
          fspl=20*Math.log10(satdistance)+20*Math.log10(20)+92.45;//-20*Math.log10(((4*Math.PI)/299792458));
        }
        var gt=dishgain-10*Math.log10(atemp);
        var totalsnr = Number(downlinkeirp)-10*Math.log10(Number(bandwidth))-Number(fspl)-wsiglosses+gt+228.5991672;
        totalsnr=totalsnr.toFixed(2);
        document.getElementById("linkbudgetdownlinkweatherlossesvalue").innerHTML=wsiglosses +" dB";
        document.getElementById("linkbudgetdownlinktotalsnrvalue").innerHTML=totalsnr;
        document.getElementById("linkbudgetdownlinkweatherlosses").style.display="block";
        document.getElementById("linkbudgetdownlinktotalsnr").style.display="block";


      }




}
function gettecvalue(longitude,latitude){

  var x=null;
  $.ajax({
             url: '/Apps/Gettec.php',
             type: 'POST',
             async:false,
              error:function (xhr, ajaxOptions, thrownError){
                  if(xhr.status!=200) {
                    document.getElementById('errorwindow').innerHTML='<div style="display: block; margin: auto; text-align:center;">  <img style="vertical-align:middle;" src="Resources/error-icon.png" width="48" height="48">  <span style="color: red; font-size: 18px; font-weight: bold;">Cannot get TEC value.</span> </div>   <div style="text-align:center;"> <button onclick="showlogwindow();" style="margin:auto; text-align:center;" class="btn btn-info">Show Log</button> </div>';
                    showerrorwindow();
                  }
              },
              success: function(data) {

                if(data=="0"){
                  document.getElementById('errorwindow').innerHTML='<div style="display: block; margin: auto; text-align:center;">  <img style="vertical-align:middle;" src="Resources/error-icon.png" width="48" height="48">  <span style="color: red; font-size: 18px; font-weight: bold;">Cannot get TEC value.</span> </div>   <div style="text-align:center;"> <button onclick="showlogwindow();" style="margin:auto; text-align:center;" class="btn btn-info">Show Log</button> </div>';
                  showerrorwindow();
                  x=null;
                }
                else{
                  x=data;
                }
             }
         });
  if(x==null){

    return;
  }


  var newlng=longitude+180;
  var newlat=latitude+90;
  var steplng=360/73;
  var steplat=180/73;
  var poslng=Math.round((longitude+180)/steplng);
  if(poslng>72){ poslng=72;}
  var poslat=Math.round((latitude-90)/steplat);
  poslat=-poslat;
  if(poslat>72){ poslat=72;}
  x=x.trim();
  x = x.replace(/\s+/g, ',');
  ///var arr=CSVToArray(x,",");
  var splited=x.split(",");
  return splited[73*poslat+poslng];

}


function getweatherlite(longitude,latitude){
  const regex = /^((\-?|\+?)?\d+(\.\d+)?),\s*((\-?|\+?)?\d+(\.\d+)?)$/gi;
  const apiKey = "4d8fb5b93d4af21d66a2948710284366";

  var x=null;

    var url2=  'https://api.openweathermap.org/data/2.5/onecall?lat='+latitude+'&lon='+longitude+'&appid='+apiKey+'&units=metric';

    $.ajax({
                 url: url2,
                 type: 'POST',
                 async: false,
                  error:function (xhr, ajaxOptions, thrownError){
                      if(xhr.status!=200) {

                        return null;
                      }
                  },
                  success: function(data) {
                    x=data;
                 }
             });
             return x;
}




function getweather(){
  var cityloc= document.getElementById("weathersearchInput").value;
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
     document.getElementById("Estimatedweathersiglosses").value=data;
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
      document.getElementById("Estimatedweathersiglosses").value=data;
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
  document.getElementById("Estimatedweathersiglosses").innerHTML=calculatedsiglosses(data);

  document.getElementById("Estimatedtecvalue").value=gettecvalue(data.lon,data.lat);
  document.getElementById("Estimatedtecvalue").innerHTML=parseFloat(document.getElementById("Estimatedtecvalue").value).toFixed(2) + " TECU";
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
    }
    else if(occasion=='D'){
      document.getElementById("targetedspotbeammingainunit").innerHTML="dBW";
      document.getElementById("targetedspotbeammaxgainunit").innerHTML="dBW";
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
function calculatedsiglosses(data){
  var totalatt=0;
  if(data.current.weather[0].id>=500 && data.current.weather[0].id<=531){
   var rain1h=data.current.rain['1h'];
   var bandselect = document.getElementById('weatherlossband');
   var band = bandselect.options[bandselect.selectedIndex].value;
   if(band=="L"){
      totalatt=totalatt+0.0000868*(Math.pow(parseFloat(rain1h),0.9341))*5;
   }
   else if(band=="S"){
     totalatt=totalatt+0.0002416*(Math.pow(parseFloat(rain1h),0.9873))*5;
   }
   else if(band=="C"){
     totalatt=totalatt+0.0006479*(Math.pow(parseFloat(rain1h),1.1212))*5;
   }
   else if(band=="Ku"){
     totalatt=totalatt+0.01882*(Math.pow(parseFloat(rain1h),1.2168))*5;
   }
   else if(band=="Ka"){
     totalatt=totalatt+0.07504*(Math.pow(parseFloat(rain1h),1.0995))*5;
   }
  }
  alert(totalatt);
  return totalatt.toFixed(2)+"dB";


}

function calculatedsiglosseslite(data,band){
  var totalatt=0;
  if(data.current.weather[0].id>=500 && data.current.weather[0].id<=531){
   var rain1h=data.current.rain['1h'];
   var band = bandselect.options[bandselect.selectedIndex].value;
   if(band=="L"){
      totalatt=totalatt+0.0000868*(Math.pow(parseFloat(rain1h),0.9341))*5;
   }
   else if(band=="S"){
     totalatt=totalatt+0.0002416*(Math.pow(parseFloat(rain1h),0.9873))*5;
   }
   else if(band=="C"){
     totalatt=totalatt+0.0006479*(Math.pow(parseFloat(rain1h),1.1212))*5;
   }
   else if(band=="Ku"){
     totalatt=totalatt+0.01882*(Math.pow(parseFloat(rain1h),1.2168))*5;
   }
   else if(band=="Ka"){
     totalatt=totalatt+0.07504*(Math.pow(parseFloat(rain1h)^1.0995))*5;
   }
  }
  alert(totalatt);
  return totalatt.toFixed(2);


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

function changeminsnrberprotocol(){
  var opt;
  var select1=document.getElementById("minsnrberprotocol");
  var select=document.getElementById("modulationscheme");
  select.innerHTML="";
  var protocol = select1.options[select1.selectedIndex].value;

  if(protocol=="DVB-S"){
    opt = document.createElement('option');
    opt.value = "QPSK"
    opt.innerHTML = "QPSK"
    select.appendChild(opt);

  }
  if(protocol=="DVB-S2"){
    opt = document.createElement('option');
    opt.value = "QPSK"
    opt.innerHTML = "QPSK"
    select.appendChild(opt);

    opt = document.createElement('option');
    opt.value = "8PSK"
    opt.innerHTML = "8PSK"
    select.appendChild(opt);

    opt = document.createElement('option');
    opt.value = "16APSK"
    opt.innerHTML = "16APSK"
    select.appendChild(opt);

    opt = document.createElement('option');
    opt.value = "32APSK"
    opt.innerHTML = "32APSK"
    select.appendChild(opt);
  }
  select.selectedIndex = "0";
  changefecvalues();
}
function changefecvalues(){
  var opt;
  var select=document.getElementById("minsnrberfecvalue");
  var select1=document.getElementById("minsnrberprotocol");
  var select2=document.getElementById("modulationscheme");
  var protocol = select1.options[select1.selectedIndex].value;
  var modulation = select2.options[select2.selectedIndex].value;
  select.innerHTML="";

  if(protocol=="DVB-S" && modulation=="QPSK"){
    opt = document.createElement('option');
    opt.value = "1/2"
    opt.innerHTML = "1/2"
    select.appendChild(opt);

    opt = document.createElement('option');
    opt.value = "2/3"
    opt.innerHTML = "2/3"
    select.appendChild(opt);

    opt = document.createElement('option');
    opt.value = "3/4"
    opt.innerHTML = "3/4"
    select.appendChild(opt);

    opt = document.createElement('option');
    opt.value = "5/6"
    opt.innerHTML = "5/6"
    select.appendChild(opt);

    opt = document.createElement('option');
    opt.value = "7/8"
    opt.innerHTML = "7/8"
    select.appendChild(opt);

  }
  if(protocol=="DVB-S2" && modulation=="QPSK"){

    opt = document.createElement('option');
    opt.value = "1/4"
    opt.innerHTML = "1/4"
    select.appendChild(opt);

    opt = document.createElement('option');
    opt.value = "1/3"
    opt.innerHTML = "1/3"
    select.appendChild(opt);

    opt = document.createElement('option');
    opt.value = "2/5"
    opt.innerHTML = "2/5"
    select.appendChild(opt);

    opt = document.createElement('option');
    opt.value = "1/2"
    opt.innerHTML = "1/2"
    select.appendChild(opt);

    opt = document.createElement('option');
    opt.value = "3/5"
    opt.innerHTML = "3/5"
    select.appendChild(opt);

    opt = document.createElement('option');
    opt.value = "2/3"
    opt.innerHTML = "2/3"
    select.appendChild(opt);

    opt = document.createElement('option');
    opt.value = "3/4"
    opt.innerHTML = "3/4"
    select.appendChild(opt);

    opt = document.createElement('option');
    opt.value = "4/5"
    opt.innerHTML = "4/5"
    select.appendChild(opt);

    opt = document.createElement('option');
    opt.value = "5/6"
    opt.innerHTML = "5/6"
    select.appendChild(opt);

    opt = document.createElement('option');
    opt.value = "8/9"
    opt.innerHTML = "8/9"
    select.appendChild(opt);

    opt = document.createElement('option');
    opt.value = "9/10"
    opt.innerHTML = "9/10"
    select.appendChild(opt);
  }
  if(protocol=="DVB-S2" && modulation=="8PSK"){
    opt = document.createElement('option');
    opt.value = "3/5"
    opt.innerHTML = "3/5"
    select.appendChild(opt);

    opt = document.createElement('option');
    opt.value = "2/3"
    opt.innerHTML = "2/3"
    select.appendChild(opt);

    opt = document.createElement('option');
    opt.value = "3/4"
    opt.innerHTML = "3/4"
    select.appendChild(opt);

    opt = document.createElement('option');
    opt.value = "5/6"
    opt.innerHTML = "5/6"
    select.appendChild(opt);

    opt = document.createElement('option');
    opt.value = "8/9"
    opt.innerHTML = "8/9"
    select.appendChild(opt);

    opt = document.createElement('option');
    opt.value = "9/10"
    opt.innerHTML = "9/10"
    select.appendChild(opt);
  }
  if(protocol=="DVB-S2" && modulation=="16APSK"){
    opt = document.createElement('option');
    opt.value = "2/3"
    opt.innerHTML = "2/3"
    select.appendChild(opt);

    opt = document.createElement('option');
    opt.value = "3/4"
    opt.innerHTML = "3/4"
    select.appendChild(opt);

    opt = document.createElement('option');
    opt.value = "4/5"
    opt.innerHTML = "4/5"
    select.appendChild(opt);

    opt = document.createElement('option');
    opt.value = "5/6"
    opt.innerHTML = "5/6"
    select.appendChild(opt);

    opt = document.createElement('option');
    opt.value = "8/9"
    opt.innerHTML = "8/9"
    select.appendChild(opt);

    opt = document.createElement('option');
    opt.value = "9/10"
    opt.innerHTML = "9/10"
    select.appendChild(opt);
  }
  if(protocol=="DVB-S2" && modulation=="32APSK"){
    opt = document.createElement('option');
    opt.value = "3/4"
    opt.innerHTML = "3/4"
    select.appendChild(opt);

    opt = document.createElement('option');
    opt.value = "4/5"
    opt.innerHTML = "4/5"
    select.appendChild(opt);

    opt = document.createElement('option');
    opt.value = "5/6"
    opt.innerHTML = "5/6"
    select.appendChild(opt);

    opt = document.createElement('option');
    opt.value = "8/9"
    opt.innerHTML = "8/9"
    select.appendChild(opt);

    opt = document.createElement('option');
    opt.value = "9/10"
    opt.innerHTML = "9/10"
    select.appendChild(opt);
  }
  select.selectedIndex = "0";

}
function calulateminsnrber(){
  var select=document.getElementById("minsnrberfecvalue");
  var select1=document.getElementById("minsnrberprotocol");
  var select2=document.getElementById("modulationscheme");
  var protocol = select1.options[select1.selectedIndex].value;
  var modulation = select2.options[select2.selectedIndex].value;
  var fec=select.options[select.selectedIndex].value;
  if(protocol=="DVB-S" && modulation=="QPSK"){
    if(fec=="1/2"){
      document.getElementById("minsnrspan").innerHTML="1.7";
    }
    if(fec=="2/3"){
      document.getElementById("minsnrspan").innerHTML="3.3";
    }
    if(fec=="3/4"){
      document.getElementById("minsnrspan").innerHTML="4.2";
    }
    if(fec=="5/6"){
      document.getElementById("minsnrspan").innerHTML="5.1";
    }
    if(fec=="7/8"){
      document.getElementById("minsnrspan").innerHTML="5.8";
    }
  }
  if(protocol=="DVB-S2" && modulation=="QPSK"){
    if(fec=="1/4"){
      document.getElementById("minsnrspan").innerHTML="-2.3";
    }
    if(fec=="1/3"){
      document.getElementById("minsnrspan").innerHTML="-1.2";
    }
    if(fec=="2/5"){
      document.getElementById("minsnrspan").innerHTML="-0.3";
    }
    if(fec=="1/2"){
      document.getElementById("minsnrspan").innerHTML="1.0";
    }
    if(fec=="3/5"){
      document.getElementById("minsnrspan").innerHTML="2.3";
    }
    if(fec=="2/3"){
      document.getElementById("minsnrspan").innerHTML="3.1";
    }
    if(fec=="3/4"){
      document.getElementById("minsnrspan").innerHTML="4.1";
    }
    if(fec=="4/5"){
      document.getElementById("minsnrspan").innerHTML="4.7";
    }
    if(fec=="5/6"){
      document.getElementById("minsnrspan").innerHTML="5.2";
    }
    if(fec=="8/9"){
      document.getElementById("minsnrspan").innerHTML="6.2";
    }
    if(fec=="9/10"){
      document.getElementById("minsnrspan").innerHTML="6.5";
    }
  }
  if(protocol=="DVB-S2" && modulation=="8PSK"){
    if(fec=="3/5"){
      document.getElementById("minsnrspan").innerHTML="5.5";
    }
    if(fec=="2/3"){
      document.getElementById("minsnrspan").innerHTML="6.6";
    }
    if(fec=="3/4"){
      document.getElementById("minsnrspan").innerHTML="7.9";
    }
    if(fec=="5/6"){
      document.getElementById("minsnrspan").innerHTML="9.4";
    }
    if(fec=="8/9"){
      document.getElementById("minsnrspan").innerHTML="10.7";
    }
    if(fec=="9/10"){
      document.getElementById("minsnrspan").innerHTML="11.0";
    }
  }
  if(protocol=="DVB-S2" && modulation=="16APSK"){
    if(fec=="2/3"){
      document.getElementById("minsnrspan").innerHTML="9.0";
    }
    if(fec=="3/4"){
      document.getElementById("minsnrspan").innerHTML="10.2";
    }
    if(fec=="4/5"){
      document.getElementById("minsnrspan").innerHTML="11.0";
    }
    if(fec=="5/6"){
      document.getElementById("minsnrspan").innerHTML="11.6";
    }
    if(fec=="8/9"){
      document.getElementById("minsnrspan").innerHTML="12.9";
    }
    if(fec=="9/10"){
      document.getElementById("minsnrspan").innerHTML="13.2";
    }
  }
  if(protocol=="DVB-S2" && modulation=="32APSK"){
    if(fec=="3/4"){
      document.getElementById("minsnrspan").innerHTML="12.8";
    }
    if(fec=="4/5"){
      document.getElementById("minsnrspan").innerHTML="13.7";
    }
    if(fec=="5/6"){
      document.getElementById("minsnrspan").innerHTML="14.3";
    }
    if(fec=="8/9"){
      document.getElementById("minsnrspan").innerHTML="15.7";
    }
    if(fec=="9/10"){
      document.getElementById("minsnrspan").innerHTML="16.1";
    }
  }

}
function liveconverttolamba(){
  document.getElementById("beammaxgainfrequency").setCustomValidity("");
  document.getElementById("beammaxgainlamda").setCustomValidity("");
  document.getElementById("beammaxgainfrequencylamdaerror").innerHTML='';

  const c=299792458;
  var frequency=document.getElementById("beammaxgainfrequency").value;
  if(frequency==""){
      document.getElementById("beammaxgainlamda").value="";
      return;
  }
  if(!(isNumber(frequency))){
    document.getElementById("beammaxgainfrequency").setCustomValidity("Invalid frequency.");
    document.getElementById("beammaxgainlamda").setCustomValidity("Invalid lamda.");
    document.getElementById("beammaxgainlamda").value="ERROR!";
    return;
  }
  document.getElementById("beammaxgainlamda").value=c/(document.getElementById("beammaxgainfrequency").value*1000000);
}

function liveconverttofrequency(){
  document.getElementById("beammaxgainfrequency").setCustomValidity("");
  document.getElementById("beammaxgainlamda").setCustomValidity("");
  document.getElementById("beammaxgainfrequencylamdaerror").innerHTML='';


  const c=299792458;
  var lamda=document.getElementById("beammaxgainlamda").value;
  if(lamda==""){
      document.getElementById("beammaxgainfrequency").value="";
      return;
  }
  if(!(isNumber(lamda))){
    document.getElementById("beammaxgainfrequency").setCustomValidity("Invalid frequency.");
    document.getElementById("beammaxgainlamda").setCustomValidity("Invalid lamda.");
    document.getElementById("beammaxgainfrequency").value="ERROR!";
    return;
  }
  document.getElementById("beammaxgainfrequency").value=c/(document.getElementById("beammaxgainlamda").value*1000000);
}

function activaterullermode(viewer){
  rullermode=true;
  document.getElementById("rullersemiwindow").style.display="block";
  document.getElementById("distancevalue").innerHTML="0.0";
}

function entitychartographic(entity){
  var tempchartographic=Cesium.Ellipsoid.WGS84.cartesianToCartographic(entity.position.getValue());
  return new Cesium.Cartographic(Cesium.Math.toDegrees(tempchartographic.longitude),Cesium.Math.toDegrees(tempchartographic.latitude),Cesium.Math.toDegrees(tempchartographic.height));
}

function deactivaterullermode(viewer){
  document.getElementById("rullersemiwindow").style.display="none";
  rullermode=false;
  for(i=0;i<rullerlocationsarray.length;i++){
    viewer.entities.removeById("connectline_"+(i+1));
    viewer.entities.removeById("calculatedistancepoint_"+(i+1));
  }
  rullerlocationsarray=[];
}

function calculatedistance(startcartographic,endcartographic){
  var geodesic = new Cesium.EllipsoidGeodesic();

  var tmp1=new Cesium.Cartographic(Cesium.Math.toRadians(startcartographic.longitude),Cesium.Math.toRadians(startcartographic.latitude),Cesium.Math.toRadians(startcartographic.height));
  var tmp2=new Cesium.Cartographic(Cesium.Math.toRadians(endcartographic.longitude),Cesium.Math.toRadians(endcartographic.latitude),Cesium.Math.toRadians(endcartographic.height));
  geodesic.setEndPoints(tmp1,tmp2, Cesium.Ellipsoid.WGS84);
  return geodesic.surfaceDistance/1000;
}


function convertkmtomiles(kmtoconvert){
  return kmtoconvert*0.621371;
}
function convertmilestokm(milestoconvert){
  return milestoconvert/0.621371;
}
function showlengthinrespecttosettings(length) {
  if(document.getElementById("lengthunitswitch").checked){
    return convertkmtomiles(length)+ " mi";
  }
    return length + " km";
}

function showtrimmedlengthinrespecttosettings(length) {
  if(document.getElementById("lengthunitswitch").checked){
    var converted=convertkmtomiles(length);
    converted=converted.toFixed(1);
    return converted + " mi";
  }
    var converted=length.toFixed(1);
    return converted + " km";
}
function putpoint(viewer,selectedLocation){
  var prevlocation;
  if(rullerlocationsarray==0){
    var marker=viewer.entities.getById('locationMarker');
    prevlocation=entitychartographic(marker);
  }
  else{
    prevlocation=entitychartographic(rullerlocationsarray[rullerlocationsarray.length-1]);
  }
  var locationchartograpic=new Cesium.Cartographic(selectedLocation.lng,selectedLocation.lat,0.0);
  prevlocationdistance=calculatedistance(prevlocation,locationchartograpic);
  var totaldistance=0;
  if(rullerlocationsarray.length==0){
    totaldistance=prevlocationdistance;
  }
  else{
    totaldistance=prevlocationdistance+rullerlocationsarray[rullerlocationsarray.length-1].value;
  }
  var distancetext=showlengthinrespecttosettings(totaldistance);
  var distancetexttrimmed=showtrimmedlengthinrespecttosettings(totaldistance);
  var pointid="calculatedistancepoint_"+(rullerlocationsarray.length+1);
  var pointname="Point "+(rullerlocationsarray.length+1);
  var polylineid="connectline_"+(rullerlocationsarray.length+1);
  var polylinename="Distance line "+(rullerlocationsarray.length+1);

  var polylinepos=Cesium.Cartesian3.fromDegreesArray([prevlocation.longitude, prevlocation.latitude, locationchartograpic.longitude,locationchartograpic.latitude],Cesium.Ellipsoid.WGS84);


  var polyline =  viewer.entities.add({
    id: polylineid,
    name: polylinename,
    polyline: {

        positions: polylinepos,
        width: 1.5,
        material: Cesium.Color.BLACK,
      },
  });

  var newpoint = viewer.entities.add({
    id : pointid,
    name : pointname,
    value : totaldistance,
    description: "Location: ("+selectedLocation.lng+","+selectedLocation.lat+")<br>Distance: "+distancetext,
    position : Cesium.Cartesian3.fromDegrees(selectedLocation.lng,selectedLocation.lat, 0.0),
    point : {
      pixelSize : 5,
      color : Cesium.Color.BLUE,
      outlineColor : Cesium.Color.WHITE,
      outlineWidth : 2,
      heightReference: Cesium.HeightReference.RELATIVE_TO_GROUND

    },
    label : {
      text : distancetexttrimmed,
      font : '14pt monospace',
      style: Cesium.LabelStyle.FILL_AND_OUTLINE,
      outlineWidth : 2,
      verticalOrigin : Cesium.VerticalOrigin.BOTTOM,
      pixelOffset : new Cesium.Cartesian2(0, -9),
      heightReference: Cesium.HeightReference.RELATIVE_TO_GROUND

    }});
    rullerlocationsarray.push(newpoint);

    var distancetext=distancetext.slice(0,distancetext.length-2);
    distancetext=distancetext.trim();
    document.getElementById("distancevalue").innerHTML=distancetext;

}




const {parse: $parse, stringify: $stringify} = JSON;
const {keys} = Object;

const Primitive = String;   // it could be Number
const primitive = 'string'; // it could be 'number'

const ignore = {};
const object = 'object';

const noop = (_, value) => value;

const primitives = value => (
  value instanceof Primitive ? Primitive(value) : value
);

const Primitives = (_, value) => (
  typeof value === primitive ? new Primitive(value) : value
);

const revive = (input, parsed, output, $) => {
  const lazy = [];
  for (let ke = keys(output), {length} = ke, y = 0; y < length; y++) {
    const k = ke[y];
    const value = output[k];
    if (value instanceof Primitive) {
      const tmp = input[value];
      if (typeof tmp === object && !parsed.has(tmp)) {
        parsed.add(tmp);
        output[k] = ignore;
        lazy.push({k, a: [input, parsed, tmp, $]});
      }
      else
        output[k] = $.call(output, k, tmp);
    }
    else if (output[k] !== ignore)
      output[k] = $.call(output, k, value);
  }
  for (let {length} = lazy, i = 0; i < length; i++) {
    const {k, a} = lazy[i];
    output[k] = $.call(output, k, revive.apply(null, a));
  }
  return output;
};

const set = (known, input, value) => {
  const index = Primitive(input.push(value) - 1);
  known.set(value, index);
  return index;
};

const parse = (text, reviver) => {
  const input = $parse(text, Primitives).map(primitives);
  const value = input[0];
  const $ = reviver || noop;
  const tmp = typeof value === object && value ?
              revive(input, new Set, value, $) :
              value;
  return $.call({'': tmp}, '', tmp);
};

const stringify = (value, replacer, space) => {
  const $ = replacer && typeof replacer === object ?
            (k, v) => (k === '' || -1 < replacer.indexOf(k) ? v : void 0) :
            (replacer || noop);
  const known = new Map;
  const input = [];
  const output = [];
  let i = +set(known, input, $.call({'': value}, '', value));
  let firstRun = !i;
  while (i < input.length) {
    firstRun = true;
    output[i] = $stringify(input[i++], replace, space);
  }
  return '[' + output.join(',') + ']';
  function replace(key, value) {
    if (firstRun) {
      firstRun = !firstRun;
      return value;
    }
    const after = $.call(this, key, value);
    switch (typeof after) {
      case object:
        if (after === null) return after;
      case primitive:
        return known.get(after) || set(known, input, after);
    }
    return after;
  }
};

const toJSON = any => $parse(stringify(any));
const fromJSON = any => parse($stringify(any));

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
  	      height              : 650,
  	      width               : 640,
  	      maxHeight           : undefined,
  	      maxWidth            : undefined,
  	      minHeight           : 650,
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
  	      height              : 650,
  	      width               : 640,
  	      maxHeight           : undefined,
  	      maxWidth            : undefined,
  	      minHeight           : 650,
  	      minWidth            : 640,
  	      collapsedWidth      : undefined,
  });
    $("#editdishwindow").PopupWindow("open");
}
function showbeammaxgainalternativecalculatorwindow(){
  $('#beammaxgainalternativecalculatorwindow').PopupWindow({
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
    $("#beammaxgainalternativecalculatorwindow").PopupWindow("open");
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

function showconfirmdeleteprojectfilewindow(filename){

  document.getElementById('confirmdeletefilespan').innerHTML="Are you sure to delete project file "+ filename+"?";
  document.getElementById('filetodelete').innerHTML=filename;
  $('#confirmdeleteprojectfilewindow').PopupWindow({
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
    $("#confirmdeleteprojectfilewindow").PopupWindow("open");
}

function showconfirmaddsatelliteonchecksumerrorwindow(){

  $('#confirmaddsatelliteonchecksumerrorwindow').PopupWindow({
          title: "Checksum Error",
          autoOpen: false,
          nativeDrag: false,
  	      height              : 220,
  	      width               : 650,
  	      maxHeight           : undefined,
  	      maxWidth            : undefined,
  	      minHeight           : 220,
  	      minWidth            : 650,
  	      collapsedWidth      : undefined,
  });
    $("#confirmaddsatelliteonchecksumerrorwindow").PopupWindow("open");
}


function showconfirmdeletesatellitewindow(){
  var table=document.getElementById('satellitedelete');
  var row=table.getElementsByClassName("selectedtr")[0];
  var satname=row.cells[0].innerText;
  document.getElementById('confirmdeletesatellitespan').innerHTML="Are you sure to delete satellite "+ satname+"?";
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

function showlinkbudgetcalculatorwindow(){
  document.getElementById("linkbudgetuplinkweatherlosses").style.display="none";
  document.getElementById("linkbudgetuplinktotalsnr").style.display="none";
  document.getElementById("linkbudgetdownlinkweatherlosses").style.display="none";
  document.getElementById("linkbudgetdownlinktotalsnr").style.display="none";
  $('#linkbudgetcalculatorwindow').PopupWindow({
          title: "Link budget calculator",
          autoOpen: false,
          nativeDrag: false,
  	      height              : 585,
  	      width               : 820,
  	      maxHeight           : undefined,
  	      maxWidth            : undefined,
  	      minHeight           : 585,
  	      minWidth            : 820,
  	      collapsedWidth      : undefined,
  });
    $("#linkbudgetcalculatorwindow").PopupWindow("open");
}

function showminsnrandbercalculatorwindow(){
$('#minsnrandbercalculatorwindow').PopupWindow({
        title: "Min.SNR/cur.BER calculator",
        autoOpen: false,
        nativeDrag: false,
        height              : 430,
        width               : 670,
        maxHeight           : undefined,
        maxWidth            : undefined,
        minHeight           : 430,
        minWidth            : 670,
        collapsedWidth      : undefined,
});
  $("#minsnrandbercalculatorwindow").PopupWindow("open");
}

function showopenprojectwindow(){
  $('#openprojectwindow').PopupWindow({
          title: "Open Project",
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
    $("#openprojectwindow").PopupWindow("open");
}

function showsaveprojectwindow(){
  $('#saveprojectwindow').PopupWindow({
          title: "Save Project as",
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
    $("#saveprojectwindow").PopupWindow("open");
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

function showbrowsefileopenwindow(){
  $('#browsefileopenwindow').PopupWindow({
        title: "Browse file to open...",
        autoOpen: false,
        nativeDrag: false,
        height              : 400,
        width               : 750,
        maxHeight           : undefined,
        maxWidth            : undefined,
        minHeight           : 400,
        minWidth            : 750,
        collapsedWidth      : undefined,
    });
    $("#browsefileopenwindow").PopupWindow("open");
}

function showbrowsefilesavewindow(){
  $('#browsefilesavewindow').PopupWindow({
        title: "Browse file to save...",
        autoOpen: false,
        nativeDrag: false,
        height              : 400,
        width               : 750,
        maxHeight           : undefined,
        maxWidth            : undefined,
        minHeight           : 400,
        minWidth            : 750,
        collapsedWidth      : undefined,
    });
    $("#browsefilesavewindow").PopupWindow("open");
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
