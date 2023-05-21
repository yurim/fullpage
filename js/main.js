// 풀페이지 스크롤
$(function (){
   $('#fullpage').fullpage({
     // 손으로 드래그
       fingersonly: true,
       anchors:['firstPage','secondPage','thirdPage','fourthPage','fifthPage','sixthPage','seventhPage'],
       menu:'.rightNav',
   });
});