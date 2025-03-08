// JavaScript Document
document.addEventListener("DOMContentLoaded", function () {
    // Grab all top-level dropdown links
    let dropdownLinks = document.querySelectorAll(".dropdown > a");
    // If you have a hamburger icon, reference it here (optional)
    let hamburger = document.querySelector(".hamburger"); 
    let navMenu = document.querySelector("#nav"); 

    dropdownLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();  // Prevent link navigation

            let parent = this.parentElement;    // The .dropdown <li>
            let isActive = parent.classList.contains("active");

            // Close all dropdowns first
            document.querySelectorAll(".dropdown").forEach(drop => {
                drop.classList.remove("active");
            });

            // Toggle only the clicked one
            if (!isActive) {
                parent.classList.add("active");
            }

            // Stop the click from bubbling up (so it won't close right away)
            event.stopPropagation();
        });
    });

    // Close all dropdowns if click outside
    document.addEventListener("click", function (event) {
        // If user clicks outside any .dropdown
        if (!event.target.closest(".dropdown") && !event.target.closest(".hamburger")) {
            document.querySelectorAll(".dropdown").forEach(drop => {
                drop.classList.remove("active");
            });
        }
    });

    // OPTIONAL: If you have a hamburger or mobile nav toggle
    if (hamburger) {
        hamburger.addEventListener("click", function (event) {
            event.stopPropagation();
            // Show/hide main menu
            navMenu.classList.toggle("active");
        });
    }
});
