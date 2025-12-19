<script setup>
defineOptions({ name: 'CVView' })

// Liste des compétences avec niveaux pour les barres
const skillsCategories = [
  {
    title: 'Langages & Programmation',
    skills: [
      { name: 'PHP / SQL', level: 90 },
      { name: 'JavaScript / TypeScript', level: 80 },
      { name: 'Java / Python', level: 75 },
      { name: 'HTML / CSS', level: 95 },
      { name: 'C / C++', level: 65 }
    ]
  },
  {
    title: 'Outils & Méthodes',
    skills: [
      { name: 'Git / GitHub', level: 85 },
      { name: 'Figma (Ergonomie)', level: 80 },
      { name: 'Méthode SCRUM', level: 90 },
      { name: 'Oracle / PostgreSQL', level: 75 }
    ]
  }
]

const languages = [
  { name: 'Français (Maternel)', level: 100 },
  { name: 'Anglais', level: 75 },
  { name: 'Espagnol', level: 60 }
]
</script>

<template>
  <div class="cv-page">
    <div class="background-fixed"></div>

    <div class="cv-container">
      <header class="section presentation">
        <h1 class="glow-text">Léa RYSSEN</h1>
        <h2 class="role-title">Alternante en développement web - PHP, SQL, JavaScript</h2>
        <p class="intro-description">
          Étudiante en BUT Informatique, passionnée par le développement web et la conception de bases de données.
          Je recherche une alternance d'un an pour approfondir mes compétences en PHP, SQL, JavaScript et Python.
        </p>
      </header>

      <section class="section">
        <h3 class="section-title">Expériences Professionnelles</h3>
        <div class="experience-box">
          <div class="item card">
            <span class="date-tag">Nov. 2025 - Présent</span>
            <h4>Élève ambassadeur - IUT de Montpellier</h4>
            <p>Gestion et mise en place du forum des stages 2025 sur le campus.</p>
          </div>
          <div class="item card">
            <span class="date-tag">Oct. 2025 - Présent</span>
            <h4>Tuteur - IUT de Montpellier</h4>
            <p>Accompagnement des étudiants de première année (Certificat officiel).</p>
          </div>
          <div class="item card">
            <span class="date-tag">Depuis 2024</span>
            <h4>Bénévole informatique - UFOLEP GYM</h4>
            <p>Responsable ergonomie (Figma) et développement de modules de suivi.</p>
          </div>
        </div>
      </section>

      <section class="section">
        <h3 class="section-title">Formations</h3>
        <div class="timeline">
          <div class="timeline-event">
            <div class="dot"></div>
            <div class="timeline-card">
              <span class="date">2024 - 2027</span>
              <h4>BUT Informatique - IUT Montpellier</h4>
              <p>Parcours Web et BDD. Apprentissage SCRUM, conception d'applications et sécurité.</p>
            </div>
          </div>
          <div class="timeline-event">
            <div class="dot"></div>
            <div class="timeline-card">
              <span class="date">2024</span>
              <h4>Baccalauréat Général - Mention Bien</h4>
              <p>Lycée Jean Moulin Pézenas.</p>
            </div>
          </div>
        </div>
      </section>

      <section class="section">
        <h3 class="section-title">Projets Réalisés</h3>
        <div class="projects-vertical">
          <div class="item card">
            <span class="date-tag">2025</span>
            <h4>Projet Tutoré : Site de Covoiturage</h4>
            <p>Création d'un site web full-stack avec authentification et liaison BDD.</p>
          </div>
          <div class="item card">
            <span class="date-tag">2024</span>
            <h4>Projet Tutoré : Site Vitrine Escape Game</h4>
            <p>Conception d'une interface immersive en équipe (HTML, CSS, JS).</p>
          </div>
        </div>
      </section>

      <section class="section horizontal-split">
        <div class="split-box">
          <h3 class="section-title">Qualités</h3>
          <div class="tags-group">
            <span class="tag">Studieuse</span>
            <span class="tag">Ponctuelle</span>
            <span class="tag">Curieuse</span>
            <span class="tag">Rigoureuse</span>
            <span class="tag">Volontaire</span>
          </div>
        </div>
        <div class="split-box">
          <h3 class="section-title">Centres d'intérêt</h3>
          <ul class="interests-list">
            <li><span class="emoji">🤸</span> Gymnastique Artistique</li>
            <li><span class="emoji">🎵</span> Musique (Fifre)</li>
            <li><span class="emoji">📚</span> Lecture (Romans)</li>
          </ul>
        </div>
      </section>

      <section class="section">
        <h3 class="section-title">Langues</h3>
        <div class="skills-container">
          <div v-for="lang in languages" :key="lang.name" class="skill-row">
            <span class="skill-name">{{ lang.name }}</span>
            <div class="bar-total">
              <div class="bar-progress" :style="{ width: lang.level + '%' }"></div>
            </div>
          </div>
        </div>
      </section>

      <section class="section">
        <h3 class="section-title">Compétences</h3>
        <div class="competences-grid">
          <div v-for="cat in skillsCategories" :key="cat.title" class="cat-box">
            <h4>{{ cat.title }}</h4>
            <div v-for="s in cat.skills" :key="s.name" class="skill-row">
              <span class="skill-name">{{ s.name }}</span>
              <div class="bar-total">
                <div class="bar-progress" :style="{ width: s.level + '%' }"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer class="section contact-section">
        <h3 class="section-title">Contact</h3>
        <div class="contact-cards">
          <div class="contact-item">📧 lea.ryssen@etu.umontpellier.fr</div>
          <div class="contact-item">📞 06.43.39.70.84</div>
          <div class="contact-item">📍 Montpellier, France</div>
        </div>
      </footer>
    </div>
  </div>
</template>

<style scoped>
/* CONFIGURATION DU FOND */
.cv-page {
  position: relative;
  min-height: 100vh;
  color: white;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  padding: 4rem 1rem;
}

.background-fixed {
  position: fixed;
  inset: 0;
  background: url('@/assets/img/fondFinal.png') no-repeat center center;
  background-size: cover;
  z-index: -2;
}

.background-fixed::after {
  content: "";
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.6); /* Assombrit pour la lisibilité */
  z-index: -1;
}

.cv-container {
  max-width: 900px;
  margin: 0 auto;
}

/* SECTIONS & CARTES */
.section {
  margin-bottom: 4rem;
  animation: slideUp 0.8s ease-out forwards;
}

.section-title {
  font-size: 1.8rem;
  color: #7dd3fc;
  border-bottom: 2px solid rgba(125, 211, 252, 0.3);
  padding-bottom: 0.5rem;
  margin-bottom: 2rem;
  text-shadow: 0 0 10px rgba(125, 211, 252, 0.5);
}

.card {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  padding: 1.5rem;
  border-radius: 15px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  margin-bottom: 1rem;
  transition: 0.3s ease;
}

.card:hover {
  border-color: #7dd3fc;
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(56, 189, 248, 0.2);
}

/* TITRE PRINCIPAL */
.glow-text {
  font-size: 3.5rem;
  margin: 0;
  background: linear-gradient(to right, #ffffff, #7dd3fc);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  filter: drop-shadow(0 0 10px rgba(125, 211, 252, 0.8));
}

.role-title {
  color: #38bdf8;
  font-size: 1.4rem;
  margin-bottom: 1rem;
}

.date-tag {
  font-size: 0.85rem;
  color: #7dd3fc;
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

/* FRISE CHRONOLOGIQUE */
.timeline {
  border-left: 2px solid #7dd3fc;
  padding-left: 2rem;
  margin-left: 1rem;
}

.timeline-event {
  position: relative;
  margin-bottom: 2rem;
}

.dot {
  position: absolute;
  left: -2.4rem;
  top: 0.5rem;
  width: 12px;
  height: 12px;
  background: #7dd3fc;
  border-radius: 50%;
  box-shadow: 0 0 15px #7dd3fc;
}

.timeline-card {
  background: rgba(255, 255, 255, 0.03);
  padding: 1rem 1.5rem;
  border-radius: 12px;
}

/* HORIZONTAL SPLIT (QUALITÉS/INTÉRÊTS) */
.horizontal-split {
  display: flex;
  gap: 2rem;
}

.split-box {
  flex: 1;
}

.tags-group {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tag {
  background: rgba(125, 211, 252, 0.1);
  border: 1px solid #7dd3fc;
  padding: 0.4rem 0.9rem;
  border-radius: 20px;
  font-size: 0.9rem;
}

.interests-list {
  list-style: none;
  padding: 0;
}

.interests-list li {
  margin-bottom: 0.8rem;
  font-size: 1.1rem;
}

.emoji { margin-right: 10px; }

/* BARRES DE PROGRESSION */
.skill-row {
  margin-bottom: 1.2rem;
}

.skill-name {
  display: block;
  font-size: 0.95rem;
  margin-bottom: 5px;
}

.bar-total {
  width: 100%;
  height: 10px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 5px;
  overflow: hidden;
}

.bar-progress {
  height: 100%;
  background: linear-gradient(90deg, #38bdf8, #7dd3fc);
  box-shadow: 0 0 10px #38bdf8;
  border-radius: 5px;
}

.competences-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
}

/* CONTACT */
.contact-cards {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1rem;
}

.contact-item {
  background: rgba(255, 255, 255, 0.05);
  padding: 1rem;
  border-radius: 10px;
  border-left: 3px solid #7dd3fc;
}

/* ANIMATIONS */
@keyframes slideUp {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}

/* RESPONSIVE */
@media (max-width: 768px) {
  .horizontal-split, .competences-grid {
    flex-direction: column;
    grid-template-columns: 1fr;
  }
  .glow-text { font-size: 2.5rem; }
}
</style>
