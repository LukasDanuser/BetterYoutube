document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('#translateTitle').addEventListener('click', titleTranslation, false)
    function titleTranslation() {
        var value = document.querySelector('#translateTitle').checked;
        chrome.storage.sync.set({ 'titleTranslation': value });

    }
}, false)
document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('#autoQuality').addEventListener('click', autoQuality, false)
    function autoQuality() {
        var value = document.querySelector('#autoQuality').checked;
        chrome.storage.sync.set({ 'autoQuality': value });
    }
}, false)
