/**
 * Created by fan on 2016/2/20.
 */
$(function () {
    var $img_mask=$("<img src='img/overlayer.png' alt='遮罩层' class='img-mask' />");
    var $img=$("#main .recentPosts-all img");
    $img.wrap("<div class='img-wraper'></div>");
    var $wraper=$("#main .recentPosts-all .img-wraper");
    $img_mask.appendTo($wraper);
    $(".img-mask").hide();
    $wraper.hover(function () {
        $(this).find(".img-mask").show();
    }, function () {
        $(this).find(".img-mask").hide();
    })
});
$(function () {
    var $mask=$("<span class='mask'></span>");
    var $a=$("#footer .flickr .Gallery>a");
    $a.append($mask);
    $a.hover(function(){
        $(this).find(".mask").hide();
    }, function () {
        $(this).find(".mask").show();
    });
    $a.eq(0).trigger("mouseenter")
});