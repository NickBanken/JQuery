//Check to see if script is linked properly.
console.log("This script is linked properly")



$(".grow").on("click",function(){
    
     if( $(".rectangle").height() < 100){
        $(".rectangle").height("+=10");
    }
    else{
        $(".rectangle").height("10");
    }
    let height = $(".rectangle").css("height");
    console.log(height)
     
})

$(".green").on("click",function(){
    $(".rectangle").css({"background":"green"});
})

$(".reset").on("click",function(){
    $(".rectangle").css({"background":""});
})

$(".hide").on("click",function(){
    $(".rectangle").hide();
})

$(".show").on("click",function(){
    $(".rectangle").show();
})




 