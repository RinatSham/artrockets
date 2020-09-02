// Product quantity
$(document).on("change", ".product_quant", function() {
  $(this).val() < 1 ? $(this).val(1) : false;
});
// Запрет ввода ноля
$(document).on('change keyup input click mouseup', '.product_quant', function() {
    if (this.value.match(/[^0-9]|^0{1}/g)) {
        this.value = this.value.replace(/./g, '');
    }
    $(this).closest('.cart_item').find('.cart_item__changable_quant').html(this.value);
});
$(document)
  .on("click", ".change_quant [data-quant=plus]", function(e) {
    changeQuant(e, "plus");
  })
  .on("click", ".change_quant [data-quant=minus]", function(e) {
    changeQuant(e, "minus");
  });

function changeQuant(e, op) {
  var textEl = $(e.target)
    .parent()
        .find(".product_quant");
        
  if (op === "plus") {
    var quant = parseInt(textEl.val()) + 1;
  } else if (op === "minus") {
    var quant = parseInt(textEl.val()) - 1;
	}
	
	var maxNumber = textEl.data("max-number");
	if (quant > maxNumber) return false;

	var minNumber = textEl.data("min-number");
    if (quant < minNumber) return false;
    
    
    if (quant >= 1) {
        textEl.val(quant);
        textEl.closest('.cart_item').find('.cart_item__changable_quant').html(quant);
    }

    $('[name="QUANTITY"]').trigger('change')
}