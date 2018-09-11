var scrollTop;

$(function(){
	$(document).ready(function(){
		$('div.header>form>div.input').delay(1000).css({'-webkit-transform':'translateY(0px)','-o-transform':'translateY(0px)','-moz-transform':'translateY(0px)','-ms-transform':'translateY(0px)','transform':'translateY(0px)','opacity':'1'});
	});
	$(window).scroll(function(){
		scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
		if((scrollTop >= $('div.part1>ul.p1').offset().top - 400) && (scrollTop <= $('div.part1>ul.p1').offset().top)){
			$('div.part1>ul.p1>li').eq(0).css('animation','slide .5s linear').css('opacity','1');
			$('div.part1>ul.p1>li').eq(1).css('animation','slide .5s linear .5s')
			setTimeout(function(){
				$('div.part1>ul.p1>li').eq(1).css('opacity','1');
			},1000);
		}
		if((scrollTop >= $('div.part2>ul.p2').offset().top - 400) && (scrollTop <= $('div.part2>ul.p2').offset().top)){
			$('div.part2>ul.p2>li').eq(0).animate({opacity:1},500);
			$('div.part2>ul.p2>li').eq(1).delay(500).animate({opacity:1},500);
			$('div.part2>ul.p2>li').eq(2).delay(1000).animate({opacity:1},500);
			$('div.part2>ul.p2>li').eq(3).delay(1500).animate({opacity:1},500);
		}
		if((scrollTop >= $('div.part3>ul.p3').offset().top - 400) && (scrollTop <= $('div.part3>ul.p3').offset().top)){
			$('div.part3>ul.p3>li').eq(0).show(500);
			$('div.part3>ul.p3>li').eq(1).delay(500).show(500);
			$('div.part3>ul.p3>li').eq(2).delay(1000).show(500);
			$('div.part3>ul.p3>li').eq(3).delay(1500).show(500);
		}
	});
});