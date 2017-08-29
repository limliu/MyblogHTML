$(function() {

    var $slide = $(".slide li");
    var iLen = $slide.length;

    // 把除第一个的所有图片移动右边
    $slide.not(":first").css({ "left": 760 });

    // 根据图片的数量添加数量小圆图
    for (var i = 1; i < iLen + 1; i++) {
        var $num = $("<a>");
        if (i == 1) {
            $num.addClass("active")
        }
        $num.html(i);
        $num.prependTo($(".left .banner"));
    }

    //监控小圆图的点击事件，根据小圆图下标展示图片。
    var iNow = "";
    $(".banner").delegate("a", "click", function() {
        iNow = 3 - $(this).index();
        fnMove();
        $(this).addClass("active").siblings().removeClass("active");
    })



    var iPrev = 0;

    // 移动函数
    function fnMove() {
        if (iNow > iPrev) {
            $slide.eq(iNow).css({ "left": 670 });
            $slide.eq(iNow).animate({ "left": 0 });
            $slide.eq(iPrev).animate({ "left": -670 });
            iPrev = iNow;
        }

        if (iNow < iPrev) {
            $slide.eq(iNow).css({ "left": -760 });
            $slide.eq(iNow).animate({ "left": 0 });
            $slide.eq(iPrev).animate({ "left": 760 });
            iPrev = iNow;
        }
    }



})