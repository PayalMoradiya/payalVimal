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
        /* Enquiry msg  */
        #msg{
            margin-top:20px;
            margin-bottom:10px;
            font-size: 25px;
            color:gray;
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
        .contact-us{
            margin-left:auto;
            margin-right:auto;
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
    <div class="about-bg ">
        <div class="container" id="banner-txt-ctr">
                <div class="row banner-txt-ctr align-items-center justify-content-start">
                    <div class="col-md-5 text-white px-3">
                        <h1 class="text-white">Contact Us</h1>
                    </div>
                </div>
        </div>
    </div>
    
    <section id="contact-us" class="form">
    <div class="container">
        <div class="row form-title">
        <span id="msg"></span>
        <div class="col-xl-6 col-xl-offset-6 contact-us">
            <div class="custom-heading mt-3">
            <h3>REQUEST A QUICK QUOTE</h3>
            </div>
            <p>Please fill in the contact form to offer the ferrous & non-ferrous metal scrap to VK Krishna import & export.</p>

            <div class="request-form container">
            <form action="" id="frmContactus" method="post" novalidate="novalidate">
            <div class="row">
                <div class="col-lg-6">
                    <input class="form-control mb-2" type="text" name="name" value="" size="40" aria-required="true" aria-invalid="false" placeholder="Your name here">
                </div>
                <div class="col-lg-6">
                <input class="form-control mb-2" type="email" name="email" value="" size="40" aria-required="true" aria-invalid="false" placeholder="Your email">
                </div>
                <div class="col-lg-6">
                    <input class="form-control mb-2" type="text" name="subject" value="" size="40" aria-invalid="false" placeholder="Subject">
                </div>

                <div class="col-lg-6">
                    <input class="form-control mb-2" type="text" name="phone" value="" size="40" aria-required="true" aria-invalid="false" placeholder="Phone">
                </div>
                <div class="col-xs-12">
                <textarea class="form-control mb-3" name="comment" cols="40" rows="4" aria-invalid="false" placeholder="Your message"></textarea>
                </div>
                <div class="col-xs-12 mb-3">
                <button type="submit" class="btn btn-primary" name="submit" id="submit">Submit</button>
                </div>
            </div>
            </form>
            </div>
        </div>
        </div>
    </div>

    </section>

   
    <?php
        include 'footer.php';
    ?>    
       
    <div id="preloader">
        <script src="libs/js/jquery.js" type="application/javascript"></script>
        <script src="libs/js/form-submit.js" type="application/javascript"></script>
        <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p" crossorigin="anonymous"></script>
        <script src="venders/bt5/js/bootstrap.min.js"></script>
    </div>
</body>
</html>