$(document).ready(function(){
	$('.teacher-btn').click(function(){
		$(this).css({'background':'#00ABFD','color':'#fff'}).siblings().css({'background':'#fff','color':'#333'});
		$(this).find('i').show().parent().siblings().find('i').hide();
		$('.ana-f-container').eq($(this).index()).css('display','block').siblings().css('display','none')
	});
	
})