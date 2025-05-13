// Menu Functions
function mobile_app_launch_openNav() {
  jQuery(".sidenav").addClass('show');
}

function mobile_app_launch_closeNav() {
  jQuery(".sidenav").removeClass('show');
}

// Focus handling for the menu
(function( window, document ) {
  function mobile_app_launch_keepFocusInMenu() {
    document.addEventListener('keydown', function(e) {
      const mobile_app_launch_nav = document.querySelector('.sidenav');

      if (!mobile_app_launch_nav || !mobile_app_launch_nav.classList.contains('show')) {
        return;
      }
      const elements = [...mobile_app_launch_nav.querySelectorAll('input, a, button')],
            mobile_app_launch_lastEl = elements[elements.length - 1],
            mobile_app_launch_firstEl = elements[0],
            mobile_app_launch_activeEl = document.activeElement,
            tabKey = e.keyCode === 9,
            shiftKey = e.shiftKey;

      if (!shiftKey && tabKey && mobile_app_launch_lastEl === mobile_app_launch_activeEl) {
        e.preventDefault();
        mobile_app_launch_firstEl.focus();
      }

      if (shiftKey && tabKey && mobile_app_launch_firstEl === mobile_app_launch_activeEl) {
        e.preventDefault();
        mobile_app_launch_lastEl.focus();
      }
    });
  }
  mobile_app_launch_keepFocusInMenu();
})(window, document);

jQuery(function($) {
  "use strict";

  // Search focus handler
  mobile_app_launch_searchFocusHandler();

  // Scroll to top button
  let scrollTopButton = $('#scrolltop');
  $(window).scroll(function() {
    if ($(window).scrollTop() > 300) {
      scrollTopButton.addClass('scroll');
    } else {
      scrollTopButton.removeClass('scroll');
    }
  });
  scrollTopButton.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, '300');
  });

  // Loading screen (preloader)
  window.addEventListener('load', function() {
    $(".loading").delay(2000).fadeOut("slow");
  });

  // Menu events binding (Make sure your buttons have the correct IDs or classes)
  $(".open-nav-button").click(function(e) {
    e.preventDefault();
    mobile_app_launch_openNav();
  });

  $(".close-nav-button").click(function(e) {
    e.preventDefault();
    mobile_app_launch_closeNav();
  });

  // Search focus handler function
  function mobile_app_launch_searchFocusHandler() {
    const searchFirstTab = $('.inner_searchbox input[type="search"]');
    const searchLastTab = $('button.search-close');

    $(".open-search").click(function(e) {
      e.preventDefault();
      e.stopPropagation();
      $('body').addClass("search-focus");
      searchFirstTab.focus();
    });

    $("button.search-close").click(function(e) {
      e.preventDefault();
      e.stopPropagation();
      $('body').removeClass("search-focus");
      $(".open-search").focus();
    });

    // Redirect last tab to first input
    searchLastTab.on('keydown', function(e) {
      if ($('body').hasClass('search-focus') && e.which === 9 && !e.shiftKey) {
        e.preventDefault();
        searchFirstTab.focus();
      }
    });

    // Redirect first shift+tab to last input
    searchFirstTab.on('keydown', function(e) {
      if ($('body').hasClass('search-focus') && e.which === 9 && e.shiftKey) {
        e.preventDefault();
        searchLastTab.focus();
      }
    });

    // Allow escape key to close menu
    $('.inner_searchbox').on('keyup', function(e) {
      if ($('body').hasClass('search-focus') && e.keyCode === 27) {
        $('body').removeClass('search-focus');
        searchLastTab.focus();
      }
    });
  }
});

// Owl Carousel initialization
jQuery(document).ready(function($) {
  $('#slider .owl-carousel').owlCarousel({
    loop: true,
    margin: 0,
    nav: false,
    dots: true,
    rtl: false,
    items: 1,
    autoplay: false,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
  });
});

//sticy header js

jQuery(window).scroll(function () {
  var sticky = jQuery('.sticky-header'),
  scroll = jQuery(window).scrollTop();

  if (scroll >= 100) sticky.addClass('fixed-header');
  else sticky.removeClass('fixed-header');
});