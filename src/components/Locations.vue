<template>
        <section id="locations-section">
       <h2 class="flights-title" id="locations">{{ $t("locations.title") }}</h2>
       <p class="flights-desc">{{ $t("locations.desc") }}</p>
       <br><br>
        <div class="map-container">
          <iframe
          title="A google map"
          frameborder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
          loading="lazy"
          class="map anim--fadeOut"
          referrerpolicy="no-referrer-when-downgrade"
          src="https://maps.google.com/maps?hl=en&amp;q=Boekestijn%20Strada%20Liviu%20Deleanu%2013,%20Chi%C5%9Fin%C4%83u,%20Republica%20Moldova+(%20%20BOEKESTIJN%20TRANSPORT%20SERVICE%20Moldova)&amp;t=k&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          ></iframe>
        </div>
    <p id="other-address">&bull; {{ $t("locations.otherone") }}
      <br>&bull; {{ $t("locations.othertwo") }}</p>
    </section>
</template>