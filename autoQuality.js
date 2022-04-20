function setValue(value) {
    chrome.storage.local.set({ 'api_key': value });
}

chrome.storage.local.get(['autoQuality'], function (result) {
    chrome.storage.local.get(['api_key'], function (keyResult) {
        chrome.storage.local.get(['quality'], function (qualityResult) {
            window.addEventListener('DOMContentLoaded', function () {
                if (result.autoQuality === true) {
                    var qual = "";
                    switch (qualityResult.quality) {
                        case "tiny":
                            qual = "144p";
                            break;
                        case "small":
                            qual = "240p";
                            break;
                        case "medium":
                            qual = "360p";
                            break;
                        case "large":
                            qual = "480p";
                            break;
                        case "hd720":
                            qual = "720p";
                            break;
                        case "hd1080":
                            qual = "1080p";
                            break;
                        case "hd1440":
                            qual = "1440p";
                            break;
                        case "hd2160":
                            qual = "2160p";
                            break;
                        case "hd2880":
                            qual = "2880p";
                            break;
                        case "highres":
                            qual = "4320p";
                            break;
                        default:
                            qual = "1080p";
                            break;
                    }
                }
            });
        });
    });
});