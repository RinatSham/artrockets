// Слайдер на главной
$(".baner_slider")
  .slick({
    dots: true,
    fade: true,
    nextArrow: $(".baner_slider__arrows .next"),
    prevArrow: $(".baner_slider__arrows .prev")
  })
  // Добавление анимации для текста в банере
  .on("afterChange", function() {
    $(this)
      .find(".slick-active .baner__title")
      .addClass("fadeInRight")
      .css("opacity", "1");
    $(this)
      .find(".slick-active .baner__name")
      .addClass("fadeInLeft")
      .css("opacity", "1");
  })
  .on("beforeChange", function() {
    $(this)
      .find(".baner__title")
      .removeClass("fadeInRight")
      .css("opacity", "0");
    $(this)
      .find(".baner__name")
      .removeClass("fadeInLeft")
      .css("opacity", "0");
  }).on('setPosition', function (event, slick) {
    slick.$slides.css('height', slick.$slideTrack.height() + 'px');
	});

if (window.matchMedia("(max-width: 768px)").matches) {
  $('.bestsellers__slider').slick({
    slidesToShow: 1,
    dots: true,
		arrows: false,
		infinite: false,
    appendDots: ".bestsellers__dots",
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });

  $('.features__slider').slick({
    slidesToShow: 3,
    dots: true,
    arrows: true,
    nextArrow:
		'<button class="slider_dots__button iconed_button next"><span class="iconed_button__icon icon-arrow-point-to-right"></span></button>',
		prevArrow:
		'<button class="slider_dots__button iconed_button prev"><span class="iconed_button__icon icon-arrow-point-to-right"></span></button>',
		appendArrows: ".features__slider_dots",
		appendDots: ".features__slider_dots",
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });
}
if (window.matchMedia("(max-width: 575px)").matches) {
  // Удаляю лишние слайды
  $('.brands__list > div').each(function(idx, el) {
    if(idx > 3) $(this).remove();
  });
}


// Слайдер на странице продукта
$(".product_preview__slider")
  .slick({
    asNavFor: ".product_preview__slider_nav",
    arrows: false,
    fade: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          fade: false
        }
      }
    ]
  })
  .on("beforeChange", function() {
    $(document)
      .find("video")
      .trigger("pause");
  });
$(".product_preview__slider_nav").slick({
  asNavFor: ".product_preview__slider",
  slidesToShow: 3,
  vertical: true,
  focusOnSelect: true,
  nextArrow:
    '<span class="product_preview__slider_arrow icon-arrow-point-to-right next"></span>',
  prevArrow:
    '<span class="product_preview__slider_arrow icon-arrow-point-to-right prev"></span>',
  responsive: [
    {
      breakpoint: 1081,
      settings: {
        slidesToShow: 4,
        vertical: false
      }
    },
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 6,
        vertical: false
      }
    },
    {
      breakpoint: 530,
      settings: {
        slidesToShow: 4,
        vertical: false
      }
    },
    {
      breakpoint: 400,
      settings: {
        slidesToShow: 3,
        vertical: false
      }
    }
  ]
}).on('beforeChange', function(e, slide, index1, index){
//   var item_length = $('.product_preview__slider_nav .slick-slide:not(.slick-cloned)').length - 1;
//   if( item_length === index ){
//     $('.product_preview__slider_arrow.next').css("visibility", "hidden");
//   } else if( index === 0 ) {
//     $('.product_preview__slider_arrow.prev').css("visibility", "hidden");
//   } else {
//     $('.product_preview__slider_arrow').css("visibility", "visible");
//   };
});

// Слайдер сопутствующих товаров
$(".related_products .card_list").slick({
  slidesToShow: 4,
  dots: true,
  nextArrow:
    '<button class="hide_sm iconed_button next"><span class="iconed_button__icon icon-arrow-point-to-right"></span></button>',
  prevArrow:
    '<button class="hide_sm iconed_button prev"><span class="iconed_button__icon icon-arrow-point-to-right"></span></button>',
  appendArrows: ".slider_dots",
  appendDots: ".slider_dots",
  responsive: [
    {
      breakpoint: 1080,
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1
      }
    }
  ]
});

// Слайдер брендов
$(".brands__list").slick({
  slidesToShow: 6,
  dots: true,
  nextArrow:
    '<button class="iconed_button next"><span class="iconed_button__icon icon-arrow-point-to-right"></span></button>',
  prevArrow:
    '<button class="iconed_button prev"><span class="iconed_button__icon icon-arrow-point-to-right"></span></button>',
  appendArrows: ".brands__list__slider_dots",
  appendDots: ".brands__list__slider_dots",
  responsive: [
    {
      breakpoint: 1150,
      settings: {
        slidesToShow: 5
      }
    },
    {
      breakpoint: 1081,
      settings: {
        slidesToShow: 6
      }
    },
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 4
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 2
      }
    }
  ]
});

$('.slick-slider').on('afterChange', function(event, slick, currentSlide) {
  $(window).trigger('scroll');
});