// JavaScript Document
document.addEventListener("DOMContentLoaded", function () {
    let dropdowns = document.querySelectorAll(".dropdown > a");
    let navMenu = document.querySelector("#nav"); // If you have a hamburger or main nav
    let hamburger = document.querySelector(".hamburger"); // If you have a hamburger button

    dropdowns.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault(); 
            event.stopPropagation(); // Stop bubbling up

            // Find the dropdown menu <ul>
            let menu = this.nextElementSibling;
            if (!menu) return; // Safety check

            // Is the clicked dropdown menu already open?
            let isOpen = (menu.style.display === "block");

            // Close *other* open dropdowns, leave this one alone
            document.querySelectorAll(".dropdown-menu").forEach(otherMenu => {
                if (otherMenu !== menu) {
                    otherMenu.style.display = "none";
                }
            });

            // Toggle only this menu
            menu.style.display = isOpen ? "none" : "block";
        });
    });

    // Prevent clicks inside an open dropdown from closing it
    document.querySelectorAll(".dropdown-menu").forEach(menu => {
        menu.addEventListener("click", function (event) {
            event.stopPropagation();
        });
    });

    // Close dropdowns if clicking outside
    document.addEventListener("click", function (event) {
        if (!event.target.closest(".dropdown") && !event.target.closest(".hamburger")) {
            document.querySelectorAll(".dropdown-menu").forEach(m => m.style.display = "none");
        }
    });

    // Hamburger toggle (if you have one)
    if (hamburger) {
        hamburger.addEventListener("click", function (event) {
            event.stopPropagation();
            navMenu.classList.toggle("active"); 
        });
    }
});

