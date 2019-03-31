(function () {
	var pWin = parent ? parent.window : window;
	var pDoc = pWin.document;

	var fwIframes = pDoc.getElementsByClassName('fw-iframe');
	for (var i=0; i < fwIframes.length; i++) {
		var attr = fwIframes[i].getAttribute("data-fw-params");
		if (attr) {
			fwIframes[i].src = ('https:' == pDoc.location.protocol ? 'https:' : 'http:') + '//feed.mikle.com/widget/v2/85440' + attr;
			fwIframes[i].removeAttribute("data-fw-params");
		}
	}
}());
