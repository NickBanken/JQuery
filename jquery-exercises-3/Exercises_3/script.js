//Check to see if script is linked properly.
console.log("This script is linked properly")

var number = 1 + Math.floor(Math.random() * 100);
let tries = 0;

//Write your JS code here...

console.log(number);

    
$(".guess").click(function(){
    let guessedNum = Number($("#guesser").val());
    console.log(typeof guessedNum);
    tries++;
    
    
    if(guessedNum === number){
        $('.hint').html(guessedNum + " is correct!")
            if(alert("You guessed it! You need "+tries+" tries to guess it!")){

            }
            else {
            window.location.reload();
            }
        }else if(guessedNum > number){
            $('.hint').html(guessedNum + " is too High!")
        }else if(guessedNum < number){
            $('.hint').html(guessedNum + " is too low!")
        }
    
});

$('#guesser').keypress(function (e) {
    var key = e.which;
    if(key == 13)  // the enter key code
     {
       $('.guess').click();
       return false;  
     }
   });    




 