<? include 'header.php' ?>
<main>
    <? include 'breadcrumbs.php' ?>
    <div class="container">
        <h1 class="h1 page_title">Личный кабинет</h1>
        <div class="main_container catalog_main lk__container">
            <? include './lkSidebar.php' ?>
            <div class="main__content lk__main lk__main--orders">
                <div class="bold fz18 mb15">Мои заказы</div>
                <div class="tabs tabs--radio">
                    <div class="make_order__item_title tabs__header">
                        <div href="#order1" class="text_grey tabs__button active">
                            <label>
                                <div>
                                    <input type="radio" name="lico" value="Физическое лицо" checked="">
                                    <div class="radio show_sm"></div>
                                    Все заказы
                                </div>
                                <span class="badge badge--white">7</span>
                            </label>
                        </div>
                        <div href="#order2" class="text_grey tabs__button">
                            <label>
                                <div>
                                    <input type="radio" name="lico" value="Юридическое лицо">
                                    <div class="radio show_sm"></div>
                                    <span>Активные <span class="hide_lg">заказы</span></span>
                                </div>
                                <span class="badge badge--white">7</span>
                            </label>
                        </div>
                        <div href="#order3" class="text_grey tabs__button">
                            <label>
                                <div>
                                    <input type="radio" name="lico" value="Юридическое лицо">
                                    <div class="radio show_sm"></div>
                                    <span>Завершенные <span class="hide_lg">заказы</span> </span>
                                </div>
                                <span class="badge badge--white">7</span>
                            </label>
                        </div>
                        <div href="#order4" class="text_grey tabs__button">
                            <label>
                                <div>
                                    <input type="radio" name="lico" value="Юридическое лицо">
                                    <div class="radio show_sm"></div>
                                    <span>Анулированные <span class="hide_lg">заказы</span> </span>
                                </div>
                                <span class="badge badge--white">7</span>
                            </label>
                        </div>
                    </div>
                    <div class="tabs__line">
                        <div class="tabs__line_fill"></div>
                    </div>
                    <div class="tabs__content make_order__tabs_content">
                        <div class="tab" id="order1">
                            <div class="lk__tab mb15">
                                <div class="lk__tab_header fz14">
                                    <div class="lk__tab_header_col lk__order_number">
                                        <span class="show_sm">Заказ </span><span class="text_grey">№</span> 740923
                                    </div>
                                    <div class="lk__tab_header_col hide_sm">
                                        <span class="text_grey">Товаров: </span>5 шт.
                                    </div>
                                    <div class="lk__tab_header_col hide_sm">
                                        <span class="text_grey">Статус: </span><span class="text_danger">не оплачен</span>
                                    </div>
                                    <div class="lk__tab_header_col hide_sm">
                                        <span class="text_grey">Сумма: </span>440 руб.
                                    </div>
                                    <button class="iconed_button iconed_button--sm lk__tab_button"><span class="iconed_button__icon icon-arrow-point-to-right"></span></button>
                                </div>
                                <div class="lk__tab_main">
                                    <div class="fz14 show_sm">
                                        <div class="lk__tab_header_col mb10">
                                            <span class="text_grey">Товаров: </span>5 шт.
                                        </div>
                                        <div class="lk__tab_header_col mb10">
                                            <span class="text_grey">Статус: </span><span class="text_danger">не оплачен</span>
                                        </div>
                                        <div class="lk__tab_header_col mb35">
                                            <span class="text_grey">Сумма: </span>440 руб.
                                        </div>
                                    </div>
                                    <div class="bold">Статус заказа</div>
                                    <div class="lk__table mb40 fz14">
                                        <div class="lk__table_row">
                                            <span class="text_grey lk__table_row_title">Дата создания</span>
                                            <span>22.07.2019</span>
                                        </div>
                                        <div class="lk__table_row">
                                            <span class="text_grey lk__table_row_title">Статус</span>
                                            <span class="text_danger">Не оплачен</span>
                                        </div>
                                    </div>
                                    <div class="bold">Доставка и оплата заказа</div>
                                    <div class="lk__table mb40 fz14">
                                        <div class="lk__table_row">
                                            <span class="text_grey lk__table_row_title">Доставка</span>
                                            <span>Доставка по г. Казань</span>
                                        </div>
                                        <div class="lk__table_row">
                                            <span class="text_grey lk__table_row_title">Адрес доставки</span>
                                            <span>ул. Кремлевская, д.14</span>
                                        </div>
                                        <div class="lk__table_row">
                                            <span class="text_grey lk__table_row_title">Оплата</span>
                                            <span>Онлайн оплата картой</span>
                                        </div>
                                    </div>
                                    <div class="bold">Контактные данные</div>
                                    <div class="lk__table mb40 fz14">
                                        <div class="lk__table_row">
                                            <span class="text_grey lk__table_row_title">Контактное лицо</span>
                                            <span>Иванов Иван Иванович</span>
                                        </div>
                                        <div class="lk__table_row">
                                            <span class="text_grey lk__table_row_title">E-mail</span>
                                            <span>info@medarbeauty.ru</span>
                                        </div>
                                        <div class="lk__table_row">
                                            <span class="text_grey lk__table_row_title">Телефон</span>
                                            <span>+7 (999) 812 - 12 - 11</span>
                                        </div>
                                    </div>
                                    <div class="bold">Детализация заказа</div>
                                    <div class="lk__table mb40 fz14">
                                        <div class="lk__table_row">
                                            <span class="text_grey lk__table_row_title">Сумма</span>
                                            <span>880 руб.</span>
                                        </div>
                                        <div class="lk__table_row">
                                            <span class="text_grey lk__table_row_title">Стоимость доставки</span>
                                            <span>Бесплатно</span>
                                        </div>
                                    </div>
                                    <div class="bold mb5">Состав заказа</div>
                                    <div class="mb30">
                                        <? for ($i=0; $i < 5; $i++) { ?>
                                        <div class="make_order__product_item make_order__product_item--full fz14">
                                            <a href="#">
                                            <img data-src="/local/assets/img/product.png" class="make_order__product_photo lazy" alt="">
                                            </a>
                                            <div class="make_order__product_item_main">
                                                <a href="#" class="make_order__product_title fz14">
                                                    Очищающая сыворотка для лица LEVRANA
                                                    <div class="hide_sm text_grey fz12">Артикул: 325327</div>
                                                </a>
                                                <div class="make_order__product_footer">
                                                    <div class="text_grey make_order__product_quant">2 шт.</div>
                                                    <div class="bold">440 руб.</div>
                                                </div>
                                            </div>
                                        </div>
                                        <? } ?>
                                    </div>
                                    <div class="lk__tab_total">
                                        <div class="lk__tab_total_text_container">
                                            <span class="bold lk__tab_total_text fz18 bold">Итого:</span>
                                            <span class="lk__tab_total_price">880 руб.</span>
                                        </div>
                                        <button type="submit" class="button lk__tab_total_button">ОПЛАТИТЬ ЗАКАЗ <span class="button__icon icon-arrow-point-to-right"></span></button>
                                    </div>
                                </div>
                            </div>
                            <div class="lk__tab">
                                <div class="lk__tab_header fz14">
                                    <div class="lk__tab_header_col lk__order_number">
                                        <span class="show_sm">Заказ </span><span class="text_grey">№</span> 740923
                                    </div>
                                    <div class="lk__tab_header_col hide_sm">
                                        <span class="text_grey">Товаров: </span>5 шт.
                                    </div>
                                    <div class="lk__tab_header_col hide_sm">
                                        <span class="text_grey">Статус: </span><span class="text_success">оплачен</span>
                                    </div>
                                    <div class="lk__tab_header_col hide_sm">
                                        <span class="text_grey">Сумма: </span>440 руб.
                                    </div>
                                    <button class="iconed_button iconed_button--sm lk__tab_button"><span class="iconed_button__icon icon-arrow-point-to-right"></span></button>
                                </div>
                                <div class="lk__tab_main">
                                    <div class="fz14 show_sm">
                                        <div class="lk__tab_header_col mb10">
                                            <span class="text_grey">Товаров: </span>5 шт.
                                        </div>
                                        <div class="lk__tab_header_col mb10">
                                            <span class="text_grey">Статус: </span><span class="text_success">оплачен</span>
                                        </div>
                                        <div class="lk__tab_header_col mb35">
                                            <span class="text_grey">Сумма: </span>440 руб.
                                        </div>
                                    </div>
                                    <div class="bold">Статус заказа</div>
                                    <div class="lk__table mb40 fz14">
                                        <div class="lk__table_row">
                                            <span class="text_grey lk__table_row_title">Дата создания</span>
                                            <span>22.07.2019</span>
                                        </div>
                                        <div class="lk__table_row">
                                            <span class="text_grey lk__table_row_title">Статус</span>
                                            <span class="text_success">оплачен</span>
                                        </div>
                                    </div>
                                    <div class="bold">Доставка и оплата заказа</div>
                                    <div class="lk__table mb40 fz14">
                                        <div class="lk__table_row">
                                            <span class="text_grey lk__table_row_title">Доставка</span>
                                            <span>Доставка по г. Казань</span>
                                        </div>
                                        <div class="lk__table_row">
                                            <span class="text_grey lk__table_row_title">Адрес доставки</span>
                                            <span>ул. Кремлевская, д.14</span>
                                        </div>
                                        <div class="lk__table_row">
                                            <span class="text_grey lk__table_row_title">Оплата</span>
                                            <span>Онлайн оплата картой</span>
                                        </div>
                                    </div>
                                    <div class="bold">Контактные данные</div>
                                    <div class="lk__table mb40 fz14">
                                        <div class="lk__table_row">
                                            <span class="text_grey lk__table_row_title">Контактное лицо</span>
                                            <span>Иванов Иван Иванович</span>
                                        </div>
                                        <div class="lk__table_row">
                                            <span class="text_grey lk__table_row_title">E-mail</span>
                                            <span>info@medarbeauty.ru</span>
                                        </div>
                                        <div class="lk__table_row">
                                            <span class="text_grey lk__table_row_title">Телефон</span>
                                            <span>+7 (999) 812 - 12 - 11</span>
                                        </div>
                                    </div>
                                    <div class="bold">Детализация заказа</div>
                                    <div class="lk__table mb40 fz14">
                                        <div class="lk__table_row">
                                            <span class="text_grey lk__table_row_title">Сумма</span>
                                            <span>880 руб.</span>
                                        </div>
                                        <div class="lk__table_row">
                                            <span class="text_grey lk__table_row_title">Стоимость доставки</span>
                                            <span>Бесплатно</span>
                                        </div>
                                    </div>
                                    <div class="bold mb5">Состав заказа</div>
                                    <div>
                                        <? for ($i=0; $i < 5; $i++) { ?>
                                        <div class="make_order__product_item make_order__product_item--full fz14">
                                            <a href="#">
                                            <img data-src="/local/assets/img/product.png" class="make_order__product_photo lazy" alt="">
                                            </a>
                                            <div class="make_order__product_item_main">
                                                <a href="#" class="make_order__product_title fz14">
                                                    Очищающая сыворотка для лица LEVRANA
                                                    <div class="hide_sm text_grey fz12">Артикул: 325327</div>
                                                </a>
                                                <div class="make_order__product_footer">
                                                    <div class="text_grey make_order__product_quant">2 шт.</div>
                                                    <div class="bold">440 руб.</div>
                                                </div>
                                            </div>
                                        </div>
                                        <? } ?>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="tab" id="order2">
                            2
                        </div>
                        <div class="tab" id="order3">
                            3
                        </div>
                        <div class="tab" id="order4">
                            4
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</main>
<? include 'footer.php' ?>