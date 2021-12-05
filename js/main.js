$(document).ready(function(){

  // Toggle additional info on franchise

  $('.franchise-more-info').hide();

  $('#show-more').click(function(){
    $('.franchise-more-info').slideDown();
    $('#show-less').show();
    $(this).hide();
  });

  $('#show-less').click(function(){
    $('.franchise-more-info').slideUp();
    $('#show-more').show();
    $(this).hide();
  });

  // slider
  const caseActiveSlide = $('.active-slide').attr('data-slide');

  $('.line-arrow.right').click(function() {
    const slideNext = parseInt($('.active-slide').attr('data-slide'))+1;
    $('.slide').removeClass('active-slide');
    $('.slide[data-slide="'+slideNext+'"]').addClass('active-slide');
  });

  $('.line-arrow.left').click(function() {
    const slidePrev = parseInt($('.active-slide').attr('data-slide'))-1;
    $('.slide').removeClass('active-slide');
    $('.slide[data-slide="'+slidePrev+'"]').addClass('active-slide');
  });

});


// Photo black-white fade to color effect


function scrollInteractions() {
	var $photoImg = $('.lede'); //pointer to lede img divs
	var $windowHeight = $(window).height(); //getting the height of the window
	var $windowBottom = 0; //setting a variable for the bottom of the window


	$(window).scroll(function() {
		var windowTop = $(window).scrollTop();
		$windowBottom = $(window).scrollTop() + $windowHeight;
		var windowWidth = $(window).width();
		// each time a photo div scrolls above 100 pixels below the bottom of the window, fade it in



			$.each($photoImg,function(key, value) {
				var verticalPos = $(this).offset().top;
				if (windowWidth > 700) {
					if ($windowBottom - 520 > verticalPos) {
            $("#lede-bw").stop().fadeOut(150);
            $("#lede-color").stop().fadeIn(150);
						//$(this).addClass('show-photo-img');
					}
				}
				else {
					if ($windowBottom - 100 > verticalPos) {
            $("#lede-color").stop().fadeOut(150);
            $("#lede-bw").stop().fadeIn(150);
						//$(this).addClass('show-photo-img');
					}
				}
			});
	});
}

scrollInteractions();
