// 풀페이지 스크롤
$(function (){
   $('#fullpage').fullpage({
     // 손으로 드래그
       fingersonly: true,
       anchors:['firstPage','secondPage','thirdPage','fourthPage','fifthPage','sixthPage','seventhPage'],
       menu:'.rightNav',
   });
});

// GNB
$(function (){
   setGnb();
   function setGnb(){
       $('.innerHeader .gnb > li > a').on('mouseenter focus', function (){
          $('.innerHeader').addClass('on');
          $('.innerHeader .gnb > li > .inner').addClass('on');
          $('header').css({'border': 'none'});
       });
       $('header').on('mouseleave',function (){
           $('.innerHeader').removeClass('on');
           $('.innerHeader .gnb > li > .inner').removeClass('on');
           $('header').css({'border': '1px solid rgba(225,225,225,0.1)'});
       });
   }
});

// 이미지 슬라이드
$(function (){
    $('.visual').slick({
        arrows: false,
        dots: true,
        fade: true,
        autoplay: true,
        pauseOnHover: false,
        pauseOnFocus: false,
        autoplaySpeed :2800,
        customPaging: function (slider, i) {
           let  tit = $(slider.$slider[i]).find('.dot').html();
           return '<div class="pager-tit" class=" + i + ">' + tit + '</div>';
        }
    })
});

// 이미지 슬라이드 - 넓이 높이 스크립트
$(function (){
    let winW = $(window).width();
    let winH= $(window).height();
    let list = $('.visual .list');
    list.css({width: winW + 'px', height: winH + 'px'});

});