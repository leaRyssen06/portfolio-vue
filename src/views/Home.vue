<script setup>
defineOptions({
  name: 'HomeView'
})
import { useRouter } from 'vue-router'
// Import direct de l'image pour garantir que le chemin est trouvé par le projet
import backgroundUrl from '@/assets/img/fondFinal.png'

const router = useRouter()

function goToProjects() {
  router.push('/projets')
}
</script>

<template>
  <div class="home-page">
    <div
      class="fixed-background"
      :style="{ backgroundImage: `url(${backgroundUrl})` }"
    ></div>

    <section class="hero">
      <div class="hero-content">
        <div class="avatar-container">
          <img src="@/assets/img/IMG_1137.JPG"
               alt="Photo de Léa RYSSEN"
               class="hero-avatar"
          />
        </div>

        <h1 class="glow-text">Léa RYSSEN</h1>

        <p class="hero-subtitle">
          Étudiante en BUT Informatique, passionnée par le développement
          d'applications et les projets collaboratifs.
        </p>

        <div class="hero-actions">
          <a href="/src/assets/pdf/CVLeaRYSSEN.pdf" download class="btn primary">
            Télécharger mon CV
          </a>
          <a href="https://github.com/leaRyssen06" target="_blank" class="btn">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/l%C3%A9a-ryssen-54263834b/" target="_blank" class="btn">
            LinkedIn
          </a>
        </div>
      </div>
    </section>

    <section class="about section-spacing">
      <h2 class="section-title">Mon Parcours</h2>
      <div class="cards">
        <div class="card">
          <h3>Baccalauréat</h3>
          <p>Baccalauréat général avec mention. Découverte de l’informatique et des bases de la programmation au Lycée Jean Moulin.</p>
        </div>

        <div class="card">
          <h3>BUT Informatique</h3>
          <p>Formation à l'IUT de Montpellier axée sur le développement, les systèmes et le travail en équipe. Réalisation de projets SAÉ.</p>
        </div>

        <div class="card">
          <h3>Projet professionnel</h3>
          <p>Objectif : devenir développeuse d’applications. Poursuite d'études en alternance pour allier théorie et pratique.</p>
        </div>
      </div>
    </section>

    <section class="skills section-spacing">
      <h2 class="section-title">Compétences</h2>

      <div class="skills-grid">
        <div class="skill-card">
          <h3>Techniques</h3>
          <div class="skill-group">
            <div class="skill">
              <div class="skill-info"><span>HTML / CSS</span><span>80%</span></div>
              <div class="bar"><div class="level" style="width: 80%"></div></div>
            </div>
            <div class="skill">
              <div class="skill-info"><span>JavaScript</span><span>65%</span></div>
              <div class="bar"><div class="level" style="width: 65%"></div></div>
            </div>
          </div>
          <div class="tags-container">
            <span class="tag">Vue.js</span>
            <span class="tag">Git</span>
            <span class="tag">SQL</span>
            <span class="tag">PHP</span>
          </div>
        </div>

        <div class="skill-card">
          <h3>Humaines</h3>
          <div class="skill-group">
            <div class="skill">
              <div class="skill-info"><span>Travail d’équipe</span><span>85%</span></div>
              <div class="bar"><div class="level" style="width: 85%"></div></div>
            </div>
            <div class="skill">
              <div class="skill-info"><span>Communication</span><span>70%</span></div>
              <div class="bar"><div class="level" style="width: 70%"></div></div>
            </div>
          </div>
          <div class="tags-container">
            <span class="tag">Autonomie</span>
            <span class="tag">Organisation</span>
            <span class="tag">Rigueur</span>
          </div>
        </div>
      </div>
    </section>

    <section class="projects-cta">
      <h2 class="glow-text">Mes réalisations</h2>
      <p>Découvrez une sélection de projets réalisés durant mon cursus.</p>
      <router-link to="/projets" class="cta-button">Voir mes projets</router-link>
      <div class="scroll-down" @click="goToProjects">↓</div>
    </section>
  </div>
</template>

<style scoped>
.home-page {
  position: relative;
  color: white;
  background: transparent; /* Fond transparent pour voir le fixed-background */
}

/* FOND FIXE GLOBAL */
.fixed-background {
  position: fixed;
  inset: 0;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  z-index: -2; /* Derrière tout le contenu */
}

/* Overlay sombre pour la lisibilité */
.fixed-background::after {
  content: "";
  position: absolute;
  inset: 0;
  background: rgba(5, 5, 15, 0.6); /* Ajuste l'opacité ici si c'est trop sombre */
}

.section-spacing {
  padding: 10rem 10%;
}

.section-title {
  font-size: 2.5rem;
  color: #7dd3fc;
  text-align: center;
  margin-bottom: 5rem;
  text-transform: uppercase;
  letter-spacing: 4px;
}

/* HERO SECTION */
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.avatar-container {
  animation: float 6s ease-in-out infinite;
  margin-bottom: 2.5rem;
}

.hero-avatar {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid rgba(125, 211, 252, 0.4);
  box-shadow: 0 0 35px rgba(56, 189, 248, 0.3);
}

.glow-text {
  font-size: clamp(2.5rem, 8vw, 4.5rem);
  background: linear-gradient(to right, #fff, #7dd3fc, #38bdf8);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  filter: drop-shadow(0 0 15px rgba(125, 211, 252, 0.5));
}

.hero-subtitle {
  max-width: 750px;
  margin: 2rem auto 3.5rem;
  font-size: 1.25rem;
  color: #cbd5e1;
  line-height: 1.8;
}

.hero-actions {
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  flex-wrap: wrap;
}

/* BOUTONS STYLE SPACE */
.btn {
  padding: 0.9rem 2.2rem;
  border-radius: 50px;
  text-decoration: none;
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  transition: 0.3s ease;
}

.btn:hover {
  background: white;
  color: #05050a;
  transform: translateY(-5px);
}

.btn.primary {
  border-color: #7dd3fc;
  color: #7dd3fc;
}

/* CARTES GLASSMORPHISME */
.cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 3rem;
}

.card {
  background: rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(15px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 3rem;
  border-radius: 25px;
  transition: 0.4s;
}

.card:hover {
  transform: translateY(-10px);
  border-color: #7dd3fc;
}

/* SKILLS */
.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
  gap: 3rem;
}

.skill-card {
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(12px);
  padding: 3rem;
  border-radius: 25px;
  border: 1px solid rgba(255, 255, 255, 0.05);
}

.skill-info { display: flex; justify-content: space-between; margin-bottom: 0.8rem; }
.bar {
  height: 8px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  overflow: hidden;
}

.level {
  height: 100%;
  background: linear-gradient(90deg, #38bdf8, #7dd3fc);
}

.tags-container {
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
  margin-top: 2rem;
}

.tag {
  background: rgba(125, 211, 252, 0.1);
  border: 1px solid rgba(125, 211, 252, 0.3);
  padding: 0.4rem 1rem;
  border-radius: 15px;
  font-size: 0.85rem;
}

/* CTA */
.projects-cta {
  padding: 10rem 2rem;
  text-align: center;
}

.cta-button {
  display: inline-block;
  margin-top: 2rem;
  padding: 1rem 3rem;
  background: #38bdf8;
  color: #05050a;
  border-radius: 50px;
  font-weight: bold;
  text-decoration: none;
  transition: 0.3s;
}

.cta-button:hover {
  transform: scale(1.05);
  box-shadow: 0 0 20px rgba(56, 189, 248, 0.5);
}

.scroll-down {
  margin-top: 3rem;
  font-size: 2rem;
  opacity: 0.5;
  animation: bounce 2s infinite;
  cursor: pointer;
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-15px); }
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
  40% { transform: translateY(10px); }
}

@media (max-width: 768px) {
  .section-spacing { padding: 5rem 5%; }
}
</style>
