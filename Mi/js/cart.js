$(function(){
    // top
    // 鼠标移入移开用户名
    (function(){
        var $user = $(".top .top_nav .t_n_user");
        var $menu = $(".top .top_nav .t_n_user .t_n_u_menu");
        $user.hover(function(){
            $menu.stop(true).slideDown(200);
        },function(){
            $menu.stop(true).slideUp(200);
        })
    })();
    // End top


    // content_centre7
    // 结算div距离顶部的高度
    var position = $(".content_centre7").offset().top;
    // 计算总价条目div的所在位置，如果距离顶部的距离,小于或等于0，则修改div的对应样式
    function change_position(){
        // 计算div距离当前浏览器顶部的距离
        var h = $(".content_centre7").offset().top - $(window).scrollTop();
        // 计算div距离当前浏览器底部的距离
        var diff = $(window).height() - h - 50;
        if(diff < 0){
            $(".content_centre7").addClass("content_centre7_fixed");
        }
    }
    // 在渲染页面的时候初始化其位置
    change_position();

    // 响应滚轮事件，调节总价条目的位置
    (function(){
        var $pricebar = $(".content_centre7");
        $(window).scroll(function(){
            if($pricebar.offset().top >= position){
                $(".content_centre7").removeClass("content_centre7_fixed");
            }
            change_position();
        });
    })();
    // End content_centre7



    // 鼠标点击复选框
    // (function(){
    //
    // })();

    // 点击复选框，修改商品数量和价格统计
    (function(){
        var $check_all = $("#selall");// 全选框
        var $checkbox = $(".selpart");// 商品复选框
        var $miuns = $(".content .content_goods .c_g_minus");// 减
        var $plus = $(".content .content_goods .c_g_plus");// 加
        var $oneprice = $(".content_subtotal");// 小计
        var $totalprice = $(".totalprice");// 总价
        var $inputnum = $(".content .content_goods .c_g_num");// 商品数量输入框
        // 临时变量
        var temp = 1;
        // var flag = 0;
        // 点击全选框
        $check_all.click(function(){
            // 如果已经被选中了，那么就除去checkbox_selected，并且将总价置为0
            if($(this).hasClass("checkbox_selected")){
                $(this).removeClass("checkbox_selected");
                $checkbox.removeClass("checkbox_selected");
                // 将总价计为0
                $(".totalprice").html("0");
            }else{
                $(this).addClass("checkbox_selected");
                // 计算
                $checkbox.addClass("checkbox_selected");
                // 修改总价
                calPrice();
            }
        });
        // 局部复选框
        $checkbox.click(function(){
            if($(this).hasClass("checkbox_selected")){
                $check_all.removeClass("checkbox_selected");
                $(this).removeClass("checkbox_selected");
                // 修改总价
                calPrice();
            }else{
                $(this).addClass("checkbox_selected");
                allchk();
                // 修改总价
                calPrice();
            }
        });
        // 判断全选框是否需要被选中，当所有子复选框都被选中时，自动选中全选框
        function allchk(){
            var chknum = $(".selpart").length;//选项总个数
            var chk = 0;
            $(".selpart").each(function () {
                if ($(this).hasClass("checkbox_selected")) {
                    chk++;
                }
            });
            if (chknum == chk) {//全选
                $check_all.addClass("checkbox_selected");
            }
        }
        // 减少数量
        $miuns.click(function(){
            var $p_obj = $(this).parents("li");
            // 商品数量
            var num = $p_obj.find(".c_g_num").val();
            // 商品单价
            var price = $p_obj.find(".content_price").html();
            // 小计
            var subtotal = $p_obj.find(".content_subtotal").html();
            if(num != 1){
                // 将数量减1
                num--;
                $p_obj.find(".c_g_num").val(num);
                // 相应的计算小计的值
                subtotal = parseInt(subtotal) - parseInt(price);
                $p_obj.find(".content_subtotal").html(subtotal);
                // 修改总价
                calPrice();
            }
        });
        // 增加数量
        $plus.click(function(){
            var $p_obj = $(this).parents("li");
            // 商品数量
            var num = $p_obj.find(".c_g_num").val();
            // 商品单价
            var price = $p_obj.find(".content_price").text();
            // 小计
            var subtotal = $p_obj.find(".content_subtotal").text();
            // 将商品的数量加1
            num++;
            $p_obj.find(".c_g_num").val(num);
            // 更改小计的值
            subtotal = parseInt(subtotal) + parseInt(price);
            $p_obj.find(".content_subtotal").html(subtotal);
            // 修改总价
            calPrice();
        });
        // 当商品数量输入框失去焦点的时候，计算小计和总价
        $inputnum.focus(function(){
            temp = $(this).val();
        });
        $inputnum.blur(function(){
            // 判断是否为数值
            var userinput = parseInt($(this).val());
            if(!isNaN(userinput)){
                if($(this).val() <= 0){
                    $(this).val(temp);
                } else {
                    var $p_obj = $(this).parents("li");
                    // 商品单价
                    var price = $p_obj.find(".content_price").text();
                    // 更改小计的值
                    var subtotal = parseInt(price) * $(this).val();
                    $p_obj.find(".content_subtotal").html(subtotal);
                    // 修改总价
                    calPrice();
                }
            } else {
                alert("输入的数量只能是数字！");
                $(this).val(temp);
            }

        });
        // 计算总价
        // function  calPrice(){
        //     // 计算所有小计之和
        //     var money = 0;
        //     $oneprice.each(function(){
        //         money += parseInt($(this).text());
        //     });
        //     $totalprice.html(money);
        // }

        // 动态计算总价
        function calPrice(){
            // 计算所有被选中的商品小计之和
            var money = 0;
            $oneprice.each(function(){
                var flag = $(this).parents("li").find(".selpart").hasClass("checkbox_selected");
                if(flag){
                    money += parseInt($(this).text());
                }
            });
            $totalprice.html(money);
        }
    })();
});