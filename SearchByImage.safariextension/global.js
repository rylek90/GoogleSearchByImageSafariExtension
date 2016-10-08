var getImageUrl = function (userInfo) {
	var encodedData = encodeURIComponent(userInfo);
	var result = constants.baseUrl + encodedData;
	return result;
};

var validateContextMenu = function (event) {
        if (event.userInfo === null) {
		event.target.disabled = true;
	}
};

var createTabAndRedirect = function (ofType, url) {
	var tab = safari.application.activeBrowserWindow.openTab(ofType);
	tab.url = url;
};

var onEventFired = function (event) {
	if (event.target.identifier === events.menuOption) {
		var searchUrl = getImageUrl(event.userInfo);
		createTabAndRedirect(constants.backgroundTab, searchUrl);
	}
};

safari.application.addEventListener(events.validate, validateContextMenu, false);
safari.application.addEventListener(events.command, onEventFired, false);
