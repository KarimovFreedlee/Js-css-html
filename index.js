function smoothScroll(target, duration){
	var target = document.querySelector(target);
	var targetPosition = target.getBoundingClientRect().top + window.pageYOffset - 100;
	var startPosition = window.pageYOffset;
	var distance = targetPosition - startPosition;
	var startTime = null;

	function animation(currentTime){
		if(startTime === null) startTime = currentTime;
		var timeElapsed = currentTime - startTime;
		var run = ease(timeElapsed,startPosition,distance,duration);
		window.scrollTo(0,run);
		if(timeElapsed < duration) requestAnimationFrame(animation);
	}

	function ease(t, b, c, d){
		t /= d/2;
		if(t < 1) return c / 2 * t * t + b;
		t--;
		return -c /2 * (t * (t - 2) - 1) + b;
	}

	requestAnimationFrame(animation);

}

var menu = document.querySelector('.Menu');

menu.addEventListener('click',function(e){
	const target = e.target;
	
	if (target.matches('.navSecond')) smoothScroll('.second', 1000);
	else if (target.matches('.navAbout')) smoothScroll('.about', 1000);
	else if (target.matches('.navMain')) smoothScroll('.body-main', 1000);
	else if (target.matches('.navProjects')) smoothScroll('.projects', 1000);
	else if (target.matches('.navContacts')) smoothScroll('.contacts', 1000);
})
