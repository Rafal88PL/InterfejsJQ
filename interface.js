$('.interface').on("click", function(){
    // console.log("działa");

    if($(this).hasClass("orange")){
        console.log("prawda w pomarańczowy");
        // $('body').toggleClass("orange");
        $('body').css("background-color", "orange");
        $('p').css({
            "font-size": "100px",
            "color": "black",
        })
        }

    if($(this).hasClass("green")){
        console.log("prawda w zielony")
        $('body').css("background-color", "green");
        $('p').css({
            "font-size": "130px",
            "color": "blue",
        })
    }

    if ($(this).hasClass("increase")){
        console.log("prawda plus");
        $('.text').animate({
            "font-size": "+=2",
            "right": "-=20px"
        }, 400)
    }

    if ($(this).hasClass("move")) {
        console.log("prawda minus");
        $('.text').animate({
            "font-size": "-=2",
            "left": "+=15px"
        }, 400)
    }
})