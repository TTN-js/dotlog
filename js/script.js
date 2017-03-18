  // jQuery check
console.log($);


$(document).ready(function(){
	//bootstarp check
	var bootstrap3_enabled = (typeof $().emulateTransitionEnd == 'function');
	console.log(bootstrap3_enabled);

	// tabs
	$('ul.tabs li').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('ul.tabs li').removeClass('current');
		$('.tab-content').removeClass('current');

		$(this).addClass('current');
		$('#'+tab_id).addClass('current');
	});

	//archive
	var allPanels = $('.accordion > .inner').hide();

	$('.accordion > a').click(function() {
		$(this).slideDown(500);
	  	$(this).toggleClass('selected');
	  	$(this).next().slideToggle(function(){
	  	});
	  	return false;
	});

	function toggleNav(){
		$('#drop-nav').slideToggle('slow');

		// alert($('#logo').attr('src'));

		if($('#logo').attr('src') == 'images/nav_logo.png'){
			$(this).attr('src', 'images/nav_open_logo.png');
		} else {
			$(this).attr('src', 'images/nav_logo.png');
		}

	}

	$('#logo').on('click', toggleNav);
	// $(window).on('click', function(){
	// 	if($('#drop-nav').css('display') == 'block'){
	// 		toggleNav();
	// 	}
	// });

})


