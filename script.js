window.addEventListener("scroll", function() {
    const backToTopButton = document.querySelector(".back-to-top");
    if (window.pageYOffset > 300) { // 300px görgetés után jelenik meg
        backToTopButton.classList.add("show");
    } else {
        backToTopButton.classList.remove("show");
    }
});
