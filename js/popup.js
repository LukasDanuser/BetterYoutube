document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('#translateTitle').addEventListener('click', titleTranslation, false)
    function titleTranslation() {
        var value = document.querySelector('#translateTitle').checked;
        chrome.storage.sync.set({ 'titleTranslation': value });

    }
}, false)
