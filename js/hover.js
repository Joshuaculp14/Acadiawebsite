// JavaScript Document
document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM Loaded");

    let dropdowns = document.querySelectorAll(".dropdown > a");

    dropdowns.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault(); // Prevent page navigation

            let parent = this.parentElement;
            let isActive = parent.classList.contains("active");

            console.log("Dropdown clicked:", this.textContent);

            // Close all dropdowns EXCEPT the one being clicked
            document.querySelectorAll(".dropdown").forEach(drop => {
                if (drop !== parent) {
                    drop.classList.remove("active");
                }
            });

            // Toggle only the clicked menu
            if (!isActive) {
                parent.classList.add("active");
                console.log("Dropdown opened:", this.textContent);
            } else {
                console.log("Dropdown closed:", this.textContent);
            }

            event.stopPropagation(); // Prevents event bubbling
        });
    });

    // ✅ Prevent menu from closing when clicking inside dropdown links
    document.querySelectorAll(".dropdown-menu a").forEach(menuItem => {
        menuItem.addEventListener("click", function (event) {
            console.log("Menu item clicked:", this.textContent);
            event.stopPropagation(); // Prevents dropdown from closing
        });
    });

    // ✅ Close dropdown when clicking outside, NOT when clicking inside
    document.addEventListener("click", function (event) {
        if (!event.target.closest(".dropdown")) {
            console.log("Clicked outside, closing dropdowns");
            document.querySelectorAll(".dropdown").forEach(drop => drop.classList.remove("active"));
        }
    });
});
