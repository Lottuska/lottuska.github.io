// Open illustrations as modals
// Template from https://www.w3schools.com/howto/howto_css_modals.asp
var modal = document.querySelector(".modal");
var image = document.querySelector(".modal-illustration");
Array.from(document.querySelectorAll(".image-cover")).forEach(item => {
    item.addEventListener("click", event => {
        modal.style.display = "block";
        image.src = event.target.src;
    });
});
document.querySelector(".close").addEventListener("click", () => {
    modal.style.display = "none";
});
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}