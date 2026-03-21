/* Antony */
// Search box
const searchBtn = document.getElementById('search-btn');
const searchBox = document.getElementById('search-box');

searchBtn.addEventListener('click', function() {
  
  searchBox.classList.toggle('active');
  
  if (searchBox.classList.contains('active')) {
    searchBox.focus();
  }
});

// User dropdown
let userDropdown = document.getElementById("user-dropdown");
let menuicon = document.getElementById("menuicon");

menuicon.addEventListener("click", function(event) {
    event.stopPropagation();
    userDropdown.classList.toggle("active");
});

document.addEventListener("click", function(event) {
    if (!userDropdown.contains(event.target) && event.target !== menuicon) {
        userDropdown.classList.remove("active");
    }
});



/* Mohith */



/* Imman */




/* Rithu */
// Dog button
document.querySelector(".tab-a").addEventListener("click", function () {
    document.querySelector(".dog").scrollIntoView({
        behavior: "smooth"
    });
});

// Cat button
document.querySelector(".tab-b").addEventListener("click", function () {
    document.querySelector(".cat").scrollIntoView({
        behavior: "smooth"
    });
});

// Bird button
document.querySelector(".tab-c").addEventListener("click", function () {
    document.querySelector(".birds").scrollIntoView({
        behavior: "smooth"
    });
});

// Aquarium  button
document.querySelector(".tab-d").addEventListener("click", function () {
    document.querySelector(".aquarium ").scrollIntoView({
        behavior: "smooth"
    });
});

// Aquarium  button
document.querySelector(".tab-e").addEventListener("click", function () {
    document.querySelector(".pets ").scrollIntoView({
        behavior: "smooth"
    });
}
);


/* Viji */