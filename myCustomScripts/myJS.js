function AnimateRotate(d){
    $({deg: 0}).animate({deg: d}, {
        step: function(now, fx){
            $(".homeIcon").css({
                 transform: "rotate(" + now + "deg)"
            });
        }
    });
}

AnimateRotate(360);