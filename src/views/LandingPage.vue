<template>
    <div class="landing-container">
      <h1>Welcome to My Portfolio</h1>
      <p class="disclaimer">
        This portfolio showcases my technical skills and projects. Feel free to explore using the navigation options below.
      </p>
      <div class="navigation-buttons">
        <router-link to="/skills" class="nav-button">Technical Skills</router-link>
        <router-link to="/projects" class="nav-button">Projects</router-link>
      </div>
    </div>
  </template>
  
  <script setup>
  // No additional logic needed for now
  </script>
  
  <style scoped>
  .landing-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    text-align: center;
    background-color: #7284A8;
    color: #ffffff;
  }
  
  h1 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    color: #8CDEDC;
  }
  
  .disclaimer {
    font-size: 1.2rem;
    margin-bottom: 2rem;
    color: #ffffff;
    max-width: 600px;
  }
  
  .navigation-buttons {
    display: flex;
    gap: 20px;
  }
  
  .nav-button {
    background-color: #8CDEDC;
    color: #7284A8;
    padding: 10px 20px;
    border-radius: 8px;
    text-decoration: none;
    font-size: 1.2rem;
    font-weight: bold;
    transition: background-color 0.3s, transform 0.3s;
  }
  
  .nav-button:hover {
    background-color: #990D35;
    color: #ffffff;
    transform: scale(1.1);
  }
  </style>
  