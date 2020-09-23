let index = 0;
slideShow();

function slideShow() {
    let slides = document.getElementsByClassName("slides");
    let i;
    for (i = 0; i < 3; i++) {
        slides[i].style.display = "none";
    }
    index++;
    if (index > slides.length) {
        index = 1;
    }
    slides[index - 1].style.display = "block";
    setTimeout(slideShow, 5000);

}