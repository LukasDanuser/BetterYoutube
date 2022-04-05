chrome.storage.sync.get(['titleTranslation'], function (result) {
    document.getElementById("translateTitle").checked = result.titleTranslation;
});

chrome.storage.sync.get(['autoQuality'], function (result) {
    document.getElementById("autoQuality").checked = result.autoQuality;
});