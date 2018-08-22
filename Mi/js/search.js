$(function(){
    // 点击更多的下拉列表
    $(document).ready(function(){
        $(".c2_moreChoose").click(function(){
            $(".displaybox").slideToggle("slow");
        })
    })

    // $(function(){
    //     $(".pph").click(function(){
    //         $(this).css("color","rgb(255,103,0)");
    //     })
    // })
    $(function(){
    $(".Pages_next").click(function(){
        window.location.replace("search02.html");
    })
    })



})


