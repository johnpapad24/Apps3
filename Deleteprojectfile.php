<?php
require 'Functions.php';
require 'Credentials.php';
$filename=$_POST['filename'];
$result=deletefile($projectsdir.$filename);
echo $result;
return;
?>
