$(".h12").on("mouseover", function(){
$(".h12").css("color", "white");
});



$(".h12").on("mouseout", function(){
    $(".h12").css("color", "grey");
    });


    $(".feat").on("mouseover", function(params) {
        $(this).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    });


    $(".ic").on("mouseover", function(){
        $(this).css("color", "grey");
            });
        
            $(".ic").on("mouseout", function(){
                $(this).css("color", "white");
                    });