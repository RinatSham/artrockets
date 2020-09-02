<? include 'header.php' ?>
<main>
  <? include 'breadcrumbs.php' ?>

  <div class="container">
    <h1 class="h1 page_title">Восстанавливающий крем для лица FRUDIA</h1>
    
    <div class="product_preview mb35">
      <div class="product_preview__slider_container">
        <div class="product_preview__slider_nav">
          <div class="product_preview__slide_nav">
            <div class="product_preview__slide_nav_img product_preview__slide_nav_video lazy" data-src="./local/assets/img/product.jpg"></div>
          </div>

          <? for ($i=0; $i < 8; $i++) { ?>
            <div class="product_preview__slide_nav" >
              <div class="product_preview__slide_nav_img lazy" data-src="./local/assets/img/product.jpg"></div>
            </div>
          <? } ?>

        </div>

        <div class="product_preview__slider">
          <div class="product_preview__slide">
            <div class="product_preview__slide_video">
              <video controls>
                <source src="./local/assets/img/test.mov" type='video/mp4'>
                Тег video не поддерживается вашим браузером.
              </video>
            </div>
          </div>

          <? for ($i=0; $i < 8; $i++) { ?>
            <div class="product_preview__slide">
              <a href="./local/assets/img/product.jpg" data-fancybox="product"><img data-src="./local/assets/img/product.jpg" alt="" class="lazy"></a>
            </div>
          <? } ?>

        </div>
      </div>
      <div class="product_preview__info">
        <div class="product_preview__title">
          <div class="product_price h1">440 руб.</div>
          <img src="./local/assets/img/productLogo.png" class="hide_lg" alt="">
        </div>
        <div class="product_old_price">950 руб.</div>
        <div class="product_preview__row product_preview__row--2">
          <div class="product_preview__col3">
            <div class="fz18 bold product_preview__title_2">Количество:</div>
            <div class="change_quant">
              <button class="iconed_button iconed_button--hover_shadow iconed_button--sm change_quant__minus" data-quant="minus"><span class="iconed_button__icon icon-arrow-point-to-right"></span></button>
              <input class="product_quant" value="1" type="text" data-mask="integerPositive" autocomplete="off">
              <button class="iconed_button iconed_button--hover_shadow iconed_button--sm change_quant__plus" data-quant="plus"><span class="iconed_button__icon icon-arrow-point-to-right"></span></button>
            </div>
          </div>
          <div class="product_preview__col4">
            <div class="fz18 bold product_preview__title_2">Наличие:</div>
            <div class="in_stock">
              <span class="active"></span>
              <span class="active"></span>
              <span class="active"></span>
              <span class="active"></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
        <div class="product_preview__row product_preview__row--3">
          <div class="product_preview__col1">
            <a href="#tocart_popup" class="open_popup product_preview__button1 button button--full_width">В КОРЗИНУ<span class="button__icon icon-arrow-point-to-right"></a>
          </div>
          <div class="product_preview__col2">
            <a href="#oneclick_popup" class="open_popup product_preview__button button button--empty2 button--full_width">КУПИТЬ В 1 КЛИК<span class="button__icon icon-arrow-point-to-right"></a>
          </div>
        </div>
        <a class="product_preview__tab iconed_button_hover">
          Доставка
          <button class="iconed_button iconed_button--sm"><span class="iconed_button__icon icon-arrow-point-to-right"></span></button>
        </a>
        <ul class="product_preview__tab_content fz14">
          <li>
            <span class="text_grey">Самовывоз</span>
            <span>Сегодня</span>
          </li>
          <li>
            <span class="text_grey">Доставка по Казани</span>
            <span>Завтра</span>
          </li>
          <li>
            <span class="text_grey">Курьерской службой по РФ</span>
            <span>15-20 дней</span>
          </li>
        </ul>
        <a class="product_preview__tab iconed_button_hover">
          Оплата
          <button class="iconed_button iconed_button--sm"><span class="iconed_button__icon icon-arrow-point-to-right"></span></button>
        </a>
        <ul class="product_preview__tab_content fz14">
          <li>
            <span class="text_grey">Самовывоз</span>
            <span>Сегодня</span>
          </li>
        </ul>
      </div>
    </div>

    <div class="product_main">
      <div class="tabs hide_sm product_main__tabs">
        <div class="tabs__header">
          <div class="text_grey tabs__button" href="#tab1">Описание</div>
          <div class="text_grey tabs__button" href="#tab2">Состав</div>
          <div class="text_grey tabs__button" href="#tab1">Гарантия</div>
          <div class="text_grey tabs__button" href="#tab2">Возврат</div>
        </div>
        <div class="tabs__line">
          <div class="tabs__line_fill"></div>
        </div>
        <div class="tabs__content fz14">
          <div class="tab" id="tab1">
            <div class="tabs__row">
              <div class="tabs__col tabs__col--1">
                <div class="tabs__text_block">
                  <p class="h3">О товаре</p>
                  <p class="text_grey">
                     Многоунциональный крем для сияния, осветления и здоровья кожи от бренда Frudia! Невероятно ароматный крем с легкой текстурой стал хитом продаж в Корее: средство отлично смягчает и питает кожу, буквально подсвечивая ее изнутри. Крем подойдет для тусклой, неоднородной кожи с веснушками, застойными и пигментными пятнами.
                  </p>
                </div>
                <div class="tabs__text_block tabs__text_block">
                  <p class="h3">Способ применения</p>
                  <p class="text_grey">
                     Нанесите средство на кожу лица и равномерно распределите легкими массажными движениями.
                  </p>
                </div>
              </div>
              <div class="tabs__col tabs__col--2">
                <p class="h3 mb0">Свойства</p>
                <div class="table_desc fz14">
                  <div class="table_desc__row">
                    <span class="text_grey">Тип</span>
                    <span>Крем</span>
                  </div>
                  <div class="table_desc__row">
                    <span class="text_grey">Время нанесения</span>
                    <span>Дневное / ночное</span>
                  </div>
                  <div class="table_desc__row">
                    <span class="text_grey">Тип кожи</span>
                    <span>Для всех типов кожи</span>
                  </div>
                  <div class="table_desc__row">
                    <span class="text_grey">Эффект</span>
                    <span>Питание, увлажнение</span>
                  </div>
                  <div class="table_desc__row">
                    <span class="text_grey">Особенности</span>
                    <span>С гиалуроновой кислотой</span>
                  </div>
                  <div class="table_desc__row">
                    <span class="text_grey">Масла</span>
                    <span>Косточки винограда</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="tab" id="tab2">
            <div class="tabs__row">
              <div class="tabs__col tabs__col--2">
                <p class="h3 mb0">Свойства</p>
                <div class="table_desc fz14">
                  <div class="table_desc__row">
                    <span class="text_grey">Тип</span>
                    <span>Крем</span>
                  </div>
                  <div class="table_desc__row">
                    <span class="text_grey">Время нанесения</span>
                    <span>Дневное / ночное</span>
                  </div>
                  <div class="table_desc__row">
                    <span class="text_grey">Тип кожи</span>
                    <span>Для всех типов кожи</span>
                  </div>
                  <div class="table_desc__row">
                    <span class="text_grey">Эффект</span>
                    <span>Питание, увлажнение</span>
                  </div>
                  <div class="table_desc__row">
                    <span class="text_grey">Особенности</span>
                    <span>С гиалуроновой кислотой</span>
                  </div>
                  <div class="table_desc__row">
                    <span class="text_grey">Масла</span>
                    <span>Косточки винограда</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Mobile tabs -->
      <div class="show_sm mb50">
        <a class="product_preview__tab product_preview__tab--2 iconed_button_hover">
          Описание
          <button class="iconed_button iconed_button--sm"><span class="iconed_button__icon icon-arrow-point-to-right"></span></button>
        </a>
        <div class="product_preview__tab_content product_preview__tab_content--2 fz14">
          <div class="h3 mb15">О товаре</div>
          <div class="text_grey fz14 mb35">Многофунциональный крем для сияния, осветления и здоровья кожи от бренда Frudia! Невероятно ароматный крем с легкой текстурой стал хитом продаж в Корее: средство отлично смягчает и питает кожу, буквально подсвечивая ее изнутри. Крем подойдет для тусклой, неоднородной кожи с веснушками, застойными и пигментными пятнами.</div>
          <div class="h3 mb15">Способ применения</div>
          <div class="text_grey fz14 mb35">Нанесите средство на кожу лица и равномерно распределите легкими массажными движениями.</div>
          <div class="product_preview__tab_label">Тип</div>
          <div class="product_preview__tab_text">Крем</div>
        </div>
        <a class="product_preview__tab product_preview__tab--2 iconed_button_hover">
          Состав
          <button class="iconed_button iconed_button--sm"><span class="iconed_button__icon icon-arrow-point-to-right"></span></button>
        </a>
        <div class="product_preview__tab_content product_preview__tab_content--2 fz14">
          <div class="h3 mb15">О товаре</div>
          <div class="text_grey fz14 mb35">Многофунциональный крем для сияния, осветления и здоровья кожи от бренда Frudia! Невероятно ароматный крем с легкой текстурой стал хитом продаж в Корее: средство отлично смягчает и питает кожу, буквально подсвечивая ее изнутри. Крем подойдет для тусклой, неоднородной кожи с веснушками, застойными и пигментными пятнами.</div>
          <div class="h3 mb15">Способ применения</div>
          <div class="text_grey fz14 mb35">Нанесите средство на кожу лица и равномерно распределите легкими массажными движениями.</div>
          <div class="product_preview__tab_label">Тип</div>
          <div class="product_preview__tab_text">Крем</div>
        </div>
        <a class="product_preview__tab product_preview__tab--2 iconed_button_hover">
        Гарантия
          <button class="iconed_button iconed_button--sm"><span class="iconed_button__icon icon-arrow-point-to-right"></span></button>
        </a>
        <div class="product_preview__tab_content product_preview__tab_content--2 fz14">
          <div class="h3 mb15">О товаре</div>
          <div class="text_grey fz14 mb35">Многофунциональный крем для сияния, осветления и здоровья кожи от бренда Frudia! Невероятно ароматный крем с легкой текстурой стал хитом продаж в Корее: средство отлично смягчает и питает кожу, буквально подсвечивая ее изнутри. Крем подойдет для тусклой, неоднородной кожи с веснушками, застойными и пигментными пятнами.</div>
          <div class="h3 mb15">Способ применения</div>
          <div class="text_grey fz14 mb35">Нанесите средство на кожу лица и равномерно распределите легкими массажными движениями.</div>
          <div class="product_preview__tab_label">Тип</div>
          <div class="product_preview__tab_text">Крем</div>
        </div>
      </div>
      <!-- Mobile tabs END -->
    </div>

    <div class="mb75 hide_sm"></div>

    <? include 'related_products.php' ?>
  </div>

  
</main>
<? include 'footer.php' ?>