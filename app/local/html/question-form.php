<div class="question_form">
    <form action="/local/include/callback.php" class="validate">
        <div class="container">
            <h2 class="h1 mb30">У вас есть вопросы? Напишите нам.</h2>
            <div class="inputs_row question_form__inputs_row mb30">
                <div class="inputs_container inputs_container--half">
                    <div class="input_container mb20">
                        <input type="text" class="input input--shadowed required" name="fio" placeholder="Фамилия Имя Отчество" data-mask="fio" autocomplete="off">
                        <div class="success icon-tick"></div>
                    </div>
                    <div class="input_container mb20">
                        <input type="text" class="input input--shadowed required" name="email" placeholder="E-mail" data-mask="email">
                        <div class="success icon-tick"></div>
                    </div>
                    <div class="input_container make_order__phone">
                        <input type="text" class="input input--shadowed required" name="phone" placeholder="Телефон" data-mask="phone">
                        <div class="success icon-tick"></div>
                    </div>
                </div>
                <div class="inputs_container inputs_container--half">
                    <div class="input_container make_order__textarea_container">
                        <textarea type="text" class="input input--shadowed make_order__textarea" name="question" placeholder="Напишите ваш вопрос" autocomplete="off"></textarea>
                    </div>
                </div>
            </div>
            <div class="checkbox mb30">
                <input type="checkbox" id="questionAgree" class="required input" name="agree" checked>
                <label for="questionAgree">
                    <div class="checkbox_icon"></div>
                </label>
                <span><label for="questionAgree" class="text_grey">Согласен на </label><a href="#" class="text_underline text_dark">обработку персональных данных</a></span>
            </div>
            <button type="submit" class="button">ОТПРАВИТЬ ВОПРОС<span class="button__icon icon-arrow-point-to-right"></span></button>
        </div>
    </form>
</div>