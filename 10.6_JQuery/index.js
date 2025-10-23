$("h1").css("color", "Blue");

$(document).keypress(function(event) {
    $("h1").text(event.key);
});