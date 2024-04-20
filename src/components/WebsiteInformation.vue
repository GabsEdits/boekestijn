<template>
  <div class="popup-overlay">
    <div class="popup-content">
      <a @click="closeInfoPopup" class="close-button">×</a>
      <div class="info-popup">
        <!-- Website Information -->
        <div class="info-title">Website Information</div>
        <div class="info-description">
          This website has been developed using Vue.js and Vite and it's build with <<...>>. The
          Framework's structure follows the
          <a href="https://semantichtml.github.io">Semantic HTML Convention</a>
          and a Component-Based Architecture. <br /><br />Furthermore, this
          website is fully <b>open source</b>. You can access its source code
          <a href="https://github.com/GabsEdits/boekestijn">here</a>.

          <br /><br />
        </div>
        <div></div>

        <!-- Build Number -->
        <div class="build-number">
          <h1>Build Number</h1>
          <p>
            This information is here in case there is an issue, or to see when
            this build was made. <br />
            <br />Build from: <code>{{ buildFrom }}</code> <br />Build type:
            <code>{{ buildtype }}</code>
          </p>
        </div>

        <!-- Dependencies -->
        <div class="dependencies">
          <h1>Dependencies</h1>
          <p class="dependency-item">
            <b>vue</b> - <code>{{ dependency.vue }}</code>
          </p>
          <p class="dependency-item">
            <b>vite</b> - <code>{{ dependency.vite }}</code>
          </p>
          <hr />
          <p class="dependency-item">
            <b>leaflet</b> - <code>{{ dependency.leaflet }}</code>
          </p>
          <p class="dependency-item">
            <b>axios</b> - <code>{{ dependency.axios }}</code>
          </p>
          <p class="dependency-item">
            <b>vue-i18n</b> - <code>{{ dependency.vuei18n }}</code>
          </p>
          <p class="dependency-item">
            <b>vue-router</b> - <code>{{ dependency.router }}</code>
          </p>
          <hr />
          <p class="dependency-item">
            <b>inter-ui</b> - <code>{{ dependency.inter }}</code>
          </p>
          <p class="dependency-item">
            <b>geist-font</b> - <code>{{ dependency.geist }}</code>
          </p>
        </div>
        <!-- Aeolus Card -->
        <a class="aeolus-card" href="https://gxbs.me/wip">
          <div class="aeolus-card-elements">
            <h1>!!!</h1>
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

<style>
.dependency-item code {
  font-weight: 450;
  font-size: 13px;
}

@media screen and (max-width: 767px) {
  .dependencies {
    margin-left: 130% !important;
  }

  .aeolus-card {
    margin-top: 201px !important;
    margin-left: 125% !important;
  }
}
</style>

<script setup>
import { ref, onBeforeUnmount, onMounted, onBeforeMount } from "vue";
import { useRouter } from "vue-router";
import WebsiteConfig from "../website.config.ts";

const { buildtype, dependency, buildFrom } = WebsiteConfig;
const $router = useRouter();

onBeforeMount(() => {
  document.addEventListener("keydown", handleEscKeyInfo);
});

onBeforeUnmount(() => {
  document.removeEventListener("keydown", handleEscKeyInfo);
});

const closeInfoPopup = () => {
  $router.push("/");
};

const handleEscKeyInfo = (event) => {
  if (event.key === "Escape") {
    closeInfoPopup();
  }
};
</script>
