// Поиск в шапке
$(".open_search").on("click", function() {
  $(".showWhenSearch").show();
  $(".hideWhenSearch").hide();
  $(".search_overlay, .search_block").fadeIn(150);
  $(".search_block__input").focus();
  $('.perfect_scrollbar').scrollTop(1);
  $(".nav_main").addClass('search_active');
  if (window.matchMedia("(max-width: 733px)").matches) {
    setTimeout(function() {
      $('html').addClass('popup_opened');
      $('body').addClass('popup_opened');
    }, 5);
  }
});
$(".close_search").on("click", function() {
  $(".search_block, .search_overlay").fadeOut(150, function() {
    $(".showWhenSearch").hide();
    $(".hideWhenSearch").show();
    $(".nav_main").removeClass('search_active');
    $('html').removeClass('popup_opened');
    $('body').removeClass('popup_opened');
  });
});
if (window.matchMedia("(max-width: 1080px)").matches) {
  $(".nav_main__logo").addClass("hideWhenSearch");
  $(".nav_main__catalog_open").addClass("hideWhenSearch");
}

// Выпадающие списки у инпутов
$(document).on('click', '.input', function(e) {
  // Закрытие поиска при повторном нажатии
  if($(this).closest('.input_dropdown').hasClass('active')) {
    $('.input_dropdown').removeClass('active');
  } else {
    $('.input_dropdown').removeClass('active');
    $(this).closest('.input_dropdown').addClass('active');
  };
});
$(document).on('click', '.input_container__dropdown_toggle', function() {
  // Нажатие на стрелочку
  if ($(this).closest('.input_container').hasClass('active')) {
    $('.input_dropdown').removeClass('active');
  } else {
    $('.input_dropdown').removeClass('active');
    $(this).closest('.input_container').toggleClass('active');
  }
});
// Поиск - выпадающий список
$(document).on('focus', '.input_dropdown input', function() {
  setTimeout(function() {
    $('.perfect_scrollbar').scrollTop(1);
  }, 5);
});
$(document).on('input', '.input_dropdown input', function(e) {
  var val = $(this).val();
  var dropdown = $(this).closest('.input_dropdown').find('.input_container__search_list');
  var arr = dropdown.find('.text');
  arr.each(function() {
    var cur = $(this);
    if (cur.text().toLowerCase().indexOf(val.toLowerCase()) != -1) {
      cur.closest('.input_container__search_item').show();
    } else {
      cur.closest('.input_container__search_item').hide();
    }
  });
});
$(document).on('click', '.input_container__search_item', function(e) {
  var val = $(this).find('.text').text();
  $(this).closest('.input_dropdown').find('.input').val(val);
  $(this).closest('.input_container').removeClass('active');
  e.stopPropagation();
});
$(document).on('click', '.input_container', function(e) {
  e.stopPropagation();
})
$(window).click(function() {
  $('.input_container').removeClass('active');
});

// Поиск города в попапе
var citySearchVal = '';
var curCityCat;

function showAllCities() {
  $('.popup__cities_city').show();
  $('.popup__cities_item').show();
}

function searchCitiesByText() {
  var citiesList = $('.popup__cities_city:visible');
  citiesList.each(function() {
    var cur = $(this);
    if (cur.text().toLowerCase().indexOf(citySearchVal.toLowerCase()) != -1) {
      $(this).show();
    } else {
      $(this).hide();
    }
  });
  hideEmptyCities();
};

// Фильтрация городов по вводу
$(document).on('input', '.popup__search input', function(e) {
    var $this = $(this);
    setTimeout(function() {
        $('.perfect_scrollbar').scrollTop(1);
        citySearchVal = $this.val();
        
        if(curCityCat) {
            showAllCities();
            $('.popup__cities_city').each(function() {
            if($(this).attr('data-city') !== curCityCat) $(this).hide();
            });
            searchCitiesByText();
        } else {
            showAllCities();
            searchCitiesByText();
        }
    }, 10);
});

// Выбор области города
$(document).on('click', '.popup__cities_list_item', function() {
  $('.perfect_scrollbar').scrollTop(1);
  if($(this).hasClass('active')) {
    $(".popup__cities_list_item").removeClass('active');
    curCityCat = '';
    showAllCities();
    searchCitiesByText();
    setTimeout(function() {
      $('.popup_oblast_mobile').val('');
    }, 5);
  } else {
    $(".popup__cities_list_item").removeClass('active');
    $(this).addClass('active');
    
    curCityCat = $(this).data('city-link');

    if(citySearchVal) {
      showAllCities();
      searchCitiesByText();
      $('.popup__cities_city').each(function() {
        if($(this).attr('data-city') !== curCityCat) $(this).hide();
      });
    } else {
      showAllCities();
      $('.popup__cities_city').hide();
      $('.popup__cities_city[data-city="'+curCityCat+'"]').show();
    }

    hideEmptyCities();
  }
});

// Прячем контейнер города в попапе, если пустой
function hideEmptyCities() {
  $('.popup__cities_item').each(function(idx, el) {
    if($(this).find(".popup__cities_city:visible").length) {
      $(this).show();
    } else {
      $(this).hide();
    }
  });
}

// Нажатие на город
$(document).on('click', '.popup__cities_city, .setNewCity', function() {
    $(".nav_top__btns--additional").remove();
    $('.nav_top__btns_btn').css('visibility', 'visible');
    var text = $(this).text();
    $.ajax({
        type: "POST",
        url: '/local/include/ajax/location.php',
        data: {
            city: text
        }
    });
  var data = $(this).data('city');
  $('.make_order__item_citie .val').text(text);
  $('#currentCityMobile').text(text);
  $('.city_changable').text(text);
  $('.city_changable_input').val(text);

  $('.popup__cities_list_item').removeClass('byDefault');
  $('.popup__cities_list_item[data-city-link="'+data+'"]').addClass('byDefault');
  $.magnificPopup.close();
});
// Поиск по городу в попае End