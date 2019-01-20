// 滚轮事件开始
// 1定义一个变量 表示当前显示项 从0开始
var index = 0;
// 2定义一个变量 是布尔值 表示是否可以执行滚轮滚动后的功能（true表示可以，false表示不可以）
var isOpen = true;
// 3给文档注册滚轮事件
var handler = function (e) {
    if (isOpen) {
        // 先关门 防止在滚轮运动期间，滚动再次执行滚轮事件
        isOpen = false;
        var _e = window.event || e;
        if (_e.wheelDelta == 120 || _e.detail == -3) {
            // 更改index值
            index--;
            if (index < 0) {
                index = 0;
            }
        } else {
            // 更改index值
            index++;
            if (index >4) {
                index = 4;
            }
        }
        //  4计算运动的目标值  
        var v = -1 * index * $('body').height();
        // 5动画类名为screenItem的div到目标值
        $('.screenItem').animate({ top: v }, 1500, function () {
            // 运动结束后
            isOpen = true;
        });  
        //    6更改对应的li样式
        $('.controls li').eq(index).addClass('active').siblings().removeClass('active');
       
    }
};

on(document, 'DOMMouseScroll', handler);
on(document, 'mousewheel', handler);
 
// 7. 给导航项注册click事件
$('.controls li').click(function () {
    // 7.1 通过index方法获取当前点击的li的索引值
    var index = $(this).index();
    // 7.2 找到对应的图片，获取距离文档的间距
    //   var l = $('.screenItem .box').eq(index).height();
    var v = -1 * index * $('body').height();
    // 7.3 设置给html或body的scrollTop属性
    // $('li').eq(index).addClass('active').siblings().removeClass('active');
    $('.screenItem').animate({
        top: v
    }, 500);
    $('.controls li').eq(index).addClass('active').siblings().removeClass('active');
});
// 8. 回到顶部
$('.back').click(function () {
    $('.screenItem').animate({
        top: 0
    }, 500);
});
// 滚轮事件end

// 控制轮播图的js开始
// 1. 定义一个变量，表示当前显示项，默认从0开始
var index2 = 0;
// 2. 点击右侧按钮实现轮播（当前点击的要淡入显示，其他兄弟淡出隐藏）
$('.arrow-right').click(function(){
  // 3. 找到下一项
  index2++;
  // 4. 限制
  if(index2>3) {
    index2 = 0;
  }
  $('.lbt li').eq(index2).fadeIn(500).siblings().fadeOut(500);
});


// 左侧
// 3. 点击左侧侧按钮实现轮播（当前点击的要淡入显示，其他兄弟淡出隐藏）
$('.arrow-left').click(function(){
  // 3. 找到下一项
  index2--;
  // 4. 限制
  if(index2<0) {
    index2 = 3;
  }
  $('.lbt li').eq(index).fadeIn(300).siblings().fadeOut(300);
  console.log(index2);
});

// 开启一个定时器
setInterval(function(){
  // 触发右侧按钮的点击事件
  $('.arrow-right').trigger('click');
},2000);
// 轮播图end
// 旋转木马js开始
 // 0. 定义一个数组，存放7个类名
 var arr = ['slide1', 'slide2', 'slide3', 'slide4', 'slide5','slide6','slide7','slide8'];
 // 1. 给右侧按钮注册点击事件
 $('#arrRight1').click(function () {
     // 2. 删除数组中的最后一个值,接收删除后的结果
     var last = arr.pop();
     // 3. 放到数组的最前面
     arr.unshift(last);
     // 4. 循环遍历数组，取出数组中每一个值，赋值给每一个li的类名（前提，先删除掉原有的类名，再添加新的类名）。
     for (var i = 0; i < arr.length; i++) {
         $('.slide li')
             .eq(i)
             .removeClass()
             .addClass(arr[i]);
     }
 });

 // 1. 给左侧按钮注册点击事件
 $('#arrLeft1').click(function () {
     // 2. 删除数组中第一个值,并接收
     console.log(1);
     var first = arr.shift();
     // 3. 把删除的第一个值追加到数组的最后一个
     arr.push(first);
     console.log(arr);
     // 4.  循环遍历数组，取出数组中每一个值，赋值给每一个li的类名（前提，先删除掉原有的类名，再添加新的类名）。
     for (var i = 0; i < arr.length; i++) {
         $('.slide li')
             .eq(i)
             .removeClass()
             .addClass(arr[i]);
     }
 });
// 旋转木马js结束