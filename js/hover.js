// JavaScript Document
// JavaScript Document
document.addEventListener("DOMContentLoaded", function() {
    let dropdowns = document.querySelectorAll(".dropdown > a");
    let navMenu = document.querySelector("#nav"); // Adjust if necessary
    let hamburger = document.querySelector(".hamburger"); // Your hamburger button

    dropdowns.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault(); // Prevent link jump
            let menu = this.nextElementSibling; // The dropdown menu

            // Toggle only this menu
            if (menu.style.display === "block") {
                menu.style.display = "none";
            } else {
                menu.style.display = "block";
            }
            
            // Prevent menu from closing immediately
            event.stopPropagation();
        });
    });

    // Keep menu open if clicking inside
    document.querySelectorAll(".dropdown-menu").forEach(menu => {
        menu.addEventListener("click", function(event) {
            event.stopPropagation(); // Stops menu from closing
        });
    });

    // Close dropdowns when clicking outside
    document.addEventListener("click", function(event) {
        if (!event.target.closest(".dropdown") && !event.target.closest(".hamburger")) {
            document.querySelectorAll(".dropdown-menu").forEach(m => m.style.display = "none");
        }
    });

    // Ensure hamburger menu retains state
    if (hamburger) {
        hamburger.addEventListener("click", function(event) {
            event.stopPropagation(); // Prevent closing on first click
            navMenu.classList.toggle("active"); // Show/hide menu
        });
    }
});
