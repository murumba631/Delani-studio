$(document).ready(function() {
    $("#submit form").submit(function() {
        var name = document.getElementById("userName");

        event.preventDefault();
    });
    alert("Thank you " + name + " for your response.");
});

