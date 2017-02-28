$(function(){
	
	
	var count_banner = 1;
	var bannerTime = null;
	function bannerMove(){
		$("div.hc-slider-item").eq(count_banner).addClass("hc-active").siblings().removeClass("hc-active");
		
		$("li.hb-control-item").each(function(i){
			if(count_banner == i){
				$(this).children("a").addClass("hbc-active").parent().siblings().children("a").removeClass("hbc-active");
			}
		})
		
		count_banner++;
		if(count_banner>=4){count_banner = 0}
	}
	bannerTime = setInterval(bannerMove,5000);
	
	$("article.home-banner").hover(function(){
		clearInterval(bannerTime);
		
	},function(){
		bannerTime = setInterval(bannerMove,6000);
		
	})
	
	$("li.hb-control-item").each(function(i){
		$(this).click(function(){
			count_banner = i;
			bannerMove();
		})
	})
	
	
	
	
	$("li.card-item").each(function(i,item){
		$(this).hover(function(){
			$(this).addClass("card-active").siblings().removeClass("card-active");
		})
	})
	
	$("li.hrt-link").each(function(i,item){
		$(this).click(function(){
			$(this).addClass("link-active").siblings().removeClass("link-active");
			$("div.hr-content").each(function(j){
				if(i==j){
					$("div.hr-content").eq(j).fadeIn(1000).siblings().fadeOut(400);
				}
			})
		})
	});
	
	//定义roll-data数量
	var dataLen = $("div.roll-data").length;
	var count_prev = 1;
	var count_now = 2;
	var coun_next = 3;
	
	function dataMove(){
		//移除所有附加属性
		for(var i=0;i<dataLen;i++){
			$("div.roll-data").eq(i).removeClass("hd-prev hd-active hd-next");
		}		
		//开始追加属性
		$("div.roll-data").eq(count_prev).addClass("hd-prev").siblings().removeClass("hd-prev");
		$("div.roll-data").eq(count_now).addClass("hd-active").siblings().removeClass("hd-active");
		$("div.roll-data").eq(coun_next).addClass("hd-next").siblings().removeClass("hd-next");

		count_prev++;
		count_now++;
		coun_next++;
		
		if(count_prev >= 8){count_prev=0}
		if(count_now >= 8){count_now=0}
		if(coun_next >= 8){coun_next=0}
	}
	
	var dataTime = setInterval(dataMove,2000);
	
	
	//元素偏移量
	obj_offset = $("div.ht-reg").offset().top;
	$("div.ht-reg").css({backgroundPositionY:"-65px"})
	
	$(window).scroll(function(){
		//可视窗口高度
		w_height = $(window).height();
		//滚轮高度
		w_scrollTop = $(window).scrollTop();
		
		//可视数据
		w_data = w_height/2 + w_scrollTop;
		
		//可视差
		w_sum = -10 - w_data + obj_offset;
		if(w_data > obj_offset && w_sum > -185){
			$("div.ht-reg").css({backgroundPositionY:w_sum+"px"});
		}
	})
		
	
	//users部分获取ul的长度
	var count_user = 0;
	function userMove(){
		
	count_user++;
	$("ul.hu-box-train li").each(function(i){
		$("ul.hu-box-train li").eq(i).removeClass("il-active");
	});
	
	for(var i=0;i<6;i++){
		$("ul.hu-box-train li").eq(count_user*6+i).css({left:210*i+'px'})
		$("ul.hu-box-train li").eq(count_user*6+i).addClass("il-active");
	}
	if(count_user >= 5){
		count_user = 0;
	}

	}
	setInterval(userMove,2000);
	
	$("div.tips-item").hover(function(){
		$(this).find("div").removeClass("tips-hide");
	},function(){
		$(this).find("div").addClass("tips-hide");
	})
	
	$("div.tips-top").click(function(){
		location.href = "/"
	})
	
})
