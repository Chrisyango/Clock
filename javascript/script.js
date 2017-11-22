$(document).ready(function() {
	setInterval(function setDate() {
		var now = new Date();

		var secondsDegree = now.getSeconds() * (360/60) - 90;
		$('.second').css({'transform' : 'rotate(' + secondsDegree + 'deg)'});

		var minutesDegree = now.getMinutes() * (360/60) - 90;
		$('.minute').css({'transform' : 'rotate(' + minutesDegree + 'deg)'});

		var hoursDegree = now.getHours() * (360/12) - 90;
		$('.hour').css({'transform' : 'rotate(' + hoursDegree + 'deg)'});
	}, 1000); 
});