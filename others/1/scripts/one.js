/**
 * Created by fan on 2016/2/22.
 */
$(function () {
    var $div1=$("<div class='opc1 opac'></div>");
    var $div2=$("<div class='opc2 opac'></div>");
    var $div3=$("<div class='opc3 opac'></div>");
    var $div4=$("<div class='opc4 opac'></div>");
    var $scroll=$(".scroll");
    $div1.appendTo($scroll);$div2.appendTo($scroll);$div3.appendTo($scroll);$div4.appendTo($scroll);
    $(".switch-left").click(function () {
        var $area=$(".scroll");
        var $img=$area.find("img:first");
        $img.animate({"margin-left":"-="+"240px"},800,function(){
            $img.css('margin-left',"90px").appendTo($area);
        });
    });
    $(".switch-right").click(function () {
        var $area=$(".scroll");
        var $img_one=$area.find("img:first");
        var $img=$area.find("img:last");
        $img_one.animate({"margin-left":"+="+"240px"},800,function(){
            $img_one.css('margin-left',"90px");
            $img.prependTo($area);
        });
    })
})