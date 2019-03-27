//Check to see if script is linked properly.
console.log("This script is linked properly")

let count = 0;
//Write your JS code here...


    
$(".plus").click(function(){
    count++;
    $(".form-control").attr("value", count);
});


$(".minus").click(function(){
    count--;
    $(".form-control").attr("value", count);
});

 