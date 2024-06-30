<template>
  <div class="popup-overlay">
    <div class="popup-content">
      <a @click="closeInfoPopup" class="close-button">×</a>
      <div id="developer">
        <!-- Website Information -->
        <section id="description">
          <h2>Website Information</h2>
          This website has been developed using Vue.js and Vite and it's build
          with <a href="https://aploe.gxbs.me">Aplóe</a>. The Framework's
          structure follows an
          <a href="https://semantichtml.github.io">Semantic HTML</a>
          and Component-Based Architecture. <br /><br />Furthermore, this
          website is fully <b>open source</b>. You can access its source code
          <a href="https://github.com/GabsEdits/boekestijn">on GitHub</a>.
        </section>

        <!-- Dependencies -->
        <section id="dependencies">
          <h1>Dependencies</h1>
          <p>
            <b>vue</b> - <code>{{ dependency.vue }}</code>
          </p>
          <p>
            <b>vite</b> - <code>{{ dependency.vite }}</code>
          </p>
          <p>
            <b>aploe</b> - <code>{{ dependency.aploe }}</code>
          </p>
          <hr />
          <p>
            <b>leaflet</b> - <code>{{ dependency.leaflet }}</code>
          </p>
          <p>
            <b>axios</b> - <code>{{ dependency.axios }}</code>
          </p>
          <p>
            <b>vue-i18n</b> - <code>{{ dependency.vuei18n }}</code>
          </p>
          <p>
            <b>vue-router</b> - <code>{{ dependency.router }}</code>
          </p>
        </section>

        <!-- Build Number -->
        <section id="build">
          <h3>Build Number</h3>
          <p>
            This information is here in case there is an issue, or to see when
            this build was made. <br />
            <br />Build from: <code>{{ buildFrom }}</code> <br />Build type:
            <code>{{ buildtype }}</code>
          </p>
        </section>

        <!-- Card -->
        <a class="card" href="https://aploe.gxbs.me">
          <h1>Aplóe</h1>
          <p>
            Made with <span id="heart">♥</span> by
            <span id="name">Gabs</span>
          </p>
        </a>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
#developer {
  width: 700px;
  margin: 2.1875rem;

  margin: 2.1875rem;
  height: max-content;
  display: grid;
  grid-gap: 0.625rem;
  grid-template-columns: 2.8fr 1fr;

  h2 {
    font-size: 25px;
    font-weight: 900;
    margin-bottom: 10px;
  }

  #description {
    font-size: 16px;
  }
}

.info-description a {
  font-size: 16px;
}

#build {
  font-size: 14px;

  h3 {
    text-align: left;
    font-size: 20px;
    font-weight: 900;
    margin-bottom: 10px;
    color: var(--black);

    p {
      font-size: 16px;
      color: var(--black);
    }
  }
}

#dependencies {
  text-align: left;
  margin-top: 0;

  h1 {
    font-weight: 900;
    font-size: 18px;
    margin-bottom: 5px;
    text-align: left;
  }

  hr {
    border: #ccc 0.0063rem solid;
    margin: 8px 0;
    max-width: 80%;
    border-radius: 20px;
  }

  p {
    display: block;

    code {
      font-weight: 450;
      font-size: 13px;
    }
  }
}

.card {
  width: 80%;
  margin-top: 10%;
  height: 80%;
  margin-left: auto;
  margin-right: auto;
  background-color: #e9e9e9;
  color: var(--black);
  border-radius: 5%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    font-weight: 900;
    font-size: 23px;
  }

  p {
    font-size: 9px;

    #name {
      font-weight: 900;
    }

    #heart {
      color: red;
    }
  }
}

@media screen and (max-width: 767px) {
  .dependencies {
    margin-left: 130% !important;
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
