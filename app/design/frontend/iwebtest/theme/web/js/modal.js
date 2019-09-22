require(
    [
        'jquery',
        'Magento_Ui/js/modal/modal'
    ],
    function(
        $,
        modal
    ) {
        var options = {
            type: 'popup',
            responsive: true,
            title: 'iWeb Modal on e-mail click',
            modalClass: 'custom-modal',
            buttons: [{
                text: $.mage.__('Continue to contact us'),
                click: function () {
                    this.closeModal();
                    $('.iweb-modal').html(" ");
                }
            }]
        };

        // Create HTML Modal
        $('body').prepend('<div class="iweb-modal">This is custom modal after clicking on e-mailto on product view page.</div>');

        var popup = modal(options, $('.iweb-modal'));

        // Open Popup on email link click
        $('.action.mailto.friend').on('click',function () {
            $('.iweb-modal').modal('openModal');
        });
    }
);