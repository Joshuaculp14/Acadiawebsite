// JavaScript Document
document.addEventListener("DOMContentLoaded", function () {
    let dropdownLinks = document.querySelectorAll(".dropdown > a");
    let dropdownMenus = document.querySelectorAll(".dropdown-menu");

    // 1. Handle clicks on top-level dropdown links
    dropdownLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault(); // Stop immediate navigation if you want to expand
            e.stopPropagation(); // Prevent closing everything

            // The <ul> directly after <a>
            let menu = this.nextElementSibling;
            if (!menu) return;

            // Is the menu already open?
            let isOpen = (menu.style.display === "block");

            // Close all other dropdowns first
            dropdownMenus.forEach(m => {
                m.style.display = "none";
            });

            // Toggle only this menu
            menu.style.display = isOpen ? "none" : "block";
        });
    });

    // 2. Keep dropdown open when tapping inside the menu
    dropdownMenus.forEach(menu => {
        menu.addEventListener("click", function (e) {
            e.stopPropagation(); // Don’t bubble up to the document listener
        });
    });

    // 3. Close all dropdowns when clicking outside
    document.addEventListener("click", function () {
        dropdownMenus.forEach(menu => {
            menu.style.display = "none";
        });
    });
});
