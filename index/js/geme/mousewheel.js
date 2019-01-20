//事件监听封装
function on(element, type, handler) {
	if (element.addEventListener != undefined) {
		element.addEventListener(type, handler);
	} else {
		element.attachEvent('on' + type, handler);
	}
}
//声明一个变量用来存储暂时索引
var index = 0;
//定义一个变量，布尔值，用来表示下次动作是否执行
var isOpen = true;
//注册事件
//  console.log(container);
var handler = function(e) {
    //写一个截流阀
	if (isOpen) {
		//x先关门，防止在运行期间，进行下次滚动
		isOpen = false;
		//事件兼容
		var _e = e || window.event;
		if (_e.wheelDelta == 120 || _e.detail == -3) {
			//判断是哪个浏览器，如果是谷歌就是执行
			//当鼠标滚轮往上时就进行减，
			index--;
			if (index < 0) {
				index = 0;
			}
		} else {
			//如果鼠标往下滚就进行加加
			index++;
			//  console.log(index);
			if (index > 6) {
				index = 6;
			}
		}
		//获取body的高度用index 代表着div索引  高度乘以索引等于div相对的位置高度
		var num = -1080 * index;
		//赋值给父元素进行滚动
		$('.container').animate({ top: num }, 1000, function() {
			isOpen = true;
		});
		if (index >= 1) {
            $('.slider').show(1000);
		} else {
            $('.slider').hide(500);
		}
		if(index >5 || index < 5){
			$('.player').hide(1000);
		}
        if(index <=1){
            $('.story-list').eq(0).animate({
                left:'0',
                top:'0'            },1200)
                $('.story-list').eq(1).animate({
                    left:'0',
                    top:'0'            },1200)
                    $('.story-list').eq(2).animate({
                        left:'0',
                        top:'0'            },1200)
        }else {
            $('.story-list').eq(0).animate({
                left:'-70',
                top:'-70'            },500)
                $('.story-list').eq(1).animate({
                    top:'-70'            },500)
                    $('.story-list').eq(2).animate({
                        right:'-70',
                        top:'-70' },500)
        }
        console.log(index);
        if(index >= 2){
            $('.story-concierge').animate({
                top:'184'
            },2000)
        }else {
            $('.story-concierge').animate({
                top:'94'
            },500)
        }
		$('.slider li').eq(index).addClass('slider-menu-flower').siblings().removeClass('slider-menu-flower');
	}
};
on(document, 'DOMMouseScroll', handler);
on(document, 'mousewheel', handler);
// // 浮动导楼梯导航,点击到相对楼层
$('.variety').click(function(){
	var indexs = $(this).index()+1;
	// var v= $('container').eq(indexs).height();
	var v = -1080 *indexs;
    $('.container').animate({
        top:v
	},1000)
	if (indexs >= 1) {
		$('.slider').show(1000);
	} else {
		$('.slider').hide(500);
	}
$(this).addClass('slider-menu-flower').siblings().removeClass('slider-menu-flower');
})

//旁边导航
$('.slider-menu-li').click(function(){
	var indexs = $(this).index();
	// var v= $('container').eq(indexs).height();
	var v = -1080 *indexs;
    $('.container').animate({
        top:v
	},1000)
	if (indexs >= 1) {
		$('.slider').show(1000);
	} else {
		$('.slider').hide(500);
	}
$(this).addClass('slider-menu-flower').siblings().removeClass('slider-menu-flower');
})

