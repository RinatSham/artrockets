<? include 'header.php' ?>
<main>
    <? include 'breadcrumbs.php' ?>
    <div class="container">
        <h1 class="h1 page_title">Личный кабинет</h1>
        <div class="main_container catalog_main lk__container">
            <? include './lkSidebar.php' ?>
            <div class="main__content lk__main">
                <div class="bold fz18 mb15">Персональные данные</div>
                <form action="/local/include/callback.php" class="validate">
                    <div class="tabs tabs--radio">
                        <div class="make_order__item_title tabs__header">
                            <div href="#fiz" class="text_grey tabs__button">
                                <label>
                                    <div>
                                        <input type="radio" name="lico" value="Физическое лицо" checked>
                                        <div class="radio show_sm"></div>
                                        Физическое лицо
                                    </div>
                                </label>
                            </div>
                            <div href="#urid" class="text_grey tabs__button">
                                <label>
                                    <div>
                                        <input type="radio" name="lico" value="Юридическое лицо">
                                        <div class="radio show_sm"></div>
                                        Юридическое лицо
                                    </div>
                                </label>
                            </div>
                        </div>
                        <div class="tabs__line">
                            <div class="tabs__line_fill"></div>
                        </div>
                        <div class="tabs__content lk_info__tabs_content">
                            <div class="tab" id="fiz">
                                <div class="inputs_row inputs_row--3 mb15">
                                    <div class="input_container mb20">
                                        <input type="text" class="input required" name="fio" placeholder="Фамилия Имя Отчество" data-mask="fio" autocomplete="off">
                                        <div class="success icon-tick"></div>
                                    </div>
                                    <div class="input_container mb20">
                                        <input type="text" class="input required" name="email" placeholder="E-mail" data-mask="email">
                                        <div class="success icon-tick"></div>
                                    </div>
                                    <div class="input_container mb20">
                                        <input type="text" class="input required" name="phone" placeholder="Телефон" data-mask="phone">
                                        <div class="success icon-tick"></div>
                                    </div>
                                </div>
                                <div class="bold fz18 mb20">Данные о доставке</div>
                                <div class="inputs_row inputs_row--1_2 mb15">
                                    <div class="input_container mb20">
                                        <div class="input_container__placeholder">Город доставки: <a class="open_popup text_dotted text_dotted--hoverable text_dark city_changable" href="#cities_popup">Казань</a></div>
                                        <input type="text" class="input input--popup required city_changable" disabled>
                                        <input type="hidden" name="city" class="city_changable_input" value="Казань">
                                        <div class="success icon-tick"></div>
                                    </div>
                                    <div class="input_container mb20">
                                        <input type="text" class="input required" name="address" placeholder="Введите адрес доставки, например: г. Казань, ул. Кремлевская, д. 10, кв. 6" data-mask="address" autocomplete="off">
                                        <div class="success icon-tick"></div>
                                    </div>
                                </div>
                            </div>
                            <div class="tab mb20" id="urid">
                                <div class="inputs_row inputs_row--3">
                                    <div class="input_container mb20">
                                        <input type="text" class="input required" name="fio" placeholder="Фамилия Имя Отчество" data-mask="fio" autocomplete="off">
                                        <div class="success icon-tick"></div>
                                    </div>
                                    <div class="input_container mb20">
                                        <input type="text" class="input required" name="email" placeholder="E-mail" data-mask="email">
                                        <div class="success icon-tick"></div>
                                    </div>
                                    <div class="input_container mb20">
                                        <input type="text" class="input required" name="phone" placeholder="Телефон" data-mask="phone">
                                        <div class="success icon-tick"></div>
                                    </div>
                                </div>
                                <div class="inputs_row inputs_row--1_2">
                                    <div class="input_container mb20">
                                        <input type="text" class="input required" name="company" placeholder="Название компании" autocomplete="off">
                                        <div class="success icon-tick"></div>
                                    </div>
                                    <div class="input_container mb20">
                                        <input type="text" class="input required" name="address" placeholder="Введите адрес доставки, например: г. Казань, ул. Кремлевская, д. 10, кв. 6" data-mask="address" autocomplete="off">
                                        <div class="success icon-tick"></div>
                                    </div>
                                </div>
                                <div class="inputs_row inputs_row--3 mb15">
                                    <div class="input_container mb20">
                                        <input type="text" class="input required" name="inn" placeholder="ИНН компании" data-mask="integerPositive" autocomplete="off">
                                        <div class="success icon-tick"></div>
                                    </div>
                                </div>
                            </div>
                            <div class="inputs_row inputs_row--1_1 mb20">
                                <div class="inputs_row__col lk_info__pass1">
                                    <div class="bold fz18 mb20">Введите пароль</div>
                                    <div class="input_container input_container--iconed mb15">
                                        <input type="password" class="input required" name="password1" autocomplete="off">
                                        <div class="success icon-tick"></div>
                                        <div class="input_container__icon input_container__icon--empty icon-eye show_pass"></div>
                                    </div>
                                </div>
                                <div class="inputs_row__col">
                                    <div class="bold fz18 mb20">Повторите пароль</div>
                                    <div class="input_container input_container--iconed mb15">
                                        <input type="password" class="input required" name="password2" autocomplete="off">
                                        <div class="success icon-tick"></div>
                                        <div class="input_container__icon input_container__icon--empty icon-eye show_pass"></div>
                                    </div>
                                </div>
                            </div>
                            <button type="submit" class="button lk_info__save_button" tabindex="0">СОХРАНИТЬ ДАННЫЕ<span class="button__icon icon-arrow-point-to-right"></span></button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</main>
<? include 'footer.php' ?>