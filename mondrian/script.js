$(document).ready(function(){

    //trigger when cursor is over each tile
    $(".tile").hover(function(){
        //get a random number from 1 to 20 (since there are approx 20 diffferent colors)
        var randomColor = Math.floor(Math.random() * 20) + 1;  

        //remove any color class
        $(this).removeClass('color1 color2 color3 color4 color5 color6 color7 color8 color9 color10 color11 color12 color13 color14 color15 color16 color17 color18 color19 color20');


        //assign a random color
        $(this).addClass('color'+randomColor); 
    }); 

});