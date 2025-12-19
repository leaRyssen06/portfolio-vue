<script setup>
defineOptions({ name: 'ProjectView' })

import { useRoute } from 'vue-router'
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

const projects = {
  projet1: {
    title: "Projet 1 — SAÉ",
    context: "Application développée dans le cadre du BUT Informatique, axée sur …",
    methods: ["Git", "travail en équipe", "Kanban"],
    results: "Captures, lien GitHub…",
    skills: [
      { name: "Réaliser un développement", level: 90 },
      { name: "Conduire un projet", level: 75 },
      { name: "Git", level: 85 }
    ],
    contribution: "Développement des fonctionnalités X et Y.",
    background: projet1Bg,
    images: [
      projet1Img1,
      projet1Img2
    ]
  },
  projet2: {
    title: "Projet 2 — Hackathon",
    context: "Projet réalisé lors de la Nuit de l’Info, en équipe, sous contraintes de temps.",
    methods: ["Git", "travail en équipe", "Kanban"],
    results: "Captures, lien GitHub…",
    skills: [
      { name: "Réaliser un développement", level: 90 },
      { name: "Conduire un projet", level: 75 },
      { name: "Git", level: 85 }
    ],
    contribution: "Développement des fonctionnalités X et Y.",
    background: projet2Bg,
    images: [
      projet2Img1,
      projet2Img2
    ]
  },
  projet3: {
    title: "Projet 3 — Personnel",
    context: "Projet personnel visant à approfondir mes compétences en …",
    methods: ["Git", "travail en équipe", "Kanban"],
    results: "Captures, lien GitHub…",
    skills: [
      { name: "Réaliser un développement", level: 90 },
      { name: "Conduire un projet", level: 75 },
      { name: "Git", level: 85 }
    ],
    contribution: "Développement des fonctionnalités X et Y.",
    background: projet3Bg,
    images: [
      projet3Img1,
      projet3Img2
    ]
  }
}

const project = projects[id]
</script>

<template>
  <section v-if="project" class="project-detail">
    <!-- Fond du projet -->
    <div
      class="project-background"
      :style="{ backgroundImage: `url(${project.background})` }"
    ></div>

    <!-- Contenu -->
    <div class="project-content">
      <h1>{{ project.title }}</h1>

      <div class="section section-context">
        <h2>Contexte</h2>
        <p>{{ project.context }}</p>
      </div>

      <div class="section section-methods">
        <h2>Méthodes</h2>
        <div class="method-tags">
          <span v-for="method in project.methods" :key="method" class="tag">
            {{ method }}
          </span>
        </div>
      </div>

      <div class="section section-results">
        <h2>Résultats</h2>
        <p>{{ project.results }}</p>
      </div>

      <div class="section section-skills">
        <h2>Compétences BUT</h2>

        <div class="skills-bars">
          <div v-for="skill in project.skills" :key="skill.name" class="skill-bar">
            <span class="skill-name">{{ skill.name }}</span>
            <div class="bar-container">
              <div class="bar-fill" :style="{ width: skill.level + '%' }"></div>
            </div>
          </div>
        </div>
      </div>

      <div class="section section-contribution">
        <h2>Ma contribution</h2>
        <p>{{ project.contribution }}</p>
        <!-- Optionnel : liste détaillée des tâches -->
        <!--
        <ul>
          <li>Développement de la fonctionnalité X</li>
          <li>Implémentation de la fonctionnalité Y</li>
        </ul>
        -->
      </div>

      <!-- Illustrations -->
      <div v-if="project.images && project.images.length" class="section section-illustrations">
        <h2>Illustrations</h2>
        <div class="images-container">
          <img
            v-for="(img, index) in project.images"
            :key="index"
            :src="img"
            :alt="`Illustration ${index + 1}`"
          />
        </div>
      </div>

    </div>
  </section>

  <p v-else>Projet introuvable.</p>
</template>

<style scoped>
.illustrations {
  margin-top: 2rem;
}

.images-container {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.images-container img {
  width: 48%;
  border-radius: 10px;
  object-fit: cover;
}

.project-detail {
  position: relative;
  min-height: 100vh;
  color: white;
  overflow: hidden;
  font-family: sans-serif;
}

.project-background {
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: center;
  filter: blur(8px) brightness(0.6);
  z-index: 0;
}

.project-content {
  position: relative;
  z-index: 1;
  max-width: 800px;
  margin: 0 auto;
  padding: 5%;
}

.section-context {
  background: rgba(15, 40, 80, 0.7); /* bleu foncé semi-transparent */
  border-left: 5px solid #60a5fa;   /* accent bleu clair */
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
  margin-bottom: 2rem;
}

.section-context h2 {
  font-size: 1.8rem;
  margin-bottom: 1rem;
}

.section-context p {
  font-size: 1.1rem;
  line-height: 1.6;
}

.section-methods {
  background: rgba(20, 50, 100, 0.7); /* bleu légèrement plus clair */
  border-left: 5px solid #3b82f6;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
  margin-bottom: 2rem;
}

.section-methods h2 {
  font-size: 1.8rem;
  margin-bottom: 1rem;
}

/* Container pour les tags */
.method-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

/* Style des tags */
.tag {
  background: rgba(255, 255, 255, 0.2);
  padding: 0.4rem 0.8rem;
  border-radius: 20px;
  font-size: 0.95rem;
  color: #fff;
  font-weight: 500;

  transition: transform 0.2s ease, background 0.2s ease;
  cursor: default;
}

.tag:hover {
  background: rgba(255, 255, 255, 0.4); /* plus lumineux */
  transform: translateY(-2px);           /* petit effet de levée */
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
}

.section-results {
  background: rgba(25, 60, 120, 0.7); /* bleu encore un peu plus clair */
  border-left: 5px solid #2563eb;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
  margin-bottom: 2rem;
}

.section-results h2 {
  font-size: 1.8rem;
  margin-bottom: 1rem;
}

.section-results p {
  font-size: 1.1rem;
  line-height: 1.6;
}

/* Pour les liens éventuels */
.section-results a {
  color: #fff;
  text-decoration: underline;
  transition: color 0.2s ease;
}

.section-results a:hover {
  color: #d1fae5;
}

.section-skills {
  background: rgba(20, 55, 110, 0.7); /* bleu semi-transparent */
  padding: 2rem;
  border-left: 5px solid #1d4ed8;
  border-radius: 10px;
  box-shadow: 0 8px 20px rgba(0,0,0,0.3);
  margin-bottom: 2rem;
}

.section-skills h2 {
  font-size: 1.8rem;
  margin-bottom: 1rem;
}

/* Barres de compétences */
.skills-bars {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.skill-bar {
  display: flex;
  flex-direction: column;
}

.skill-name {
  font-size: 1rem;
  margin-bottom: 0.3rem;
  color: #fff;
}

.bar-container {
  width: 100%;
  background: rgba(255,255,255,0.1);
  border-radius: 10px;
  height: 10px;
  overflow: hidden;
}

.bar-fill {
  height: 100%;
  background: #3b82f6; /* bleu vif pour la barre */
  border-radius: 10px 0 0 10px;
  transition: width 0.5s ease;
}


.section-contribution {
  background: rgba(15, 45, 90, 0.7); /* bleu foncé semi-transparent */
  padding: 2rem;
  border-left: 5px solid #3b82f6;   /* accent bleu vif */
  border-radius: 10px;
  box-shadow: 0 8px 20px rgba(0,0,0,0.3);
  margin-bottom: 2rem;
}

.section-contribution h2 {
  font-size: 1.8rem;
  margin-bottom: 1rem;
  color: #fff;
}

.section-contribution p,
.section-contribution ul {
  font-size: 1.1rem;
  line-height: 1.6;
  color: #fff;
}

.section-contribution ul {
  margin-top: 1rem;
  padding-left: 1.5rem;
}

.section-contribution li {
  margin-bottom: 0.5rem;
}


.section-illustrations {
  background: rgba(20, 50, 100, 0.7); /* bleu semi-transparent */
  padding: 2rem;
  border-left: 5px solid #60a5fa;   /* accent bleu clair */
  border-radius: 10px;
  box-shadow: 0 8px 20px rgba(0,0,0,0.3);
  margin-bottom: 2rem;
}

.section-illustrations h2 {
  font-size: 1.8rem;
  margin-bottom: 1rem;
  color: #fff;
}

.images-container {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.images-container img {
  width: 48%;
  border-radius: 10px;
  object-fit: cover;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
}

.images-container img:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 25px rgba(0,0,0,0.4);
}

</style>
