var index = 0;
var index1 = 0;
var big = document.querySelector('.big');
var down = document.querySelector('.down');
var music = document.querySelector('.music');
var audio = document.querySelector('audio');
var num1 = 0;
var flag = true;
if (index == 0) {

    // setTimeout(function(){},1000)
    $('.wenzi p').eq(0).fadeIn(5000);
    $('.wenzi p').eq(1).fadeIn(5500);
    $('.wenzi p').eq(2).fadeIn(6000);
    $('.wenzi p').eq(3).fadeIn(7000);
    $('.wenzi p').eq(4).fadeIn(8000);
    $('.wenzi p').eq(5).fadeIn(9000);
    $('.wenzi2 p').eq(0).fadeIn(5000);
    $('.wenzi2 p').eq(1).fadeIn(5500);
    $('.wenzi2 p').eq(2).fadeIn(6000);
    $('.wenzi2 p').eq(3).fadeIn(7000);
    $('.wenzi2 p').eq(4).fadeIn(8000);
    $('.wenzi2 p').eq(5).fadeIn(9000);
    $('.wenzi2 p').eq(6).fadeIn(9000);


    // $('.wenzi span').fadeIn(5000,function(){
    //     $('.wenzi2').fadeIn(5000);
    // });
}
// 鼠标滚动切换图片
var handler = function (e) {
    var _e = window.event || e;
    if (flag) {
        if (_e.wheelDelta == 120 || _e.detail == -3) {
            flag = false;
            index--;
            if (index < 0) {
                index = 0;
            }
            var l = -1080 * index;
            $(big).animate({ top: l }, 1000, function () {
                flag = true;
            })
            $('.ye span').eq(index).addClass('active').siblings().removeClass('active');
        } else {
            flag = false;
            index++;
            if (index > 2) {
                index = 2;
            }
            var l = -1080 * index;
            $(big).animate({ top: l }, 1000, function () {
                flag = true;
            })
            $('.ye span').eq(index).addClass('active').siblings().removeClass('active');
        };
    }
    if (index == 0) {
        $('.wenzi p').fadeIn(2000, function () {
            $('.wenzi2 p').fadeIn(1000);
        });
    } else {
        $('.wenzi p').fadeOut(500, function () {
            $('.wenzi2 p').fadeOut(500);
        });
    }
    if (index == 1) {
        $('.gfxl').stop().animate({ left: 60 }, 1000);
    } else {
        $('.gfxl').stop().animate({ left: -200 }, 1000);
    }
    if (index == 2) {
        $('.ssmp').stop().animate({ left: 60 }, 1000);
    } else {
        $('.ssmp').stop().animate({ left: -200 }, 1000);
    }
};
// 音乐开始暂停
music.onclick = function(){
    if(audio.paused){
        audio.play();
        music.className = 'music';

    }else{
        audio.pause();
        music.className = 'pause';
    }
     
};
// logo闪现
on(document, 'DOMMouseScroll', handler);
// 其他浏览器解决方式
on(document, 'mousewheel', handler);
setInterval(function () {
    $('.logo img').fadeIn(2000);
    $('.logo img').fadeOut(2000);

}, 1000);
// 大页面切换按钮
$('.ye span').click(function () {
    var index3 = $(this).index();
    $(this).addClass('active').siblings().removeClass('active');
    var l = -1080 * index3;
    yd(big, l, 15);
    if (index3 == 1) {
        $('.gfxl').stop().animate({ left: 60 }, 1000);
    } else {
        $('.gfxl').stop().animate({ left: -200 }, 1000);
    }
    if (index3 == 2) {
        $('.ssmp').stop().animate({ left: 60 }, 1000);
    } else {
        $('.ssmp').stop().animate({ left: -200 }, 1000);
    }

});
// team导航栏隐藏显示
$('.right .team').click(function () {
    var txt = $(this).text();
    if (txt == '《') {
        $(this).text(' 》')
        $(this).parent().animate({
            right: 0
        }, 500)
    } else {
        $(this).text('《')
        $(this).parent().animate({
            right: -120
        }, 500)
    }
});
// 四季切换
$('.seasonNav span').click(function () {
    $(this).addClass('show').siblings().removeClass('show');
    var num4 = $(this).index();
    $('.two li').eq(num4).fadeIn(500).siblings().fadeOut(500);
});
// 十三门派切换按键
$('.ssmpNav span').click(function () {
    $(this).addClass('mpActive').siblings().removeClass('mpActive');
    var num5 = $(this).index();
    $('.three li').eq(num5).fadeIn(1000).siblings().fadeOut(1000);
});