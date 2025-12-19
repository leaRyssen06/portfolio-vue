<script setup>
defineOptions({ name: 'ProjectCard' })

defineProps({
  project: Object
})
</script>

<template>
  <div class="card">
    <h3>{{ project.title }}</h3>
    <p>{{ project.description }}</p>
    <router-link :to="`/projets/${project.id}`">
      Voir le projet
    </router-link>
  </div>
</template>

<style scoped>
.card {
  border: 1px solid #ccc;
  padding: 1rem;
}
</style>
