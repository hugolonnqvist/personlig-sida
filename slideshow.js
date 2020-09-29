let index = 1;

slideShow(index);

function nextSlide(n) {
    slideShow(index += n);
}

function slideShow(n) {
    let slides = document.getElementsByClassName("slides");
    let i;

    if (n > slides.length) {
        index = 1;
    }
    if (n < 1) {
        index = slides.length;
    }

    for (i = 0; i < 3; i++) {
        slides[i].style.display = "none";
    }
    index++;
    if (index > slides.length) {
        index = 1;
    }
    slides[index - 1].style.display = "block";

}