var burgerBtn = document.querySelector('header button');
var nav = document.querySelector('nav');
var  about = document.querySelector('#about');
var  portfolio = document.querySelector('#portfolio');

console.log(about.offsetTop)
console.log(portfolio.offsetTop)

burgerBtn.addEventListener('click', function() {
    nav.classList.toggle('open')
})

window.addEventListener('scroll', function(){

    if( window.scrollY >= (portfolio.offsetTop - 300)){
        document.querySelector('#portfolio article').classList.add('display');
        document.querySelector('#about article').classList.remove('display')
    }
    else if( window.scrollY >= (about.offsetTop - 300)){
        document.querySelector('#about article').classList.add('display')
    }
})