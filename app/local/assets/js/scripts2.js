function lazy_load(){
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
}

$(document).ready(function() {

	/*обновление большой и малой корзины*/
	function change_baskets(data){
        var big_basket = $(data).find(".big_basket");
        var small_basket = $(data).find(".small_basket");
        var favorites = $(data).find(".favorites");
        var favoritesPopup = $(data).find(".liked_popup__wrap .liked_popup");

        var scrollPos = $('.small_popup__wrap:visible .perfect_scrollbar').scrollTop();
        
    	if(big_basket != undefined){
    		$(".big_basket").html(big_basket.html());
    	}
    	
    	if(small_basket != undefined){
            if($('.cart_popup__wrap').is(":visible")) {
                small_basket.find('.cart_popup__wrap').css('display', 'block');
            }
            $(".small_basket").html(small_basket.html());
	    }

	    if(favorites.html() != undefined){
            $(".favorites").html(favorites.html());
            $(".liked_popup__wrap .liked_popup").html(favoritesPopup.html());
            if(favoritesPopup.html() == undefined) {
                $(".liked_popup__wrap").fadeOut(200);
                $(".open_liked").addClass('disabled');
            }
        }

        $('.small_popup__wrap:visible .perfect_scrollbar').scrollTop(scrollPos);

    	lazy_load();
	}
	/*обновление большой и малой корзины END*/


	/*изменение количества в корзине*/
	$(document).on("click", ".change_quant__minus", function() {
		if($(this).closest('.change_quant').find("input[name=quantity]").val() != 1){
			var action = $(this).attr("data-action");
			var id = $(this).attr("data-id");
			var quantity = $(this).closest("div").find("input[name=quantity]").val();

			var total_quantity;
			total_quantity = parseInt(quantity) - 1;
			$(this).closest("div").find("input[name=quantity]").val(total_quantity);
			$(this).closest("div").find("input[name=quantity]").trigger("change");
		}
	});
	$(document).on("click", ".change_quant__plus", function() {
		var action = $(this).attr("data-action");
		var id = $(this).attr("data-id");
		var quantity = $(this).closest("div").find("input[name=quantity]").val();

		var total_quantity;
		total_quantity = parseInt(quantity) + 1;
		$(this).closest("div").find("input[name=quantity]").val(total_quantity);
		$(this).closest("div").find("input[name=quantity]").trigger("change");
	});

	//переменная для задержки аякс-запроса
	var delayTimer;

	$(document).on("change", "input[name=quantity]", function() {
		var quantity = $(this).val();
		var id = $(this).attr("data-id");
		var quantity = $(this).val();

		if(delayTimer){
	    	clearTimeout(delayTimer);
		}

	    delayTimer = setTimeout(function() {
	         
	         $.ajax({
	            type: "POST",
	            url: "/local/include/ajax/change_basket.php",
	            data: {
	                id: id,
	                quantity: quantity
                },
                beforeSend: function() {
                    $('.big_basket_form .form_preloader').fadeIn(200);
                    $('.small_basket .form_preloader').fadeIn(200);
                },
	            success: function(data) {
                    $('.big_basket_form .form_preloader').fadeOut(200);
                    change_baskets(data);

                    var ps = new PerfectScrollbar(document.querySelector(".small_popup__wrap .perfect_scrollbar") );
                    reinitScrollable();
	            }
	        });  

	    }, 500);
	});
	/*изменение количества в корзине END*/


	/*удаление из корзины*/
	$(document).on("click", ".delete_from_basket", function() {
        var id = $(this).attr("data-id");

        $.ajax({
            type: "POST",
            url: "/local/include/ajax/delete_from_basket.php",
            data: {
                id: id
            },
            beforeSend: function() {
                $('.big_basket_form .form_preloader').fadeIn(200);
                $('.small_basket .form_preloader').fadeIn(200);
            },
            success: function(data) {
                $('.big_basket_form .form_preloader').fadeOut(200);
                $('.small_basket .form_preloader').fadeOut(200);
                change_baskets(data);

                if(!$('.cart_popup__wrap').is(':visible')) $('.search_overlay').fadeOut(200);
                $('html, body').removeClass('popup_opened');
                
                var ps = new PerfectScrollbar(document.querySelector(".small_popup__wrap .perfect_scrollbar") );
                reinitScrollable();
            }
        });
    });
    /*удаление из корзины END*/


    /*добавление в корзину*/
    $(document).on("click", ".add_to_basket", function() {
        var id = $(this).attr("data-id");

        //если на странице есть инпут для выбора количества (например в карточке товара)
        if($(document).find("input[name=product_quant_"+id+"]").length){
        	var quantity = $(document).find("input[name=product_quant_"+id+"]").val();
        }

        $.ajax({
            type: "POST",
            url: "/local/include/ajax/add_to_basket.php",
            data: {
                id: id,
                quantity: quantity
            },
            success: function(data) {
            	$.magnificPopup.open({
                    items: {
                        src: "#tocart_popup"
                    },
                    type: "inline"
                });

                change_baskets(data);
                
                var ps = new PerfectScrollbar(document.querySelector(".small_popup__wrap .perfect_scrollbar") );
                reinitScrollable();

            	//если на странице есть инпут для выбора количества (например в карточке товара)
            	if($(document).find("input[name=product_quant_"+id+"]").length){
            		$(document).find("input[name=product_quant_"+id+"]").val(1);
                }

                console.log(likedBtn.offset().top + likedBtn.height() + likedBtn.data("popup-top") + "px");
                $(".liked_popup__wrap").css({
                    top: likedBtn.offset().top + likedBtn.height() + likedBtn.data("popup-top") + "px",
                    left: likedBtn.offset().left - $(".liked_popup__wrap").width() + likedBtn.data("popup-left") + "px"
                });
                
                setActiveElements();
            }
        });
    });
    /*добавление в корзину END*/


    /*открытие корзины в шапке*/
    var openCartAjax = true;
    $(document).on("click", ".open_cart", function() {
        var btn = $(this);

    	if ($(".small_basket .small_popup__wrap").is(":visible") != true) {
            if (openCartAjax) {
                $(".cart_popup__wrap").fadeIn(100);
                $.ajax({
                    type: "POST",
                    url: "/local/include/ajax/get_to_basket.php",
                    success: function(data) {
                        $(".small_basket .small_popup__wrap").remove();
                        if (!data) {
                            btn.addClass('disabled');
                            btn.removeClass('active');
                        } else {
                            btn.removeClass('disabled');

                            $(".small_basket").append(data);
                            $(".cart_popup__wrap").show();
        
                            var ps = new PerfectScrollbar(document.querySelector(".small_popup__wrap .perfect_scrollbar") );
                            reinitScrollable();
                        }
                    }
                });
                openCartAjax = false;
            } else {
                $(".cart_popup__wrap").fadeIn(100);
                $('.small_basket perfect_scrollbar').scrollTop(1);
            }
	    }

    });
    /*открытие корзины в шапке END*/ 

    /*открытие избранного в шапке*/
    var openLikedAjax = true;
    $(document).on("click", ".open_liked:not(.disabled)", function() {
        var btn = $(this);

    	if ($(".liked_popup__wrap").is(":visible") != true) {

            if(openLikedAjax){
                $.ajax({
                    type: "POST",
                    url: "/local/include/ajax/get_to_favourites.php",
                    success: function(data) {
                        if (!data) {
                            btn.addClass('disabled');
                            btn.removeClass('active');
                        } else {
                            btn.removeClass('disabled');
                            
                            $(".liked_popup__wrap").html($(data).html());
                            $(".liked_popup__wrap").fadeIn(100, function() {
                                var container = document.querySelectorAll(".liked_popup__wrap .perfect_scrollbar");
                                for (var i = 0; i < container.length; i++) {
                                    var ps = new PerfectScrollbar(container[i]);
                                }
                                reinitScrollable();
                            });
                        };
                        $('.small_popup__arrow').css('left', likedPopupArrow);
                    }
                });
                openLikedAjax = false;
            } else {
                $(".liked_popup__wrap").fadeIn(100, function() { 
                    $('.liked_popup__wrap .perfect_scrollbar').scrollTop(1);
                });
            }
	    }

    });
    /*открытие избранного в шапке END*/ 


    /*добавление в избранное*/
    $(document).on("click", ".add_to_favorite", function() {
        var btn = $(this);
        var id = $(this).attr("data-id");

        var url;
        if (btn.hasClass('active'))
            url = "/local/include/ajax/delete_from_favorite.php";
        else 
            url = "/local/include/ajax/add_to_favorite.php";

        $.ajax({
            type: "POST",
            url: url,
            data: {
                id: id
            },
            success: function(data) {
                change_baskets(data);
                setActiveElements();
            }
        });

    });
    /*добавление в избранное END*/

    /* Удаление из избранного  */
    $(document).on("click", ".remove_favourite", function() {
        var id = $(this).attr("data-id");

        $.ajax({
            type: "POST",
            url: "/local/include/ajax/delete_from_favorite.php",
            data: {
                id: id
            },
            success: function(data) {
                change_baskets(data);
                setActiveElements();
                $('.liked_popup__wrap .perfect_scrollbar').scrollTop(1);
            }
        });

    });
    /* Удаление из избранного END */


    


    /*проверка на куки корзины*/
	/*if (getCookie("BASKET_ID")) {
        inCart = getCookie("BASKET_ID").split("%2C");
    }*/
    /*проверка на куки корзины END*/

    // Выбор города
    $(document).on("click", ".popup__cities_city", function(){
    	var id = $(this).attr("data-id");
    	if($(document).find(".cityId").length){
    		$(document).find(".cityId").val(id).trigger("change");
    	}
    });
    // Выбор города END


    //Открытие попапа
    $(document).on("click", ".open_popup:not(.active)", function(){
    	$(this).magnificPopup({
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
	                if(mp.content.hasClass('popup--cities') || mp.content.hasClass('popup--cities_mobile')) {

                        $('.popup__cities_list').scrollTop(1);
                        $('.popup__cities_all').scrollTop(1);

                        // Область поумолчанию
                        if (!$(".popup__cities_list_item.byDefault").hasClass("active")) {
                            $(".popup__cities_list_item.byDefault").trigger("click");
                        }
                        $(".input_container__search_item.byDefault").trigger("click");

                        if($(".popup__cities_list_item.byDefault.active").length) {
                            setTimeout(function() {
                                $('.popup__cities_list').scrollTop($(".popup__cities_list_item.active").position().top);
                                $('.popup__cities_all').scrollTop($(".popup__cities_city.active").position().top);
                            }, 420);
                        };
                    }

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
	    }).magnificPopup("open");
    });
    //Открытие попапа END

    makeOrderInfoPos();
});

$(window).scroll(function(event) {
	makeOrderInfoPos();
});
$(window).resize(function(event) {
	makeOrderInfoPos();
});


function makeOrderInfoPos(){

	if($(document).find(".make_order__info").length){
		if($(window).outerWidth() > 1080){
			if($(".make_order__info").outerHeight() < $(".make_order__row").outerHeight()){
				$(".make_order__info").css("position", "absolute");
			    if($(window).scrollTop() < $(".make_order__row").offset().top){
			        $(".make_order__info").css("top", "0");
			    } else if($(window).scrollTop() > $(".make_order__row").offset().top + $(".make_order__row").outerHeight() - $(".make_order__info").outerHeight()){
			        $(".make_order__info").css("top", $(".make_order__row").outerHeight() - $(".make_order__info").outerHeight() + "px");
			    } else{
			        $(".make_order__info").css("top", $(window).scrollTop() - $(".make_order__row").offset().top + "px");
			    }
			} else{
				$(".make_order__info").css("position", "relative");
				$(".make_order__info").css("top", "0");
			}
		} else{
			$(".make_order__info").css("position", "relative");
			$(".make_order__info").css("top", "0");
		}
    }
    
    // Фиксированный сайдбар каталога
    if($(document).find(".filter_sidebar__inner").length){
		if($(window).outerWidth() > 1080){
			if($(".filter_sidebar").outerHeight() < $(".catalog_main").outerHeight()){
				$(".filter_sidebar__inner").css("position", "absolute");
			    if($(window).scrollTop() < $(".catalog_main").offset().top){
			        $(".filter_sidebar__inner").css("top", "0");
			    } else if($(window).scrollTop() > $(".catalog_main").offset().top + $(".catalog_main").outerHeight() - $(".filter_sidebar__inner").outerHeight()){
			        $(".filter_sidebar__inner").css("top", $(".catalog_main").outerHeight() - $(".filter_sidebar__inner").outerHeight() + "px");
			    } else{
			        $(".filter_sidebar__inner").css("top", $(window).scrollTop() - $(".catalog_main").offset().top + "px");
			    }
			} else{
				$(".filter_sidebar__inner").css("position", "relative");
				$(".filter_sidebar__inner").css("top", "0");
			}
		} else{
			$(".filter_sidebar__inner").css("position", "relative");
			$(".filter_sidebar__inner").css("top", "0");
		}
	}
}

function tabsLinePosition(){
    $(document).find(".tabs__line_fill").css("transition", "none");
    $(document).find(".tabs").each(function(index, el) {
        var activeTab = $(this).find(".tabs__button.active");
        var activeWidth = activeTab.innerWidth();
        var itemPos = activeTab.position();
        var posLeft = itemPos.left + parseInt(activeTab.css("marginLeft"), 10) + "px";
        $(this).closest(".tabs").find(".tabs__line_fill").css({
            left: posLeft,
            width: activeWidth + "px"
        });
    });
    $(document).find(".tabs__line_fill").css("transition", "");
}