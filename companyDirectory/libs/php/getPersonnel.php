
<?php

	// example use from browser
	// http://localhost/companydirectory/libs/php/getPersonnel.php?id=1

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

	// first query
	$edit_data_id = $_POST['edit_data_id'];
	$query = 'SELECT * from personnel WHERE id =' . $edit_data_id;
	//$query = 'SELECT p.id, p.lastName, p.firstName, p.jobTitle, p.email, d.name as department, l.name as location FROM personnel p LEFT JOIN department d ON (d.id = p.departmentID) LEFT JOIN location l ON (l.id = d.locationID) ORDER BY p.id,  p.lastName, p.firstName, d.name, l.name WHERE id =' . $edit_data_id;
	$result = $conn->query($query);
	
	if (!$result) {

		$output['status']['code'] = "400";
		$output['status']['name'] = "executed";
		$output['status']['description'] = "query failed";	
		$output['data'] = [];

		mysqli_close($conn);

		echo json_encode($output); 

		exit;

	}
   
   	$personnel = [];
	

	while ($row = mysqli_fetch_assoc($result)) {

		array_push($personnel, $row);

	}

	// second query

	//$query = 'SELECT id, name from department ORDER BY id';
	$query = 'SELECT * from department ORDER BY id';
	$result = $conn->query($query);
	
	if (!$result) {

		$output['status']['code'] = "400";
		$output['status']['name'] = "executed";
		$output['status']['description'] = "query failed";	
		$output['data'] = [];

		mysqli_close($conn);

		echo json_encode($output); 

		exit;

	}
   
   	$department = [];
	
	while ($row = mysqli_fetch_assoc($result)) {

		array_push($department, $row);

	}

	// third query

	//$query = 'SELECT id, name from department ORDER BY id';
	$query = 'SELECT * from location ORDER BY id';
	$result = $conn->query($query);
	
	if (!$result) {

		$output['status']['code'] = "400";
		$output['status']['name'] = "executed";
		$output['status']['description'] = "query failed";	
		$output['data'] = [];

		mysqli_close($conn);

		echo json_encode($output); 

		exit;

	}
   
   	$location = [];
	
	while ($row = mysqli_fetch_assoc($result)) {

		array_push($location, $row);

	}

	$output['status']['code'] = "200";
	$output['status']['name'] = "ok";
	$output['status']['description'] = "success";
	$output['status']['returnedIn'] = (microtime(true) - $executionStartTime) / 1000 . " ms";
	$output['data']['personnel'] = $personnel;
	$output['data']['department'] = $department;
	$output['data']['location'] = $location;
	
	mysqli_close($conn);

	echo json_encode($output); 

?>

