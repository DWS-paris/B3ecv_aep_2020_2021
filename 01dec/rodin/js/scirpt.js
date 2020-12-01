var img1 = document.querySelector('#img1');
var img2 = document.querySelector('#img2');
var img3 = document.querySelector('#img3');
var img4 = document.querySelector('#img4');
var btn = document.querySelector('button');


var animation = function (){ 
    img4.classList.add('display');

    setTimeout( function(){
        img3.classList.add('display');

        setTimeout( function(){
            img2.classList.add('display');
            
            setTimeout( function(){
                img1.classList.add('display');
            }, 500)
        }, 500)
    }, 500)
}


btn.addEventListener('click',function() {
    animation();
})