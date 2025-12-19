<script setup>
defineOptions({ name: 'MainHeader' })
</script>

<template>
  <header class="cinematic-header">
    <nav>
      <router-link to="/">Accueil</router-link>
      <router-link to="/cv">CV</router-link>
      <router-link to="/projets">Projets</router-link>
      <router-link to="/contact">Contact</router-link>
    </nav>
  </header>
</template>

<style scoped>
.cinematic-header {
  position: sticky;
  top: 0;
  z-index: 20;

  backdrop-filter: blur(12px);
  background: rgba(10, 10, 20, 0.6);

  padding: 1rem 2rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

nav {
  display: flex;
  gap: 2rem;
}

a {
  color: white;
  text-decoration: none;
  position: relative;
  font-weight: 500;
}

a::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -6px;
  width: 0;
  height: 2px;
  background: #7dd3fc;
  transition: width 0.3s ease;
}

a:hover::after {
  width: 100%;
}
</style>

