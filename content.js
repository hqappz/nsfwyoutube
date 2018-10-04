// 1

console.log("nsfwyoutube by hqappz is loaded :D");


// 4

function bypass() {
    var url = new URL(window.location.href);
    var vidid = url.searchParams.get("v");
    document.querySelector("#player-container").innerHTML = '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/' + vidid + '" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
    console.log("vidId = " + vidid);
    console.log("nsfwyoutube has bypassed youtube age restrictions\nPlease give some donate if my extension was helpful, thanks ;)");
}

// 3

function hentaichecker() {
    setTimeout(
        function () {
            if (document.querySelectorAll('#always-shown > ytd-metadata-row-renderer > div > yt-formatted-string > a[href="http://www.youtube.com/t/community_guidelines"]').length > 0) {
                console.log(document.querySelectorAll('ytd-metadata-row-renderer > div > yt-formatted-string > a[href="http://www.youtube.com/t/community_guidelines"]').length >= 1);
                console.log('video is age restricted');
                bypass();
            }
        }, 5000);
}


// 2

var kurentjuerel = window.location.href;
hentaichecker();
/*
setInterval(function () {
    if (kurentjuerel != window.location.href) {
        console.log("Zmienia sie? " + kurentjuerel);
        kurentjuerel = window.location.href;
        console.log("Jak tak to tak" + kurentjuerel);
        hentaichecker();
    }
}, 5000);*/