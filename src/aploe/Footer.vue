<template>
  <footer class="bg-[#101010] text-white py-10">
    <div
      class="flex flex-col gap-8 justify-center items-center px-4 sm:px-10 lg:px-20"
    >
      <div
        class="flex flex-col sm:flex-row flex-wrap gap-6 justify-center items-center pb-10 sm:px-10 border-b border-[#333836]"
        v-if="badges"
      >
        <img
          :src="badges"
          :alt="badgesAlt"
          class="mt-4 sm:mt-0 grayscale hover:grayscale-0 transition"
        />
      </div>

      <div class="flex flex-col lg:flex-row gap-10 lg:gap-48">
        <div
          v-for="(section, index) in links"
          :key="index"
          class="flex flex-col gap-2"
        >
          <h3 class="text-white text-opacity-70 text-base font-semibold">
            {{ translatable ? $t(section.sectionTitle) : section.sectionTitle }}
          </h3>
          <component
            v-for="(link, idx) in section.items"
            :key="idx"
            :is="link.isRouterLink ? 'router-link' : 'a'"
            :to="link.isRouterLink ? link.href : null"
            :href="!link.isRouterLink ? link.href : null"
            class="text-white text-opacity-40"
          >
            {{ translatable ? $t(link.text) : link.text }}
            <span v-if="link.info">{{ link.info }}</span>
          </component>
        </div>
      </div>
    </div>

    <div
      class="flex flex-col sm:flex-row flex-wrap justify-between items-center pt-10 px-4 sm:px-10 lg:px-20 gap-6 sm:gap-0"
    >
      <div class="flex flex-col sm:flex-row flex-wrap gap-5 items-center">
        <img :src="icon" alt="Logo" class="w-10 hover:animate-spin delay-100" />
        <div class="flex flex-col gap-2 text-center sm:text-left text-sm">
          <p class="text-white text-opacity-40">
            All trademarks and logos are the property of their respective
            owners.
          </p>
          <router-link class="text-white text-opacity-40" to="/developer">
            © {{ copyright }}
          </router-link>
        </div>
      </div>
      <div class="flex flex-col gap-1 text-center sm:text-right">
        <p class="text-white text-opacity-40">
          Made with ❤️ by
          <a class="text-[var(--boek-green-1)]" :href="authorLink">{{
            author
          }}</a>
        </p>
        <p class="text-white text-opacity-40">
          Build with the foundation of
          <a class="text-[var(--boek-green-1)]" href="https://aploe.gxbs.dev"
            >Aplóe</a
          >
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import WebsiteConfig from "../website.config";

const { buildFrom } = WebsiteConfig;

defineProps({
  badges: String,
  translatable: Boolean,
  badgesAlt: String,
  icon: String,
  specialLink: String,
  links: Array,
  copyright: String,
  author: String,
  authorLink: String,
});

</script>
