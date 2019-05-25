$(function() {

// Range---------------------------------------------------------
   var slider = document.getElementById('range');
    var bigValueSpan = document.getElementById('value-range');
    noUiSlider.create(slider, {
    start: 500,
    connect: [true, false],
    range: {
        'min': 0,
        'max': 1000
    }
});
  slider.noUiSlider.on('update', function (values, handle) {
      var value = values[handle];
      bigValueSpan.innerHTML = value;
  });
  
// Range---------------------------------------------------------end


});


