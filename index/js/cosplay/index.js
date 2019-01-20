$(".nav .fl span").hide();
$(".nav .fl a").mouseenter(function() {
  $(this)
    .find("span")
    .show()
    .end()
    .siblings()
    .find('span')
    .hide();
});
$(".nav .fl span").mouseleave(function() {
  $(".nav .fl span").hide();
});
$(".nav .fl span").click(function() {
  // var x = e.offsetX();
  // var y = e.offsetY();
  $(this)
    .addClass("active")
    .siblings()
    .removeClass("active");
  $(this).find('span').show().end().siblings().find('span').hide();
    // var arr = ["index", "pics", "cos", "video", "music", "around", "works"];
    // var index = $(this).index();
    // $(this).find('span').addClass(' + '+ arr[index] + '+');
});

// $('.cos-branch-video a').mouseenter(function(){
//   $(this).addClass('cover').parent().siblings().find('a').removeClass('cover');
// })
