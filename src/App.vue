<script setup>
import { useRoute } from 'vue-router'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

const route = useRoute()
</script>

<template>
  <div class="app-container">
    <Header />

    <main>
      <router-view />
    </main>

    <Footer />
  </div>
</template>

<style>
/* Reset global pour éviter les marges blanches */
html, body {
  margin: 0;
  padding: 0;
  width: 100%;
  min-height: 100vh;
}

body {
  font-family: 'Inter', Arial, sans-serif; /* Une police plus moderne si possible */
  -webkit-font-smoothing: antialiased;
}

.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

main {
  flex: 1; /* Permet au footer de rester en bas si la page est courte */
}

header {
  position: relative;
  z-index: 100; /* Toujours au dessus du fond fixe */
}
</style>
