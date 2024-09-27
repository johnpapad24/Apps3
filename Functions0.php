<?php

function checknetconn(){

$errtr="test";
$sock = @fsockopen('www.google.com', 80,$errno, $errstr, 30);
if ($sock){
      @fclose($sock);
      echo "0";
  }
  else{  echo strval($errstr); echo "1"; }
}

function connectdb($servername, $username, $password){
  $conn = mysqli_connect($servername, $username, $password);

 if (!$conn){
   return null;
 }
 return $conn;
}

function checkconnectdb($servername, $username, $password){
  $conn = mysqli_connect($servername, $username, $password);
  if (!$conn){
    return "1";
  }
  mysqli_close($conn);
  return "0";
}

function gettectable($tecfile){
  if(!file_get_contents($tecfile)) {
    echo "1";
  }
  $file=fopen($tecfile,'r');
  if(!$file){
    echo "1";
  }
  fgets($file);
  while(!feof($file)){
    echo( fgets($file));
  }
  fclose($file);
}

function updatedb($conn,$tlefile){
$createdbifnotq=$conn->query('CREATE DATABASE IF NOT EXISTS Satellites;');
$usedbq=$conn->query('USE Satellites;');
$createtableifnotq=$conn->query('CREATE TABLE IF NOT EXISTS Satellite(Satid int NOT NULL AUTO_INCREMENT, Name varchar(255), Tleline1 varchar(255), Tleline2 varchar(255), BeamCSV varchar(255), PRIMARY KEY (Satid));');
$file=fopen($tlefile,'r');
if(!$file){
  return 1;
}
while (!feof($file)){
  $name=trim(fgets($file));
  $tle1=trim(fgets($file));
  $tle2=trim(fgets($file));
  $dirname="CSVs/".filename_satinizer($name);
  $existsq= mysqli_query($conn, 'SELECT count(*) as exist from Satellite where Name='."\"".$name."\"".';');
  $res=$existsq->fetch_assoc();
  if($res["exist"]<1){
    $insertq= $conn->query('insert into Satellite (Name, Tleline1, Tleline2, BeamCSV) Values ('."\"".$name."\", \"".$tle1."\", \"".$tle2."\", ".'"/'.$dirname.'");');
  }
  else{
    $updatq=$conn->query('UPDATE Satellite SET Tleline1='.'"'.$tle1.'"'.', Tleline2='.'"'.$tle2.'"'. ' Where Name='.'"'.$name.'";');
  }

  $cfile=$dirname."/beams.csv";
  if(!is_dir($dirname)){
    $dirmade=mkdir($dirname,0777,true);
    chmod($dirname,0777);
    if($dirmade==false){
      return 2;
    }
    $csvfile=fopen($cfile, 'w');
    if(!$csvfile){

      return 3;
    }
    fclose($csvfile);

  }
  else if(!is_file($cfile)){
    $csvfile=fopen($cfile, 'w');
    if(!$csvfile){
     return 3;
    }
    fclose($csvfile);
  }
}
fclose($file);
chmod("CSVs",0777);

return 0;
}

function filename_satinizer($filename){
  $filename = str_replace(array_merge(
          array_map('chr', range(0, 31)),
          array('<', '>', ':', '"', '/', '\\', '|', '?', '*')
      ), '', $filename);
      // maximise filename length to 255 bytes http://serverfault.com/a/9548/44086
      $ext = pathinfo($filename, PATHINFO_EXTENSION);
      $filename= mb_strcut(pathinfo($filename, PATHINFO_FILENAME), 0, 255 - ($ext ? strlen($ext) + 1 : 0), mb_detect_encoding($filename)) . ($ext ? '.' . $ext : '');
      return $filename;
}

function getsatnames($conn){
  $conn->query("USE Satellites");
  $getsatnumq= $conn->query('SELECT COUNT(*) as CNT from Satellite;');
  $size= $getsatnumq->fetch_assoc();
  $getsatq= $conn->query('SELECT * from Satellite;');
  echo '<select id="sateliteselect" size="'.$size["CNT"].'" single style=" LEFT: 13px; overflow: scroll; max-width: 1000px; position: inherit; TOP: 62px; max-height: 300px ">';
  while ($satrow=$getsatq->fetch_assoc()){
   echo '<option value="'.$satrow['Name'].'">'.$satrow['Name'].'</option>';
  }
  echo '</select>';
 return;
}

function getsatnames_new($conn,$windowname){
  $id="";
  if($windowname=="selectsatellitewindow"){
     $id="sateliteselect";
   }
   else if($windowname=="deletesatellitewindow"){
     $id="satellitedelete";
   }
  $conn->query("USE Satellites");
  $getsatnumq= $conn->query('SELECT COUNT(*) as CNT from Satellite;');
  $size= $getsatnumq->fetch_assoc();
  $getsatq= $conn->query('SELECT * from Satellite;');
  echo '<table class="newtable" id="'.$id.'" style="height: 270px; overflow-y: auto; display: block; overflow-x: auto;"><tbody class="newtbody">';
  while ($satrow=$getsatq->fetch_assoc()){
   echo '<tr class="newtr"><td class="newtd" onclick="highlight('."'".$id."'".');" style="text-align: center;" value="'.$satrow['Name'].'">'.$satrow['Name'].'</td><tr>';
  }
  echo '</tbody></table>';
 return;
}



function getbrowsefiles($windowname,$projectsdir){
  $id="";
  if($windowname=="browsefileopenwindow"){
     $id="browsefileopen";
   }
   else if($windowname=="browsefilesavewindow"){
     $id="browsefilesave";
   }


  $files=glob($projectsdir."*.{PSAV,psav}",GLOB_BRACE|GLOB_ERR);

  echo '<table class="newtable" id="'.$id.'table" style="height: 270px; overflow-y: auto; display: block; overflow-x: auto;"><tbody class="newtbody">';
  if(is_array($files)){
    $arrlength=count($files);
    for ($i=0;$i<$arrlength;$i++) {
      echo '<tr class="newtr" id="'.basename($files[$i]).'" style="height:37.5px;" ><td id="'.$id."_".($i+1)."_1".'" class="newtd" onclick="highlight('."'".$id."table'".');" onmouseover="document.getElementById('."'".$id."_".($i+1)."_2"."'".').className='."'".'newtd newtd3'."'".'; document.getElementById('."'".$id."_".($i+1)."_3"."'".').className='."'".'newtd newtd3'."'".';   document.getElementById('."'".$id."_".($i+1)."_4"."'".').className='."'".'newtd newtd3'."'".';" onmouseout="document.getElementById('."'".$id."_".($i+1)."_2"."'".').className='."'".'newtd'."'".'; document.getElementById('."'".$id."_".($i+1)."_3"."'".').className='."'".'newtd'."'".'; document.getElementById('."'".$id."_".($i+1)."_4"."'".').className='."'".'newtd'."'".';" style="text-align: center;">'.($i+1).')</td><td id="'.$id."_".($i+1)."_2".'" onclick="highlight('."'".$id."table'".');" onmouseover="document.getElementById('."'".$id."_".($i+1)."_1"."'".').className='."'".'newtd newtd3'."'".'; document.getElementById('."'".$id."_".($i+1)."_3"."'".').className='."'".'newtd newtd3'."'".'; document.getElementById('."'".$id."_".($i+1)."_4"."'".').className='."'".'newtd newtd3'."'".'; " onmouseout="document.getElementById('."'".$id."_".($i+1)."_1"."'".').className='."'".'newtd'."'".'; document.getElementById('."'".$id."_".($i+1)."_3"."'".').className='."'".'newtd'."'".'; document.getElementById('."'".$id."_".($i+1)."_4"."'".').className='."'".'newtd'."'".';" class="newtd"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABmJLR0QA/wD/AP+gvaeTAAABKUlEQVQ4jWNkgAKvnqPyf34zizBgAUxMTAKvBZiOn003+YYuxwJjWKmIdoeZS4ViM+Do7Q//b7/4+oph5hkldEPgBnCwMP5SleDGpp/h+rOvjNEOiuJ/9997IDZpm8r2PK9PcNdh1YEFcLGxMMQ7KovqiSvd8Zy0jQ/DBfiAIDcLw+lbrxgYGBgYVMW5RT9/k93JwMBgSbQBtupCKPwPX37cxemCn7//Mey9+garQc7aIgzsrKi+JsoFqhLcDLgCGMMAZmZGrIpvv/jKoCjGxcDCxIgiTnQs4AIYLvj79z/D7RdfUcTweYEoF9x+8ZVh24VXDD9//yPsAnZWJgYvAzFizCXeBfgA3AU//vxnQ/c7LvDjz382DAOO3Xldeuj6u06ibGX9C09pAGtFWP4tQF5dAAAAAElFTkSuQmCC"/>'.basename($files[$i]).'</td><td  id="'.$id."_".($i+1)."_3".'" onclick="highlight('."'".$id."table'".');" onmouseover="document.getElementById('."'".$id."_".($i+1)."_1"."'".').className='."'".'newtd newtd3'."'".'; document.getElementById('."'".$id."_".($i+1)."_2"."'".').className='."'".'newtd newtd3'."'".'; document.getElementById('."'".$id."_".($i+1)."_4"."'".').className='."'".'newtd newtd3'."'".';" onmouseout="document.getElementById('."'".$id."_".($i+1)."_1"."'".').className='."'".'newtd'."'".'; document.getElementById('."'".$id."_".($i+1)."_2"."'".').className='."'".'newtd'."'".'; document.getElementById('."'".$id."_".($i+1)."_4"."'".').className='."'".'newtd'."'".';"  class="newtd">Last modified: '.date("m/d/Y H:i:s",filemtime($files[$i])).'</td><td id="'.$id."_".($i+1)."_4".'"  onmouseover="document.getElementById('."'".$id."_".($i+1)."_2"."'".').className='."'".'newtd newtd3'."'".'; document.getElementById('."'".$id."_".($i+1)."_3"."'".').className='."'".'newtd newtd3'."'".';   document.getElementById('."'".$id."_".($i+1)."_1"."'".').className='."'".'newtd newtd3'."'".';" onmouseout="document.getElementById('."'".$id."_".($i+1)."_2"."'".').className='."'".'newtd'."'".'; document.getElementById('."'".$id."_".($i+1)."_3"."'".').className='."'".'newtd'."'".'; document.getElementById('."'".$id."_".($i+1)."_1"."'".').className='."'".'newtd'."'".';" style="text-align:center;" class="newtd"><button type="button" class="btn btn-danger" onclick="showconfirmdeleteprojectfilewindow('."'".basename($files[$i])."'".');">Delete</button> </td></tr>';
    }
  }
  echo '</tbody></table>';


}

function deletefile($filename){
  if(unlink($filename)) {
      return 0;
  }
  else {
      return 1;
  }
}

function loggger($logfile, $message, $status){
  if($status!="OK" && $status!="FAILED" && $status!=""){ return false;}
  if($status!=""){$status=' : '.$status;}
  $file=fopen($logfile,'a');
  if(!$file){return false;}
  $written=fwrite($file , '[' . date("Y/m/d H:i:s") .'] : '. $message.''. $status.''.PHP_EOL);
  if($written==false){return false;}
  fclose($file);
  return true;
}

function statupprogressupdater($processname, $percent){

  echo "<script type='text/javascript'> document.getElementsByClassName('progress-bar').item(0).setAttribute('aria-valuenow',".$percent.");
       document.getElementsByClassName('progress-bar').item(0).setAttribute('style','width:".$percent."%');
       document.getElementsByClassName('progress-bar').item(0).innerHTML='".$percent."%';
       document.getElementById('processtext').innerHTML=". '"' .$processname. '"'. ";
  </script>";

  ob_flush();
  flush();
}

function logcreator($logfile){
   $file=fopen($logfile,'w');
   if(!$file){
  echo "1";}
   fclose($file);
   echo "0";
}

function startupprocesserror($message){
  echo "<script type='text/javascript'> document.getElementsByClassName('progress-bar').item(0).className+=' progress-bar-danger'; </script>";
  ob_flush();
  flush();
  echo '<div style="display: block; margin: auto; text-align:center;">
    <img style="vertical-align:middle;" src="Resources/error-icon.png" width="48" height="48">
    <span style="color: red; font-size: 18px; font-weight: bold;">'.$message.'</span>
  </div>
  <div style="text-align:center;">
    <button onclick="showlogwindow();" style="margin:auto; text-align:center;">Show Log</button>
  </div>';
  ob_flush();
  flush();
}

function checkandlogonapp($logfile, $message, $status){
  $check=loggger($logfile,$message,$status);
  if($check==false){
    requesterror("Error! Write to log file failed.");
  }
}

function checkandlogonstartup($logfile, $message, $status){
  $check=loggger($logfile,$message,$status);
  if($check==false){
    startupprocesserror("Error! Write to log file failed.");
    die();
  }
}

function checkandlogonstartup2($logfile, $message, $status){
  $check=loggger($logfile,$message,$status);
  return check;
}

function checkandcreatesettingsfile($settingsfile){
  $file=fopen($settingsfile,'r');
  if(!$file){
     $success=createsettingsfile($settingsfile);
     if(!$success){
     //startupprocesserror("Error! Creation of settings file failed.");
     return "1";
    }
    return "0";
  }
  return "0";

}

function createsettingsfile($settingsfile){
  $file=fopen($settingsfile,'w');
  if(!$file){ return false;}
  $test=fwrite($file, 'loadsetting("tempunitswitch",false,viewer);'."\r\n".'loadsetting("lengthunitswitch",false,viewer);'."\r\n".'loadsetting("xaxischeckbox",false,viewer);'."\r\n".'loadsetting("yaxischeckbox",false,viewer);'."\r\n".'loadsetting("zaxischeckbox",false,viewer);'."\r\n".'loadsetting("primemeridiancheckbox",false,viewer);'."\r\n".'loadsetting("primeparallelcheckbox",false,viewer);'."\r\n".'loadsetting("allmeridianscheckbox",false,viewer);'."\r\n".'loadsetting("allparallelscheckbox",false,viewer);'."\r\n".'loadsetting("darkmodeswitch",false,viewer);');
  fclose($file);

  return $test;
}

function createsavefile($savefilename,$data){
  //chdir($projectsdir);
  $file=fopen($savefilename,'w+');
  if(!$file){ return false;}
  $test=fwrite($file, $data);
  fclose($file);
//  chdir("..");
  return $test;
}

function settingsfileupdater($settingsfile,$setting,$value){
  $tempfile=$settingsfile.'.tmp';
  $reading = fopen($settingsfile, 'r');
  $writing = fopen($tempfile, 'w');
  if($writing==null || $reading==null){
    return false;
  }
  $needle='loadsetting("'.$setting.'",';
  $newline='loadsetting("'.$setting.'",'.$value.',viewer);'."\r\n";
  $replaced = false;
  while (!feof($reading)) {
  $line = fgets($reading);
  if (stristr($line,$needle)) {
    $line = $newline;
    $replaced = true;
  }
  fputs($writing, $line);
}
fclose($reading);
fclose($writing);
if ($replaced){
  rename($tempfile, $settingsfile);
  unlink(realpath($tempfile));
}
else {
  unlink(realpath($tempfile));
}
  return true;

}

function gettle($conn,$satname){
  $conn->query("USE Satellites");
  $gettleq= $conn->query('SELECT Tleline1, Tleline2 FROM Satellite WHERE Name='."\"".$satname."\"".';');
  $tlearr= $gettleq->fetch_row();
  $tle= $tlearr[0]."\n".$tlearr[1];
  return $tle;
}

function addsatellite($conn,$name,$tle1,$tle2){
  $conn->query("USE Satellites");
  $existsq= mysqli_query($conn, 'SELECT count(*) as exist from Satellite where Name='."\"".$name."\"".';');
  $res=$existsq->fetch_assoc();
  $dirname="CSVs/".filename_satinizer($name);
  if($res["exist"]<1){
    $insertq= $conn->query('insert into Satellite (Name, Tleline1, Tleline2, BeamCSV) Values ('."\"".$name."\", \"".$tle1."\", \"".$tle2."\", ".'"/'.$dirname.'");');
  }
  else{
    $updatq=$conn->query('UPDATE Satellite SET Tleline1='.'"'.$tle1.'"'.', Tleline2='.'"'.$tle2.'"'. ' Where Name='.'"'.$name.'";');
  }

  $dirname="CSVs/".filename_satinizer($name);
  $cfile=$dirname."/beams.csv";
  if(!is_dir($dirname)){
    $dirmade=mkdir($dirname,0777,true);
    chmod($dirname,0777);
    if($dirmade==false){
      return 2;
    }
    $csvfile=fopen($cfile, 'w');
    if(!$csvfile){

      return 3;
    }
    fclose($csvfile);

  }
  else if(!is_file($cfile)){
    $csvfile=fopen($cfile, 'w');
    if(!$csvfile){
     return 3;
    }
    fclose($csvfile);
  }
  return 0;
}
function deletesatellite($conn,$name){
  $conn->query("USE Satellites");
  $deleteq=mysqli_query($conn,'DELETE FROM Satellite WHERE Name='."\"".$name."\"".';');
  $dirname="CSVs/".filename_satinizer($name);
  $filedel=recursivedirdelete($dirname);
  if($filedel==true){
    return 0;
  }
  else {
    return 1;
  }
}
function recursivedirdelete($dirname){
  $files = glob($dirname . '/*');
	foreach ($files as $file) {
		is_dir($file) ? recursivedirdelete($file) : unlink($file);
	}
	$res=rmdir($dirname);
  return $res;
}
function checktlefile($tlefile){
  if(!file_get_contents($tlefile)) {
    echo "1";
  }
  echo "0";
}

function requesterror($message){
  echo "document.getElementById('errorwindow').innerHTML=".'<div style="display: block; margin: auto; text-align:center;">
    <img style="vertical-align:middle;" src="Resources/error-icon.png" width="48" height="48">
    <span style="color: red; font-size: 18px; font-weight: bold;">'.$message.'</span>
  </div>
  <div style="text-align:center;">
    <button onclick="showlogwindow();" style="margin:auto; text-align:center;">Show Log</button>
  </div>';
  ob_flush();
  flush();
}

?>
