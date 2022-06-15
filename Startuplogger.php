<?php
require 'Functions.php';
require 'Credentials.php';

$message=$_POST['message'];
$status=$_POST['status'];
checkandlogonstartup2($logfile, $message, $status);

?>
