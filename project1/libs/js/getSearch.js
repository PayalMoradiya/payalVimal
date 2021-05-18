$("#btnwiki").on("click", function () {
  $.ajax({
    url: "libs/php/getSearch.php",
    type: "POST",
    dataType: "json",
    data: {
      // postalcode: $('#selPostcode').val(),
      q: $("#selcountry").val(),
    },
    success: function (result) {
      console.log(result);

      if (result.status.name == "ok") {
        $("#txtcontinentcode").html(result["data"][0]["continentCode"]);
        $("#txttop").html(result["data"][0]["toponymName"]);
        $("#txtlat").html(result["data"][0]["lat"]);
        $("#txtlng").html(result["data"][0]["lng"]);
        $("#txtpopulation").html(result["data"][0]["population"]);
        $("#txtcountrycode").html(result["data"][0]["countryCode"]);
        $("#txtgeoname").html(result["data"][0]["geonameId"]);
      }
    },
    error: function (jqXHR, textStatus, errorThrown) {
      //error code..
      alert("error");
    },
  });
});
