/* Load jQuery.
------------------------------------------------*/
jQuery(document).ready(function ($) {
  var menu = $('#header'); // Replace with your menu's class or ID
  // Mobile menu.
  $('.mobile-menu').click(function () {
    $(this).toggleClass('menu-icon-active');
    $(this).next('.primary-menu-wrapper').toggleClass('active-menu');
  });
  $('.close-mobile-menu').click(function () {
    $(this).closest('.primary-menu-wrapper').toggleClass('active-menu');
    $('.mobile-menu').removeClass('menu-icon-active');
  });

  // Full page search.
  $('.search-icon').click(function () {
    $('.search-box').css('display', 'flex');
    return false;
  });
  $('.search-box-close').click(function () {
    $('.search-box').css('display', 'none');
    return false;
  });

  // Scroll To Top.
  $(window).scroll(function () {
    if ($(this).scrollTop() > 80) {
      $('.scrolltop').css('display', 'flex');
    } else {
      $('.scrolltop').fadeOut('slow');
    }
  });
  $('.scrolltop').click(function () {
    $('html, body').scrollTop(0);
  });

  
  var originalOffset = menu.offset().top;
  $(window).scroll(function() {
    if ($(window).scrollTop() >= originalOffset) {
        menu.addClass('fixed-menu');
    } else {
        menu.removeClass('fixed-menu');
    }
  });
// End document ready.
});

