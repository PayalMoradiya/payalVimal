$("#btnwiki").on("click", function () {
  $.ajax({
    url: "libs/php/getCountryInfo.php",
    type: "POST",
    dataType: "json",
    data: {
      // postalcode: $('#selPostcode').val(),
      q: $("#selcountry").val(),
    },
    success: function (result) {
      console.log(result);

      if (result.status.name == "ok") {
        $("#txtcountryname").html(result["data"][0]["name"]);
        $("#txtcapital").html(result["data"][0]["capital"]);
        $("#txtcurrency").html(result["data"][0]["currencies"][0]["name"]);
        $("#txtsymbol").html(result["data"][0]["currencies"][0]["symbol"]);
      }
    },
    error: function (jqXHR, textStatus, errorThrown) {
      //error code..
      alert("error");
    },
  });
});
