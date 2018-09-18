
 function pbInitMap(){
        var uluru = {lat: 49.418688, lng: 32.104045};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 18,
          center: uluru
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });

        var InfoWindow = new google.maps.InfoWindow({
        	content: '<p>Спорткомплекс ЧДТУ(ул.Добровольського, 5)</p>'
        });

        InfoWindow.open(map, marker);

        marker.addListener('mousemove', function(){
        	InfoWindow.open(map, marker);
        });
        marker.addListener('mouseover', function(){
        	InfoWindow.open(map, marker);
        });


}

$(function() {

	$(document).ready(function(){
		$('#fullpage').fullpage({
			navigation: true,
			navigationPosition: 'right',
			slidesNavigation: true,
			verticalCentered: false,
			scrollDelay: 2000,
			onLeave: function(index, nextIndex, direction) {
				if(nextIndex == 2){
					var $pbAnimate = $('#pb-slide-one');
					$('#section2').addClass('animated zoomIn');
					$('#section2').css('animation-delay', '.2s');
					$('#section2').css('animation-duration', '.6s');
					$pbAnimate.addClass('animated zoomIn');
					$pbAnimate.css('animation-delay', '.7s');

				}
				if (nextIndex == 3) {
					$('#section3').addClass('animated zoomIn');
					$('#section3').css('animation-delay', '.2s');
					$('#section3').css('animation-duration', '.6s');
					$('.s3-anim').addClass('animated fadeInLeft');
					$('.s3-anim').css('animation-delay', '.7s');
					$('.fotorama-content').addClass('animated fadeInRight');
					$('.fotorama-content').css('animation-delay', '.9s');
				
				}

				if(nextIndex == 4){
					$('#section4').addClass('animated zoomIn');
					$('#section4').css('animation-delay', '.2s');
					$('#section4').css('animation-duration', '.6s');
					$('.pb-free-time').addClass('animated bounceInDown');
					$('.pb-free-time').css('animation-delay', '.7s');
					$('.s4-anim').addClass('animated bounceInUp');
					$('.s4-anim').css('animation-delay', '.9s');
				}

				if (nextIndex == 5) {
					$('#section5').addClass('animated zoomIn');
					
					$('#section3').css('animation-duration', '.6s');
					$('#map').addClass('animated rollIn');
					$('#map').css('animation-delay', '.5s');
					$('.pb-contacts-info').addClass('animated flipInX');
					$('.pb-contacts-info').css('animation-delay', '.9s');
				}
				if(nextIndex != 1){
					$('video').fadeOut();
				}
				else{
					$('video').fadeIn();
				}
			},
			onSlideLeave :  function ( anchorLink , index , slideIndex , direction , nextSlideIndex ) {
				if(nextSlideIndex == 1){
					$('#pb-slide-two').addClass('animated flipInY');
					$('#pb-slide-two').css('animation-delay', '.4s');
				}
				if (nextSlideIndex == 2) {
					$('#pb-slide-three').addClass('animated zoomInUp');
					$('#pb-slide-three').css('animation-delay', '.3s');
				}
			},
			afterLoad :  function ( anchorLink , index ) {
				$('.section').removeClass('zoomIn');
				
				
				
			},
		});

	$(document).ready(function(){
		$('.fp-prev').append('<i class="fa fa-chevron-left" aria-hidden="true"></i>');
		$('.fp-next').append('<i class="fa fa-chevron-right" aria-hidden="true"></i>');
	});


	});

	

});


$(window).on('load', function(){
	$('.pb-preload').delay(1000).fadeOut('slow');
})

