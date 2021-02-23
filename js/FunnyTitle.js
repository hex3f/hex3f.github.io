//有趣的标题
 var OriginTitle = document.title;
 var titleTime;
 document.addEventListener('visibilitychange', function () {
     if (document.hidden) {
         document.title = 'Leaving - ' + OriginTitle;
         clearTimeout(titleTime);
     }
     else {
         /*document.title = 'Focus - ' + OriginTitle;
         titleTime = setTimeout(function () {
             document.title = OriginTitle;
         }, 1000);*/
		 document.title = OriginTitle;
     }
 });