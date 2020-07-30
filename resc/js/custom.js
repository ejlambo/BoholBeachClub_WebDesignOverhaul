(function ($) {
  'use strict'; // Start of use strict

  // FOR THE PRELOADER
  $(window).on('load', function () {
    $('.loading-animation')
      .delay(100)
      .fadeOut('slow', function () {
        $('body').removeClass('noScrollLoad');
      });
    $('#overlay').delay(1000).fadeOut('slow');
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function () {
    $('.navbar-collapse').collapse('hide');
  });

  // Collapse Navbar
  var navbarCollapse = function () {
    if ($('#mainNav').offset().top > 100) {
      $('#mainNav').addClass('navbar-shrink');
      $('.navbar-brand img').attr('src', 'resc/img/BBC_Logo.png');
      $('.navbar-brand img').addClass('imgBrand-shrink');
    } else {
      $('#mainNav').removeClass('navbar-shrink');
      $('.navbar-brand img').removeClass('imgBrand-shrink');
      $('.navbar-brand img').attr('src', 'resc/img/BBC_LogoW.png');
    }
  };

  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);
})(jQuery); // End of use strict
