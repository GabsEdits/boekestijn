<script setup>
import Main from "./components/Main.vue";
import ExternalLinks from "./components/ExternalLinks.vue";

/* Aploe components */

import Footer from "./aploe/Footer.vue";

import Header from "aploe/components/Header.vue";
import ExtraInfo from "aploe/components/ExtraInfo.vue";
import TruckData from "aploe/components/Data.vue";
import Benefits from "aploe/components/Features.vue";
import Vacancies from "aploe/components/ExternalLink.vue";
import TellAFriend from "aploe/components/ExternalLink.vue";
import International from "aploe/components/ExternalLink.vue";
import Facebook from "aploe/components/ExternalLink.vue";
import Locations from "./content/Locations.vue";
import Faq from "aploe/components/Faq.vue";
import Benefit from "aploe/components/Benefit.vue";
</script>

<template>
  <div>
    <Header
      logo="/images/boekestijn-transport.svg"
      logo-dark="/images/boekestijn-transport-dark.svg"
      logo-alt="Boekestijn Transport"
      translatable="true"
      :dropdownItems="[
        {
          type: 'dropdown',
          slotName: 'dropdownOne',
        },
        {
          type: 'link',
          slotName: 'linkTwo',
          href: '#above-locations',
        },
      ]"
    >
      <template #extraLogo><sup id="md">🅫</sup></template>
      <template #extraInfo
        ><ExtraInfo>
          {{ $t("header.quickoffice") }} <br />
          {{ $t("header.quickofficebr") }}:
          <i
            ><a
              href="https://goo.gl/maps/Ydmkt3j1Z1PnpCM1A?coh=178571&amp;entry=tt"
              >{{ $t("locations.main") }}</a
            ></i
          ></ExtraInfo
        ></template
      >
      <template #dropdownOne>
        <div>
          {{ $t("header.callus") }} <br class="quick-number" /><span
            class="quick-number"
            >14114</span
          >
        </div>
      </template>
      <template #linkTwo>
        {{ $t("header.locations") }}
        <span class="material-symbols-rounded" style="font-size: 18px">
          location_on
        </span>
      </template>
      <template #dropdownOneContent>
        <h4>{{ $t("footer.call") }}</h4>
        <a href="tel:+37378830142">{{ $t("footer.special") }} 14114</a>
        <div class="divider"></div>
        <a href="tel:+37378830142"
          >{{ $t("footer.chisinau") }} +373 78 830 142</a
        >
        <div class="divider"></div>
        <a href="tel:+37377799783"
          >{{ $t("footer.varnita") }} +373 77 799 783</a
        >
      </template>
      <template #languages>
        <a href="/" @click.prevent="$i18n.locale = 'ru'">Русский</a>
        <div class="divider"></div>
        <a href="/" @click.prevent="$i18n.locale = 'ro'">Română</a>
        <div class="divider"></div>
        <a href="/" @click.prevent="$i18n.locale = 'en'">English</a>
      </template>
    </Header>
    <main>
      <Main />
      <TruckData
        title="livetrucks.title"
        description="livetrucks.desc"
        icon="globe"
        api="https://api.boekestijntransport.com:50125/api/get_trucks"
        fallback="1000"
        background="#c0e2de83"
        background-dark="#33706983"
        icon-color="var(--boek-green-2)"
        icon-color-dark="var(--boek-green-1)"
        translatable="true"
      />
      <Benefits
        title="benefits.title"
        icon="loyalty"
        background="#c0e2de83"
        background-dark="#20465A83"
        icon-color="var(--boek-green-2)"
        icon-color-dark="var(--boek-green-1)"
        translatable="true"
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
        <Benefit icon="translate">
          {{ $t("benefits.benefitlanguage") }}</Benefit
        >
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
      <section class="two-column">
        <Vacancies
          title="vacancies.title"
          description="vacancies.desc"
          link="https://www.rabota.md/ro/companies/boekestijn-transport-service"
          link-text="vacancies.link"
          icon="work"
          icon-color="var(--boek-green-2)"
          icon-color-dark="var(--boek-green-1)"
          background="#F3F8F2"
          background-dark="#182815"
          link-color="#CFE3C9"
          link-color-dark="#20465A83"
          translatable="true"
        />
        <TellAFriend
          title="tellFriend.title"
          description="tellFriend.desc"
          link="/tell-a-friend"
          link-text="tellFriend.link"
          icon="group"
          icon-color="var(--boek-green-2)"
          icon-color-dark="var(--boek-green-1)"
          background="#FBF6EF"
          background-dark="#3D2D1D"
          link-color="#EAD1AE"
          link-color-dark="#724E1D"
          is-router-link="true"
          translatable="true"
        />
      </section>
      <div style="height: 1px" id="above-locations"></div>
      <Locations />
      <Faq title="faq.title" translatable="true">
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
      <section class="two-column">
        <Facebook
          title="facebook.title"
          description="facebook.desc"
          link="https://www.facebook.com/boekestijntransportmoldova"
          link-text="facebook.link"
          icon="groups"
          icon-color="#344F83"
          icon-color-dark="#5F80BF"
          background="#F0F3F9"
          background-dark="#1A2A3F"
          link-color="#7C96CB"
          link-color-dark="#344F83"
          translatable="true"
        />
        <International
          title="externallinks.title"
          link="https://www.boekestijntransport.com/?moldova"
          link-text="externallinks.link"
          icon="public"
          icon-color="#8B7218"
          icon-color-dark="#D3B25A"
          background="#FCF9EE"
          background-dark="#3D2D1D"
          link-color="#E3C863"
          link-color-dark="#724E1D"
          translatable="true"
        />
      </section>
      <br />
    </main>
    <Footer
      icon="/images/boekestijn-icon.svg"
      badges="/images/badges.svg"
      badges-alt="Our Awards"
      author="Gabs"
      authorLink="https://www.gxbs.me"
      translatable="true"
      copyright="2023-2024 Î.C.S. Boekestijn Transport Service S.R.L. All rights reserved."
      :links="[
        {
          sectionTitle: 'header.callus',
          items: [
            { text: 'footer.special', href: 'tel:14114', info: '14114' },
            {
              text: 'footer.chisinau',
              href: 'tel:+37378830142',
              info: '+373 78 830 142',
            },
            {
              text: 'footer.varnita',
              href: 'tel:+37377799783',
              info: '+373 77 799 783',
            },
          ],
        },
        {
          sectionTitle: 'footer.findus',
          items: [
            { text: 'Facebook', href: 'https://www.facebook.com/boekestijntransportmoldova' },
            { text: 'LinkedIn', href: 'https://md.linkedin.com/company/boekestijn-transport-service' },
            { text: 'Instagram', href: 'https://www.instagram.com/boekestijntransport/' },
            { text: 'Source Code', href: 'https://github.com/GabsEdits/boekestijn' },
          ],
        },
        {
          sectionTitle: 'mainarea.joinus',
          items: [
            { text: 'vacancies.title', href: '/' },
            { text: 'tellFriend.title', href: '/tell-a-friend' },
            { text: 'mainarea.joinus', href: '/join-us' },
            { text: 'Privacy Policy', href: '/privacy' },
          ],
        },
      ]"
    >
      <template #special>{{ $t("footer.special") }} 14114</template>
      <template #chisinau-link
        >{{ $t("footer.chisinau") }} +373 78 830 142</template
      >
      <template #varnita-link
        >{{ $t("footer.varnita") }} +373 77 799 783</template
      >
    </Footer>
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
