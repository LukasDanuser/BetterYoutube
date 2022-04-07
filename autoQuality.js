function setValue(value) {
    chrome.storage.local.set({ 'api_key': value });
}

chrome.storage.local.get(['autoQuality'], function(result) {
    chrome.storage.local.get(['api_key'], function(keyResult) {
        chrome.storage.local.get(['quality'], function(qualityResult) {
            window.addEventListener('DOMContentLoaded', function() {
                const ytPlayerData = JSON.parse(window.localStorage.getItem('yt-player-quality'));
                const ytPlayerQuality = JSON.parse(ytPlayerData['data']);
                if (result.autoQuality === true) {
                    var qual = "";
                    switch (qualityResult.quality) {
                        case "tiny":
                            qual = "144";
                            break;
                        case "small":
                            qual = "240";
                            break;
                        case "medium":
                            qual = "360";
                            break;
                        case "large":
                            qual = "480";
                            break;
                        case "hd720":
                            qual = "720";
                            break;
                        case "hd1080":
                            qual = "1080";
                            break;
                        case "hd1440":
                            qual = "1440";
                            break;
                        case "hd2160":
                            qual = "2160";
                            break;
                        case "hd2880":
                            qual = "2880";
                            break;
                        case "highres":
                            qual = "4320";
                            break;
                        default:
                            qual = "1080";
                            break;
                    }
                    ytPlayerQuality['quality'] = qual;
                    ytPlayerData['data'] = JSON.stringify(ytPlayerQuality);
                    alert(JSON.stringify(ytPlayerData));
                    window.localStorage.setItem('yt-player-quality', JSON.stringify(ytPlayerData));
                }
            });
        });
    });
});