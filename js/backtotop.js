var topButton = document.querySelector(".back-to-top");
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
        topButton.style.display = "block";
    } else {
        topButton.style.display = "none";
    }
}
function backToTop() {
    setTimeout(function() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }, 300);
    
}