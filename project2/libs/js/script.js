//back_btn button click...
$("#back_btn").on('click',function(){
  $("#dashboard_block").show();
  $("#dashboard_block1").show();
  $("#dashboard_block2").show();
  $("#toggle_employeeslist").hide();
  $("#toggle_department").hide();
  $("#toggle_location").hide();
  $("#back_btn").hide();
  $("#dashboard_btn").show();
});
//back_btn1 button click...
$("#back_btn1").on('click',function(){
  $("#dashboard_block").show();
  $("#dashboard_block1").show();
  $("#dashboard_block2").show();
  $("#toggle_employeeslist").hide();
  $("#toggle_department").hide();
  $("#toggle_location").hide();
  $("#back_btn1").hide();
  $("#dashboard_btn1").show();
});
//show and hide employees list table by clicking employees card....
$("#dashboard_block").on('click',function(){
  $("#toggle_employeeslist").show();
  $("#dashboard_btn").hide();
  $("#back_btn").show();
  $("#dashboard_btn1").hide();
  $("#back_btn1").show();
  $("#dashboard_block").hide();
  $("#dashboard_block1").hide();
  $("#dashboard_block2").hide();
});
//show and hide department table by clicking department card....
$("#dashboard_block1").on('click',function(){
  $("#toggle_department").show();
  $("#dashboard_btn").hide();
  $("#back_btn").show();
  $("#dashboard_btn1").hide();
  $("#back_btn1").show();
  $("#dashboard_block").hide();
  $("#dashboard_block1").hide();
  $("#dashboard_block2").hide();
});
//show and hide location table by clicking location card....
$("#dashboard_block2").on('click',function(){
  $("#toggle_location").show();
  $("#dashboard_btn").hide();
  $("#back_btn").show();
  $("#dashboard_btn1").hide();
  $("#back_btn1").show();
  $("#dashboard_block").hide();
  $("#dashboard_block1").hide();
  $("#dashboard_block2").hide();
});
//close button on modal...
var dismiss = document.getElementById("btn_cls");
dismiss.addEventListener("click", function () {
  $("#employee").modal("hide");
});
//show modal by clicking add button...
var add_employee = document.getElementById("plus_img");
add_employee.addEventListener("click", function(){
  $("#employee").modal("show");
});
//show department modal by clicking add button...
var add_department = document.getElementById("plus_img1");
add_department.addEventListener("click", function(){
  $("#department_modal").modal("show");
})
//close button on update modal...
var dismiss1 = document.getElementById("btn_cls1");
dismiss1.addEventListener("click", function () {
  $("#update_employee").modal("hide");
});

//toggle sidebar....
$("#btn-toggle").on('click',function(){
  $("#leftbar").toggle("slow");
  $("#right_container").width("100%");
});

//employees table show and hide...
$("#downarrow").on('click',function(){
  $("#myTable").fadeToggle("slow");
});

//department table show and hide...
$("#downarrow1").on('click',function(){
  $("#department_table").fadeToggle("slow");
});

//location table show and hide...
$("#downarrow2").on('click',function(){
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
        var row = $('<tr><td>' + result.data[i].id + '</td><td>'  + result.data[i].lastName+ '</td><td>' + result.data[i].firstName + '</td><td>' + result.data[i].jobTitle + '</td><td>' + result.data[i].email + '</td><td>' + result.data[i].department + '</td><td>' + result.data[i].location + '</td><td data-href="http://www.google.com/"><img class="table_img mx-2" src="venders/image/pen.png" alt="edit image"></td><td><a data-href="http://www.amd.com/"><img class="table_img mx-1" src="venders/image/delete.png" alt="delete image"></a>' + '</td></tr>');
        $('#myTable').append(row);
      //show modal by clicking update button...
     
      $(document.body).on("click", "td[data-href]", function(){
        $("#update_employee").modal("show");
       
      });
      $(document.body).on("click", "a[data-href]", function(){
       //alert("delete!");
      })

         
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

 //get person by id....
 $("#main_id").change(function () {
   $("#searchdata").show();
 $.ajax({
  url: "libs/php/getPersonnel.php",
  type: "POST",
  dataType: "json",
  data: {
    id: $("#main_id").val(),
  },
  success: function (result) {
    console.log(result);
   //  $("#fname").html(result['data']['personnel'][0]['firstName']);
   // console.log($data);
  }

})
});


































