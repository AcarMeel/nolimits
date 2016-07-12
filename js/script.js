(function(){


	var navTrigger = document.getElementsByClassName('nav-trigger')[0];
	var menu = document.getElementsByClassName('menu')[0];


	navTrigger.addEventListener('click', function(e){
		e.preventDefault();
		this.classList.toggle('is-open');
		menu.classList.toggle('is-open');
	});
})();