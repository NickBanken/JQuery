//Check to see if script is linked properly.
console.log("This script is linked properly")

let count = 0;
let pick = "____";
let lost =0;
let win =0;

let options = ["rock","paper","scissors"];
$(".pResults").html("<strong>You</strong> picked: "+pick+".");
$(".win").html("Win: "+win+"!");
$(".lose").html("lost: "+lost+"!");


//Write your JS code here...


    
$(".rock").on("click",function(){
    pick = "rock";
    $(".pResults").html("<strong>You</strong> picked: "+pick+".");
    console.log(pick);
});
$(".scissors").on("click",function(){
    pick = "scissors";
    $(".pResults").html("<strong>You</strong> picked: "+pick+".");
    console.log(pick);
});
$(".paper").on("click",function(){
    pick = "paper";
    $(".pResults").html("<strong>You</strong> picked: "+pick+".");
    console.log(pick);
});

$(".reset").on("click",function(){
    $(".cResults").html("The <strong>Computer</strong> picked:____")
    $(".pResults").html("<strong>You</strong> picked: "+pick+".");
    $(".wl").html("Result: ____");
})

$(".play").on("click",function(){
    if(pick!=="____"){
        let computer = options[Math.floor(Math.random()*options.length)];

        $(".pResults").html("<strong>You</strong> picked: "+pick+".");
        $(".cResults").html("The <strong>Computer</strong> picked: "+computer+".");

        if(pick === "scissors"){
            switch (computer){
                case "scissors":
                $(".wl").html("Result: Draw!");
                pick = "____";
                break;

                case "paper":
                $(".wl").html("Result: Win!");
                win++;
                pick = "____";
                break;

                case "rock":
                lost++;
                $(".wl").html("Result: Lose!");
                pick = "____";
                break;
            }
        }
        if(pick === "rock"){
            switch (computer){
                case "scissors":
                $(".wl").html("Result: Win!");
                win++;
                pick = "____";
                break;

                case "rock":
                $(".wl").html("Result: Draw!");
                pick = "____";
                break;

                case "paper":
                $(".wl").html("Result: Lose!");
                lost++;
                pick = "____";
                break;
            }
        }
        if(pick === "paper"){
            switch (computer){
                case "scissors":
                $(".wl").html("Result: Lose!");
                lost++;
                pick = "____";
                break;

                case "rock":
                $(".wl").html("Result: Win!");
                win++;
                pick = "____";
                break;

                case "paper":
                $(".wl").html("Result: Draw!");
                pick = "____";
                break;
            }
        }
    }
    else(
        alert("Please select an option")
    )
    $(".win").html("Win: "+win+"!");
    $(".lose").html("lost: "+lost+"!");
})





/* function win(){
    win++;
    
}

function lose(){
    lose++;
    
} */