//当页面卷去的距离大于大图的高度时,
//固定导航显示,回到顶部显示
//即.ding1 .top
//并且.ding1是固定定位,
//当距离小于时,固定导航显示为diaplay:none
var v1 = $('.ding1').offset().top;
$(window).scroll(function(){
	var v2 = $(window).scrollTop();
  // 2.2 被卷去的页面间距 和 今日团距离【文档】顶部的间距比较。 
  // 若大于等于，今日团固定（加类名active）,回到顶部元素显示
  // （加类名active）
  if (v2 >= v1) {
    $('.ding1').addClass('active');
    $('.top').addClass('active');
  } else {
    // 2.3 否则，去掉类名active
    $('.ding1').removeClass('active');
    $('.top').removeClass('active');
  }
  
});

//点击d1里的任意一个li,
// 它自身的样式变化,兄弟元素样式不变
// 对应页面显示出来,兄弟元素隐藏
$('.zuo0').click(function(){
  // var index = $(this).index();
  $(this).addClass('active');
  $('.you0').removeClass('active');
  $('.box1').css('display','block');
   $('.box2').hide();
});

$('.you0').click(function(){
  // var index = $(this).index();
  $(this).addClass('active');
  $('.zuo0').removeClass('active');
  $('.box2').css('display','block');
   $('.box1').hide();
});

// 3. 回到顶部
$('.top').click(function () { 
  // $(window).scrollTop(0);

  // 注意：若要实现动画时，动画的元素不能够使window。
  // 用html或body代替
  $('html,body').animate({
    // 回到顶部要设置scrollTop这个样式属性
    scrollTop:0
  }, 500);
});

//进入这一个,这个突出显示,其他的透明度降低
//离开全部li,整个透明度变为1
$('.u1 li').mouseenter(function(){
  $(this).css('opacity','1').siblings().css('opacity','0.5');
});
$('.u1').mouseleave(function(){
  $(this).find('li').css('opacity','0.5');
});