jQuery.noConflict();
(function($) {
  // Search

  // When a user clicks on the ribbon trigger (main)
  $('.accordion-trigger').click(function() {
    // Unfocus on the dropdown
    $(this).blur();
    // add a class to the sibling dropdown
    $(this).toggleClass('is-active');
    $(this).siblings('.accordion-content').toggleClass('is-active').slideToggle(300);
  });

  // When a user clicks on the ribbon trigger for user dropdown
  $('.ribbon_user-menu_trigger').click(function() {
    // Unfocus on the dropdown
    $(this).blur();
    // add a class to the sibling dropdown
    $(this).toggleClass('is-active');
    $(this).siblings('.ribbon_user-menu_nav').toggleClass('is-active').slideToggle(300);
    $('.ribbon_dropdown_trigger').removeClass('is-active');
    $('.ribbon_dropdown_nav').removeClass('is-active').slideUp(300);
  });

  // When a user clicks on the ribbon trigger for authenticated user dropdown
  $('.ribbon_user-menu_trigger-auth').click(function() {
    // Unfocus on the dropdown
    $(this).blur();
    // add a class to the sibling dropdown
    $(this).toggleClass('is-active');
    $(this).siblings('.ribbon_user-menu_nav-child').toggleClass('is-active').slideToggle(300);
    $('.ribbon_dropdown_trigger').removeClass('is-active');
    $('.ribbon_dropdown_nav').removeClass('is-active').slideUp(300);
  });
})(jQuery);
