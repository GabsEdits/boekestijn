<template>
  <header class="container">
    <h1>
      <a onclick="scrollToTop()" href="#top"
        ><img src="/images/boekestijn-transport.svg" alt="Boekestijn Transport"
      /></a>
      <sup id="md">🅫</sup>
    </h1>
    <small style="margin-right: 20%" class="hide-on-mobile quick-office">
      {{ $t("header.quickoffice") }} <br />
      {{ $t("header.quickofficebr") }}:
      <i
        ><a
          href="https://goo.gl/maps/Ydmkt3j1Z1PnpCM1A?coh=178571&amp;entry=tt"
          >{{ $t("locations.main") }}</a
        ></i
      ></small
    >
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
          <span class="material-symbols-rounded" style="font-size: 18px">
            location_on
          </span></a
        >
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

  @media (max-width: 767px) {
    flex-direction: column !important;
    justify-content: center !important;
    height: 7.5rem !important;
    padding: 1.25rem !important;
    width: 100% !important;
    top: 0 !important;
    position: fixed !important;
    z-index: 2000 !important;

    h1 {
      margin-bottom: 0.625rem;
    }

    nav {
      margin-top: 1.25rem;
    }
  }

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

  #md {
    font-size: 35px;
  }
}

.dropdown {
  position: relative;

  .dropdown-content {
    display: none;
    position: absolute;
    top: 100%;
    left: -13px;
    background-color: var(--white);
    box-shadow: 0px 4px 28px 0px rgba(0, 0, 0, 0.25);
    padding: 3px;
    margin: 0;
    list-style: none;
    border: 1px solid #ddd;
    border-radius: 8px;
    margin-top: 0px;
    transition: all 3s;

    .divider {
      border-top: 1px solid #ccc;
      margin: 4px 20%;
    }

    a {
      display: block;
      padding: 10px;
      color: var(--hover-link-gray);
      text-decoration: none;
      text-align: center;

      &:last-child {
        margin-bottom: 4px;
      }

      &:hover {
        background-color: var(--test-drive-mobile-background-2);
      }
    }

    h4 {
      margin: 8px;
      text-align: center;
      font-size: 15px;
      font-weight: 800;
    }
  }

  &:hover .dropdown-content {
    display: block;
  }
}

.quick-call {
  margin-top: 500px;
  font-size: 16px;
  font-weight: 600;
  color: var(--white);

  a {
    color: var(--quick-call-color) !important;
  }
}

@media screen and (min-width: 48rem) and (max-width: 79.9375rem) {
  .quick-office {
    display: none;
  }
}

@media screen and (min-width: 79.6875rem) and (max-width: 91rem) {
  .md {
    display: none;
  }

  header h1 {
    margin-top: 0.625rem;
  }
}

@media screen and (min-width: 768px) {
  .quick-call {
    margin-top: 50rem !important;
  }
}
</style>
