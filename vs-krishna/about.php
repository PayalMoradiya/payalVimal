<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="author" content="Payal" />
    <meta name="description" content="" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
    />
    <title>VS Krishna Import & Export</title>
    <link href="favicon.ico.png" rel="icon" />
    
    <!--Google fonts-->
<link rel="preconnect" href="https://fonts.gstatic.com">
<link href="https://fonts.googleapis.com/css2?family=Verdana:wght@300;400&family=Noto+Sans+JP:wght@300;400&display=swap" rel="stylesheet">
    <script src="venders/jquery/jquery-3.6.0.min.js"></script>  
    <link href="venders/bt5/css/bootstrap.min.css" rel="stylesheet" />
    <link href="libs/css/about.css" type="text/css" rel="stylesheet" />
    <link href="libs/css/slide-show.css" type="text/css" rel="stylesheet" />
    <link href="libs/css/style.css" type="text/css" rel="stylesheet" />
    <style>
       /* footer */
       a{
        text-decoration:none;
      }
      .menu{
        list-style-type: square;
        color:#D3D3D3;
      }
      .menu-info{
        color:#D3D3D3;
      }
      .menu-info:hover{
        color:white;
      }
      .widget-title{
        text-align: left;
      }
      .logo-footer{
          width:150px;
          height:120px;
          margin-bottom: 10px;
      }
      #banner-txt-ctr{
            height:100%;
        }
        .banner-txt-ctr{
            height:100%;
        } 

       /* X-Small devices (portrait phones, less than 576px)  */
       @media only screen and (max-width: 575px) { 
           /* nav button */
           .navbar-light .navbar-toggler {
              border-color: gray;
            }
            #about-bg{
              height: 40vh;
          } 
            
       }
       /* Medium devices (tablets, 768px and up)  */
      @media (min-width: 768px) { 
           /* nav button */
           .navbar-light .navbar-toggler {
              border-color: gray;
            }
            #about-bg{
                height:70vh;
            }
      } 
    </style>
</head>


<body>
    <?php 
        include 'nav.php';
    ?>
    <div class="about-bg" id="about-bg">
        <div class="container" id="banner-txt-ctr">
                <div class="row banner-txt-ctr align-items-center justify-content-start">
                    <div class="col-md-5 text-white px-3">
                        <h1 class="text-white">About Us</h1>
                    </div>
                </div>
        </div>
    </div>
    
    <section class="container">
        <div class="row">
            <div class="col-lg-12">
                <h3 class="mt-3 mb-2">OUR COMPANY</h3>
                <p>VS Krishna Import and export, located western part of India, is focused on trading the metal scraps around the world. We procure where we can get the best products or according to your preferences and deliver the goods whenever you want. No matter what kind of demand or solution you have for us, just contact us <a href="contact.php">here</a>. We will clear the path and convert it to a business deal.</p>
                <p>We strongly believe in long term business relation with our suppliers and always strive for the import of all kinds of the scrap metal across the world. Whatever you want to sell from scrap industry, we make it possible with our long-standing experience and knowledge in conducting business with countries like United Arab Emirates, Germany, Poland, USA, Belgium etc. Our trusted partners there are also well-acquainted with trading with the Western world.</p>
                <p>If required, we can arrange and manage the logistics solutions favouring the environment to make the successful business deal.</p>
            </div>

        <?php  
            include 'test.php';
            
        ?>
        </div>
    </section>
   
    <?php
        include 'footer.php';
    ?>    
       
    <div id="preloader">
        <script src="libs/js/jquery.js" type="application/javascript"></script>
        <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p" crossorigin="anonymous"></script>
        <script src="venders/bt5/js/bootstrap.min.js"></script>
    </div>
</body>
</html>