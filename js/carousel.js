// Carousel
// Template from https://www.w3schools.com/howto/howto_js_slideshow.asp
var imageIndex = 1;
showImages(imageIndex);
var timer = setInterval(function () {
    changeImage(1);
}, 5000);
function changeImage(n) {
    showImages(imageIndex += n);
}
function currentImage(n) {
    showImages(imageIndex = n);
}
function showImages(n) {
    var i;
    var images = document.getElementsByClassName("carousel-item");
    var dots = document.getElementsByClassName("dot");
    if (n > images.length) {
        imageIndex = 1;
    }    
    if (n < 1) {
        imageIndex = images.length;
    }
    for (i = 0; i < images.length; i++) {
        images[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    images[imageIndex - 1].style.display = "block";  
    dots[imageIndex - 1].className += " active";
}