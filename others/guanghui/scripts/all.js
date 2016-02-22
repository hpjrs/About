/**
 * Created by Administrator on 15-12-17.
 */
//菜单显示隐藏
$(function () {
	var $submenu=$("#nav .wrap .menu .submenu_wrap");
	$submenu.hover(function () {
		$submenu.find("div.submenu").stop(true,true).slideToggle()
	})
});

//轮播特效
$(function () {
	$("#ImageRoll").on({
		mouseover: function () {
			$(".switch_left").stop(true,true).animate({
				"left":"0px"
			},200);
			$(".switch_right").stop(true,true).animate({
				"right":"0px"
			},200)
		},
		mouseleave: function () {
			$(".switch_left").stop(true,true).animate({
				"left":"-40px"
			},200);
			$(".switch_right").stop(true,true).animate({
				"right":"-40px"
			},200)
		}
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
	$("#ImageRoll").hover(function () {
		if(adTimer){
			clearInterval(adTimer)
		}
	}, function () {
		adTimer=setInterval(function () {
			$right.click()
		},4000)
	}).trigger("mouseleave")
});
function changeImg(index){
	var $img_a=$(".image_list a");
	$img_a.eq(index).stop(true,true).fadeIn().siblings().fadeOut();
	var $img_move_1=$img_a.find(".img_move_1");
	var  $img_move_2=$img_a.find(".img_move_2");
	var  $img_move_3=$img_a.find(".img_move_3");
	if(!$img_move_1.is(":animated")) {
		$img_a.find(".img_move_1").animate({
				"left": "540px", "top": "120px", "opacity": "1"
			}, 800,
			function () {
				if ($(this).parent().is(":hidden")) {
					$(this).css({"top": "120px", "left": "700px", "opacity": "0"})
				}
			})
	}
	if(!$img_move_2.is(":animated")) {
		$img_a.find(".img_move_2").animate({
				"left": "800px", "top": "250px", "opacity": "1"
			}, 800,
			function () {
				if ($(this).parent().is(":hidden")) {
					$(this).css({"top": "250px", "left": "600px", "opacity": "0"})
				}
			});
	}
	if(!$img_move_3.is(":animated")) {
		$img_a.find(".img_move_3").animate({
				"left": "750px", "top": "50px", "opacity": "1"
			}, 800,
			function () {
				if ($(this).parent().is(":hidden")) {
					$(this).css({"top": "250px", "left": "750px", "opacity": "0"})
				}
			});
	}
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
		$(this).find("span").stop(false,true).fadeToggle();
	});
	$(window).scroll(function (){
		var top=$(window).scrollTop();
		if(top<=400){
			$(".top").css("opacity","0");
		}
	})
});

//选择
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

//意见反馈
$(function(){
	$("#info").focus(function(){
		$(this).addClass("focus");
		if($(this).val() ==this.defaultValue){
			$(this).val("");
		}
	}).blur(function(){
		var $div=$("<div class='warn'>内容不能为空</div>");
		$(this).removeClass("focus");
		$(this).parent().find(".warn").remove();
		if ($(this).val() == '') {
			$(this).val(this.defaultValue);
			$(this).after($div)
		}
	});
	$("#contact").focus(function(){
		$(this).addClass("focus");
		if($(this).val() ==this.defaultValue){
			$(this).val("");
		}
	}).blur(function(){
		var $div=$("<div class='warn'>请输入正确的邮箱格式</div>");
		$(this).removeClass("focus");
		$(this).parent().find(".warn").remove();
		if( this.value=="" || ( this.value!="" && !/.+@.+\.[a-zA-Z]{2,4}$/.test(this.value) ) ) {
			$(this).val(this.defaultValue);
			$(this).after($div);
		}
	});
});

function addLoadEvent(func) {
	var oldonload = window.onload;
	if (typeof window.onload != 'function') {
		window.onload = func;
	} else {
		window.onload = function() {
			oldonload();
			func();
		}
	}
}
function validateForm(whichform) {
	for (var i=0; i<whichform.elements.length; i++) {
		var element = whichform.elements[i];
		if (element.getAttribute("required") == 'required') {
			if (!isFilled(element)) {
				return false;
			}
		}
		if (element.getAttribute("type") == 'email') {
			if (!isEmail(element)) {
				return false;
			}
		}
	}
	return true;
}

function isFilled(field) {
	return (field.value.length > 1 && field.value != field.placeholder);
}

function isEmail(field) {
	return (field.value.indexOf("@") != -1 && field.value.indexOf(".") != -1);
}

function prepareForms() {
	for (var i=0; i<document.forms.length; i++) {
		var thisform = document.forms[i];
		thisform.onsubmit = function() {
			if (!validateForm(this)) return false;
		}
	}
}
addLoadEvent(prepareForms);

//蓝图
$(function () {
	var $table=$("#help .profile .contrast table");
	$table.find("tr:first").css({"background":"#c30202","color":"white"});
	$table.find("tr:gt(1):even").css("background","#ffe1e1");
	$table.find("tr:odd").css("background","#f1f1f1")
});





