// Write your solution here

$('#red, #green, #blue').click(function () {
    
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
    }

    
    /* if (this.id == 'red') {
       $('#text').css({'color':'red'})
    }
    else if (this.id == 'green') {
        $('#text').css({'color':'green'})
    }
    else if (this.id == 'blue') {
        $('#text').css({'color':'blue'})
     } */
 });