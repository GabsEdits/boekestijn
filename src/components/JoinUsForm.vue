<template>
  <div class="popup-container" v-if="isOpen">
    <div class="popup-content">
      <div class="container mt-0 pt-5 bp-5">
        <div class="col-md-6 offest-md-3">
          <form id="tg">
            <div class="form-group">
              <h1 style="color: black">FORM BOEKESTIJN</h1>
              <div class="form-label">
                <b>Required to fill in the field*</b>
              </div>
              <label class="form-label">First and last name*</label>
              <input
                type="text"
                name="name"
                required
                id="name"
                class="form-control"
                placeholder="Сергей Петров"
              />
            </div>
            <!-- /.form-group -->
            <div class="form-group">
              <label class="form-label">GSM number*</label>
              <input
                type="tel"
                name="tel"
                required
                id="tel"
                class="form-control"
                placeholder="+373xxxxxxxx"
              />
            </div>
            <!-- /.form-group -->
            <div class="form-group">
              <label class="form-label">Email*</label>
              <input
                type="email"
                name="email"
                required
                id="email"
                class="form-control"
                placeholder="example@gmail.com"
              />
            </div>
            <!-- /.form-group -->
            <div class="form-group">
              <label class="form-label"
                >Experience category CE (how many years)<a
                  style="color: red"
                ></a
              ></label>
              <input
                type="text"
                name="exp"
                required
                id="exp"
                class="form-control"
                placeholder="0, 1, 2..."
              />
            </div>
            <div class="form-group">
              <label class="form-label">About me (optional)</label>
              <textarea
                type="text"
                name="self"
                class="form-control"
                cols="auto"
                rows="3"
              ></textarea>
            </div>
            <!-- /.form-group -->
            <div
              id="success"
              class="alert alert-success mt-3"
              role="alert"
              style="display: none"
            ></div>

            <button type="submit" class="btn btn-primary mt-4">Submit</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const TOKEN = "5421317760:AAFDjJ8zyiVNLKezNM8hKz3FtLPyOOsT7OE";
const CHAT_ID = "-1001627354708";
const URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;
const success = document.getElementById("success");

document.getElementById("tg").addEventListener("submit", function (e) {
  e.preventDefault();

  let message = `<b>Заявка с сайта soferii.md</b>\n`;
  message += `<b>Sender: </b> ${this.name.value}\n`;
  message += `<b>GSM: </b> ${this.tel.value}\n`;
  message += `<b>Email: </b> ${this.email.value}\n`;
  message += `<b>Experience: </b> ${this.exp.value}\n`;
  message += `<b>About me: </b> ${this.self.value}`;

  axios
    .post(URI_API, {
      chat_id: CHAT_ID,
      parse_mode: "html",
      text: message,
    })
    .then((res) => {
      this.name.value = "";
      this.tel.value = "";
      this.email.value = "";
      this.exp.value = "";
      this.self.value = "";
      success.innerHTML = "Message sent! We will contact you shortly.";
      success.style.display = "block";
    })
    .catch((err) => {
      console.warn(err);
    })
    .finally(() => {
      console.log("Конец");
    });
});
</script>

<script>
export default {
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    openPopup() {
      this.isOpen = true;
    },
    closePopup() {
      this.isOpen = false;
    },
  },
};
</script>
