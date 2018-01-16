$(document).ready(function () {
    $('.slider-wrapper').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true
    })
    $('.recent-wrapper').slick({
        dots: false,
        infinite: true,
        speed: 200,
        variableWidth: true,
        cssEase: 'linear',
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    variableWidth: false,
                    slidesToScroll:1
                }
            }
        ]
    });
});

