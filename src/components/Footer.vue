<template>
  <footer id="footer">
<img src="/images/badges-3x.svg?size=200h300w&format=svg" class="badges" alt="our awards">
<p class="call-footer">{{ $t("footer.call") }}</p>
<a href="tel: 14114" id="footer-special-link" class="footer-links">{{ $t("footer.special") }} 14114</a>
<div class="footer-links">
  <a href="tel:+37378830142" class="touch-space">{{ $t("footer.chisinau") }} +373 78 830 142</a>
  <a href="tel:+37378848000" class="touch-space">{{ $t("footer.balti") }} +373 78 848 000</a>
  <a href="tel:+37377799783" class="touch-space">{{ $t("footer.varnita") }} +373 77 799 783</a>
</div>
<div class="footer-additional">
  <a href="https://www.facebook.com/boekestijntransportmoldova" class="footer-social-link" aria-label="Check out the Facebook Page"><i class="fab fa-facebook"></i></a>
  <a href="https://md.linkedin.com/company/boekestijn-transport-service" class="footer-social-link" aria-label="Check out our LinkedIn Page"><i class="fab fa-linkedin"></i></a>
  <a href="https://github.com/GabsEdits/boekestijn" class="footer-social-link" aria-label="Check out the source code"><i class="fab fa-github"></i></a>
  <a href="https://www.instagram.com/boekestijntransport/" class="footer-social-link" aria-label="Check out our Instagram Page"><i class="fab fa-instagram"></i></a>
  <a href="#privacy-policy" @click="openPopup">Privacy Policy</a>
  <p class="made-by">
    Made with <i class="fa-solid fa-heart" style="color: #dd2e44;"></i> by <a href="https://gabs.eu.org" class="owner-link">Gabs</a>
  </p>
  <p class="footer-copyright" :title="aboutBuild">
    <a href="#dev-info" @click="openInfoPopup">
    &copy; 2023 Î.C.S. Boekestijn Transport Service S.R.L. All rights reserved.
    </a>
  </p>
</div>
</footer>
<div v-if="isPopupOpen" class="popup-overlay">
  <div class="popup-content">
  <a @click="closePopup" class="close-button">×</a>
  <div id="privacy">
  <h1 class="privacy-title">Privacy Policy</h1>
<h2 class="privacy-subtitle">Data Collection</h2>
<p class="privacy-p">We do not collect any personal data from visitors on this website. You can browse our website anonymously without providing any personal information.</p>

<h2 class="privacy-subtitle">Cookies</h2>
<p class="privacy-p">This website does not use any cookies.</p>

<h2 class="privacy-subtitle">Data Security</h2>
<p>We prioritize the security of your data and take appropriate measures to protect it. However, please note that no method of transmission over the internet or electronic storage is 100% secure.</p>

<h2 class="privacy-subtitle">Third-Party Services</h2>
<p class="privacy-p">This website does not utilize any third-party services that would collect or process personal information.</p>

<h2 class="privacy-subtitle">Open Source</h2>
<p class="privacy-p">We are committed to openness and transparency. This website is fully built on open-source technologies and frameworks, ensuring that the source code is freely available and can be audited by anyone. You can find the source code <a href="https://github.com/GabsEdits/boekestijn">here</a>.</p>
    </div>
    </div>
</div>

<div v-if="isInfoPopupOpen" class="popup-overlay">
  <div class="popup-content">
  <a @click="closeInfoPopup" class="close-button">×</a>
  <div class="info-popup">
    <!-- Website Information -->
    <div class="info-title">Website Information</div>
    <div class="info-description">
      This website has been developed using Vue.js and Vite and is an integral part of the <a href="https://gabs.eu.org/aeolus"><b>Aeolus</b></a> project. The Framework's structure follows the <a href="https://semantichtml.github.io">Semantic HTML Convention</a> and an Component-Based Architecture.
      <br><br>Furthermore, this website is fully <b>open source</b>. You can access it's source code <a href="https://github.com/GabsEdits/boekestijn">here</a>.

        <br><br>
    </div>
    <div>
    </div>

    <!-- Build Number -->
    <div class="build-number">
      <h1>Build Number</h1>
      <p>This information is here in case there is an issue, or to see when was this build was made.
        <br><br>Build from: <code class="GeistMono">20/11/2023</code>
        <br>Build type: <code>Stable</code></p>
    </div>

    <!-- Dependencies -->
    <div class="dependencies">
        <h1>Dependencies</h1>
        <div class="dependency-item"><b>vue</b> - 3.3.8</div>
        <div class="dependency-item"><b>vite</b> - 5.0.0</div>
        <div class="divider"></div>
        <div class="dependency-item"><b>inter-font</b> - 4.0.0</div>
        <div class="dependency-item"><b>geist-font</b> - 1.0.0</div>
        <div class="dependency-item"><b>axios</b> - 1.6.1</div>
        <div class="dependency-item"><b>vue-i18n</b> - 9.7.0</div>
        <div class="dependency-item"><b>vue-router</b> - 4.2.5</div>
    </div>
    <!-- Aeolus Card -->
    <a class="aeolus-card" href="https://gabs.eu.org/aeolus">
      <div class="aeolus-card-elements">
      <h1>Aeolus</h1>
      <p>Made with <span id="heart">♥</span> by <span id="name">Gabs</span></p>
      </div>
    </a>
</div>
</div>
</div>
</template>

<script>
export default {
mounted() {
document.addEventListener('keydown', this.handleEscKey);
document.addEventListener('keydown', this.handleEscKeyInfo);

},

beforeDestroy() {
document.removeEventListener('keydown', this.handleEscKey);
document.removeEventListener('keydown', this.handleEscKeyInfo);

},
data() {
return {
  isPopupOpen: false,
  aboutBuild: "Website Build From: 06/10/2023 (Vue)",
  isInfoPopupOpen: false
};
},
methods: {
openPopup() {
  this.isPopupOpen = true;
},
closePopup() {
  this.isPopupOpen = false;
},
openInfoPopup() {
  this.isInfoPopupOpen = true;
},
closeInfoPopup() {
  this.isInfoPopupOpen = false;
},
handleEscKey(event) {
  if (event.key === 'Escape') {
    this.closePopup();
  }
},
handleEscKeyInfo(event) {
  if (event.key === 'Escape') {
    this.closeInfoPopup();
  }
},
}
}
</script>