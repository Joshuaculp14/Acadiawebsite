// nav.js
document.addEventListener("DOMContentLoaded", function () {
  // Grab all top-level dropdown links
  const dropdownLinks = document.querySelectorAll("#nav .dropdown > a");
  const navMenu = document.querySelector("#nav");

  // (Optional) If you have a hamburger icon
  const hamburger = document.querySelector(".hamburger");

  // Toggle .active for dropdowns on click/tap
  dropdownLinks.forEach(link => {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      event.stopPropagation();

      const parentLi = this.parentElement;
      const isActive = parentLi.classList.contains("active");

      // Close all dropdowns first
      document.querySelectorAll("#nav .dropdown").forEach(li => {
        li.classList.remove("active");
      });

      // Toggle only this one
      if (!isActive) {
        parentLi.classList.add("active");
      }
    });
  });

  // Close if user taps outside
  document.addEventListener("click", function (event) {
    if (!event.target.closest(".dropdown") && !event.target.closest(".hamburger")) {
      document.querySelectorAll("#nav .dropdown").forEach(li => {
        li.classList.remove("active");
      });
    }
  });

  // (Optional) hamburger toggling
  if (hamburger) {
    hamburger.addEventListener("click", function (e) {
      e.stopPropagation();
      navMenu.classList.toggle("active");
    });
  }
});
