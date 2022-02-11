<?php
/*
$firstname = $_POST["firstname"];
$lastname = $_POST["lastname"];
$email = $_POST["email"];
$gender = $_POST["gender"];
$password = $_POST["password"];
$number = $_POST["number"];

include("connect.php");

$conn = new mysqli($sample_host, $sample_user, $sample_password, $sample_dbname);


if(isset($_POST["submit"])){
 //  $query = "INSERT INTO registration (firstname, lastname, email, gender, password, number) VALUES ('".$firstname."', '".$lastname."', '".$email."', '".$gender."', '".$password."', '".$number."' ) ";
 //$query = 'INSERT INTO registration (firstname, lastname, email, gender, password, number) VALUES ("' . $_POST["firstname"] . '","' . $_POST["lastname"] . '","' . $_POST["email"] . '","' . $_POST["gender"] . '","' . $_POST["password"] . '","' . $_POST["number"] . '" ) ';
 $query = "INSERT INTO registration (firstname, lastname, email, gender, password, number) VALUES ('$firstname', '$lastname', '$email', '$gender', '$password', '$number' ) ";
 $result = $conn->query($query);
}


if(!$result){
    echo "Something went wrong". $mysqli->err;
}
echo "Thank you for submitting..";
mysqli_close($conn);

*/






$servername = "localhost";
$username = "root";
$password = "";
$dbname = "test";

// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);
// Check connection
if (!$conn) {
  die("Connection failed: " . mysqli_connect_error());
}



$sql = "INSERT INTO registration (firstname, lastname) VALUES ('payal', 'moradiya' ) ";

if (mysqli_query($conn, $sql)) {
  echo "New record created successfully";
} else {
  echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}

mysqli_close($conn);











?>