$('[data-mask=time]').inputmask("99:99");

$('[name=password2]').rules('add', {
  equalTo: '[name=password1]'
});
$('[name=password1]').rules('add', {
  minlength: 6
});
$('[data-max-size=20]').rules('add', {
  filesize_max: 20000000
});
$('[data-mask=time]').rules('add', {
    time24: true
});

$('[name=min_price], [name=max_price]').formatFeild({
  integerPositive: true
});

$('[data-mask=integerPositive]').formatFeild({
  integerPositive: true
});

$('.product_quant').formatFeild({
  integerPositive: true
});
$('[data-mask=city]').formatFeild({
    layout: 'toRu',
    titleCase: true
});
$('[data-mask=address]').formatFeild({
    layout: 'toRu'
});

$("form.validate").each(function () {
    $(this).validate();
});

// Максимальное число
$(document).on("change", "[data-max-number]", function() {
    var maxNumber = $(this).data("max-number");
    if ($(this).val() > maxNumber) $(this).val(maxNumber);
});
// Минимальное число
$(document).on("change", "[data-min-number]", function() {
    var minNumber = $(this).data("max-number");
    if ($(this).val() < minNumber) $(this).val(minNumber);
});

$('[data-number-min]').on('change', function() {
  var min = $(this).data('number-min');
  if ($(this).val() < min) $(this).val(min);
});
$('[data-number-max]').on('change', function() {
  var max = $(this).data('number-max');
  if ($(this).val() > max) $(this).val(max);
});

jQuery.extend(jQuery.validator.messages, {
  required: "Обязательно"
});

jQuery.validator.addMethod("filesize_max", function(value, element, param) {
  var isOptional = this.optional(element),
      file;
  
  if(isOptional) {
      return isOptional;
  }
  
  if ($(element).attr("type") === "file") {
      
      if (element.files && element.files.length) {
          
          file = element.files[0];            
          return ( file.size && file.size <= param ); 
      }
  }
  return false;
}, "Слишком большой размер файла");

$.validator.addMethod("time24", function(value, element) {
    return /^(0[0-9]|1[0-9]|2[0-3]|[0-9]):[0-5][0-9]$/.test(value);
}, "Некорректное время");