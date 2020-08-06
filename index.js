$(document).scroll(function () {
	var scrollBottom = $(document).height() - $(window).height() - $(window).scrollTop();
	if (scrollBottom > 2700) {
		$('.navbar').removeClass("navbarrr");
	}
  else{
    $('.navbar').addClass("navbarrr");
  }

});
$(document).scroll(function () {
	var scrollBottom = $(document).height() - $(window).height() - $(window).scrollTop();
	if (scrollBottom < 1000) {
		$('.jsr').removeClass("imfar");
		$('.jsl').removeClass("imfal");

	}
  else{
		$('.jsr').addClass("imfar");
		$('.jsl').addClass("imfal");
  }

});


// floating button
  $(window).scroll(function() {
  $("#add").css("bottom", Math.max(40, 160 - ($(document).height() - $(window).scrollTop() - $(window).height())));
});
