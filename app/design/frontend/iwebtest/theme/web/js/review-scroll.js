require(
    [
        'jquery'
    ],
    function(
        $
    ) {
        const reviewLInk = $('.reviews-actions .action.view');
        const reviews = $('#reviews');
        
        reviewLInk.on('click', function (e) {
            e.preventDefault();
            $('html, body').animate({
                scrollTop: reviews.offset().top,
            }, 100, 'linear')
        });
    }
);