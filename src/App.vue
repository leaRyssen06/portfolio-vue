<script setup>
import { useRoute } from 'vue-router'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

const route = useRoute()
</script>

<template>
  <div
    class= "app"
    :class="{'home-bg' : route.path === '/'}"
  >
    <Header />

    <router-view />

    <Footer />
  </div>
</template>

<style>
.app {
  min-height: 100vh;
  color: white;
}
html, body {
  margin: 0;
  padding: 0;
  height: 100%;
}
body {
  margin: 0;
  font-family: Arial, sans-serif;
}
main {
  padding: 2rem;
}
.home-bg {
  background-image: url('@/assets/img/fondFinal.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
.home-bg::before {
  content: '';
  position: fixed;
  inset: 0;
  background: radial-gradient(
    ellipse at center,
    rgba(0, 0, 0, 0.4),
    rgba(0, 0, 0, 0.8)
  );
  z-index: -1;
}
header {
  padding: 1rem 2rem;
  position: relative;
  z-index: 10;
}
</style>
