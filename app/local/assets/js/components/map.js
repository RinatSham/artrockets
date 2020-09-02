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
            "' class='our_shops__slide'>" +
            "<img src='" +
            images[i] +
            "'>" +
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
          balloonContent:
            "<div class='our_shops__baloon'>" +
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
            maxHeight: "265px"
          });
        setTimeout(function() {
          $(".our_shops__slider").slick({
            slidesToShow: 1,
            asNavFor: ".our_shops__slider_nav",
            fade: true,
            arrows: false,
            infinite: false,
            swipe: false
          });
          $(".our_shops__slider_nav").slick({
            arrows: true,
            nextArrow:
              '<span class="our_shops__slider_nav_arrow icon-arrow-point-to-right next">1</span>',
            prevArrow:
              '<span class="our_shops__slider_nav_arrow icon-arrow-point-to-right prev">2</span>',
            slidesToShow: 4,
            focusOnSelect: true,
            infinite: false,
            asNavFor: ".our_shops__slider"
          });
        }, 100);
        // Фикс бага при открывании слайдер
        setTimeout(function() {
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
          getPointData(i, addressText, ourShops[i].images),
          {
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
        console.log('balloon closing');
        for (var i = 0; i < geoObjects.length; i++) {
          geoObjects[i].balloon.close();
        }
      }

      function createLinks(i) {
        var current = geoObjects[i];
        $("." + id + "-balloon" + i).on("click", function() {
            console.log('balloon opens');
          closeBalloons();
          current.balloon.close();
          setTimeout(function() {
            current.balloon.open();
          }, 100);
        });
      }
    });
  }
}
// Яндекс карта END

// Карта в оформлении заказа
if ($(".map2").length) {
  ymaps.ready(init);
  function init() {
    var myMap = new ymaps.Map("make_order__map", {
      center: [55.830296, 49.085959],
      zoom: 13,
      controls: []
    });

    var icon = {
      iconLayout: "default#image",
      iconImageHref: "/local/assets/img/map-placeholder.png",
      iconImageSize: [47, 53],
      iconImageOffset: [-23, -53]
    };

    function createPlacemark(coords) {
      var myPlacemark = new ymaps.Placemark(
        coords,
        {
          hintContent: "",
          balloonContent: ""
        },
        icon
      );
      myMap.geoObjects.add(myPlacemark);
    }

    function setActivePlacemark() {
      myMap.geoObjects.removeAll();

      var checked = $(".change_map_shop:checked");
      var coords = [checked.data("map-x"), checked.data("map-y")];

      createPlacemark(coords);

      myMap.setCenter(coords, 13, {
        duration: 500,
        timingFunction: "ease-in-out"
      });
    }
    setActivePlacemark();

    $(document).on("change", ".change_map_shop", setActivePlacemark);
  }
}
