/**
 * Boot the app.
 * @param {object:dom} el - <figure> element passed by boot.js. 
 */
function boot(el) {
	var html = require('./templates/populated.html');
	el.innerHTML = html;
}




// AMD define for boot.js
define(function() { return { boot: boot }; });
