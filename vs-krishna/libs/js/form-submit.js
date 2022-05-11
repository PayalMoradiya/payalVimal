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