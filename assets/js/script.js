$(window).scroll(function () {
    if ($(window).scrollTop() >= 0) {
        $('header').addClass('navbar-sticky');
        $('.nav-content-target').addClass('nav-content-sticky').removeClass('nav-content');
        $('.nav-login-target').addClass('nav-login-sticky').removeClass('nav-login');

    }
    if ($(window).scrollTop() < 1) {
        $('header').removeClass('navbar-sticky');
        $('.nav-content-target').removeClass('nav-content-sticky').addClass('nav-content');
        $('.nav-login-target').removeClass('nav-login-sticky').addClass('nav-login');
    }
});