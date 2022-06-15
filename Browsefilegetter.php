<?php
require 'Functions.php';
require 'Credentials.php';
$windowname=$_POST["windowname"];
$html=getbrowsefiles($windowname,$projectsdir);
return $html;
?>
