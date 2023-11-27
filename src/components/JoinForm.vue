<template>
  <div>
    <div class="popup-overlay">
      <div class="popup-content">
        <a @click="closePopup" class="close-button">×</a>
        <form
          ref="myForm"
          @submit.prevent="sendMessageToTelegram"
          class="form-container"
        >
          <h1 class="form-title">{{ $t("mainarea.joinus") }}</h1>
          <div class="form-label">
            <p id="form-desc">{{ $t("form.desc") }}</p>
            <br />
            <p>
              <sup id="form-sup"
                ><b>{{ $t("form.note") }} *</b></sup
              >
            </p>
          </div>
          <div class="form-group">
            <label for="name">{{ $t("form.name") }} *</label>
            <input
              type="text"
              id="name"
              class="form-control"
              required
              v-model="name"
              placeholder="Сергей Петров"
            />
          </div>
          <div class="form-group">
            <label for="tel">{{ $t("form.tel") }} *</label>
            <input
              type="tel"
              id="tel"
              class="form-control"
              required
              v-model="tel"
              placeholder="+373xxxxxxxx"
            />
          </div>
          <div class="form-group">
            <label for="email">{{ $t("form.email") }} *</label>
            <input
              type="email"
              id="email"
              class="form-control"
              required
              v-model="email"
              placeholder="example@example.com"
            />
          </div>
          <div class="form-group">
            <label for="exp">{{ $t("form.exp") }} *</label>
            <input
              type="text"
              id="exp"
              class="form-control"
              required
              v-model="exp"
              placeholder="0, 1, 2..."
            />
          </div>
          <div class="form-group">
            <label for="self">{{ $t("form.about") }}</label>
            <textarea
              id="self"
              class="form-control"
              rows="3"
              v-model="self"
            ></textarea>
          </div>
          <div id="success" class="alert alert-success mt-3" role="alert"></div>
          <button type="submit" class="btn btn-primary mt-4">Submit</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  mounted() {
    document.addEventListener("keydown", this.handleEscKey);
  },

  beforeDestroy() {
    document.removeEventListener("keydown", this.handleEscKey);
  },
  data() {
    return {
      name: "",
      tel: "",
      email: "",
      exp: "",
      self: "",
    };
  },
  methods: {
    async sendMessageToTelegram() {
      try {
        const TOKEN = import.meta.env.VITE_TELEGRAM_TOKEN;
        const CHAT_ID = "-1001627354708";
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
          parse_mode: "html",
          text: message,
        });

        console.log("Telegram API response:", response.data);

        this.name = "";
        this.tel = "";
        this.email = "";
        this.exp = "";
        this.self = "";

        this.$router.push("/");
      } catch (error) {
        console.error("Error sending message:", error);
      }
    },
    closePopup() {
      this.$router.push("/");
    },
    handleEscKey(event) {
      if (event.key === "Escape") {
        this.closePopup();
      }
    },
  },
};
</script>
