function checkReveal() {
    var elements = document.querySelectorAll(".animated-on-scroll");
    var windowHeight = window.innerHeight;

    for (var i = 0; i < elements.length; i++) {
        var element = elements[i];
        if (element.getBoundingClientRect().top < windowHeight - 150) {
            element.classList.add("animate");
        }
    }
}

window.addEventListener("scroll", checkReveal);

checkReveal();
