


// COMMON FRAMEWORK FUNCTIONS
// ==========================



// debounce
// --------
feeJS.debounce = function(func, wait) {
  var timeout, args, context, timestamp;

  return function() {
    context = this;
    args = [].slice.call(arguments, 0);
    timestamp = new Date();

    var later = function() {
      var last = (new Date()) - timestamp;

      if(last < wait) {
        timeout = setTimeout(later, wait - last);

      } else {
        timeout = null;
        func.apply(context, args);
      }
    };

    if(!timeout) {
      timeout = setTimeout(later, wait);
    }
  }
};



// -----------------------------------------------------------------------



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
// - element itself (default markup: js-addAspectRatio")
// - responsive container (default markup: js-responsiveContainer")
// ----------------------------------------------------------------
feeJS.addAspectRatio = function(target) {

  // figure out and save aspect ratio ...
  // ------------------------------------
  $(target).attr('data-aspectratio', $(target).height() / $(target).width())

  // ... update element status ...
  // -----------------------------
    .removeClass('js-addAspectRatio')
    .addClass('js-resizeAspectRatio')

  // ... and remove the hard coded width/height
  // ------------------------------------------
    .removeAttr('height')
    .removeAttr('width');
}



// -----------------------------------------------------------------------



// resize prepared element with defined aspect ratio
// (YouTube/Vimeo iframes, ...) for responsive resizing
// NOTE: elements to be resized must consist of
// - element itself (default markup: js-addAspectRatio")
// - responsive container (default markup: js-responsiveContainer")
// ----------------------------------------------------------------
feeJS.resizeAspectRatio = function(target) {

  // get width of parent responsive container
  // ----------------------------------------
  var newWidth = $(target).closest('.js-responsiveContainer').width();

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
      .next('.c-accordion__content')
      .hide('fast');
  }

  $(target)
    .toggleClass('is-open')
    .next('.c-accordion__content')
    .slideToggle('fast');
}



// -----------------------------------------------------------------------



// toggle tab content
// ------------------
feeJS.toggleTab = function(target) {

  var tabTarget = $(target).attr('data-tabtarget');

  $('.js-chooseTab, .js-toggleTab').removeClass('is-active');
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
