// JavaScript Document
document.addEventListener("DOMContentLoaded", function () {
    let dropdowns = document.querySelectorAll(".dropdown > a");

    dropdowns.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault(); // Prevent navigation

            let parent = this.parentElement;
            let isActive = parent.classList.contains("active");

            // Close all dropdowns EXCEPT the one being clicked
            document.querySelectorAll(".dropdown").forEach(drop => {
                if (drop !== parent) {
                    drop.classList.remove("active");
                }
            });

            // Toggle only the clicked menu
            if (!isActive) {
                parent.classList.add("active");
            }

            event.stopPropagation(); // Prevents event bubbling
        });
    });

    // ✅ **Fix: Prevent menu from closing when clicking inside dropdown links**
    document.querySelectorAll(".dropdown-menu a").forEach(menuItem => {
        menuItem.addEventListener("click", function (event) {
            event.preventDefault(); // Prevents navigation for testing (remove if needed)
            event.stopPropagation(); // Stops event from closing menu
        });
    });

    // ✅ **Only close menu when clicking outside, NOT when clicking a menu item**
    document.addEventListener("click", function (event) {
        if (!event.target.closest(".dropdown")) {
            document.querySelectorAll(".dropdown").forEach(drop => drop.classList.remove("active"));
        }
    });
});

