<script setup>
import Header from "./components/Header.vue";
import Main from "./components/Main.vue";
import TestDriveMobile from "./components/TestDriveMobile.vue";
import LiveTrucks from "./components/LiveTrucks.vue";
import Benefits from "./components/Benefits.vue";
import Vacancies from "./components/Vacancies.vue";
import Locations from "./components/Locations.vue";
import Faq from "./components/Faq.vue";
import ExternalLinks from "./components/ExternalLinks.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
  <div>
    <Header />
    <div id="main">
      <Main />
      <TestDriveMobile />
      <LiveTrucks />
      <Benefits />
      <Vacancies />
      <Locations />
      <Faq />
      <ExternalLinks />
    </div>
    <Footer />
  </div>
  <router-view></router-view>
</template>

<script>
export default {
  name: "App",
  components: {
    Header,
    Main,
    TestDriveMobile,
    LiveTrucks,
    Benefits,
    Vacancies,
    Locations,
    Faq,
    ExternalLinks,
    Footer,
  },
};
</script>
