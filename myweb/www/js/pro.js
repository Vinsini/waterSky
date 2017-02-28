/**
 * Created by vampire on 2017/2/23.
 */

$(document).ready(function (e) {
    $('.J-share-img1').eq(0).mouseover(function () {
        $('.J-two-code').eq(0).show();
        $('.J-two-code-triangle').eq(0).show();
    }).mouseout(function () {
        $('.J-two-code').eq(0).hide();
        $('.J-two-code-triangle').eq(0).hide();
    });

    $('.J-fig-bottom').eq(0).click(function () {
        $('.J-pro-conduct-page').eq(0).show();
    });
    $('.J-conduct-page-close').eq(0).click(function () {
        $('.J-pro-conduct-page').eq(0).hide();
    });
    $('.J-conduct-page-img-aside').eq(0).click(function () {
        $('.J-pro-conduct-page').eq(0).hide();
    });

    $('.J-hfa-model-user').eq(0).mouseover(function () {
        $('.J-hfa-model-triangle-user').eq(0).show();
    }).mouseout(function () {
        $('.J-hfa-model-triangle-user').eq(0).hide();
    });

    $('.J-hfa-model-notice').eq(0).mouseover(function () {
        $('.J-hfa-model-bell').eq(0).show();
    }).mouseout(function () {
        $('.J-hfa-model-bell').eq(0).hide();
    });

    $.fn.numberScroll=function (value,ele,speed) {
        var sum=1;
        var num=value;
        var int=setInterval(function () {
             if(sum<num){
                if(num-sum>50){
                    sum+=50;
                }else{
                    sum+=1;
                }
                $(ele).eq(0).text(sum);
            }else{
                clearInterval(int)
            }
        },speed)
    };
    $('.J-num1').numberScroll(279,'.J-num1',25);
    $('.J-num2').numberScroll(7524,'.J-num2',10);
    $('.J-num3').numberScroll(12322,'.J-num3',10);
    $('.J-num4').numberScroll(173,'.J-num4',25);
    $('.J-num5').numberScroll(34938,'.J-num5',1);
    $('.J-num6').numberScroll(10000,'.J-num6',10);


    $('.J-pro2-contain-h span').animate({left:'490px'},800,'linear');
    $('.J-pro2-contain-p').animate({right:'340px'},800,'linear');
    $('.J-pro2-expreience-bubble').animate({top:'0px'},1000,'linear');
    $('.J-pro2-first-bottomlog').animate({top:'238px'},1500,'linear');


    $(window).resize(function() {
        var screenw=$(window).width();
        var screenh=$(window).height();
        $('.J-pro2-contain-show').eq(0).width(screenw);
        $('.J-pro2-contain-show').eq(0).height(screenh);
    });

    var i=0;
    var lock=true;
    $('.J-pro2-page1').eq(0).click(function () {
        $('.J-pro2-contain').stop(true).animate({top:-678},800);
    });
    $('.J-pro2-page2').eq(0).click(function () {
        $('.J-pro2-contain').stop(true).animate({top:-678*2},800);
    });
    $('.J-pro2-page3').eq(0).click(function () {
        $('.J-pro2-contain').stop(true).animate({top:0},800);
    });
    $(document).on("mousewheel DOMMouseScroll",function (e){
        if(lock){
            if(e.originalEvent.wheelDelta < 0 || e.originalEvent.detail > 0){
                i++;
                if(i>2){i=2;return;}
                $('.J-pro2-contain').stop(true).animate({top:-678*i},800);
                lock=false;
                setTimeout(function(){
                    lock=true;
                },500);
                if(i==1){
                    $('.J-pro2-contain-h2').animate({left:'850px'},1000,'linear');
                    $('.J-pro2-contain-second-list').animate({top:'0px',opacity:1},1000,'linear');
                    $('.J-pro2-contain-second-intro').animate({top:'0px',opacity:1},1000,'linear');
                    $('.J-pro2-expreience-second').animate({top:'0px',opacity:1},1000,'linear');
                    $('.J-pro2-second-bottomlog').animate({top:'0px',opacity:1},1200,'linear');
                }
                if(i==2){
                    $('.J-pro2-third-top').animate({top:'0px',opacity:1},1000,'linear');
                    $('.J-pro2-third-foot').animate({top:'0px',opacity:1},1000,'linear');
                    $('.J-pro2-third-middle').animate({top:'0px',opacity:1},1000,'linear');
                    $('.J-pro2-expreience2').animate({top:'0px',opacity:1},1200,'linear');
                    $('.J-pro2-first-bottomlog2').animate({top:'0px',opacity:1},1200,'linear');
                }

            }
            if(e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0){
                i--;
                if(i<0){i=0;return;}
                $('.J-pro2-contain').animate({top:-678*i},800);
                lock=false;
                setTimeout(function(){
                    lock=true;
                },500)
            }
        }
    });


});