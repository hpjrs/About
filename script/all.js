$(function () {
    $("#fullpage").fullpage({
        verticalCentered: false,
        anchors: ['page1', 'page2', 'page3', 'page4','page5'],
        navigation: true,
        animateAnchor:false,
        navigationTooltips:['关于','技能','工作','项目','联系'],
        afterLoad: function (link,index) {
            switch(index){
                case 1:
                    $(".section1 .p-right,.p-left").animate({
                        "margin-left":"0"
                    },600);
                    break;
                case 2:
                        $(".section2 .tag p").trigger("mouseover");
                    break;
                case 3:
                     break;
                case 4:
                    break;
            }
        },
        onLeave: function (link,index) {
          switch (index){
              case 1:
                  $(".section1 .p-right").css({
                      "margin-left":"300em"
                  });
                  $(".section1 .p-left").css({
                      "margin-left":"-300em"
                  });
                  break;
              case  2:
                  break;
              case  3:
                  break;
              case  4:
                  break;
          }
        },
        afterRender: function () {
            $(".section1 .p-right,.p-left").animate({
                "margin-left":"0",
                "opacity":"1"
            },600);
        }
    })
});

$(function () {
    var $img=$("<img class='ig' src='img/wan.png' alt='碗' />");
    $(".section5 h1").toggle(function () {
        $(this).after($img);
    }, function () {
        $img.remove();
    });
});

function shake(o){
    var $panel = $("#"+o);
    box_left =1020;
    for(var i=1; 4>=i; i++){
        $panel.animate({left:box_left-(10*i)+'px'},50);
        $panel.animate({left:box_left+(10*i)+'px'},50);
    }
}
$(function () {
    $(".ripple").toggle(function () {
        $("#wenhao").stop(true,false).animate({
            "top":"50px"
        },800);
        shake("wenhao")
    }, function () {
        shake("wenhao")
        $("#wenhao").stop(true,false).animate({
            "top":"-5000px"
        }, function () {
            $("#wenhao").css({
                "top":"5000px"
            })
        })
    })
})