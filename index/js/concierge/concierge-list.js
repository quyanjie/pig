// 左侧 侧边栏突出显示
$('.main-warp-bar li').click(function () {
    $(this)
        .addClass('fixed')
        .siblings()
        .removeClass('fixed');
});

// 进入页面大图英雄动画
$('.main-warp-page-heros').animate({ left: 150 }, 1800);
$('.main-warp-page-txt').fadeIn(2500);

// 控制视频播放  关闭 操作
$('#btnPlay').click(function () {
    $('.video-bg').slideDown(1000, function () {
        $('.video').show(1000);
    });
});
// 关闭视频
$('.btn-close').click(function () {
    $(this).parent('.video-bg').slideUp(1000);
});

//-------------------------------------------------------------------

// 控制右侧 侧边栏 显示与隐藏
$('.main-warp-r-btn').click(function () {
    $('.main-warp-r-bg').animate({
        right: -90
    }, 500);
    $('.main-warp-r-btn img').addClass('transition');
})
$('.main-warp-r-bg').mouseleave(function () {
    $('.main-warp-r-bg').animate({
        right: -455
    }, 500);
    $('.main-warp-r-btn img').removeClass('transition');
});

// 右侧 侧边栏内 tab 切换

$('.main-warp-r .main-warp-r-tab .tab-left').click(function () {
    $(this).addClass('act').siblings().removeClass('act');
    $(this).find('span').addClass('show').parent().siblings().find('span').removeClass('show');
    var index = $(this).index();
    // console.log(index);
    $('.tab-content-item')
        .eq(index)
        .addClass('active')

        .siblings()
        .removeClass('active');
});

