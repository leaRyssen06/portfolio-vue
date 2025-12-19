<script setup>
defineOptions({
  name: 'ProjectsView'
})
</script>

<template>
  <div class="projects-page">
    <div class="fixed-background"></div>

    <header class="page-header">
      <h1 class="glow-text">Mes Missions</h1>
      <p class="subtitle">Exploration de mes réalisations académiques et personnelles</p>
    </header>

    <div class="projects-list">
      <section class="project-section">
        <div class="project-card">
          <div class="project-image p1-img"></div>
          <div class="project-info">
            <span class="project-number">01</span>
            <h2>Démocratie Participative</h2>
            <p>
              Conception d'une plateforme Full Stack permettant le vote sécurisé.
              Focus sur l'expérience utilisateur et l'intégrité des données.
            </p>
            <router-link to="/projets/projet1" class="project-btn">
              Détails de la mission
            </router-link>
          </div>
        </div>
      </section>

      <section class="project-section">
        <div class="project-card reverse">
          <div class="project-image p2-img"></div>
          <div class="project-info">
            <span class="project-number">02</span>
            <h2>Pokémon TCG Java</h2>
            <p>
              Développement applicatif en Java avec interface JavaFX.
              Modélisation complexe de mécaniques de jeu de cartes.
            </p>
            <router-link to="/projets/projet2" class="project-btn">
              Détails de la mission
            </router-link>
          </div>
        </div>
      </section>

      <section class="project-section">
        <div class="project-card">
          <div class="project-image p3-img"></div>
          <div class="project-info">
            <span class="project-number">03</span>
            <h2>Conception BDD Oracle</h2>
            <p>
              Architecture et implémentation d'un système d'information complet.
              Optimisation de requêtes SQL et rigueur relationnelle.
            </p>
            <router-link to="/projets/projet3" class="project-btn">
              Détails de la mission
            </router-link>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped>
.projects-page {
  position: relative;
  color: white;
  min-height: 100vh;
  padding-bottom: 8rem;
}

/* FOND FIXE (Modifié pour fondFinal.png) */
.fixed-background {
  position: fixed;
  inset: 0;
  /* Utilisation de fondFinal.png comme demandé */
  background: url('@/assets/img/fondFinal.png') no-repeat center center;
  background-size: cover;
  z-index: -2;
}

/* Overlay pour assombrir le fond et améliorer la lisibilité */
.fixed-background::after {
  content: "";
  position: absolute;
  inset: 0;
  background: rgba(5, 5, 15, 0.5); /* Ajuste l'opacité selon tes besoins */
}

.page-header {
  text-align: center;
  padding: 8rem 2rem 5rem;
}

.glow-text {
  font-size: clamp(2.5rem, 7vw, 4.5rem);
  background: linear-gradient(to right, #fff, #7dd3fc, #38bdf8);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  filter: drop-shadow(0 0 15px rgba(125, 211, 252, 0.5));
  margin-bottom: 1rem;
}

.subtitle {
  font-size: 1.2rem;
  color: #94a3b8;
  letter-spacing: 1px;
}

.projects-list {
  display: flex;
  flex-direction: column;
  gap: 6rem;
  padding: 0 10%;
}

.project-card {
  display: grid;
  grid-template-columns: 1fr 1fr;
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(15px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 30px;
  overflow: hidden;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.project-card.reverse {
  direction: rtl;
}

.project-card.reverse .project-info {
  direction: ltr;
}

.project-card:hover {
  transform: translateY(-10px);
  border-color: #7dd3fc;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.6), 0 0 20px rgba(125, 211, 252, 0.2);
}

.project-image {
  min-height: 400px;
  background-size: cover;
  background-position: center;
  transition: transform 0.8s ease;
}

.project-card:hover .project-image {
  transform: scale(1.05);
}

/* Images des vignettes projets */
.p1-img { background-image: url('@/assets/img/projet1.png'); }
.p2-img { background-image: url('@/assets/img/projet2.png'); }
.p3-img { background-image: url('@/assets/img/projet3.png'); }

.project-info {
  padding: 4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
}

.project-number {
  font-size: 5rem;
  font-weight: 900;
  color: rgba(125, 211, 252, 0.07);
  position: absolute;
  top: 1rem;
  right: 2rem;
  pointer-events: none;
}

.project-info h2 {
  font-size: 2.2rem;
  color: #7dd3fc;
  margin-bottom: 1.5rem;
}

.project-info p {
  font-size: 1.1rem;
  line-height: 1.8;
  color: #cbd5e1;
  margin-bottom: 2.5rem;
}

.project-btn {
  align-self: flex-start;
  padding: 0.9rem 2.5rem;
  background: rgba(125, 211, 252, 0.1);
  border: 1px solid #7dd3fc;
  color: #7dd3fc;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
}

.project-btn:hover {
  background: #7dd3fc;
  color: #05050a;
  box-shadow: 0 0 25px rgba(125, 211, 252, 0.5);
  transform: scale(1.05);
}

@media (max-width: 992px) {
  .project-card { grid-template-columns: 1fr; }
  .project-card.reverse { direction: ltr; }
  .project-image { min-height: 250px; }
  .project-info { padding: 2.5rem; }
  .projects-list { padding: 0 5%; }
}
</style>
