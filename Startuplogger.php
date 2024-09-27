<?php
require 'Functions.php';
require 'Credentials.php';

$message=$_POST['message'];
$status=$_POST['status'];
$ret=checkandlogonstartup2($logfile, $message, $status);
return $ret;
?>
