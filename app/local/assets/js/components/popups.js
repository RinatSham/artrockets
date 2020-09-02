var startWindowScroll = 0;
$(".open_popup").magnificPopup({
  type: "inline",
  midClick: true,
  removalDelay: 500,
  closeMarkup: "",
  callbacks: {
    open: function() {
      $(".perfect_scrollbar").scrollTop(1);
      var mp = $.magnificPopup.instance;
      mp.content
        .find(".tabs__button")
        .eq(0)
        .trigger("click");
      $(this.st.el).addClass("active");

      // Область поумолчанию
      if (!$(".popup__cities_list_item.byDefault").hasClass("active"))
        $(".popup__cities_list_item.byDefault").trigger("click");
      $(".input_container__search_item.byDefault").trigger("click");

      // Prevent body scroll
      if ($(".mfp-content").height() < $(window).height()) {
        $("body").on("touchmove", function(e) {
          e.preventDefault();
        });
      }

      // Отображение кнопок на фоне при попапе
      if (
        mp.content.hasClass("popup--cities") ||
        mp.content.hasClass("popup--shops")
      ) {
        if (window.matchMedia("(min-width: 1081px)").matches) {
          var navTopBtns = $(".nav_top__btns");
          var navTopBtnsHtml = navTopBtns.html();
          var pos = [navTopBtns.offset().top, navTopBtns.offset().left];
          $(
            ".nav_top__btns:not(.nav_top__btns--additional) .nav_top__btns_btn.active"
          ).css("visibility", "hidden");
          $(".mfp-container").append(
            '<div class="nav_top__btns--additional">' +
              navTopBtnsHtml +
              "</div>"
          );
          $(".nav_top__btns--additional").css({
            top: pos[0],
            left: pos[1],
            position: "absolute"
          });
          $(".nav_top__btns--additional .nav_top__btns_btn:not(.active)").css(
            "visibility",
            "hidden"
          );
        }
      }

      // Фикс скрола в попапе на ios
      if (window.matchMedia("(max-width: 768px)").matches) {
        bodyScrollLock.disableBodyScroll(document.querySelector(".mfp-wrap"));
      }
    },
    close: function() {
      if (window.matchMedia("(max-width: 768px)").matches) {
        bodyScrollLock.enableBodyScroll(document.querySelector(".mfp-wrap"));
      }
      $(this.st.el).removeClass("active");
      // Prevent body scroll
      $(window).scrollTop(startWindowScroll);
      $("body").off("touchmove");

      $(".nav_top__btns").css({
        position: "static"
      });
      $(".nav_top__btns--additional").remove();
      $(".nav_top__btns").show();
      $(".nav_top__btns_btn").css("visibility", "visible");
    },
    // Prevent bg scroll
    beforeOpen: function() {
      startWindowScroll = $(window).scrollTop();
    }
  }
});

$(".open_popup_ajax").magnificPopup({
	type: "ajax",
  midClick: true,
  removalDelay: 500,
  closeMarkup: "",
});

$(document).on("click", ".popup_close", function() {
  $.magnificPopup.close();
});

if (window.matchMedia("(max-width: 768px)").matches) {
  $('[href="#cities_popup"]').attr("href", "#cities_popup_mobile");
}

// $(document).on("click", '[href="#cities_popup"]', function() {
//   if ($("#cities_popup .popup__container").html() === "") {
//     $.ajax({
//       type: "POST",
//       url: "/local/include/ajax/city.php",
//       success: function(data) {
//         $("#cities_popup").html(data);
//         if ($(".perfect_scrollbar").length) {
//           var container = document.querySelectorAll(
//             ".perfect_scrollbar:not(.ps)"
//           );
//           for (var i = 0; i < container.length; i++) {
//             var ps = new PerfectScrollbar(container[i]);
//           }
//         }
//       }
//     });
//   }
// });
