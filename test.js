// JavaScript Document
$(document).ready(function(e) {
	var times = 1;
	$('.menu-btn ul li').click(function(){
		var index = $(document).scrollTop();
		var i = $(this).index();	
		i++;
		$.scrollTo("."+"menu"+i,500);
		});
    $('body').mousewheel(function (event, delta) {
		var index = $('body').scrollTop();
		event.stopPropagation();
		index = Math.ceil(index/600)+1;
		if(times>0){
			if(times!=0){
				times = 0;
				}
			setTimeout(function(){times++;},500);//设置0.5秒内只执行1次移动
			if (delta <= 0) {
				index++;
				if (index < 6) {
					$.scrollTo("."+"menu"+index,500);
				}	
			} else {
				index--;
				if (index < 6 && index > 0) {
					$.scrollTo("."+"menu"+index,500);
				}	
			}
		}		
		});
	 });