


// FORM HANDLING FUNCTIONS
// =======================



// check for html5 validation
// --------------------------
feeJS.hasHtml5Validation = function() {
  return typeof document.createElement('input').checkValidity === 'function';
}



// -----------------------------------------------------------------------



// mark form as submitted
// ----------------------
feeJS.markSubmitted = function(target) {
  $(target).closest('form').addClass('is-submitted');
}



// -----------------------------------------------------------------------



// stop iOS safari from submitting invalid form
// --------------------------------------------
feeJS.preventSubmitInvalid = function(target) {

  if(feeJS.hasHtml5Validation()) {
    $(target).submit(function (e) {
      if(!this.checkValidity()) {
        e.preventDefault();
      }
    })
  }
}



// -----------------------------------------------------------------------



// track all inputs on page
// ------------------------
feeJS.trackInputs = function() {

  var inputs = {};

  $('input, select, textarea').each(function() {
    inputName = $(this).attr('name');

    // get correct value from radio buttons ...
    // ----------------------------------------
    if($(this).is(':radio')) {
      inputValue = $('input[name=' + inputName + ']:checked').val();
    }

    // ... or else just get value
    // --------------------------
    else {
      inputValue = $(this).val();
    }

    inputs[inputName] = inputValue;
  })

  return inputs;
}



// -----------------------------------------------------------------------



// track invalid inputs in submitted form
// --------------------------------------
feeJS.trackInvalid = function(target) {

  var invalidInputs = [];

  $(target).closest('form').find('input:invalid, select:invalid, textarea:invalid').each(function() {
    invalidInputs.push($(this).attr('name'));
  });

  return invalidInputs;
}

