<template>
  <footer id="footer">
    <img
      src="/images/badges-3x.svg?size=200h300w&format=svg"
      class="badges"
      alt="our awards"
    />
    <p class="call-footer">{{ $t("footer.call") }}</p>
    <a href="tel: 14114" id="footer-special-link" class="footer-links"
      >{{ $t("footer.special") }} 14114</a
    >
    <div class="footer-links">
      <a href="tel:+37378830142" class="touch-space"
        >{{ $t("footer.chisinau") }} +373 78 830 142</a
      >
      <a href="tel:+37378848000" class="touch-space"
        >{{ $t("footer.balti") }} +373 78 848 000</a
      >
      <a href="tel:+37377799783" class="touch-space"
        >{{ $t("footer.varnita") }} +373 77 799 783</a
      >
    </div>
    <div class="footer-additional">
      <a
        href="https://www.facebook.com/boekestijntransportmoldova"
        class="footer-social-link"
        aria-label="Check out the Facebook Page"
        ><i class="fab fa-facebook"></i
      ></a>
      <a
        href="https://md.linkedin.com/company/boekestijn-transport-service"
        class="footer-social-link"
        aria-label="Check out our LinkedIn Page"
        ><i class="fab fa-linkedin"></i
      ></a>
      <a
        href="https://github.com/GabsEdits/boekestijn"
        class="footer-social-link"
        aria-label="Check out the source code"
        ><i class="fab fa-github"></i
      ></a>
      <a
        href="https://www.instagram.com/boekestijntransport/"
        class="footer-social-link"
        aria-label="Check out our Instagram Page"
        ><i class="fab fa-instagram"></i
      ></a>
      <router-link to="/privacy">Privacy Policy</router-link>
      <p class="made-by">
        Made with <i class="fa-solid fa-heart" style="color: #dd2e44"></i> by
        <a href="https://gabs.eu.org" class="owner-link">Gabs</a>
      </p>
      <p class="footer-copyright" :title="aboutBuild">
        <router-link to="/developer">
          &copy; 2023 Î.C.S. Boekestijn Transport Service S.R.L. All rights
          reserved.
        </router-link>
      </p>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      aboutBuild: "Click here for Website Information",
    };
  },
};
</script>
