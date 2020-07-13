$(function () {

window.onscroll = function () {
	if(document.documentElement.scrollTop > 350) {
		$('.back-top').fadeIn();
	}else {
		$('.back-top').fadeOut();
	}
}

$('.back-top').click(function(){
	document.documentElement.scrollTop = 0;
});

});
