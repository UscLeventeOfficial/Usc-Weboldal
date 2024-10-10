window.addEventListener("scroll", function() {
    const visszaTetejere = document.querySelector(".vissza-a-tetejere");
    if (window.pageYOffset > 300) { 
        visszaTetejere.classList.add("show");
    } else {
        visszaTetejere.classList.remove("show");
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const gombEltuntetes = document.getElementById("eltuntet");
    const video = document.getElementById("Video");
    const gomb = document.getElementById("eltuntet")

    gombEltuntetes.addEventListener("click", function() {
        video.style.display = "none"; 
        gomb.style.display = "none";
    });
});

window.addEventListener('scroll', function() 
{
    var footer = document.getElementById('footer');
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) 
        {
            footer.style.display = 'block'; 
        } else 
        {
            footer.style.display = 'none'; 
        }
});
