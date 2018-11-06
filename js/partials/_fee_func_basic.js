


// BASIC FRAMEWORK FUNCTIONS
// =========================

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



// get current viewport
// --------------------
feeJS.getCurrentViewport = function() {
    return window
        .getComputedStyle(document.querySelector('body'), ':before')
        .getPropertyValue('content')
        .replace(/\"/g, '');
};



// -----------------------------------------------------------------------



// get current navigation mode
// ---------------------------
feeJS.getCurrentNavstate = function() {
    return window
        .getComputedStyle(document.querySelector('body'), ':after')
        .getPropertyValue('content')
        .replace(/\"/g, '');
};



// -----------------------------------------------------------------------



// get css breakpoint values
// -------------------------
feeJS.getBreakpoints = function() {
    var breakpointNames = ['tiny', 'small', 'medium', 'large'],
        breakpoint = [];

    $.each(breakpointNames, function(index, value) {

        $('html').addClass(breakpointNames[index]);

        breakpoint[value] = window
            .getComputedStyle(document.querySelector('html'), ':before')
            .getPropertyValue('content')
            .replace(/\"/g, '');

        $('html').removeClass(breakpointNames[index]);

    });

    return breakpoint;
}
