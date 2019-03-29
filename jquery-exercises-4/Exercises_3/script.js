//Check to see if script is linked properly.
console.log("This script is linked properly")
    var first_name = $('#first_name').val();
    var last_name = $('#last_name').val();
    var email = $('#email').val();
    var telephone = $('#telephone').val();

$('#first_form').submit(function(e) {
    e.preventDefault();
    first_name = $('#first_name').val();
    last_name = $('#last_name').val();
    email = $('#email').val();
    telephone = $('#telephone').val();
 
    $(".error").remove();
 
    if (first_name.length < 1) {
      $('#first_name').after('<span class="error">This field is required</span>');
    }
    if (last_name.length < 1) {
      $('#last_name').after('<span class="error">This field is required</span>');
    }
    if (email.length < 1) {
      $('#email').after('<span class="error">This field is required</span>');
    } else {
    var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    var validEmail = regex.test(email);
      if (!validEmail) {
        $('#email').after('<span class="error">Enter a valid email</span>');
      }
    }

    if(telephone.length>=10){
    var regEx = /[0-9-()\s ]+/;
    var validTel = regEx.test(telephone);
      if (!validTel) {
        $('#telephone').after('<span class="error">Enter a valid number</span>');
      }

    }
    else{
        $('#telephone').after('<span class="error">Thats not a valid number</span>');
    }
    
  });
