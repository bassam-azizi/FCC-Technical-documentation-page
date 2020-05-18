let nav_link_node = document.getElementsByClassName('nav-link');
let nav_links = Array.from(nav_link_node);

nav_links.forEach(nav_link => {
    nav_link.addEventListener('click', function () {
        nav_links.forEach(nav_link => nav_link.classList.remove('current'));
        nav_link.classList.add('current');
    })
})