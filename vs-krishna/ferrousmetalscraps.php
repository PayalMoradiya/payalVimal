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
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400&family=Noto+Sans+JP:wght@300;400&display=swap" rel="stylesheet">
    <script src="venders/jquery/jquery-3.6.0.min.js"></script>  
    <link href="venders/bt5/css/bootstrap.min.css" rel="stylesheet" />
    <link href="libs/css/style.css" type="text/css" rel="stylesheet" />
    <link href="libs/css/about.css" type="text/css" rel="stylesheet" />
    <link href="libs/css/slide-show.css" type="text/css" rel="stylesheet" />
    <style>
        .bg-color{
            color:#D3D3D3;
        }
        .card-img-top{
            height:12.5rem;
        }
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
          .about-bg{
              height: 40vh;
          }  
      }
      /* Medium devices (tablets, 768px and up)  */
      @media (min-width: 768px) { 
           /* nav button */
           .navbar-light .navbar-toggler {
              border-color: gray;
            }
            .about-bg{
              height: 70vh;
          }  
      }   
    </style>
</head>
<body>
    <?php 
        include 'nav.php';
    ?>
    <div class="about-bg">
        <div class="container" id="banner-txt-ctr">
                <div class="row banner-txt-ctr align-items-center justify-content-start">
                    <div class="col-md-5 text-white px-3">
                        <h1 class="text-white">Ferrous Metal Scraps</h1>
                    </div>
                </div>
        </div>
    </div>
    <br>
    <br>
    <section class="container">
        <h2 class="bg-dark bg-color">Steel</h2>
        <div class="container ">
            <div class="row g-3">
                <div class="card" style="width: 18rem; margin:10px auto;">
                    <img class="card-img-top" src="venders/image/steel-HMS.png" alt="Card image cap">
                    <div class="card-body">
                        <p class="card-text text-center">HMS 1&2</p>
                    </div>
                </div>
                <div class="card" style="width: 18rem; margin:10px auto;">
                    <img class="card-img-top" src="venders/image/mild-steel-turning.jpg" alt="Card image cap">
                    <div class="card-body">
                        <p class="card-text text-center">Mild Steel Turnings</p>
                    </div>
                </div>
                <div class="card" style="width: 18rem; margin:10px auto;">
                    <img class="card-img-top" src="venders/image/steel-plate.jpg" alt="Card image cap">
                    <div class="card-body">
                        <p class="card-text text-center">Steel Plates</p>
                    </div>
                </div>
            </div>
        </div>
    <br>
    <br>
        <h2 class="bg-dark bg-color">Cast Iron Scrap</h2>
        <div class="container">
            <div class="row">
                <div class="card" style="width: 18rem;  margin:10px auto;">
                    <img class="card-img-top" src="venders/image/Iron-scraps.jpg" alt="Card image cap">
                    <div class="card-body">
                        <p class="card-text text-center">Cast Iron Scrap</p>
                    </div>
                </div>
            </div>
        </div>
    <br>
    <br>
        <h2 class="bg-dark bg-color">Tin</h2>
        <div class="container">
            <div class="row g-3">
                <div class="card" style="width: 18rem;  margin:10px auto;">
                    <img class="card-img-top" src="venders/image/tin-sheet.jpeg" alt="Card image cap">
                    <div class="card-body">
                        <p class="card-text text-center">Tin Sheet Bundles</p>
                    </div>
                </div>
                <div class="card" style="width: 18rem;  margin:10px auto;">
                    <img class="card-img-top" src="venders/image/shredded-tin.jpg" alt="Card image cap">
                    <div class="card-body">
                        <p class="card-text text-center">Shredded Tin Cans</p>
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
    <script src="libs/js/jquery.js" type="application/javascript"></script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p" crossorigin="anonymous"></script>
    <script src="venders/bt5/js/bootstrap.min.js"></script>
</div>
</body>
</html>