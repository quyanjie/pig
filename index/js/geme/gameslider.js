
//鼠标移入背景图片更换，突出显示
//用多类名新建数组
var  path ='images/game/'; 
$('.story-list').mouseenter(function(){
    var  b = $(this).attr('bsrc');
    $('.n-customs').find('.bgimages').attr('src',path+b);
})
$('.story-concierge li').mouseenter(function(){
    var m =$(this).attr('msrc');
    $('.lakes').find('.bgimages').attr('src',path+m);
})
$('.bodily-sex').mouseenter(function(){
    var m =$(this).attr('vsrc');
    $('.bodily').find('.bgimages').attr('src',path+m);
})
// 玩法背景切换
$('.diwe').mouseenter(function(){
    var  p =$(this).attr('psrc');
    $('.play').find('.play-picture').attr('src',path+p);
})
// 玩法点击进入窗口
$('.diwe').click(function () {
    $('.player').show(300);
    var s  =$(this).attr('psrc');
    $('.player>img').attr('src',path+s);
    var n = $(this).index();
    $('.player-center').eq(n).show(300).siblings().hide(300);
    $('.list-uls li').eq(n).addClass('bgc').siblings().removeClass('bgc');
  })
  $('.list-uls li').click(function () {
      $(this).addClass('bgc').siblings().removeClass('bgc');
      var L = $(this).index();
      var w = $('.diwe').eq(L).attr('psrc');
      $('.player>img').attr('src',path+w);
      $('.player-center').eq(L).show(300).siblings().hide(300);
  })


//左右点击轮播
// 声明一个变量用来代表索引
var index=0;
$('.btn-left').click(function(){
    index++;
    if(index > 1){
        index = 1;
        $(this).prop('disabled','true');
    }
    // var num=$('.story-concierge li').offset().left;
    console.log(index);
    var num= -1056*index;
    $('.story-concierge').animate({
        'left':num
    },500)

})
$('.btn-right').click(function(){
    index--;
    if(index <0){
        index =0;
        $(this).prop('disabled','true');
    }
    var num1 = -1056*index;
    $('.story-concierge').animate({
        left:num1
    },500)
})


//视频播放事件
var  paths ='autio/game/'; 
var video1 = document.querySelector('.video-one');
var video2 = document.querySelector('.video-two');
var video3 = document.querySelector('.qg-video');
var audio = document.querySelectorAll('.audio-icon');
var music = document.querySelector('.music');
var bodily =document.querySelectorAll('.bodily-gif');
var winvideo = document.querySelector('.win-video');
var v_offs = document.querySelector('.video-offs');
var bigY = document.querySelector('.bigY');
var qgWin = document.querySelector('.qg-win');
bigY.onclick = function(){
    // console.log(1);
    qgWin.className= 'win-video active';
    music.pause();
    video3.play();
}
// console.log(audio);
//世界点击出现相应块和视频，同时音乐暂停
for(var i = 0; i<bodily.length ;i++){
    bodily[i].onclick=function(){
        for(var y = 0; y<bodily.length ;y++){
            // console.log(1);
            winvideo.className='win-video';
        };
        winvideo.className= 'win-video active';
    var  index = this.getAttribute('nsrc');
    // console.log(index);
    video1.src =paths+index;
    music.pause();
    video2.play();
    }
};
//角色中播放视频，音乐暂停，写的有点多余，因为和上面一样，只位置得不同所以不得以分开，也可以写一个封装
var v_win = document.querySelector('.video-window');
for(var i = 0; i< audio.length;i++){
    audio[i].onclick = function(){
        for(var j = 0; j< audio.length;j++){
        v_win.className='video-window';
    };
    v_win.className= 'video-window active';
    var  index = this.getAttribute('vsrc');
    // console.log(index);
    video1.src =paths+index;
    music.pause();
    video1.play();
    }
};
//点击此按钮将视频暂停和父盒子隐藏
var offs = document.querySelector('.offs');
offs.onclick= function(){
    v_win.className='win-video';
    video1.pause();
    music.play();
}
//角色中 乘号logo，点击关掉视频和父元素隐藏
v_offs.onclick= function(){
    winvideo.className='video-window';
    video2.pause();
    music.play();
}

//体型点击进入，左右点击轮播图
var index =0;
$('.img-left').click(function(){
    index++;
    if(index>3){
        index = 0;
    }
    $('.video-img').find('img').eq(index).fadeIn(500).siblings().fadeOut(500);
})
$('.img-right').click(function(){
    index--;
    if(index <0){
        index =3;
    }
    $('.video-img').find('img').eq(index).fadeIn(500).siblings().fadeOut(500);
})
//     var setiii = everyTime(function(){
//     $('.img-right').click();
// },200)
// $('.video-img').mouseenter(function(){
//     stopTime(setiii);
// })
// $('.video-img').mouseenter(function(){
//      setiii = everyTime(function(){
//         $('.img-right').click();
//     },200)
// })
//体型点击进入相应图片
$('.bodily-sex').click(function(){
    var index = $(this).index();
    $('.video-window').show();
    $('.video-img').find('img').eq(index).fadeIn(500).siblings().fadeOut(500);
})
//点击关闭按钮退出
$('.video-window>.offs').click(function(){
    $('.video-window').hide();
})
//鼠标移入
$('.video-window').mouseenter(function(){
    $('.img-tog').show(800);
})
$('.video-window').mouseleave(function(){
    $('.img-tog').hide(500);
})
//角色点击更换
$('.one-span').click(function(){
    $(this).addClass('span-bg-img').siblings().removeClass('span-bg-img');
})
$('.s1').click(function(){
    $('.bodily').animate({
        left:'0'
    },500)
})
$('.s2').click(function(){
    $('.bodily').animate({
        left:'-2016'
    },500)
})


//圈子
$('.ul1 li').mouseenter(function () {
    var index = $(this).index();
    $('.ul2 li').eq(index).css('z-index', 2).siblings().css('z-index', 1);
    $(this).find('div').hide().parent().siblings().find('div').show();
});
$('.ks > div') .click(function(){
    var index = $(this).index();
    var l = -1920 * index;
    $(this).addClass('show').siblings().removeClass('show').addClass('hide');
    $('.bigbox ').animate({
        left : l
    },500);
});