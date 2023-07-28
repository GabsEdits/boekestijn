const app = Vue.createApp({});

// header.js (Vue 3)
app.component('header-section', {
    template: `
    <header class="container">
    <h1>
        <a onclick="scrollToTop()" href="#scrollToTop"><img src="/images/boekestijn-transport.svg" alt="Boekestijn Transport"></a>
        <sup class="md">🅫</sup>
    </h1>
    <p style="margin-right: 20%;" class="hide-on-mobile quick-office" >Our Main <br>Office: <i><a href="https://goo.gl/maps/Ydmkt3j1Z1PnpCM1A?coh=178571&entry=tt">Strada Liviu Deleanu 13 (Et. 4), Chișinău, Republica Moldova</a></i></p>      
    <ul>
      <li>
        <a onclick="scrollToCall()" href="#scrollToCall" style="cursor: pointer">Call Us</a>
        <br><sup class="quick-number">14114</sup>
      </li>
      <li><a onclick="scrollToLocation()" onclick="scrollToLocationMobile()" href="#scrollToLocation" style="cursor: pointer" class="locationmobile">Locations <i class="fa fa-map-marker-alt smaller-icon"></i></a></li>
      <li class="dropdown">
        <a href="#dropdown" style="cursor: pointer">Language <i class="fa fa-angle-down"></i></a>
        <div class="dropdown-content">
          <a @click="changeLanguage('ru')" href="#ru">Русский</a>
          <a @click="changeLanguage('ro')" href="#ro">Română</a>
          <a @click="changeLanguage('en')" href="#en">English</a>
        </div>
      </li>
    </ul>
  </header>
    `,
  });
  
  // main-content.js (Vue 3)
  app.component('main-content', {
    template: `
    <div class="container">
    <h1 class="slogan">Follow your <br><span class="hard">dream</span> with us</h1>
    <p class="intro">The transport company Boekestijn was established in 1994 in Mill, the Netherlands. Initially, the company operated with a fleet of three trucks, but over time, it has experienced remarkable growth, expanding to over 900 trucks currently in operation. With a rich history spanning over 27 years, we have firmly established ourselves as a prominent player in the international transport and logistics market in Europe. Our extensive presence includes headquarters located in eight countries, supported by a dedicated team of over 1500 highly skilled professionals.</p>
    <a class="join-us" href="https://forms.gle/KSifgQQuFDhyYb1c8">Join Us</a>
    <br><a class="scroll-down" onclick="scrollDown()" href="#scroll">Please Scroll Down</a>
    <div class="slider hide-on-mobile">
      <div class="slide-var hide-on-mobile hide-on-880" id="slide-1">
        <div class="rectangle"></div>
        <h2 class="test-drive"><i class="fa fa-truck-moving"></i> Test Drive</h2>
        <p class="varnita">Chişinău</p>
        <div class="line"></div>
        <p class="days"><i class="fa fa-calendar-day"></i> Luni-Marți</p>
        <p class="time"><i class="fa fa-clock smaller-icon"></i> 14:00</p>
        <p class="address"><i class="fa fa-location-arrow smaller-icon"></i> Str. Pietrăriei, 19</p>
        <p class="phone">22 815827</p>
        <div class="cta-box">
          <div class="cta">
            <p class="call-now"><a href="tel:+37377799783" style="color: #ffffff;">CALL NOW!</a></p>
          </div>
        </div>
      </div>
      <div class="slide-bal hide-on-mobile hide-on-880" id="slide-1">
        <div class="rectangle"></div>
        <h2 class="test-drive"><i class="fa fa-truck-moving"></i> Test Drive</h2>
        <p class="varnita">Varnița</p>
        <div class="line"></div>
        <p class="days"><i class="fa fa-calendar-day"></i>Marți și Joi</p>
        <p class="time"><i class="fa fa-clock smaller-icon"></i> 09:00 - 12:00</p>
        <p class="address"><i class="fa fa-location-arrow smaller-icon"></i> Str. Tighina, 66</p>
        <p class="phone">0788 30 116</p>
        <p class="phone">0777 99 783</p>
        <div class="cta-box">
          <div class="cta">
            <p class="call-now"><a href="tel:+37377799783" style="color: #ffffff;">CALL NOW!</a></p>
          </div>
        </div>
      </div>
      <div class="slide-kiv hide-on-mobile hide-on-880" id="slide-1">
        <div class="rectangle"></div>
        <h2 class="test-drive"><i class="fa fa-truck-moving"></i> Test Drive</h2>
        <p class="varnita">Bălți</p>
        <div class="line"></div>
        <p class="days"><i class="fa fa-calendar-day"></i> Sâmbătă</p>
        <p class="time"><i class="fa fa-clock smaller-icon"></i> 09:00 - 10:00</p>
        <p class="address"><i class="fa fa-location-arrow smaller-icon"></i> Str. Ștefan cel Mare, 195</p>
        <p class="phone">78 848 000</p>
        <div class="cta-box">
          <div class="cta">
            <p class="call-now"><a href="tel:+78848000" style="color: #ffffff;">CALL NOW!</a></p>
          </div>
        </div>
      </div>
    </div>  
    </div>
    </div>
    <div class="video-wrapper">
        <video src="/Videos/intro.mp4" loop autoplay muted>
          <track src="captions_en.vtt" kind="captions" srclang="en" label="A lot of cars driving really fast in a loop">
        </video>
        <div class="overlay"></div>
       </div>
    `,
  });
  
    // test-drive-section-mobile.js (Vue 3)
    app.component('test-drive-section-mobile', {
        template: `
       <section class="mobile-only swipable-container grid-container" id="test-drive-mobile">
        <div class="swipable-item">
          <div class="container w-container test-drive-mobile-section">
            <h3 class="test-drive-mobile-title"><i class="fa fa-truck-moving"></i> Test Drive</h3>
            <sup class="test-drive-mobile-city">Varnița</sup>
            <div class="line"></div>
            <p class="days-mobile-varnita font-bigger"><i class="fa fa-calendar-day"></i> Marți și Joi</p>
            <p class="time-mobile-varnita font-bigger"><i class="fa fa-clock smaller-icon"></i> 09:00 - 12:00</p>
            <p class="address-mobile-varnita font-bigger"><i class="fa fa-location-arrow smaller-icon"></i> Str. Tighina, 66</p>
            <p class="phone-mobile-varnita"><i class="fa fa-phone smaller-icon"></i> 0788 30 116</p>
            <a href="tel:+37377799783" class="test-drive-call-us-mobile">Call Us!</a>
          </div>
      
          <div class="container w-container test-drive-mobile-section">
            <h3 class="test-drive-mobile-title"><i class="fa fa-truck-moving"></i> Test Drive</h3>
            <sup class="test-drive-mobile-city">Bălți</sup>
            <div class="line"></div>
            <p class="days-mobile font-bigger"><i class="fa fa-calendar-day"></i> Sâmbătă</p>
            <p class="time-mobile font-bigger"><i class="fa fa-clock smaller-icon"></i> 09:00 - 10:00</p>
            <p class="address-mobile font-bigger"><i class="fa fa-location-arrow smaller-icon"></i> Str. Ștefan cel Mare, 195</p>
            <p class="phone-mobile"><i class="fa fa-phone smaller-icon"></i> 0788 48 000</p>
            <a href="tel:+373078848000" class="test-drive-call-us-mobile">Call Us!</a>
          </div>
      
          <div class="container w-container test-drive-mobile-section">
            <h3 class="test-drive-mobile-title"><i class="fa fa-truck-moving"></i> Test Drive</h3>
            <sup class="test-drive-mobile-city">Chişinău</sup>
            <div class="line"></div>
            <p class="days-mobile font-bigger"><i class="fa fa-calendar-day"></i> Luni-Marți</p>
            <p class="time-mobile font-bigger"><i class="fa fa-clock smaller-icon"></i> 14:00</p>
            <p class="address-mobile font-bigger"><i class="fa fa-location-arrow smaller-icon"></i> Str. Pietrăriei, 19</p>
            <p class="phone-mobile"><i class="fa fa-phone smaller-icon"></i> 22 815827</p>
            <a href="tel:+37322815827" class="test-drive-call-us-mobile">Call Us!</a>
          </div>
        </div>
      
        <div class="dots-container">
    </div>
          <span class="dot active"></span>
          <span class="dot"></span>
          <span class="dot"></span>
        </div>

        <div class="swiper-pagination"></div>
      </div>
      </section>
        `,
      });
  
      // live-trucks-section.js (Vue 3)
      app.component('live-trucks-section', {
        template: `
          <section id="live-trucks">
            <div class="container">
              <div class="content-trucks">
                <h2>24/7 Monitoring of trucks</h2>
                <p>See below how many trucks we have on the road in the current moment</p>
                <div id="counter_up">
                  <div id="myData">{{ truckCount }}</div>
                </div>
              </div>
            </div>
          </section>
        `,
        data() {
          return {
            truckCount: '',
          };
        },
        mounted() {
          this.fetchTruckCount();
        },
        methods: {
          fetchTruckCount() {
            fetch('https://api.boekestijntransport.com:50125/api/get_trucks')
              .then((response) => response.json())
              .then((data) => {
                this.truckCount = data['data'];
                console.log('data: ' + data['data']);
              })
              .catch((error) => {
                console.error('Error fetching truck count:', error);
              });
          },
        },
      });

  // benefits-section.js (Vue 3)
  app.component('benefits-section', {
    template: `
    <section id="benefits">
    <div class="container">
      <h2>Benefits</h2>
      <ul>
        <li>
          <i class="fas fa-file-contract"></i>
          <p>Official contract in Poland</p>
        </li>
        <li>
          <i class="fas fa-money-bill-wave"></i>
          <p>Attractive Official Salary Calculated daily</p>
        </li>
        <li>
          <i class="fa-solid fa-truck-front"></i>
          <p>New Auto Park Euro: MERCEDES-DAF-IVECO-VOLVO 2020-2023</p>
        </li>
        <li>
          <i class="fas fa-cogs"></i>
          <p>Working conditions 12 weeks, 3-4 weeks leave</p>
        </li>
        <li>
          <i class="fa-solid fa-van-shuttle"></i>
          <p>Two-way transport on company account</p>
        </li>
        <li>
          <i class="fas fa-globe"></i>
          <p>Work under the contract and work visa directly with employer</p>
        </li>
        <li>
          <i class="fas fa-language"></i>
          <p>Flexible training for new drivers with average experience</p>
        </li>
        <li>
          <i class="fas fa-book"></i>
          <p>Company provides English courses to enable drivers communication with clients and administration. English or German language courses to conversational levels</p>
        </li>
        <li>
          <i class="fas fa-graduation-cap"></i>
          <p>Trainings, courses</p>
        </li>
        <li>
          <i class="fas fa-gift"></i>
          <p>Internal bonuses</p>
        </li>
        <li>
          <i class="fas fa-map"></i>
          <p>Track & Trace <br><br>Our entire fleet are monitored and managed by our own TMS. Developed with the main priority to be user friendly for the customer</p>
        </li>
        <li>
          <i class="fas fa-briefcase-medical"></i>
          <p>Insurance <br><br>We provide insurance for all drivers</p>
        </li>
      </ul>
    </div>
  </section>
    `,
  });

    // vacancies.js (Vue 3)
    app.component('vacancies-section', {
        template: `
        <section id="vacancies">
        <div class="container">
          <h2>Check out our vacancies</h2>
          <p>We have exciting career opportunities for you</p>
          <a class="vacancies-link" href="https://www.rabota.md/ro/companies/boekestijn-transport-service" target="_blank" rel="noopener noreferrer">
            <i class="fas fa-briefcase" id="above-location"></i>
            View vacancies on Rabota.md
          </a>
        </div>
      </section>
        `,
      });


        // locations.js (Vue 3)
  app.component('locations-section', {
    template: `
    <section id="locations-section">
    <h2 class="flights-title" id="locations">Location</h2>
    <p class="flights-desc">Find our offices around the country</p>
    <br><br>
    <div class="map-container">
     <iframe title="A google map"src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3408.940638663738!2d28.763401176815638!3d47.046966726454635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c97d94db5014bb%3A0xcbf78c12874ddbf4!2sBOEKESTIJN%20TRANSPORT%20SERVICE%20Moldova!5e1!3m2!1sro!2s!4v1685292931019!5m2!1sro!2s" class="map" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
 </div>
 <p class="flights-desc" style="padding-bottom: 10px; padding-top: 10px;">&bull; Bălți: Strada Nicolae Iorga 30, Republica Moldova 
   <br>&bull; Varnița: Strada Tighina, 66, Republica Moldova</p>
 </section>
    `,
  });
  
  app.component('faq-section', {
    template: `
    <div class="faq-section wf-section">
    <div class="container w-container">
        <div class="grid-title-div">
            <h2 class="faq-title">Questions and Answers</h2>
        </div>
        <div class="w-layout-grid grid-3">
            <div class="container-faq-question">
                <h3 class="title-faq-question">Are there crews in pairs?</h3>
                <p class="paragraph-faq-question">Mostly there are single crews.</p>
            </div>
            <div class="container-faq-question">
                <h3 class="title-faq-question">Is there an exchange of pallets?</h3>
                <p class="paragraph-faq-question">Depending on the logistics. Mostly when working with a refrigerator.</p>
            </div>
            <div class="container-faq-question">
                <h3 class="title-faq-question">Do you have work on a refrigerator / with a container / on an auto transporter?</h3>
                <p class="paragraph-faq-question">We have more than 70 customers that we serve, there are refrigerators, platforms, containers, trawl.</p>
            </div>
            <div class="container-faq-question">
                <h3 class="title-faq-question">In what currency is the salary?</h3>
                <p class="paragraph-faq-question">In euros, by transfer to a Moldavian bank card.</p>
            </div>
            <div class="container-faq-question">
                <h3 class="title-faq-question">Where do the weekly breaks take place?</h3>
                <p class="paragraph-faq-question">At our bases or in well-maintained parking lots.</p>
            </div>
            <div class="container-faq-question">
                <h3 class="title-faq-question">How to get to work?</h3>
                <p class="paragraph-faq-question">The company has its own transport to transport drivers from our offices to trucks. For free.</p>
            </div>
            <div class="container-faq-question">
              <h3 class="title-faq-question">Where does the driver exchange take place and how does the truck transfer take place?</h3>
              <p class="paragraph-faq-question">The driver exchange takes place in our garages. The truck is handed over to a mechanic.</p>
          </div>
          <div class="container-faq-question">
              <h3 class="title-faq-question">Is any amount of money blocked for the period in which the driver is on leave?</h3>
              <p class="paragraph-faq-question">We have a full settlement with the drivers on the day of the salary. We do not block any amounts for the guarantee.</p>
          </div>
          <div class="container-faq-question">
              <h3 class="title-faq-question">What contract does the company provide?</h3>
              <p class="paragraph-faq-question">We offer employment under the Polish contract.</p>
          </div>
        </div>
    </div>
</div>
    `,
  });
  

  // facebook.js (Vue 3)
  app.component('facebook-section', {
    template: `
    <section id="facebook">
    <div class="container">
      <h2>Follow Us on Facebook</h2>
      <p>Stay updated with our latest news and updates</p>
      <a class="facebook-link" href="https://www.facebook.com/boekestijntransportmoldova" target="_blank" rel="noopener noreferrer">
        <i class="fab fa-facebook"></i>
        Visit our Facebook page
      </a>
    </div>
  </section>
    `,
  });

    // external-links.js (Vue 3)
    app.component('external-links-section', {
        template: `
        <section id="external-links" class="container">
        <i class="fa-solid fa-link external-links-icon"></i>
        <h2>External Links</h2>
        <ul>
          <li><a href="https://www.boekestijntransport.com" target="_blank">Visit the International Website</a></li>
        </ul>
      </section>
        `,
      });
      

  // footer.js (Vue 3)
  app.component('footer-section', {
    template: `
    <footer id="footer">
    <img src="/images/badges-3x.webp" class="badges" alt="our awards">
    <p class="call-footer">Call Us</p>
    <a href="tel: 14114" id="footer-special-link" class="footer-links">Main: 14114</a>
    <div class="footer-links">
      <a href="tel:+37378830142" class="touch-space">Chisinau: +373 78 830 142</a>
      <a href="tel:+37378848000" class="touch-space">Balți: +373 78 848 000</a>
      <a href="tel:+37377799783" class="touch-space">Varnița: +373 77 799 783</a>
    </div>
    <div class="footer-additional">
      <a href="https://www.facebook.com/boekestijntransportmoldova" class="footer-social-link" aria-label="Check out the Facebook Page"><i class="fab fa-facebook"></i></a>
      <a href="https://md.linkedin.com/company/boekestijn-transport-service" class="footer-social-link" aria-label="Check out our LinkedIn Page"><i class="fab fa-linkedin"></i></a>
      <a href="https://github.com/GabsEdits/boekestijn" class="footer-social-link" aria-label="Check out the source code"><i class="fab fa-github"></i></a>
      <a href="https://www.instagram.com/boekestijn_transport/" class="footer-social-link" aria-label="Check out our Instagram Page"><i class="fab fa-instagram"></i></a>
      <a href="/privacy-policy.html">Privacy Policy</a>
      <p class="made-by">
        Made with <span style="color: red;">❤️</span> by <a href="https://gabs.eu.org" class="owner-link">Gabs</a>
      </p>
      <p class="footer-copyright">
        &copy; 2023 Boekestijn Transport Moldova. All rights reserved.
      </p>
    </div>
  </footer>
    `,
  });

  // Mount the app to the #app element
  app.mount('#app');
  
