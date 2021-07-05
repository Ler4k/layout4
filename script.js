$(document).ready(function () {
    $('.dev-block').slick({
        dots: false,
        arrows: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 1185,
                settings: {
                    dots: true,
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },

            {
                breakpoint: 750,
                settings: {
                    dots: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
    $('.reply-slider').slick({
        slidesToShow: 1,
        arrows:false,
        dots:true,
        infinite: true,
        speed: 1000,
        fade: true,
        cssEase: 'linear',
        autoplay: true,
        autoplaySpeed: 10000,
    });
    $('.ment-slider').slick({
        slidesToShow: 1,
        arrows:false,
        dots:true,
        autoplay: true,
        autoplaySpeed: 10000,
    })
});
