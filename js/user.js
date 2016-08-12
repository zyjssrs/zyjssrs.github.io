/*-----------数字上升特效-------------*/
var _click_count = 0;
//直接给body一个事件好了. 
$("body").bind("click", function(e) {
    //var n=Math.round(Math.random()*100);//随机数
    var $i = $("<b>").text("+" + (++_click_count)); //添加到页面的元素
    var x = e.pageX,
        y = e.pageY; //鼠标点击的位置
    $i.css({
        "z-index": 99999,
        "top": y - 15,
        "left": x,
        "position": "absolute",
        "color": "#00BCF3"
    });
    $("body").append($i);
    $i.animate({
            "top": y - 180,
            "opacity": 0.5
        },
        1500,
        function() {
            $i.remove();
        }
    );
    e.stopPropagation();
});
