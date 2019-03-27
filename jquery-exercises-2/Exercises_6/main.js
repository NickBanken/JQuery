// Write your solution here

$( "#red,#green,#blue" ).mouseover(function() {
    switch (this.id) {
        case "red":
        $('#text').css({'color':'red'})
        break;

        case "blue":
        $('#text').css({'color':'blue'})
        break;

        case "green":
        $('#text').css({'color':'green'})
        break;

        default:
        $('#text').css({'color':'black'})
        break;
        
    }
  });

  $( "#red,#green,#blue" ).mouseout(function() {
    $("#text").css({"color": "black"})
  });