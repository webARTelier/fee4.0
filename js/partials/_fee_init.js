


// INIT REQUIRED FUNCTIONS
// =======================

// PART I: things to be done immediately
// =====================================



// set global scope for basic page variables
// -----------------------------------------
var currentViewport = feeJS.getCurrentViewport(),
    currentNavState = feeJS.getCurrentNavstate();



// =======================================================================



// PART II: things to be done on document.ready
// ============================================
$(document).ready(function() {



  // start inline svg support for IE
  // -------------------------------
  svg4everybody();



  // IE polyfill 'object-fit'
  // ------------------------
  objectFitImages();



  // get css breakpoint values
  // -------------------------
  var breakpoints = feeJS.getBreakpoints();
  console.log(breakpoints);



  // open off canvas menu
  // --------------------
  $('html').on('click', '.js-openMenu', function() {
    feeJS.openMenu();
  });



  // close off canvas menu
  // ---------------------
  $('html').on('click', '.js-closeMenu', function() {
    feeJS.closeMenu();
  });



  // show/hide menu sublevels
  // -------------------------
  $('html').on('click', '.js-showSubLevel', function() {
    showSublevel(this);
  });

  $('html').on('click', 'js-hideSubLevel', function() {
    hideSublevel(this);
  });



  // open search
  // -----------
  $('html').on('click', 'js-openSearch', function() {
    feeJS.openSearch();
  });



  // close search
  // ------------
  $('html').on('click', '.js-closeSearch', function() {
    feeJS.closeSearch();
  });




  // hero slider
  // -----------
  $('.js-initHeroSlider').owlCarousel({
    autoplay:           true,
    loop:               true,
    nav:                true,
    animateOut:         'fadeOut',
    autoplayTimeout:    8000,
    items:              1,
  });



  // content image slider
  // --------------------
  $('.js-initContentSlider').owlCarousel({
    autoplay:           true,
    loop:               true,
    nav:                true,
    autoplayTimeout:    5000,
    items:              1,
  });



  // smooth scrolling to top
  // -----------------------
  $('html').on('click', '.js-scrollToTop', function() {
    feeJS.smoothScrollToTop();
  });



  // smooth scrolling to anchor
  // --------------------------
  $('html').on('click', 'a[href*="#"]:not([href="#"])', function() {
    feeJS.smoothScrollToAnchor();
  });



  // image lightbox/gallery
  // ----------------------
  $('.js-initLightbox').SmartPhoto();



  // toggle tabs
  // -----------
  $('html').on('click', '[data-tabtarget]', function() {
    feeJS.toggleTab(this);
  });



  // toggle accordion items
  // NOTE: optional parameter 'openMultiple' can be used
  // to prevent closing open item(s) when clicking on closed item
  // ------------------------------------------------------------
  $('html').on('click', '.js-toggleAccordion', function() {
    feeJS.toggleAccordion(this, 'openMulitiple');
  });



  // prepare resizing for elements with width/height attribute
  // like vimeo/youtube videos or google map iframes
  // ---------------------------------------------------------
  $('.js-prepareResponsive').each(function() {
    feeJS.addAspectRatio(this);
  });



  // prepare forms
  // -------------
  $('form').each(function() {
    feeJS.preventSubmitInvalid(this);
  });

  $('.js-submit').click(function() {
    feeJS.markSubmitted(this);
  });



  // open modals
  // -----------
  $('html').on('click', '.js-openModal', function() {
    feeJS.openModal($(this).attr('data-target'));
  });



  // close modals
  // ------------
  $('html').on('click', '.js-closeModal', function() {
    feeJS.closeModal();
  });



  // switch modals
  // -------------------------
  $('html').on('click', '.js-switchModal', function() {
    feeJS.switchModal($(this).attr('data-target'));
  });



  // =======================================================================



  // PART III: things to be done on resize
  // =====================================
  $(window).resize(feeJS.debounce(function() {



    // refresh variable basic page values
    // ----------------------------------
    currentViewport = feeJS.getCurrentViewport();
    currentNavState = feeJS.getCurrentNavstate();



    // responsive resizing for elements with width/height attribute
    // like vimeo/youtube videos or google map iframes
    // ------------------------------------------------------------
    $('[data-type="preparedResize"]').each(function() {
      feeJS.resizeAspectRatio(this);
    });


  }, 100));



  // =======================================================================



  // PART IV: things to be done on scroll
  // ====================================
  $(window).scroll(feeJS.debounce(function() {


    // show to top element when scrolling down
    // ---------------------------------------
    feeJS.showAtScroll('.totop', '150');


  }, 100));



  // =======================================================================



  // PART V: trigger 'resize' and 'scroll' on document ready
  // so functions that need to be executed on document ready
  // AND on resize/scroll only need to be called on resize/scroll
  // ------------------------------------------------------------
  $(window).trigger('resize');
  $(window).trigger('scroll');


});

