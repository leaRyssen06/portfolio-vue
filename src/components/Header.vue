<script setup>
defineOptions({ name: 'MainHeader' })
</script>

<template>
  <header class="cinematic-header">
    <nav class="nav-container">
      <div class="logo-wrapper">
        <img src="@/assets/img/logo.png" alt="logo" class="logo"/>
      </div>

      <div class="nav-links">
        <router-link to="/" class="nav-link">Accueil</router-link>
        <router-link to="/cv" class="nav-link">CV</router-link>
        <router-link to="/projets" class="nav-link">Projets</router-link>
        <router-link to="/contact" class="nav-link">Contact</router-link>
      </div>
    </nav>
  </header>
</template>

<style scoped>
.cinematic-header {
  position: sticky;
  top: 0;
  z-index: 100;

  /* Effet Glassmorphisme spatial */
  backdrop-filter: blur(15px);
  background: rgba(5, 5, 15, 0.7);

  padding: 0.8rem 4rem;
  border-bottom: 1px solid rgba(125, 211, 252, 0.2);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.5);
}

.nav-container {
  display: flex;
  align-items: center;
  justify-content: space-between; /* Espace mieux le logo des liens */
  max-width: 1400px;
  margin: 0 auto;
}

.logo-wrapper {
  display: flex;
  align-items: center;
  transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.logo-wrapper:hover {
  transform: scale(1.1) rotate(5deg);
}

.logo {
  height: 50px; /* Taille fixe plus propre que le % */
  width: auto;
  filter: drop-shadow(0 0 8px rgba(125, 211, 252, 0.6));
}

.nav-links {
  display: flex;
  gap: 3rem;
}

.nav-link {
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  position: relative;
  font-weight: 500;
  font-size: 1.2rem;
  letter-spacing: 1px;
  transition: all 0.3s ease;
}

/* État Hover */
.nav-link:hover {
  color: #7dd3fc;
  text-shadow: 0 0 10px rgba(125, 211, 252, 0.8);
  transform: translateY(-2px);
}

/* Soulignement animé */
.nav-link::after {
  content: '';
  position: absolute;
  left: 50%;
  bottom: -5px;
  width: 0;
  height: 2px;
  background: linear-gradient(90deg, transparent, #7dd3fc, transparent);
  transition: all 0.4s ease;
  transform: translateX(-50%);
}

.nav-link:hover::after {
  width: 100%;
}

/* Style pour le lien actif (page actuelle) */
.router-link-active {
  color: #7dd3fc;
  text-shadow: 0 0 15px rgba(125, 211, 252, 0.5);
}

.router-link-active::after {
  width: 80%;
  background: #7dd3fc;
}

/* Responsive */
@media (max-width: 768px) {
  .cinematic-header {
    padding: 1rem;
  }
  .nav-links {
    gap: 1.5rem;
  }
  .nav-link {
    font-size: 1rem;
  }
  .logo {
    height: 40px;
  }
}
</style>
