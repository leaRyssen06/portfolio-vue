<script setup>
defineOptions({ name: 'MainFooter' })
</script>

<template>
  <footer class="cinematic-footer">
    <div class="footer-content">
      <p class="copyright">
        <span class="dot"></span>
        © 2025 – <span class="name">Léa RYSSEN</span> – BUT Informatique
        <span class="dot"></span>
      </p>
      <div class="footer-glow"></div>
    </div>
  </footer>
</template>

<style scoped>
.cinematic-footer {
  position: relative;
  background: rgba(5, 5, 15, 0.8);
  backdrop-filter: blur(15px);
  padding: 2rem;
  text-align: center;
  border-top: 1px solid rgba(125, 211, 252, 0.2);
  overflow: hidden;
}

.footer-content {
  position: relative;
  z-index: 1;
}

.copyright {
  color: rgba(255, 255, 255, 0.6);
  font-size: 1rem;
  letter-spacing: 1.5px;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  transition: color 0.3s ease;
}

.name {
  color: #7dd3fc;
  font-weight: 600;
  text-shadow: 0 0 10px rgba(125, 211, 252, 0.3);
}

.dot {
  width: 4px;
  height: 4px;
  background: #7dd3fc;
  border-radius: 50%;
  box-shadow: 0 0 8px #7dd3fc;
}

/* Petit effet de lueur au survol du texte */
.cinematic-footer:hover .copyright {
  color: rgba(255, 255, 255, 0.9);
}

/* Lueur diffuse en arrière-plan du footer */
.footer-glow {
  position: absolute;
  top: -50px;
  left: 50%;
  transform: translateX(-50%);
  width: 300px;
  height: 100px;
  background: radial-gradient(circle, rgba(56, 189, 248, 0.15) 0%, transparent 70%);
  pointer-events: none;
}

@media (max-width: 768px) {
  .copyright {
    font-size: 0.85rem;
    flex-direction: column;
    gap: 0.5rem;
  }
  .dot {
    display: none;
  }
}
</style>
