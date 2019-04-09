


// INIT REQUIRED FUNCTIONS
// =======================



// PART I: things to be done on document.ready
// ===========================================
$(document).ready(function() {



  // start inline svg support for IE
  // -------------------------------
  svg4everybody();



  // IE polyfill 'object-fit'
  // ------------------------
  objectFitImages();



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



  // PART II: things to be done on resize
  // ====================================
  $(window).resize(feeJS.debounce(function() {



    // responsive resizing for elements with width/height attribute
    // like vimeo/youtube videos or google map iframes
    // ------------------------------------------------------------
    $('[data-type="preparedResize"]').each(function() {
      feeJS.resizeAspectRatio(this);
    });



  }, 100));



  // =======================================================================



  // PART III: things to be done on scroll
  // =====================================
  $(window).scroll(feeJS.debounce(function() {



    // show to top element when scrolling down
    // ---------------------------------------
    feeJS.showAtScroll('.totop', '150');



  }, 100));



  // =======================================================================



  // PART IV: trigger 'resize' and 'scroll' on document ready
  // so functions that need to be executed on document ready
  // AND on resize/scroll only need to be called on resize/scroll
  // ------------------------------------------------------------
  $(window).trigger('resize');
  $(window).trigger('scroll');



});

