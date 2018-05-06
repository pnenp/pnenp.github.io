$(document).ready(function(){
    $('.button-collapse').sidenav();
		$('.scrollspy').scrollSpy();
		$('.parallax').parallax();

});

$('.head-link').click(function(e) {
		e.preventDefault();
		
		var goto = $(this).attr('href');
		
		$('html, body').animate({
				scrollTop: $(goto).offset().top-40
		}, 800);		
});

function activate(page){
		$("."+page).addClass("active");
}
