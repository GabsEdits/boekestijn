<template>
  <section id="live-trucks">
    <div class="container">
      <div class="content-trucks">
        <h2>{{ $t("livetrucks.title") }}</h2>
        <p>{{ $t("livetrucks.desc") }}</p>
        <div id="counter_up">
          <div id="myData">{{ truckData }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "LiveTrucks",
  data() {
    return {
      truckData: "",
    };
  },
  mounted() {
    this.fetchTruckData();
  },
  methods: {
    fetchTruckData() {
      fetch("https://api.boekestijntransport.com:50125/api/get_trucks")
        .then((response) => response.json())
        .then((data) => {
          if (data && data.data) {
            this.truckData = data.data;
          } else {
            this.truckData = "900";
          }
          console.log("data: " + this.truckData);
        })
        .catch((error) => {
          console.error("Error fetching truck data:", error);
          this.truckData = "900";
        });
    },
  },
};
</script>

<style lang="scss">
#live-trucks {
  background-color: #161c24;
  color: var(--white);
  padding: 80px 0;
  padding-top: 40px;
  text-align: center;
  background-image: url("/images/live-trucks.webp");
  background-position: 50%;
  background-size: cover;
  animation: fadeInAnimation ease 1s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;

  @media screen and (max-width: 767px) {
    background-position: 45% !important;
  }

  h2 {
    font-size: 36px;
    margin-bottom: 20px;
    color: #fff;
  }

  p {
    font-size: 20px;
    margin-bottom: 40px;
  }

  #myData {
    margin: 0 auto;
    padding: 5px 11px;
    border-radius: 5px;
    font-size: 30px;
    font-weight: 900;
    background-color: var(--my-data);
    display: inline-block;
  }

  .content-trucks {
    margin-right: 500px;

    @media screen and (max-width: 767px) {
      margin: 0 auto !important;
    }
  }
}
</style>
