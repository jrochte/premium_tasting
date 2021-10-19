var saved_link;
var saved_speaking_vol;
var saved_tasting_vol;
var saved_default_mins;
var player;
//var darkMode;

function site_onLoad() {
    document.querySelector(".toggle").addEventListener("click",tog_active);

    saved_link = localStorage.getItem("saved_link");
    saved_speaking_vol = localStorage.getItem("saved_speaking_vol");
    saved_tasting_vol = localStorage.getItem("saved_tasting_vol");
    saved_default_mins = localStorage.getItem("saved_default_mins");

    document.querySelector(".new_link_input").value = saved_link;
    document.querySelector(".vol1").value = saved_speaking_vol;
    document.querySelector(".vol2").value = saved_tasting_vol;
    document.querySelector(".default_mins").value = saved_default_mins;

    new Timer(document.querySelector(".timer"),saved_default_mins);
}

function tog_active() {
    document.querySelector(".nav").classList.toggle("active");

    if (document.getElementById('expand-arrow').innerHTML == "expand_more") {
        document.getElementById('expand-arrow').innerHTML = "expand_less";
    } else {
        document.getElementById('expand-arrow').innerHTML = "expand_more"
    }
}

function refresh_Link() {
    if (document.querySelector(".new_link_input").value.length != 0) {
        localStorage.setItem("saved_link", document.querySelector(".new_link_input").value);
        saved_link = localStorage.getItem("saved_link");
        player.loadVideoById(saved_link);
    }

    if (document.querySelector(".vol1").value.length != 0) {
        localStorage.setItem("saved_speaking_vol", document.querySelector(".vol1").value);
        saved_speaking_vol = localStorage.getItem("saved_speaking_vol");
    }

    if (document.querySelector(".vol2").value.length != 0) {
        localStorage.setItem("saved_tasting_vol", document.querySelector(".vol2").value);
        saved_tasting_vol = localStorage.getItem("saved_tasting_vol");
    }

    if (document.querySelector(".default_mins").value.length != 0) {
        localStorage.setItem("saved_default_mins", document.querySelector(".default_mins").value);
        saved_default_mins = localStorage.getItem("saved_default_mins");
    }

    tog_active();
}

function onYouTubeIframeAPIReady() {
    saved_link = localStorage.getItem("saved_link");
    saved_speaking_vol = localStorage.getItem("saved_speaking_vol");
    saved_tasting_vol = localStorage.getItem("saved_tasting_vol");

    player = new YT.Player('yt_player', {
        videoId: saved_link,   // The video id.
        // width: 560,
        // height: 316,
        playerVars: {
            'autoplay': 1,		// Autoplay when page loads.
            'controls': 1,
            // 'showinfo': 0,
            'modestbranding': 0,
            // 'loop': 1,
            'fs': 0,
            'cc_load_policty': 0,
            'iv_load_policy': 3
        },
        events: {
            'onReady': function (e) {
            //   e.target.mute();
              e.target.setVolume(saved_speaking_vol); // For max value, set value as 100.
              e.target.loadVideoById(saved_link);
            }
        }
    });
}