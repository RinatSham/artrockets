// Instagram
$.getJSON('https://www.instagram.com/medar_beauty/?__a=1', function(data){
    var user = data.graphql.user
    var followers = user.edge_followed_by.count;
    var photos = user.edge_owner_to_timeline_media.edges;
    $(photos).each(function(idx, el) {
        var link = 'https://www.instagram.com/p/' + el.node.shortcode;
        var photo = el.node.display_url;
        var likes = el.node.edge_liked_by.count;
        var comments = el.node.edge_media_to_comment.count;
        var layout = '\
        <div>\
            <a href="'+ link +'" target="_blank" class="on_instagram__slide lazy" style="background-image: url('+ photo +')" data-src="'+ photo +'">\
                <div class="feedback_buttons on_instagram__slide_buttons">\
                    <button class="feedback_buttons__item">\
                        <span class="feedback_buttons__icon icon-hurt-filled"></span>\
                        <span class="feedback_buttons__text text_white fz14">' + likes  + '</span>\
                    </button>\
                    <button class="feedback_buttons__item">\
                        <span class="icon-cloud feedback_buttons__icon"></span>\
                        <span class="feedback_buttons__text text_white fz14">' + comments + '</span>\
                    </button>\
                </div>\
            </a>\
        </div>\
        '
        $('.on_instagram__slider').append(layout);

        // На мобиле ограничиваем количество слайдов
        if (window.matchMedia("(max-width: 768px)").matches && idx > 2) return false;
    });
    
    // Слайдер инстаграм
    $(".on_instagram__slider").slick({
        slidesToShow: 7,
        dots: true,
        lazyLoad: 'ondemand',
        nextArrow:
        '<button class="slider_dots__button iconed_button next"><span class="iconed_button__icon icon-arrow-point-to-right"></span></button>',
        prevArrow:
        '<button class="slider_dots__button iconed_button prev"><span class="iconed_button__icon icon-arrow-point-to-right"></span></button>',
        appendArrows: ".on_instagram__slider_dots",
        appendDots: ".on_instagram__slider_dots",
        responsive: [
        {
            breakpoint: 1080,
            settings: {
            slidesToShow: 4
            }
        },
        {
            breakpoint: 1080,
            settings: {
            slidesToShow: 4
            }
        },
        {
            breakpoint: 769,
            settings: {
            slidesToShow: 2
            }
        },
        {
            breakpoint: 576,
            settings: {
            slidesToShow: 1
            }
        }
        ]
    });
});