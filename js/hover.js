// JavaScript Document
document.addEventListener("DOMContentLoaded", function () {
    let dropdowns = document.querySelectorAll(".dropdown > a");
    let navMenu = document.querySelector("#nav"); // Update if necessary
    let hamburger = document.querySelector(".hamburger"); // Your hamburger button

    dropdowns.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault(); // Prevent link from navigating

            let menu = this.nextElementSibling; // Get the dropdown menu

            // Check if it's already open
            let isOpen = menu.style.display === "block";

            // Close all dropdowns first
            document.querySelectorAll(".dropdown-menu").forEach(m => m.style.display = "none");

            // Toggle only the clicked menu
            if (!isOpen) {
                menu.style.display = "block";
            }

            event.stopPropagation(); // Stop the event from reaching the document click listener
        });
    });

    // Prevent menu from closing when clicking inside the dropdown
    document.querySelectorAll(".dropdown-menu").forEach(menu => {
        menu.addEventListener("click", function (event) {
            event.stopPropagation(); // Stop it from closing
        });
    });

    // **Only close if clicking outside of dropdowns**
    document.addEventListener("click", function (event) {
        if (!event.target.closest(".dropdown") && !event.target.closest(".hamburger")) {
            document.querySelectorAll(".dropdown-menu").forEach(m => m.style.display = "none");
        }
    });

    // **Fix for Hamburger Menu Toggling**
    if (hamburger) {
        hamburger.addEventListener("click", function (event) {
            event.stopPropagation(); // Prevent accidental menu closing
            navMenu.classList.toggle("active"); // Show/hide main menu
        });
    }
});
