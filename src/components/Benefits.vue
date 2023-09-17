<template>
<section id="benefits">
        <div class="container">
          <h2>{{ $t("benefits.title") }}</h2>
          <ul>
            <li>
              <i class="fas fa-file-contract"></i>
              <p>{{ $t("benefits.benefitone") }}</p>
            </li>
            <li>
              <i class="fas fa-money-bill-wave"></i>
              <p>{{ $t("benefits.benefitbill") }}</p>
            </li>
            <li>
              <i class="fa-solid fa-truck-front"></i>
              <p>{{ $t("benefits.benefittruck") }}</p>
            </li>
            <li>
              <i class="fas fa-cogs"></i>
              <p>{{ $t("benefits.benefitcogs") }}</p>
            </li>
            <li>
              <i class="fa-solid fa-van-shuttle"></i>
              <p>{{ $t("benefits.benefitvan") }}</p>
            </li>
            <li>
              <i class="fas fa-globe"></i>
              <p>{{ $t("benefits.benefitglobe") }}</p>
            </li>
            <li>
              <i class="fas fa-language"></i>
              <p>{{ $t("benefits.benefitlanguage") }}</p>
            </li>
            <li>
              <i class="fas fa-book"></i>
              <p>{{ $t("benefits.benefitbook") }}</p>
            </li><li>
              <i class="fas fa-graduation-cap"></i>
              <p>{{ $t("benefits.benefitcap") }}</p>
            </li>
            <li>
              <i class="fas fa-gift"></i>
              <p>{{ $t("benefits.benefitgift") }}</p>
            </li>
            <li>
              <i class="fas fa-map"></i>
              <p>Track &amp; Trace <br><br>{{ $t("benefits.benefitmap") }}</p>
            </li>
            <li>
              <i class="fas fa-briefcase-medical"></i>
              <p v-html="$t('benefits.benefitbriefcase')"></p>
            </li>
          </ul>
        </div>
      </section>
</template>