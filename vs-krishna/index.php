
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
    <link href="libs/css/slide-show.css" type="text/css" rel="stylesheet" />
    <link href="libs/css/about.css" type="text/css" rel="stylesheet" />
    <link href="libs/css/style.css" type="text/css" rel="stylesheet" />
    <style>
      /* Caption text Slide Show*/
      .text1{
        color: #f2f2f2;
        font-size: 30px;
        padding: 8px 12px;
        position: absolute;
        bottom: 8px;
        width: 100%;
        text-align: center;
        font-weight: bold;
      }
      .nav-link{
        margin: 0 10px;
      }
      .main_heading{
        position: absolute;
        top: 80px;
        margin-left: 160px;
        width: 250px;
        color:darkblue;
        font-weight:bold;
      }
      .mail-header{
        margin-left:110px;
        margin-right:40px;
      }
      a{
        text-decoration:none;
      }
      a.type-name-hover{
        color:black;
        font-weight: bold;
      }
      a.type-name-hover:hover{
        color:#bf0000;
      }
      #abt-text{
        text-align: left;
        margin-bottom: 10px;
      }
      /* footer */
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
      .logo-header{
          width:150px;
          height:140px;
          margin-bottom: 10px;
      }
      .logo-footer{
          width:150px;
          height:120px;
          margin-bottom: 10px;
      }
       /* X-Small devices (portrait phones, less than 576px)  */
       @media only screen and (max-width: 575px) { 
                /*  about us index page image style */
            img.about_us_img{
                max-width: 100%;
                padding-right:0px;
                height: 30vh;
                margin-bottom:30px;
            }
            #abt-text{
              text-align: center;
              margin-bottom: 10px;
            }
            .type{
              border-right:none;
            }
            .slide-show-bg-img{
              height:300px;
            }
            /* mobile no and email style header */
            .mail-header{
              margin-left:0px;
              margin-right:0px;
            }
            .mobo-mail-middle{
              text-align: center;
            }
            .email-header{
              margin: 0px 115px;
            }
            /* logo and name style  */
            .vs-logo{
              text-align: center;
            }
            .main_heading{
              position: relative;
              top: 0px;
              margin-left: 55px;           
            }
            /* nav button */
            .navbar-light .navbar-toggler {
              border-color: gray;
            }
        }
        /* Medium devices (tablets, 768px and up)  */
          @media (min-width: 768px) and (max-width: 900px) { 
            img.about_us_img{
                width: 100%;
                padding-right:0px;  
                margin-bottom:30px;
                height:auto;
            }
            .slide-show-bg-img{
              height:400px;
            }
            /* nav button */
           .navbar-light .navbar-toggler {
              border-color: gray;
            }
            /* mobile no and email header  */
            .mail-header{
              margin-left: 50px;
              margin-right: 40px;
            }
            /* about us section of home page */
            #abt-text{
              margin-top:30px;
            }
            img.about_us_img{
              height: 100%;
              max-width: 380px;
              margin-bottom:0px;
            }
            .img-center, #abt-text{
              text-align: center;
            }
            .mobo-mail-middle{
              text-align: center;
            }
            .main_heading{
              top: 105px;
            }
          }
          /* Medium devices (tablets, 768px and up)  */
          @media (min-width: 901px) { 
            .slide-show-bg-img{
              height:500px;
            }
            .about_us_img{
              margin-top:10px;
              height: 260px;
              width: 270px; 
            }
            
          }
          
    </style>
</head>

<body>
  <header>
    <div class="bg-secondary text-white">
      <div class="row my-2 " style="justify-content: center; line-height:25.5px;">
        <div class="col-12 col-md-6 col-lg-6 mobo-mail-middle">
          <a class="mail-header text-white">+49 15166304514</a>
          <a href="mailto:vskrishna@gmail.com" class=" email-header text-white">vskrishna@gmail.com </a>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row" style="justify-content: center;">
        <div class="col-12 col-md-6 col-lg-6 vs-logo">
            <img src="venders/image/vs-logo.png" class="logo-header" />
            <h4 class="main_heading">VS KRISHNA IMPORT & EXPORT</h4>
        </div>
      </div>
    </div>
  </header>
  <?php include 'nav.php';?>
      <!-- Slide show -->
<section id="home" class="slideshow-container">

    <div class="mySlides fade">
      <img src="venders/image/Copper-Millberry.jpg" class="slide-show-bg-img" style="width:100%">
      <div class="text1">COPPER MILLBERRY</div>
    </div>

    <div class="mySlides fade">
      <img src="venders/image/tin-sheet.jpeg" class="slide-show-bg-img" style="width:100%">
      <div class="text1">TIN SHEET</div>
    </div>

    <div class="mySlides fade">
      <img src="venders/image/Al-Ingots.jpg" class="slide-show-bg-img" style="width:100%">
      <div class="text1">ALUMINIUM INGOTS</div>
    </div>

    <div class="mySlides fade">
      <img src="venders/image/brass-honig.jpg" class="slide-show-bg-img" style="width:100%">
      <div class="text1">BRASS HONEY</div>
    </div>

    <div class="mySlides fade">
      <img src="venders/image/Iron-scraps.jpg" class="slide-show-bg-img" style="width:100%">
      <div class="text1">CAST IRON SCRAP</div>
    </div>
</section>
<br>

<div style="text-align:center">
  <span class="dot"></span> 
  <span class="dot"></span> 
  <span class="dot"></span>
  <span class="dot"></span>  
  <span class="dot"></span> 
</div>

<br>
<br>

<section id="about-us" class="featured-services service-img-list">
  <div class="container">
    <div class="row">
        <div class="col-lg-3 col-sm-12">
            <div class="img-center">
                <img src="venders/image/images-1.jfif" class="about_us_img "> 
            </div>
        </div>
      <div class="col-lg-9">
        <div class="custom-heading service-item">
            <h2 class="text-dark" id="abt-text">About Us</h2>
            <p>We procure all kind of scrap metal across the globe. We are equipped with extensive procurement
experience and been focusing solely on ferrous and non-ferrous scrap. We have strong network of 
suppliers including the international collaborations from Europe, Middle East, USA and Asia. We have 
been working with the most reputed businesses in the scrap industry, many of whom have been in the 
metal industry since last 20 years. We have also partnered with the several yards who process and 
export their scrap metal to our group of companies. As a result, VS Krishna Group has been able to 
establish its reputation as a reliable and most trusted business partner within a short period of time.</p><p>We are convinced that trust is the base and prerequisite for a successful deal. Of course, belonging 
documents, certificates and all other necessary forms are important to grant security and reliability in 
business. However, we strive to make everything as easy as possible to focus on our main aim: 
generating win-win-situations for all.</p>
          <a href="about.php"> READ MORE</a>

</section>
<br>
<br>

<section class="our-services">
  <div class="container">
      <div class="custom-heading">
        <h2 class="text-center text-dark">OUR PRODUCT & SERVICES</h2>
        <p>We buy the scrap metal according to the European Steel Scrap Specifications, US-American ISRI 
Specifications and Russian GOST Norms across the world. Please write us the short inquiry <a href="contact.php">here</a> if you have any business solution to generate the win-win for both sides.</p>
      </div>
      <div class="row">
        <div class="col-lg-6 g-3">
          <div class="content">
            <div class="row">
              <div class="col-md-3">
                <div class="type text-center">
                    <img src="venders/image/logo.jfif" class="mt-2 mb-2" style="width: 65px;">
                </div>
              </div>
              <div class="col-md-9">
                  <h3 class="type-name"><a href="ferrousmetalscraps.php" class="type-name-hover">Ferrous Metal Scraps</a></h3>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-6 g-3">
          <div class="content">
            <div class="row">
              <div class="col-md-3">
                <div class="type text-center">
                    <img src="venders/image/logo.jfif" class="mt-2 mb-2" style="width: 65px;">
                </div>
              </div>
              <div class="col-md-9">
                  <h3 class="type-name"><a href="non_ferrousmetalscraps.php" class="type-name-hover">Non Ferrous Scraps</a></h3>
              </div>
            </div>
          </div>
        </div>
      </div>  
  </div>
</section>

<br>
<br>


<?php
  include 'footer.php';
?>




      
    <div id="preloader">
        <script src="libs/js/slide-show.js" type="text/javascript"></script>
        <script src="libs/js/jquery.js" type="application/javascript"></script>
        
        <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p" crossorigin="anonymous"></script>
        <script src="venders/bt5/js/bootstrap.min.js"></script>
    </div>
</body>
</html>