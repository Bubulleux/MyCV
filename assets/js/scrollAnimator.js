function checkReveal() {
    var elements = document.querySelectorAll(".animated-on-scroll");
    var windowHeight = window.innerHeight;

    for (var i = 0; i < elements.length; i++) {
        let element = elements[i];
        if (element.getBoundingClientRect().top < windowHeight && 
            !element.classList.contains("animated")) {
            element.classList.add("animated");
            setTimeout(() => {
                element.classList.add("animate");
            }, Math.floor(Math.random() * 200 + 200));
        }
    }
}

window.addEventListener("scroll", checkReveal);

checkReveal();
