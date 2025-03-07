// JavaScript Document
document.addEventListener("DOMContentLoaded", function () {
    let dropdowns = document.querySelectorAll(".dropdown > a");

    dropdowns.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault(); // Prevent navigation

            let parent = this.parentElement;
            let isActive = parent.classList.contains("active");

            // Close all dropdowns
            document.querySelectorAll(".dropdown").forEach(drop => drop.classList.remove("active"));

            // Toggle only the clicked menu
            if (!isActive) {
                parent.classList.add("active");
            }

            event.stopPropagation(); // Prevents event bubbling
        });
    });

    // Prevent dropdown menu from closing when clicking inside
    document.querySelectorAll(".dropdown-menu").forEach(menu => {
        menu.addEventListener("click", function (event) {
            event.stopPropagation();
        });
    });

    // Close all dropdowns if clicking outside
    document.addEventListener("click", function () {
        document.querySelectorAll(".dropdown").forEach(drop => drop.classList.remove("active"));
    });
});

