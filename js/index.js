// -------------- Side-bar toggle function created ----------------------------
let hamburger = document.getElementById('hamburger');
let sideBar = document.getElementById('sideBar');
let close = document.getElementById('close');

function bar_show() {
    console.log('toggle');
    sideBar.style.marginLeft = '0';
    hamburger.style.cssText = 'display:none;top:0;';
    close.style.display = 'block';
}

function bar_hide() {
    sideBar.style.marginLeft = '-120px';
    close.style.display = 'none';
    hamburger.style.display = 'block'
}

hamburger.addEventListener('click', bar_show);
close.addEventListener('click', bar_hide);


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
let introduction = document.getElementById('Introduction');

nav_links.forEach(nav_link => {
    nav_link.addEventListener('click', function () {
        if (nav_link.innerHTML !== 'Introduction') { console.log(nav_link.innerHTML); introduction.style.display = "none"; }
        nav_links.forEach(nav_link => nav_link.classList.remove('current'));
        nav_link.classList.add('current');
    })
})