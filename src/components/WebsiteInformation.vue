<template>
  <div class="popup-overlay">
    <div class="popup-content">
      <a @click="closeInfoPopup" class="close-button">×</a>
      <div class="info-popup">
        <!-- Website Information -->
        <div class="info-title">Website Information</div>
        <div class="info-description">
          This website has been developed using Vue.js and Vite and is an
          integral part of the
          <a href="https://gabs.eu.org/aeolus"><b>Aeolus</b></a> project. The
          Framework's structure follows the
          <a href="https://semantichtml.github.io">Semantic HTML Convention</a>
          and an Component-Based Architecture. <br /><br />Furthermore, this
          website is fully <b>open source</b>. You can access it's source code
          <a href="https://github.com/GabsEdits/boekestijn">here</a>.

          <br /><br />
        </div>
        <div></div>

        <!-- Build Number -->
        <div class="build-number">
          <h1>Build Number</h1>
          <p>
            This information is here in case there is an issue, or to see when
            was this build was made. <br /><br />Build from:
            <code>{{ formattedTimestamp }}</code> <br />Build type: <code>Stable</code>
          </p>
        </div>

        <!-- Dependencies -->
        <div class="dependencies">
          <h1>Dependencies</h1>
          <div class="dependency-item"><b>vue</b> - 3.3.9</div>
          <div class="dependency-item"><b>vite</b> - 5.0.4</div>
          <div class="divider"></div>
          <div class="dependency-item"><b>inter-font</b> - 4.0.0</div>
          <div class="dependency-item"><b>geist-font</b> - 1.0.1</div>
          <div class="dependency-item"><b>axios</b> - 1.6.1</div>
          <div class="dependency-item"><b>vue-i18n</b> - 9.8.0</div>
          <div class="dependency-item"><b>vue-router</b> - 4.2.5</div>
        </div>
        <!-- Aeolus Card -->
        <a class="aeolus-card" href="https://gabs.eu.org/aeolus">
          <div class="aeolus-card-elements">
            <h1>Aeolus</h1>
            <p>
              Made with <span id="heart">♥</span> by
              <span id="name">Gabs</span>
            </p>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formattedTimestamp: '',
    };
  },
  mounted() {
    document.addEventListener("keydown", this.handleEscKeyInfo);
    const lastUpdatedTimestamp = document.lastModified;
    this.formattedTimestamp = new Date(lastUpdatedTimestamp).toLocaleDateString();
  },

  beforeDestroy() {
    document.removeEventListener("keydown", this.handleEscKeyInfo);
  },
  methods: {
    closeInfoPopup() {
      this.$router.push("/");
    },
    handleEscKeyInfo(event) {
      if (event.key === "Escape") {
        this.closeInfoPopup();
      }
    },
  },
};
</script>
