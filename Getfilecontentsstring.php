<?php

$filename=$_POST['filename'];


$buf=file_get_contents($filename);

if($buf==false){
  echo "false";
  return;
}
echo $buf;
?>
