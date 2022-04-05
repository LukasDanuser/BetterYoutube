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


document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('#hideShorts').addEventListener('click', hideShorts, false)
    function hideShorts() {
        var value = document.querySelector('#hideShorts').checked;
        chrome.storage.sync.set({ 'hideShorts': value });
    }
}, false)