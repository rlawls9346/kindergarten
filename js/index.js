var ww = $(window).width()
console.log(ww)

var elDepLi = document.querySelectorAll('#nav .depth1 > li')
if ( ww>=769 ) {
    // $('#nav .depth1 > li').hover( 
    //     function(){
    //         $(this).addClass('on')
    //     }, 
    //     function(){
    //         $(this).removeClass('on')
    //     }
    // )
    for (var i=0; i<elDepLi.length; i++) {
        elDepLi[i].addEventListener('mouseover', function(){
            this.classList.add('on')
        })
        elDepLi[i].addEventListener('mouseout', function(){
            this.classList.remove('on')
        })
    }
} else {
    // $('#nav .depth1 > li').on('click', function(){
    //     $(this).toggleClass('on')
        // if (  !$(this).hasClass('on')  ) { 
        //     $(this).addClass('on')
        // } else {
        //     $(this).removeClass('on')
        // }
    //     $(this).siblings().removeClass('on')
    // })
    for (var i=0; i<elDepLi.length; i++) {
        elDepLi[i].addEventListener('click', function(){
            if (  !this.classList.contains('on')  ) { 
                this.classList.add('on')
            } else {
                this.classList.remove('on')
            }

        })
        
    }

}



$(".slide-group").slick({
    autoplay: true, // 자동재생
    autoplaySpeed: 3000, // 간격시간
    dots: true, // 동그라미버튼
    pauseOnFocus: false, // 동그라미번호버튼 클릭시 자동실행 멈춤여부
    prevArrow: '<button class="prev"><i class="fas fa-angle-left"></i></button>',
    nextArrow: '<button class="next"><i class="fas fa-angle-right"></i></button>',
})

$('article:nth-child(1) .plpa').on('click', function(){
    var ibtn = $(this).find('i')
    if ( ibtn.hasClass('fa-pause') ) {
        $('.slide-group').slick('slickPause')
        ibtn.removeClass('fa-pause').addClass('fa-play')
    } else {
        $('.slide-group').slick('slickPlay')
        ibtn.removeClass('fa-play').addClass('fa-pause')
    }
})

$('#header .open').on('click', function(){
    $(this).next().css({
        display:'block'
    })
    $(this).css({
        display:'none'
    })
    $(this).next().next().css({
        display:'block'
    })
})
$('#header .close').on('click', function(){
    $(this).prev().css({
        display:'none'
    })
    $(this).css({
        display:'none'
    })
    $(this).prev().prev().css({
        display:'block'
    })
})

// p.326 : 이벤트 추가 mouseenter, mouseleave
// $('#nav .depth1 > li').on('mouseenter', function(){
//     $(this).addClass('on')
// })
// $('#nav .depth1 > li').on('mouseleave', function(){
//     $(this).removeClass('on')
// })


$(window).on('scroll', function(){
    var sct = $(this).scrollTop()
    if (sct>=10 && !$('#header').hasClass('on')) {
        $('#header').addClass('on')
    } else if (sct<10 && $('#header').hasClass('on')) {
        $('#header').removeClass('on')
    }
})

