/**
 * Created by Administrator on 2017/2/24.
 */
$(document).ready(function () {
    $('.hide-code-button').eq(0).mouseover(function () {
        $('.hide-code').eq(0).css('display', 'block');
    }).mouseout(function () {
        $('.hide-code').eq(0).css('display', 'none');
    })
})