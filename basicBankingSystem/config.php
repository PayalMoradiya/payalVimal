
<?php

	$servername = "localhost";
	$username = "root";
	$password = "";
	$dbname = "indianbank";

	$conn = new mysqli($servername, $username, $password, $dbname); 

	if(!$conn){
		die("Could not connect to the database due to the following error --> ".mysqli_connect_error());
	}

?>   