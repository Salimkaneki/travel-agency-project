<template>
  <div id="app">
    <Navbar />
    <main class="main-content">
      <router-view v-slot="{ Component }">
        <transition name="page" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>
    <Footer />
  </div>
</template>

<script>
import { onMounted } from 'vue';
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    Navbar,
    Footer,
  },
  setup() {
    onMounted(() => {
      // Gestion du scroll smooth pour les ancres
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
          e.preventDefault();
          document.querySelector(this.getAttribute('href'))?.scrollIntoView({
            behavior: 'smooth'
          });
        });
      });
    });
  }
};
</script>

<style>
/* Reset moderne et normalisé */
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* Variables globales */
:root {
  --primary-color: #2563EB;
  --secondary-color: #3B82F6;
  --text-color: #1a1a1a;
  --text-light: #4B5563;
  --background-color: #ffffff;
  --nav-height: 76px;
  --container-width: 1400px;
  --transition-speed: 0.3s;
}

/* Styles de base */
html {
  scroll-behavior: smooth;
  font-size: 16px;
}

body {
  font-family: 'Inter', 'Segoe UI', system-ui, -apple-system, sans-serif;
  line-height: 1.6;
  color: var(--text-color);
  background-color: var(--background-color);
}

/* Layout principal */
#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.main-content {
  flex: 1;
  padding-top: var(--nav-height);
  width: 100%;
  margin: 0 auto;
  position: relative;
}

/* Animations de transition de page */
.page-enter-active,
.page-leave-active {
  transition: opacity var(--transition-speed) ease,
              transform var(--transition-speed) ease-out;
}

.page-enter-from {
  opacity: 0;
  transform: translateY(10px);
}

.page-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

/* Classes utilitaires */
.container {
  width: 100%;
  max-width: var(--container-width);
  margin: 0 auto;
  padding: 0 2rem;
}

.text-gradient {
  background: linear-gradient(45deg, var(--primary-color), var(--secondary-color));
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* Styles pour les sections */
.section {
  padding: 4rem 0;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 2rem;
  text-align: center;
}

/* Media Queries */
@media (max-width: 1024px) {
  :root {
    --container-width: 90%;
  }
  
  .section {
    padding: 3rem 0;
  }
}

@media (max-width: 768px) {
  :root {
    --nav-height: 70px;
  }

  html {
    font-size: 15px;
  }

  .container {
    padding: 0 1.5rem;
  }

  .section {
    padding: 2rem 0;
  }

  .section-title {
    font-size: 2rem;
  }
}

/* Optimisations pour le touch */
@media (hover: none) {
  * {
    cursor: default !important;
  }
}

/* Styles d'accessibilité */
:focus {
  outline: 3px solid var(--primary-color);
  outline-offset: 2px;
}

:focus:not(:focus-visible) {
  outline: none;
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}
</style>