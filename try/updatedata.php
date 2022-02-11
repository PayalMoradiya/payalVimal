<?php

include("config.php");

$conn = new mysqli($servername, $username, $password, $dbname);

if(!$conn){
    echo "Coneection Failed :" . mysqli_connect_error();
}
$sql = "UPDATE registration SET firstname='Pal' WHERE firstname='Payal' ";

if (mysqli_query($conn, $sql)) {
    echo "New record updated successfully";
  } else {
    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
  }
  
  mysqli_close($conn);
  

?>