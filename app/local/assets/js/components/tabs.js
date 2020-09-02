// Вкладки фильтров
$(document).on("click", ".sidebar__filter_element--tab .sidebar__tab_button_wrap", function(e) {
	e.preventDefault;
	var container = $(this).closest('.sidebar__filter_element--tab');
	container.next('.sidebar__filter_tab').slideToggle(200);
	container
		.toggleClass("sidebar__filter_element--active")
		.find(".iconed_button")
		.toggleClass("active");
});
$(document).on("click", ".sidebar__filter_title:not(.not_tab)", function() {
    $(this).parent().find('.sidebar__filter_block_content').slideToggle(200);
	$(this)
		.parent(".sidebar__filter_block--tab")
		.toggleClass("active")
		.find(".iconed_button")
		.toggleClass("active");
});

// Табы над катологом
$(document).on('click', '.sort__item', function(e) {
	if($(this).hasClass('active')) {
		closeCatalogTopTabs();
	} else {
		closeCatalogTopTabs();

		$(this).find('.sort__item_dropdown').slideToggle(200);
		$(this).toggleClass('active');
		$(this).find('.sort__item_button').toggleClass('active');
	}
});
$(document).on('click', '.sort__item--first', function() {
	var th = $(this);
	if(th.hasClass('active')) {
		th.closest('.sort').addClass('active');
	} else {
		setTimeout(function() {
			th.closest('.sort').removeClass('active');
		}, 200);
	}
});
$(document).on('click', '.sort__item_dropdown_el', function() {
	$(this).parent().find('.sort__item_dropdown_el').removeClass('active');
	$(this).addClass('active');
	var text = $(this).text().toLowerCase();
	$(this).closest('.sort__item').find('.sort__item_val').text(text);

	var id = $(this).data('id');
    var name = $(this).data('name');
	$.ajax({
		type: "POST",
		url: window.location.pathname,
		data: {
			id: id,
			name: name
        },
        beforeSend: function() {
            $('#catalogSection').hide();
            $('.smartfilter__overlay').fadeIn(200);
            $('#catalog_main_content .preloader__dot_list').show();
        },
		success: function(data) {
			var html = $($.parseHTML(data)).find('#catalog_main_content').html();
			$('#catalog_main_content').html( html );
            $('.lazy').lazy();
            
            $('.smartfilter__overlay').fadeOut(200);
            $('#catalog_main_content .preloader__dot_list').hide();
            $('body, html').animate({ scrollTop: $('.catalog_main').offset().top }, 600);
		}
	});
});

$(document).click(function(event) { 
	$target = $(event.target);
	if(!$target.closest('.sort__item').length && 
	$('.sort__item_dropdown').is(":visible")) {
		closeCatalogTopTabs();
	}        
});

function closeCatalogTopTabs() {
	$(".sort__item_dropdown").slideUp(200);
	$('.sort__item:not(.sort__item--icon)').removeClass('active');
	$('.sort__item_button').removeClass('active');
	$('.sort').removeClass('active');
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
$('.footer__tab_header').on('click', function() {
	$(this).toggleClass('active');
	$(this).next().slideToggle();
});

// Табы с полоской
$(".tab:not(:first-child)").hide();
$(".tabs__button").on("click", function(e) {
	// Анимация полоски
	$(".tabs__button").removeClass("active");
	$(this).addClass("active");
	var activeWidth = $(this).innerWidth();
	var itemPos = $(this).position();
	var posLeft = itemPos.left + parseInt($(this).css('marginLeft'), 10) + "px";
	$(this).closest('.tabs').find(".tabs__line_fill").css({
		left: posLeft,
		width: activeWidth + "px"
	});
	// Прячем вкладки
	$(this)
		.closest(".tabs")
		.find(".tab")
		.hide();
	// Открываем нужную
	var linkToTab = $(this).attr("href");
	$(this)
		.closest(".tabs")
		.find(linkToTab)
		.fadeIn();
});
$('.tabs__button').eq(0).trigger('click');
$('.tabs__button :radio').on('click', function (event) {
	event.stopPropagation();
});

// Табы в личном кабинете
$('.lk__tab_main').slideUp();
$('.lk__tab_header').on('click', function(){
	var container = $(this).closest('.lk__tab');

	if(container.hasClass('active')){
		$('.lk__tab_main').slideUp();
		$('.lk__tab').removeClass('active');
		$('.lk__tab_header .iconed_button').removeClass('active');
	} else {
		$('.lk__tab_main').slideUp();
		$('.lk__tab').removeClass('active');
		$('.lk__tab_header .iconed_button').removeClass('active');

		container.find('.lk__tab_main').slideDown();
		container.addClass('active');
		container.find('.lk__tab_header .iconed_button').addClass('active');

		$('html, body').animate({
			scrollTop: $(container.prev()).offset().top
		}, 500);
	}
});

if (window.matchMedia("(max-width: 1080px)").matches) {
	$('.lk_popup__content').slideUp();
	$('.lk_popup--page').on('click', function(e) {
		if(!$(e.target).hasClass('button')) {
			$('.lk_popup__content').slideToggle();
		}
    });
    
    $('.our_shops__item_title, .our_shops__item_content').removeClass('not_tab');
}

// Вкладки адресов
$(".our_shops__item_content:not(.not_tab)").slideUp();
$(document).on("click", ".our_shops__item_title:not(.not_tab), .our_shops__item_toggle", function() {
	$(this).closest('.our_shops__item').find('.map').hide();
	if ($(this).closest(".our_shops__item").hasClass('our_shops__item--active')) {
		$(".our_shops__item").removeClass("our_shops__item--active");
		$(".our_shops__item_toggle").removeClass("our_shops__item_toggle--active");
		$('.our_shops__item_content').slideUp({
			duration: 200
		});
	} else {
		$(".our_shops__item").removeClass("our_shops__item--active");
		$(".our_shops__item_toggle").removeClass("our_shops__item_toggle--active");
		$('.our_shops__item_content').slideUp({
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
});