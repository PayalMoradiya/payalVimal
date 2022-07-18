<?php 
      include('recaptcha.php');
?>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Gazetteer</title>
    <meta name="author" content="Payal" />
    <meta name="description" content="" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
    />
    <script src="https://www.google.com/recaptcha/api.js" async defer></script>
    
  </head>
  <body>
  
  <form action="" method="post">
    <label for="fname">First name:</label><br>
    <input type="text" id="fname" name="fname" ><br>
    <label for="lname">Last name:</label><br>
    <input type="text" id="lname" name="lname"><br><br>
    <div class="g-recaptcha" data-sitekey="<?php echo $sitekey; ?>"></div>
    <button type="submit" name="submit" onclick="" >submit</button>
  </form>
  </body>
</html>