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
  name: 'LiveTrucks',
  data() {
    return {
      truckData: '',
    };
  },
  mounted() {
    this.fetchTruckData();
  },
  methods: {
    fetchTruckData() {
      fetch('https://api.boekestijntransport.com:50125/api/get_trucks')
        .then(response => response.json())
        .then(data => {
          this.truckData = data['data'];
          console.log('data: ' + this.truckData);
        });
    },
  },
};
</script>
