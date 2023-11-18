<template>
     <div class="container">
    <h1 class="slogan animating anim--fadeIn" v-html="$t('mainarea.slogan')"></h1>
    <p class="intro animating anim--fadeIn" v-html="$t('mainarea.intro')"></p>
    <a class="join-us" @click="openPopup" href="#form">{{ $t("mainarea.joinus") }}</a>
    <div v-if="isPopupOpen" class="popup-overlay">
      <div class="popup-content">
      <a @click="closePopup" class="close-button">×</a>
      <form ref="myForm" @submit.prevent="sendMessageToTelegram" class="form-container">
    <h1 class="form-title">{{ $t("mainarea.joinus") }}</h1>
    <div class="form-label">
      <p id="form-desc">{{ $t("form.desc") }}</p>
      <br><p><sup id="form-sup"><b>{{ $t("form.note") }}</b></sup></p>
    </div>
    <div class="form-group">
      <label for="name">{{ $t("form.name") }}</label>
      <input type="text" id="name" class="form-control" required v-model="name" placeholder="Сергей Петров">
    </div>
    <div class="form-group">
      <label for="tel">{{ $t("form.tel") }}</label>
      <input type="tel" id="tel" class="form-control" required v-model="tel" placeholder="+373xxxxxxxx">
    </div>
    <div class="form-group">
      <label for="email">{{ $t("form.email") }}</label>
      <input type="email" id="email" class="form-control" required v-model="email" placeholder="example@example.com">
    </div>
    <div class="form-group">
      <label for="exp">{{ $t("form.exp") }}</label>
      <input type="text" id="exp" class="form-control" required v-model="exp" placeholder="0, 1, 2...">
    </div>
    <div class="form-group">
      <label for="self">{{ $t("form.about") }}</label>
      <textarea id="self" class="form-control" rows="3" v-model="self"></textarea>    </div>
    <div id="success" class="alert alert-success mt-3" role="alert"></div>
    <button type="submit" class="btn btn-primary mt-4">Submit</button>
  </form>
        </div>
    </div>
    <br><a class="scroll-down" href="#live-trucks">{{ $t("mainarea.scrolldown") }}</a>
    <div class="slider hide-on-mobile animating anim--fadeIn">
      <div class="slide-var hide-on-mobile hide-on-880" id="slide-1">
        <div class="rectangle"></div>
        <h2 class="test-drive"><i class="fa fa-truck-moving"></i> Test Drive</h2>
        <p class="varnita">{{ $t("testdrive.chisinau") }}</p>
        <div class="line"></div>
        <p class="days"><i class="fa fa-calendar-day"></i> {{ $t("testdrive.daychisinau") }}</p>
        <p class="time"><i class="fa fa-clock smaller-icon"></i> 14:00</p>
        <p class="address"><i class="fa fa-location-arrow smaller-icon"></i> {{ $t("testdrive.addresschisinau") }}</p>
        <p class="phone">22 815827</p>
            <p class="call-to-action"><a href="tel:+37377799783" style="color: #ffffff;">{{ $t("testdrive.callnow") }}</a></p>
      </div>
      <div class="slide-bal hide-on-mobile hide-on-880" id="slide-1">
        <div class="rectangle"></div>
        <h2 class="test-drive"><i class="fa fa-truck-moving"></i> Test Drive</h2>
        <p class="varnita">{{ $t("testdrive.varnita") }}</p>
        <div class="line"></div>
        <p class="days"><i class="fa fa-calendar-day"></i>{{ $t("testdrive.daysvarnita") }}</p>
        <p class="time"><i class="fa fa-clock smaller-icon"></i> 09:00 - 12:00</p>
        <p class="address"><i class="fa fa-location-arrow smaller-icon"></i> {{ $t("testdrive.addressvarnita") }}</p>
        <p class="phone">0788 30 116</p>
        <p class="phone">0777 99 783</p>
        <p class="call-to-action"><a href="tel:+37377799783" style="color: #ffffff;">{{ $t("testdrive.callnow") }}</a></p>
      </div>
      <div class="slide-kiv hide-on-mobile hide-on-880" id="slide-1">
        <div class="rectangle"></div>
        <h2 class="test-drive"><i class="fa fa-truck-moving"></i> Test Drive</h2>
        <p class="varnita">{{ $t("testdrive.balti") }}</p>
        <div class="line"></div>
        <p class="days"><i class="fa fa-calendar-day"></i> {{ $t("testdrive.daysbalti") }}</p>
        <p class="time"><i class="fa fa-clock smaller-icon"></i> 11:00 - 12:00</p>
        <p class="address"><i class="fa fa-location-arrow smaller-icon"></i> {{ $t("testdrive.addressbalti") }}</p>
        <p class="phone">78 848 000</p>
        <p class="call-to-action"><a href="tel:+37377799783" style="color: #ffffff;">{{ $t("testdrive.callnow") }}</a></p>
      </div>
    </div>
    </div>
    <div class="video-wrapper">
        <video src="/Videos/intro.mp4" loop autoplay muted poster="/images/poster.webp">
          <track src="captions_en.vtt" kind="captions" srclang="en" label="A lot of cars driving really fast in a loop">
        </video>
        <div class="overlay"></div>
       </div>
</template>

<script>
import axios from 'axios';

export default {
  watch: {
    '$i18n.locale': {
      immediate: true,
      handler(newLocale) {
        document.documentElement.lang = newLocale; // Update the lang attribute
      },
    },
  },
  mounted() {
    document.addEventListener('keydown', this.handleEscKey);
  },

  beforeDestroy() {
    document.removeEventListener('keydown', this.handleEscKey);
  },
  data() {
    return {
      isPopupOpen: false,
      name: '',
      tel: '',
      email: '',
      exp: '',
      self: '',
    };
  },
  methods: {
    async sendMessageToTelegram() {
      try {
        const TOKEN = import.meta.env.VITE_TELEGRAM_TOKEN;
        const CHAT_ID = '-1001627354708';
        const URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

        const message = `
          <b>Заявка с сайта soferii.md</b>
          <b>Sender:</b> ${this.name}
          <b>GSM:</b> ${this.tel}
          <b>Email:</b> ${this.email}
          <b>Experience:</b> ${this.exp}
          <b>About me:</b> ${this.self}
        `;

        const response = await axios.post(URI_API, {
          chat_id: CHAT_ID,
          parse_mode: 'html',
          text: message,
        });

        console.log('Telegram API response:', response.data);

        this.name = '';
        this.tel = '';
        this.email = '';
        this.exp = '';
        this.self = '';

        this.isPopupOpen = false; // Close the popup after successful submission
      } catch (error) {
        console.error('Error sending message:', error);
      }
    },
    openPopup() {
      this.isPopupOpen = true;
    },
    closePopup() {
      this.isPopupOpen = false;
    },
    handleEscKey(event) {
      if (event.key === 'Escape') {
        this.closePopup();
      }
    },
  },
};
</script>
