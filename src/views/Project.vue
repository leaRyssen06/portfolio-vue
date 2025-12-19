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

import { ref } from 'vue'

const selectedImage = ref(null)

function openImage(img) {
  selectedImage.value = img
}

function closeImage() {
  selectedImage.value = null
}


const route = useRoute()
const id = route.params.id

const projects = {
  projet1: {
    title: "SAÉ 3A - Projet de sit web de démocratie participative",
    subtitle: 'Développement d’un site web full stack avec système de vote',
    context: `Ce projet consistait à répondre à la demande d’un client fictif souhaitant
              un site web de démocratie participative. L’objectif était de concevoir une
              plateforme permettant aux utilisateurs de s’exprimer, de proposer des idées
              et de participer à des votes structurés, dans un cadre sécurisé et fiable.
              Le projet a été réalisé en équipe de quatre dans le cadre du BUT Informatique.`,
    methods: [
      'Travail en équipe (4 personnes)',
      'Méthode agile Scrum',
      'Rôle de Scrum Master (4 sprints sur 5)',
      'Architecture MVC',
      'Gestion de version avec Git'
    ],
    results: `Le projet a abouti à un site web fonctionnel intégrant une authentification
              complète avec gestion des mots de passe et vérification par email.
              Les utilisateurs peuvent créer des questions, proposer des réponses,
              voter selon deux systèmes distincts (jugement majoritaire et vote australien),
              et consulter les résultats publiés.`,
    skills: [
      { name: 'Développement web full stack', level: 85 },
      { name: 'Architecture MVC', level: 80 },
      { name: 'Gestion de base de données', level: 80 },
      { name: 'Méthodes agiles (Scrum)', level: 75 },
      { name: 'Travail en équipe', level: 85 }
    ],
    contribution: `J’ai réalisé environ 40 % du développement du projet, en intervenant
                  principalement sur la logique applicative, l’authentification des utilisateurs
                  et l’interaction avec la base de données. En parallèle, j’ai assuré le rôle
                  de Scrum Master sur 4 sprints sur 5, en organisant les réunions, le suivi
                  des tâches et la coordination de l’équipe.`,
    background: projet1Bg,
    images: [
      projet1Img1,
      projet1Img2
    ]
  },
  projet2: {
    title: 'SAE 2.01 — Pokémon TCG',
    subtitle: 'Développement d’un jeu de cartes en Java',
    context: `Cette SAE avait pour objectif de concevoir une application complète
              reproduisant les mécaniques d’un jeu de cartes de type TCG.
              Le projet s’est déroulé sur plusieurs semaines et a été réalisé en binôme
              dans le cadre du BUT Informatique (semestre 2).`,
    methods: [
      'Programmation orientée objet (Java)',
      'Séparation logique métier / interface',
      'Travail en binôme',
      'Gestion de version avec Git',
      'Conception d’interface avec JavaFX'
    ],
    results:  `Le projet a abouti à une application fonctionnelle intégrant les règles
              principales du jeu Pokémon TCG ainsi qu’une interface graphique claire
              et interactive. Le code est structuré de manière modulaire et documentée,
              facilitant son évolution et sa maintenance.`,
    skills: [
      { name: 'Développement applicatif', level: 85 },
      { name: 'Programmation orientée objet', level: 80 },
      { name: 'Architecture logicielle', level: 75 },
      { name: 'Travail en équipe', level: 70 }
    ],
    contribution: `J’ai principalement travaillé sur la logique du jeu, l’architecture
                  générale de l’application et la mise en place de plusieurs fonctionnalités
                  clés. J’ai également participé à la conception de l’interface graphique
                  et à l’organisation du travail en binôme.`,
    background: projet2Bg,
    images: [
      projet2Img1,
      projet2Img2
    ]
  },
  projet3: {
    title: 'SAE 1.04 — Conception de base de données',
    subtitle: 'Modélisation et implémentation sous Oracle',
    context: `Cette SAE avait pour but de concevoir une base de données relationnelle
              à partir d’un cahier des charges. Le projet s’inscrit dans le cadre
              du BUT Informatique (semestre 1) et visait à comprendre les différentes
              étapes de conception d’une base de données fiable.`,
    methods: [
      'Analyse du besoin fonctionnel',
      'Modélisation entité-association',
      'Transformation en schéma relationnel',
      'Création et test des tables SQL',
      'Utilisation d’Oracle'
    ],
    results: `Le projet a permis de produire une base de données cohérente et fonctionnelle,
              respectant les contraintes du cahier des charges. Les tables ont été testées
              à l’aide de requêtes SQL afin de valider l’intégrité et la pertinence du modèle.`,
    skills: [
      { name: 'Modélisation de données', level: 85 },
      { name: 'SQL', level: 80 },
      { name: 'Analyse de besoins', level: 70 },
      { name: 'Rigueur et organisation', level: 75 }
    ],
    contribution: `J’ai réalisé l’intégralité de la modélisation de la base de données,
                  depuis le schéma entité-association jusqu’à l’implémentation SQL.
                  J’ai également effectué les tests et vérifié la cohérence des données.`,
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
            @click="openImage(img)"
          />
        </div>
      </div>

      <!-- Lightbox -->
      <div v-if="selectedImage" class="lightbox" @click.self="closeImage">
        <button class="close-btn" @click="closeImage">&times;</button>
        <img :src="selectedImage" alt="Image vue en grand" />
      </div>


    </div>
  </section>

  <p v-else>Projet introuvable.</p>
</template>

<style scoped>
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

/* Lightbox */
.lightbox {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  backdrop-filter: blur(8px);
}

.lightbox img {
  max-width: 90%;
  max-height: 70vh;
  border-radius: 10px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.7);
  object-fit: contain;
}

.close-btn {
  position: absolute;
  top: 20px;
  right: 30px;
  font-size: 2rem;
  background: transparent;
  color: white;
  border: none;
  cursor: pointer;
  z-index: 10000;
}

.close-btn:hover {
  color: #fbbf24; /* un jaune pour le hover */
}

</style>
