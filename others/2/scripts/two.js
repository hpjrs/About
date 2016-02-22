/**
 * Created by fan on 2016/2/19.
 */
//轮播
$(function () {
    var adTimer=null;
    var index=0;
    var len=$("#header .imgScroll img").length;
    $(".items ul li").click(function () {
        index=$(".items ul li").index(this);
        changeImg(index);
    }).eq(0).click()
});
function changeImg(index){
    var $img=$("#header .imgScroll img");
    var $item=$("#header .items ul li");
    $img.eq(index).stop(true,true).fadeIn().siblings().fadeOut();
    $item.eq(index).addClass("hover").siblings().removeClass("hover");
}
//新闻滚动
$(function () {
    var area=$("ul.scrollline");
    var time=1500;
    var timeId;
    area.hover(function () {
        clearInterval(timeId)
    }, function () {
        timeId=setInterval(function () {
            var moveline=area.find("li:first");
            var lineheight=moveline.height();
            moveline.animate({marginTop:-lineheight+"px"},500, function () {
                moveline.css('marginTop',"7px").appendTo(area);
            })
        },time)
    }).trigger("mouseleave")
});
//简介轮播
$(function(){
    var page=1;
    var i=4;
    //右切换
    $(".switch p.next").click(function () {
    var $wrap=$("#main .introduce .case .img-list-wrap");
    var $img_list=$("#main .introduce .case .img-list-wrap").find(".img-list");
    var $width=$wrap.width();
    var len=$img_list.find("li").length;
    var  page_count=Math.ceil(len/i);
    if(!$img_list.is(":animated")){
            if(page==page_count){
                $img_list.animate({left:'0px'},"slow");
                page=1;
            }else{
                $img_list.animate({left:'-='+$width},"slow");
                page++
            }
         }
    });
    //左切换
    $(".switch .prev").click(function () {
        var $wrap=$("#main .introduce .case .img-list-wrap");
        var $img_list=$("#main .introduce .case .img-list-wrap").find(".img-list");
        var $width=$wrap.width();
        var len=$img_list.find("li").length;
        var  page_count=Math.ceil(len/i);
        if(!$img_list.is(":animated")){
            if(page==1){
                $img_list.animate({left:'-='+$width*(page_count-1)},"slow");
                page=page_count;
            }else{
                $img_list.animate({left:'+='+$width},"slow");
                page--;
            }
        }
    })
});