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

  const mapContainer = document.querySelector('.map-container');

  // Intersection Observer to lazy load the Google Maps iframe
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const mapPlaceholder = entry.target.querySelector('.map-placeholder');
        const iframe = document.createElement('iframe');
        iframe.src = "https://maps.googleapis.com/maps/embed?pb=!1m18!1m12!1m3!1d3408.940638663738!2d28.763401176815638!3d47.046966726454635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c97d94db5014bb%3A0xcbf78c12874ddbf4!2sBOEKESTIJN%20TRANSPORT%20SERVICE%20Moldova!5e1!3m2!1sro!2s!4v1685292931019!5m2!1sro!2s";
        iframe.title = "A Google map";
        iframe.className = "map";
        iframe.allowfullscreen = "";
        iframe.loading = "lazy";
        iframe.referrerpolicy = "no-referrer-when-downgrade";
        entry.target.appendChild(iframe);
        observer.unobserve(entry.target);
      }
    });
  });

  observer.observe(mapContainer);