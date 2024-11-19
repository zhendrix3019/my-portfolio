<template>
  <v-app>
    <!-- Header Navigation -->
    <header class="header-container">
      <nav>
        <router-link to="/">Home</router-link>
        <router-link to="/projects">Projects</router-link>
      </nav>
    </header>
    <router-view />
  </v-app>
</template>

<script setup>
// No changes in the script needed
</script>

<style scoped>
.header-container {
  text-align: center;
  margin-bottom: 20px;
  background: linear-gradient(90deg, #7284A8, #8CDEDC);
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
}

nav {
  display: flex;
  justify-content: center;
  gap: 30px;
}

nav a {
  color: #ffffff;
  font-weight: bold;
  font-size: 1.5em;
  text-decoration: none;
  transition: color 0.3s, transform 0.3s;
}

nav a:hover {
  color: #990D35;
  transform: scale(1.1);
}
</style>
