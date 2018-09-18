// 1

console.log("nsfwyoutube by hqappz is loaded :D");

/*console.log("Video ID " + url.searchParams.get("v"));
console.log("Does it have ID? " + url.searchParams.has('v'));
console.log(url);
console.log("Url " + window.location.href);*/

// 4

function bypass() {
    var url = new URL(window.location.href);
    var vidid = url.searchParams.get("v");
    document.querySelector("#player.style-scope.ytd-watch").innerHTML = '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/' + vidid + '" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
    console.log("huh?");
    console.log("vidId " + vidid);
    console.log("nsfwyoutube has bypassed youtube age restrictions\nPlease give some donate if my extension was helpful, thanks ;)");
}

// 3

function hentaichecker() {
    //    if (url.searchParams.has("v")) {
    //        console.log("Has videoID");
    setTimeout(
        function () {
            if (document.querySelectorAll('#always-shown > ytd-metadata-row-renderer > div > yt-formatted-string > a[href="http://www.youtube.com/t/community_guidelines"]').length > 0) {
                console.log(document.querySelectorAll('ytd-metadata-row-renderer > div > yt-formatted-string > a[href="http://www.youtube.com/t/community_guidelines"]').length >= 1);
                console.log('video ma notkę o ograniczeniach wiekowych');
                bypass();
            }
        }, 5000);
}
/*
function hentaichecker() {
    if (url.searchParams.has("v")) {
        var jestdobrze = false;
        for (i = 0; i < 2500; i += 500) {
            console.log(i);
            setTimeout(function () {
                if (document.querySelectorAll('ytd-metadata-row-renderer > div > yt-formatted-string > a[href="http://www.youtube.com/t/community_guidelines"]').length >= 1) {
                    console.log('video ma notkę o ograniczeniach wiekowych');
                    if (jestdobrze == true) {
                        return
                    } else {
                        bypass();
                        console.log('w tym momencie powinien wykonac sie ten walony bypass');
                        jestdobrze == true;
                    }
                    return
                }
            }, i);
        }
    }
}*/

// 2

//hentaichecker();
/*
chrome.tabs.onUpdated.addListener(() => {
    hentaichecker();
})
*/

//jak nie styknie to tam setInterval
/*chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    hentaichecker();
});
*/

var kurentjuerel = window.location.href;
hentaichecker();

setInterval(function () {
    if (kurentjuerel != window.location.href) {
        console.log("Zmienia sie? " + kurentjuerel);
        kurentjuerel = window.location.href;
        console.log("Jak tak to tak" + kurentjuerel);
        hentaichecker();
    }
}, 5000);