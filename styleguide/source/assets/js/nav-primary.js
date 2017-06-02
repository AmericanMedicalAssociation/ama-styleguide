/**
 * @file nav-primary.js
 *
 * Copyright 2017 Palantir.net, Inc.
 */

jQuery.noConflict();
(function($) {

  // Find height of ribbon and header-primary to create proper spacing
  function checkHeight() {
    var headerHeight = $('.header-primary').height();
    var ribbonHeight = $('.ribbon').height();

    $('.header-primary-span').css({'height':(headerHeight)+'px'});
    $('.header-primary').css({'top':(ribbonHeight)+'px'});
  }

  // Set height on page load
  setTimeout(function(){ checkHeight(); }, 100);
  // Check height on window resize
  $(window).resize(checkHeight);

  function showMenu(section) {
    // show the menu
    var menuPrimary = section.parents('.nav-primary_list');
    // add an open state to the nav container
    // @todo: does this need to be the direct container, or can this just be the body?
    menuPrimary.addClass('nav-primary_list-open');

    // add a body class saying that the menu is open
    $('body').addClass('body-nav-primary-open');
  }

  function showOverlay() {
    if ($(window).width() > 740) {
      setTimeout(function () {
        $('.nav-primary_overlay-mobile').addClass('nav-primary_overlay-mobile-on');
      }, 50);
    }
  }

  function closeMenu() {
    $('body').removeClass('body-nav-primary-open');
    setTimeout(function () {
      $('.nav-primary_section').removeClass('nav-primary_section-active');
    }, 500);
  }

  function closeOverlay() {
    $('.nav-primary_overlay-mobile').removeClass('nav-primary_overlay-mobile-on');
  }

  function changeActive(section) {
    // add a clicked state for this item.
    section.addClass('nav-primary_section-active');
    // Remove active and open states from sibling drawer items.
    section.siblings('.nav-primary_section').removeClass('nav-primary_section-active');
  }

// Primary navigation functionality.
  // click on the primary nav item.

  $(document).on('click', '.body-nav-primary-open, .nav-primary_section', function(e) {
    e.stopPropagation();
    // is this the nav?
    if ($(this).hasClass('nav-primary_section')) {
      // - yes:
      // -- is this the active item?
      if ($(this).hasClass('nav-primary_section-active')) {
        // ---- close the menu
        closeMenu();
        // ---- close the overlay
        closeOverlay();
      } else {
        // ---- is the menu already open?
        if (!$('body').hasClass('body-nav-primary-open')) {
          // ---- show the menu
          showMenu($(this));
          // ---- show the overlay
          showOverlay();
        }

        // change the active item
        changeActive($(this));
      }
    } else {
    // ---- close the menu
    closeMenu();
    // ---- close the overlay
    closeOverlay();
  }

  });

})(jQuery);