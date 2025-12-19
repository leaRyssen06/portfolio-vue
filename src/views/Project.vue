<script setup>
defineOptions({ name: 'ProjectView' })
import { useRoute } from 'vue-router'
import { ref, onMounted } from 'vue'

// --- IMPORTS DES IMAGES (Assure-toi que les fichiers existent dans ces dossiers) ---
import projet1Bg from '@/assets/img/projet1.png'
import projet2Bg from '@/assets/img/projet2.png'
import projet3Bg from '@/assets/img/projet3.png'

import projet1Img1 from '@/assets/img/projet1-illustration1.png'
import projet1Img2 from '@/assets/img/projet1-illustration2.png'
import projet2Img1 from '@/assets/img/projet2-illustration1.png'
import projet2Img2 from '@/assets/img/projet2-illustration2.png'
import projet3Img1 from '@/assets/img/projet3-illustration1.png'
import projet3Img2 from '@/assets/img/projet3-illustration2.png'

const route = useRoute()
const id = route.params.id
const selectedImage = ref(null)
const isLoaded = ref(false)

onMounted(() => {
  setTimeout(() => isLoaded.value = true, 100)
})

function openImage(img) { selectedImage.value = img }
function closeImage() { selectedImage.value = null }

const projects = {
  projet1: {
    title: "Démocratie Participative",
    subtitle: 'SAÉ 3.01 - Développement Full Stack Web',
    context: `Réponse à la demande d’un client fictif pour une plateforme citoyenne permettant de proposer des idées et de voter de manière sécurisée. Projet réalisé en équipe de 4.`,
    methods: ['Agile Scrum', 'Architecture MVC', 'Git / GitHub', 'PHP & SQL'],
    results: `Plateforme avec authentification, vérification par email et deux systèmes de vote innovants (Jugement majoritaire et Vote australien).`,
    skills: [
      { name: 'Développement Web PHP', level: 85 },
      { name: 'Gestion de Projet (Scrum)', level: 80 },
      { name: 'Architecture logicielle', level: 80 }
    ],
    contribution: `Développement de la logique métier (40% du code), gestion de l'authentification et rôle de Scrum Master sur la majorité des sprints.`,
    background: projet1Bg,
    images: [projet1Img1, projet1Img2]
  },
  projet2: {
    title: 'Pokémon TCG Java',
    subtitle: 'SAÉ 2.01 - Programmation Orientée Objet',
    context: `Conception d’une application reproduisant les mécaniques du célèbre jeu de cartes. Focus sur la structure du code et l'interface graphique.`,
    methods: ['Java', 'JavaFX', 'POO avancée', 'Git', 'Binôme'],
    results: `Jeu fonctionnel avec gestion des dégâts, des énergies et une interface interactive documentée.`,
    skills: [
      { name: 'Programmation Java', level: 85 },
      { name: 'Conception UI (JavaFX)', level: 80 },
      { name: 'Logique Algorithmique', level: 75 }
    ],
    contribution: `Architecture générale de l'application, implémentation des règles du jeu et création des composants graphiques.`,
    background: projet2Bg,
    images: [projet2Img1, projet2Img2]
  },
  projet3: {
    title: 'Conception Base de Données',
    subtitle: 'SAÉ 1.04 - Modélisation & SQL',
    context: `Analyse et implémentation d'un système d'information complexe sous Oracle à partir d'un cahier des charges client.`,
    methods: ['Modèle Entité-Association', 'Schéma Relationnel', 'Oracle SQL', 'Tests d’intégrité'],
    results: `Base de données optimisée, sans redondance, capable de répondre à des requêtes complexes de statistiques.`,
    skills: [
      { name: 'Modélisation (MCD/MLD)', level: 90 },
      { name: 'Langage SQL', level: 85 },
      { name: 'Rigueur Analytique', level: 80 }
    ],
    contribution: `Réalisation de l'intégralité du schéma relationnel, écriture des scripts de création et des requêtes de test.`,
    background: projet3Bg,
    images: [projet3Img1, projet3Img2]
  }
}

const project = projects[id]
</script>

<template>
  <div v-if="project" class="project-page">
    <div class="bg-wrapper">
      <div class="project-bg" :style="{ backgroundImage: `url(${project.background})` }"></div>
      <div class="overlay"></div>
    </div>

    <div class="project-container">
      <header class="project-header">
        <span class="category-tag">Dossier de Mission</span>
        <h1 class="glow-text">{{ project.title }}</h1>
        <p class="subtitle">{{ project.subtitle }}</p>
      </header>

      <div class="project-grid">
        <div class="info-column">
          <section class="glass-card">
            <h2><span class="icon">🚀</span> Contexte</h2>
            <p>{{ project.context }}</p>
          </section>

          <section class="glass-card">
            <h2><span class="icon">🛠️</span> Méthodes</h2>
            <div class="method-tags">
              <span v-for="method in project.methods" :key="method" class="tag">{{ method }}</span>
            </div>
          </section>

          <section class="glass-card">
            <h2><span class="icon">🏆</span> Résultats</h2>
            <p>{{ project.results }}</p>
          </section>
        </div>

        <div class="stats-column">
          <section class="glass-card skills-card">
            <h2>Compétences sollicitées</h2>
            <div class="skills-bars">
              <div v-for="skill in project.skills" :key="skill.name" class="skill-item">
                <div class="skill-info">
                  <span>{{ skill.name }}</span>
                  <span>{{ skill.level }}%</span>
                </div>
                <div class="bar-bg">
                  <div class="bar-fill" :style="{ width: isLoaded ? skill.level + '%' : '0%' }"></div>
                </div>
              </div>
            </div>
          </section>

          <section class="glass-card">
            <h2>Ma Contribution</h2>
            <p>{{ project.contribution }}</p>
          </section>
        </div>
      </div>

      <section v-if="project.images?.length" class="gallery-section">
        <h2 class="section-title">Aperçus du projet</h2>
        <div class="images-grid">
          <div v-for="(img, index) in project.images" :key="index" class="img-wrapper" @click="openImage(img)">
            <img :src="img" :alt="'Illustration ' + index" />
            <div class="img-hover"><span class="icon">🔍</span></div>
          </div>
        </div>
      </section>
    </div>

    <Transition name="fade">
      <div v-if="selectedImage" class="lightbox" @click.self="closeImage">
        <button class="close-btn" @click="closeImage">&times;</button>
        <img :src="selectedImage" class="lightbox-img" />
      </div>
    </Transition>
  </div>
  <div v-else class="not-found">Projet introuvable.</div>
</template>

<style scoped>
.project-page {
  position: relative;
  min-height: 100vh;
  color: #f8fafc;
  padding: 6rem 5%;
}

.bg-wrapper {
  position: fixed;
  inset: 0;
  z-index: -1;
}

.project-bg {
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  filter: blur(5px) brightness(0.25);
  animation: slowZoom 25s infinite alternate linear;
}

.overlay {
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at center, transparent, rgba(5, 5, 20, 0.85));
}

@keyframes slowZoom {
  from { transform: scale(1); }
  to { transform: scale(1.15); }
}

.project-container {
  max-width: 1100px;
  margin: 0 auto;
}

.project-header {
  text-align: center;
  margin-bottom: 5rem;
}

.category-tag {
  color: #7dd3fc;
  text-transform: uppercase;
  letter-spacing: 5px;
  font-size: 0.8rem;
  font-weight: 800;
  opacity: 0.8;
}

.glow-text {
  font-size: clamp(2.2rem, 6vw, 4rem);
  margin: 1.5rem 0;
  background: linear-gradient(to right, #fff, #7dd3fc, #38bdf8);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  filter: drop-shadow(0 0 15px rgba(125, 211, 252, 0.5));
}

.subtitle {
  font-size: 1.3rem;
  color: #94a3b8;
}

.project-grid {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 2.5rem;
}

.glass-card {
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(15px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-left: 4px solid #38bdf8;
  padding: 2.5rem;
  border-radius: 20px;
  margin-bottom: 2rem;
  transition: 0.4s ease;
}

.glass-card:hover {
  border-color: #7dd3fc;
  background: rgba(125, 211, 252, 0.05);
  transform: translateY(-5px);
}

.glass-card h2 {
  color: #7dd3fc;
  margin-bottom: 1.5rem;
  font-size: 1.5rem;
}

.method-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
}

.tag {
  background: rgba(125, 211, 252, 0.1);
  border: 1px solid rgba(125, 211, 252, 0.3);
  padding: 0.5rem 1.2rem;
  border-radius: 20px;
  font-size: 0.85rem;
  color: #e2e8f0;
}

.skill-item { margin-bottom: 1.8rem; }
.skill-info { display: flex; justify-content: space-between; margin-bottom: 0.7rem; }

.bar-bg {
  height: 8px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  overflow: hidden;
}

.bar-fill {
  height: 100%;
  background: linear-gradient(90deg, #38bdf8, #7dd3fc);
  box-shadow: 0 0 12px rgba(56, 189, 248, 0.6);
  transition: width 1.8s cubic-bezier(0.1, 0.5, 0.2, 1);
}

.images-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
}

.img-wrapper {
  position: relative;
  border-radius: 15px;
  overflow: hidden;
  cursor: pointer;
  aspect-ratio: 16/10;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.img-wrapper img { width: 100%; height: 100%; object-fit: cover; transition: 0.6s; }
.img-hover {
  position: absolute;
  inset: 0;
  background: rgba(56, 189, 248, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: 0.3s;
}

.img-wrapper:hover img { transform: scale(1.1); }
.img-wrapper:hover .img-hover { opacity: 1; }

.lightbox {
  position: fixed;
  inset: 0;
  z-index: 9999;
  background: rgba(0, 0, 0, 0.95);
  backdrop-filter: blur(15px);
  display: flex;
}

.lightbox-img { max-width: 90%; max-height: 85vh; margin: auto; border-radius: 10px; }
.close-btn { position: absolute; top: 40px; right: 50px; background: none; border: none; color: white; font-size: 4rem; cursor: pointer; }

.fade-enter-active, .fade-leave-active { transition: opacity 0.5s; }
.fade-enter-from, .fade-leave-to { opacity: 0; }

@media (max-width: 900px) {
  .project-grid { grid-template-columns: 1fr; }
  .glow-text { font-size: 2.5rem; }
}
</style>
