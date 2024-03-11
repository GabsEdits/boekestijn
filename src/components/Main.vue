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

<style lang="scss">
.video-wrapper {
  position: right;
  width: 100%;
  height: 25rem;
  margin: 0 auto;
  margin-bottom: -37.5rem;
  overflow: hidden;

  video {
    object-fit: cover;
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    min-width: 100%;
    max-width: 100%;
    min-height: 10%;
    width: auto;
    height: 100% !important;
    z-index: -2;
    clear: both;
  }
}

.intro {
  margin-top: 1%;
  text-align: justify;
  color: var(--white);
  margin-left: 2%;
  line-height: 1.5;
  max-width: calc(25% - 1.5625rem);
}

.hard {
  background-color: black;
  border-radius: 10px;
}

.slogan {
  text-align: center;
  margin-top: 9.2%;
  margin-left: 2%;
  font-size: 500%;
  text-align: justify;
  font-weight: 900;
  color: var(--white);
}

.join-us {
  display: inline-block;
  padding: 0.75rem 1.5rem;
  background-color: var(--white);
  color: var(--hover-link-gray);
  font-size: 18px;
  border: none;
  margin-top: 30px;
  margin-left: 10%;
  border-radius: 10px;
  transition:
    background-color 0.3s,
    color 0.3s;
  cursor: pointer;

  &:hover {
  background-color: var(--black);
  color: #fff;
}
}

.scroll-down {
  padding: 15px;
  border-radius: 70px;
  background-color: var(--scroll-down);
  color: var(--white);
  border: solid 2px var(--boek-green-1);
  margin-left: 150px;
  font-size: 16px;
  position: absolute;
  margin-top: 30px;
  transition: background-color 0.5s;
  cursor: pointer;
  width: 200px;
  text-align: center;

  &:hover {
  color: var(--white);
  background-color: var(--boek-green-1);
}
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: calc(100% - 6.1875rem);
  background: linear-gradient(
    180deg,
    rgba(0, 15, 14, 0.6) 32.55%,
    rgba(0, 35, 33, 0.1) 100%
  );
  z-index: -2;
}

@media screen and (min-width: 48rem) and (max-width: 102.6875rem) {
  .video-wrapper {
    height: 0.0625rem !important;
    margin: -18.75rem !important;
    overflow: hidden;

    video {
      object-fit: cover;
      width: 100%;
      height: 140% !important;
      margin-top: -4.375rem;
    }

    .overlay {
      display: none;
    }
  }
  .intro {
    max-width: calc(60% - 60px);
    background-color: var(--intro-back);
    padding: 0.8125rem;
    font-size: 0.9375rem;
    border-radius: 0.5625rem;
  }
  .slogan {
    max-width: calc(70% - 70px);
  }
  .join-us {
    margin-left: 18.75rem !important;
  }
  .scroll-down {
    background-color: var(--scroll-down-back);
  }
}


@media screen and (min-width: 48rem) {
  .video-wrapper {
    height: 50rem !important;
  }
  video {
    height: calc(1000% - 1000px) !important;
    width: 100%;
  }
  .intro {
    width: 100% !important;
  }
}

@media screen and (max-width: 47.9375rem){
  
  .container {
    width: 100%;
    max-width: 100%;
    margin: 0 auto;
    padding: 10px;
    box-sizing: border-box;
    text-align: center;
    position: relative;
    margin-bottom: 20px;

    .join-us {
      position: absolute;
      display: flex;
      top: 450px !important;
      left: 40%;
      transform: translate(-50%, -50%);
      z-index: 1;
    }
  }

  .video-wrapper {
    width: 100% !important;
    height: 100% !important;
    position: relative;
    max-width: 600px;
    padding-bottom: 190%;
    margin-top: -27% !important;
    margin-bottom: 30px !important;

    video {
      position: absolute !important;
      left: 50% !important;
      transform: translate(-50%, -50%) !important;
      min-width: 100% !important;
      min-height: 100% !important;
      width: 100% !important;
      height: 100% !important;
      object-fit: cover !important;
    }

    .overlay {
      height: 90% !important;
    }
  }

  .hard {
    z-index: -1;
  }

  .intro {
    margin-left: 5% !important;
    margin-right: 5%;
    margin-top: 200px !important;
    line-height: 1.5 !important;
    font-size: 85%;
    max-width: calc(100% - 40px) !important;
    color: var(--white);
    position: absolute;
    left: 0;
    z-index: 1;
    display: flex;
  }

  .slogan {
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: 100px !important;
    transform: translate(-50%, -50%);
    font-size: 182% !important;
    min-width: 250px;
    font-weight: 900 !important;
    color: var(--white);
    z-index: 1;
  }
}
</style>