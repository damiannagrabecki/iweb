require(
    [
        'jquery',
        'slick'
    ],
    function(
        $
    ) {
        $(".related .product-items").not('.slick-initialized').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            dots: false,
            arrows: false,
            infinite: true,
        });
    }
);