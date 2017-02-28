/**
 * Created by Administrator on 2017/2/23.
 */
$(document).ready(function () {
    $('.an2').eq(0).on('click',function(){
        $('.ana-rout-list').eq(0).animate({'left':'-898px'},800);
        $(this).css({'width':'35px','background':'#0198DF'}).siblings().css({'width':'20px','background':'#cccccc'})
    });
    $('.an1').eq(0).on('click',function(){
        $('.ana-rout-list').eq(0).animate({'left':'0'},800);
        $(this).css({'width':'35px','background':'#0198DF'}).siblings().css({'width':'20px','background':'#cccccc'})
    })

})