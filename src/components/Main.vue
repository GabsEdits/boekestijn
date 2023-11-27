<template>
  <div class="container">
    <h1
      class="slogan animating anim--fadeIn"
      v-html="$t('mainarea.slogan')"
    ></h1>
    <p class="intro animating anim--fadeIn" v-html="$t('mainarea.intro')"></p>
    <router-link to="/join-us" class="join-us">{{
      $t("mainarea.joinus")
    }}</router-link>
    <br /><a class="scroll-down" href="#live-trucks">{{
      $t("mainarea.scrolldown")
    }}</a>
    <div class="slider hide-on-mobile animating anim--fadeIn">
      <div class="slide-var hide-on-mobile hide-on-880" id="slide-1">
        <div class="rectangle"></div>
        <h2 class="test-drive">
          <i class="fa fa-truck-moving"></i> Test Drive
        </h2>
        <p class="varnita">{{ $t("testdrive.chisinau") }}</p>
        <div class="line"></div>
        <p class="days">
          <i class="fa fa-calendar-day"></i> {{ $t("testdrive.daychisinau") }}
        </p>
        <p class="time"><i class="fa fa-clock smaller-icon"></i> 14:00</p>
        <p class="address">
          <i class="fa fa-location-arrow smaller-icon"></i>
          {{ $t("testdrive.addresschisinau") }}
        </p>
        <p class="phone">22 815827</p>
        <p class="call-to-action">
          <a href="tel:+37377799783" style="color: #ffffff">{{
            $t("testdrive.callnow")
          }}</a>
        </p>
      </div>
      <div class="slide-bal hide-on-mobile hide-on-880" id="slide-1">
        <div class="rectangle"></div>
        <h2 class="test-drive">
          <i class="fa fa-truck-moving"></i> Test Drive
        </h2>
        <p class="varnita">{{ $t("testdrive.varnita") }}</p>
        <div class="line"></div>
        <p class="days">
          <i class="fa fa-calendar-day"></i>{{ $t("testdrive.daysvarnita") }}
        </p>
        <p class="time">
          <i class="fa fa-clock smaller-icon"></i> 09:00 - 12:00
        </p>
        <p class="address">
          <i class="fa fa-location-arrow smaller-icon"></i>
          {{ $t("testdrive.addressvarnita") }}
        </p>
        <p class="phone">0788 30 116</p>
        <p class="phone">0777 99 783</p>
        <p class="call-to-action">
          <a href="tel:+37377799783" style="color: #ffffff">{{
            $t("testdrive.callnow")
          }}</a>
        </p>
      </div>
      <div class="slide-kiv hide-on-mobile hide-on-880" id="slide-1">
        <div class="rectangle"></div>
        <h2 class="test-drive">
          <i class="fa fa-truck-moving"></i> Test Drive
        </h2>
        <p class="varnita">{{ $t("testdrive.balti") }}</p>
        <div class="line"></div>
        <p class="days">
          <i class="fa fa-calendar-day"></i> {{ $t("testdrive.daysbalti") }}
        </p>
        <p class="time">
          <i class="fa fa-clock smaller-icon"></i> 11:00 - 12:00
        </p>
        <p class="address">
          <i class="fa fa-location-arrow smaller-icon"></i>
          {{ $t("testdrive.addressbalti") }}
        </p>
        <p class="phone">78 848 000</p>
        <p class="call-to-action">
          <a href="tel:+37377799783" style="color: #ffffff">{{
            $t("testdrive.callnow")
          }}</a>
        </p>
      </div>
    </div>
  </div>
  <div class="video-wrapper">
    <video
      src="/Videos/intro.mp4"
      loop
      autoplay
      muted
      poster="/images/poster.webp"
    >
      <track
        src="captions_en.vtt"
        kind="captions"
        srclang="en"
        label="A lot of cars driving really fast in a loop"
      />
    </video>
    <div class="overlay"></div>
  </div>
</template>

<script>
export default {
  watch: {
    "$i18n.locale": {
      immediate: true,
      handler(newLocale) {
        document.documentElement.lang = newLocale; // Update the lang attribute
      },
    },
  },
};
</script>
