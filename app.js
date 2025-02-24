document.addEventListener("click", function (event) {
    let navbar = document.querySelector(".navbar-collapse");
    let toggleButton = document.querySelector(".navbar-toggler");


    if (!navbar.contains(event.target) && !toggleButton.contains(event.target)) {
        navbar.classList.remove("show");  
    }
});
