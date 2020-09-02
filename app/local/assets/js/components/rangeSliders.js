// Диапозон времени
$( ".range_slider--time" ).slider({
  range: true,
  min: 540,
  max: 1260,
  step: 15,
  values: [ 540, 1260 ],
  slide: function( e, ui ) {
    var hours1 = Math.floor(ui.values[0] / 60);
    var minutes1 = ui.values[0] - (hours1 * 60);
    var hours2 = Math.floor(ui.values[1] / 60);
    var minutes2 = ui.values[1] - (hours2 * 60);

    if(hours1.toString().length == 1) hours1 = '0' + hours1;
    if(minutes1.toString().length == 1) minutes1 = '0' + minutes1;
    if(hours2.toString().length == 1) hours2 = '0' + hours2;
    if(minutes2.toString().length == 1) minutes2 = '0' + minutes2;

    $( "[name=timeFrom]" ).val(hours1+':'+minutes1);
    $( "[name=timeEnd]" ).val(hours2+':'+minutes2);
  }
});

$( "[name=timeFrom], [name=timeEnd]" ).on('change', function() {

    if($(this).val().split(':')[1] > 59) {
        $(this).val(59);
    };

  var from  = $('[name=timeFrom]').val();
  var timeFrom = (+from.split(':')[0] * 60) + (+from.split(':')[1]);
  if(timeFrom < 540 || timeFrom > 1260 || isNaN(timeFrom)) {
    $('[name=timeFrom]').val("09:00");
    timeFrom = 540;
  };
  
  var end = $('[name=timeEnd]').val();
  var timeEnd = (+end.split(':')[0] * 60) + (+end.split(':')[1]);
  if(timeEnd > 1260 || timeEnd < timeFrom || isNaN(timeEnd)) {
    timeEnd = 1260;
    $('[name=timeEnd]').val("21:00");
  };

  $( ".range_slider--time" ).slider( "option", "values", [timeFrom, timeEnd] );
});

// Диапазон цены
var minPrice = $( ".range_slider--price" ).data('min');
var maxPrice = $( ".range_slider--price" ).data('max');
$( ".range_slider--price" ).slider({
  range: true,
  min: minPrice,
  max: maxPrice,
  step: 10,
  values: [ minPrice, maxPrice ],
  slide: function( e, ui ) {
    $('[name=min_price]').val(ui.values[0]);
    $('[name=max_price]').val(ui.values[1])
  }
});
$( "[name=min_price], [name=max_price]" ).on('input', function() {
  var min = $('[name=min_price]').val();
  var max = $('[name=max_price]').val();
  $( ".range_slider--price" ).slider( "option", "values", [min, max] );
});
$( "[name=min_price], [name=max_price]" ).on('change', function() {
  var min = $('[name=min_price]').val();
  var max = $('[name=max_price]').val();
  if(min>max) {
    min = max;
    $('[name=min_price]').val(max);
  }
  $( ".range_slider--price" ).slider( "option", "values", [min, max] );
});
