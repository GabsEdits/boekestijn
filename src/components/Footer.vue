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
        <a href="https://gabs.eu.org" class="author">Gabs</a>
      </p>
      <p class="footer-copyright" :title="'Build build: ' + buildFrom">
        <router-link to="/developer">
          &copy; 2023-2024 Î.C.S. Boekestijn Transport Service S.R.L. All rights
          reserved.
        </router-link>
      </p>
    </div>
  </footer>
</template>

<script setup>
import WebsiteConfig from "../website.config.js";

const { buildFrom } = WebsiteConfig;
</script>

<style lang="scss">
footer {
  background-color: var(--footer-back);
  padding: 1rem;
  text-align: center;

  .footer-links {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-bottom: 1rem;
  }

  .footer-links a {
    color: #333;
    text-decoration: none;
    padding: 0.5rem;
    margin: 0.5rem;
  }

  .footer-links a:hover {
    text-decoration: underline;
  }

  .footer-social-link {
    color: #333;
    font-size: 1.5rem;
    margin: 0.5rem;
    transition: color 0.3s;
  }

  .footer-social-link:hover {
    color: #007bff;
  }

  .footer-additional {
    margin-top: 1rem;
  }

  .footer-additional a {
    color: var(--hover-link-gray);
    text-decoration: none;
    margin: 0.5rem;
    transition: color 0.3s;
  }

  .footer-additional a:hover {
    color: var(--footer-social);
  }

  .footer-copyright {
    font-size: medium;
    margin-top: 1rem;
  }

  .footer-copyright a {
    color: var(--copyright);
  }

  .made-by {
    margin-top: 1.25rem;
    text-align: center;
    color: var(--black);
    font-weight: 600;
  }

  .call-footer {
    font-weight: 600;
    font-size: 120%;
    text-align: center;
    margin-top: 0.5%;
  }

  #footer-special-link {
    color: var(--hover-link-gray);
    margin-top: 25px;
    margin-bottom: 0;
    padding: 14px;
    font-size: 17px;
  }

  #footer-special-link:hover {
    text-decoration: underline;
  }

  .author {
    color: var(--black) !important;
    margin-left: 0px !important;
    text-decoration: underline 1.5px !important;
    transition: text-decoration 0.5s !important;
    font-weight: 800;

    &:hover {
      text-decoration: underline green 1.5px !important;
      color: var(--black);
    }
  }

  .badges {
    position: absolute;
    margin-top: 30px;
    right: 10px;
    width: 500px;
    height: 56.25px;
    margin-top: 30px;

    @media (max-width: 767px) {
      aspect-ratio: 16/9;
      object-fit: contain;
      max-width: 80%;
      margin: 0 auto;
      left: 0;
      right: 0;
      position: relative;
      margin-bottom: 20px;
    }

    @media screen and (min-width: 775px) and (max-width: 1055px) {
      right: 0;
    }

    @media screen and (min-width: 768px) and (max-width: 1154px) {
      display: none;
    }
  }
}
</style>
