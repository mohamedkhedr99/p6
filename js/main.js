$(function () {
    "use strict";
    //Change The Page Scroll
    $('body').niceScroll({ cursorcolor: '#333' });

    // Start fixed navbar
    $(window).bind('scroll', function () {
        if ($(window).scrollTop() > 50) {
            $('.navbar-section').addClass('fixed-top');
        } else {
            $('.navbar-section').removeClass('fixed-top');
        }
    });
    // clinics fade in and out
    $(window).resize(function () {
        if ($(this).width() > 992) {
            $('.sidepar').show();
        } else {
            $('.sidepar').hide();
        }
    });

    $('.show-clinics').click(function () {
        $('.sidepar').fadeToggle();
    });
});