var A = true;
$('.action-play').click(function(){
    if(A){ 
        A = false;
        $('.music')[0].pause(); 
        $(this).addClass('action-play-new');
    }else { 
        A = true;
        $('.music')[0].play();
        $(this).removeClass('action-play-new');
    }
});
