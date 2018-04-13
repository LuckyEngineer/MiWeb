(function(){
    // banner_box轮播
    (function(){
        var swiper1 = new Swiper('.banner_box', {
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
                renderBullet: function (index, className) {
                    return '<span class="' + className + '">'+(index+1)+'</span>';
                },
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });
    })();
})();