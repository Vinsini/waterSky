$(document).ready(function(){
	$('.roll-s').eq(0).click(function(){
	
		$('.login-hide').eq(0).css('display','block');
		$('.login-show').eq(0).css('display','none');
	});
	$('.roll-h').eq(0).click(function(){
	
		$('.login-show').eq(0).css('display','block');
		$('.login-hide').eq(0).css('display','none');
	})
})