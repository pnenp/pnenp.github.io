$(document).ready(function(){
    $('.button-collapse').sidenav();
		$('.scrollspy').scrollSpy();
		$('.parallax').parallax();

});

function activate(page){
		$("."+page).addClass("active");
}
