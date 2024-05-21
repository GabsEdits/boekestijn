<template>
  <div>
    <div class="popup-overlay">
      <div class="popup-content" id="tell-a-friend">
        <h2>{{ $t("tellFriend.title") }}</h2>
        <small>{{ $t("tellFriend.desc") }}</small>
        <a @click="closePopup" class="close-button">×</a>
        <form class="forms-container" @submit.prevent="sendMessageToTelegram">
          <section>
            <h3>{{ $t("tellFriend.friend") }}</h3>
            <div class="form-field">
              <label for="friend-name" class="form-label"
                >{{ $t("form.name") }} *</label
              >
              <input
                type="text"
                id="friend-name"
                v-model="friendName"
                required
              />
            </div>
            <div class="form-field">
              <label for="friend-email" class="form-label">{{
                $t("form.email")
              }}</label>
              <input type="email" id="friend-email" v-model="friendEmail" />
            </div>
            <div class="form-field">
              <label for="friend-phone" class="form-label"
                >{{ $t("form.tel") }} *</label
              >
              <input
                type="tel"
                id="friend-phone"
                required
                v-model="friendPhone"
              />
            </div>
            <div class="form-field">
              <label for="friend-comment" class="form-label">{{ $t("tellFriend.comment") }}</label>
              <textarea id="friend-comment" v-model="friendComment"></textarea>
            </div>
          </section>

          <section>
            <h3>{{ $t("tellFriend.own") }}</h3>
            <div class="form-field">
              <label for="your-name">{{ $t("form.name") }} *</label>
              <input type="text" id="your-name" required v-model="yourName" />
            </div>
            <div class="form-field">
              <label for="your-email" class="form-label">{{
                $t("form.email")
              }}</label>
              <input type="email" id="your-email" v-model="yourEmail" />
            </div>
            <div class="form-field">
              <label for="your-phone" class="form-label"
                >{{ $t("form.tel") }} *</label
              >
              <input type="tel" required id="your-phone" v-model="yourPhone" />
            </div>
            <div class="form-field">
              <label for="your-comment" class="form-label">{{ $t("tellFriend.comment") }}</label>
              <textarea id="your-comment" v-model="yourComment"></textarea>
            </div>
          </section>
          <Checkbox />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
#tell-a-friend {
  padding: 1.5rem;

  @media screen and (max-width: 914px) {
    height: 600px;
  }

  h2 {
    font-size: 1.5rem;
    font-weight: 900;
    margin-bottom: 1rem;
    text-align: center;
  }

  .forms-container {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));

    @media screen and (max-width: 914px) {
      grid-template-columns: 1fr;
    }

    gap: 1rem;
  }

  section {
    border: 2px solid #e5e7eb;
    border-radius: 0.75rem;
    padding: 1.5rem;

    h3 {
      font-size: 1.125rem;
      margin-bottom: 0.625rem;
      font-weight: 800;
    }

    .form-field {
      margin-bottom: 1rem;

      label {
        font-weight: 600;
        margin-top: 0.5rem;
        font-size: 0.9rem;
      }

      input,
      textarea {
        margin-top: 0.25rem;
        width: 100%;
        border: 0.0625rem solid #d4d4d4;
        padding: 10px;
        border-radius: 0.375rem;
        font-size: 0.875rem;
        line-height: 1.25rem;
        resize: none;
      }
    }
  }

  small {
    font-weight: 500;
    display: block;
    max-width: 700px;
    text-align: center;
    margin: 0 auto;
    margin-bottom: 1rem;
    color: #202020;
  }

  button[type="submit"] {
    padding: 0.75rem;
    background-color: var(--boek-green-1);
    border-radius: 0.375rem;
    margin-top: 1rem;
    text-align: center;
    width: 200px;
    margin-left: auto;
    border: none;
    margin-right: auto;
    font-size: 15px;
    font-weight: 800;
    cursor: pointer;
    display: block;
    grid-column: span 2;

    @media screen and (max-width: 914px) {
      grid-column: span 1;
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
      friendName: "",
      friendEmail: "",
      friendPhone: "",
      friendComment: "",
      yourName: "",
      yourEmail: "",
      yourPhone: "",
      yourComment: "",
    };
  },

  methods: {
    async sendMessageToTelegram() {
      try {
        const TOKEN = import.meta.env.VITE_TELEGRAM_TOKEN;
        const CHAT_ID = "-1001627354708";
        const URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

        const message = `
          <b>Tell a Friend (soferii.md)</b>
          <b>Sender:</b>
            - <b>Name:</b> ${this.yourName}
            - <b>Email:</b> ${this.yourEmail}
            - <b>Phone Number:</b> ${this.yourPhone}
            - <b>Comment:</b> ${this.yourComment}
          <b>Friend:</b>
            - <b>Name:</b> ${this.friendName}
            - <b>Email:</b> ${this.friendEmail}
            - <b>Phone Number:</b> ${this.friendPhone}
            - <b>Comment:</b> ${this.friendComment}
        `;

        const response = await axios.post(URI_API, {
          chat_id: CHAT_ID,
          parse_mode: "html",
          text: message,
        });

        console.log("Telegram API response:", response.data);

        this.friendName = "";
        this.friendEmail = "";
        this.friendPhone = "";
        this.friendCV = null;
        this.yourName = "";
        this.yourEmail = "";
        this.yourPhone = "";
        this.yourComment = "";

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
