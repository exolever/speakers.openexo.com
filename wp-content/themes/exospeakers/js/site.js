jQuery(document).ready(function($) {
	
// 	  AOS.init();
	  
	$('.slider').bxSlider({
		mode: 'horizontal',
		infiniteLoop: 'true',
		auto: 'true',
		pause: '6000',
		
		
	});
	
	$('#bio-read-more').on('click', function(e) {
		e.preventDefault();
		$(this).hide();
		$('.bio-more').slideDown();
	});
	
	$('#bio-read-less').on('click', function(e) {
		e.preventDefault();
		$('.bio-more').slideUp();
		$('#bio-read-more').show();
	});
	
	

// Get the header
var header = document.getElementById("hero-nav");

// Get the offset position of the navbar
var sticky = header.offsetTop;

$(window).scroll(function(){
    if ($(window).scrollTop() > 40) {
        $('#hero-nav').addClass('sticky');
        $('#content').addClass('content-stickynav');
        $('#overlay').addClass('overlay-sticky');
    }
    else {
        $('#hero-nav').removeClass('sticky');
        $('#content').removeClass('content-stickynav');
        $('#overlay').removeClass('overlay-sticky');
    }
});

$('#toggle').click(function() {
    $(this).toggleClass('toggle-active');
    $('#overlay').toggleClass('nav-active');
    $('.toggle-wrapper').toggleClass('toggle-active');
    $('.site-logo').toggleClass('logo-active');
});

	

});

// Allow :active and :hover styles to work for touch
document.addEventListener("touchstart", function(){}, true);