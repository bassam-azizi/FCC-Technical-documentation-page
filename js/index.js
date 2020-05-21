// -------------- HEADER AND NAVIGATION DISPLAY NONE WHEN SCROLL DOWN ----------------------------
let initial_scroll_position = window.pageYOffset;
window.onscroll = function () {
    let currentScrollPos = window.pageYOffset;
    if (initial_scroll_position != currentScrollPos) {
        this.document.getElementById('title').style.opacity = '0';
        this.document.getElementById('hamburger').style.opacity = '0';
    } else {
        this.document.getElementById('title').style.opacity = '1';
        this.document.getElementById('hamburger').style.opacity = '1';
    }
}

// ------------- NAV BAR ITEMS 'S CURRENT SELECTIONS --------------------
let nav_link_node = document.getElementsByClassName('nav-link');
let nav_links = Array.from(nav_link_node);

nav_links.forEach(nav_link => {
    nav_link.addEventListener('click', function () {
        nav_links.forEach(nav_link => nav_link.classList.remove('current'));
        nav_link.classList.add('current');
    })
})