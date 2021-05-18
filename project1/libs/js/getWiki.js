//$(document).ready(function() {
$("#btnwiki").on("click", function () {
  $.ajax({
    url: "libs/php/getWiki.php",
    type: "POST",
    dataType: "json",
    data: {
      q: $("#selcountry").val(),
    },
    success: function (result) {
      console.log(result);

      if (result.status.name == "ok") {
        $("#txtlang").html(result["data"][0]["lang"]);
        $("#txtwiki").html(result["data"][0]["wikipediaUrl"]);
      }
    },
    error: function (jqXHR, textStatus, errorThrown) {
      //error code..
      alert("error");
    },
  });
});

//});
