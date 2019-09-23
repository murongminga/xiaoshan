$(function(){	
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
				tag=0
			}else{
				$('.hidnav').hide()
				$('.navtwo-line1').removeClass('change-line1')
				$('.navtwo-line2').removeClass('change-line1')
				$('.navtwo-line3').removeClass('change-line2')
				tag=1
			}
		})
		$(window).scroll(function(event){
			var h=$(window).scrollTop()
			if (h>1) {
				$('.navone').css('position','fixed')
				$('.navone').css('height','75px')
				$('.navone').css('line-height','75px')
			}else{
				$('.navone').css('position','relative')
				$('.navone').css('height','105px')
				$('.navone').css('line-height','105px')
			}	
		})



	
})