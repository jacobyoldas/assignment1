$( document ).ready(function() {

    console.log( "ready!" );

    
    
    $( ".changebtn1" ).click(function() {
        console.log("change btn 1 clicked");
        $(".box1").css({"background":"brown","border":"2px solid pink"});
    });

    $( ".changebtn2" ).click(function() {
        console.log("change btn 2 clicked");
        $(".box2").css({"background":"yellow","border":"2px solid yellow"});
    });

    $( ".changebtn3" ).click(function() {
        console.log("change btn 3 clicked");
        $(".box3").css({"background":"black","border":"2px solid black"});
    });

    $( ".changebtn4" ).click(function() {
        console.log("change all btn clicked");
        $(".box1").css({"background":"green","border":"2px solid red"});
        $(".box2").css({"background":"red","border":"2px solid blue"});
        $(".box3").css({"background":"pink","border":"2px solid black"});
    });


     
    $( ".hidebtn1" ).click(function() {
        console.log("hide btn 1 clicked");
        $(".box1").css({"background":"white","border":"2px solid white"});
    });

    $( ".hidebtn2" ).click(function() {
        console.log("hide btn 2 clicked");
        $(".box2").css({"background":"white","border":"2px solid white"});
    });

    $( ".hidebtn3" ).click(function() {
        console.log("hide btn 3 clicked");
        $(".box3").css({"background":"white","border":"2px solid white"});
    });

    $( ".hidebtn4" ).click(function() {
        console.log("change all btn clicked");
        $(".box1").css({"background":"white","border":"2px solid white"});
        $(".box2").css({"background":"white","border":"2px solid white"});
        $(".box3").css({"background":"white","border":"2px solid white"});
    });
    


    $( ".resetcolors" ).click(function() {
        console.log("reset colors clicked");
        $(".box1").css({"background":"red","border":"2px solid black"});
        $(".box2").css({"background":"blue","border":"2px solid yellow"});
        $(".box3").css({"background":"lime","border":"2px solid purple"});
    });

    $( ".showall" ).click(function() {
        console.log("show all btn clicked");
        $(".box1").css({"background":"red","border":"2px solid black"});
        $(".box2").css({"background":"blue","border":"2px solid yellow"});
        $(".box3").css({"background":"lime","border":"2px solid purple"});
    });



});