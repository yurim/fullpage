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