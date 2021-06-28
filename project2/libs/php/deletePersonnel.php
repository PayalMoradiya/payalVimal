
<?php

// example use from browser
// http://localhost/companydirectory/libs/php/getPersonnel.php?id=1

// remove next two lines for production

ini_set('display_errors', 'On');
error_reporting(E_ALL);

$executionStartTime = microtime(true);

include("config.php");

header('Content-Type: application/json; charset=UTF-8');

$conn = new mysqli($cd_host, $cd_user, $cd_password, $cd_dbname, $cd_port, $cd_socket);

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

    $ID= $_POST['delete_id'];
//$query= 'UPDATE personnel SET firstName="'. $_POST["f_name"] .'",lastName="' . $_POST["l_name"] . '",jobTitle="' .$_POST["title_job"] . '",email="' . $_POST["inputEmail"] . '",departmentID="' . $_POST["department_id"] .'" WHERE id="' . $_POST["id"] . '"';
//$query = "UPDATE personnel SET firstName='$fname', lastName='$lname' , jobTitle='$jobtitle' ,email='$email' ,departmentID='$department' WHERE id='$id' ";
$query = "DELETE FROM personnel WHERE id='$ID' ";
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


$output['status']['code'] = "200";
$output['status']['name'] = "ok";
$output['status']['description'] = "success";
$output['status']['returnedIn'] = (microtime(true) - $executionStartTime) / 1000 . " ms";
$output['data'] = [];
//$output['data']['department'] = $department;

mysqli_close($conn);

echo json_encode($output); 

?>

