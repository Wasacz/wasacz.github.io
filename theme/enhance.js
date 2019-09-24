/* http://www.quirksmode.org/blog/archives/2005/10/_and_the_winner_1.html */

function addEvent(obj, type, fn) {
	if (obj.addEventListener) {
		obj.addEventListener(type, fn, false);
	}
	else if (obj.attachEvent) {
		obj["e"+type+fn] = fn;
		obj[type+fn] = function() { obj["e"+type+fn](window.event); }
		obj.attachEvent("on"+type, obj[type+fn]);
	}
}

/*
	Wasacz, home
	http://wasacz.net/
	code by Wasacz
*/

function $(id) {
	return (typeof id === 'string') ? document.getElementById(id) : null;
}

addEvent(window, 'load', function() {
	var list = $('menu').getElementsByTagName('ul')[0].getElementsByTagName('a');
	if (list) {
		var item, hint = $('menu').getElementsByTagName('p')[0].firstChild;
		if (hint && hint.nodeType === 3) {
			var hello = hint.nodeValue;
		}
		if (hello) {
			for (var i = 0; i < list.length; i++) {
				item = list[i];
				addEvent(item, 'mouseover', function() {
					hint.nodeValue = this.getAttribute('title');
				});
				addEvent(item, 'mouseout', function() {
					hint.nodeValue = hello;
				});
			}
		}
	}
});
