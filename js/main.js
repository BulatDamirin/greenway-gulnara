$('#header').css('height', $(window).height());
$(window).on('resize', function() {
    $('#header').css('height', $(window).height());
});
new WOW({
    offset: 0,
    mobile: true
}).init();

if ($(window).width() <= 528) {
    let speed = 200;
    $('.fadeInUp').each(function(elem){
        $( this ).data('wow-delay', 0);
    });
}

$(document).on('DOMContentLoaded', function() {

    let speed = 700;
    if ($(window).width() <= 528) {
        speed = 200;
    }

    $('.slides').slick({
        dots: true,
        speed: speed,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 20000,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 528,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
        ]
    });

    $('.slick-arrow').empty();
    $('.slick-prev').html('<img class="arrow-svg" src="img/back.svg">');
    $('.slick-next').html('<img class="arrow-svg" src="img/next.svg">');
    $('.slick-dots button').empty();

});


