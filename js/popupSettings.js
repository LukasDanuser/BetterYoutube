chrome.storage.sync.get(['titleTranslation'], function (result) {
    document.getElementById("translateTitle").checked = result.titleTranslation;
});