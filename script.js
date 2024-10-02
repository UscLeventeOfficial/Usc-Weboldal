window.addEventListener("scroll", function() {
    const backToTopButton = document.querySelector(".vissza-a-tetejere");
    if (window.pageYOffset > 300) { 
        backToTopButton.classList.add("show");
    } else {
        backToTopButton.classList.remove("show");
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const hideButton = document.getElementById("eltuntet");
    const video = document.getElementById("Video");
    const gomb = document.getElementById("eltuntet")

    hideButton.addEventListener("click", function() {
        video.style.display = "none"; 
        gomb.style.display = "none"
    });
});
