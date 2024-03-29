<?php

	// example use from browser
	// http://localhost/companydirectory/libs/php/insertDepartment.php?name=New%20Department&locationID=1

	// remove next two lines for production
	
	ini_set('display_errors', 'On');
	error_reporting(E_ALL);

	$executionStartTime = microtime(true);

	include("config.php");

	header('Content-Type: application/json; charset=UTF-8');

	$conn = new mysqli($cd_host, $cd_user, $cd_password, $cd_dbname, $cd_port);

	if (mysqli_connect_errno()) {
		
		$output['status']['code'] = "300";
		$output['status']['name'] = "failure";
		$output['status']['description'] = "database unavailable";
		$output['status']['returnedIn'] = (microtime(true) - $executionStartTime) / 1000 . " ms";
		$output['data'] = [];

		mysqli_close($conn);

		echo json_encode($output);

		exit;

	}	

	// $_REQUEST used for development / debugging. Remember to cange to $_POST for production
	if(isset($_POST['checking_add'])){
		$fname = $_POST['fname'];
		$lname = $_POST['lname'];
		$jobtitle = $_POST['title'];
		$email = $_POST['inputEmail4'];
		$department = $_POST['department'];

//$query = 'INSERT INTO personnel (firstName, lastName, jobTitle, email, departmentID) VALUES("$fname", "$lname", "$jobtitle", "$email", "$department" )';
///	if(isset($_POST['submit'])){
	$query = 'INSERT INTO personnel (firstName, lastName, jobTitle, email, departmentID) VALUES("' . $_POST["fname"] . '","' . $_POST["lname"] . '","' . $_POST["title"] . '","' . $_POST["inputEmail4"] . '","' . $_POST["department"] . '")';
//$query = 'INSERT INTO personnel (firstName, lastName, jobTitle, email, departmentID) VALUES("payal", "vimal", "engineer", "pdkaba@gmail.com", "support" )';
//$query = 'INSERT INTO personnel (firstName, lastName) VALUES("' . $_POST['fname'] . '",' . $_POST["lname"] . ')';	
$result = $conn->query($query);

};
	
	if (!$result) {

		$output['status']['code'] = "400";
		$output['status']['name'] = "executed";
		$output['status']['description'] = "query failed";	
		$output['data'] = [];

		mysqli_close($conn);

		echo json_encode($output); 

		exit;

	}


	$output['status']['code'] = "200";
	$output['status']['name'] = "ok";
	$output['status']['description'] = "success";
	$output['status']['returnedIn'] = (microtime(true) - $executionStartTime) / 1000 . " ms";
	$output['data'] = [];
	
	mysqli_close($conn);

	echo json_encode($output); 

?>