<template>
    <div class="slider hide-on-mobile animating anim--fadeIn">
      <div class="slide-var hide-on-mobile hide-on-880" id="slide-1">
        <div class="rectangle"></div>
        <h2 class="test-drive">
          <i class="fa fa-truck-moving"></i> Test Drive
        </h2>
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
        <h2 class="test-drive">
          <i class="fa fa-truck-moving"></i> Test Drive
        </h2>
        <p class="varnita">{{ $t("testdrive.varnita") }}</p>
        <div class="line"></div>
        <p class="days">
          <i class="fa fa-calendar-day"></i>{{ $t("testdrive.daysvarnita") }}
        </p>
        <p class="time">
          <i class="fa fa-clock smaller-icon"></i> 09:00 - 12:00
        </p>
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