$.ajax({
    url: "libs/php/getdata.php",
    type: "POST",
    dataType: "json",
    data: {
     

    },
    success: function (result) {
      console.log(result);
      $("#department_name").html(result["data"][0]["name"]);
     
    },
    error: function (jqXHR, textStatus, errorThrown) {
        //error code..
        alert("error");
      } 
    });