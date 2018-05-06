$(document).ready(function(){
    $('.sidenav').sidenav();
		//$('.scrollspy').scrollSpy();
		$('.parallax').parallax();

});

var h = $('nav')[0].scrollHeight;

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.scrollspy');
    var instances = M.ScrollSpy.init(elems, {'scrollOffset':h});
});
