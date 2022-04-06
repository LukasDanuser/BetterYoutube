chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.local.set({ 'titleTranslation': false });
    chrome.storage.local.set({ 'autoQuality': false });
    chrome.storage.local.set({ 'quality': "hd1080" });
    chrome.storage.local.set({ 'hideShorts': false });

});