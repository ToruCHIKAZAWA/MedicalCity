{
    'use strict';

    let swiper = new Swiper('.slide1', {
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        loop: true,
        on:{
            slideChange: function(){
                console.log("touched");
            },
        },
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
          clickable: true
        },
        scrollbar: {
          el: '.swiper-scrollbar',
          hide: true,
          draggable: true
        }
    });
}
