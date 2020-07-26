$(document).ready(function() {
    $("#submit").submit(function() {
        var name = document.getElementById("userName");

        if (name != '') {
            alert('Thank you ${name} for your response, you wil receive an email shortly')
        } else(){
            alert('Invalid input')
        }
        event.preventDefault();
    })
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
