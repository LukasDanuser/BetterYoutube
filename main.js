chrome.storage.local.get(['titleTranslation'], function (result) {
    if (result.titleTranslation == "true") {

    }
});

chrome.runtime.onMessage.addListener(function (request) {
    if (request.type == "update_quality") {
        window.localStorage['ytaq_quality'] = request.quality;
        alert("t");
    }
});

