$('body').on('click', '.responsive-tab-list__item', function() {
    $(this).addClass('active');
    $(this).parents('.responsive-tab-list').find('.responsive-tab-list__item').not(this).removeClass('active');
    var $index = $(this).attr('data-index');
    $(this).parents('.responsive-tab').find('.responsive-tab-content').find('.responsive-tab-content__item').removeClass('active');
    $(this).parents('.responsive-tab').find('.responsive-tab-content').find('.responsive-tab-content__item').eq($index).addClass('active')
});

$('body').on('click', '.tab-view-btn', function() {
    $(this).parents('.tab-div').find('.more').slideToggle();
    $(this).toggleClass('active');
    if($(this).hasClass('active')) {
        $(this).text('View Less');
    }

    else {
        $(this).text('View Details');
    }
});


$('body').on('click', '.vertical-tab-list__item', function() {
    var $index = $(this).attr('data-index');
    var eqlist = $(this).parents('.scroll-section').find('.tabs-card').find('.tabs-card__item').eq($index);
    $(this).addClass('active');
    $(this).parents('.vertical-tab-list').find('.vertical-tab-list__item').not(this).removeClass('active');    
    $(this).parents('.vertical-tab-item').find('.vertical-tab-list-content__item').removeClass('active');
    $(this).parents('.vertical-tab-item').find('.vertical-tab-list-content__item').eq($index).addClass('active');

    if ($(window).width() < 768) { 
        $(this).addClass('active');
        $(this).parents('.vertical-tab-item').find('.vertical-tab-list__item').not(this).removeClass('active');
    }
    $("html, body").animate({ scrollTop: $(eqlist).offset().top-150}, 1500);
});


$(window).scroll(function(){
    var scroll = $(window).scrollTop();

    $('.tabs-card__item').each(function() {
        var $sticky = $(this).find('.tabs-title').offset().top - 280;

        if(scroll >=$sticky) {
            $(this).addClass('active');
            var $index = $(this).index();
            $('.tabs-card__item').not(this).removeClass('active');
            $(this).parents('.scroll-section').find('.vertical-tab-list__item').removeClass('active');
            $(this).parents('.scroll-section').find('.vertical-tab-list__item').eq($index).addClass('active')
        }
    })

});