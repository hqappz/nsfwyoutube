// 1

console.log("nsfwyoutube by hqappz is loaded :D");

//5

function addbutton() {
    document.querySelector("#container > h1 > yt-formatted-string").innerHTML += '<span id="nsfwbutton" style="color: #e21; border: 1pt solid #e21; border-radius: 1.5pt; padding: 2px 4px; font-weight: 500; line-height: 1.2rem; position: absolute; margin-top: 2px; margin-left: 5px;">NSFW</span>';
}

// 5

function correctingPlayer() {
    document.querySelector('#player-container').setAttribute("style", "visibility:visible;");
    document.getElementById("error-screen").remove();
}

// 4

function bypass() {
    correctingPlayer();
    var url = new URL(window.location.href);
    var vidid = url.searchParams.get("v");
    var elementaryelement = '#player-container';
    document.querySelector(elementaryelement).innerHTML = '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/' + vidid + '" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
    console.log("nsfwyoutube has bypassed youtube age restrictions\nPlease give some donate if my extension was helpful, thanks ;)");
}

// 3

function hentaichecker() {
    setTimeout(
        function () {
            if (document.querySelectorAll('#always-shown > ytd-metadata-row-renderer > div > yt-formatted-string > a[href="http://www.youtube.com/t/community_guidelines"]').length > 0) {
                /*console.log(document.querySelectorAll('ytd-metadata-row-renderer > div > yt-formatted-string > a[href="http://www.youtube.com/t/community_guidelines"]').length >= 1);*/
                console.log('video is age restricted');
                bypass();
                addbutton();
            }
        }, 1000);
}


// 2

hentaichecker();