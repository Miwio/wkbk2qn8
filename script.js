$(document).ready(function(){
// default to unbooked
    $("#status").text("Unbooked");
// mouse over seat
    $(".seat").hover(function(){
        //seat taken
        if ($(this).hasClass("unavailable")) {
            $("#status").text("Taken");
        //seat available
        } else {
            $("#status").text("Available");
        }
        //unbooked when mouseleave
    }, function(){
        $("#status").html("Unbooked");
    });

    
    
    });