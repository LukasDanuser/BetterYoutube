chrome.storage.local.get(['titleTranslation'], function (result) {
    document.getElementById("translateTitle").checked = result.titleTranslation;
});

chrome.storage.local.get(['autoQuality'], function (result) {
    document.getElementById("autoQuality").checked = result.autoQuality;
});

chrome.storage.local.get(['hideShorts'], function (result) {
    document.getElementById("hideShorts").checked = result.hideShorts;
});

//get the quality setting
chrome.storage.local.get(['quality'], function (result) {
    var select = document.getElementById("quality");
    var quality = result.quality;
    for (var i = 0; i < select.children.length; i++) {
        var child = select.children[i];
        if (child.value == quality) {
            child.selected = true;
            break;
        }
    }
});
