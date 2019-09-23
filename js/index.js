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




	
})

	









