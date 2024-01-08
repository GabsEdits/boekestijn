<template>
  <div class="container">
    <h1 class="slogan animating anim--fadeIn">{{ $t('mainarea.slogan.before') }} <br><span class="hard">{{
      $t('mainarea.slogan.hard') }}</span> {{ $t('mainarea.slogan.after') }}</h1>
    <p class="intro animating anim--fadeIn">{{ $t('mainarea.intro') }}
    <div class="br-ru"><br><br></div>
    </p>
    <router-link to="/join-us" class="join-us">{{
      $t("mainarea.joinus")
    }}</router-link>
    <br /><a class="scroll-down" href="#live-trucks">{{
      $t("mainarea.scrolldown")
    }}</a>
  </div>
  <TestDriveDesktop />
    <div class="video-wrapper">
    <video src="/Videos/intro.mp4" loop autoplay muted poster="/images/poster.webp">
      <track src="captions_en.vtt" kind="captions" srclang="en" label="A lot of cars driving really fast in a loop" />
    </video>
    <div class="overlay"></div>
  </div>
</template>

<script>
import TestDriveDesktop from './TestDriveDesktop.vue';
export default {
    watch: {
        "$i18n.locale": {
            immediate: true,
            handler(newLocale) {
                document.documentElement.lang = newLocale; // Update the lang attribute
            },
        },
    },
    components: { TestDriveDesktop }
};
</script>
