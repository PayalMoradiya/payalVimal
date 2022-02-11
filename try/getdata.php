<?php

include("config.php");

$conn = new mysqli($servername, $username, $password, $dbname);

if(!$conn){
    echo "Coneection Failed :" . mysqli_connect_error();
}
$sql = "SELECT * FROM registration WHERE id=1";

$result = $conn->query($sql);

if ($result->num_rows > 0) {
  // output data of each row
  while($row = $result->fetch_assoc()) {
    echo "id: " . $row["id"]. " - Name: " . $row["firstname"]. " " . $row["lastname"]. "<br>";
  }
} else {
  echo "0 results";
}
$conn->close();


?>

