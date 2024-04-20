<template>
  <div id="combined-container" class="container">
    <div class="combined-content">
      <section id="facebook">
        <div class="container">
          <i class="fab fa-facebook external-links-icon"></i>
          <h2>{{ $t("facebook.title") }}</h2>
          <p>{{ $t("facebook.desc") }}</p>
          <a
            class="facebook-link"
            href="https://www.facebook.com/boekestijntransportmoldova"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fab fa-facebook"></i>
            {{ $t("facebook.link") }}
          </a>
        </div>
      </section>
      <section id="external-links">
        <i class="fa-solid fa-link external-links-icon"></i>
        <h2>{{ $t("externallinks.title") }}</h2>
        <ul>
          <li>
            <a href="https://www.boekestijntransport.com" target="_blank">{{
              $t("externallinks.link")
            }}</a>
          </li>
        </ul>
      </section>
    </div>
  </div>
</template>

<style lang="scss">
#combined-container {
  max-width: 100% !important;
  text-align: center;
  margin-top: 2rem;

  .combined-content {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }

  #facebook {
    flex: 1;
    max-width: calc(50% - 2px); /* Adjust as needed for spacing and margin */
    width: 100%;
    background-color: rgba(242, 242, 242, 0.732);
    border: 2px solid transparent; /* Start with transparent borders */
    border-radius: 15px 0 0 15px;
    height: 321px !important;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 60px 0;
    transition: border-color 0.3s; /* Smooth border transition */

    h2 {
      font-size: 28px;
      margin-bottom: 20px;
    }

    p {
      font-size: 16px;
      margin-bottom: 40px;
    }

    .facebook-link {
      display: inline-block;
      padding: 12px 30px;
      font-size: 18px;
      font-weight: bold;
      text-decoration: none;
      color: var(--white);
      background-color: var(--facebook-blue);
      border-radius: 5px;
      transition: background-color 0.3s ease;

      i {
        margin-right: 10px;
      }

      &:hover {
        color: white;
        background-color: #39579a;
      }
    }
  }

  #external-links {
    flex: 1;
    max-width: calc(50% - 2px); /* Adjust as needed for spacing and margin */
    background-color: rgba(242, 242, 242, 0.732);
    border: 2px solid transparent; /* Start with transparent borders */
    border-radius: 0 15px 15px 0;
    padding: 50px 0;
    text-align: center;
    height: 321px !important;
    margin-left: 3px;
    transition: border-color 0.3s; /* Smooth border transition */

    h2 {
      font-size: 32px;
      margin-bottom: 20px;
    }

    ul {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      margin: 0;
      padding: 0;
      list-style: none;
    }

    li {
      flex: 0 0 33.33%;
      padding: 20px;

      a {
        display: inline-block;
        padding: 10px 20px;
        width: 350px;
        border: 2px solid #000;
        background-color: var(--boek-green-1);
        color: black;
        border-radius: 4px;
        font-size: 18px;
        text-decoration: none;
        transition:
          background-color 0.3s,
          color 0.3s;

        @media (max-width: 767px) {
          min-width: 320px;
        }

        &:hover {
          background-color: var(--boek-green-2);
          color: var(--white);
        }
      }
    }
  }

  #facebook:hover,
  #external-links:hover {
    border-color: var(--facebook-blue); /* Change border color on hover */
  }

  @media (max-width: 994px) {
    .combined-content {
      flex-direction: column;
      align-items: stretch;
    }

    #facebook,
    #external-links {
      flex: none;
      max-width: 100%;
      margin-left: 0;
      height: auto !important;
    }

    #facebook {
      border-radius: 15px 15px 0 0;

      a {
        width: auto !important;
      }
    }

    #external-links {
      border-radius: 0 0 15px 15px;
      margin-left: 0px;
      margin-top: 2px;

      a {
        width: auto !important;
      }
    }
  }
}
</style>
