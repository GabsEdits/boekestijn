<template>
  <Locations
    title="locations.title"
    description="locations.desc"
    icon="map"
    background="#e8ffdda6"
    background-dark="#273521a6"
    icon-color="var(--boek-green-2)"
    icon-color-dark="var(--boek-green-1)"
    translatable="true"
  >
    <div id="map">
      <l-map
        :zoom="11"
        :center="[46.9264883, 29.1665167]"
        :use-global-leaflet="false"
      >
        <l-tile-layer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        ></l-tile-layer>
        <l-marker
          ref="marker"
          :lat-lng="[47.04696756913603, 28.765961248669072]"
        >
          <l-popup>
            <b>BOEKESTIJN TRANSPORT SERVICE Moldova</b><br />{{
              $t("locations.main")
            }}
          </l-popup>
        </l-marker>
        <l-marker
          ref="marker"
          :lat-lng="[46.86025884988751, 29.47809879721805]"
        >
          <l-popup>
            <b>BOEKESTIJN TRANSPORT SERVICE Moldova</b><br />{{
              $t("locations.othertwo")
            }}
          </l-popup>
        </l-marker>
      </l-map>
    </div>
  </Locations>
</template>

<script setup lang="ts">
import Locations from "aploe/components/Content.vue";
import "leaflet/dist/leaflet.css";
import { LMap, LTileLayer, LMarker, LPopup } from "@vue-leaflet/vue-leaflet";
</script>

<style lang="scss">
#map {
  position: relative;
  height: 700px;
  border-radius: 0 0 20px 20px;
  width: 100%;
  margin-bottom: 25px;
}

@media (prefers-color-scheme: dark) {
  .leaflet-layer,
  .leaflet-control-zoom-in,
  .leaflet-control-zoom-out,
  .leaflet-control-attribution {
    filter: invert(100%) hue-rotate(180deg) brightness(95%) contrast(90%);
  }

  .leaflet-attribution-flag {
    filter: invert(100%) hue-rotate(180deg) brightness(100%) contrast(100%);
  }
}
</style>
