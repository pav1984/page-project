function toggleMenu(visible) {
    document.querySelector('.navbar-list').classList.toggle('navbar-hidden', visible)
}
document.querySelector('.hamburger-btn').addEventListener('click', function (e) {
    e.preventDefault();
    toggleMenu()
});