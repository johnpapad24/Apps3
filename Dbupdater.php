<?php
require 'Functions.php';
require 'Credentials.php';
$conn=connectdb($servername,$username,$password);
if($conn==null){return 4;}
return updatedb($conn,$tlefile);


?>
