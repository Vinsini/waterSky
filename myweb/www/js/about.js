$(document).ready(function(){

    // 首层tab切换
    $(".j-chooseNav a.tab-item").click(function(){
        $(".j-showContent li.show-tab").eq($(this).index()).addClass('show').siblings().removeClass('show');
        $(".j-chooseNav a.tab-item").eq($(this).index()).addClass('active').siblings().removeClass('active');
        if($(this).index()!=0){
            $(".j-chooseNav2").removeClass("show");
            $(".j-chooseNav2").hide();
        }else {
            $(".j-chooseNav2").addClass("show");
        }
    });

    // 第二个tab切换
    $(".j-chooseNav2 a.m-tab-item").click(function(){
        var aboutIndex=$(this).index()-1;
        if(aboutIndex==-1){
            $(".j-showContent li.show-tab").eq(0).addClass('show').siblings().removeClass('show');
            $(".j-chooseNav2 a.m-tab-item").eq(0).addClass('active1').siblings().removeClass('active1');
        }

        $.each($(".j-showContent li"),function(i,item){
            if(aboutIndex==i){
                $(".j-showContent li.show-tab2").eq(aboutIndex).addClass('show').siblings().removeClass('show');
                $(".j-chooseNav2 a.m-tab-item").eq(aboutIndex+1).addClass('active1').siblings().removeClass('active1');
            }
        })
    });

    // 滚轮监听事件
    $(window).scroll(function(){
        var roadY=$(window).scrollTop();
        // console.log(roadY);
        if(roadY<360){
            $("div.history-road .right1").stop().animate({right:'-50%',opacity:0},800);
            $("div.history-road .left1").stop().animate({left:'-50%',opacity:0},800);
            $("div.history-road .right2").stop().animate({right:'-50%',opacity:0},800);
            $("div.history-road .left2").stop().animate({left:'-50%',opacity:0},800);
            $("div.history-road .right3").stop().animate({right:'-50%',opacity:0},1000);
            $("div.history-road .left3").stop().animate({left:'-50%',opacity:0},1200);
            $("div.history-road .right4").stop().animate({right:'-50%',opacity:0},1200);
            $("div.history-road .left4").stop().animate({left:'-50%',opacity:0},1200);
        }
        if(roadY>=400&&roadY<500){
            $("div.history-road .right1").stop().animate({right:'20px',opacity:1},1000);
            $("div.history-road .left1").stop().animate({left:'40px',opacity:1},1000);				$("div.history-road .line").stop().animate({opacity:.5},1000);
        }
        if(roadY>=500&&roadY<600){
            $("div.history-road .right1").stop().animate({right:'90px',opacity:1},1000);
            $("div.history-road .left1").stop().animate({left:'154px',opacity:1},1000);
            $("div.history-road .right2").stop().animate({right:'300px',opacity:1},1200);
        }
        if(roadY>=600&&roadY<700){
            $("div.history-road .right1").stop().animate({right:'90px',opacity:1},800);
            $("div.history-road .left1").stop().animate({left:'154px',opacity:1},800);
            $("div.history-road .right2").stop().animate({right:'440px',opacity:1},800);
            $("div.history-road .left2").stop().animate({left:'120px',opacity:1},800);
            $("div.history-road .right3").stop().animate({right:'-50%',opacity:0},1000);
        }
        if(roadY>=700&&roadY<800){
            $("div.history-road .right1").stop().animate({right:'90px',opacity:1},800);
            $("div.history-road .left1").stop().animate({left:'154px',opacity:1},800);
            $("div.history-road .right2").stop().animate({right:'440px',opacity:1},1200);
            $("div.history-road .left2").stop().animate({left:'254px',opacity:1},1200);
        }
        if(roadY>=800&&roadY<900){
            $("div.history-road .right1").stop().animate({right:'90px',opacity:1},800);
            $("div.history-road .left1").stop().animate({left:'154px',opacity:1},800);
            $("div.history-road .right2").stop().animate({right:'440px',opacity:1},800);
            $("div.history-road .left2").stop().animate({left:'254px',opacity:1},800);
            $("div.history-road .right3").stop().animate({right:'90px',opacity:1},1300);
            $("div.history-road .left3").stop().animate({left:'-50%',opacity:0},1200);
            $("div.history-road .right4").stop().animate({right:'-50%',opacity:0},1200);
        }
        if(roadY>=900&&roadY<1000){
            $("div.history-road .right1").stop().animate({right:'90px',opacity:1},800);
            $("div.history-road .left1").stop().animate({left:'154px',opacity:1},800);
            $("div.history-road .right2").stop().animate({right:'440px',opacity:1},800);
            $("div.history-road .left2").stop().animate({left:'254px',opacity:1},800);
            $("div.history-road .right3").stop().animate({right:'194px',opacity:1},1000);
            $("div.history-road .left3").stop().animate({left:'14px',opacity:1},1200);
            $("div.history-road .left4").stop().animate({left:'-50',opacity:0},1200);
        }
        if(roadY>=1000&&roadY<1100){
            $("div.history-road .right1").stop().animate({right:'90px',opacity:1},800);
            $("div.history-road .left1").stop().animate({left:'154px',opacity:1},800);
            $("div.history-road .right2").stop().animate({right:'440px',opacity:1},800);
            $("div.history-road .left2").stop().animate({left:'254px',opacity:1},800);
            $("div.history-road .right3").stop().animate({right:'194px',opacity:1},1000);
            $("div.history-road .left3").stop().animate({left:'14px',opacity:1},1200);
//                    $(".right4").stop().animate({right:'40px',opacity:1},1200);
        }
        if(roadY>=1100&&roadY<1200){
            $("div.history-road .right1").stop().animate({right:'90px',opacity:1},800);
            $("div.history-road .left1").stop().animate({left:'154px',opacity:1},800);
            $("div.history-road .right2").stop().animate({right:'440px',opacity:1},800);
            $("div.history-road .left2").stop().animate({left:'254px',opacity:1},800);
            $("div.history-road .right3").stop().animate({right:'194px',opacity:1},1000);
            $("div.history-road .left3").stop().animate({left:'14px',opacity:1},1200);
            $("div.history-road .right4").stop().animate({right:'74px',opacity:1},1200);
            $("div.history-road .left4").stop().animate({left:'64px',opacity:1},1200);
        }
        if(roadY>=1200){
            $("div.history-road .right1").stop().animate({right:'90px',opacity:1},800);
            $("div.history-road .left1").stop().animate({left:'154px',opacity:1},800);
            $("div.history-road .right2").stop().animate({right:'440px',opacity:1},800);
            $("div.history-road .left2").stop().animate({left:'254px',opacity:1},800);
            $("div.history-road .right3").stop().animate({right:'194px',opacity:1},1000);
            $("div.history-road .left3").stop().animate({left:'14px',opacity:1},1200);
            $("div.history-road .right4").stop().animate({right:'74px',opacity:1},1200);
            $("div.history-road .left4").stop().animate({left:'64px',opacity:1},1200);
        }
    })

});

