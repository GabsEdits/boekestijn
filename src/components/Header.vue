<template>
<header class="container">
      <h1>
          <a onclick="scrollToTop()" href="#top"><img src="/images/boekestijn-transport.svg" alt="Boekestijn Transport"></a>
          <sup class="md">🅫</sup>
      </h1>
      <p style="margin-right: 20%;" class="hide-on-mobile quick-office" v-html="$t('header.quickoffice')"></p>      
      <ul>
        <li>
          <a onclick="scrollToCall()" href="#footer" style="cursor: pointer;">{{ $t("header.callus") }} <br class="quick-number"><span class="quick-number">14114</span></a>
        </li>
        <li><a onclick="scrollToLocation()" href="#above-location" style="cursor: pointer" class="locationmobile">{{ $t("header.locations") }} <i class="fa fa-map-marker-alt smaller-icon"></i></a></li>
        <li class="dropdown">
          <a href="#dropdown" style="cursor: pointer" class="language-icon">{{ $t("header.language") }} <i class="fa fa-angle-down"></i></a>
          <div class="dropdown-content">
            <a href="#" @click.prevent="$i18n.locale = 'ru'">Русский</a>
            <a href="#" @click.prevent="$i18n.locale = 'ro'">Română</a>
            <a href="#" @click.prevent="$i18n.locale = 'en'">English</a>
          </div>
        </li>
      </ul>
    </header>
</template>