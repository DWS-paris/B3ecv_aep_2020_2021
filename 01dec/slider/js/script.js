document.addEventListener( 'DOMContentLoaded', function () {
    new Splide( '.splide', {
        type   : 'rewind',
        perPage: 2,
        autoplay: true,
        interval: 1000
    } ).mount();
} );