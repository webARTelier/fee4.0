


// show rangeslider value
// ======================



feeJS.rangeslider = function(target) {
  var el, newPoint, newPlace, offset;

  offset = -0.6;
  el = $(target);
  width = el.width();
  newPoint = (el.val() - el.attr("min")) / (el.attr("max") - el.attr("min"));

  if(newPoint < 0) {
    newPlace = 0;
  }
  else if(newPoint > 1) {
    newPlace = width;
  }
  else {
    newPlace = width * newPoint + offset;
    offset -= newPoint;
  }

  el
    .next("output")
    .css({
    left: newPlace,
    marginLeft: offset + "%"
  })
    .text(el.val());
}
