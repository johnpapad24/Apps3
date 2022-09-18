<?php
require 'Functions.php';
require 'Credentials.php';

$satname=$_POST['satname'];


$conn=connectdb($servername, $username, $password);
$success=deletesatellite($conn,$satname);
mysqli_close($conn);
echo $success;
return;
?>
