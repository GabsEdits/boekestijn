<template>
      <header>
        <h1>
          <a href="#"><img src="https://uploads-ssl.webflow.com/600ff788eda09e5214cdd5b0/601a7763ba21953681b7d7d0_boekestijn%20transport%20logo.svg" alt="Boekestijn Transport"></a>
        </h1>
        <ul>
          <li><router-link to="/">Go Back Home</router-link></li>
          <li class="dropdown">
            <a href="#">Language <i class="fa fa-angle-down"></i></a>
            <div class="dropdown-content">
              <router-link to="/index.html">Русский (soon)</router-link>
              <router-link to="/ro.html">Română (soon)</router-link>
              <router-link to="/en.html">English</router-link>
            </div>
          </li>
        </ul>
      </header>
  
      <main style="margin-top: 90px;">
        <h1>Privacy Policy</h1>
    <h2>Data Collection</h2>
    <p>We do not collect any personal data from visitors on this website. You can browse our website anonymously without providing any personal information.</p>
    
    <h2>Cookies</h2>
    <p>This website does not use any cookies.</p>
    
    <h2>Data Security</h2>
    <p>We prioritize the security of your data and take appropriate measures to protect it. However, please note that no method of transmission over the internet or electronic storage is 100% secure.</p>
    
    <h2>Third-Party Services</h2>
    <p>This website does not utilize any third-party services that would collect or process personal information.</p>
    
    <h2>Open Source</h2>
    <p>We are committed to openness and transparency. This website is fully built on open-source technologies and frameworks, ensuring that the source code is freely available and can be audited by anyone.</p>
  <br><br><br><br><br><br><br><br><br><br><br><br>
      </main>
  
      <Footer />
  </template>
  
  <script>
  import Footer from './Footer.vue';
  
  export default {
    components: {
      Footer
    }
  };
  </script>
  
  
  <style scoped>
    header {
        height: 70px;
    }
      main {
      max-width: 800px;
      margin: 0 auto;
      padding: 2rem;
    }
    
    main h1 {
      font-size: 2rem;
      margin-bottom: 1.5rem;
    }
    
    h2 {
      font-size: 1.5rem;
      margin-top: 2rem;
      margin-bottom: 1rem;
    }
    
    p {
      margin-bottom: 1rem;
    }
  </style>
  