var saved_link;
//var darkMode;

function site_onLoad() {
    new Timer(document.querySelector(".timer"));

    saved_link = localStorage.getItem("saved_link");
    document.querySelector(".new_link_input").value = saved_link;

    if (saved_link.length != 0) {
        document.querySelector(".embed_video").src = "//www.youtube.com/embed/" + getId(saved_link);
    }

}

function refresh_Link() {
    if (document.querySelector(".new_link_input").value.length == 0) {
        return;
    } else {
        localStorage.setItem("saved_link", document.querySelector(".new_link_input").value);
        saved_link = localStorage.getItem("saved_link");;
        document.querySelector(".embed_video").src = "//www.youtube.com/embed/" + getId(saved_link);
    }
}

function getId(url) {
    var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    var match = url.match(regExp);

    if (match && match[2].length == 11) {
        return match[2];
    } else {
        return 'error';
    }
}