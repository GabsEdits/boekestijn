// JavaScript code to toggle the dropdown on click
var languageToggle = document.getElementById("language-toggle");
var languageDropdown = document.getElementById("language-dropdown");

languageToggle.addEventListener("click", function(event) {
  event.preventDefault();
  languageDropdown.classList.toggle("active");
});

// JavaScript code to close the dropdown when the user clicks outside of it
document.addEventListener("click", function(event) {
  var dropdowns = document.querySelectorAll(".dropdown");
  for (var i = 0; i < dropdowns.length; i++) {
    var dropdown = dropdowns[i];
    if (!dropdown.contains(event.target)) {
      dropdown.querySelector(".dropdown-content").classList.remove("active");
    }
  }
});

// Select the element(s) containing the emoji text
var elements = document.getElementsByClassName('emoji-container');

// Loop through each element and replace the emoji text with Twemoji images
for (var i = 0; i < elements.length; i++) {
  twemoji.parse(elements[i]);
}