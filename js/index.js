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
// let main_sectionHT = document.getElementsByTagName('section');
// let main_sections = Array.from(main_sectionHT);

// for (i = 1; i < nav_links.length; i++) {
//     if (!nav_links[i].classList.contains('current')) {
//         nav_links[0].classList.add('current');
//         console.log('brick does not contain ');
//     }
//     else {
//         nav_links[0].classList.remove('current');
//     }
// }
// nav_links[0].classList.add('current');
// if (nav_links[0].classList.contains('current')) {
//     introduction.style.display = "block";
// }
// else {
//     introduction.style.display = 'none';
// }

// ---------------------     ---------------------------------------
// function current(e) {
//     e.target.classList.add('current');
//     console.log(e.target);
// }

// sideBar.addEventListener('click', current);
nav_links.forEach(nav_link => {
    nav_link.addEventListener('click', function () {
        // window.addEventListener('hashchange', e => {
        //     if (window.location.href.split('#')[1] === nav_link.innerHTML) {
        //         nav_link.classList.add('current');
        //         console.log('this done');
        //     } else {
        //         nav_link.classList.remove('current');
        //     }
        // });

        // if (nav_link.innerHTML == 'Introduction') {
        //     introduction.style.display = "block";
        // }
        // else {
        //     introduction.style.display = "none";
        // }
        // nav_links.forEach(nav_link => nav_link.classList.remove('current'));
        // nav_link.classList.add('current');
        console.log(nav_link.innerHTML);
        window.addEventListener('hashchange', e => { console.log(window.location.href.split('#')[1]) });
        // console.log(hash());
    })
})