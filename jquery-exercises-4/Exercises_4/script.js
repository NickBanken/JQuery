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
    bDate = $('#date').val();
    placeB = $('#place').val();
    work = $('#work').val();
    company = $('#company').val();
 
    $(".error").remove();
 
    if (first_name.length < 1) {
      $('#first_name').after('<span class="error">This field is required</span>');
    }
    if (last_name.length < 1) {
      $('#last_name').after('<span class="error">This field is required</span>');
    }


    var date = new Date($('#date').val());
    day = date.getDate();
    month = date.getMonth() + 1;
    year = date.getFullYear();
    if($("#date").val() === "" || year < 1900) {
      $('#date').after('<span class="error">This is invalid</span>');
    }
    


    if (placeB.length < 1) {
      $('#place').after('<span class="error">This field is required</span>');
    }

    if (work.length < 1) {
      $('#work').after('<span class="error">This field is required</span>');
    }

    if (company.length < 1) {
      $('#company').after('<span class="error">This field is required</span>');
    }
   

    $("#intro").html("Hello, My name is " + first_name +" "+last_name+". " + " I was born: "+ bDate+" at "+placeB+". I work as a "+work+" at "+company+".")
    
  });


  $("")

  
