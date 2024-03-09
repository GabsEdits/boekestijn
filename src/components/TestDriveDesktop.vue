<template>
  <div class="slider hide-on-mobile animating anim--fadeIn">
    <div class="slide-var hide-on-mobile hide-on-880" id="slide-1">
      <div class="rectangle"></div>
      <h2 class="test-drive"><i class="fa fa-truck-moving"></i> Test Drive</h2>
      <p class="varnita">{{ $t("testdrive.chisinau") }}</p>
      <div class="line"></div>
      <p class="days">
        <i class="fa fa-calendar-day"></i> {{ $t("testdrive.daychisinau") }}
      </p>
      <p class="time"><i class="fa fa-clock smaller-icon"></i> 14:00</p>
      <p class="address">
        <i class="fa fa-location-arrow smaller-icon"></i>
        {{ $t("testdrive.addresschisinau") }}
      </p>
      <p class="phone">22 815827</p>
      <p class="call-to-action">
        <a href="tel:+37377799783" style="color: #ffffff">{{
          $t("testdrive.callnow")
        }}</a>
      </p>
    </div>
    <div class="slide-bal hide-on-mobile hide-on-880" id="slide-1">
      <div class="rectangle"></div>
      <h2 class="test-drive"><i class="fa fa-truck-moving"></i> Test Drive</h2>
      <p class="varnita">{{ $t("testdrive.varnita") }}</p>
      <div class="line"></div>
      <p class="days">
        <i class="fa fa-calendar-day"></i>{{ $t("testdrive.daysvarnita") }}
      </p>
      <p class="time"><i class="fa fa-clock smaller-icon"></i> 09:00 - 12:00</p>
      <p class="address">
        <i class="fa fa-location-arrow smaller-icon"></i>
        {{ $t("testdrive.addressvarnita") }}
      </p>
      <p class="phone">0788 30 116</p>
      <p class="phone">0777 99 783</p>
      <p class="call-to-action">
        <a href="tel:+37377799783" style="color: #ffffff">{{
          $t("testdrive.callnow")
        }}</a>
      </p>
    </div>
  </div>
</template>

<style lang="scss">
.slider {
  display: flex;
  justify-content: center;
  align-items: center;
}

.slide-bal {
  top: 10rem !important;
  right: 20rem;
  text-align: center;
  position: absolute;
  width: 195px;
  height: 250px;
  background-color: var(--slides-background-color);
  backdrop-filter: blur(3px);
  border-radius: 26px;
  padding: 20px;
}

.slide-var {
  top: 10rem !important;
  right: 5.5rem;
  text-align: center;
  position: absolute;
  width: 195px;
  height: 250px;
  background: var(--slides-background-color);
  backdrop-filter: blur(3px);
  border-radius: 26px;
  padding: 20px;
}

.test-drive {
  font-family: "Inter";
  font-style: normal;
  font-weight: 800;
  font-size: 20px;
  line-height: 24px;
  color: var(--boek-green-3);
  margin: 0;
}

.varnita {
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 13px;
  line-height: 16px;
  color: var(--black);
  margin: 10px 0;
}

.line {
  width: 155px;
  height: 0;
  border: 1px solid var(--boek-green-1);
  margin-bottom: 10px;
}

.days,
.time,
.address {
  font-family: "Inter";
  text-align: left;
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 18px;
  color: var(--black);
  margin: 0;
}

.cta-box {
  display: flex;
  align-items: center;
  margin-top: 15px;
  margin-left: 20px !important;
  width: 240px !important;
  height: 40px;
}

.cta {
  background: var(--boek-green-1);
  color: var(--black);
  margin-left: -2px;
  border-radius: 8px;
  padding: 8px;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: space-between;
  width: 110px !important;
  height: 40px;
  transition: background-color 200ms;
}
.cta:hover {
  background-color: var(--boek-green-3);
  color: var(--white);
}

.call-now {
  text-align: center;
  font-family: "Inter";
  font-weight: 700;
  text-align: center !important;
  font-size: 12px;
  color: var(--black);
  margin-top: 15px;
}

.call-to-action {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 15px;
  margin-left: -45px !important;
  width: 240px !important;
  height: 40px;

  a {
    background: var(--boek-green-1);
    color: var(--black);
    margin-left: -2px;
    border-radius: 8px;
    padding: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: "Inter";
    font-weight: 700;
    font-size: 12px;
    text-align: center;
    width: 110px !important;
    height: 40px;
    transition: background-color 200ms;

    &:hover {
      background-color: var(--boek-green-3);
      color: var(--white);
    }
  }
}

.phone {
  font-family: "Inter";
  font-weight: 600;
  font-size: 12px;
  line-height: 8px;
  color: var(--davy-gray);
  margin-top: 8px;
  margin-right: 10px;
}

.smaller-icon {
  text-align: center;
  font-size: 14px;
}
</style>
