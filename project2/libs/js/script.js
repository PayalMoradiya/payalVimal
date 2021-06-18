//toggle sidebar....
$("#btn-toggle").click(function(){
  $("#leftbar").toggle("slow");
  $("#right_container").width("100%");
});

//employees table show and hide...
$("#downarrow").click(function(){
  $("#myTable").fadeToggle("slow");
});

//department table show and hide...
$("#downarrow1").click(function(){
  $("#department_table").fadeToggle("slow");
});

//location table show and hide...
$("#downarrow2").click(function(){
  $("#location_table").fadeToggle("slow");
});

//getall data...
$(document).ready(function () {
  $.ajax({
    url: "libs/php/getAll.php",
    type: "POST",
    dataType: "json",
    data: {
    //  q: encoded_countryName,
    },
    success: function (result) {
      console.log(result);

      for (var i=0; i<result.data.length; i++) {
        var row = $('<tr><td>' + [i + 1] + '</td><td>'  + result.data[i].lastName+ '</td><td>' + result.data[i].firstName + '</td><td>' + result.data[i].jobTitle + '</td><td>' + result.data[i].email + '</td><td>' + result.data[i].department + '</td><td>' + result.data[i].location + '</td><td><img class="table_img mx-3" src="venders/image/pen.png" alt="edit image"> <img class="table_img mx-3" src="venders/image/delete.png" alt="delete image">' + '</td></tr>');
        $('#myTable').append(row);
    }
      
    },
    error: function (jqXHR, textStatus, errorThrown) {
      //error code..
      alert("error");
    },
  });

  //get all department...
  $.ajax({
    url: "libs/php/getAllDepartments.php",
    type: "POST",
    dataType: "json",
    data: {
    //  q: encoded_countryName,
    },
    success: function (result) {
      console.log(result);

      for (var i=0; i<result.data.length; i++) {
        var row = $('<tr><td>' + [i + 1] + '</td><td>'  + result.data[i].name+ '</td><td class="location_padding">' + result.data[i].locationID + '</td><td><img class="table_img" src="venders/image/pen.png" alt="edit image"> <img class="table2_img" src="venders/image/delete.png" alt="delete image">' + '</td></tr>');
        $('#department_table').append(row);
    }
      
    },
    error: function (jqXHR, textStatus, errorThrown) {
      //error code..
      alert("error");
    },
  });

   //get all location...
   $.ajax({
    url: "libs/php/getAllLocations.php",
    type: "POST",
    dataType: "json",
    data: {
    //  q: encoded_countryName,
    },
    success: function (result) {
      console.log(result);

      for (var i=0; i<result.data.length; i++) {
        var row = $('<tr><td>' + [i + 1] + '</td><td>'  + result.data[i].name + '</td><td><img class="table_img" src="venders/image/pen.png" alt="edit image"> <img class="table2_img" src="venders/image/delete.png" alt="delete image">' + '</td></tr>');
        $('#location_table').append(row);
    }
      
    },
    error: function (jqXHR, textStatus, errorThrown) {
      //error code..
      alert("error");
    },
  });

});
































