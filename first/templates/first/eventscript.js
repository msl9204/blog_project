const $button = $('.img-button')
const $menu = $('#drop_id')
const $about = $('.about-hidden')


$($button).mouseup(function(){
    $('.is-active').removeClass("is-active")
    $button.addClass("is-active")
    $menu.addClass("is-active")
});

$('#drop_id a:nth-child(2)').mouseup(function(){
    $('.is-active').removeClass("is-active")
    $($about).addClass("is-active")
});



$(document).mouseup(e => {
    if (!$button.is(e.target) // if the target of the click isn't the container...
    && $menu.has(e.target).length === 0) // ... nor a descendant of the container
    {
        // $menu.removeClass('is-active');
        $('.is-active').removeClass("is-active")

    }

    if(!$button.is(e.target)){

        if($menu.has(e.target).length === 0){
            $('.is-active').removeClass("is-active")
        }
        if($about.has(e.target).length === 0){
            $('.is-active').removeClass("is-active")
        }

    }


});

