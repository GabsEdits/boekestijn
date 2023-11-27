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

<style>
#combined-container {
  max-width: 100% !important;
  background-color: #e6e6e6; /* Background color for the entire section */
  padding: 20px;
  text-align: center;
}

.combined-content {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

#facebook {
  flex: 1;
  max-width: calc(50% - 2px); /* Adjust as needed for spacing and margin */
  width: 100%;
  background-color: #f6f6f7;
  border: 2px solid transparent; /* Start with transparent borders */
  border-radius: 15px 0 0 15px;
  height: 321px !important;
  justify-content: center;
  align-items: center;
  text-align: center;
  transition: border-color 0.3s; /* Smooth border transition */
}

#external-links {
  flex: 1;
  max-width: calc(50% - 2px); /* Adjust as needed for spacing and margin */
  background-color: #f6f6f7;
  border: 2px solid transparent; /* Start with transparent borders */
  border-radius: 0 15px 15px 0;
  text-align: center;
  height: 321px !important;
  margin-left: 3px;
  transition: border-color 0.3s; /* Smooth border transition */
}

#facebook:hover,
#external-links:hover {
  border-color: var(--facebook-blue); /* Change border color on hover */
}

@media (max-width: 994px) {
  .combined-content {
    flex-direction: column; /* Stack sections vertically on mobile */
    align-items: stretch; /* Stretch sections to full width on mobile */
  }

  #facebook,
  #external-links {
    flex: none; /* Don't grow or shrink sections on mobile */
    max-width: 100%; /* Full width on mobile */
    margin-left: 0; /* Remove margin on mobile */
    height: auto !important; /* Adjust height based on content on mobile */
  }

  #facebook {
    border-radius: 15px 15px 0 0;
  }

  #external-links {
    border-radius: 0 0 15px 15px;
    margin-left: 0px;
    margin-top: 2px;
  }

  #facebook a {
    width: auto !important;
  }

  #external-links a {
    width: auto !important;
  }
}
</style>
