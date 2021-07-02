
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
if(isset($_POST['checking_add'])){

$query= 'UPDATE location SET name="'. $_POST["name"] .'" WHERE id="' . $_POST["ID"] . '"';
//$query = "UPDATE personnel SET firstName='$fname', lastName='$lname' , jobTitle='$jobtitle' ,email='$email' ,departmentID='$department' WHERE id='$id' ";
//$query2 = 'UPDATE location SET locationID="' . $_POST["department_locationID"] . '"  WHERE id="' . $_POST["department_id"] . '"';
$result = $conn->query($query);
//$result2 = $conn->query($query2);
}

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
$output['data'] = [$result];
//$output['data']['department'] = $department;

mysqli_close($conn);

echo json_encode($output); 

?>

