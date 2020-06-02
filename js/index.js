// -------------- Side-bar toggle function created || On the small screen sized || ----------------------------
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

// *******------------- NAV BAR ITEMS 'S CURRENT SELECTIONS and the highlight --------------------**********

let nav_link_node = document.getElementsByClassName('nav-link');
let nav_links = Array.from(nav_link_node);

let introduction = document.getElementById('Introduction');


// ---------------------     ---------------------------------------

// <<<<<<<<<<<<<< document when loaded, the introduction section will be the default in the display >>>>>>>>>>>>>>>>>>>>>>
function home_content() {
    if (document.location.hash === "") {
        document.location.hash = "Introduction";
    }
}

window.onloadstart = home_content();

// <<<<<<<<<<<<<<< <When document is refreshed, the highlighted link and it's section will be the sole in the display >>>>>>>>>>>
nav_links.forEach(nav_link => {
    window.addEventListener('load', e => {
        if (window.location.href.split('#')[1] === nav_link.innerHTML) {
            nav_links.forEach(navlink => navlink.classList.remove('current'));
            nav_link.classList.add('current');
        }

    })
    // <<<<<<<< When other link is clicked, it will be the only highlighted on the display >>>>>>>>>>>>>>>
    nav_link.addEventListener('click', function () {
        window.addEventListener('hashchange', e => {
            if (window.location.href.split('#')[1] === nav_link.innerHTML) {
                nav_links.forEach(navlink => navlink.classList.remove('current'));
                nav_link.classList.add('current');
            }
            // 
        })
    })
})


// <<<<<<<<<<<<< The full screen functionality  >>>>>>>>>>>>>>>>>>>>>
let iconifies_htC = document.querySelectorAll('.iconify');
let iconifies = Array.from(iconifies_htC);
// console.log(iconifies);

let title = document.getElementById('title');
let main_doc = document.getElementById('main-doc');
let mainSectionHC = document.querySelectorAll('.main-section');
let main_section = Array.from(mainSectionHC);

let fullscreen = false;
function toggle_fullscreen() {
    console.log('full screen function');
    if (!fullscreen) {
        sideBar.style.display = "none";
        title.style.display = "none";
        main_doc.style.cssText = 'width:100%; margin:1em 0 0';
        hamburger.style.display = 'none';
        fullscreen = true;
    }
    else {
        sideBar.style.display = "block";
        title.style.display = "block";
        // if (window.screen.availWidth >= '750px') { main_doc.style.cssText = 'width:70%; margin:50px 4% 0 15rem' };
        // if (window.screen.availWidth <= '750px') { hamburger.style.display = 'block' };
        fullscreen = false;
    }
}
