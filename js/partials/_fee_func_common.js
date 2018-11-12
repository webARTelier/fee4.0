


// COMMON FRAMEWORK FUNCTIONS
// ==========================

// smooth scrolling to top
// -----------------------
feeJS.smoothScrollToTop = function() {
  $("html, body").animate({ scrollTop: 0 }, 600);
  return false;
}



// -----------------------------------------------------------------------



// smooth scrolling to anchor
// --------------------------
feeJS.smoothScrollToAnchor = function() {
  if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {

    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
    if (target.length) {
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 1000);
      return false;
    }
  }
}



// -----------------------------------------------------------------------



// show target element
// -------------------

// NOTE: target element will be closed
// on any click outside target element
// -----------------------------------

feeJS.showTarget = function(target) {

  // get target element
  // ------------------
  var targetElement = $($(target).data('show'));

  // add namespaced listener for closing element
  // -------------------------------------------
  $(document).on('mouseup.closeElement', function(e) {

    // if click target isn't the container
    // nor a descendant of the container ...
    // -------------------------------------
    if(!targetElement.is(e.target) && targetElement.has(e.target).length === 0) {

      // ... hide target element
      // -----------------------
      targetElement.removeClass('is-visible');
      $('.wrapper-content').removeClass('is-shifted');

      // ... and remove namespaced listener
      // ----------------------------------
      $(document).off('mouseup.closeElement');
    }
  });

  // show target element
  // -------------------
  targetElement.addClass('is-visible');
}



// -----------------------------------------------------------------------



// hide target element
// -------------------
feeJS.hideTarget = function(target) {
  $($(target).data('hide')).removeClass('is-visible');
}



// -----------------------------------------------------------------------



// open off canvas menu
// --------------------
feeJS.openMenu = function() {
  $('.container-navigation-offcanvas').addClass('is-visible');
  $('.overlay-page[data-action="closeMenu"]').addClass('is-visible');
}


// -----------------------------------------------------------------------



// close off canvas menu
// ---------------------
feeJS.closeMenu = function() {
  $('.container-navigation-offcanvas').removeClass('is-visible');
  $('.overlay-page[data-action="closeMenu"]').removeClass('is-visible');
}



// -----------------------------------------------------------------------



// show navigation sub level
// -------------------------
function showSublevel(target) {

  // get current entry
  // -----------------
  var upperGradeLevel = $(target).parent();
  var subLevel = $(target).next('.navigation-sublevel');

  // set properties for current item
  // -------------------------------
  $(target).attr('data-action', 'hideSublevel');
  $(target).find('.navigation-item-icon').css('transform', 'rotate(-90deg)');

  // set level properties
  // --------------------
  subLevel.slideDown();

  // delay 'addClass' until animation is done
  // ----------------------------------------
  setTimeout(function() {
    upperGradelevel.addClass('is-open');
  }, 300);
}



// -----------------------------------------------------------------------



// hide navigation sub level
// -------------------------
function hideSublevel(target) {

  // get current entry
  // -----------------
  var upperGradeLevel = $(target).parent();
  var subLevel = $(target).next('.navigation-sublevel');

  // set properties for current item
  // -------------------------------
  $(target).attr('data-action', 'showSublevel');
  $(target).find('.navigation-item-icon').css('transform', 'rotate(0)');

  // set level properties
  // --------------------
  subLevel.slideUp();

  // delay 'removeClass' until animation is done
  // -------------------------------------------
  setTimeout(function() {
    upperGradelevel.removeClass('is-open');
  }, 300);
}




// -----------------------------------------------------------------------



// open search
// -----------
feeJS.openSearch = function() {
  $('.container-search').addClass('is-visible');
  $('.overlay[data-action="closeSearch"]').addClass('is-visible');
}



// -----------------------------------------------------------------------



// close search
// ------------
feeJS.closeSearch = function() {
  $('.container-search').removeClass('is-visible');
  $('.overlay[data-action="closeSearch"]').removeClass('is-visible');
}



// -----------------------------------------------------------------------



// show element below given scroll position
// ----------------------------------------
feeJS.showAtScroll = function(target, scrollPosition) {
  var scrolled = $(window).scrollTop();

  // show below given scroll position ...
  // ------------------------------------
  if (scrolled >= scrollPosition) {
    $(target).addClass('is-visible');
  }

  // ... and hide above given scroll position
  // ----------------------------------------
  else {
    $(target).removeClass('is-visible');
  }
}



// -----------------------------------------------------------------------



// prepare element with defined aspect ratio
// (YouTube/Vimeo iframes, ...) for responsive resizing
// NOTE: elements to be resized must consist of
// - element itself (default markup: data-action="prepareResponsive")
// - responsive container (default markup: data-type="responsiveContainer")
// ------------------------------------------------------------------------
feeJS.addAspectRatio = function(target) {

  // figure out and save aspect ratio ...
  // ------------------------------------
  $(target).attr('data-aspectratio', $(target).height() / $(target).width())

  // ... update element status ...
  // -----------------------------
    .removeAttr('data-action')
    .attr('data-type', 'preparedResize')

  // ... and remove the hard coded width/height
  // ------------------------------------------
    .removeAttr('height')
    .removeAttr('width');
}



// -----------------------------------------------------------------------



// resize prepared element with defined aspect ratio
// (YouTube/Vimeo iframes, ...) for responsive resizing
// NOTE: elements to be resized must consist of
// - element itself (default markup: data-action="prepareResponsive")
// - responsive container (default markup: data-type="responsiveContainer")
// ------------------------------------------------------------------------
feeJS.resizeAspectRatio = function(target) {

  // get width of parent responsive container
  // ----------------------------------------
  var newWidth = $(target).closest('[data-type="responsiveContainer"]').width();

  // resize element according to its aspect ratio
  // --------------------------------------------
  $(target).width(newWidth).height(newWidth * $(target).data('aspectratio'));
}



// -----------------------------------------------------------------------



// toggle accordion content
// ------------------------
feeJS.toggleAccordion = function(target, openMultiple) {

  openMultiple = openMultiple || false;

  // close other opened items?
  // -------------------------
  if(openMultiple == false) {
    $('.js-toggleAccordion')
      .not(target)
      .removeClass('is-open')
      .next('.c-accordion-item__content')
      .hide('fast');
  }

  $(target)
    .toggleClass('is-open')
    .next('.c-accordion-item__content')
    .slideToggle('fast');
}



// -----------------------------------------------------------------------



// toggle tab content
// ------------------
feeJS.toggleTab = function(target) {

  // there can only be one
  // ---------------------
  $('.tabs-navigation__item.is-active, .tabs-content__item.is-active').removeClass('is-active');


  // open the chosen one
  // -------------------
  var tabTarget = $(target).attr('data-tabtarget');
  $(target).addClass('is-active');
  $(tabTarget).addClass('is-active');
}



// -----------------------------------------------------------------------



// open modals
// -----------
feeJS.openModal = function(target) {

  // prevent page in background from scrolling
  // -----------------------------------------
  $('body').css('overflow-y', 'hidden');

  // close all other modals
  // ----------------------
  $('.c-modal').removeClass('is-visible');

  // open modal and page overlay
  // ---------------------------
  $('.c-modal' +  target).addClass('is-visible');
  $('.c-pageoverlay.js-closeModal').addClass('is-visible');
}



// -----------------------------------------------------------------------



// close modals
// ------------
feeJS.closeModal = function() {

  // let page in background scroll again
  // -----------------------------------
  $('body').css('overflow-y', '');

  // close modal and overlay
  // -----------------------
  $('.c-modal').removeClass('is-visible');
  $('.c-pageoverlay').removeClass('is-visible');
}



// -----------------------------------------------------------------------



// switch modals
// -------------
feeJS.switchModal = function(target) {
  feeJS.closeModal();
  feeJS.openModal(target);
}



// -----------------------------------------------------------------------
