let bold = false;
$('<style>.underline { color: blue; }</style>').appendTo('.red');

$(document).ready(function(){
    /* On click: Enlarge the font (120%) */
    $("ol li:nth-child(1)").on("click",function(){
    $("#content").css({"font-size":"120%"})
    })
    
    /* On click: Decrease the font size (80%) */
    $("ol li:nth-child(2)").on("click",function(){
        $("#content").css({"font-size":"80%"})
        })
    
    /* On click: Bold or normalize the green words */
    $("ol li:nth-child(3)").on("click",function(){
        
        $(".green").toggleClass("bold");
       /*  if(bold === false){
            $(".green").css({'font-weight':'bold'});
            bold = true;
        }else if (bold === true){
            $(".green").css({'font-weight':'normal'});
            bold = false;
        } */
    })

    
    /* Click here to underline or normalize the words in red */
    $("ol li:nth-child(4)").on("click",function(){
        $(".red").toggleClass("text-decoration");

       
        
    })
    
    /* On click: Replace the logo with another image */
    
    $("ol li:nth-child(5)").mouseover(function () {    
        $("img").attr("src",("images/koala.jpg"));
    }).mouseout(function () {
        $("img").attr("src",("images/jquery-logo.png"));
    });
    
    /* On hover: Display the URL of links in a tooltip when hovering over links */
    
    $('a').mouseenter(function(){
        $(this).attr("title",$(this).attr("href"))
      });
    
    /* On click: add "Chapter 1:" before the 1st title h2 and "Chapter 2:" before the 2nd title h2 */
    $('ol li:nth-child(7)').one("click", function(){
        $( "<h2>Chapter One: </h2>" ).insertBefore( "#content h2:eq(0)" )
        $( "<h2>Chapter Two: </h2>" ).insertBefore( "#content h2:eq(2)" )
    })
    
});