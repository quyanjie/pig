// 功能：实现版心块的淡入淡出
var index = 0;

function xyc(e) {
    var _e = window.event || e
    if (_e.wheelDelta == 120 || _e.deail) {
        index--;
        if (index < 0) {
            index = 0;
        }
        $('.EditionHeartBlock li').eq(index).fadeIn().siblings().hide();
        $('.ThemainContent li').eq(index).addClass('active').siblings().removeClass('active');
        console.log(index);
    } else {
        index++;
        if (index >= 7) {
            index = 7;
        }
        $('.EditionHeartBlock li').eq(index).fadeIn().siblings().hide();
        $('.ThemainContent li').eq(index).addClass('active').siblings().removeClass('active');
        console.log(index);
    }
}
// 从common中调出on方法
on(document, 'mousewheel', xyc)
// 音乐暂停
var st = document.querySelector('audio');
var isOk = true;
$('.audio_stop').click(function () {
    if (isOk) {
        $('.audioplay').hide();
        $('.audioplay2').show();
        isOk = false;
        st.pause();
    } else {
        $('.audioplay2').hide();
        $('.audioplay').show();
        isOk = true;
        st.play();
    }
})
//点击导航
$('.ThemainContent li').click(function () {
    index = $(this).index()-1;
    $(this).addClass('active').siblings().removeClass('active');
    $('.EditionHeartBlock li').eq(index).fadeIn().siblings().hide();
})
$('.ThemainContent span').click(function(){
    
})