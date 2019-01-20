//判断点击播放音乐

//通过鼠标span淡入淡出
$('.heightshow').mouseenter(function(){
    $(this).parent().next().css('display','block')
})
$('.heightshow').mouseleave(function(){
    $(this).parent().next().css('display','none')
})
// 旋转花朵导航，把类名，图片路径设成两个数组
var arr1 = ['navtext1','navtext2','navtext3','navtext4','navtext5','navtext6'];
var arr = ['navtext-1.3e1b5f5d.png','navtext-2.ffbbead1.png','navtext-3.e94ede34_1.png','navtext-4.64559692.png','navtext-5.349be6f8.png','navtext-6.7d5d2821.png'];
//为了防止路径不同，方便更换拿出来
var path ='images/game/';  
// 给div注册鼠标移入事件
        $('.variety').mouseenter(function(){ 
            var index =$(this).index();  
              for(var i = 0; i< arr1.length;i++){ 
                  //循环先进行清空css，再赋予
                  //清除黄花
                $('.variety i').eq(i).removeClass('around-new'); 
                  //  $('.variety span').eq(i).removeClass(arr1[i]); 
                //清除文字图片 
                 $('.variety span').eq(i).css("background",''); 
                 $('.variety span').eq(i).addClass(arr1[i]); 
            };
       $(this).find('span').css({
           'background':'url('+path+arr[index]+')',
           'background-repeat':'no-repeat',
           'z-index':'2',
           'background-position':'center',
           'cursor':'pointer'
        },);
        $(this).find('i').addClass('around-new');
})


