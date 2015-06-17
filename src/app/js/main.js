/**
 * Boot the app.
 * @param {object:dom} el - <figure> element passed by boot.js. 
 */
function boot(el) {
	var html = require('./templates/index.html');
	el.innerHTML = html;

	var  p = el.querySelector('p');
	p.addEventListener('click', function() {
		console.log('clicked');
	}, false);

	console.log(p);
}

// AMD define for boot.js
define(function() { return { boot: boot }; });
