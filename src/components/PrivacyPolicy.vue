<template>
  <div class="popup-overlay">
    <div class="popup-content">
      <a @click="closePopup" class="close-button">×</a>
      <div id="privacy">
        <h2 class="privacy-title">Privacy Policy</h2>
        <h3>Data Collection</h3>
        <p>
          We do not collect any personal data from visitors on this website. You
          can browse our website anonymously without providing any personal
          information.
        </p>

        <h3>Cookies</h3>
        <p>This website does not use any cookies.</p>

        <h3>Data Security</h3>
        <p>
          We prioritize the security of your data and take appropriate measures
          to protect it. However, please note that no method of transmission
          over the internet or electronic storage is 100% secure.
        </p>

        <h4>Forms</h4>
        <p>
          If you choose to contact us through the contact/tell a friend form, the information
          you provide will be sent to us via Telegram. We will only use this
          information to respond to your inquiry and will not share it with any
          third parties.
        </p>

        <h3>Third-Party Services</h3>
        <p>
          This website does not utilize any third-party services that would
          collect or process personal information.
        </p>
        <h3>Open Source</h3>
        <p>
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

<style lang="scss">
#privacy {
  max-width: 700px;
  padding: 30px 20px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border-radius: 8px;

  h2 {
    font-size: 24px;
    font-weight: 900;
    text-align: center;
    font-weight: 900;
  }

  h3 {
    font-size: 20px;
    margin-bottom: 0.2rem;
    font-weight: 800;
  }

  h4 {
    font-size: 18px;
    font-weight: 700;
  }

  p {
    line-height: 1.6;

    a {
      font-size: medium;
    }
  }
}
</style>

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
