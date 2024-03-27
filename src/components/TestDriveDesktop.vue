<template>
  <div class="slider hide-on-mobile animating anim--fadeIn">
    <div class="grid-container">
      <div
        v-for="item in testDriveData"
        :key="item.id"
        class="slide hide-on-mobile hide-on-880"
      >
        <div class="rectangle"></div>
        <h2 class="test-drive">
          <i class="fa fa-truck-moving"></i> Test Drive
        </h2>
        <p class="varnita">{{ item.location }}</p>
        <hr />
        <p class="days">
          <span class="material-symbols-rounded smaller-icon"> event </span>
          {{ item.days }}
        </p>
        <p class="time">
          <span class="material-symbols-rounded smaller-icon"> schedule </span
          >{{ item.time }}
        </p>
        <p class="address">
          <span class="material-symbols-rounded smaller-icon">pin_drop</span>
          {{ item.address }}
        </p>
        <p class="phone">{{ item.phone }}</p>
        <p class="call-to-action">
          <a :href="'tel:' + item.phoneNumber" style="color: #ffffff">{{
            $t("testdrive.callnow")
          }}</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      testDriveData: [
        {
          id: "1",
          location: this.$t("testdrive.chisinau"),
          days: this.$t("testdrive.daychisinau"),
          time: "14:00",
          address: this.$t("testdrive.addresschisinau"),
          phone: "22 815827",
          phoneNumber: "+37377799783",
        },
        {
          id: "2",
          location: this.$t("testdrive.varnita"),
          days: this.$t("testdrive.daysvarnita"),
          time: "09:00 - 12:00",
          address: this.$t("testdrive.addressvarnita"),
          phone: "0788 30 116, 0777 99 783",
          phoneNumber: "+373078830116",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.slider {
  display: flex;
  position: absolute;
  justify-content: center;
  align-items: center;
  top: 200px !important;
  right: 40px !important;
}

.grid-container {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 20px;
  margin: 0 auto;
}

.slide {
  text-align: center;
  position: relative;
  width: 100%;
  max-width: 400px;
  background-color: var(--test-drive-mobile-background);
  color: var(--white);
  backdrop-filter: blur(3px);
  border: 1px solid var(--boek-green-1);
  border-radius: 26px;
  padding: 20px;
}

.test-drive {
  font-weight: 800;
  font-size: 20px;
  color: var(--boek-green-1);
  margin: 0;
}

.varnita {
  font-weight: 700;
  font-size: 13px;
  margin: 10px 0;
}

hr {
  width: 100%;
  height: 0;
  border: 1px solid var(--boek-green-1);
  margin-bottom: 10px;
  text-align: center;
}

.days,
.time,
.address {
  font-family: "Inter";
  text-align: left;
  font-weight: 500;
  font-size: 15px;
  margin: 0;
}

.cta-box,
.call-to-action {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 15px;
  margin-left: auto;
  margin-right: auto;
  width: fit-content;
  height: 40px;
}

.cta,
.call-to-action a {
  background: var(--boek-green-1);
  color: var(--black);
  border-radius: 8px;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 12px;
  text-align: center;
  width: fit-content;
  height: 40px;
  transition: background-color 0.2s;
}

.cta:hover,
.call-to-action a:hover {
  background-color: var(--boek-green-2);
  color: var(--white);
}

.phone {
  font-family: "Inter";
  font-weight: 600;
  font-size: 12px;
  color: #b1b1b1;
  margin-top: 8px;
  margin-right: 10px;
}

.smaller-icon {
  text-align: center;
  font-size: 16px;
}

@media screen and (max-width: 1414px) {
  .slider {
    display: none !important;
  }
}
</style>
