<template>
  <div id="video-cell">
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
  </div>
  <section id="main-part">
    <div class="container">
      <div id="text-part">
        <h1 class="slogan">
          {{ $t("mainarea.slogan.before") }} <br /><span class="hard">{{
            $t("mainarea.slogan.hard")
          }}</span>
          {{ $t("mainarea.slogan.after") }}
        </h1>
        <p class="intro animating">{{ $t("mainarea.intro") }}</p>
        <router-link to="/join-us" class="join-us"
          ><span class="material-symbols-rounded"> rocket_launch </span>
          {{ $t("mainarea.joinus") }}</router-link
        >
        <a class="scroll-down" href="#data"
          ><span class="material-symbols-rounded"> arrow_downward </span>
          {{ $t("mainarea.scrolldown") }}</a
        >
      </div>
    </div>
    <div id="video-grid" class="animating anim--fadeIn">
      <TestDrive />
    </div>
  </section>
</template>

<script>
import TestDrive from "./TestDrive.vue";

export default {
  components: {
    TestDrive,
  },
  watch: {
    "$i18n.locale": {
      immediate: true,
      handler(newLocale) {
        document.documentElement.lang = newLocale;
      },
    },
  },
};
</script>

<style lang="scss">
#main-part {
  display: grid;
  grid-template-columns: 80% auto;
  margin-bottom: 200px;

  @media screen and (max-width: 1653px) {
    grid-template-columns: 1fr;
    margin-bottom: 0px;
  }
}

#text-part {
  margin-top: 30px;
  width: 100%;
  display: grid;
  place-items: center;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  gap: 1rem;

  @media screen and (max-width: 1653px) {
    margin-top: -20px;
  }
}

#video-cell {
  float: left;
  margin-top: 100px;
  width: 1478px;
  height: 184.5px;

  @media screen and (min-width: 1653px) {
    height: 845.566px;
  }

  z-index: -5;
  position: absolute;

  @media screen and (max-width: 1858px) {
    width: 80%;
  }

  @media screen and (max-width: 1653px) {
    width: 100%;
    left: 50%;
    transform: translate(-50%, -50%);
    right: 50%;

    video {
      border-radius: 0 0 40px 40px;
    }

    @media screen and (max-width: 814px) {
      margin-top: 0;
    }
  }

  video {
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 40px;
    object-fit: cover;

    @media screen and (max-width: 814px) {
      height: calc(1000% - 1020px);
    }
  }
}

.intro {
  text-align: center;
  font-size: 16.5px;
  font-weight: 500;
  background-color: #171717c1;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  padding: 1.25rem;
  border-radius: 20px;
  color: var(--white);
  max-width: 55%;

  @media screen and (max-width: 1653px) {
    max-width: 100%;
  }
}

html[lang="ru"] .intro {
  margin: 20px;
}

html[lang="ro"] .intro {
  margin: 20px;
}

.hard {
  background-color: #000000cb;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-radius: 10px;
}

.slogan {
  text-align: center;
  margin-top: 9.2%;
  margin-left: 2%;
  font-size: 500%;
  font-weight: 900;
  color: var(--white);

  @media screen and (max-width: 1653px) {
    font-size: 250%;
  }
}

.join-us {
  padding: 0.75rem 1.5rem;
  background-color: var(--white);
  color: var(--hover-link-gray);
  font-size: 18px;
  border: none;
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
  padding: 0.9375rem 2.5rem;
  border-radius: 70px;
  background-color: #00000098;
  backdrop-filter: blur(20px);
  color: var(--white);
  border: solid 2px var(--boek-green-1);
  font-size: 16px;
  text-align: center;
  transition: background-color 0.5s;
  cursor: pointer;

  &:hover {
    color: var(--white);
    background-color: var(--boek-green-1);
  }
}

@media screen and (min-width: 48rem) and (max-width: 1643px) {
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

  .scroll-down {
    background-color: var(--scroll-down-back);
    margin-left: 0;
  }
}

@media screen and (min-width: 48rem) and (max-width: 1653px) {
  video {
    height: calc(1000% - 1200px) !important;
    width: 100%;
  }

  .intro {
    width: 100% !important;
  }
}

/* @media screen and (max-width: 47.9375rem) {
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
*/
</style>
