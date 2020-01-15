//jQuery로 구현

// const $button = $('.img-button')
// const $menu = $('#drop_id')
// const $about = $('.about-hidden')
// const $post = $('.post')


// $($button).mouseup(function(){
//     $('.is-active').removeClass("is-active")
//     $button.addClass("is-active")
//     $menu.addClass("is-active")
// });

// $('#drop_id a:nth-child(2)').mouseup(function(){
//     $('.is-active').removeClass("is-active")
//     $($about).addClass("is-active")
// });

// $('#drop_id a:nth-child(3)').mouseup(function(){
//     $('.is-active').removeClass("is-active")
//     $($post).addClass("is-active")
// });



// $(document).mouseup(function(e){
//     let target = $(e.target)
//     if(target.is($button)){

//     }
//     else if($menu.has(target).length === 1){

//     }

//     else if($about.has(target).length === 1){

//     }

//     else if($post.has(target).length === 1){

//     }

//     else{
//         $('.is-active').removeClass("is-active")
//     }

// });

// $('.about-hidden a:first-child').click(function(){
//     $('.is-active').removeClass("is-active")
//     $menu.addClass("is-active")
// })

// $('.post a:first-child').click(function(){
//     $('.is-active').removeClass("is-active")
//     $menu.addClass("is-active")
// })

//javascript로 구현

const button = document.getElementsByClassName('img-button')[0];
const about = document.getElementById('drop_id').getElementsByTagName('a')[1];
const post = document.getElementById('drop_id').getElementsByTagName('a')[2];
const back_about = document.getElementsByClassName('about-hidden')[0].getElementsByTagName('a')[0];
const back_post = document.getElementsByClassName('post')[0].getElementsByTagName('a')[0];


function pop_up_menu(){
    let delete_active_list = document.getElementsByClassName('is-active')
    for(let i=0; i<delete_active_list.length;i++){
        delete_active_list[i].classList.remove('is-active')
    }
    document.getElementById('drop_id').classList.add('is-active')
}

function pop_up_about(){
    let delete_active_list = document.getElementsByClassName('is-active')
    for(let i=0; i<delete_active_list.length;i++){
        delete_active_list[i].classList.remove('is-active')
    }
    document.getElementsByClassName('about-hidden')[0].classList.add('is-active');
}

function pop_up_post(){
    let delete_active_list = document.getElementsByClassName('is-active')
    for(let i=0; i<delete_active_list.length;i++){
        delete_active_list[i].classList.remove('is-active')
    }
    document.getElementsByClassName('post')[0].classList.add('is-active');
}

function back_event_about(){
    let delete_active_list = document.getElementsByClassName('is-active')
    for(let i=0; i<delete_active_list.length;i++){
        delete_active_list[i].classList.remove('is-active')
    }
    document.getElementById('drop_id').classList.add('is-active')
}

function back_event_post(){
    let delete_active_list = document.getElementsByClassName('is-active')
    for(let i=0; i<delete_active_list.length;i++){
        delete_active_list[i].classList.remove('is-active')
    }
    document.getElementById('drop_id').classList.add('is-active')

}

button.addEventListener('click', pop_up_menu);
about.addEventListener('click', pop_up_about);
post.addEventListener('click', pop_up_post);
back_about.addEventListener('click', back_event_about);
back_post.addEventListener('click', back_event_post);

document.addEventListener('click', function(e){
    let target = e.target
    if(target == button){

    }
    else if(target.parentNode == document.getElementById('drop_id')){

    }
    else if(target.parentNode == document.getElementsByClassName('about-hidden')[0]){
    
    }
    else if(target.parentNode == document.getElementsByClassName('post')[0]){
    
    }
    else{
        let delete_active_list = document.getElementsByClassName('is-active')
        for(let i=0; i<delete_active_list.length;i++){
            delete_active_list[i].classList.remove('is-active')
        }
    }

})