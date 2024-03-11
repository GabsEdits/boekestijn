<template>
  <section
    class="mobile-only swipable-container grid-container"
    id="test-drive-mobile"
  >
    <div class="swipable-item">
      <section class="container w-container">
        <h1><i class="fa fa-truck-moving"></i> Test Drive</h1>
        <sup class="test-drive-mobile-city">{{ $t("testdrive.varnita") }}</sup>
        <div class="line"></div>
        <p class="days-mobile-varnita font-bigger">
          <i class="fa fa-calendar-day"></i> {{ $t("testdrive.daysvarnita") }}
        </p>
        <p class="time-mobile-varnita font-bigger">
          <i class="fa fa-clock smaller-icon"></i> 09:00 - 12:00
        </p>
        <p class="address-mobile-varnita font-bigger">
          <i class="fa fa-location-arrow smaller-icon"></i>
          {{ $t("testdrive.addressvarnita") }}
        </p>
        <p class="phone-mobile-varnita">
          <i class="fa fa-phone smaller-icon"></i> 0788 30 116
        </p>
        <a href="tel:+37377799783" class="test-drive-call-us-mobile">{{
          $t("testdrive.callnow")
        }}</a>
      </section>
      <section class="container w-container">
        <h1 class="test-drive-mobile-title">
          <i class="fa fa-truck-moving"></i> Test Drive
        </h1>
        <sup class="test-drive-mobile-city">{{ $t("testdrive.chisinau") }}</sup>
        <div class="line"></div>
        <p class="days-mobile font-bigger">
          <i class="fa fa-calendar-day"></i> {{ $t("testdrive.daychisinau") }}
        </p>
        <p class="time-mobile font-bigger">
          <i class="fa fa-clock smaller-icon"></i> 14:00
        </p>
        <p class="address-mobile font-bigger">
          <i class="fa fa-location-arrow smaller-icon"></i>
          {{ $t("testdrive.addresschisinau") }}
        </p>
        <p class="phone-mobile">
          <i class="fa fa-phone smaller-icon"></i> 22 815827
        </p>
        <a href="tel:+37322815827" class="test-drive-call-us-mobile">{{
          $t("testdrive.callnow")
        }}</a>
      </section>
    </div>
  </section>
</template>

<style lang="scss">
.mobile-only {
  display: none;
}

#test-drive-mobile {
  text-align: center;
  margin-top: -100px !important;
  background-color: var(--test-drive-mobile-background);
  color: var(--white);

  p {
    margin: 0;
  }

  h1 {
    font-size: 1.7rem;
    color: var(--boek-green-4);
    font-weight: bold;
    text-align: center;
    margin-bottom: 2px;
  }

  .test-drive-mobile-city {
    font-weight: 700;
    font-size: 15px;
  }

  section {
    background-color: var(--test-drive-mobile-section-background);
    display: block !important;
    clear: both !important;
    overflow: hidden;
    margin: 20px auto;
    border-radius: 10px;
    width: 85%;
    height: 250px;
  }
}

.font-bigger {
  font-size: 17px;
}

.days-mobile,
.time-mobile,
.phone-mobile,
.address-mobile {
  font-family: "Inter";
  text-align: left;
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 18px;
  color: var(--white);
  margin-left: 70px;
  margin-right: 20px;
}

.days-mobile-varnita,
.time-mobile-varnita,
.phone-mobile-varnita,
.address-mobile-varnita {
  font-family: "Inter";
  text-align: left;
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 18px;
  color: var(--white);
  margin-left: 100px;
  margin-right: 20px;
}

.test-drive-call-us-mobile {
  padding: 8px;
  display: inline-block;
  max-width: 170.35px;
  background-color: var(--boek-green-1);
  position: relative;
  font-weight: 800;
  color: var(--black);
  border-radius: 8px;
  margin-top: 15px;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  transition: background-color 150ms;
}

.test-drive-call-us-mobile:hover {
  background-color: var(--boek-green-3);
  color: var(--white);
}

.swipable-container {
  overflow: hidden;
  width: 100%;
}

.swipable-item {
  float: left;
  width: 100%;
  position: relative;
  margin-bottom: 10px;
}

@media screen and (max-width: 1414px) {
  .mobile-only {
    display: block !important;
  }
}
</style>
