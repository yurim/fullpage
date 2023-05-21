// 풀페이지 스크롤
$(function (){
   $('#fullpage').fullpage({
     // 손으로 드래그
      fingersonly: true,
       anchors:['firstPage', 'secondPage', 'thirdPage', 'fourPage',
       'fifthPage', 'sixPage', 'sevenPage'],
       menu: '.rightNav'
   });
});