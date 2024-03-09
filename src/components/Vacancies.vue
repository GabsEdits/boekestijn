<template>
  <section id="vacancies">
    <div class="container">
      <h2>{{ $t("vacancies.title") }}</h2>
      <p>{{ $t("vacancies.desc") }}</p>
      <a
        href="https://www.rabota.md/ro/companies/boekestijn-transport-service"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i class="fas fa-briefcase" id="above-location"></i>
        {{ $t("vacancies.link") }}
      </a>
    </div>
  </section>
</template>

<style lang="scss">
#vacancies {
  background-color: var(--boek-green-1);
  color: var(--black);
  max-width: 100% !important;
  padding: 60px 0;
  text-align: center;

  h2 {
    font-size: 28px;
    margin-bottom: 20px;
  }

  p {
    font-size: 16px;
    margin-bottom: 40px;
  }

  a {
    display: inline-block;
    padding: 12px 30px;
    font-size: 18px;
    font-weight: bold;
    text-decoration: none;
    color: var(--white);
    background-color: var(--vacancies-link-back);
    border-radius: 5px;
    transition: background-color 0.3s ease;

    i {
      margin-right: 10px;
    }

    &:hover {
      color: var(--white);
      background-color: var(--vacancies-link-back-hover);
    }
  }
}
</style>
