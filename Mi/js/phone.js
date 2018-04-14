$(function(){
    // 当页面加载的时候调节顶部的位置
    $(document).ready(function(){
        $('html,body').animate({scrollTop:$(".top").offset().top}, 300);
    });
    // 滚轮事件
    (function(){
        $(window).scroll(function(){
            // height 滚动条的高度
            var height = $(document).scrollTop();
            // 定义高度差
            var content_h = 0;
            // 当滚动条的高度达到200以上时，显示导航栏
            if(height>200){
                $(".top").css({"position":"fixed","top":"0","left":"0","z-index":"1000"});
            } else {
                $(".top").css({"position":"relative","z-index":"0"});
            }
            // 定义一个关联数组用于存放各个内容快与滚轮的高度差
            var arr = new Array();
            for(var i = 2; i < 19; i++){
                // 循环计算每个块与滚轮的高度差
                content_h = $(".container .content_"+i).offset().top - height;
                if(content_h < 300){
                    var $content = $(".container .content_"+i);
                    if(!$content.hasClass("preload")){
                        $content.addClass("preload");
                    }
                }
            }
            // 无线充电器 content_13
            (function(){
                // 无线充电器特效
                var $phonebase = $(".c13_pic1");//充电器
                // 判断当前图片与滚轮的高度差
                if( ($phonebase.offset().top - height) < 290 ){
                    $(".content_13").addClass("showphone");
                }
            })();
        });
    })();
    // content_1轮播
    (function(){
        var swiper1 = new Swiper('.content_1', {
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
    // content_9轮播
    (function(){
        var swiper2 = new Swiper('.content_9', {
            // effect : 'fade',
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
                    return '<span class="' + className + '"></span>';
                },
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });
    })();
    // content_14轮播
    (function(){
        var swiper3 = new Swiper('.content_14', {
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
});