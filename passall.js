'use strict';
var y = document.getElementsByClassName("engpfOpt engpfOptP");
var att = document.getElementsByTagName("textarea");
var i = 0;
var z = setInterval(function() {
	if (i < y.length) {
		if (y[i].parentElement.parentElement.style.display != "none") {
			y[i].click();
			// att[i].removeAttribute("readonly");		
		}
		i = i + 1;
	}
	else {
		clearInterval(z);
	}
}, 1000);
