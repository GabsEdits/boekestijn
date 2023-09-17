<template>
      <main style="margin-top: 90px;">
    <h1 id="not-title">404</h1>
      <h1>Page Not Found</h1>
    <p>This page doesn't exist or got changed, please double check the URL</p>
      </main>
  <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
</template>

<style>
      main {
      max-width: 800px;
      margin: 0 auto;
      padding: 2rem;
      
    }
    
     #not-title {
      font-weight: 900;
      font-size: 10rem;
      line-height: 30px;
      margin-top: 100px;
      margin-bottom: 1.5rem;
    }
    main h1 {
      font-size: 10rem;
      line-height: 125px;
      margin-bottom: 1.5rem;
    }
    
    h2 {
      font-size: 1.5rem;
      margin-top: 2rem;
      margin-bottom: 1rem;
    }
    
    p {
      text-align: center;
      margin-bottom: 1rem;
      margin-top: 1rem;
    }
    @media screen and (max-width: 767px) {
  body {
    max-width: 100%;
    overflow-x: hidden;
    margin: 0;
    padding: 0;
  }

  #not-title {
    font-size: 7rem;
    margin-top: 50px;
    line-height: 10px;
  }

  main h1 {
    font-size: 7rem;
    line-height: 88px;
  }
}
</style>