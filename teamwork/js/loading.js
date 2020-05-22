$('.waters').ripples({
	
	resolution: 512,
	dropRadius: 20, //px
	perturbance: 0.04,
	
});

setInterval(function () {
	var $el = $('.waters');
	var x = Math.random() * $el.outerWidth();
	var y = Math.random() * $el.outerHeight();
	var dropRadius = 20;
	var strength = 0.08 + Math.random() * 0.08;
	$el.ripples('drop', x, y, dropRadius, strength);
}, 400);
;

$(".logo img").fadeIn(4500);

function sleep(time) {
	return new Promise((resolve) => setTimeout(resolve, time));
}


$(function () {
	//例子1
	$('.text_bar').lu_word();
});



document.onkeydown=keyDownSearch;

function keyDownSearch(e) {
	// 兼容FF和IE和Opera
	var theEvent = e || window.event;
	var code = theEvent.keyCode || theEvent.which || theEvent.charCode;
	if (code == 13) {
		window.location.href='../html/index.html'
		return false;
	}
	return true;
}