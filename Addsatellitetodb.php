<?php
require 'Functions.php';
require 'Credentials.php';

$satname=$_POST['satname'];
$tle1=$_POST['tle1'];
$tle2=$_POST['tle2'];

$conn=connectdb($servername, $username, $password);
$success=addsatellite($conn,$satname,$tle1,$tle2);
mysqli_close($conn);
echo $success;
return;
?>
