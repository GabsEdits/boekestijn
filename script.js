// JavaScript code to toggle the dropdown on click
var languageToggle = document.getElementById("dropdown");
var languageDropdown = document.getElementById("dropdown");

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
          const element = document.getElementById('above-location');
          if (element) {
            element.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });
          }
        }
        
    
        function scrollToCall() {
          window.scrollTo({
            top: 9000,
            behavior: 'smooth'
          });
        }

        function scrollDown() {
          window.scrollTo({
            top: 700,
            behavior: 'smooth'
          });
        }
    
          $(document).ready(function() {
            var slideIds = ['#slide-1', '#slide-2', '#slide-3'];
            var currentSlide = 0;
        
            function showSlide(index) {
              $(slideIds[index]).fadeIn();
            }
        
            function hideSlide(index) {
              $(slideIds[index]).fadeOut();
            }
        
            function nextSlide() {
              hideSlide(currentSlide);
              currentSlide = (currentSlide + 1) % slideIds.length;
              showSlide(currentSlide);
            }
        
            $(slideIds.join(', ')).hide(); // Hide all slides initially
            showSlide(currentSlide); // Show the first slide
        
            setInterval(nextSlide, 10000); // Change slide every 10 seconds
          });

          function swipeToNextItem() {
            var swipeableContainer = document.querySelector('.swipable-container');
            var currentItem = swipeableContainer.querySelector('.swipable-item.active');
            var nextItem = currentItem.nextElementSibling;
            var currentIgPage = currentItem.querySelector('.swipeable-dot.active').textContent;
            var dots = swipeableContainer.querySelectorAll('.swipeable-dot');
          
            if (nextItem && currentIgPage !== nextItem.querySelector('.swipeable-dot.active').textContent) {
              swipeableContainer.classList.add('swiping');
              nextItem.classList.add('active');
              dots.forEach(dot => {
                if (dot.textContent === currentIgPage) {
                  dot.classList.remove('active');
                } else {
                  dot.classList.add('active');
                }
              });
              setTimeout(function() {
                swipeableContainer.classList.remove('swiping');
              }, 300);
            }
          }
          
          document.addEventListener('touchstart', function(event) {
            if (event.target.classList.contains('swipable-item')) {
              event.preventDefault();
            }
          });
          
          document.addEventListener('touchmove', function(event) {
            if (event.target.classList.contains('swipable-item')) {
              event.preventDefault();
            }
          });
          
          document.addEventListener('touchend', swipeToNextItem);

          
          // Check if the device is mobile
  if (window.matchMedia('(max-width: 768px)').matches) {
    function scrollToLocationMobile() {
      window.scrollTo({
        top: 6000,
        behavior: 'smooth'
      });
    }
  }
