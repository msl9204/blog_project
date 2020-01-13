const $button = $('.img-button')
const $menu = $('#drop_id')
const $about = $('.about-hidden')
const $post = $('.post')


$($button).mouseup(function(){
    $('.is-active').removeClass("is-active")
    $button.addClass("is-active")
    $menu.addClass("is-active")
});

$('#drop_id a:nth-child(2)').mouseup(function(){
    $('.is-active').removeClass("is-active")
    $($about).addClass("is-active")
});

$('#drop_id a:nth-child(3)').mouseup(function(){
    $('.is-active').removeClass("is-active")
    $($post).addClass("is-active")
});



$(document).mouseup(function(e){
    let target = $(e.target)
    if(target.is($button)){

    }
    else if($menu.has(target).length === 1){

    }

    else if($about.has(target).length === 1){

    }

    else if($post.has(target).length === 1){

    }

    else{
        $('.is-active').removeClass("is-active")
    }

});

$('.about-hidden a:first-child').click(function(){
    $('.is-active').removeClass("is-active")
    $menu.addClass("is-active")
})

$('.post a:first-child').click(function(){
    $('.is-active').removeClass("is-active")
    $menu.addClass("is-active")
})