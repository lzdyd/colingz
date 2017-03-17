$(document).ready(function() {

	$('.topnav').click(function() {
		$(this).toggleClass('active');
	});



	function slideData(slideTitle) {
		this.slideTitle = slideTitle;
	}
	$('#2006').data = {
		test: 'Test'
	};
	$('.slider-nav-year').click(function() {
		var text = $(this.test);
		alert(text);
		$('.slide-title').html($(this.data.title));
	});
});
