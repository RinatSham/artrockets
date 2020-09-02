<? include 'header.php' ?>
<main>
    <? include 'breadcrumbs.php' ?>
    <div class="container">
        <h1 class="h1 page_title">Для косметологии</h1>
        <div class="main_container catalog_main">
            <? include 'catalogSidebar.php' ?>
            <div class="main__content">
                <div class="sort fz14">
                    <div class="sort__item_container">
                        <button type="button" class="open_filter_mobile show_lg filter_open">
                            <div class="open_filter_icon icon-filter"></div>
                            Фильтр
                        </button>
                        <div class="sort__item sort__item--first iconed_button_hover hide_sm">
                            <div class="sort__item_text">
                                Сортировать: по <span class="sort__item_val">умолчанию</span>
                            </div>
                            <button type="button" class="sort__item_button iconed_button iconed_button--sm"><span class="iconed_button__icon icon-arrow-point-to-right"></span></button>
                            <div class="sort__item_dropdown">
                                <div class="sort__item_dropdown_el text_grey">Умолчанию</div>
                                <div class="sort__item_dropdown_el text_grey">Популярности</div>
                                <div class="sort__item_dropdown_el text_grey">Цене выше</div>
                                <div class="sort__item_dropdown_el text_grey">Цене ниже</div>
                                <div class="sort__item_dropdown_el text_grey">Названию</div>
                            </div>
                        </div>
                        <div class="sort__item iconed_button_hover hide_lg">
                            <div class="sort__item_text">
                                Показать: <span class="sort__item_val">8 товаров</span>
                            </div>
                            <button type="button" class="sort__item_button iconed_button iconed_button--sm"><span class="iconed_button__icon icon-arrow-point-to-right"></span></button>
                            <div class="sort__item_dropdown">
                                <div class="sort__item_dropdown_el text_grey">8 товара</div>
                                <div class="sort__item_dropdown_el text_grey">16 товаров</div>
                                <div class="sort__item_dropdown_el text_grey">32 товара</div>
                                <div class="sort__item_dropdown_el text_grey">64 товара</div>
                            </div>
                        </div>
                    </div>
                    <div class="sort__item_container hide_sm">
                        <button type="button" class="sort__item sort__item--icon" data-catalog="hor">
                        <span class="icon-sort sort__item_icon"></span>
                        </button>
                        <button type="button" class="sort__item sort__item--icon active">
                        <span class="icon-display sort__item_icon"></span>
                        </button>
                    </div>
                </div>
                <div class="card_list card_list--3">
                    <? for ($i=0; $i < 8; $i++) { ?>
                    <div class="card_list__col">
                        <div class="card">
                            <header data-href="#" class="card__header lazy" data-src="/local/assets/img/product.png">
                                <div class="card__header_buttons buttons_group hide_lg">
                                    <button type="button" class="buttons_group__button toggle_active"><span class="buttons_group__icon icon-hurt"></span></button>
                                    <a href="#tocart_popup" class="open_popup buttons_group__button toggle_active"><span class="buttons_group__icon icon-cart"></span></a>
                                </div>
                            </header>
                            <div class="card__main">
                                <button type="button" class="card__favourite show_lg icon-hurt"></button>
                                <div class="card__code fz12 text_grey">Артикул: 02486545</div>
                                <a href="#" class="h4 card__title text_dark"><span class="text_dark">Очищающая сыворотка для лица</span></a>
                                <footer class="card__footer">
                                    <div class="card__brand fz12 text_grey">Бренд: LEVRANA</div>
                                    <div class="card__price">1 040 руб.</div>
                                    <div class="card__old_price text_grey">4 080 руб.</div>
                                    <a href="" class="card__more_btn iconed_button hide_lg"><span class="iconed_button__icon icon-arrow-point-to-right"></span></a>
                                <a href="#tocart_popup" class="open_popup card__more_btn iconed_button show_lg"><span class="iconed_button__icon icon-cart"></span></a>
                                </footer>
                            </div>
                        </div>
                    </div>
                    <? } ?>
                </div>
                <? include 'pagination.php' ?>
                <div class="text_center"><a href="#" class="button">ПОКАЗАТЬ ЕЩЕ<span class="button__icon icon-arrow-point-to-right"></a></div>
            </div>
        </div>
    </div>
    <? include 'our_shops.php' ?>
</main>
<? include 'footer.php' ?>