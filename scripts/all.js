/**
 * Created by Administrator on 15-12-17.
 */
//菜单显示隐藏
$(function () {
	var $submenu=$("#nav .wrap .menu .submenu_wrap");
	$submenu.hover(function () {
		$submenu.find("div.submenu").stop(true,true).slideDown()
	}, function () {
		$submenu.find("div.submenu").stop(true,true).slideUp()
	})
});

//轮播特效
$(function () {
	$("#ImageRoll_wrap").hover(function () {
		$(".switch .switch_left").stop(true,true).animate({
			"left":"0px"
		},200)
	}, function () {
		$(".switch .switch_left").stop(true,true).animate({
			"left":"-40px"
		},200)
	});
	$("#ImageRoll_wrap").hover(function () {
		$(".switch .switch_right").stop(true,true).animate({
			"right":"0px"
		},200)
	}, function () {
		$(".switch .switch_right").stop(true,true).animate({
			"right":"-40px"
		},200)
	})
});

$(function () {
	var adTimer=null;
	var index=0;
	var len=$("#ImageRoll .image_list a").length;
	$(".items ol li").hover(function () {
		index=$(".items ol li").index(this);
		changeImg(index);
	}).eq(0).mouseover();
	var $switch=$(".switch");
	var $left=$switch.find(".switch_left");
	var $right=$switch.find(".switch_right");
	$left.click(function () {
		index--;
		if(index==-1){
			index=len-1
		}
		changeImg(index);
	});
	$right.click(function () {
		index++;
		if(index==len){
			index=0
		}
		changeImg(index)
	});
	$("#ImageRoll_wrap").hover(function () {
		if(adTimer){
			clearInterval(adTimer)
		}
	}, function () {
		adTimer=setInterval(function () {
			$right.click()
		},2000)
	}).trigger("mouseleave")
});
function changeImg(index){
	$(".image_list").find("a").eq(index).stop(true,true).fadeIn().siblings().fadeOut();
	$(".items ol li").eq(index).addClass("li_hover").siblings().removeClass("li_hover")
}

//content特效
$(function () {
	$(window).scroll(function () {
		var top=$(window).scrollTop();
		if(top>=1100) {
			$(".itr4_1").animate({
				"top": "-70px",
				"opacity": "1"
			}, 1000);
			$(".itr4_2").delay(200).animate({
				"bottom": "118px",
				"opacity": "1"
			}, 1000);
		}
		if(top>=800) {
			$(".itr3_1").animate({
				"bottom": "20px",
				"opacity": "1"
			}, 1000);
			$(".itr3_2").delay(200).animate({
				"bottom": "118px",
				"opacity": "1"
			}, 1000);
		}
		if(top>=400){
			$(".icons_star").animate({
				"top":"-30px",
				"opacity":"1"
			},1000);
			$(".icons_books").delay(200).animate({
				"bottom":"29px",
				"opacity":"1"
			},1000);
			$(".icons_text").delay(400).animate({
				"bottom":"118px",
				"opacity":"1"
			},1000);
			$(".top").css("opacity","1");
		}
		if(top>=200){
			$(".itr_icon1").animate({
				"top":"47px",
				"opacity":"1"
			},1000);
			$(".itr_icon2").delay(200).animate({
				"top":"47px",
				"opacity":"1"
			},1000);
			$(".itr_icon3").delay(400).animate({
				"top":"47px",
				"opacity":"1"
			},1000)
		}
	});
});

//GoTop
$(function () {
	$(".toolbar").hover(function () {
		$(this).find("span").stop(true).fadeIn();
	}, function () {
		$(this).find("span").stop(true).fadeOut();
	});
	$(window).scroll(function (){
		var top=$(window).scrollTop();
		if(top<=400){
			$(".top").css("opacity","0");
		}
	})
});

//
$(function () {
	var $chose=$(".chose");
	var $chose_1=$chose.find("a.chose_1");
	var $chose_2=$chose.find("a.chose_2");
	var $chose_3=$chose.find("a.chose_3");
	$chose_1.click(function () {
		changeBlock(0);
		$(this).addClass("chose_1-hover").siblings().removeClass("chose_2-hover chose_3-hover")
	}).click();
	$chose_2.click(function () {
		changeBlock(1);
		$(this).addClass("chose_2-hover").siblings().removeClass("chose_1-hover chose_3-hover")
	});
	$chose_3.click(function () {
		changeBlock(2);
		$(this).addClass("chose_3-hover").siblings().removeClass("chose_1-hover chose_2-hover")
	});
	$(".price table tr:first").css({"background":"#c30202","color":"white"});
	$(".price table tr:gt(1):even").css("background","#ffe1e1")
});
function changeBlock(index){
	$(".explain_wrap>div").eq(index).show().siblings().hide();
}





