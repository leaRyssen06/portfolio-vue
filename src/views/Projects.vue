<script setup>
defineOptions({
  name: 'ProjectsView'
})
</script>

<template>
  <div class="projects-page">
    <!-- PROJET 1 -->
    <section class="project project-1">
      <div class="content">
        <h2>Projet 1 — SAÉ</h2>
        <p>
          Application développée dans le cadre du BUT Informatique,
          axée sur …
        </p>
        <router-link to="/projets/projet1" class="project-btn">
          Voir le projet
        </router-link>
      </div>
    </section>

    <!-- PROJET 2 -->
    <section class="project project-2">
      <div class="content">
        <h2>Projet 2 — Hackathon</h2>
        <p>
          Projet réalisé lors de la Nuit de l’Info,
          en équipe, sous contraintes de temps.
        </p>
        <router-link to="/projets/projet2" class="project-btn">
          Voir le projet
        </router-link>
      </div>
    </section>

    <!-- PROJET 3 -->
    <section class="project project-3">
      <div class="content">
        <h2>Projet 3 — Personnel</h2>
        <p>
          Projet personnel visant à approfondir mes compétences en …
        </p>
        <router-link to="/projets/projet3" class="project-btn">
          Voir le projet
        </router-link>
      </div>
    </section>
  </div>
</template>

<style scoped>
.projects-page {
  background: #05050a;
  color: white;
  position: relative;
  overflow: hidden;
}

/* SECTION PROJET */
.project {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 0 10%;
}

.project::after {
  content: '';
  position: absolute;
  inset: 0;

  background: linear-gradient(
    to bottom,
    rgba(5, 5, 10, 0.85) 0%,
    rgba(5, 5, 10, 0.2) 50%,
    rgba(5, 5, 10, 0.85) 100%
  );

  z-index: 1;
}


/* CONTENU */
.content {
  position: relative;
  max-width: 600px;
  z-index: 2;
}

.content h2 {
  font-size: 2.5rem;
  color: #7dd3fc;
  margin-bottom: 1rem;
}

.content p {
  line-height: 1.7;
  margin-bottom: 2rem;
}

.project::before {
  content: '';
  position: absolute;
  inset: 0;

  background-size: cover;
  background-position: center;
  filter: blur(8px) brightness(0.6);
  transform: scale(1.1);
  z-index: 0;
}

/* Images spécifiques */
.project-1::before {
  background-image: url('@/assets/img/projet1.png');
}

.project-2::before {
  background-image: url('@/assets/img/projet2.png');
}

.project-3::before {
  background-image: url('@/assets/img/projet3.png');
}

.project-btn {
  display: inline-block;
  padding: 0.8rem 2rem;
  border-radius: 30px;

  background: linear-gradient(135deg, #38bdf8, #7dd3fc);
  color: #05050a;
  font-weight: 600;
  text-decoration: none;

  box-shadow: 0 10px 30px rgba(56, 189, 248, 0.4);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.project-btn:hover {
  transform: translateY(-4px);
  box-shadow: 0 20px 40px rgba(56, 189, 248, 0.6);
}
</style>

