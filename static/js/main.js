const navLink = document.querySelectorAll(".nav-link")
const navbarTogglerBtn = document.querySelector(".navbar-collapse.collapse")

navLink.forEach(function(a){
    a.addEventListener('click',function(){
        navbarTogglerBtn.classList.remove('show');
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const navbarToggler = document.querySelector(".navbar-toggler");
    const navbarCollapse = document.querySelector("#navbarNav");

    // Close navbar when clicking anywhere outside
    document.addEventListener("click", function (event) {
        console.log(event.target)
        const isClickInsideNavbar = navbarCollapse.contains(event.target) || navbarToggler.contains(event.target);
        const isNavbarExpanded = navbarCollapse.classList.contains("show");

        if (!isClickInsideNavbar && isNavbarExpanded) {
            navbarCollapse.classList.remove("show");
        }
    });
});

$(document).ready(function () {
    $(".clients_interest").owlCarousel({
        loop: true,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 2000,
        responsiveClass: true,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 3
            },
            1000: {
                items: 6
            }
        }
    });
});
