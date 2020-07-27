$(document).ready(function() {

    $(".clickable1").click(function(){
        $("#design").fadeOut();
    });
    $(".clickable1").click(function(){
        $("#des-paragraph").fadeIn(1500);
    });

    $(".clickable2").click(function(){
        $("#development").fadeOut();
    });
    $(".clickable2").click(function(){
        $("#dev-paragraph").fadeIn(1500);
    });

    $(".clickable3").click(function(){
        $("#product").fadeOut();
    });
    $(".clickable3").click(function(){
        $("#product-paragraph").fadeIn(1500);
    });

    $('.appear').hover(function () {
    $(this).animate({opacity:'0'});
    },
    function () {
    $(this).animate({opacity:'0.75'});
    });
});
$(document).ready(function(){
    $("#contact-info").submit(function(event){
        var name = $('input#name').val();
        var email = $('input#email').val();
        var message = $ ('textarea#message').val();

        if( name && email ) {
            alert( "Thank you " + name + " for your response we will also like it if you filled the next form.");
        }   else {
            alert("Invalid input kindly fill in the form.");
        }
    });   
});