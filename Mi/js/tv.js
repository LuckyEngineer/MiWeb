$(function(){
    // 当页面加载的时候调节顶部的位置
    $(document).ready(function(){
        $('html,body').animate({scrollTop:$(".top").offset().top}, 300);
        $(".container .content_1 .content_1_nav1").addClass("preload");
    });
    // 滚轮事件,触发文字上浮特效
    (function(){
        $(window).scroll(function(){
            // height 滚动条的高度
            var height = $(document).scrollTop();
            // content_2与滚轮的高度差
            var content2_h = $(".container .content_2").offset().top - height;
            // content_3与滚轮的高度差
            var content3_h = $(".container .content_3").offset().top - height;
            // content_4与滚轮的高度差
            var content4_h = $(".container .content_4").offset().top - height;
            // content_5与滚轮的高度差
            var content5_h = $(".container .content_5").offset().top - height;
            // content_6与滚轮的高度差
            var content6_h = $(".container .content_6").offset().top - height;
            // content_7与滚轮的高度差
            var content7_h = $(".container .content_7").offset().top - height;
            // 当滚动条的高度达到200以上时，显示导航栏
            if(height>200){
                $(".top").css({"position":"fixed","top":"0","left":"0","z-index":"1000"});
            } else {
                $(".top").css("position","relative");
            }
            // content_2与滚轮的高度差小于290px时，content_2中的文字上浮
            if(content2_h < 290){
                var $content2 = $(".container .content_2 .content_2_nav");
                if(!$content2.hasClass("preload")){
                    $content2.addClass("preload");
                }
            }
            // content_3与滚轮的高度差小于290px时，content_3中的文字上浮
            if(content3_h < 290){
                var $content3 = $(".container .content_3");
                if(!$content3.hasClass("preload")){
                    $content3.addClass("preload");
                }
            }
            // content_4与滚轮的高度差小于290px时，content_4中的文字上浮
            if(content4_h < 290){
                var $content4 = $(".container .content_4");
                if(!$content4.hasClass("preload")){
                    $content4.addClass("preload");
                }
            }
            // content_5与滚轮的高度差小于290px时，content_5中的文字上浮
            if(content5_h < 290){
                var $content5 = $(".container .content_5");
                if(!$content5.hasClass("preload")){
                    $content5.addClass("preload");
                }
            }
            // content_6与滚轮的高度差小于290px时，content_6中的文字上浮
            if(content6_h < 290){
                var $content6 = $(".container .content_6");
                if(!$content6.hasClass("preload")){
                    $content6.addClass("preload");
                }
            }
            // content_7与滚轮的高度差小于290px时，content_7中的文字上浮
            if(content7_h < 290){
                var $content7 = $(".container .content_7");
                if(!$content7.hasClass("preload")){
                    $content7.addClass("preload");
                }
            }
        });
    })();
    // 电视机遥控器蓝色特效
    (function(){
        var timer = null;
        function auto(){
            timer = setInterval(function(){
                if(!$(".remote_control_pic").hasClass("show")){
                    $(".remote_control_pic").addClass("show");
                } else {
                    $(".remote_control_pic").removeClass("show");
                }
            },1000);
        };
        auto();
    })();
    // 实现字幕滚动的效果
    (function(){
        var $wordbox = $(".content_3_show .c_3_s_box");
        var wordtimer = null;
        wordtimer = setInterval(function(){
            $wordbox.animate({
                top:0,
                marginTop:-70
            },200);
            setTimeout(function(){
                // 删除掉第一个子元素，再往最后添加子元素
                $wordbox.children("em").removeClass("show");
                $wordbox.children("em").eq(3).addClass("show");
                // 将第一个元素放到最后的位置上
                var temp_str = $wordbox.children().first().text();
                $wordbox.children().first().remove();
                $wordbox.append("<em>"+temp_str+"</em>");
                $wordbox.css({"top":"0","margin-top":"0"});
            },230);
        },2000);
    })();
    // 轮播图一
    (function(){
        // 定义每个导航块的数组
        var navs = new Array("电影","电视剧","综艺","体育","儿童");
        var swiper1 = new Swiper('.content_7', {
            effect : 'fade',
            // 自动播放
            autoplay:{
                delay: 2000,
                stopOnLastSlide:false,
                disableOnInteraction:false,
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
                renderBullet: function (index, className) {
                    return '<a class="' + className + '">' + navs[index] + '</a>';
                },
            },
        });
    })();
    // APP图标随机翻转
    (function(){
        var $appicon = $(".content_9 .content_9_app .card_wrap");
        var icontimer = null;
        // 每隔1秒，翻转任意一张牌
        var icontimer = setInterval(function(){
            var icon_index = randomNum(0,17);
            if($appicon.eq(icon_index).hasClass("flipped")){
                $appicon.eq(icon_index).removeClass("flipped");
            } else {
                $appicon.eq(icon_index).addClass("flipped");
            }
        },2000);
    })();
    // 生成一定范围内的随机数
    function randomNum(min,max){
        var range = max - min;
        var rand = Math.random();
        var num = min + Math.round(rand * range); //四舍五入
        return num;
    }

    // 轮播图二
    (function(){
        var swiper2 = new Swiper('.content_12', {
            effect : 'fade',
            loop: true,
            // 自动播放
            autoplay:{
                delay: 2000,
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