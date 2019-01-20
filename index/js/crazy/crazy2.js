//点击任意一个li,它自身的样式变化,
// 它对应的top里的li淡入,其他淡出
$('.bottom li').mouseenter(function(){
	var index = $(this).index();
	$('.top1 li').eq(index).fadeIn().siblings().fadeOut();
	$(this).addClass('active').siblings().removeClass('active');
})

// 金发部分
//做成轮播图
//进去两个箭头和四个小点点
//点击右箭头,一次向左 移动875px,也就是索引乘以-875px
//注意,索引是慢慢减一的,如果索引<0,则让它等于3

//点击左箭头,一次向右移动875px,仍然是索引乘以-875px
//如果,索引大于3,则让它等于0

//点击小点点,点击哪个小点点,对应的li就显示,就运动到那个地方


//点击右边按钮,
// 任意一个li,对应的图片淡入,其他淡出,
//对应的小点点样式变化,其他样式移除
var index = 0;
$('.arrow-right').click(function(){
	index ++;
	if (index > 3) {
		index = 0;
	};
	$('.gold li').eq(index).fadeIn().siblings().fadeOut();
});
$('.arrow-left').click(function(){
	index --;
	if (index < 0) {
		index = 3;
	};
	$('.gold li').eq(index).fadeIn().siblings().fadeOut();
});

// 小白兔部分
//鼠标进入下方小图,对应的大图淡入,其他淡出
//对应的覆盖显示,其他隐藏
//对应的名字显示,其他隐藏
// $('.xia1 li').mouseenter(function(){
// 	var index = $(this).index();
// 	$('.shang li').eq(index).fadeIn(500).siblings().fadeOut(500);
// 	$('.fu li').eq(index).addClass('active').siblings().removeClass('active');
// 	$('.name li').eq(index).addClass('active').siblings().removeClass('active');
// });
//鼠标进入小图时,对应的大图淡入,其他淡出
//对应的p显示,其他的隐藏
$('.xia1 li').mouseenter(function(){
	var index = $(this).index();
	$('.shang li').eq(index).addClass('active').siblings().removeClass('active');
	$(this).css('opacity',0.5).siblings().css('opacity',1);
	$(this).find('p').show();
});
$('.xia1 li').mouseleave(function(){
	$(this).find('p').hide();
	$('.xia1 li').css('opacity','1');
});

// 服装复刻部分
//点击顶上tab切换,对应的div显示,另一个隐藏
$('.t1').click(function(){
	$('.fox').show();
	$('.light').hide();
	$(this).addClass('active').siblings().removeClass('active');
});
$('.t2').click(function(){
	$('.light').show();
	$('.fox').hide();
	$(this).addClass('active').siblings().removeClass('active');
});

//鼠标进入下方精灵图中li中,
//自身样式变化,active,其他移除
//对应的上面大的li显示,其他隐藏.
$('.down li').mouseenter(function(){
	$(this).addClass('active').siblings().removeClass('active');
	var index = $(this).index();
	$('.up li').eq(index).fadeIn().siblings().fadeOut();
});
$('.down1 li').mouseenter(function(){
	$(this).addClass('active').siblings().removeClass('active');
	var index = $(this).index();
	$('.up1 li').eq(index).fadeIn().siblings().fadeOut();
});

// 披风部分
var arr = ['p1.jpg','p2.jpg','p3.jpg','p4.jpg','p5.jpg','p6.jpg'];
var path = 'images/crazy/images2/';
//循环给li添加背景图片
for (var i = 0; i < arr.length; i++) {
	$('.feng li').eq(i).css('background','url('+path + arr[i]+')');
};
// 鼠标进入某个li,它自身的宽度动画变为800,其他的宽度动画变为100
$('.feng li').mouseenter(function(){
	$(this).stop().animate({width:800},800).siblings().stop().animate({width:80},500);
});
//鼠标离开所有的li,即轮播区.feng,它们的宽度全部动画为215
$('.feng').mouseleave(function(){
	$(this).find('li').stop().animate({width:200},200);
});

// 扇子里的图片出来
$('.shan').mouseenter(function(){
	$('.bj1').stop().animate({right:-200},1000);
});
// 金发部分图片出来
$('.gold ul').mouseenter(function(){
	$('.bj2').stop().animate({left:-504},1000);
});

// 白兔部分图片出来
$('.rabbit').mouseenter(function(){
	$('.bj3').stop().animate({left:-160},1000);
});

// 福利部分大图出来
$('.fuli').mouseenter(function(){
	$('.beijing1').stop().animate({left:-200},1000)
});

//挂件部分大图出来

$('.guajian').mouseenter(function(){
	$('.beijing2').stop().animate({right:0},1000);
});

