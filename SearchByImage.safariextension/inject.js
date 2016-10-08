var constants = {
    imageNodeName: "IMG"
};

var events = {
    contextMenu: "contextmenu"
};

var onContextMenuClicked = function (event) {
    if (event.target.nodeName === constants.imageNodeName) {
        safari.self.tab.setContextMenuEventUserInfo(event, event.target.src);
    }
};

document.addEventListener(events.contextMenu, onContextMenuClicked, false);