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
    methods: "Git, travail en équipe, Kanban…",
    results: "Captures, lien GitHub…",
    skills: ["Réaliser un développement", "Conduire un projet"],
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
    methods: "Git, travail en équipe, Kanban…",
    results: "Captures, lien GitHub…",
    skills: ["Réaliser un développement", "Conduire un projet"],
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
    methods: "Git, travail en équipe, Kanban…",
    results: "Captures, lien GitHub…",
    skills: ["Réaliser un développement", "Conduire un projet"],
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

      <h2>Contexte</h2>
      <p>{{ project.context }}</p>

      <h2>Méthodes</h2>
      <p>{{ project.methods }}</p>

      <h2>Résultats</h2>
      <p>{{ project.results }}</p>

      <h2>Compétences BUT</h2>
      <ul>
        <li v-for="skill in project.skills" :key="skill">{{ skill }}</li>
      </ul>

      <h2>Ma contribution</h2>
      <p>{{ project.contribution }}</p>

      <!-- Illustrations -->
      <div v-if="project.images && project.images.length" class="illustrations">
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
  padding: 5%;
}
</style>
