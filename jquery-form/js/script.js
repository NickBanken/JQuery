// Solution goes here

$('#form').submit(function(e) {
e.preventDefault();

var name = $('#display-name').val();
var password = $('#pass').val();
var confirm = $('#pass-confirm').val();
var email = $('#email').val();

console.log(name);

$(".error").remove();

if (name.length < 5) {
    $('#display-name').after('<span class="error">This field is required</span>');
    $('#display-name').css("border","1px solid red");
}
else{
    var regex = /^[A-Za-z]+$/;
    var validName = regex.test(name);
    if (!validName) {
        $('#display-name').after('<span class="error">Only letters!</span>');
        $('#display-name').css("border","1px solid red");
    }else{
        $('#display-name').css("border","1px solid green");
    }
    
}



if (password.length < 5) {
    $('#pass').after('<span class="error">This field is required</span>');
    $('#pass').css("border","1px solid red");
}
else{
    $('#pass').css("border","1px solid green");
}



if (confirm.length < 5) {
    $('#pass-confirm').after('<span class="error">This field is required</span>');
    $('#pass-confirm').css("border","1px solid red");
}
else if(password!=confirm){
    $('#pass-confirm').css("border","1px solid red");
    $('#pass-confirm').after('<span class="error">Password does not match!</span>');
}
else{
    $('#pass-confirm').css("border","1px solid green");
}



if (email.length < 5) {
    $('#email').after('<span class="error">This field is required</span>');
    $('#email').css("border","1px solid red");
}
else{
    var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    var validEmail = regex.test(email);
    if (!validEmail) {
        $('#email').after('<span class="error">Enter a valid email</span>');
        $('#email').css("border","1px solid red");
    }
      else{
        $('#email').css("border","1px solid green");
      }
    
}
})