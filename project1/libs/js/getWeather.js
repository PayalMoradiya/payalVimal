
$("#btnwiki").on("click", function () {
  $.ajax({
    url: "libs/php/getWeather.php",
    type: "POST",
    dataType: "json",
    data: {
      q: $("#selcountry").val(),
    },
    success: function (result) {
      console.log(result);

      if (result.status.name == "ok") {
        $("#txtclouds").html(result["data"]["weather"][0]["description"]);
        $("#txttemp").html(result["data"]["main"]["temp"]);
        $("#txthum").html(result["data"]["main"]["humidity"]);
      }
    },
    error: function (jqXHR, textStatus, errorThrown) {
      //error code..
      alert("error");
    },
  });
});


