<? include 'header.php' ?>
<main>
    <? include 'breadcrumbs.php' ?>
    <div class="container">
        <div class="h1 page_title">Корзина</div>
        <div class="cart cart--2">
            <header class="cart_item hide_680">
                <div class="cart__th cart__photo">Фото</div>
                <div class="cart__th cart__name">Наименование</div>
                <div class="cart__th cart__in_stock">Наличие</div>
                <div class="cart__th cart__price hide_lg">Стоимость</div>
                <div class="cart__th cart__quant">Количество</div>
                <div class="cart__th cart__total">Сумма</div>
                <div class="cart__th cart__buttons">
                    <button type="button" class="cart__th_clear"><span class="icon-rubbish-bin cart__th_icon"></span><span class="link hide_lg">Очистить корзину</span></button>
                </div>
            </header>
            <? for ($i=0; $i < 2; $i++) { ?>
            <div class="cart_item">
                <div class="cart__td cart__photo">
                    <a href="#" class="cart_item__img lazy" data-src="/local/assets/img/product.png"></a>
                </div>
                <div class="cart__td cart__name">
                    <a href="#" class="cart_item__title h4 h4--underline"><span class="text_dark">Восстанавливающий крем для лица FRUDIA</span></a>
                    <div class="fz12 text_grey cart_item__brand">Бренд: LEVRANA</div>
                    <div class="fz12 text_grey cart_item__in_stock_text show_680 mb10">Наличие: <span class="text_accent">много</span></div>
                </div>
                <div class="cart__td cart__in_stock hide_680">
                    <div class="in_stock">
                        <span class="active"></span>
                        <span class="active"></span>
                        <span class="active"></span>
                        <span class="active"></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
                <div class="cart__td cart__price hide_lg">
                    <div class="cart_item__price product_price product_price--sm h1">1 440 руб.</div>
                    <div class="product_old_price product_old_price--sm cart_item__old_price">950 руб.</div>
                </div>
                <div class="cart__td cart__quant">
                    <div class="change_quant">
                        <button class="iconed_button iconed_button--hover_shadow iconed_button--sm change_quant__minus" data-quant="minus"><span class="iconed_button__icon icon-arrow-point-to-right"></span></button>
                        <input class="product_quant" value="1" type="text" data-mask="integerPositive" autocomplete="off">
                        <button class="iconed_button iconed_button--hover_shadow iconed_button--sm change_quant__plus" data-quant="plus"><span class="iconed_button__icon icon-arrow-point-to-right"></span></button>
                    </div>
                </div>
                <div class="cart__td cart__total">
                    <div class="cart_item__price product_price product_price--sm h1">1 440 руб.</div>
                    <div class="product_old_price product_old_price--sm cart_item__old_price">950 руб.</div>
                </div>
                <div class="cart__td cart__buttons">
                    <!-- <button type="button" class="icon-hurt cart_item__button toggle_active"></button> -->
                    <button type="button" class="icon-rubbish-bin cart_item__button toggle_active"></button>
                </div>
            </div>
            <? } ?>
            <footer class="cart__footer">
                <div class="h2 text_regular cart__footer_text">Итого к оплате: 2 080 руб.</div>
                <div class="cart__footer_buttons">
                    <a href="#" class="cart__footer_button button button--empty2">БЫСТРЫЙ ЗАКАЗ<span class="button__icon icon-arrow-point-to-right"></span></a>
                    <a href="#" class="cart__footer_button button">ОФОРМИТЬ ЗАКАЗ<span class="button__icon icon-arrow-point-to-right"></span></a>
                </div>
            </footer>
        </div>
        <? include 'related_products.php' ?>
    </div>
    <div class="make_order">
        <form action="" class="validate">
            <div class="container">
                <div class="make_order__title h1 mb10">Оформить заказ</div>
                <div class="text_grey mb40">Уже заказывали у нас? <a href="#login_popup" class="open_popup link link--dark">Авторизуйтесь</a> на сайте, и мы сохраним всю информацию по заказу и автоматически заполним ваши контактные данные</div>
                <div class="make_order__row">
                    <div class="make_order__col make_order__col--1">
                        <div class="make_order__container">
                            <div class="make_order__item_title mb10 bold"><span class="make_order__item_title_icon icon-user2"><span class="path1"></span><span class="path2"></span></span>Введите контактные данные получателя</div>
                            <div class="tabs tabs--radio">
                                <div class="make_order__item_title tabs__header">
                                    <div href="#fiz" class="text_grey tabs__button">
                                        <label>
                                            <input type="radio" name="lico" value="Физическое лицо" checked>
                                            <div class="radio show_sm"></div>
                                            Физическое лицо
                                        </label>
                                    </div>
                                    <div href="#urid" class="text_grey tabs__button">
                                        <label>
                                            <input type="radio" name="lico" value="Юридическое лицо">
                                            <div class="radio show_sm"></div>
                                            Юридическое лицо
                                        </label>
                                    </div>
                                </div>
                                <div class="tabs__line">
                                    <div class="tabs__line_fill"></div>
                                </div>
                                <div class="tabs__content make_order__tabs_content">
                                    <div class="tab" id="fiz">
                                        <div class="inputs_row">
                                            <div class="inputs_container inputs_container--half">
                                                <div class="input_container mb20">
                                                    <input type="text" class="input required" name="fio" placeholder="Фамилия Имя Отчество" data-mask="fio" autocomplete="off">
                                                    <div class="success icon-tick"></div>
                                                </div>
                                                <div class="input_container mb20">
                                                    <input type="text" class="input required" name="email" placeholder="E-mail" data-mask="email">
                                                    <div class="success icon-tick"></div>
                                                </div>
                                                <div class="input_container make_order__phone">
                                                    <input type="text" class="input required" name="phone" placeholder="Телефон" data-mask="phone">
                                                    <div class="success icon-tick"></div>
                                                </div>
                                            </div>
                                            <div class="inputs_container inputs_container--half">
                                                <div class="input_container make_order__textarea_container">
                                                    <textarea type="text" class="input make_order__textarea" name="comment" placeholder="Комментарий к заказу" autocomplete="off"></textarea>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="tab" id="urid">2</div>
                                </div>
                            </div>
                        </div>
                        <hr>
                        <div class="make_order__container mb15">
                            <div class="make_order__item_title mb15">
                                <span class="make_order__item_title_icon make_order__item_title_icon--2 icon-delivery"><span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span><span class="path5"></span></span>
                                <div>
                                    <span class="bold">Выберите способ доставки в</span><a href="#cities_popup" class="open_popup text_accent accent_dotted accent_dotted--hoverable make_order__item_citie">г. <span class="val">Казань</span></a>
                                </div>
                            </div>
                            <div class="make_order__card_list">
                                <label class="card2 make_order__card_list_item active">
                                    <input type="radio" name="delivery" value="Самовывоз" checked>
                                    <div class="card2__title mb5">Самовывоз</div>
                                    <div class="card2__text fz12 text_grey">Сегодня</div>
                                    <div class="card2__footer fz14">Бесплатно</div>
                                    <span class="icon-box-icons card2__icon card2__icon--box"><span class="path1"></span><span class="path2"></span></span>
                                </label>
                                <label class="card2 make_order__card_list_item">
                                    <input type="radio" name="delivery" value="Доставка по городу">
                                    <div class="card2__title mb5">Доставка по городу</div>
                                    <div class="card2__text fz12 text_grey">Завтра</div>
                                    <div class="card2__footer fz14">200 руб.</div>
                                    <span class="icon-delivery2 card2__icon"><span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span><span class="path5"></span><span class="path6"></span><span class="path7"></span><span class="path8"></span><span class="path9"></span><span class="path10"></span><span class="path11"></span><span class="path12"></span><span class="path13"></span></span>
                                </label>
                                <label class="card2 make_order__card_list_item">
                                    <input type="radio" name="delivery" value="В пределах Казани (+100 км)">
                                    <div class="card2__title mb5">В пределах Казани (+100 км)</div>
                                    <div class="card2__text fz12 text_grey">2-4 дня</div>
                                    <div class="card2__footer fz14">200 руб.</div>
                                    <span class="icon-delivery2 card2__icon"><span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span><span class="path5"></span><span class="path6"></span><span class="path7"></span><span class="path8"></span><span class="path9"></span><span class="path10"></span><span class="path11"></span><span class="path12"></span><span class="path13"></span></span>
                                </label>
                                <div class="fz12 text_grey make_order__card_list_item make_order__card_list_item--text">
                                    Вы можете выбрать только один способ доставки из предоставленных трёх. Окончательную стоимость доставки Вам рассчитает наш менеджер, после завершения заказа
                                </div>
                            </div>
                        </div>
                        <div class="make_order__container2 mb50">
                            <div class="make_order__item_title mb10 bold">Выберите магазин:</div>
                            <div class="make_order__shop_row">
                                <div class="make_order__shop_col make_order__shop_col--1">
                                    <label class="make_order__shop_item mb35">
                                        <input type="radio" data-map-x="55.830296" data-map-y="49.085959" class="change_map_shop" name="shop" value="ул. Волгоградская, д.12" checked>
                                        <div class="radio"></div>
                                        <div class="make_order__shop_text">
                                            <div class="bold mb15">ул. Волгоградская, д.12</div>
                                            <div class="mb5">с 9:00-21:00 (без выходных)</div>
                                            <div class="fz14 text_grey">График работы</div>
                                        </div>
                                    </label>
                                    <label class="make_order__shop_item">
                                        <input type="radio" data-map-x="55.742559" data-map-y="49.211894" class="change_map_shop" name="shop" value="ул. Юлиуса Фучика, д.14">
                                        <div class="radio"></div>
                                        <div class="make_order__shop_text">
                                            <div class="bold mb15">ул. Юлиуса Фучика, д.14</div>
                                            <div class="mb5">с 9:00-21:00 (без выходных)</div>
                                            <div class="fz14 text_grey">График работы</div>
                                        </div>
                                    </label>
                                </div>
                                <div class="make_order__shop_col make_order__shop_col--2 hide_xs">
                                    <div id="make_order__map" class="map2 make_order__map" style="height:255px"></div>
                                </div>
                            </div>
                        </div>
                        <hr>
                        <div class="make_order__container">
                            <div class="make_order__item_title mb20 bold">
                                <span class="icon-wallet make_order__item_title_icon"><span class="path1"></span><span class="path2"></span><span class="path3"></span></span>
                                Выберите способ оплаты
                            </div>
                            <div class="make_order__card_list">
                                <label class="card2 make_order__card_list_item make_order__card_list_item--2">
                                    <input type="radio" name="payment" value="Наличный расчет" checked>
                                    <div class="card2__title mb5">Наличный расчет</div>
                                    <div class="card2__text fz14 text_grey">Расплатиться наличными можно непосредственно с курьером, когда он доставит заказ, либо в магазине.</div>
                                    <span class="icon-wallet card2__icon card2__icon--wallet"><span class="path1"></span><span class="path2"></span><span class="path3"></span></span>
                                </label>
                                <label class="card2 make_order__card_list_item make_order__card_list_item--2">
                                    <input type="radio" name="payment" value="Оплата банковской картой при получении заказа" checked>
                                    <div class="card2__title mb5">Оплата банковской картой при получении заказа</div>
                                    <div class="card2__text fz14 text_grey">Расплатиться наличными можно непосредственно с курьером, когда он доставит заказ, либо в магазине.</div>
                                    <span class="icon-credit-card card2__icon card2__icon--2 card2__icon--card"><span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span><span class="path5"></span><span class="path6"></span></span>
                                </label>
                                <label class="card2 make_order__card_list_item make_order__card_list_item--2">
                                    <input type="radio" name="payment" value="Онлайн-оплата
                                        банковской картой" checked>
                                    <div class="card2__title mb5">Онлайн-оплата банковской картой</div>
                                    <div class="card2__text fz14 text_grey">Безопасная оплата заказа картой онлайн. Форма оплаты появится сразу после оформления заказа.</div>
                                    <span class="icon-credit-card2 card2__icon card2__icon--card2"><span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span><span class="path5"></span><span class="path6"></span></span>
                                </label>
                            </div>
                        </div>
                        <div class="mb25 show_lg"></div>
                        <hr class="show_lg">
                    </div>
                    <div class="make_order__col make_order__col--2">
                        <div class="make_order__item_header">
                            <div class="make_order__item_title make_order__item_title--order">
                                <span class="icon-clipboard make_order__item_title_icon"><span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span><span class="path5"></span><span class="path6"></span><span class="path7"></span></span>
                                <span class="make_order__item_title_text bold">Ваш заказ</span>
                                <a href="#" class="link link--dark fz14">Изменить</a>
                            </div>
                        </div>
                        <hr class="mb20">
                        <div class="bold make_order__container2">Состав заказа:</div>
                        <div class="make_order__product_item fz14">
                            <a href="#">
                            <img data-src="/local/assets/img/product.png" class="make_order__product_photo lazy" alt="">
                            </a>
                            <div class="make_order__product_item_main">
                                <a href="#" class="make_order__product_title fz14">Очищающая сыворотка для 
                                лица LEVRANA</a>
                                <div class="make_order__product_footer">
                                    <div class="text_grey make_order__product_quant">2 шт.</div>
                                    <div class="bold">440 руб.</div>
                                </div>
                            </div>
                        </div>
                        <hr>
                        <div class="make_order__product_item fz14">
                            <a href="#">
                            <img data-src="/local/assets/img/product.png" class="make_order__product_photo lazy" alt="">
                            </a>
                            <div class="make_order__product_item_main">
                                <a href="#" class="make_order__product_title fz14">Очищающая сыворотка для 
                                лица LEVRANA</a>
                                <div class="make_order__product_footer">
                                    <div class="text_grey make_order__product_quant">2 шт.</div>
                                    <div class="bold">440 руб.</div>
                                </div>
                            </div>
                        </div>
                        <hr class="mb15">
                        <div class="make_order__container2 make_order__total_info">
                            <div class="make_order__total_info_item">
                                <div class="bold mb10">Доставка</div>
                                <div class="fz14 mb20"><span class="text_grey">Самовывоз</span> <span>- Бесплатно</span></div>
                            </div>
                            <div class="make_order__total_info_item">
                                <div class="bold mb10">Оплата</div>
                                <div class="fz14 mb20"><span class="text_grey">Наличиными или банковской картой при получении</span></div>
                            </div>
                        </div>
                        <hr class="mb15">
                        <div class="make_order__container2 make_order__to_pay">
                            <div class="make_order__item_title mb25 make_order__to_pay_col1">
                                <div class="bold make_order__item_title_text make_order__to_pay_title">К оплате</div>
                                <div class="fz18">880 руб.</div>
                            </div>
                            <button type="submit" class="button button--full_width mb30 make_order__to_pay_button">ОПЛАТИТЬ ЗАКАЗ <span class="button__icon icon-arrow-point-to-right"></span></button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    </div>
</main>
<? include 'footer.php' ?>