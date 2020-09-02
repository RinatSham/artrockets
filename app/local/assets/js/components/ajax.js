$(document).on('submit', 'form', function(e) {
  var $form = $(this);
  if($form.valid()){

    if($form.hasClass('search_block')) {
        if ($('.search_block__input').val() !== '') {
            $.ajax({
                type: "POST",
                url: $form.attr('action'),
                data: $form.serialize()
            });
        };
    } else
    // Поиск города
    if($form.hasClass('city_search_form')) {
        if ($('.city_search_form input[name=city]').val() !== '') {
            $.ajax({
                type: "POST",
                url: $form.attr('action'),
                data: $form.serialize()
            });
        };
    } else if($form.hasClass('not_ajax')) {
        return false;
    } else {
        // Остальные формы
        $.ajax({
          type: "POST",
          url: $form.attr('action'),
          data: $form.serialize(),
          success: function() {
            $('.aboc-modal').trigger('click');
            $.magnificPopup.open({
              items: {
                src: '#success_popup'
              },
              type: 'inline'
            });
            $.magnificPopup.instance.st.callbacks = {
              close: function() {
                clearTimeout(closePopupTimeout);
              }
            }
            // Очищаем форму
            $form.each(function() {this.reset()});
            $form.find('.valid').each(function(){$(this).removeClass('valid')});
            $form.find('.error').each(function(){$(this).removeClass('error')});
            // Удаляем disabled
            $form.find('input').removeAttr("disabled");
            // Закрываем через 5 сек
            var closePopupTimeout = setTimeout(function() {
              $.magnificPopup.close();
            }, 5000);
          }
        });
    };

  }
  e.preventDefault(); 
});

// Избранное в шапке
$('.open_liked').on('click', function() {
    $.ajax({
        type: "POST",
        url: '/local/include/ajax/get_to_favourites.php',
        success: function(data) {
            $('.liked_popup__wrap .small_popup').html(data);
            setActiveElements();
            $('.perfect_scrollbar').scrollTop(1);
        }
    });
});

// Корзина в шапке
$('.open_cart').on('click', function() {
    $.ajax({
        type: "POST",
        url: '/local/include/ajax/get_to_basket.php',
        success: function(data) {
            $('.cart_popup__wrap .small_popup').html(data);
            setActiveElements();
            $('.perfect_scrollbar').scrollTop(1);
        }
    });
});

// В корзину
$(document).on('click', '.to_cart', function() {
    var id = $(this).data('id');
    if($(this).hasClass('active')) {
        $.ajax({
            type: "POST",
            url: '/local/include/ajax/delete_to_basket.php',
            data: {
                id: id
            },
            success: function(data) {
                changeCartCount(data);
            }
        });
    } else {
        $.ajax({
            type: "POST",
            url: '/local/include/ajax/add_to_basket.php',
            data: {
                id: id
            },
            success: function(data) {
                $.magnificPopup.open({
                    items: {
                        src: '#tocart_popup'
                    },
                    type: 'inline'
                });
                changeCartCount(data);
            }
        });
    }
    $(this).toggleClass('active');
});
$(document).on('click', '.remove_cart', function(e) {
    var container = $(e.target).closest('.small_popup');
    var id = $(this).data('id');
    $.ajax({
        type: "POST",
        url: '/local/include/ajax/delete_to_basket.php',
        data: {
            id: id
        },
        success: function(data) {
            setActiveElements();
            changeCartCount(data);

            // Закрываю попапы, если пусто
            if(container && !container.find('.cart_item').length) {
                $(document).trigger('click');
            }

            // фикс бага из-за скролла
            $(this).closest('.perfect_scrollbar').scrollTop(1);
        }
    });
});

// В избранное
$(document).on('click', '.to_favourite', function() {
    var id = $(this).data('id');
    if($(this).hasClass('active')) {
        $.ajax({
            type: "POST",
            url: '/local/include/ajax/delete_to_favourites.php',
            data: {
                id: id
            },
            success: function(data) {
                changeFavouriteCount(data);
            }
        });
    } else {
        $.ajax({
            type: "POST",
            url: '/local/include/ajax/add_to_favourites.php',
            data: {
                id: id
            },
            success: function(data) {
                changeFavouriteCount(data);
            }
        });
    }
    $(this).toggleClass('active');
});
$(document).on('click', '.remove_favourite', function(e) {
    var id = $(this).data('id');
    var container = $(e.target).closest('.small_popup');
    $.ajax({
        type: "POST",
        url: '/local/include/ajax/delete_to_favourites.php',
        data: {
            id: id
        },
        success: function(data) {
            changeFavouriteCount(data);
            $(this).closest('.small_popup__container').next('hr').remove();
            $(this).closest('.small_popup__container').remove();
            setActiveElements();
            
            // Закрываю попапы, если пусто
            if(container && !container.find('.cart_item').length) {
                $(document).trigger('click');
            }

            // фикс бага из-за скролла
            $('.small_popup__wrap .perfect_scrollbar').scrollTop(1);
        }
    });
});

// Поиск
var delayTimer;
$('.search_block__input').on('input', function() {
    if ($(this).val().length < 2) return false;
    var th = $(this);

    var $form = $(this).closest('form');
    clearTimeout(delayTimer);
    delayTimer = setTimeout(function() {
        $.ajax({
            type: "POST",
            url: $form.attr('action'),
            data: $form.serialize(),
            success: function(data) {
                $('.search_block__dropdown_wrap').remove();
                $('.search_block').append(data);
                if (document.querySelector('.search_block .perfect_scrollbar')) {
                    var ps = new PerfectScrollbar(document.querySelector('.search_block .perfect_scrollbar'));
                }
            }
        });
    }, 500);
});

// Добавить все в корзину
$(document).on('click', '.liked_popup__all_to_cart', function() {
    $('.liked_popup__wrap .to_cart:not(.active)').trigger('click');
});

function changeFavouriteCount(val) {
    if(val !== '0') {
        $('.open_liked .badge').html(val);
        $('.open_liked .badge').show();
        $('.open_liked').removeClass('disabled');
    } else {
        $('.open_liked .badge').hide();
        $('.open_liked').addClass('disabled');
    }
}
function changeCartCount(data) {
    var json = JSON.parse(data);
    if(json.COUNT >= 1) {
        $('.open_cart .badge').html(json.COUNT);
        $('.open_cart .icon_menu__price').html(json.SUM);
        $('.open_cart .badge').show();
        $('.open_cart .icon_menu__price').show();
        $('.open_cart').removeClass('disabled');
    } else {
        $('.open_cart .badge').hide();
        $('.open_cart .icon_menu__price').hide();
        $('.open_cart').addClass('disabled');
    }
}

// Переключение отображения карточек в каталоге
$(document).on('click', '.sort__item.sort__item--icon', function() {
    var name = $(this).data('name');
    $.ajax({
        type: 'POST',
        url: '/local/include/ajax/catalog_section_template.php',
        data: {
            display: name
        }
    })
});