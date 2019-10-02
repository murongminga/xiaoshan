$(function(){
	var mydate=new Date;
		var myyear=mydate.getFullYear()
		var mymonth=mydate.getMonth();
		var myday=mydate.getDate()
		$('.sec-head-time').html(`${myyear}/${mymonth+1}/${myday}`)

		for (var i = 0; i <12; i++) {
			$('.sec-banner-img').eq(i).css('background-image', "url('./images/hero"+(i+1)+".jpg')")
		}
		var time1;
		clearInterval(time1);
		var	n=0;
		time1=setInterval(function(){
			n++;
			if (n>12){
				n=0;
			}
			$('.sec-banner-img').eq(n).fadeIn().siblings('.sec-banner-img').fadeOut()
		},5000)

		$(window).scroll(function(event){
			var h=$(window).scrollTop()
			if (h>780) {
				$('.navone').slideDown()
			}else{
				$('.navone').slideUp()
			}
			if(h>120){
				$('.navtwo').css("background-color","#fff")
				$('.navtwo-logo').show()
			}else{
				$('.navtwo').css("background-color","transparent")
				$('.navtwo-logo').hide()
			}
			for (var i = 0; i < $('.turna').length; i++) {
				var divv=$('.turna')
				var dh=$('.turna').offset().top
				if (h>dh-500) {
					divv.eq(0).addClass('purple1')
					divv.eq(0).removeClass('turna')
				}
				else{
					divv.eq(0).addClass('turna')
					divv.eq(0).removeClass('purple1')
				}
			}
			for (var i = 0; i < $('.turab').length; i++) {
				var divv=$('.turab')
				var dh=$('.turab').offset().top
				if (h>dh-500) {
					divv.eq(0).removeClass('turab')
				}
	
			}
			for (var i = 0; i < $('.opacitya').length; i++) {
				var divv=$('.opacitya')
				var dh=$('.opacitya').offset().top
				if (h>dh-500) {
					divv.eq(0).removeClass('opacitya')
				}
	
			}
			for (var i = 0; i < $('.sec-shopAbout-h2-spans').length; i++) {
				var divv=$('.sec-shopAbout-h2-spans')
				var dh=$('.sec-shopAbout-h2-spans').offset().top
				if (h>dh-500) {
					divv.eq(0).removeClass('sec-shopAbout-h2-spans')
				}
	
			}
			for (var i = 0; i < $('.sec-shopAbout-p1').length; i++) {
				var divv=$('.sec-shopAbout-p1')
				var dh=$('.sec-shopAbout-p1').offset().top
				if (h>dh-500) {
					divv.eq(0).children('span').css({"opacity":"1","transform":"rotateY(0) skew(0) scale(1, 0.9) translateX(0)"})
				}
	
			}
			for (var i = 0; i < $('.sec-topAbout-h2').length; i++) {
				var divv=$('.sec-topAbout-h2')
				var dh=$('.sec-topAbout-h2').offset().top
				if (h>dh-500) {
					divv.eq(0).children('span').css({"opacity":"1","transform":"rotateY(0) skew(0) scale(1, 0.9) translateX(0)"})
				}
	
			}


			
	
			
		})
		$(".gobacktop").click(function(event){
			$('html,body').animate({scrollTop:0},500)
		})
		var tag=1
		$('.navtwo-button').click(function(){			
			if (tag==1){
				$('.hidnav').show()
				$('.navtwo-line1').addClass('change-line1')
				$('.navtwo-line2').addClass('change-line1')
				$('.navtwo-line3').addClass('change-line2')
				$('.navtwo').css("background-color","#fff")
				$('.navtwo-logo').show()
				tag=0
			}else{
				$('.hidnav').hide()
				$('.navtwo-line1').removeClass('change-line1')
				$('.navtwo-line2').removeClass('change-line1')
				$('.navtwo-line3').removeClass('change-line2')
				tag=1
				$('.navtwo').css("background-color","transparent")
				$('.navtwo-logo').hide()
			}
		})
		$(window).load(function(){
			setTimeout(function(){
				$('.loading').children('img').css('opacity','0')
			},500)
			setTimeout(function(){
				$('.loading-line').css('transform','scale(1)');
				$('.loading-line').animate({'opacity':'0'})
				$('.loading-white').addClass('loading-whiteout')
				$('.loading-purple').addClass('loading-purpleout')
			},2000)
			setTimeout(function(){
				$('html').css('overflow','visible')
			},2000)
			setTimeout(function(){
				$('.loading').remove()
			},3500)
			$('html,body').animate({scrollTop:0},500)
		})



	
})

	









