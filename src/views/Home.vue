<script setup>
defineOptions({
  name: 'HomeView'
})
import { useRouter } from 'vue-router'

const router = useRouter()

function goToProjects() {
  router.push('/projets')
}
</script>

<template>
  <!-- HERO -->
  <section class="hero">
    <div class="hero-content">
      <img src="@/assets/img/IMG_1137.JPG"
           alt="Photo de Léa RYSSEN"
           class="hero-avatar"
      />

      <h1>Léa RYSSEN</h1>

      <p class="hero-subtitle">
        Étudiant en BUT Informatique, passionné par le développement
        d'applications et les projets collaboratifs.
      </p>

      <div class="hero-actions">
        <a href="/src/assets/pdf/CVLeaRYSSEN.pdf" download class="btn primary">
          Télécharger mon CV
        </a>
        <a href="https://github.com/leaRyssen06" class="btn">
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/l%C3%A9a-ryssen-54263834b/" class="btn">
          LinkedIn
        </a>
      </div>
    </div>
  </section>

  <!-- TRANSITION -->
  <div class="hero-transition"></div>

  <!-- PARCOURS / PROJETS-PRO -->
  <section class="about">
    <h2>Parcours</h2>
    <div class="cards">
      <div class="card">
        <h3>Baccalauréat</h3>
        <p>
          Baccalauréat général avec spécialité …
          Découverte de l’informatique et des bases de la programmation.
        </p>
      </div>

      <div class="card">
        <h3>BUT Informatique</h3>
        <p>
          Formation axée sur le développement, les systèmes et le travail en équipe.
          Réalisation de projets SAÉ et hackathons.
        </p>
      </div>

      <div class="card">
        <h3>Projet professionnel</h3>
        <p>
          Objectif : devenir développeuse d’applications / web.
          Poursuite possible en école d’ingénieur ou master.
        </p>
      </div>
    </div>
  </section>

  <!-- COMPETENCES -->
  <section class="skills">
    <h2>Compétences</h2>

    <div class="skills-grid">

      <!-- TECHNIQUES -->
      <div class="skill-card">
        <h3>Techniques</h3>

        <div class="skill">
          <span>HTML / CSS</span>
          <div class="bar">
            <div class="level" style="width: 80%"></div>
          </div>
        </div>

        <div class="skill">
          <span>JavaScript</span>
          <div class="bar">
            <div class="level" style="width: 65%"></div>
          </div>
        </div>

        <div class="tags">
          <span class="tag">Vue.js</span>
          <span class="tag">Git</span>
          <span class="tag">GitHub</span>
          <span class="tag">SQL</span>
        </div>
      </div>

      <!-- HUMAINES -->
      <div class="skill-card">
        <h3>Humaines</h3>

        <div class="skill">
          <span>Travail d’équipe</span>
          <div class="bar">
            <div class="level" style="width: 85%"></div>
          </div>
        </div>

        <div class="skill">
          <span>Communication</span>
          <div class="bar">
            <div class="level" style="width: 70%"></div>
          </div>
        </div>

        <div class="tags">
          <span class="tag">Autonomie</span>
          <span class="tag">Organisation</span>
          <span class="tag">Adaptabilité</span>
        </div>
      </div>

    </div>
  </section>

  <!-- PROJETS -->
  <section class="projects-cta">
    <h2>Mes réalisations</h2>

    <p>
      Découvrez une sélection de projets réalisés durant mon BUT Informatique
      et en dehors du cadre académique.
    </p>

    <router-link to="/projets" class="cta-button">
      Voir mes projets
    </router-link>

    <div class="scroll-indicator" @click="goToProjects">
      ↓
    </div>
  </section>
</template>

<style scoped>
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
}

.hero-content {
  max-width: 700px;
  padding: 4rem;
}

.hero-avatar {
  width: 140px;
  height: 140px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 1.5rem;
  border: 3px solid rgba(255, 255, 255, 0.6);
}

.hero-transition {
  height: 220px;
  background: linear-gradient(
    rgba(0, 0, 0, 0) 0%,
    rgba(10, 10, 20, 0.9) 80%
  );
}

.about {
  background: rgba(10, 10, 20, 0.9);
  backdrop-filter: blur(6px);

  padding: 5rem 4rem;
  color: white;
}

.about h2 {
  margin-top: 0;
  font-size: 2rem;
  color: #7dd3fc;
}

.about ul {
  padding-left: 1.2rem;
  margin-bottom: 3rem;
}

.about li {
  margin-bottom: 0.5rem;
}

.about p {
  max-width: 700px;
  line-height: 1.7;
}

h1 {
  font-size: 3rem;
  margin: 0;
}

h1 span {
  color: #7dd3fc; /* bleu clair élégant */
}

.hero-subtitle {
  margin: 1.5rem 0;
  font-size: 1.1rem;
  line-height: 1.6;
}

.hero-actions {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

/* Boutons */
.btn {
  padding: 0.7rem 1.4rem;
  border-radius: 30px;
  text-decoration: none;
  color: white;
  border: 1px solid white;
  transition: all 0.3s ease;
}

.btn:hover {
  background: white;
  color: black;
}

.btn.primary {
  background: #7dd3fc;
  color: black;
  border-color: #7dd3fc;
}

.btn.primary:hover {
  background: white;
  border-color: white;
}

.cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
}

.card {
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(10px);
  border-radius: 18px;

  padding: 2rem;
  color: white;

  box-shadow:
    0 20px 40px rgba(0, 0, 0, 0.4),
    inset 0 0 0 1px rgba(255, 255, 255, 0.08);

  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
  transform: translateY(-8px);
  box-shadow:
    0 0 30px rgba(125, 211, 252, 0.25),
    0 30px 60px rgba(0, 0, 0, 0.6);
}

.card h3 {
  margin-top: 0;
  margin-bottom: 1rem;
  color: #7dd3fc;
  font-size: 1.3rem;
}

.card p {
  line-height: 1.6;
  font-size: 0.95rem;
}

.skills {
  background: rgba(10, 10, 20, 0.9);
  backdrop-filter: blur(6px);
  padding: 5rem 4rem;
}

.skills h2 {
  margin-top: 0;
  font-size: 2rem;
  color: #7dd3fc;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 3rem;
  margin-top: 3rem;
}

.skill-card {
  background: rgba(255, 255, 255, 0.06);
  backdrop-filter: blur(12px);
  border-radius: 20px;
  padding: 2.5rem;
  box-shadow:
    0 20px 40px rgba(0, 0, 0, 0.4),
    inset 0 0 0 1px rgba(255, 255, 255, 0.08);
}

.skill-card h3 {
  margin-top: 0;
  margin-bottom: 2rem;
  color: #7dd3fc;
  font-size: 1.4rem;
}

.skill {
  margin-bottom: 1.5rem;
}

.skill span {
  font-size: 0.9rem;
}

.bar {
  height: 8px;
  background: rgba(255, 255, 255, 0.15);
  border-radius: 4px;
  margin-top: 6px;
  overflow: hidden;
}

.level {
  height: 100%;
  background: linear-gradient(90deg, #7dd3fc, #38bdf8);
  border-radius: 4px;
}

.tags {
  margin-top: 1.5rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
}

.tag {
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.8rem;
  background: rgba(125, 211, 252, 0.15);
  border: 1px solid rgba(125, 211, 252, 0.4);
  color: #7dd3fc;
}

.projects-cta {
  position: relative;
  min-height: 80vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  text-align: center;
  color: white;

  background: linear-gradient(
    to bottom,
    rgba(10, 10, 20, 0.9),
    rgba(10, 10, 20, 1)
  );

  padding: 4rem 2rem;
}

.projects-cta h2 {
  font-size: 2.4rem;
  color: #7dd3fc;
  margin-bottom: 1rem;
}

.projects-cta p {
  max-width: 600px;
  line-height: 1.7;
  margin-bottom: 3rem;
}

.cta-button {
  padding: 0.9rem 2.2rem;
  border-radius: 30px;
  background: linear-gradient(135deg, #38bdf8, #7dd3fc);
  color: #0a0a14;
  text-decoration: none;
  font-weight: 600;

  box-shadow: 0 10px 30px rgba(56, 189, 248, 0.4);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.cta-button:hover {
  transform: translateY(-4px);
  box-shadow: 0 20px 40px rgba(56, 189, 248, 0.6);
}

.scroll-indicator {
  position: absolute;
  bottom: 30px;

  font-size: 2rem;
  color: rgba(255, 255, 255, 0.6);

  cursor: pointer;
  animation: bounce 1.8s infinite;
}

@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(10px); }
}
</style>

