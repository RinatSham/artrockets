<? include 'header.php' ?>
<main>
    <? include 'breadcrumbs.php' ?>
    <div class="container">
        <h1 class="h1 page_title">Личный кабинет</h1>
        <div class="main_container catalog_main lk__container">
            <? include './lkSidebar.php' ?>
            <div class="main__content lk__main">
                <div class="bold fz18 mb30">Избранное</div>
                <div class="cart cart--2 cart--lk">
                    <header class="cart_item hide_680">
                        <div class="cart__th cart__photo">Фото</div>
                        <div class="cart__th cart__name">Наименование</div>
                        <div class="cart__th cart__in_stock hide_sm">Наличие</div>
                        <div class="cart__th cart__price hide_lg">Стоимость</div>
                        <div class="cart__th cart__quant">Количество</div>
                        <div class="cart__th cart__total show_lg">Сумма</div>
                        <div class="cart__th cart__buttons"><button type="button" class="cart__th_clear"><span class="icon-rubbish-bin cart__th_icon"></span><span class="link hide_1160 fz14">Удалить все</span></button></div>
                    </header>
                    <? for ($i=0; $i < 2; $i++) { ?>
                    <div class="cart_item">
                        <div class="cart__td cart__photo">
                            <a href="#" class="cart_item__img lazy" data-src="/local/assets/img/product.png"></a>
                        </div>
                        <div class="cart__td cart__name">
                            <a href="\#" class="cart_item__title h4 h4--underline"><span class="text_dark">Восстанавливающий крем для лица FRUDIA</span></a>
                            <div class="fz12 text_grey cart_item__brand">Бренд: LEVRANA</div>
                            <div class="fz12 text_grey cart_item__in_stock_text show_680 mb10">Наличие: <span class="text_accent">много</span></div>
                        </div>
                        <div class="cart__td cart__in_stock hide_sm">
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
                        <div class="cart__td cart__total show_lg">
                            <div class="cart_item__price product_price product_price--sm h1">1 440 руб.</div>
                            <div class="product_old_price product_old_price--sm cart_item__old_price">950 руб.</div>
                        </div>
                        <div class="cart__td cart__buttons">
                            <a href="#tocart_popup" class="open_popup icon-cart text_dark cart_item__button toggle_active"></a>
                            <button type="button" class="icon-rubbish-bin cart_item__button"></button>
                        </div>
                    </div>
                    <? } ?>
                </div>
            </div>
        </div>
        <? include 'related_products.php' ?>
    </div>
</main>
<? include 'footer.php' ?>