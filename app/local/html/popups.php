<!-- Попап вход/регистрация -->
<div class="popup popup--lk mfp-hide" id="login_popup">
    <div class="popup__container">
        <header class="popup__header">
            <div class="popup__title">Личный кабинет</div>
            <button type="button" class="popup__cross icon-close popup_close"></button>
        </header>
        <div class="tabs">
            <div class="tabs__header">
                <div class="text_grey active tabs__button" href="#lk_tab1">Войти</div>
                <div class="text_grey active tabs__button" href="#lk_tab2">Регистрация</div>
            </div>
            <div class="tabs__line">
                <div class="tabs__line_fill"></div>
            </div>
            <div class="tabs__content fz14">
                <div class="tab" id="lk_tab1">
                    <form action="/local/assets/callback.php" class="validate">
                        <div class="input_container mb20">
                            <input type="text" name="login" class="input required" placeholder="Логин или e-mail">
                            <div class="success icon-tick"></div>
                        </div>
                        <div class="input_container input_container--iconed mb20">
                            <input type="password" name="password" class="input required" placeholder="Пароль" autocomplete="off">
                            <div class="input_container__icon input_container__icon--empty icon-eye show_pass"></div>
                            <div class="success icon-tick"></div>
                        </div>
                        <div class="popup__buttons mb30">
                            <button type="submit" class="button popup__button_login">ВОЙТИ <span class="button__icon icon-arrow-point-to-right"></span></button><a href="#" class="text_grey">Забыли пароль?</a>
                        </div>
                        <div class="bold mb15">Войти через социальные сети:</div>
                        <div class="socials_list">
                            <a href="#" class="social_link social_link--dark"><span class="socials_list__icon social_icon icon-vk"></span></a>
                            <a href="#" class="social_link social_link--dark"><span class="socials_list__icon social_icon icon-facebook"></span></a>
                            <a href="#" class="social_link social_link--dark"><span class="socials_list__icon social_icon icon-instagram"></span></a>
                        </div>
                    </form>
                </div>
                <div class="tab" id="lk_tab2">
                    <form action="/local/assets/callback.php" class="validate">
                        <div class="input_container mb20">
                            <input type="text" name="fio" class="input required" placeholder="Фамилия Имя Отчество" data-mask="fio" autocomplete="off">
                        </div>
                        <div class="input_container mb20">
                            <input type="email" name="email" class="input required" placeholder="E-mail" data-mask="email">
                        </div>
                        <div class="input_container mb20">
                            <input type="password" name="password1" class="input required" placeholder="Пароль" autocomplete="off">
                            <div class="input_container__icon input_container__icon--empty icon-eye show_pass"></div>
                        </div>
                        <div class="input_container mb20">
                            <input type="password" name="password2" class="input required" placeholder="Подтвердите пароль" autocomplete="off">
                            <div class="input_container__icon input_container__icon--empty icon-eye show_pass"></div>
                        </div>
                        <div class="checkbox mb35">
                            <input type="checkbox" class="required input" name="agree" id="regAgree" checked>
                            <label for="regAgree">
                                <div class="checkbox_icon"></div>
                            </label>
                            <span><label for="regAgree">Согласен на </label><a href="#" class="text_underline text_dark">обработку персональных данных</a></span>
                        </div>
                        <button type="submit" class="button">ЗАРЕГИСТРИРОВАТЬСЯ <span class="button__icon icon-arrow-point-to-right"></span></button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- Попап вход/регистрация END -->

<!-- Попап заказать звонок -->
<div class="popup mfp-hide" id="order_call_popup">
    <form class="validate" action="/local/assets/callback.php">
        <div class="popup__container">
            <header class="popup__header mb25">
                <div class="popup__title">Заказать звонок</div>
                <button type="button" class="popup__cross icon-close popup_close"></button>
            </header>
            <div class="bold mb20">Введите контактные данные</div>
            <div class="input_container mb20">
                <input type="text" name="fio" class="input required" placeholder="Фамилия Имя Отчество" data-mask="fio" autocomplete="off">
                <div class="success icon-tick"></div>
            </div>
            <div class="input_container mb35">
                <input type="text" name="phone" class="input required" placeholder="Телефон" data-mask="phone">
                <div class="success icon-tick"></div>
            </div>
            <div class="bold mb10">Выберите удобное время для звонка</div>
            <div class="checkbox mb20">
                <input type="checkbox" name="isExactTime" id="exactTime">
                <label for="exactTime">
                    <div class="checkbox_icon"></div>
                </label>
                <label for="exactTime" class="text_grey">Указать точное время</label>
            </div>
            <div class="exact_time_1">
                <div class="input_container">
                    <input class="input" name="exactTime" data-mask="time" autocomplete="off">
                </div>
            </div>
            <div class="exact_time_2">
                <div class="time_range__container mb25">
                    <input type="text" name="timeFrom" class="input time_range__input" placeholder="с 9:00" data-mask="time" autocomplete="off">
                    <span class="time_range__sep"></span>
                    <input type="text" name="timeEnd" class="input time_range__input" data-mask="time" value="21:00" autocomplete="off">
                </div>
                <div class="range_slider_container mb15">
                    <div class="range_slider range_slider--time">
                        <div id="custom-handle" class="ui-slider-handle"></div>
                    </div>
                </div>
                <div class="range_slider__label_list">
                    <div class="text_grey fz14">9:00</div>
                    <div class="text_grey fz14">12:00</div>
                    <div class="text_grey fz14">21:00</div>
                </div>
            </div>
            <div class="mb30"></div>
        </div>
        <hr class="mb30">
        <div class="popup__container">
            <div class="checkbox mb35">
                <input type="checkbox" class="required input" id="orderAgree" name="agree" checked>
                <label for="orderAgree">
                    <div class="checkbox_icon"></div>
                </label>
                <span><label for="orderAgree" class="checkbox__text">Согласен на </label><a href="#" class="text_underline text_dark">обработку персональных данных</a></span>
            </div>
            <button type="submit" class="button">ОТПРАВИТЬ<span class="button__icon icon-arrow-point-to-right"></span></button>
        </div>
    </form>
</div>
<!-- Попап заказать звонок END -->

<!-- Попап выбора города -->
<div class="popup popup--cities mfp-hide" id="cities_popup">
    <div class="popup__container">
        <header class="popup__header">
            <div class="popup__title mb5">Выбор города</div>
            <button type="button" class="popup__cross icon-close popup_close"></button>
        </header>
        <div class="text_grey fz14 mb40">Всего 347 623 города</div>
        <form action="/local/include/callback.php" class="mb45 city_search_form">
            <div class="input_container popup__search">
                <input type="text" name="city" placeholder="Поиск по названию" class="input" autocomplete="off" data-mask="city">
                <button type="submit" class="input_container__icon input_container__icon--accent icon-loupe"></button>
            </div>
        </form>
        <div class="popup__container_row scrollable">
            <div class="popup__cities_list perfect_scrollbar">
                <button class="text_grey popup__cities_list_item byDefault" data-city-link="city-1">Татарстан</button>
                <button class="text_grey popup__cities_list_item" data-city-link="city-2">Московская область</button>
                <button class="text_grey popup__cities_list_item" data-city-link="city-3">Ленинградска область</button>
                <button class="text_grey popup__cities_list_item">Lorem</button>
                <button class="text_grey popup__cities_list_item">Lorem</button>
                <button class="text_grey popup__cities_list_item">Lorem</button>
                <button class="text_grey popup__cities_list_item">Lorem</button>
                <button class="text_grey popup__cities_list_item">Lorem</button>
                <button class="text_grey popup__cities_list_item">Lorem</button>
                <button class="text_grey popup__cities_list_item">Lorem</button>
                <button class="text_grey popup__cities_list_item">Lorem</button>
                <button class="text_grey popup__cities_list_item">Lorem</button>
                <button class="text_grey popup__cities_list_item">Lorem</button>
                <button class="text_grey popup__cities_list_item">Lorem</button>
                <button class="text_grey popup__cities_list_item">Lorem</button>
                <button class="text_grey popup__cities_list_item">Lorem</button>
                <button class="text_grey popup__cities_list_item">Lorem</button>
            </div>
            <div class="popup__cities_all perfect_scrollbar">
                <div class="popup__cities_item">
                    <div class="popup__cities_word mb15">А</div>
                    <button class="fz14 popup__cities_city" data-city="city-1">Казань</button>
                    <button class="fz14 popup__cities_city" data-city="city-2">Апрелевка</button>
                </div>
                <div class="popup__cities_item">
                    <div class="popup__cities_word mb15">Б</div>
                    <button class="fz14 popup__cities_city" data-city="city-2">Белоозёрский</button>
                    <button class="fz14 popup__cities_city" data-city="city-2">Балашиха</button>
                    <button class="fz14 popup__cities_city" data-city="city-3">Бокситогорск</button>
                    <button class="fz14 popup__cities_city" data-city="city-3">Бокситогорск</button>
                    <button class="fz14 popup__cities_city" data-city="city-3">Бокситогорск</button>
                </div>
                <div class="popup__cities_item">
                    <div class="popup__cities_word mb15">Н</div>
                    <button class="fz14 popup__cities_city" data-city="city-1">Нижний Новгород</button>
                </div>
                <div class="popup__cities_item">
                    <div class="popup__cities_word mb15">В</div>
                    <button class="fz14 popup__cities_city" data-city="city-3">Волосово</button>
                    <button class="fz14 popup__cities_city" data-city="city-3">Волосово</button>
                    <button class="fz14 popup__cities_city" data-city="city-3">Волосово</button>
                </div>
                <div class="popup__cities_item">
                    <div class="popup__cities_word mb15">В</div>
                    <button class="fz14 popup__cities_city" data-city="city-3">Волосово</button>
                    <button class="fz14 popup__cities_city" data-city="city-3">Волосово</button>
                    <button class="fz14 popup__cities_city" data-city="city-3">Волосово</button>
                </div>
                <div class="popup__cities_item">
                    <div class="popup__cities_word mb15">В</div>
                    <button class="fz14 popup__cities_city" data-city="city-3">Волосово</button>
                    <button class="fz14 popup__cities_city" data-city="city-3">Волосово</button>
                    <button class="fz14 popup__cities_city" data-city="city-3">Волосово</button>
                </div>
                <div class="popup__cities_item">
                    <div class="popup__cities_word mb15">В</div>
                    <button class="fz14 popup__cities_city" data-city="city-3">Волосово</button>
                    <button class="fz14 popup__cities_city" data-city="city-3">Волосово</button>
                    <button class="fz14 popup__cities_city" data-city="city-3">Волосово</button>
                </div>
                <div class="popup__cities_item">
                    <div class="popup__cities_word mb15">В</div>
                    <button class="fz14 popup__cities_city" data-city="city-3">Волосово</button>
                    <button class="fz14 popup__cities_city" data-city="city-3">Волосово</button>
                    <button class="fz14 popup__cities_city" data-city="city-3">Волосово</button>
                </div>
                <div class="popup__cities_item">
                    <div class="popup__cities_word mb15">В</div>
                    <button class="fz14 popup__cities_city" data-city="city-3">Волосово</button>
                    <button class="fz14 popup__cities_city" data-city="city-3">Волосово</button>
                    <button class="fz14 popup__cities_city" data-city="city-3">Волосово</button>
                </div>
                <div class="popup__cities_item">
                    <div class="popup__cities_word mb15">В</div>
                    <button class="fz14 popup__cities_city" data-city="city-3">Волосово</button>
                    <button class="fz14 popup__cities_city" data-city="city-3">Волосово</button>
                    <button class="fz14 popup__cities_city" data-city="city-3">Волосово</button>
                </div>
                <div class="popup__cities_item">
                    <div class="popup__cities_word mb15">В</div>
                    <button class="fz14 popup__cities_city" data-city="city-3">Волосово</button>
                    <button class="fz14 popup__cities_city" data-city="city-3">Волосово</button>
                    <button class="fz14 popup__cities_city" data-city="city-3">Волосово</button>
                </div>
                <div class="popup__cities_item">
                    <div class="popup__cities_word mb15">В</div>
                    <button class="fz14 popup__cities_city" data-city="city-3">Волосово</button>
                    <button class="fz14 popup__cities_city" data-city="city-3">Волосово</button>
                    <button class="fz14 popup__cities_city" data-city="city-3">Волосово</button>
                </div>
                <div class="popup__cities_item">
                    <div class="popup__cities_word mb15">В</div>
                    <button class="fz14 popup__cities_city" data-city="city-3">Волосово</button>
                    <button class="fz14 popup__cities_city" data-city="city-3">Волосово</button>
                    <button class="fz14 popup__cities_city" data-city="city-3">Волосово</button>
                </div>
                <div class="popup__cities_item">
                    <div class="popup__cities_word mb15">В</div>
                    <button class="fz14 popup__cities_city" data-city="city-3">Волосово</button>
                    <button class="fz14 popup__cities_city" data-city="city-3">Волосово</button>
                    <button class="fz14 popup__cities_city" data-city="city-3">Волосово</button>
                </div>
                <div class="popup__cities_item">
                    <div class="popup__cities_word mb15">В</div>
                    <button class="fz14 popup__cities_city" data-city="city-3">Волосово</button>
                    <button class="fz14 popup__cities_city" data-city="city-3">Волосово</button>
                    <button class="fz14 popup__cities_city" data-city="city-3">Волосово</button>
                </div>
                <div class="popup__cities_item">
                    <div class="popup__cities_word mb15">В</div>
                    <button class="fz14 popup__cities_city" data-city="city-3">Волосово</button>
                    <button class="fz14 popup__cities_city" data-city="city-3">Волосово</button>
                    <button class="fz14 popup__cities_city" data-city="city-3">Волосово</button>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- Попап выбора города END -->

<!-- Попап выбора города mobile -->
<div class="popup popup--cities_mobile mfp-hide" id="cities_popup_mobile">
    <div class="popup__container">
        <header class="popup__header">
            <div class="popup__title mb5">Выбор города</div>
            <button type="button" class="popup__cross icon-close popup_close"></button>
            <div class="text_grey fz14 mb40">Всего 347 623 города</div>
        </header>
        <form action="">
            <div class="input_container mb20">
                <input type="text" placeholder="Поиск по названию" class="input" autocomplete="off" data-mask="city">
                <button type="submit" class="input_container__icon input_container__icon--accent icon-loupe"></button>
            </div>
            <div class="input_container input_dropdown mb20">
                <input type="text" placeholder="Татарстан" class="input popup_oblast_mobile" autocomplete="off" data-mask="city">
                <div class="input_container__icon input_container__dropdown_toggle input_container__icon--small input_container__icon--accent icon-arrow-point-to-right"></div>
                <div class="input_container__dropdown_border scrollable">
                    <div class="perfect_scrollbar input_container__search_list_container">
                        <div class="input_container__search_list fz14">
                            <div class="input_container__search_item byDefault"><span class="text">Татарстан</span></div>
                            <div class="input_container__search_item"><span class="text">Московская область</span></div>
                            <div class="input_container__search_item"><span class="text">Ленинградска область</span></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="input_container input_dropdown">
                <input type="text" placeholder="Казань" class="input" autocomplete="off" data-mask="city">
                <div class="input_container__icon input_container__dropdown_toggle input_container__icon--small input_container__icon--accent icon-arrow-point-to-right"></div>
                <div class="input_container__dropdown_border scrollable">
                    <div class="perfect_scrollbar input_container__search_list_container">
                        <div class="input_container__search_list fz14">
                            <div class="text input_container__search_item setNewCity">Татарстан1</div>
                            <div class="text input_container__search_item setNewCity">Татарстан2</div>
                            <div class="text input_container__search_item setNewCity">Московская область1</div>
                            <div class="text input_container__search_item setNewCity">Московская область2</div>
                            <div class="text input_container__search_item setNewCity">Ленинградска область1</div>
                            <div class="text input_container__search_item setNewCity">Ленинградска область2</div>
                            <div class="text input_container__search_item setNewCity">Ленинградска область3</div>
                            <div class="text input_container__search_item setNewCity">Казань41</div>
                            <div class="text input_container__search_item setNewCity">Казань41</div>
                            <div class="text input_container__search_item setNewCity">Казань5</div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    </div>
</div>
<!-- Попап выбора города mobile END -->

<!-- Попап магазины -->
<div class="popup popup--shops mfp-hide" id="shops_popup">
    <div class="popup__row">
        <div class="popup__col popup__main">
            <div class="popup__container">
                <header class="popup__header mb35">
                    <div class="popup__title">Магазины в Казани</div>
                    <button type="button" class="popup__cross icon-close popup_close"></button>
                </header>
            </div>
            <div class="our_shops__list">
                <div class="our_shops__item popup__container">
                    <button class="iconed_button our_shops__item_toggle"><span class="iconed_button__icon icon-arrow-point-to-right"></span></button>
                    <div class="our_shops__item_title">
                        <span class="icon-pin our_shops__item_title_icon"><span class="path1"></span><span class="path2"></span></span>
                        <span class="our_shops__item_title_text">г. Казань, ул. Волгоградская, д.12</span>
                    </div>
                    <div class="our_shops__item_content">
                        <div class="our_shops__contacts">
                            <div class="our_shops__contacts_item phone_block phone_block--no_icon">
                                <a href="tel:88432111999" class="phone_block__number text_dark">8 (843) 211-19-99</a>
                                <div class="phone_block__text fz12 text_grey">Whatsapp</div>
                            </div>
                            <div class="our_shops__contacts_item phone_block phone_block--no_icon">
                                <a href="tel:89625767610" class="phone_block__number text_dark">8 (962) 576-76-10</a>
                                <div class="phone_block__text fz12 text_grey">Viber</div>
                            </div>
                            <div class="our_shops__contacts_item phone_block phone_block--no_icon">
                                <a href="tel:88002111999" class="phone_block__number text_dark">8 800 211-19-99</a>
                                <div class="phone_block__text fz12 text_grey">Россия</div>
                            </div>
                            <div class="our_shops__contacts_item our_shops__contacts_item--half_width phone_block phone_block--no_icon">
                                <div class="phone_block__number text_dark">с 9:00-21:00 (без выходных)</div>
                                <div class="phone_block__text fz12 text_grey">График работы</div>
                            </div>
                            <div class="our_shops__contacts_item our_shops__contacts_item--half_width phone_block phone_block--no_icon">
                                <div class="phone_block__number text_dark">Автобусы: 33, 35а, 44, 87</div>
                                <div class="phone_block__text fz12 text_grey">Как добраться</div>
                            </div>
                        </div>
                        <button class="our_shops__show iconed_button_hover map-2-balloon0 show_sm">
                            <span class="link fz14">Показать на карте</span>
                            <div class="iconed_button our_shops__show_button"><span class="iconed_button__icon icon-arrow-point-to-right"></span></div>
                        </button>
                        <button class="our_shops__show iconed_button_hover map-1-balloon0 hide_sm">
                            <span class="link fz14">Показать на карте</span>
                            <div class="iconed_button our_shops__show_button"><span class="iconed_button__icon icon-arrow-point-to-right"></span></div>
                        </button>
                        <div class="map contacts__map2" id="map-2"></div>
                    </div>
                </div>
                <div class="our_shops__item popup__container">
                    <button class="iconed_button our_shops__item_toggle"><span class="iconed_button__icon icon-arrow-point-to-right"></span></button>
                    <div class="our_shops__item_title">
                        <span class="icon-pin our_shops__item_title_icon"><span class="path1"></span><span class="path2"></span></span>
                        <span class="our_shops__item_title_text">г. Казань, ул. Юлиуса Фучика, д.14</span>
                    </div>
                    <div class="our_shops__item_content">
                        <div class="our_shops__contacts">
                            <div class="our_shops__contacts_item phone_block phone_block--no_icon">
                                <a href="tel:88432111999" class="phone_block__number text_dark">8 (843) 211-19-99</a>
                                <div class="phone_block__text fz12 text_grey">Whatsapp</div>
                            </div>
                            <div class="our_shops__contacts_item phone_block phone_block--no_icon">
                                <a href="tel:89625767610" class="phone_block__number text_dark">8 (962) 576-76-10</a>
                                <div class="phone_block__text fz12 text_grey">Viber</div>
                            </div>
                            <div class="our_shops__contacts_item phone_block phone_block--no_icon">
                                <a href="tel:88002111999" class="phone_block__number text_dark">8 800 211-19-99</a>
                                <div class="phone_block__text fz12 text_grey">Россия</div>
                            </div>
                            <div class="our_shops__contacts_item phone_block our_shops__contacts_item--half_width phone_block--no_icon">
                                <div class="phone_block__number text_dark">с 9:00-21:00 (без выходных)</div>
                                <div class="phone_block__text fz12 text_grey">График работы</div>
                            </div>
                            <div class="our_shops__contacts_item phone_block our_shops__contacts_item--half_width phone_block--no_icon">
                                <div class="phone_block__number text_dark">Автобусы: 72, 33а, 47, 90</div>
                                <div class="phone_block__text fz12 text_grey">Как добраться</div>
                            </div>
                        </div>
                        <button class="our_shops__show iconed_button_hover map-3-balloon1 show_sm">
                            <span class="link fz14">Показать на карте</span>
                            <div class="iconed_button our_shops__show_button"><span class="iconed_button__icon icon-arrow-point-to-right"></span></div>
                        </button>
                        <button class="our_shops__show iconed_button_hover map-1-balloon1 hide_sm">
                            <span class="link fz14">Показать на карте</span>
                            <div class="iconed_button our_shops__show_button"><span class="iconed_button__icon icon-arrow-point-to-right"></span></div>
                        </button>
                        <div class="map contacts__map2" id="map-3"></div>
                    </div>
                </div>
            </div>
            <div class="popup__container">
                <a href="#" class="button our_shops__button">КОНТАКТЫ<span class="button__icon icon-arrow-point-to-right"></a>
            </div>

        </div>
        <div class="popup__col">
            <div class="map" id="map-1" style="width: 100%; height: 610px"></div>
        </div>
    </div>
</div>
<!-- Попап магазины END -->

<!-- Попап заявка отправлена -->
<div class="popup popup--2 popup--success mfp-hide" id="success_popup">
    <div class="popup__container text_center">
        <button type="button" class="popup__cross icon-close popup_close"></button>

        <span class="icon-success-1 popup__success_tick mb10"><span class="path1"></span><span class="path2"></span></span>

        <div class="h2 text_regular mb10">Ваша заявка отправлена</div>

        <div class="text_grey fz14 mb25">Ваш запрос был успешно отправлен! Наш менеджер свяжется с Вами в ближайшее время</div>

        <button class="link popup_close text_grey fz14">Закрыть</button>

    </div>
</div>
<!-- Попап заявка отправлена END -->

<!-- Попап добавлено в корзину -->
<div class="popup popup--2 popup--tocart mfp-hide" id="tocart_popup">
    <div class="popup__container text_center">
        <button type="button" class="popup__cross icon-close popup_close"></button>

        <span class="icon-success-1 popup__success_tick mb10"><span class="path1"></span><span class="path2"></span></span>

        <div class="h2 text_regular mb35">Товар добавлен в корзину</div>

        <a href="#" class="button button--full_width mb20">ПЕРЕЙТИ В КОРЗИНУ <span class="button__icon icon-arrow-point-to-right"></span></a>
        <a href="#" class="button button--full_width button--empty2 mb20">ОФОРМИТЬ ЗАКАЗ <span class="button__icon icon-arrow-point-to-right"></span></a>

        <button class="link popup_close text_grey fz14">Продолжить покупки</button>

    </div>
</div>
<!-- Попап добавлено в корзину END -->

<!-- Попап купить в один -->
<div class="popup popup--oneclick mfp-hide" id="oneclick_popup">
    <div class="popup__container">
        <header class="popup__header mb35">
            <div class="popup__title">Купить в 1 клик</div>
            <button type="button" class="popup__cross icon-close popup_close"></button>
        </header>
    </div>

    <div class="cart cart--2">

        <? for ($i=0; $i < 1; $i++) { ?>
            <div class="cart_item">
                <div class="cart__td cart_item__main">
                    <div class="cart__td cart__photo">
                        <a href="#" class="cart_item__img lazy" data-src="./local/assets/img/product.png"></a>
                    </div>
                    <div class="cart__td cart__name">
                        <a href="#" class="cart_item__title h4 h4--underline"><span class="text_dark">Восстанавливающий крем для лица FRUDIA</span></a>
                        <div class="fz12 text_grey cart_item__brand">Артикул: 02486545</div>
                        <div class="fz12 text_grey cart_item__in_stock_text show_xs mb10">Наличие: <span class="text_accent">много</span></div>
                    </div>
                </div>
                <div class="cart__td cart__quant">
                    <div class="change_quant">
                        <button class="iconed_button iconed_button--hover_shadow iconed_button--sm change_quant__minus" data-quant="minus"><span class="iconed_button__icon icon-arrow-point-to-right"></span></button>
                        <input class="product_quant" value="1" type="text" data-mask="integerPositive" autocomplete="off">
                        <button class="iconed_button iconed_button--hover_shadow iconed_button--sm change_quant__plus" data-quant="plus"><span class="iconed_button__icon icon-arrow-point-to-right"></span></button>
                    </div>
                </div>
                <div class="cart__td cart__total">
                    <div class="cart_item__price product_price--sm h1">1 440 руб.</div>
                    <div class="product_old_price cart_item__old_price hide_xs">4 шт.</div>
                    <div class="product_old_price cart_item__old_price show_xs text_crossed">12 240 руб.</div>
                </div>
            </div>
            <? } ?>
    </div>

    <div class="popup__container">
        <form action="/local/include/callback.php" class="validate">
            <div class="fz18 bold mb20">Введите контактные данные</div>
            <div class="input_container mb20">
                <input type="text" name="fio" class="input required" placeholder="Фамилия Имя Отчество" data-mask="fio" autocomplete="off">
                <div class="success icon-tick"></div>
            </div>
            <div class="input_container mb20">
                <input type="text" name="phone" class="input required" placeholder="Телефон" data-mask="phone">
                <div class="success icon-tick"></div>
            </div>
            <div class="checkbox mb35">
                <input type="checkbox" class="required input" name="agree" id="personalOneclick" checked>
                <label for="personalOneclick">
                    <div class="checkbox_icon"></div>
                </label>
                <span><label for="personalOneclick" class="text_grey">Согласен на </label><a href="#" class="text_underline text_dark">обработку персональных данных</a></span>
            </div>

            <div class="popup__footer">
                <button type="submit" class="button popup__button1">ОТПРАВИТЬ <span class="button__icon icon-arrow-point-to-right"></span></button>
                <button type="button" class="button popup__button2 button--empty2 popup_close">ПРОДОЛЖИТЬ ПОКУПКИ <span class="button__icon icon-arrow-point-to-right"></span></button>

                <!-- <div class="form_submitted">
          <div class="form_submitted__icon icon-tick"></div>
          <div class="form_submitted_text">Ваш вопрос отправлен</div>
        </div> -->
            </div>
        </form>
    </div>
</div>
<!-- Попап добавлено в корзину END -->