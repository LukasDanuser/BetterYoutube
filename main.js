chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.type == "update_quality")
        window.localStorage['ytaq_quality'] = request.quality;
    alert(request.type)
    return true;
});
chrome.storage.local.get(['titleTranslation'], function (result) {
    if (result.titleTranslation == "true") {

    }
});
