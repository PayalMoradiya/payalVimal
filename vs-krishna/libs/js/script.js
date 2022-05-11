
 /* 
  //style for navbar...
  var nav = document.querySelector('nav');

  window.addEventListener('scroll', function(){
    if(window.pageYOffset > 100){
      nav.classList.add('bg-dark', 'shadow');
    } else {
      nav.classList.remove('bg-dark', 'shadow');
    }
  });
  */

//new form......

jQuery('#frmContactus').on('submit',function(e){
		jQuery('#msg').html('');
		jQuery('#submit').html('Please wait');
		jQuery('#submit').attr('disabled',true);
		jQuery.ajax({
			url:'libs/php/submit.php',
			type:'post',
			data:jQuery('#frmContactus').serialize(),
			success:function(result){
				jQuery('#msg').html(result);
				jQuery('#submit').html('Submit');
				jQuery('#submit').attr('disabled',false);
				jQuery('#frmContactus')[0].reset();
			}
		});
		e.preventDefault();
	  });


//nav button style....

var nav_button = document.getElementById("nav_btn");
var style1 = document.getElementById("nav-items");

nav_button.addEventListener('click', function(){
style1.style.backgroundColor = "black";
});



