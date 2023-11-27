<template>
  <header class="container">
    <h1>
      <a onclick="scrollToTop()" href="#top"
        ><img src="/images/boekestijn-transport.svg" alt="Boekestijn Transport"
      /></a>
      <sup class="md">🅫</sup>
    </h1>
    <p
      style="margin-right: 20%"
      class="hide-on-mobile quick-office"
      v-html="$t('header.quickoffice')"
    ></p>
    <ul>
      <li class="dropdown" @mouseleave="hideLanguageDropdown">
        <a @click="togglePhoneDropdown" id="ignore-link"
          >{{ $t("header.callus") }} <br class="quick-number" /><span
            class="quick-number"
            >14114</span
          ></a
        >
        <div
          class="dropdown-content"
          v-if="showPhoneDropdown"
          style="width: 220px; left: -58px; top: 110%"
        >
          <h4>{{ $t("footer.call") }}</h4>
          <a href="tel:+37378830142">{{ $t("footer.special") }} 14114</a>
          <div class="divider"></div>
          <a href="tel:+37378830142"
            >{{ $t("footer.chisinau") }} +373 78 830 142</a
          >
          <div class="divider"></div>
          <a href="tel:+37378848000"
            >{{ $t("footer.balti") }} +373 78 848 000</a
          >
          <div class="divider"></div>
          <a href="tel:+37377799783"
            >{{ $t("footer.varnita") }} +373 77 799 783</a
          >
        </div>
      </li>
      <li>
        <a href="#above-location" style="cursor: pointer" class="locationmobile"
          >{{ $t("header.locations") }}
          <i class="fa fa-map-marker-alt smaller-icon"></i
        ></a>
      </li>
      <li class="dropdown" @mouseleave="hideLanguageDropdown">
        <a
          style="cursor: pointer"
          class="language-icon"
          @click="toggleLanguageDropdown"
          >{{ $t("header.language") }} <i class="fa fa-angle-down"></i
        ></a>
        <div class="dropdown-content" v-if="showLanguageDropdown">
          <a href="/" @click.prevent="$i18n.locale = 'ru'">Русский</a>
          <div class="divider"></div>
          <a href="/" @click.prevent="$i18n.locale = 'ro'">Română</a>
          <div class="divider"></div>
          <a href="/" @click.prevent="$i18n.locale = 'en'">English</a>
        </div>
      </li>
    </ul>
  </header>
</template>

<script>
export default {
  data() {
    return {
      showLanguageDropdown: false,
      showPhoneDropdown: false,
    };
  },
  methods: {
    toggleLanguageDropdown() {
      this.showLanguageDropdown = !this.showLanguageDropdown;
    },
    togglePhoneDropdown() {
      this.showPhoneDropdown = !this.showPhoneDropdown;
    },
    hideLanguageDropdown() {
      this.showLanguageDropdown = false;
    },
    hidePhoneDropdown() {
      this.showPhoneDropdown = false;
    },
  },
};
</script>
