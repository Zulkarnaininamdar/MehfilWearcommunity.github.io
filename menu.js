function toggleNav() {
    var nav = document.getElementsByClassName("navbar")[0];
    if (nav.className === "navbar") {
        nav.className += " responsive";
    } else {
        nav.className = "navbar";
    }
}
