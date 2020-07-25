$(document).ready(function() {
    $("#submit").submit(function() {
        var name = document.getElementById("userName");

        event.preventDefault();
    });
    alert("Thank you " + name + " for your response.");
});

$(document).ready(function(){
    $(".clickable1").click(function(){
        $("#design").fadeOut();
    });
    $(".clickable1").click(function(){
        $("#des-paragraph").fadeIn(1500);
    });
});
$(document).ready(function(){
    $(".clickable2").click(function(){
        $("#development").fadeOut();
    });
    $(".clickable2").click(function(){
        $("#dev-paragraph").fadeIn(1500);
    });
});
$(document).ready(function(){
    $(".clickable3").click(function(){
        $("#product").fadeOut();
    });
    $(".clickable3").click(function(){
        $("#product-paragraph").fadeIn(1500);
    });
});
