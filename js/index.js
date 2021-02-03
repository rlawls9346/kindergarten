$(".slide_group").slick({
    autoplay: true, //자동재생
    autoplaySpeed: 3000, // 간격시간
    dots: true, // 동그라미버튼
    pauseOnFocus: false, // 동그라미번호버튼 클릭시 자동실행 멈춤여부
    prevArrow: '<button class="prev"><i class="fas fa-angle-left"></i></button>',
    nextArrow: '<button class="next"><i class="fas fa-angle-right"></i></button>',
})



// if (true or false) { true 실행문 } else { false 실행문 }
$('.article:nth-child(1) .playstop').on('click', function(){
    var $ibutton = $(this).find('i')
    if ( $ibutton.hasClass('fa-pause') ) {
        $('.article:nth-child(1) .slide_group').slick('slickPause')
        $ibutton.removeClass('fa-pause').addClass('fa-play')
    } else {
        $('.article:nth-child(1) .slide_group').slick('slickPlay')
        $ibutton.removeClass('fa-play').addClass('fa-pause')
    }
})