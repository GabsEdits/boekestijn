<template>
  <div class="popup-overlay">
    <div class="popup-content">
      <a @click="closePopup" class="close-button">×</a>
      <div id="privacy">
        <h1 class="privacy-title">Privacy Policy</h1>
        <h2 class="privacy-subtitle">Data Collection</h2>
        <p class="privacy-p">
          We do not collect any personal data from visitors on this website. You
          can browse our website anonymously without providing any personal
          information.
        </p>

        <h2 class="privacy-subtitle">Cookies</h2>
        <p class="privacy-p">This website does not use any cookies.</p>

        <h2 class="privacy-subtitle">Data Security</h2>
        <p>
          We prioritize the security of your data and take appropriate measures
          to protect it. However, please note that no method of transmission
          over the internet or electronic storage is 100% secure.
        </p>

        <h2 class="privacy-subtitle">Third-Party Services</h2>
        <p class="privacy-p">
          This website does not utilize any third-party services that would
          collect or process personal information.
        </p>

        <h2 class="privacy-subtitle">Open Source</h2>
        <p class="privacy-p">
          We are committed to openness and transparency. This website is fully
          built on open-source technologies and frameworks, ensuring that the
          source code is freely available and can be audited by anyone. You can
          find the source code
          <a href="https://github.com/GabsEdits/boekestijn">here</a>.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    document.addEventListener("keydown", this.handleEscKey);
  },

  beforeDestroy() {
    document.removeEventListener("keydown", this.handleEscKey);
  },
  methods: {
    closePopup() {
      this.$router.push("/");
    },
    handleEscKey(event) {
      if (event.key === "Escape") {
        this.closePopup();
      }
    },
  },
};
</script>
