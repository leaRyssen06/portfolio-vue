<script setup>
defineOptions({ name: 'ContactView' })
// On importe l'image de fond pour assurer la cohérence avec Home et Projects
import backgroundUrl from '@/assets/img/fondFinal.png'
</script>

<template>
  <div class="contact-page">
    <div
      class="fixed-background"
      :style="{ backgroundImage: `url(${backgroundUrl})` }"
    ></div>

    <section class="contact-container section-spacing">
      <h1 class="glow-text">Me Contacter</h1>

      <p class="contact-intro">
        Actuellement à la recherche d'une <strong>alternance d'un an</strong> en développement web (PHP, SQL, JavaScript),
        je suis disponible pour échanger sur vos projets ou pour toute opportunité de collaboration.
      </p>

      <div class="contact-grid">
        <div class="contact-card">
          <div class="card-icon">📍</div>
          <h3>Localisation</h3>
          <p>79 Avenue Augustin Fliche</p>
          <p>34 090 Montpellier</p>
        </div>

        <div class="contact-card">
          <div class="card-icon">📧</div>
          <h3>Email</h3>
          <a href="mailto:lea.ryssen@etu.umontpellier.fr" class="contact-link">
            lea.ryssen@etu.umontpellier.fr
          </a>
        </div>

        <div class="contact-card">
          <div class="card-icon">📞</div>
          <h3>Téléphone</h3>
          <p>06.43.39.70.84</p>
        </div>

        <div class="contact-card">
          <div class="card-icon">🔗</div>
          <h3>Réseaux</h3>
          <div class="social-links">
            <a href="https://linkedin.com/in/l%C3%A9a-ryssen-54263834b" target="_blank" class="btn">LinkedIn</a>
            <a href="https://github.com/leaRyssen06" target="_blank" class="btn">GitHub</a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.contact-page {
  position: relative;
  min-height: 100vh;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* FOND FIXE */
.fixed-background {
  position: fixed;
  inset: 0;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  z-index: -2;
}

.fixed-background::after {
  content: "";
  position: absolute;
  inset: 0;
  background: rgba(5, 5, 15, 0.7); /* Un peu plus sombre pour la lisibilité */
}

/* CONTENU */
.section-spacing {
  padding: 8rem 10%;
  width: 100%;
  max-width: 1200px;
  text-align: center;
}

.glow-text {
  font-size: clamp(2.5rem, 6vw, 4rem);
  background: linear-gradient(to right, #fff, #7dd3fc, #38bdf8);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  filter: drop-shadow(0 0 15px rgba(125, 211, 252, 0.5));
  margin-bottom: 2rem;
}

.contact-intro {
  font-size: 1.2rem;
  color: #cbd5e1;
  max-width: 700px;
  margin: 0 auto 4rem;
  line-height: 1.6;
}

/* GRILLE DE CARTES */
.contact-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.contact-card {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 2.5rem;
  border-radius: 20px;
  transition: transform 0.3s ease, border-color 0.3s ease;
}

.contact-card:hover {
  transform: translateY(-10px);
  border-color: #7dd3fc;
  background: rgba(125, 211, 252, 0.05);
}

.card-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.contact-card h3 {
  color: #7dd3fc;
  margin-bottom: 1rem;
  font-size: 1.4rem;
}

.contact-link {
  color: white;
  text-decoration: none;
  word-break: break-all;
  transition: color 0.3s;
}

.contact-link:hover {
  color: #7dd3fc;
}

.social-links {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

/* BOUTONS RÉSEAUX */
.btn {
  padding: 0.6rem 1.2rem;
  border-radius: 50px;
  text-decoration: none;
  color: white;
  border: 1px solid rgba(125, 211, 252, 0.3);
  background: rgba(125, 211, 252, 0.1);
  transition: all 0.3s;
}

.btn:hover {
  background: #7dd3fc;
  color: #05050a;
}

@media (max-width: 768px) {
  .section-spacing { padding: 6rem 5%; }
}
</style>
