document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('#translateTitle').addEventListener('click', titleTranslation, false)
    function titleTranslation() {
        var value = document.querySelector('#translateTitle').checked;
        chrome.storage.local.set({ 'titleTranslation': value });
        chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
            chrome.tabs.sendMessage(tabs[0].id, { type: "anti_translate", value: value }, function (response) { });
        })
        //t
    }
}, false)
document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('#autoQuality').addEventListener('click', autoQuality, false)
    function autoQuality() {
        var value = document.querySelector('#autoQuality').checked;
        chrome.storage.local.set({ 'autoQuality': value });
        chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
            chrome.tabs.sendMessage(tabs[0].id, { type: "auto_quality", value: value }, function (response) { });
        })
    }
}, false)

document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('#quality').addEventListener('click', quality, false)
    function quality() {
        var select = document.querySelector('#quality');
        var quality = select.children[select.selectedIndex].value;
        chrome.storage.local.set({ 'quality': quality });
        chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
            chrome.tabs.sendMessage(tabs[0].id, { type: "update_quality", value: quality }, function (response) { });
        })
    }
}, false)

document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('#hideShorts').addEventListener('click', hideShorts, false)
    function hideShorts() {
        var value = document.querySelector('#hideShorts').checked;
        chrome.storage.local.set({ 'hideShorts': value });
        chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
            chrome.tabs.sendMessage(tabs[0].id, { type: "hide_shorts", value: value }, function (response) { });
        })
    }
}, false)
