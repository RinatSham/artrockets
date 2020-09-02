// Кнопка "Показать ещё"
var buttonText;
$("[data-more]").hide();
$(document).on("click", "[data-show]", function() {
  var thisEl = $(this);
  var thisTextEl = $(this).find("span");
  var attrLink = thisEl.data("show");
  var textSwitch = "Скрыть";
  if (thisTextEl.html() === textSwitch) {
    thisTextEl.html(buttonText);
  } else {
    buttonText = thisTextEl.html();
    thisTextEl.html("Скрыть");
  }
  $(document)
    .find("[data-more=" + attrLink + "]")
    .slideToggle();
});