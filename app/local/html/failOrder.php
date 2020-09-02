<?php
require($_SERVER['DOCUMENT_ROOT'] . '/bitrix/header.php');
$APPLICATION->SetPageProperty("title", "Medar");
$APPLICATION->SetPageProperty("description", "Medar description");
?>

<div class="section1">
    <div class="container">
        <div class="alert mb45">
            <div class="alert__icon alert__icon--fail"><span class="icon-close"></span></div>
            <div class="alert__text">
                <div class="alert__title">Внимание! Произошла ошибка.</div>
                <div class="fz14 text_grey">При оплате заказа произошла ошибка, попробуйте еще раз оформить заказ.
Вы можете связаться с нами по телефону номер телефона <a href="tel:+78432111999" class="link_black">8 (843) 211-19-99</a></div>
            </div>
        </div>
    
        <div class="success__buttons">
            <a href="/personal/orders/" class="button success__button1">ОФОРМИТЬ ЗАКАЗ ЕЩЁ РАЗ<span class="button__icon icon-arrow-point-to-right"></span></a>
        </div>
    
    </div>
</div>


<?php require($_SERVER['DOCUMENT_ROOT'] . '/bitrix/footer.php'); ?>