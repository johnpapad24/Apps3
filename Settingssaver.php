<?php
require 'Functions.php';
require 'Credentials.php';
$setting=$_POST['setting'];
$value=$_POST['value'];
$message1="Updating settings file...";
$message2="Updating settings file...";
$test=settingsfileupdater($settingsfile,$setting,$value);
if($test==false){
  loggger($logfile,$message1,"FAILED");
  requesterror($message);
}
else {
  loggger($logfile,$message2,"OK");
}

?>
