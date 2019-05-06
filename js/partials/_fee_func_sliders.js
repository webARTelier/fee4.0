


// SLIDER FUNCTIONS
// ================



// hero slider
// -----------
feeJS.initHeroSlider = function(target) {

  // set static slider options
  // -------------------------
  var sliderOptions = {
    autoplay:         true,
    autoplayTimeout:  5000,
    loop:             true,
    margin:           10,
  }

  // set dynamic slider options
  // --------------------------
  sliderOptions['responsive'] = {};

  // viewport 'tiny'
  // ---------------
  sliderOptions['responsive'][0] = {};
  sliderOptions['responsive'][0]['items'] = 1;

  // viewport 'small'
  // ----------------
  sliderOptions['responsive'][bpTiny] = {};
  sliderOptions['responsive'][bpTiny]['items'] = 2;

  // viewport 'medium'
  // -----------------
  sliderOptions['responsive'][bpSmall] = {};
  sliderOptions['responsive'][bpSmall]['items'] = 3;

  // viewport 'large'
  // ----------------
  sliderOptions['responsive'][bpMedium] = {};
  sliderOptions['responsive'][bpMedium]['items'] = 4;

  // viewport 'huge'
  // ---------------
  sliderOptions['responsive'][bpLarge] = {};
  sliderOptions['responsive'][bpLarge]['items'] = 5;

  // init slider
  // -----------
  $(target).owlCarousel(sliderOptions);
}
