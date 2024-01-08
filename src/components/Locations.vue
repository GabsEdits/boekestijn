<template>
  <section id="locations-section">
    <h2 class="flights-title" id="locations">{{ $t("locations.title") }}</h2>
    <p class="flights-desc">{{ $t("locations.desc") }}</p>
    <br /><br />
    <div class="map-container">
      <l-map :zoom="11" :center="[46.9264883, 29.1665167]" :use-global-leaflet="false">
      <l-tile-layer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"></l-tile-layer>
      <l-marker ref="marker" :lat-lng="[47.04696756913603, 28.765961248669072]">
        <l-popup>
          <b>BOEKESTIJN TRANSPORT SERVICE Moldova</b><br>{{ $t("locations.main") }}
        </l-popup>
      </l-marker>
      <l-marker ref="marker" :lat-lng="[46.86025884988751, 29.47809879721805]">
        <l-popup>
          <b>BOEKESTIJN TRANSPORT SERVICE Moldova</b><br>{{ $t("locations.othertwo") }}
        </l-popup>
      </l-marker>
    </l-map>
  </div>
  </section>
</template>

<script>
import "leaflet/dist/leaflet.css";
import { LMap, LTileLayer, LMarker, LPopup } from "@vue-leaflet/vue-leaflet";

export default {
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LPopup,
  },
  data() {
    return {
      zoom: 2,
    };
  },
};
</script>
