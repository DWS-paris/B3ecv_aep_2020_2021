var windowheight = window.innerHeight;
var cloudDisplayed = false;
var cloud = document.querySelector('#cloud')

window.addEventListener('scroll', function(){

    if( window.scrollY >= (windowheight / 2) && cloudDisplayed === false ){
        cloud.classList.add('display')
        cloudDisplayed = true;
    }
})