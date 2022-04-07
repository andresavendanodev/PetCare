/* --- Preloader --- */
window.addEventListener("load", () => {
    document.querySelector(".js-preloader").classList.add("fade-out");
    setTimeout(() => {
        document.querySelector(".js-preloader").style.display = "none";
    }, 600);
});

/* --- Nav --- */
const navToggler = document.querySelector(".js-nav-toggler"); //Menu Button
const nav = document.querySelector(".js-nav"); //List Menu

function navToggle() {
    nav.classList.toggle("active");
    navToggler.classList.toggle("active");
}

navToggler.addEventListener("click", navToggle);

// Hide the Nav by clicking outside of it
document.addEventListener("click", (event) => {
    const isClickInsideNav = nav.contains(event.target);
    const isClickInsideNavToggler = navToggler.contains(event.target);
    if (!(isClickInsideNav || isClickInsideNavToggler) && nav.classList.contains("active")) {
        navToggle();
    }
});


/* --- Theme light dark --- */
function themeLightDark () {
    const switherBtn = document.querySelector(".js-switcher-btn");
    const icon = switherBtn.querySelector("i");

    function changeIcon() {
        if(document.body.classList.contains("dark")) {
            icon.classList.remove("fa-moon");
            icon.classList.add("fa-sun");
        }
        else {
            icon.classList.remove("fa-sun");
            icon.classList.add("fa-moon");
        }
    }

    switherBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark");
        changeIcon();
        if (document.body.classList.contains("dark")) {
            localStorage.setItem("theme", "dark");
        }
        else {
            localStorage.setItem("theme", "light");
        }
    });

    /* Check for saved user preference, if any, on load of the website */
    if(localStorage.getItem("theme") !== null) {
        if(localStorage.getItem("theme") === "light") {
            document.body.classList.remove("dark");
        }
        else {
            document.body.classList.add("dark");
        }
    }
    
    changeIcon();
}
themeLightDark();