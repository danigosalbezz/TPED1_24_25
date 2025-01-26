function scrollSlider(id, value) {
	document.getElementById(id).scrollBy({ left: value, behavior: 'smooth' });
}

$(document).ready(function(){
	// Efecto de scroll suave
	$(".nav-link").on("click", function(event) {
		if (this.hash !== "") {
				event.preventDefault();
				var hash = this.hash;
				$('html, body').animate({
					scrollTop: $(hash).offset().top
				}, 100);
		}
	});
});
