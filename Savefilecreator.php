<?php
require 'Functions.php';
require 'Credentials.php';
$filename=$_POST["filename"];
$data=$_POST["data"];
echo("<script>alert(".$data.");</script>");
$res=createsavefile($projectsdir.$filename,$data);
return $res;
?>
