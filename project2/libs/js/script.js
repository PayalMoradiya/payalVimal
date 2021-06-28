//onclick close modal..
$('.btn_cancle').on('click', function(){
  $('#department_modal').modal("hide");
  $('#add_location_modal').modal("hide");
  $("#updateDepartment_modal").modal("hide");
  $("#updateLocation_modal").modal("hide");
})

//back_btn button click...
$("#back_btn").on('click',function(){
  $("#dashboard_block").show();
  $("#dashboard_block1").show();
  $("#dashboard_block2").show();
  $("#plus_img_department").hide();
  $("#plus_img_location").hide();
  $("#plus_img").hide();
  $("#dropdownMenuButton1").hide();
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
  $("#dropdownMenuButton2").hide();
  $("#plus_img2_department").hide();
  $("#plus_img2_location").hide();
  $("#plus_img2").hide();
  $("#toggle_department").hide();
  $("#toggle_location").hide();
  $("#back_btn1").hide();
  $("#dashboard_btn1").hide();
});
//show and hide employees list table by clicking employees card....
$("#dashboard_block").on('click',function(){
  //add buttons for mobo device...
  if(screen.width <= 600){
    $("#back_btn1").show();
    $("#dropdownMenuButton2").show();
    $("#plus_img2").show();

  }
  $("#toggle_employeeslist").show();
  $("#plus_img").show();
  $("#dropdownMenuButton1").show();
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
   //add buttons for mobo device...
   if(screen.width <= 600){
    $("#plus_img2").hide();
    $("#plus_img2_department").show();
    $("#plus_img2_location").hide();
    $("#dropdownMenuButton2").hide();
  }
  $("#toggle_department").show();
  $("#dashboard_btn").hide();
  $("#back_btn").show();
  $("#dashboard_btn1").hide();
  $("#back_btn1").show();
  $("#plus_img_location").hide();
  $("#plus_img").hide();
  $("#plus_img_department").show();
  $("#dashboard_block").hide();
  $("#dashboard_block1").hide();
  $("#dashboard_block2").hide();

});
//show and hide location table by clicking location card....
$("#dashboard_block2").on('click',function(){
   //add buttons for mobo device...
   if(screen.width <= 600){
    $("#plus_img2").hide();
    $("#plus_img2_department").hide();
    $("#plus_img2_location").show();
    $("#dropdownMenuButton2").hide();
  }
  $("#toggle_location").show();
  $("#dashboard_btn").hide();
  $("#back_btn").show();
  $("#dashboard_btn1").hide();
  $("#back_btn1").show();
  $("#plus_img").hide();
  $("#plus_img_department").hide();
  $("#plus_img_location").show();
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

var add_employee_mobo = document.getElementById("plus_img2");
add_employee_mobo.addEventListener("click", function(){
  $("#employee").modal("show");
});

//show modal by clicking filter button...
var filter_employee = document.getElementById("filter_employeedata");
filter_employee.addEventListener("click", function(){
  $("#filter_employee_data").modal("show");
});

var filter_employee_mobo = document.getElementById("filter_employeedata1");
filter_employee_mobo.addEventListener("click", function(){
  $("#filter_employee_data").modal("show");
});

//show department modal by clicking add button...
var add_department = document.getElementById("plus_img_department");
add_department.addEventListener("click", function(){
  $("#department_modal").modal("show");
});
var add_department2 = document.getElementById("plus_img2_department");
add_department2.addEventListener("click", function(){
  $("#department_modal").modal("show");
});

//show location modal by clicking add button...
var add_location = document.getElementById("plus_img_location");
add_location.addEventListener("click", function(){
  $("#add_location_modal").modal("show");
});
var add_location2 = document.getElementById("plus_img2_location");
add_location2.addEventListener("click", function(){
  $("#add_location_modal").modal("show");
});


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
      $('#no_of_employee').html(result.data.length);

      for (var i=0; i<result.data.length; i++) {

         //table style for mobile....
         if(screen.width <= 600){
          $('#table_header').remove();
         var row = $('<tr class="nosort_data"><td class="data_id ">' + result.data[i].id + '</td><td>'  + result.data[i].lastName + '  ' + result.data[i].firstName + '</td><td class="px-0"><img class="table_img mx-2 info_image" src="venders/image/info.png" alt="info image" ><img class="table_img mx-2 edit_image" src="venders/image/pen.png" alt="edit image"><a><img class="table_img mx-2 delete_image" src="venders/image/delete.png" alt="delete image"></a>' + '</td></tr>');
         $('#myTable').append(row);

        } else {

        var row = $('<tr class="nosort_data"><td class="data_id">' + result.data[i].id + '</td><td>'  + result.data[i].lastName+ '</td><td>' + result.data[i].firstName + '</td><td>' + result.data[i].jobTitle + '</td><td>' + result.data[i].email + '</td><td>' + result.data[i].department + '</td><td>' + result.data[i].location + '</td><td><img class="table_img mx-2 info_image" src="venders/image/info.png" alt="info image" ><img class="table_img mx-2 edit_image" src="venders/image/pen.png" alt="edit image"><a><img class="table_img mx-2 delete_image" src="venders/image/delete.png" alt="delete image"></a>' + '</td></tr>');
        $('#myTable').append(row);

        }
      }  
    },
    error: function (jqXHR, textStatus, errorThrown) {
      //error code..
      alert("error");
    },
  });
  
  //onclick sort button...
  $(".assending").click(function() {
    $.ajax({
      url: "libs/php/getSort.php",
      type: "POST",
      dataType: "json",
      data: {
      //  q: encoded_countryName,
      },
      success: function (result) {
        console.log(result);
        $('.nosort_data').hide();
        for (var i=0; i<result.data.length; i++) {

          //table style for mobile....
          if(screen.width <= 600){
           $('#table_header').remove();
          var row = $('<tr class="nosort_data"><td class="data_id">' + result.data[i].id + '</td><td>'  + result.data[i].lastName + '  ' + result.data[i].firstName + '</td><td class="px-0"><img class="table_img mx-2 info_image" src="venders/image/info.png" alt="info image" ><img class="table_img mx-2 edit_image" src="venders/image/pen.png" alt="edit image"><a><img class="table_img mx-2 delete_image" src="venders/image/delete.png" alt="delete image"></a>' + '</td></tr>');
          $('#myTable').append(row);
 
         } else {
 
         var row = $('<tr class="nosort_data"><td class="data_id">' + result.data[i].id + '</td><td>'  + result.data[i].lastName+ '</td><td>' + result.data[i].firstName + '</td><td>' + result.data[i].jobTitle + '</td><td>' + result.data[i].email + '</td><td>' + result.data[i].department + '</td><td>' + result.data[i].location + '</td><td><img class="table_img mx-2 info_image" src="venders/image/info.png" alt="info image" ><img class="table_img mx-2 edit_image" src="venders/image/pen.png" alt="edit image"><a><img class="table_img mx-2 delete_image" src="venders/image/delete.png" alt="delete image"></a>' + '</td></tr>');
         $('#myTable').append(row);
 
         }
       }  
      },
      error: function (jqXHR, textStatus, errorThrown) {
        //error code..
        alert("error");
      },
    });
  });

    //onclick sort button...
  $(".desending").click(function() {
    $.ajax({
      url: "libs/php/getDesc.php",
      type: "POST",
      dataType: "json",
      data: {
      //  q: encoded_countryName,
      },
      success: function (result) {
        console.log(result);
        $('.nosort_data').hide();
        $('.sort_data').hide();
        for (var i=0; i<result.data.length; i++) {

          //table style for mobile....
          if(screen.width <= 600){
           $('#table_header').remove();
          var row = $('<tr class="nosort_data"><td class="data_id">' + result.data[i].id + '</td><td>'  + result.data[i].lastName + '  ' + result.data[i].firstName + '</td><td class="px-0"><img class="table_img mx-2 info_image" src="venders/image/info.png" alt="info image" ><img class="table_img mx-2 edit_image" src="venders/image/pen.png" alt="edit image"><a><img class="table_img mx-2 delete_image" src="venders/image/delete.png" alt="delete image"></a>' + '</td></tr>');
          $('#myTable').append(row);
 
         } else {
 
         var row = $('<tr class="nosort_data"><td class="data_id">' + result.data[i].id + '</td><td>'  + result.data[i].lastName+ '</td><td>' + result.data[i].firstName + '</td><td>' + result.data[i].jobTitle + '</td><td>' + result.data[i].email + '</td><td>' + result.data[i].department + '</td><td>' + result.data[i].location + '</td><td><img class="table_img mx-2 info_image" src="venders/image/info.png" alt="info image" ><img class="table_img mx-2 edit_image" src="venders/image/pen.png" alt="edit image"><a><img class="table_img mx-2 delete_image" src="venders/image/delete.png" alt="delete image"></a>' + '</td></tr>');
         $('#myTable').append(row);
 
         }
       }  
      },
      error: function (jqXHR, textStatus, errorThrown) {
        //error code..
        alert("error");
      },
    });
  });


    //show info modal by clicking info button ...
    $(document).on("click", ".info_image", function() {
      var edit_data_id = $(this).closest('tr').find('.data_id').text();
    // alert(edit_data_id);

     //get info for select id department...
          $.ajax({
            url: "libs/php/getPersonnel.php",
            type: "POST",
            dataType: "json",
            data: {
              edit_data_id: edit_data_id,
            },
            success: function (result) {
              console.log(result);
              $(".info_firstName").text(result["data"]["personnel"][0]["firstName"]);
              $(".info_lastName").text(result["data"]["personnel"][0]["lastName"]);
              $(".info_jobTitle").text(result["data"]["personnel"][0]["jobTitle"]);
              $(".info_email").text(result["data"]["personnel"][0]["email"]);
              $(".info_department").text(result["data"]["personnel"][0]["departmentID"]); 
              
              $("#info_modal").modal("show");
            },
            error: function (jqXHR, textStatus, errorThrown) {
              //error code..
              alert("error");
            },
           
          });

    });

     //show update modal by clicking edit button ...
     $(document).on("click", ".edit_image", function() {
      var edit_data_id = $(this).closest('tr').find('.data_id').text();
     //alert(edit_data_id);

     //get info for select id department...
          $.ajax({
            url: "libs/php/getPersonnel.php",
            type: "POST",
            dataType: "json",
            data: {
              edit_data_id: edit_data_id,
            },
            success: function (result) {
              console.log(result);
              $("#id_edit").val(result["data"]["personnel"][0]["id"]);
              $("#firstName_edit").val(result["data"]["personnel"][0]["firstName"]);
              $("#lastName_edit").val(result["data"]["personnel"][0]["lastName"]);
              $("#title_edit").val(result["data"]["personnel"][0]["jobTitle"]);
              $("#email_edit").val(result["data"]["personnel"][0]["email"]);
              $("#department_edit").val(result["data"]["personnel"][0]["departmentID"]); 
              
              $("#update_employee").modal("show");
            },
            error: function (jqXHR, textStatus, errorThrown) {
              //error code..
              alert("error");
            },
           
          });  

    });

    //show alert by clicking delete button and deleat data from database ...
    $(document).on("click", ".delete_image", function() {
      var delete_data_id = $(this).closest('tr').find('.data_id').text();
      var confirmation = confirm("Are you sure you want to delete this record?");
     alert(confirmation);
    
     //delete data from database...
     if(confirmation === true){
      $.ajax({
        url: "libs/php/deletePersonnel.php",
        type: "POST",
        dataType: "json",
        data: {
          delete_id: delete_data_id,
        },
        success: function (result) {
          console.log(result);
         // if(confirm('Are you sure you want to delete this record?')){
            $('.data_id').remove('slow');
          //}
        },
        error: function (jqXHR, textStatus, errorThrown) {
          //error code..
          alert("error");
        },
       
      });
     }
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
      $('#no_of_department').html(result.data.length);

      for (var i=0; i<result.data.length; i++) {
        var row = $('<tr><td class="department_id">' + result.data[i].id  + '</td><td>'  + result.data[i].name + '</td><td class="location_padding">' + result.data[i].locationID + '</td><td><img class="table_img editDepartment_image" src="venders/image/pen.png" alt="edit image"> <img class="table2_img delete_department_image" src="venders/image/delete.png" alt="delete image">' + '</td></tr>');
        $('#department_table').append(row);
    }
      
    },
    error: function (jqXHR, textStatus, errorThrown) {
      //error code..
      alert("error");
    },
  });

   //show department update modal by clicking edit button ...
   $(document).on("click", ".editDepartment_image", function() {
    var edit_department_id = $(this).closest('tr').find('.department_id').text();
  // alert(edit_department_id);

   //get info for select id department...
        $.ajax({
          url: "libs/php/getDepartmentByID.php",
          type: "POST",
          dataType: "json",
          data: {
            edit_Department_id: edit_department_id,
          },
          success: function (result) {
            console.log(result);
           $("#d_location").val(result["data"][0]["locationID"]);
            $("#d_name").val(result["data"][0]["name"]);
            $("#d_id").val(result["data"][0]["id"]);
            
            $("#updateDepartment_modal").modal("show");
          },
          error: function (jqXHR, textStatus, errorThrown) {
            //error code..
            alert("error");
          },
         
        });  

  });   

     //show alert by clicking delete button and deleat department data from database ...
     $(document).on("click", ".delete_department_image", function() {
      var delete_department_id = $(this).closest('tr').find('.department_id').text();
      var confirmation = confirm("Are you sure you want to delete this record?");
     alert(confirmation);
    
     //delete data from database...
     if(confirmation === true){
      $.ajax({
        url: "libs/php/deleteDepartmentByID.php",
        type: "POST",
        dataType: "json",
        data: {
          delete_Department_id: delete_department_id,
        },
        success: function (result) {
          console.log(result);
         // if(confirm('Are you sure you want to delete this record?')){
            $('.department_id').remove('slow');
          //}
        },
        error: function (jqXHR, textStatus, errorThrown) {
          //error code..
          alert("error");
        },
       
      });
     }
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
      $('#no_of_location').html(result.data.length);

      for (var i=0; i<result.data.length; i++) {
        var row = $('<tr><td class="location_id">' + result.data[i].id + '</td><td>'  + result.data[i].name + '</td><td><img class="table_img editlocation_image" src="venders/image/pen.png" alt="edit image"> <img class="table2_img delete_location_image" src="venders/image/delete.png" alt="delete image">' + '</td></tr>');
        $('#location_table').append(row);
    }
      
    },
    error: function (jqXHR, textStatus, errorThrown) {
      //error code..
      alert("error");
    },
  }); 

});

    //show location update modal by clicking edit button ...
   $(document).on("click", ".editlocation_image", function() {
    var edit_location_id = $(this).closest('tr').find('.location_id').text();
  // alert(edit_location_id);

   //get info for select id department...
        $.ajax({
          url: "libs/php/getLocationByID.php",
          type: "POST",
          dataType: "json",
          data: {
            edit_Location_id: edit_location_id,
          },
          success: function (result) {
            console.log(result);
            $("#l_name").val(result["data"][0]["name"]);
            $("#l_id").val(result["data"][0]["id"]);
            
            $("#updateLocation_modal").modal("show");
          },
          error: function (jqXHR, textStatus, errorThrown) {
            //error code..
            alert("error");
          },
         
        });  

  });   

  //show alert by clicking delete button and deleat location data from database ...
  $(document).on("click", ".delete_location_image", function() {
    var delete_location_id = $(this).closest('tr').find('.location_id').text();
    var confirmation = confirm("Are you sure you want to delete this record?");
   alert(confirmation);
  
   //delete data from database...
   if(confirmation === true){
    $.ajax({
      url: "libs/php/deleteLocation.php",
      type: "POST",
      dataType: "json",
      data: {
        delete_Location_id: delete_location_id,
      },
      success: function (result) {
        console.log(result);
       // if(confirm('Are you sure you want to delete this record?')){
          $('.location_id').remove('slow');
        //}
      },
      error: function (jqXHR, textStatus, errorThrown) {
        //error code..
        alert("error");
      },
     
    });
   }
  });

     


//search bar...
$('#main_id').on("keyup", function(){

  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("main_id");
  filter = input.value.toUpperCase();

  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[1];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }       
  }

  table1 = document.getElementById("department_table");
  tr1 = table1.getElementsByTagName("tr");
  for (i = 0; i < tr1.length; i++) {
    td1 = tr1[i].getElementsByTagName("td")[1];
    if (td1) {
      txtValue = td1.textContent || td1.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr1[i].style.display = "";
      } else {
        tr1[i].style.display = "none";
      }
    }       
  }

  table2 = document.getElementById("location_table");
  tr2 = table2.getElementsByTagName("tr");
  for (i = 0; i < tr2.length; i++) {
    td2 = tr2[i].getElementsByTagName("td")[1];
    if (td2) {
      txtValue = td2.textContent || td2.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr2[i].style.display = "";
      } else {
        tr2[i].style.display = "none";
      }
    }       
  }
 
});






















