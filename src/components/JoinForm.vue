<template>
  <div>
    <div class="popup-overlay">
      <div class="popup-content">
        <a @click="closePopup" class="close-button">×</a>
        <form ref="myForm" @submit.prevent="sendMessageToTelegram">
          <h1>{{ $t("mainarea.joinus") }}</h1>
          <div class="form-label">
            <p id="form-desc">{{ $t("form.desc") }}</p>
            <br />
            <p>
              <small id="note"
                ><b>{{ $t("form.note") }} *</b></small
              >
            </p>
          </div>
          <div class="form-group">
            <label for="name">{{ $t("form.name") }} *</label>
            <input
              type="text"
              id="name"
              required
              v-model="name"
              :placeholder="$t('form.name')"
            />
          </div>
          <div class="form-group">
            <label for="tel">{{ $t("form.tel") }} *</label>
            <input
              type="tel"
              id="tel"
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
              required
              v-model="exp"
              placeholder="0, 1, 2..."
            />
          </div>
          <div class="form-group">
            <label for="self">{{ $t("form.about") }}</label>
            <textarea id="self" rows="3" v-model="self"></textarea>
          </div>
          <div id="success" class="alert alert-success mt-3" role="alert"></div>
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.popup-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--pop-up-overlay);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2000;

  @media screen and (max-width: 500px) {
    display: block;
  }

  .popup-content {
    background-color: var(--white);
    padding: 5px;
    border-radius: 8px;
    position: relative;
    max-width: 100%;
    max-height: 100%;
    overflow: auto;

    @media (prefers-color-scheme: dark) {
      background-color: #1a1a1a;
    }

    @media (max-width: 500px) {
      max-width: 95%;
    }
  }

  .close-button {
    position: absolute;
    top: 10px;
    right: 15px;
    border-radius: 50%;
    background: none;
    border: none;
    cursor: pointer;
    font-size: 20px;
    color: var(--link-gray);
  }

  form {
    max-width: 500px;
    min-width: 500px;
    margin: 0 auto;
    padding: 20px;
    border-radius: 8px;
  }

  .form-group {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 20px;
  }

  .form-label {
    font-weight: normal;
    margin-bottom: 10px;
    text-align: center;
  }

  h1 {
    font-size: 25px;
    margin-bottom: 5px;
  }

  #form-desc {
    margin-bottom: -15px;
  }

  #note {
    margin-top: 0 !important;
    font-size: 12px;
  }

  input:not([type="submit"]),
  textarea {
    width: 100%;
    padding: 0.625rem;
    border: 0.0625rem solid #ddd;
    border-radius: 0.25rem;
    transition: border-color 0.2s ease-in-out;
    resize: none;
    font-family: "Inter", sans-serif;

    @media (prefers-color-scheme: dark) {
      background-color: #1a1a1a;
      color: var(--white);
      border-color: #333;
    }
  }

  .form-control:focus {
    outline: none;
    border-color: #3498db;
  }

  button[type="submit"] {
    background-color: var(--boek-green-1);
    color: var(--black);
    padding: 0.625rem 1.25rem;
    border: none;
    border-radius: 0.25rem;
    cursor: pointer;
    transition:
      color 0.2s,
      background-color 0.2s ease-in-out;

    &:hover {
      background-color: var(--boek-green-2);
      color: var(--white);
    }
  }
}
</style>

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
          <b>Join Us Form (soferii.md)</b>
          <b>Sender's Information:</b>
            - <b>Name:</b> ${this.name}
            - <b>Phone Number:</b> ${this.tel}
            - <b>Email:</b> ${this.email}
            - <b>Experience:</b> ${this.exp}
            - <b>About me:</b> ${this.self}
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
