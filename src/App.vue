<script setup>
import Header from "aploe/Header.vue";
import Main from "./components/Main.vue";
import TruckData from "aploe/Data.vue";
import Benefits from "aploe/Features.vue";
import Vacancies from "aploe/ExternalLink.vue";
import Locations from "aploe/Map.vue";
import Faq from "aploe/Faq.vue";
import ExternalLinks from "aploe/Links.vue";
import Footer from "./components/Footer.vue";
import Benefit from "aploe/Benefit.vue";
</script>

<template>
  <div>
    <Header logo="/images/boekestijn-transport.svg" />
    <main>
      <Main />
      <TruckData
        title="livetrucks.title"
        description="livetrucks.desc"
        icon="globe"
        api="https://api.boekestijntransport.com:50125/api/get_trucks"
        fallback="1000"
        background="#c0e2de83"
        iconColor="var(--boek-green-2)"
      />
      <Benefits
        title="benefits.title"
        icon="loyalty"
        background="#c0e2de83"
        iconColor="var(--boek-green-2)"
      >
        <Benefit icon="description"> {{ $t("benefits.benefitone") }}</Benefit>
        <Benefit icon="payments"> {{ $t("benefits.benefitbill") }}</Benefit>
        <Benefit icon="local_shipping">
          {{ $t("benefits.benefittruck") }}</Benefit
        >
        <Benefit icon="manufacturing">
          {{ $t("benefits.benefitcogs") }}</Benefit
        >
        <Benefit icon="airport_shuttle">
          {{ $t("benefits.benefitvan") }}</Benefit
        >
        <Benefit icon="globe"> {{ $t("benefits.benefitglobe") }}</Benefit>
        <Benefit icon="language"> {{ $t("benefits.benefitlanguage") }}</Benefit>
        <Benefit icon="book"> {{ $t("benefits.benefitbook") }}</Benefit>
        <Benefit icon="school"> {{ $t("benefits.benefitcap") }}</Benefit>
        <Benefit icon="featured_seasonal_and_gifts">
          {{ $t("benefits.benefitgift") }}</Benefit
        >
        <Benefit icon="map"
          >Track &amp; Trace <br /><br />{{
            $t("benefits.benefitmap")
          }}</Benefit
        >
        <Benefit icon="medical_services">
          {{ $t("benefits.benefitbriefcasetitle") }} <br /><br />
          {{ $t("benefits.benefitbriefcase") }}
        </Benefit>
      </Benefits>
      <Vacancies
        title="vacancies.title"
        description="vacancies.title"
        link="https://www.rabota.md/ro/companies/boekestijn-transport-service"
        link-text="vacancies.link"
        icon="work"
        icon-color="var(--boek-green-2)"
        background="#F3F8F2"
        link-color="#CFE3C9"
      />
      <Locations
        title="locations.title"
        description="locations.desc"
        icon="map"
        icon-color="var(--boek-green-2)"
      />
      <Faq title="faq.title">
        <article>
          <h3>{{ $t("faq.qone") }}</h3>
          <summary>{{ $t("faq.answerone") }}</summary>
        </article>
        <article>
          <h3>{{ $t("faq.qtwo") }}</h3>
          <summary>{{ $t("faq.answertwo") }}</summary>
        </article>
        <article>
          <h3>{{ $t("faq.qthree") }}</h3>
          <summary>{{ $t("faq.answerthree") }}</summary>
        </article>
        <article>
          <h3>{{ $t("faq.qmiss") }}</h3>
          <summary>{{ $t("faq.answermiss") }}</summary>
        </article>
        <article>
          <h3>{{ $t("faq.qfour") }}</h3>
          <summary>{{ $t("faq.answerfour") }}</summary>
        </article>
        <article>
          <h3>{{ $t("faq.qfive") }}</h3>
          <summary>{{ $t("faq.answerfive") }}</summary>
        </article>
        <article>
          <h3>{{ $t("faq.qsix") }}</h3>
          <summary>{{ $t("faq.answersix") }}</summary>
        </article>
        <article>
          <h3>{{ $t("faq.qseven") }}</h3>
          <summary>{{ $t("faq.answerseven") }}</summary>
        </article>
        <article>
          <h3>{{ $t("faq.qeight") }}</h3>
          <summary>{{ $t("faq.answereight") }}</summary>
        </article>
      </Faq>
    </main>
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
    TruckData,
    Benefits,
    Vacancies,
    Locations,
    Faq,
    ExternalLinks,
    Footer,
  },
};
</script>
