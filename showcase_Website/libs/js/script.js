//style for text....
var TxtRotate = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
  };
  
  TxtRotate.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];
  
    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }
  
    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';
  
    var that = this;
    var delta = 300 - Math.random() * 100;
  
    if (this.isDeleting) { delta /= 2; }
  
    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
    }
  
    setTimeout(function() {
      that.tick();
    }, delta);
  };
  
  window.onload = function() {
    var elements = document.getElementsByClassName('txt-rotate');
    for (var i=0; i<elements.length; i++) {
      var toRotate = elements[i].getAttribute('data-rotate');
      var period = elements[i].getAttribute('data-period');
      if (toRotate) {
        new TxtRotate(elements[i], JSON.parse(toRotate), period);
      }
    }
    
  };
  
  //style for navbar...
  var nav = document.querySelector('nav');

  window.addEventListener('scroll', function(){
    if(window.pageYOffset > 100){
      nav.classList.add('bg-dark', 'shadow');
    } else {
      nav.classList.remove('bg-dark', 'shadow');
    }
  });
  
  //popup portfolio...
  
  $('#model').on('click', function(event) {
   // alert('You clicked the Bootstrap Card');
   $(".pop_ups").toggle();
    //var popup_box = document.getElementsByClassName('example');
   // popup_box.style.display = "block";
});


//php mailer....

var email = document.getElementById("submit_btn");

email.addEventListener('click', function(){
  var name = $("#name");
  var email = $("#email");
  var subject = $("#subject");
  var body = $("#body");

    $.ajax({
      url: "libs/php/sendEmail.php",
      method: "POST",
      dataType: "json",
      data:{
        name: name.val(),
        email: email.val(),
        subject: subject.val(),
        body: body.val()
      }, success: function(response){
        console.log(response);
        $('#myForm')[0].reset();
        $('.sent_notification').text("Message sent successfully.");
      }
    });

});

//nav button style....

var nav_button = document.getElementById("nav_btn");
var style1 = document.getElementById("nav-items");

nav_button.addEventListener('click', function(){
style1.style.backgroundColor = "black";
});

//portfolio modal....

var dismiss = document.getElementById("model");
dismiss.addEventListener("click", function () {
  $("#covid").modal("hide");
});
