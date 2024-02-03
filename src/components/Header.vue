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
    > {{ $t("header.quickoffice") }} <br> {{ $t("header.quickofficebr") }}: <i><a href="https://goo.gl/maps/Ydmkt3j1Z1PnpCM1A?coh=178571&amp;entry=tt">{{ $t("locations.main") }}</a></i></p>
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
          href="#"
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

<style lang="scss">
header.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  width: 100%;
  top: 0;
  height: 70px;
  padding: 0 6%;
  background-color: #ffffffed;
  backdrop-filter: blur(10px);
  border-bottom: 1.2px solid #e7e7e7;
  z-index: 2000;
  animation: fadeInAnimation ease 1.5s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;

  h1 img:hover {
    padding: 1px;
    border-radius: 5px;
    background-color: #bebebe84;
  }

  ul {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  li:not(:first-child) {
    margin-left: 20px;
  }

  li:first-child {
    margin-left: 0;
  }

  li a {
    transition: all 300ms;

    &:hover {
      padding: 5px;
      border-radius: 5px;
      background-color: #c1c1c184;
    }
  }

  .dropdown-content a:hover {
    padding: 10px;
  }

  .quick-office {
    text-align: left !important;
    font-size: 15px;
  }

  .quick-number {
    font-size: 12px;
  }

  .language-icon {
    position: relative;
  }

  .language-icon::before,
  .language-icon::after {
    content: "";
    position: absolute;
    top: 50%;
    width: 1px;
    height: 20px;
    background-color: var(--silver);
    transform: translateY(-50%);
  }

  .language-icon::before {
    left: -10px;
  }

  .language-icon::after {
    right: -10px;
  }
}
</style>