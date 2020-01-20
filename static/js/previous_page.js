function back_event() {
    let oldURL = document.referrer;
    document.getElementsByClassName('button-a-back')[0].setAttribute("href", oldURL)
};

document.addEventListener('DOMContentLoaded', function(){
    back_event();

})
