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

        fetch('https://api.boekestijntransport.com:50125/api/get_trucks')
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                appendData(data);
                                console.log('data: ' + data['data']);
            })
            .catch(function (err) {
                console.log('error: ' + err);
            });
        function appendData(data) {
            var mainContainer = document.getElementById("myData");
            var div = document.createElement("div");
            div.innerHTML = data['data'];
            mainContainer.appendChild(div);
        }

        function scrollToTop() {
          window.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
        }
    
        function scrollToLocation() {
          window.scrollTo({
            top: 2000,
            behavior: 'smooth'
          });
        }
    
        function scrollToCall() {
          window.scrollTo({
            top: 6000,
            behavior: 'smooth'
          });
        }
    