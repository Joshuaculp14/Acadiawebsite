// JavaScript Document
// Enhanced Mobile Dropdown Toggle Logic
document.addEventListener('DOMContentLoaded', function () {
    const dropdowns = document.querySelectorAll('#nav .dropdown > a');

    dropdowns.forEach(dropdown => {
        dropdown.addEventListener('click', function (e) {
            e.preventDefault();
            const parentLi = this.parentElement;

            // Close other dropdowns if open
            document.querySelectorAll('#nav .dropdown').forEach(li => {
                if (li !== parentLi) {
                    li.classList.remove('active');
                }
            });

            // Toggle current dropdown
            parentLi.classList.toggle('active');
        });
    });
});

