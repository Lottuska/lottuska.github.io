var menu = document.querySelector(".navigation");
function openMenu() {
    setTimeout(function() {
        menu.style.display = "block";
    }, 300);
}
function closeMenu() {
    setTimeout(function() {
        menu.style.display = "none";
    }, 300);
}