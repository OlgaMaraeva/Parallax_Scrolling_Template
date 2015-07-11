$(document).ready(function () {
    // root layout
    var list = $('nav .navi'),
        parts = $('.link'),
        modul = $('.module'),
        anchor,
        anchorlink,
        pos,
        $window = $(window),
        height = $(window).height();

    parts.css({
        "height": height
    });
    modul.css({
        "height": height
    });

    $('a[href*=#]').on('click', function (e) {
        anchor = $(this);
        list.removeClass('active');
        anchorlink = $(anchor.attr('href'));

        anchorlink.each(function () {
            anchor.addClass('active');
            pos = $(this).offset().top;
            if ($window.scrollTop() < pos || $window.scrollTop() > pos) {
                $('html, body').stop().animate({
                    scrollTop: pos
                }, 1000);
                e.preventDefault();
            }
        });
    });

    $window.scroll(function (event) {
        var parallax = $(".parallax"),
            speed = 0.5;
        parallax.each(function () {
            var windowYOffset = window.pageYOffset,
                elBackgrounPos = "50% " + (windowYOffset * speed) + "px";
            $(this).css({
                "backgroundPosition": elBackgrounPos
            });
        });
    });

});