// 回到顶部
var ret = $('.return-top a').offset().top + 400;
$(window).scroll(function () {
  var scr = $(window).scrollTop();
  if (scr > ret) {
    $('.return-top a').show();
  } else {
    $('.return-top a').hide();
  }
});
// 马的部分
$('.gift-tab ul').on('mouseenter', 'li', function () {
  var index = $(this).index();
  $(this).addClass('act').siblings().removeClass();
  $('.all-pic .pic1').eq(index).show().siblings().hide();
})
// wrap 部分
var arr = ['slide1', ' slide2', 'slide3', 'slide4', 'slide5'];
$('#arrRight').click(function () {
  var last = arr.pop();
  arr.unshift(last);
  for (var i = 0; i < arr.length; i++) {
    $('.slide-top li').eq(i).removeClass().addClass(arr[i]);
  }
})
var flag;
$('.slide-top').mouseenter(function () {
  flag = setInterval(function () {
    $('#arrRight').trigger('click');
  }, 2000)
  $('.slide-top').mouseleave(function (){
    clearInterval(flag);
  })
})
$('.slide-bottom li').click(function(){
    var index = $(this).index();
    $('.slide-top-2').siblings().hide();
    $('.slide-top-2 li').eq(index).show().css('z-index',10).siblings().hide();
  })
  $('.slide-bottom ul').mouseleave(function(){
    $('.slide-top-1').fadeIn();
    $('.slide-top-2 li').hide();
  })
  // 新金发部分开始
  $('.new-gold-top li').click(function(){
    var index = $(this).index();
    $('.new-gold-big li').eq(index).stop().show(2000).siblings().stop().hide();
    $('.new-gold-big li').eq(index).hide(4000);
  })
  /* 复刻外装开始 */
  var i;
$('.clothes-top li').click(function(){
  i = $(this).index();
  $('.clothes-bottom ul').show().find('li').eq(i).css('z-index',29).siblings('li').css('z-index',20);
  $('.arrLeft').show().css('z-index',99);
  $('.arrRight').show().css('z-index',99);
})
$('.arrRight').click(function(){
  i++;
  console.log(1);
  $('.clothes-bottom li').eq(i).show().siblings('li').hide();
  
})
$('.arrLeft').click(function(){
  i--;
  $('.clothes-bottom li').eq(i).show().siblings('li').hide();
  
})
$('.cha').click(function(){
  $('.clothes-bottom ul').hide();
  $('.arrLeft').hide();
  $('.arrRight').hide();
})
$('.allnew-nav li').mouseenter(function(){
  var index = $(this).index();
  $(this).addClass('act').siblings().removeClass('act');
  $('.allnew-b').children().eq(index).show().siblings().hide();
})
 $('.allnew-nav-li1-small li').click(function(){
   var index = $(this).index();
   $('.allnew-nav-li1 li').eq(index).css('z-index',7).siblings().css('z-index',6);
 })
 $('.allnew-nav-li2-small li').click(function(){
  var index = $(this).index();
  $('.allnew-nav-li2 li').eq(index).css('z-index',7).siblings().css('z-index',6);
})

