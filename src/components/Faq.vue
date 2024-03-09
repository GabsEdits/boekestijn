<template>
  <section class="wf-section" id="faq-section">
    <div class="container w-container">
      <h2>{{ $t("faq.title") }}</h2>
      <div class="grid grid-3">
        <article>
          <h3>{{ $t("faq.qone") }}</h3>
          <summary>{{ $t("faq.answerone") }}</summary>
        </article>
        <article>
          <h3>{{ $t("faq.qtwo") }}</h3>
          <summary>{{ $t("faq.answertwo") }}</summary>
        </article>
        <article>
          <h3>{{ $t("faq.qthree") }}</h3>
          <summary>{{ $t("faq.answerthree") }}</summary>
        </article>
        <article>
          <h3>{{ $t("faq.qmiss") }}</h3>
          <summary>{{ $t("faq.answermiss") }}</summary>
        </article>
        <article>
          <h3>{{ $t("faq.qfour") }}</h3>
          <summary>{{ $t("faq.answerfour") }}</summary>
        </article>
        <article>
          <h3>{{ $t("faq.qfive") }}</h3>
          <summary>{{ $t("faq.answerfive") }}</summary>
        </article>
        <article>
          <h3>{{ $t("faq.qsix") }}</h3>
          <summary>{{ $t("faq.answersix") }}</summary>
        </article>
        <article>
          <h3>{{ $t("faq.qseven") }}</h3>
          <summary>{{ $t("faq.answerseven") }}</summary>
        </article>
        <article>
          <h3>{{ $t("faq.qeight") }}</h3>
          <summary>{{ $t("faq.answereight") }}</summary>
        </article>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
#faq-section {
  background-color: #222;
  padding: 40px 0;
  color: var(--white);

  article {
    background-color: var(--hover-link-gray);
    padding: 30px;
    border-radius: 4px;
    margin-left: 20px;
    margin-right: 20px;
  }

  h3 {
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 15px;
  }

  summary {
    text-align: left;
    font-size: 1.1rem;
    line-height: 1.5;
    color: var(--faq-color);
  }

  h2 {
    font-size: 2rem;
    text-align: center;
    margin-bottom: 40px;
    color: #fff;
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px;
  }
}

@media (max-width: 768px) {
  .grid {
    grid-template-columns: 1fr !important;
  }
}

@media screen and (max-width: 1138px){
  .grid {
    grid-template-columns: repeat(2, 1fr) !important;
    grid-gap: 10px;
  }
}
</style>
