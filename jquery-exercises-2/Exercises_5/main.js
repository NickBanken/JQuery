// Write your solution here

$("input").focus(function(){
    $("input").css({'border':'1px solid green' ,'outline':'none'});
  });

  $("input").focusout(function(){
    $("input").css({'border':'1px solid red' ,'outline':'none'});
  });