//Check to see if script is linked properly.
console.log("This script is linked properly")

let expens = 18;
let insurance = 7;
let contri = 5;

//Write your JS code here...

let totalCost = expens+insurance+contri;

    //function to calculate salary
$(".calc").click(function(){
    //get the inputs
  let start =  Number($("#salary").val());
  let gender = Number($("#gender").val());
  let child = Number($("#children").val());

  //check childs
  if(child === 3){
      totalCost = totalCost -1;
  }else if(child === 4){
      totalCost = totalCost - 2;
  }

  //check gender
  if(gender === 2){
    totalCost = totalCost -2;
    }

    //formula to calculate end result
    let result = start - ((start/100)*totalCost);

    //print it to html
    $(".salary").html("€"+result)
    
    //reset the totalCost
    totalCost = expens+insurance+contri;

  
});
