/* Use this script if you need to support IE 7 and IE 6. */

window.onload = function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'icomoon\'">' + entity + '</span>' + html;
	}
	var icons = {
			'icon-IE' : '&#xe003;',
			'icon-firefox' : '&#xe004;',
			'icon-opera' : '&#xe005;',
			'icon-safari' : '&#xe006;',
			'icon-css3' : '&#xe007;',
			'icon-html5' : '&#xe008;',
			'icon-code' : '&#xe00c;',
			'icon-chrome' : '&#xe00d;',
			'icon-x' : '&#xe00e;',
			'icon-mail' : '&#xe00f;',
			'icon-graduation' : '&#xe010;',
			'icon-google-plus' : '&#xe000;',
			'icon-plane' : '&#xf072;',
			'icon-pencil' : '&#xe001;',
			'icon-switch' : '&#xe002;',
			'icon-plus' : '&#xe009;',
			'icon-minus' : '&#xe00a;',
			'icon-android' : '&#xe00b;',
			'icon-wordpress' : '&#xe011;',
			'icon-google-drive' : '&#xe012;',
			'icon-dribbble' : '&#xe013;',
			'icon-html5-2' : '&#xe014;',
			'icon-code-2' : '&#xe015;',
			'icon-lightbulb' : '&#xf0eb;',
			'icon-linkedin' : '&#xe016;',
			'icon-github' : '&#xe017;',
			'icon-facebook' : '&#xe018;',
			'icon-twitter' : '&#xe019;',
			'icon-mobile' : '&#xe01a;',
			'icon-monitor' : '&#xe01b;',
			'icon-dribbble-2' : '&#xe01c;',
			'icon-googleplus' : '&#xe01d;',
			'icon-reorder' : '&#xf0c9;',
			'icon-mail-2' : '&#xe022;',
			'icon-screen' : '&#xe023;',
			'icon-laptop' : '&#xe024;',
			'icon-mobile-2' : '&#xe025;',
			'icon-mobile-3' : '&#xe026;',
			'icon-tablet' : '&#xe027;',
			'icon-tv' : '&#xe028;',
			'icon-print' : '&#xe029;'
		},
		els = document.getElementsByTagName('*'),
		i, attr, html, c, el;
	for (i = 0; i < els.length; i += 1) {
		el = els[i];
		attr = el.getAttribute('data-icon');
		if (attr) {
			addIcon(el, attr);
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
};