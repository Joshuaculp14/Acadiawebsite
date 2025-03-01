// JavaScript Document
document.addEventListener("DOMContentLoaded", function() {
    let dropdowns = document.querySelectorAll(".dropdown > a");

    dropdowns.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault(); // Prevents link from jumping
            let menu = this.nextElementSibling; // The dropdown menu

            // Close any other open menus
            document.querySelectorAll(".dropdown-menu").forEach(m => {
                if (m !== menu) {
                    m.style.display = "none";
                }
            });

            // Toggle current menu
            if (menu.style.display === "block") {
                menu.style.display = "none";
            } else {
                menu.style.display = "block";
            }
        });
    });

    // Close dropdown when clicking outside
    document.addEventListener("click", function(event) {
        if (!event.target.closest(".dropdown")) {
            document.querySelectorAll(".dropdown-menu").forEach(m => m.style.display = "none");
        }
    });
});