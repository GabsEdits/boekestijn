<template>
  <section
    class="mobile-only swipable-container grid-container"
    id="test-drive-mobile"
  >
    <div class="swipable-item">
      <div class="container w-container test-drive-mobile-section">
        <h1 class="test-drive-mobile-title">
          <i class="fa fa-truck-moving"></i> Test Drive
        </h1>
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
      </div>
      <div class="container w-container test-drive-mobile-section">
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
      </div>
    </div>
  </section>
</template>
