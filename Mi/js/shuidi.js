(function(){
    // 轮播图
    (function(){
        var swiper1 = new Swiper('.banner', {
            spaceBetween: 30,
            effect: 'fade',
            // 自动播放
            autoplay:{
                delay: 5000,
                stopOnLastSlide:false,
                disableOnInteraction:false,
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });
    })();
})();