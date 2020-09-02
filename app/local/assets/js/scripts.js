var orderFormValidate = $('.order_form').validate();
var likedBtn;

$(window).on("load", function() {
    // Slider animation
    var slickActive = $(".baner_slider .slick-slide.slick-active");
    slickActive.find(".baner__title").addClass("fadeInRight");
    slickActive.find(".baner__name").addClass("fadeInLeft");

    // Wow js
    var wow = new WOW();
    wow.init();
    $(".preloader--default").fadeOut(200);
    $("html").removeClass("popup_opened");
});

var likedPopupArrow;

$(document).ready(function() {
    $(".preloader--default .preloader__icon--1").fadeIn();
    new Vivus(
        "preloader_icon1", {
            duration: 80,
            type: "sync"
        },
        function() {
            $(".preloader--default .preloader__icon--1").addClass("active");
            $(".preloader--default .preloader__icon--2").addClass("active");
        }
    );

    $('form.validate').each(function() {
        $(this).validate();
    });

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
        })
        .on("setPosition", function(event, slick) {
            slick.$slides.css("height", slick.$slideTrack.height() + "px");
        });

    if (window.matchMedia("(max-width: 768px)").matches) {
        $(".bestsellers__slider").slick({
            slidesToShow: 1,

            dots: true,

            arrows: false,

            infinite: false,

            appendDots: ".bestsellers__dots",

            responsive: [{
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

        $(".features__slider").slick({
            slidesToShow: 3,

            dots: true,

            arrows: true,

            nextArrow: '<button class="slider_dots__button iconed_button next"><span class="iconed_button__icon icon-arrow-point-to-right"></span></button>',

            prevArrow: '<button class="slider_dots__button iconed_button prev"><span class="iconed_button__icon icon-arrow-point-to-right"></span></button>',

            appendArrows: ".features__slider_dots",

            appendDots: ".features__slider_dots",

            responsive: [{
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

        $(".brands__list > div").each(function(idx, el) {
            if (idx > 3) $(this).remove();
        });
    }

    // Слайдер на странице продукта

    $(".product_preview__slider")
        .slick({
            asNavFor: ".product_preview__slider_nav",
            arrows: false,
            fade: true,
            swipe: false,
            responsive: [{
                breakpoint: 768,
                settings: {
                    fade: false
                }
            }]
        })

        .on("beforeChange", function() {
            $(document)
                .find("video")
                .trigger("pause");
        });

    $(".product_preview__slider_nav")
        .slick({
            asNavFor: ".product_preview__slider",
            slidesToShow: 3,
            vertical: true,
            focusOnSelect: true,
            swipe: false,
            nextArrow: '<span class="product_preview__slider_arrow icon-arrow-point-to-right next"></span>',
            prevArrow: '<span class="product_preview__slider_arrow icon-arrow-point-to-right prev"></span>',
            responsive: [{
                    breakpoint: 1081,
                    settings: {
                        swipe: true,
                        slidesToShow: 4,
                        vertical: false
                    }
                },
                {
                    breakpoint: 769,
                    settings: {
                        swipe: true,
                        slidesToShow: 6,
                        vertical: false
                    }
                },
                {
                    breakpoint: 530,
                    settings: {
                        swipe: true,
                        slidesToShow: 4,
                        vertical: false
                    }
                },
                {
                    breakpoint: 400,
                    settings: {
                        swipe: true,
                        slidesToShow: 3,
                        vertical: false
                    }
                }
            ]
        });

    // Слайдер сопутствующих товаров

    $(".related_products .card_list").slick({
        slidesToShow: 4,

        dots: true,

        nextArrow: '<button class="hide_sm iconed_button next"><span class="iconed_button__icon icon-arrow-point-to-right"></span></button>',

        prevArrow: '<button class="hide_sm iconed_button prev"><span class="iconed_button__icon icon-arrow-point-to-right"></span></button>',

        appendArrows: ".slider_dots",

        appendDots: ".slider_dots",

        responsive: [{
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

        nextArrow: '<button class="iconed_button next"><span class="iconed_button__icon icon-arrow-point-to-right"></span></button>',

        prevArrow: '<button class="iconed_button prev"><span class="iconed_button__icon icon-arrow-point-to-right"></span></button>',

        appendArrows: ".brands__list__slider_dots",

        appendDots: ".brands__list__slider_dots",

        responsive: [{
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

    $(".slick-slider").on("afterChange", function(event, slick, currentSlide) {
        $(window).trigger("scroll");
    });
    // Поиск в шапке
    $(".open_search").on("click", function() {
        $(".showWhenSearch").show();
        $(".hideWhenSearch").hide();
        $(".search_overlay, .search_block").fadeIn(150);
        $(".search_block__input").focus();
        $(".perfect_scrollbar").scrollTop(1);
        $(".nav_main").addClass("search_active");
        if (window.matchMedia("(max-width: 733px)").matches) {
            setTimeout(function() {
                $("html").addClass("popup_opened");
                $("body").addClass("popup_opened");
            }, 5);
        }
    });
    $(".close_search").on("click", function() {
        $(".search_block, .search_overlay").fadeOut(150, function() {
            $(".showWhenSearch").hide();
            $(".hideWhenSearch").show();
            $(".nav_main").removeClass("search_active");
            $("html").removeClass("popup_opened");
            $("body").removeClass("popup_opened");
        });
    });
    if (window.matchMedia("(max-width: 1080px)").matches) {
        $(".nav_main__logo").addClass("hideWhenSearch");
        $(".nav_main__catalog_open").addClass("hideWhenSearch");
    }

    // Выпадающие списки у инпутов
    $(document).on("click", ".input", function(e) {
        // Закрытие поиска при повторном нажатии
        if (
            $(this)
            .closest(".input_dropdown")
            .hasClass("active")
        ) {
            $(".input_dropdown").removeClass("active");
        } else {
            $(".input_dropdown").removeClass("active");
            $(this)
                .closest(".input_dropdown")
                .addClass("active");
        }
    });
    $(document).on("click", ".input_container__dropdown_toggle", function() {
        // Нажатие на стрелочку
        if (
            $(this)
            .closest(".input_container")
            .hasClass("active")
        ) {
            $(".input_dropdown").removeClass("active");
        } else {
            $(".input_dropdown").removeClass("active");
            $(this)
                .closest(".input_container")
                .toggleClass("active");
        }
    });
    // Поиск - выпадающий список
    $(document).on("focus", ".input_dropdown input", function() {
        setTimeout(function() {
            $(".perfect_scrollbar").scrollTop(1);
        }, 5);
        $(".input_container__dropdown_border").removeClass('one_item');
        mobileCityId = $('.popup_oblast_mobile').val();
    });
    $(document).on("input", ".input_dropdown input", function(e) {
        $('.perfect_scrollbar').scrollTop(1);
        var val = $(this).val();
        var dropdown = $(this)
            .closest(".input_dropdown")
            .find(".input_container__search_list");
        var arr = dropdown.find(".text");
        arr.each(function() {
            var cur = $(this);
            cur.closest(".input_container__search_item").hide();
            if (cur.text().toLowerCase().indexOf(val.toLowerCase()) != -1) {
                // Для города в мобилке
                if(cur.hasClass('mobile_dropdown_city')) {
                    if (mobileCityId) {
                        cur.closest(".input_container__search_item[data-region='"+mobileCityId+"']").show();
                    } else {
                        cur.closest(".input_container__search_item").show();
                    }
                } else {
                    cur.closest(".input_container__search_item").show();
                }
            } else {
                cur.closest(".input_container__search_item").hide();
            }
        });

        if(dropdown.find('.input_container__search_item:visible').length == 1){
            $(this)
            .closest(".input_dropdown")
            .find(".input_container__dropdown_border").addClass('one_item');
        } else {
            $(this)
            .closest(".input_dropdown")
            .find(".input_container__dropdown_border").removeClass('one_item');
        }
        
    });
    // Выбор города в мобилке
    var mobileCityId;
    $(document).on('click', '.mobile_dropdown_region',function() {
        mobileCityId = $(this).attr('data-region-id');
       $('.mobile_dropdown_city').hide();
       $('.mobile_dropdown_city[data-region="'+mobileCityId+'"]').show();
       $('.mobile_dropdown_city_input').val('');
    });
    $(document).on("click", ".input_container__search_item", function(e) {
        var val = $(this)
            .find(".text")
            .text();
        $(this)
            .closest(".input_dropdown")
            .find(".input")
            .val(val);
        $(this)
            .closest(".input_container")
            .removeClass("active");
        e.stopPropagation();
    });
    $(document).on("click", ".input_container", function(e) {
        e.stopPropagation();
    });
    $(window).click(function() {
        $(".input_container").removeClass("active");
    });

    // Поиск города в попапе
    var citySearchVal = "";
    var curCityCat;

    function showAllCities() {
        $(".popup__cities_city").show();
        $(".popup__cities_item").show();
    }

    function searchCitiesByText() {
        var citiesList = $(".popup__cities_city:visible");
        citiesList.each(function() {
            var cur = $(this);
            if (
                cur
                .text()
                .toLowerCase()
                .indexOf(citySearchVal.toLowerCase()) != -1
            ) {
                $(this).show();
            } else {
                $(this).hide();
            }
        });
        hideEmptyCities();
    }

    // Фильтрация городов по вводу
    $(document).on("input", ".popup__search input", function(e) {
        var $this = $(this);
        setTimeout(function() {
            $(".perfect_scrollbar").scrollTop(1);
            citySearchVal = $this.val();

            $('.popup__cities_list_item').removeClass('active');

            if (curCityCat) {
                
                showAllCities();
                // $(".popup__cities_city").each(function() {
                //     if ($(this).attr("data-city") !== curCityCat) $(this).hide();
                // });
                searchCitiesByText();
            } else {
                showAllCities();
                searchCitiesByText();
            }
        }, 10);
    });

    // Выбор области города
    $(document).on("click", ".popup__cities_list_item", function() {

        if ($(this).hasClass("active")) {
            $(".popup__cities_list_item").removeClass("active");
            curCityCat = "";
            showAllCities();
            searchCitiesByText();
            setTimeout(function() {
                $(".popup_oblast_mobile").val("");
            }, 5);
        } else {
            $(".popup__cities_list_item").removeClass("active");
            $(this).addClass("active");

            curCityCat = $(this).data("city-link");

            if (citySearchVal) {
                showAllCities();
                searchCitiesByText();
                $(".popup__cities_city").each(function() {
                    if ($(this).attr("data-city") !== curCityCat) $(this).hide();
                });
            } else {
                showAllCities();
                $(".popup__cities_city").hide();
                $('.popup__cities_city[data-city="' + curCityCat + '"]').show();
            }

            hideEmptyCities();
        }

        $('.popup__cities_all').scrollTop(1);
    });

    // Прячем контейнер города в попапе, если пустой
    function hideEmptyCities() {
        $(".popup__cities_item").each(function(idx, el) {
            if ($(this).find(".popup__cities_city:visible").length) {
                $(this).show();
            } else {
                $(this).hide();
            }
        });
    }

    // Нажатие на город
    $(document).on("click", ".popup__cities_city, .setNewCity", function() {
        $(".nav_top__btns--additional").remove();
        $(".nav_top__btns_btn").css("visibility", "visible");
        var text = $(this).text();
        $.ajax({
            type: "POST",
            url: "/local/include/ajax/location.php",
            data: {
                city: text
            }
        });
        var data = $(this).data("city");
        $(".make_order__item_citie .val").text(text);
        $("#currentCityMobile").text(text);
        $(".city_changable").text(text);
        $(".city_changable_input").val(text);

        $(".popup__cities_list_item").removeClass("byDefault");
        $('.popup__cities_list_item[data-city-link="' + data + '"]').addClass(
            "byDefault"
        );
        $.magnificPopup.close();
    });
    // Поиск по городу в попае End
    // Вкладки фильтров
    $(document).on(
        "click",
        ".sidebar__filter_element--tab .sidebar__tab_button_wrap",
        function(e) {
            e.preventDefault;
            var container = $(this).closest(".sidebar__filter_element--tab");
            container.next(".sidebar__filter_tab").slideToggle(200);
            container
                .toggleClass("sidebar__filter_element--active")
                .find(".iconed_button")
                .toggleClass("active");
        }
    );
    
    $('.filter_sidebar').css('min-height', $('.bx_filter_section').height() + 'px');
    $(document).on("click", ".sidebar__filter_title:not(.not_tab)", function() {
        $(this)
            .parent()
            .find(".sidebar__filter_block_content")
            .slideToggle(200, function() {
                $(window).trigger('scroll');
                $('.filter_sidebar').css('min-height', $(this).closest('.sidebar__item').height() + 'px');
            });
        $(this)
            .parent(".sidebar__filter_block--tab")
            .toggleClass("active")
            .find(".iconed_button")
            .toggleClass("active");
        
    });

    // Табы над катологом
    $(document).on("click", ".sort__item", function(e) {
        if ($(this).hasClass("active")) {
            closeCatalogTopTabs();
        } else {
            closeCatalogTopTabs();

            $(this)
                .find(".sort__item_dropdown")
                .slideToggle(200);
            $(this).toggleClass("active");
            $(this)
                .find(".sort__item_button")
                .toggleClass("active");
        }
    });
    $(document).on("click", ".sort__item--first", function() {
        var th = $(this);
        if (th.hasClass("active")) {
            th.closest(".sort").addClass("active");
        } else {
            setTimeout(function() {
                th.closest(".sort").removeClass("active");
            }, 200);
        }
    });
    $(document).on("click", ".sort__item_dropdown_el", function() {
        $(this)
            .parent()
            .find(".sort__item_dropdown_el")
            .removeClass("active");
        $(this).addClass("active");
        var text = $(this)
            .text()
            .toLowerCase();
        $(this)
            .closest(".sort__item")
            .find(".sort__item_val")
            .text(text);

        var id = $(this).attr("data-id");
        var name = $(this).data("name");
        $.ajax({
            type: "POST",
            url: window.location.pathname,
            data: {
                id: id,
                name: name
            },
            beforeSend: function() {
                $("#catalogSection").hide();
                $(".smartfilter__overlay").fadeIn(200);
                $(".preloader--white").fadeIn(200);
            },
            success: function(data) {
                var html = $($.parseHTML(data))
                    .find("#catalog_main_content")
                    .html();
                $("#catalog_main_content").html(html);
                $(".lazy").lazy();

                $(".smartfilter__overlay").fadeOut(200);
                $(".preloader--white").fadeOut(200);
                $("body, html").animate({
                        scrollTop: $(".catalog_main").offset().top
                    },
                    600
                );
            }
        });
    });

    $(document).click(function(event) {
        $target = $(event.target);
        if (!$target.closest(".sort__item").length &&
            $(".sort__item_dropdown").is(":visible")
        ) {
            closeCatalogTopTabs();
        }
    });

    function closeCatalogTopTabs() {
        $(".sort__item_dropdown").slideUp(200);
        $(".sort__item:not(.sort__item--icon)").removeClass("active");
        $(".sort__item_button").removeClass("active");
        $(".sort").removeClass("active");
    }

    // Табы карточки товара
    $(".product_preview__tab").on("click", function() {
        $(this)
            .toggleClass("active")
            .find(".iconed_button")
            .toggleClass("active");
        $(this)
            .next(".product_preview__tab_content")
            .slideToggle(200);
    });

    // Табы меню футера
    $(".footer__tab_header").on("click", function() {
        $(this).toggleClass("active");
        $(this)
            .next()
            .slideToggle();
    });

    // Табы с полоской
    $(".tabs:not(.not_set) .tab:not(:first-child)").hide();
    $(document).on("click", ".tabs__button", function(e) {
        if (!$(this).closest(".tabs").hasClass("not_set")) {
            if(!$(this).hasClass('active')) {
                // Прячем вкладки
                if(!$(this).closest(".tabs").hasClass('tabs--ajax')) {
                    $(this)
                        .closest(".tabs")
                        .find(".tab")
                        .hide();
                }
                // Открываем нужную
                var linkToTab = $(this).attr("href");
                $(this)
                    .closest(".tabs")
                    .find(linkToTab)
                    .fadeIn();
            }
        }

        // Анимация полоски
        $(this)
            .closest(".tabs")
            .find(".tabs__button")
            .removeClass("active");
        $(this).addClass("active");
        var activeWidth = $(this).innerWidth();
        var itemPos = $(this).position();
        var posLeft = itemPos.left + parseInt($(this).css("marginLeft"), 10) + "px";
        $(this)
            .closest(".tabs")
            .find(".tabs__line_fill")
            .css({
                left: posLeft,
                width: activeWidth + "px"
            });
        if (
            $(this)
            .closest(".tabs")
            .hasClass("not_set")
        ) {
            e.preventDefault();
            $.ajax({
                method: "POST",
				url: $(this).attr("href"),
				beforeSend: function() {
					$('.make_order__tabs_content').hide();
					$('.preloader--white').fadeIn(200);
				},
                success: function(data) {
                    $('.preloader--white').fadeOut(200);
                    var html = $(data)
                        .find(".make_order__tabs_content")
                        .html();
					$(".make_order__tabs_content").html(html);
					$('.make_order__tabs_content').fadeIn(200);
                }
            });
        }
    });

    $(".tabs").each(function() {
        if ($(this).hasClass("not_set")) {
            $(this)
                .find(".tabs__button.active")
                .trigger("click")
                .addClass("active");
        } else {
            $(this)
                .find(".tabs__button")
                .eq(0)
                .trigger("click");
        }
    });

    $(".tabs__button :radio").on("click", function(event) {
        event.stopPropagation();
    });

    // Табы в личном кабинете
    $(".lk__tab_main").slideUp();
    $(document).on("click", ".lk__tab_header", function() {
        var container = $(this).closest(".lk__tab");

        if (container.hasClass("active")) {
            $(".lk__tab_main").slideUp(200);
            $(".lk__tab").removeClass("active");
            $(".lk__tab_header .iconed_button").removeClass("active");
        } else {
            $(".lk__tab_main").slideUp(200);
            $(".lk__tab").removeClass("active");
            $(".lk__tab_header .iconed_button").removeClass("active");

            container.find(".lk__tab_main").slideDown(200, function() {
                $("html, body").animate({
                    scrollTop: $(container).offset().top
                },
                500
                );
            });
            container.addClass("active");
            container.find(".lk__tab_header .iconed_button").addClass("active");
        }
    });

    if (window.matchMedia("(max-width: 1080px)").matches) {
        $(".lk_popup__content").slideUp();
        $(".lk_popup--page").on("click", function(e) {
            if (!$(e.target).hasClass("button")) {
                $(".lk_popup__content").slideToggle();
            }
        });

        $(".our_shops__item_title, .our_shops__item_content").removeClass(
            "not_tab"
        );
    }

    // Вкладки адресов
    $(".our_shops__item_content:not(.not_tab)").slideUp();
    $(document).on(
        "click",
        ".our_shops__item_title:not(.not_tab), .our_shops__item_toggle",
        function() {
            $(this)
                .closest(".our_shops__item")
                .find(".map")
                .hide();
            if (
                $(this)
                .closest(".our_shops__item")
                .hasClass("our_shops__item--active")
            ) {
                $(".our_shops__item").removeClass("our_shops__item--active");
                $(".our_shops__item_toggle").removeClass(
                    "our_shops__item_toggle--active"
                );
                $(".our_shops__item_content").slideUp({
                    duration: 200
                });
            } else {
                $(".our_shops__item").removeClass("our_shops__item--active");
                $(".our_shops__item_toggle").removeClass(
                    "our_shops__item_toggle--active"
                );
                $(".our_shops__item_content").slideUp({
                    duration: 200
                });
                $(this)
                    .closest(".our_shops__item")
                    .addClass("our_shops__item--active")

                    .find(".our_shops__item_toggle")
                    .addClass("our_shops__item_toggle--active")

                    .closest(".our_shops__item")
                    .find(".our_shops__item_content")
                    .slideDown({
                        duration: 200
                    });
            }
        }
    );
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
    // Диапозон времени
    $(".range_slider--time").slider({
        range: true,
        min: 540,
        max: 1260,
        step: 15,
        values: [540, 1260],
        slide: function(e, ui) {
            var hours1 = Math.floor(ui.values[0] / 60);
            var minutes1 = ui.values[0] - hours1 * 60;
            var hours2 = Math.floor(ui.values[1] / 60);
            var minutes2 = ui.values[1] - hours2 * 60;

            if (hours1.toString().length == 1) hours1 = "0" + hours1;
            if (minutes1.toString().length == 1) minutes1 = "0" + minutes1;
            if (hours2.toString().length == 1) hours2 = "0" + hours2;
            if (minutes2.toString().length == 1) minutes2 = "0" + minutes2;

            $("[name=timeFrom]").val(hours1 + ":" + minutes1);
            $("[name=timeEnd]").val(hours2 + ":" + minutes2);
        }
    });

    $("[name=timeFrom], [name=timeEnd]").on("change", function() {
        if (
            $(this)
            .val()
            .split(":")[1] > 59
        ) {
            $(this).val(59);
        }

        var from = $("[name=timeFrom]").val();
        var timeFrom = +from.split(":")[0] * 60 + +from.split(":")[1];
        if (timeFrom < 540 || timeFrom > 1260 || isNaN(timeFrom)) {
            $("[name=timeFrom]").val("09:00");
            timeFrom = 540;
        }

        var end = $("[name=timeEnd]").val();
        var timeEnd = +end.split(":")[0] * 60 + +end.split(":")[1];
        if (timeEnd > 1260 || timeEnd < timeFrom || isNaN(timeEnd)) {
            timeEnd = 1260;
            $("[name=timeEnd]").val("21:00");
        }

        $(".range_slider--time").slider("option", "values", [timeFrom, timeEnd]);
    });

    // Диапазон цены
    var minPrice = $(".range_slider--price").data("min");
    var maxPrice = $(".range_slider--price").data("max");
    $(".range_slider--price").slider({
        range: true,
        min: minPrice,
        max: maxPrice,
        step: 10,
        values: [minPrice, maxPrice],
        slide: function(e, ui) {
            $("[name=min_price]").val(ui.values[0]);
            $("[name=max_price]").val(ui.values[1]);
        }
    });
    $("[name=min_price], [name=max_price]").on("input", function() {
        var min = $("[name=min_price]").val();
        var max = $("[name=max_price]").val();
        $(".range_slider--price").slider("option", "values", [min, max]);
    });
    $("[name=min_price], [name=max_price]").on("change", function() {
        var min = $("[name=min_price]").val();
        var max = $("[name=max_price]").val();
        if (min > max) {
            min = max;
            $("[name=min_price]").val(max);
        }
        $(".range_slider--price").slider("option", "values", [min, max]);
    });

    yaMapInit();


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
                    coords, {
                        hintContent: "",
                        balloonContent: ""
                    },
                    icon
                );
                myMap.geoObjects.add(myPlacemark);
            }
        }
    }

    var startWindowScroll = 0;

    $(".open_popup_ajax").magnificPopup({
        type: "ajax",
        midClick: true,
        removalDelay: 500,
        closeMarkup: ""
    });

    $(document).on("click", ".popup_close", function() {
        $.magnificPopup.close();
    });

    if (window.matchMedia("(max-width: 768px)").matches) {
        $('[href="#cities_popup"]').attr("href", "#cities_popup_mobile");
    }

    $(document).on('click', '.popup__cities_city', function() {
        $('.popup__cities_city').removeClass('active');
        $(this).addClass('active');
    });

    // Product quantity
    $(document).on("change", ".product_quant", function() {
        $(this).val() < 1 ? $(this).val(1) : false;
    });
    // Запрет ввода ноля
    $(document).on(
        "change keyup input click mouseup",
        ".product_quant",
        function() {
            if (this.value.match(/[^0-9]|^0{1}/g)) {
                this.value = this.value.replace(/./g, "");
            }
            $(this)
                .closest(".cart_item")
                .find(".cart_item__changable_quant")
                .html(this.value);
        }
    );
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
            textEl
                .closest(".cart_item")
                .find(".cart_item__changable_quant")
                .html(quant);
        }

        $('[name="QUANTITY"]').trigger("change");
    }

    $.validator.addMethod(
        "time24",
        function(value, element) {
            return /^(0[0-9]|1[0-9]|2[0-3]|[0-9]):[0-5][0-9]$/.test(value);
        },
        "Некорректное время"
    );

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

    $("[data-number-min]").on("change", function() {
        var min = $(this).data("number-min");
        if ($(this).val() < min) $(this).val(min);
    });
    $("[data-number-max]").on("change", function() {
        var max = $(this).data("number-max");
        if ($(this).val() > max) $(this).val(max);
    });

    jQuery.extend(jQuery.validator.messages, {
        required: "Обязательно"
    });

    jQuery.validator.addMethod(
        "filesize_max",
        function(value, element, param) {
            var isOptional = this.optional(element),
                file;

            if (isOptional) {
                return isOptional;
            }

            if ($(element).attr("type") === "file") {
                if (element.files && element.files.length) {
                    file = element.files[0];
                    return file.size && file.size <= param;
                }
            }
            return false;
        },
        "Слишком большой размер файла"
    );

    
    $(document).on("submit", "form", function(e) {
        var $form = $(this);
        var formData = new FormData(this);

        // Обработка формы оформления заказа
        if($form.hasClass('order_form')) {
            $form.find('input.error').removeClass('error');
            $form.find('label.error').remove();
        } else {
            e.preventDefault();
            if ($form.valid()) {
                // Поле поиска
                if ($form.hasClass("search_block")) {
                    if ($(".search_block__input").val() !== "") {
                        $.ajax({
                            type: "POST",
                            url: $form.attr("action"),
                            data: $form.serialize(),
                            success: function() {
                                window.location.href = '/search/?q=' + $form.find('.search_block__input').val();
                            }
                        });
                    }
                }
                // Персональные данные
                else if ($form.hasClass("personal_info_form")) {
                    $.ajax({
                        type: "POST",
                        url: $form.attr("action"),
                        data: $form.serialize(),
                        beforeSend: function() {
                            $('.preloader--white').fadeIn(200);
                        },
                        success: function(data) {
                            $('.preloader--white').fadeOut(200);
                            if(data === 'success') {
                                $('.lk__main_response_error').fadeOut();
                                $.magnificPopup.open({
                                    items: {
                                        src: '#personal_success_popup'
                                    }
                                });
                            } else {
                                $('.lk__main_response_error').html(data).fadeIn();
                            }
                        }
                    });
                }
                // Купить в 1 клик
                else if ($form.hasClass("buy_one_click_form")) {
                    $.ajax({
                        type: "POST",
                        url: $form.attr("action"),
                        data: $form.serialize(),
                        beforeSend: function() {
                            $('.preloader--white').fadeIn(200);
                        },
                        success: function(data) {
                            $('.preloader--white').fadeOut(200);
    
                            $(".aboc-modal").trigger("click");
    
                            $.magnificPopup.open({
                                items: {
                                    src: "#success_popup"
                                },
                                type: "inline"
                            });
                            $.magnificPopup.instance.st.callbacks = {
                                close: function() {
                                    clearTimeout(closePopupTimeout);
                                }
                            };
                            // Закрываем через 5 сек
                            var closePopupTimeout = setTimeout(function() {
                                $.magnificPopup.close();
                            }, 5000);

                            $('.buy_one_click_form').replaceWith(data);
                        }
                    });
                }
                // Поиск города
                else if ($form.hasClass("city_search_form")) {
                    if ($(".city_search_form input[name=city]").val() !== "") {
                        $.ajax({
                            type: "POST",
                            url: $form.attr("action"),
                            data: $form.serialize()
                        });
                    }
                } else if ($form.hasClass("not_ajax")) {
                    return false;
                    // С файлом
                } else if($form.hasClass("default_success_file")) {
                    // Остальные формы
                    $.ajax({
                        type: "POST",
                        url: $form.attr("action"),
                        cache: false,
                        contentType: false,
                        processData: false,
                        data: formData,
                        beforeSend: function() {
                            $('.preloader--white').fadeIn(200);
                        },
                        success: function() {
                            $('.preloader--white').fadeOut(200);
    
                            $(".aboc-modal").trigger("click");
    
                            $.magnificPopup.open({
                                items: {
                                    src: "#success_popup"
                                },
                                type: "inline"
                            });
                            $.magnificPopup.instance.st.callbacks = {
                                close: function() {
                                    clearTimeout(closePopupTimeout);
                                }
                            };
                            // Очищаем форму
                            $form.each(function() {
                                this.reset();
                            });
                            $form.find('.form_clip__text').text($form.find('.form_clip__text').attr('data-text'));
                            $form.find('input[type=file]').val('');
                            $form.find(".valid").each(function() {
                                $(this).removeClass("valid");
                            });
                            $form.find(".error").each(function() {
                                $(this).removeClass("error");
                            });
                            // Удаляем disabled
                            $form.find("input").removeAttr("disabled");
                            // Закрываем через 5 сек
                            var closePopupTimeout = setTimeout(function() {
                                $.magnificPopup.close();
                            }, 5000);
                        }
                    });
                    return false;
                } else if($form.hasClass("default_success")) {
                    // Остальные формы
                    $.ajax({
                        type: "POST",
                        url: $form.attr("action"),
                        data: $form.serialize(),
                        beforeSend: function() {
                            if($form.find('.form_preloader').length) {
                                $form.find('.form_preloader').fadeIn(200);
                            } else {
                                $('.preloader--white').fadeIn(200);
                            }
                        },
                        success: function() {
                            $('.preloader--white').fadeOut(200);
                            $form.find('.form_preloader').fadeOut(200);
    
                            $(".aboc-modal").trigger("click");
    
                            $.magnificPopup.open({
                                items: {
                                    src: "#success_popup"
                                },
                                type: "inline"
                            });
                            $.magnificPopup.instance.st.callbacks = {
                                close: function() {
                                    clearTimeout(closePopupTimeout);
                                }
                            };
                            // Очищаем форму
                            $form.each(function() {
                                this.reset();
                            });
                            $form.find(".valid").each(function() {
                                $(this).removeClass("valid");
                            });
                            $form.find(".error").each(function() {
                                $(this).removeClass("error");
                            });
                            // Удаляем disabled
                            $form.find("input").removeAttr("disabled");
                            // Закрываем через 5 сек
                            var closePopupTimeout = setTimeout(function() {
                                $.magnificPopup.close();
                            }, 5000);
                        }
                    });
                }
                // Авторизация/регистрация
                else if ($form.hasClass("auth_form") || $form.hasClass("reg_form") || $form.hasClass("auth_form")) {
                    $.ajax({
                        type: "POST",
                        url: $form.attr("action"),
                        data: $form.serialize(),
                        beforeSend: function() {
                            if($form.find('.form_preloader').length) {
                                $form.find('.form_preloader').fadeIn(200);
                            } else {
                                $('.preloader--white').fadeIn(200);
                            }
                        },
                        success: function(data) {
                            $form.find('.form_preloader').fadeOut(200);
                            $('.preloader--white').fadeOut(200);
                            if ($.trim(data)) {
                                $form.closest('.tab').html(data);
                            } else {
                                document.location.reload();
                            }
                            masksReinit();
                        }
                    });
                }
                // Форма с заменой контента внутри себя и перезагрузкой страницы
                else if ($form.hasClass("ajax_replace")) {
                    $.ajax({
                        type: "POST",
                        url: $form.attr("action"),
                        data: $form.serialize(),
                        beforeSend: function() {
                            if($form.find('.form_preloader').length) {
                                $form.find('.form_preloader').fadeIn(200);
                            } else {
                                $('.preloader--white').fadeIn(200);
                            }
                        },
                        success: function(data) {
                            $('.preloader--white').fadeOut(200);
                            $form.find('.form_preloader').fadeOut(200);
                            if($.trim(data)) {
                                $form.html(data);
                            } else {
                                document.location.reload();
                            }
                        }
                    });
                }
                else {
                    $.ajax({
                        type: "POST",
                        url: $form.attr("action"),
                        data: $form.serialize()
                    });
                }
            } else if(!$form.closest('.popup').length) {
                $('html,body').stop().animate({scrollTop: $('.error').eq(0).offset().top}, 500, 'swing');
            }
        }
    });
    
    $(document).on("click", ".remove_cart", function(e) {
        var container = $(e.target).closest(".small_popup");
        var id = $(this).attr("data-id");
        $.ajax({
            type: "POST",
            url: "/local/include/ajax/delete_to_basket.php",
            data: {
                id: id
            },
            success: function(data) {
                setActiveElements();
                changeCartCount(data);

                // Закрываю попапы, если пусто
                if (container && !container.find(".cart_item").length) {
                    $(document).trigger("click");
                }

                // фикс бага из-за скролла
                $(this)
                    .closest(".perfect_scrollbar")
                    .scrollTop(1);
            }
        });
    });

    // Поиск
    var delayTimer;
    $(".search_block__input").on("input", function() {
        if ($(this).val().length < 2) return false;
        var th = $(this);

        var $form = $(this).closest("form");
        clearTimeout(delayTimer);
        delayTimer = setTimeout(function() {
            $.ajax({
                type: "POST",
                url: $form.attr("action"),
                data: $form.serialize(),
                beforeSend: function() {
                    $('.search_block__preloader').fadeIn(200);
                },
                success: function(data) {
                    $('.search_block__preloader').fadeOut(200)
                    $(".search_block__dropdown_wrap").remove();
                    $(".search_block").append(data);
                    if (document.querySelector(".search_block .perfect_scrollbar")) {
                        var ps = new PerfectScrollbar(
                            document.querySelector(".search_block .perfect_scrollbar")
                        );
                    }
                    setActiveElements();
                }
            });
        }, 500);
    });

    // Добавить все в корзину
    $(document).on("click", ".liked_popup__all_to_cart", function() {
        $(".liked_popup__wrap .to_cart:not(.active)").trigger("click");
    });

    function changeFavouriteCount(val) {
        $(".open_liked .badge").html(val);
        $(".open_liked .badge").show();
        $(".open_liked").removeClass("disabled");
    }

    function changeCartCount(data) {
        var json = JSON.parse(data);
        $(".open_cart .badge").html(json.COUNT);
        $(".open_cart .icon_menu__price").html(json.SUM);
        $(".cart_popup__wrap .cart__footer_price").html(json.SUM);
        $(".open_cart .badge").show();
        $(".open_cart .icon_menu__price").show();
        $(".open_cart").removeClass("disabled");
        $(".open_cart").closest(".icon_menu__item").removeClass('active');
    }

    // Переключение отображения карточек в каталоге
    $(document).on("click", ".sort__item.sort__item--icon", function() {
        var name = $(this).data("name");
        $.ajax({
            type: "POST",
            url: "/local/include/ajax/catalog_section_template.php",
            data: {
                display: name
            }
        });
    });
    
    // Слайдер инстаграм
    // На мобиле ограничиваем количество слайдов
    if (window.matchMedia("(max-width: 768px)").matches) {
        $('.on_instagram__slide').each(function(idx, val) {
            if (idx > 2) $(this).parent().remove();
        });
    };
    $(".on_instagram__slider").slick({
        slidesToShow: 7,
        dots: true,
        lazyLoad: "ondemand",
        nextArrow: '<button class="slider_dots__button iconed_button next"><span class="iconed_button__icon icon-arrow-point-to-right"></span></button>',
        prevArrow: '<button class="slider_dots__button iconed_button prev"><span class="iconed_button__icon icon-arrow-point-to-right"></span></button>',
        appendArrows: ".on_instagram__slider_dots",
        appendDots: ".on_instagram__slider_dots",
        responsive: [{
                breakpoint: 1080,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 1080,
                settings: {
                    slidesToShow: 4
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

    // Lazy load
    $(".lazy").Lazy({
        // your configuration goes here
        scrollDirection: "vertical",
        effect: "fadeIn",
        visibleOnly: true,
        onError: function(element) {
            console.log("error loading " + element.data("src"));
        }
    });

    // Открытие меню каталога
    $(".open_catalog").on("click", function() {
        $(".catalog_open_btn").addClass("active");
        $(".catalog_menu").fadeIn(150);
        $("html, body").animate({
                scrollTop: $(".toggle_catalog").offset().top
            },
            500,
            function() {
                $("html").addClass("popup_opened_catalog");
                $("body").addClass("popup_opened_catalog");
            }
        );
    });
    // Закрытие меню каталога
    $(".close_catalog").on("click", function() {
        $(".catalog_open_btn").removeClass("active");
        $(".catalog_menu").fadeOut(150);
        $("html").removeClass("popup_opened_catalog");
        $("body").removeClass("popup_opened_catalog");
    });
    // Переключение меню каталога
    $(".toggle_catalog").on("click", function(e) {
        e.preventDefault();
        if ($(".catalog_open_btn").hasClass("active")) {
            $("html").toggleClass("popup_opened_catalog");
        } else {
            $("html, body")
                .animate({
                        scrollTop: $(".nav_bottom__container").offset().top
                    },
                    500
                )
                .promise()
                .then(function() {
                    $("html").toggleClass("popup_opened_catalog");
                });
        }
        $(".catalog_open_btn").toggleClass("active");
        $(".catalog_menu").fadeToggle(150);
    });

    // Кнопки сортировки в каталоге
    $(document).on("click", ".sort__item--icon", function() {
        $(".sort__item--icon").removeClass("active");
        $(this).addClass("active");
        if ($(this).data("catalog") === "hor") {
            $(".catalog_main")
                .find(".card_list")
                .addClass("card_list--horizontal");
        } else {
            $(".catalog_main")
                .find(".card_list")
                .removeClass("card_list--horizontal");
        }
    });

    // Fancybox
    $("[data-fancybox]").fancybox({
        buttons: ["thumbs", "close"],
        closeClickOutside: true
    });

    // Подсвечивание .card2
    $(document).on("click", ".card2:not(.card2--unclickable)", function() {
        $(this)
            .parent()
            .find(".card2")
            .removeClass("active");
        $(this).addClass("active");
    });

    // Личный кабинет
    $(".lk_open").on("click", function(e) {
        if ($(".lk_popup__wrap").is(":visible")) {
            closeSmallPopups();
        } else {
            closeSmallPopups();
            $(".lk_open").addClass("active");
            $(".lk_popup__wrap").fadeIn(100);
        }
        e.stopPropagation();
    });
    // Избранное
    $(document).on("click", ".open_liked:not(.disabled):not(a)", function(e) {
        likedBtn = $(this);
        var el = $(this);
        var popup = $(".liked_popup__wrap");
        var topPos =
            el.offset().top + $(this).height() + $(this).data("popup-top") + "px";

        if (el.data("popup-left")) {
            var leftPos =
                el.offset().left - popup.width() + $(this).data("popup-left") + "px";
        } else {
            leftPos = "0px";
        }
        var rightPos =
            $(this).offset().left - popup.width() + $(this).data("popup-right");
        likedPopupArrow = $(this).data("arrow-left") + "px";
        likedTop = topPos;
        likedLeft = leftPos;
        popup.css({
            top: topPos,
            left: leftPos,
            right: rightPos ? rightPos : "auto"
        });
        popup.find(".small_popup__arrow").css({
            left: likedPopupArrow ? likedPopupArrow : "auto"
        });
        if (popup.is(":visible")) {
            closeSmallPopups();
        } else {
            closeSmallPopups();
            $(".open_liked").addClass("active");
        }
        e.stopPropagation();
    });
    $(".mobile_menu").on("scroll", function() {
        $(".liked_popup__wrap").css({
            top: $(".open_liked_mobile").offset().top +
                $(".open_liked_mobile").height() +
                $(".open_liked_mobile").data("popup-top") +
                "px"
        });
    });
    // Корзина
    $(document).on("click", ".open_cart:not(.disabled)", function(e) {
        if ($(".cart_popup__wrap").is(":visible")) {
            closeSmallPopups();
        } else {
            closeSmallPopups();
            $(".open_cart").addClass("active");
            $(this).closest(".icon_menu__item").addClass('active');
            // $(".cart_popup__wrap").fadeIn(100);
        }
        if (window.matchMedia("(max-width: 576px)").matches) {
            // $(".search_overlay").fadeIn(100);
        }
        e.stopPropagation();

        if (window.matchMedia("(max-width: 768px)").matches) {
            $("html").addClass("popup_opened");
            $("body").addClass("popup_opened");
        }
        $(".perfect_scrollbar").scrollTop(1);
    });

    // Закрытие .small_popup
    function closeSmallPopups() {
        $(document).trigger("click");
        $('html, body').removeClass('popup_opened');
    }

    // Закрываем при клике вне
    $(document).click(function(event) {
        $target = $(event.target);
        if (!$target.closest(".small_popup__wrap").length &&
            $(".small_popup__wrap").is(":visible") &&
            !$target.hasClass("remove_cart") &&
            !$target.hasClass("remove_favourite")
        ) {
            $(".lk_popup__wrap, .liked_popup__wrap, .cart_popup__wrap").fadeOut(100);
            $(".open_cart, .open_liked, .lk_open").removeClass("active");

            $("html").removeClass("popup_opened");
            $("body").removeClass("popup_opened");
        }
    });

    // "Указать точное время"
    $(".exact_time_1").hide();
    $("[name=isExactTime]").on("change", function() {
        if ($(this).is(":checked")) {
            $(".exact_time_1").fadeIn();
            $(".exact_time_2").hide();
        } else {
            $(".exact_time_1").hide();
            $(".exact_time_2").fadeIn();
        }
    });

    // Инициализация scrollbars
    if ($(".perfect_scrollbar").length) {
        var container = document.querySelectorAll(".perfect_scrollbar");
        for (var i = 0; i < container.length; i++) {
            var ps = new PerfectScrollbar(container[i]);
        }
    }
    if ($(".filter_sidebar__perfect_scrollbar").length && window.matchMedia("(max-width: 1080px)").matches) {
        var container = document.querySelectorAll(".filter_sidebar__perfect_scrollbar");
        for (var i = 0; i < container.length; i++) {
            var ps = new PerfectScrollbar(container[i]);
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

    // Показать пароль
    $(".show_pass").click(function() {
        var input = $(this)
            .closest(".input_container")
            .find("input");
        if (input.attr("type") === "password") {
            input.attr("type", "text");
        } else if (input.attr("type") === "text") {
            input.attr("type", "password");
        }
    });

    // Открытие фильтра в каталоге
    $(document).on("click", ".filter_open", function() {
        $(".filter_sidebar").addClass("active");
        $(".content_overlay").addClass("active");
        $(".full_overlay").fadeIn(100);
        $(".perfect_scrollbar").scrollTop(1);
        $("html").addClass("popup_opened");
        $("body").addClass("popup_opened");
    });
    $(document).on("click", ".filter_close", function() {
        $(".filter_sidebar").removeClass("active");
        $(".content_overlay").removeClass("active");
        $(".full_overlay").fadeOut(100);
        $("html").removeClass("popup_opened");
        $("body").removeClass("popup_opened");
    });

    if (window.matchMedia("(max-width: 1080px)").matches) {
        // Добавляем scrollable сайдбару на мобильных
        $(".filter_sidebar__inner").addClass("scrollable");
    }

    // Превращаем карточки в ссылки
    $(document).on("click", ".card__header", function(e) {
        if ($(e.target).hasClass("card__header")) {
            window.location = $(this).attr("data-href");
            return false;
        }
    });
    // Переключатель класса active
    $(".toggle_active").on("click", function() {
        $(this).toggleClass("active");
    });

    $(window).on("scroll", function() {
        // Прогрес скролла
        if ($(".progress").length) {
            $(".progress").each(function(idx, el) {
                var elTop = $(this).offset().top;
                var calc = percentageSeen($(this), $(this).data("progress-offset"));

                if (calc <= 100 && calc >= 0) {
                    if (window.matchMedia("(max-width: 1080px)").matches) {
                        $(this)
                            .find(".progress__line--fill")
                            .css("height", calc + "%");
                    } else {
                        $(this)
                            .find(".progress__line--fill")
                            .css("width", calc + "%");
                    }
                }

                var progressItem = $(this).find(".progress__item");
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
    $(window).trigger("scroll");

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

    $(".mobile_menu__sec, .mobile_menu__link, .mobile_menu__link2").on("click", function() {
            $(".mobile_menu__sec, .mobile_menu__link, .mobile_menu__link2").removeClass("active");
            $(this).addClass("active");
        }
    );

    $(document).on(
        "click",
        ".nav_top__btns--additional .nav_top__btns_btn",
        function() {
            $.magnificPopup.close();
        }
    );

    $(".form_clip input").on("change", function() {
        var filename = $(this)
            .val()
            .replace(/C:\\fakepath\\/i, "");
        if (filename) {
            $(this)
                .closest(".form_clip")
                .find(".form_clip__text")
                .text(filename);
        } else {
            $(this)
                .closest(".form_clip")
                .find(".form_clip__text")
                .text($(this).data("text"));
        }
    });

    $(".our_shops__show").on("click", function() {
        if (window.matchMedia("(max-width: 768px)").matches) {
            $(this)
                .closest(".our_shops__item_content")
                .find(".map")
                .toggle();
        }
    });

    // Удаление в корзине/избранном
    // $(document).on(
    //     "click",
    //     ".cart_popup .remove_cart, .liked_popup .remove_favourite",
    //     function() {
    //         $(this)
    //             .closest(".small_popup__container")
    //             .next("hr")
    //             .remove();
    //         $(this)
    //             .closest(".small_popup__container")
    //             .remove();
    //     }
    // );

    //  Фильтры в каталоге
    var filterTimer;
    $(document).on(
        "change",
        ".smartfilter .checkbox input[type=checkbox]",
        function() {
            var $th = $(this);
            clearTimeout(filterTimer);
            filterTimer = setTimeout(function() {
                // $('.bx_filter_popup_result a').trigger('click');
            }, 1000);
        }
    );

    setActiveElements();

    // Выбранные фильтры
    $(document).on("click", ".current_filter", function(e) {
        e.preventDefault();
        var id = $(this).data("filter");
        $(this)
            .closest("form")
            .find("#" + id)
            .trigger("click");
        $(this).remove();
    });

    $(".our_shops__item_title")
        .on("mouseenter", function() {
            $(this)
                .parent()
                .find(".our_shops__item_toggle")
                .addClass("hovered");
        })
        .on("mouseleave", function() {
            $(this)
                .parent()
                .find(".our_shops__item_toggle")
                .removeClass("hovered");
        });

    // Открываем логин попап по урлу
    if (window.location.href.indexOf('#login_popup') > -1 || window.location.href.indexOf('auth_service_error=1') > -1) {
        $.magnificPopup.open({
            items: {
                src: '#login_popup'
            },
            type: 'inline',
            callbacks: {
                open: function() {
                    $('#login_popup .tabs__button').eq(0).trigger('click');
                }
            }
        });
    }

    $(document).on('click', '.sidebar__filter_tab_item .sidebar__tab_button_wrap', function() {
        $(this).next('.sidebar__filter_tab').slideToggle();
    });

    masksReinit();

    $('.make_order__shop_item input[type=radio]').on('change', function() {
        $('.make_order__shop_item input[type=radio]').each(function() { $(this).closest('.make_order__shop_item').removeClass('active') });
        if($(this).is(":checked")) $(this).closest('.make_order__shop_item').addClass('active');
    });
});

function getCookie(name) {
    var value = "; " + document.cookie;
    var parts = value.split("; " + name + "=");
    if (parts.length == 2)
        return parts
            .pop()
            .split(";")
            .shift();
}

function setActiveElements() {
    // Применение избранного из куки
    var favourites = [],
    inCart = [];
    if (getCookie("FAVORITES_ID")) {
        favourites = getCookie("FAVORITES_ID").split("%2C");
    }
    if (getCookie("BASKET_ID")) {
        inCart = getCookie("BASKET_ID").split("%2C");
    }
    $(".add_to_favorite").removeClass("active");
    $(favourites).each(function(idx, el) {
        var id = el;
        $(".add_to_favorite[data-id=" + id + "]").addClass("active");
    });
    $(".to_cart").removeClass("active");
    $(inCart).each(function(idx, el) {
        var id = el;
        $('.add_to_cart[data-id="' + id + '"]').addClass("active");
    });
}

$.validator.addMethod(
    "ruPhone",
    function(value, element) {
        return /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/.test(value);
    },
    "Некорректный номер"
);

function masksReinit() {
    $("[data-mask=city]").formatFeild({
        layout: "toRu",
        titleCase: true
    });
    $("[data-mask=inn]").formatFeild({
        integerPositive: true
    });
    $("[data-mask=inn]").rules('add', {
        minlength: 10,
        maxlength: 12
    });

    $("[data-mask=time]").inputmask("99:99");
    
    $("[data-mask=fio]").formatFeild({
        titleCase: true,
        layout: "toRu"
    });

    $("[data-mask=phone]").inputmask("+7 (999) 999 99 99", {
        clearIncomplete: !0,
        onincomplete: function() {
            var t = $(this).parents("form");
            $.data(t[0], "validator") && $(this).valid();
        }
    });
    $("[data-mask=phone]").rules('add', {
        ruPhone: true
    });

    $("[name=min_price], [name=max_price]").formatFeild({
        integerPositive: true
    });

    $("[data-mask=integerPositive]").formatFeild({
        integerPositive: true
    });
    $("[name=password2]").rules("add", {
        equalTo: "[name=password1]"
    });
    $("[data-max-size=20]").rules("add", {
        filesize_max: 20000000
    });
    $("[data-mask=time]").rules("add", {
        time24: true
    });

    $("[data-mask=email]").rules("add", {
        email: true,
        maxlength: 100
    });
    $("[data-mask=email]").formatFeild({
        layout: "toEn",
        noSpaces: true
    });
}; 

reinitScrollable();
function reinitScrollable() {
    // Предотвращение скролла фона (.scrollable)
    $(".scrollable").on("mousewheel DOMMouseScroll", function(e) {
        var e0 = e.originalEvent,
            delta = e0.wheelDelta || -e0.detail;

        this.scrollTop += (delta < 0 ? 1 : -1) * 30;
        e.preventDefault();
    });
};

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