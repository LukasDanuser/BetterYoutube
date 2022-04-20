chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.type === "update_quality") {


    } else if (request.type === "anti_translate") {
    } else if (request.type === "auto_quality") {
    } else if (request.type === "hide_shorts") {
    }
    return true;
});

/**chrome.storage.local.clear(function () {
    var error = chrome.runtime.lastError;
    if (error) {
        console.error(error);
    }
    // do something more
});
chrome.storage.sync.clear(); // callback is optional */