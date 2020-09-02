$(function(){

  // Слайдер
  $('.brands__inner').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 2,
    arrows: true,
    dots: true,
    prevArrow: '<button class="slick-arrow slick-prev"><span class=" icon-angle-right"></span></button>' ,
    nextArrow: '<button class="slick-arrow slick-next"><span class=" icon-angle-right"></button>',
    variableWidth: true,
    appendArrows: '.brands__arrows',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 636,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          variableWidth: false,
        }
      }
    ]
  });

  $('.advantages__inner').slick({
    prevArrow: '<button class="slick-arrow slick-prev"><span class=" icon-angle-right"></span></button>' ,
    nextArrow: '<button class="slick-arrow slick-next"><span class=" icon-angle-right"></button>',
    appendArrows: '.advantages__arrows',
    responsive: [
      {
        breakpoint: 9999,
        settings: 
          'unslick'
      },
      {
        breakpoint: 635,
        settings: {
          arrows: true,
          dots: true,
        }
      },
      {
        breakpoint: 480,
        settings: {
          dots: true,
        }
      }
    ]
  });

  
// wow анимация
  new WOW().init();

  

});


$(window).on("scroll", function() {
  // Прогрес скролла
  if ($(".created__inner").length) {
    $(".created__inner").each(function(idx, el) {
        var elTop = $(this).offset().top;
        var calc = percentageSeen($(this), $(this).data("progress-offset"));

        if (calc <= 100 && calc >= 0) {
            if (window.matchMedia("(max-width: 1080px)").matches) {
                $(this)
                    .find(".created__inner_greenline")
                    .css("height", calc + "%");
            } else {
                $(this)
                    .find(".created__inner_greenline")
                    .css("width", calc + "%");
            }
        }

        var progressItem = $(this).find(".created__item");
        if (calc >= 25) {
            progressItem.eq(1).addClass("active");
        } else {
            progressItem.eq(1).removeClass("active");
        }

        if (calc >= 50) {
            progressItem.eq(2).addClass("active");
        } else {
            progressItem.eq(2).removeClass("active");
        }

        if (calc >= 75) {
            progressItem.eq(3).addClass("active");
        } else {
            progressItem.eq(3).removeClass("active");
        }
    });
}
});
$(window).trigger("scroll")

// Вычисление процентра скролла элемента
function percentageSeen(el, offset) {
var $win = $(window);
var viewportHeight = $(window).height(),
    scrollTop = $win.scrollTop(),
    elementOffsetTop = el.offset().top,
    elementHeight = el.height();
if (offset) viewportHeight = viewportHeight - offset;
if (elementOffsetTop > scrollTop + viewportHeight) {
    return 0;
} else if (elementOffsetTop + elementHeight < scrollTop) {
    return 100;
} else {
    var distance = scrollTop + viewportHeight - elementOffsetTop;
    var percentage = distance / ((viewportHeight + elementHeight) / 100);
    percentage = Math.round(percentage);
    return percentage;
}
}

// Открытие/закрытие Mobile menu
$(".mobile_menu_close").on("click", function() {
  $(".mobile_menu").fadeOut(100);
  $(".full_overlay").fadeOut(100);
  $("html").removeClass("popup_opened");
});
$(".mobile_menu_open").on("click", function() {
  $(".mobile_menu").fadeIn(100);
  $(".full_overlay").fadeIn(100);
  $(".perfect_scrollbar").scrollTop(1);
  $("html").addClass("popup_opened");
});

$(".mobile_menu__sec, .mobile_menu__link, .mobile_menu__link2").on("click", function() {
  $(".mobile_menu__sec, .mobile_menu__link, .mobile_menu__link2").removeClass("active");
  $(this).addClass("active");
}
);


function yaMapInit() {
  if ($(".map").length) {
      // Яндекс карта
      ymaps.ready(init);

      function init() {
          var geoObjects = [];
          $(".map").each(function(idx, el) {
              var id = $(this).attr("id");

              var map = new ymaps.Map(id, {
                  center: [55.788411, 49.134455],
                  zoom: 11,
                  controls: []
              });

              var clusterer = new ymaps.Clusterer();

              var points = [];
              for (var i = 0; i < ourShops.length; ++i) {
                  points.push(ourShops[i].point);
              }

              getPointData = function(index, addressText, images) {
                  var slides = "";
                  for (var i = 0; i < images.length; i++) {
                      slides +=
                          "<a data-fancybox='map' href='" +
                          images[i] +
                          "' class='our_shops__slide' style='background-image: url("+images[i]+")'>" +
                          "</a>";
                  }
                  var slidesNav = "";
                  for (var i = 0; i < images.length; i++) {
                      slidesNav +=
                          "<div class='our_shops__slide_nav'>" +
                          "<img src='" +
                          images[i] +
                          "'>" +
                          "</div>";
                  }
                  return {
                      hintContent: "",
                      balloonContent: "<div class='our_shops__baloon'>" +
                          "<p class='our_shops__marker_label'>" +
                          addressText +
                          "</p>" +
                          // Slider
                          "<div class='our_shops__slider'>" +
                          slides +
                          "</div>" +
                          // Slider END
                          // Slider nav
                          "<div class='our_shops__slider_nav'>" +
                          slidesNav +
                          "</div>" +
                          "</div>"
                      // Slider nav END
                  };
              };

              clusterer.events.add("balloonopen", function(e) {
                  $(".our_shops__baloon")
                      .parent()
                      .parent()
                      .css({
                          minHeight: "260px",
                          maxHeight: "265px",
                          overflowY: 'unset'
                      });
                  $('.our_shops__baloon')
                      .parent()
                      .parent()
                      .parent()
                      .css({
                          marginRight: "0",
                          paddingRight: "12px"
                      });
                      
                  $('#make_order__map .our_shops__baloon')
                      .parent()
                      .parent()
                      .css({
                          height: "200px",
                          minHeight: "200px",
                          maxHeight: "200px",
                      });
                  $('#make_order__map .our_shops__baloon')
                      .parent()
                      .parent()
                      .parent()
                      .parent()
                      .css({
                          maxWidth: "260px",
                          margin: "auto"
                      });
                  setTimeout(function() {
                      $("#"+id+" .our_shops__slider").slick({
                          slidesToShow: 1,
                          asNavFor: ".our_shops__slider_nav",
                          fade: true,
                          arrows: false,
                          infinite: false,
                          swipe: false
                      });
                      $("#"+id+" .our_shops__slider_nav").slick({
                          arrows: true,
                          nextArrow: '<span class="our_shops__slider_nav_arrow icon-arrow-point-to-right next">1</span>',
                          prevArrow: '<span class="our_shops__slider_nav_arrow icon-arrow-point-to-right prev">2</span>',
                          slidesToShow: 4,
                          focusOnSelect: true,
                          infinite: false,
                          asNavFor: ".our_shops__slider"
                      });
                  }, 100);
                  // Фикс бага при открывании слайдер
                  setTimeout(function() {
                      $(".our_shops__baloon")
                      .parent()
                      .parent()
                      .css({
                          minHeight: "260px",
                          maxHeight: "265px",
                          width: '100%'
                      });
                      $(".our_shops__baloon")
                      .parent()
                      .parent()
                      .parent()
                      .css({
                          height: "210px",
                      });

                      $('#make_order__map .our_shops__baloon')
                      .parent()
                      .parent()
                      .css({
                          overflowY: 'unset'
                      });
                      // $('#make_order__map .our_shops__baloon')
                      // .parent()
                      // .parent()
                      // .parent()
                      // .css({
                      //     height: '210px'
                      // });
                      
                      $("#" + id + " .our_shops__slider_nav, .our_shops__slider").slick(
                          "setPosition",
                          0
                      );
                  }, 200);
              });

              for (var i = 0, len = points.length; i < len; i++) {
                  var addressText = ourShops[i].text;
                  geoObjects[i] = new ymaps.Placemark(
                      points[i],
                      getPointData(i, addressText, ourShops[i].images), {
                          iconLayout: "default#image",
                          iconImageHref: "/local/assets/img/map-placeholder.png",
                          iconImageSize: [47, 53],
                          iconImageOffset: [-23, -53]
                      }
                  );
                  createLinks(i);
              }

              clusterer.add(geoObjects);
              map.geoObjects.add(clusterer);

              //  Закрытие балунов при клике на вкладку
              $(".our_shops__item_title").on("click", function() {
                  closeBalloons();
              });

              function closeBalloons() {
                  for (var i = 0; i < geoObjects.length; i++) {
                      geoObjects[i].balloon.close();
                  }
              }

              function createLinks(i) {
                  var current = geoObjects[i];
                  $("." + id + "-balloon" + i).on("click", function() {
                      closeBalloons();
                      current.balloon.close();
                      setTimeout(function() {
                          current.balloon.open();
                      }, 100);
                  });
              }

              function setActivePlacemark() {
  
                  var checked = $(".change_map_shop:checked");
                  var coords = [checked.data("map-x"), checked.data("map-y")];
  
                  map.setCenter(coords, 13, {
                      duration: 500,
                      timingFunction: "ease-in-out"
                  });
              }
              if (id === 'make_order__map') {
                  setActivePlacemark();
                  $(document).on("change", ".change_map_shop", setActivePlacemark);
              }

          });
      }
  }
  // Яндекс карта END
}; 