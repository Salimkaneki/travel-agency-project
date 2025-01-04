<!-- Navbar Component -->
<template>
  <nav class="navbar" :class="{ 'scrolled': scrolled }">
    <div class="nav-content">
      <div class="nav-brand">
        <h1>Travel<span>Agency</span></h1>
      </div>
      <ul class="nav-links" :class="{ 'active': menuOpen }">
        <li v-for="link in links" :key="link.path">
          <router-link :to="link.path" @click="closeMenu">
            {{ link.name }}
          </router-link>
        </li>
      </ul>
      <button class="menu-toggle" @click="toggleMenu">
        <div class="menu-icon" :class="{ 'open': menuOpen }">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </button>
    </div>
  </nav>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue'

export default {
  name: 'Navbar',
  setup() {
    const scrolled = ref(false)
    const menuOpen = ref(false)
    
    const links = ref([
      { name: 'Accueil', path: '/' },
      { name: 'Destinations', path: '/destinations' },
      { name: 'Offres', path: '/offers' },
      { name: 'À propos', path: '/about' },
      { name: 'Contact', path: '/contact' }
    ])

    const handleScroll = () => {
      scrolled.value = window.scrollY > 20
    }

    const toggleMenu = () => {
      menuOpen.value = !menuOpen.value
    }

    const closeMenu = () => {
      menuOpen.value = false
    }

    onMounted(() => {
      window.addEventListener('scroll', handleScroll)
    })

    onUnmounted(() => {
      window.removeEventListener('scroll', handleScroll)
    })

    return {
      scrolled,
      menuOpen,
      links,
      toggleMenu,
      closeMenu
    }
  }
}
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
}

.navbar.scrolled {
  background: rgba(255, 255, 255, 0.95);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
}

.nav-content {
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
}

.nav-brand h1 {
  font-size: 1.8rem;
  font-weight: 700;
  margin: 0;
  background: linear-gradient(45deg, #2563EB, #3B82F6);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.nav-links {
  display: flex;
  gap: 2rem;
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav-links a {
  color: #1a1a1a;
  text-decoration: none;
  font-weight: 500;
  padding: 0.5rem 0;
  position: relative;
  transition: color 0.3s ease;
}

.nav-links a::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background: linear-gradient(45deg, #2563EB, #3B82F6);
  transform: scaleX(0);
  transition: transform 0.3s ease;
}

.nav-links a:hover::after,
.nav-links a.router-link-active::after {
  transform: scaleX(1);
}

.menu-toggle {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
}

.menu-icon {
  width: 24px;
  height: 20px;
  position: relative;
}

.menu-icon span {
  display: block;
  width: 100%;
  height: 2px;
  background: #1a1a1a;
  position: absolute;
  transition: all 0.3s ease;
}

.menu-icon span:first-child {
  top: 0;
}

.menu-icon span:nth-child(2) {
  top: 50%;
  transform: translateY(-50%);
}

.menu-icon span:last-child {
  bottom: 0;
}

.menu-icon.open span:first-child {
  transform: rotate(45deg) translate(6px, 6px);
}

.menu-icon.open span:nth-child(2) {
  opacity: 0;
}

.menu-icon.open span:last-child {
  transform: rotate(-45deg) translate(6px, -6px);
}

@media (max-width: 768px) {
  .menu-toggle {
    display: block;
  }

  .nav-links {
    position: fixed;
    top: 70px;
    left: 0;
    right: 0;
    background: white;
    flex-direction: column;
    padding: 2rem;
    gap: 1.5rem;
    text-align: center;
    transform: translateY(-100%);
    opacity: 0;
    transition: all 0.3s ease;
    pointer-events: none;
  }

  .nav-links.active {
    transform: translateY(0);
    opacity: 1;
    pointer-events: auto;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  }
}
</style>
