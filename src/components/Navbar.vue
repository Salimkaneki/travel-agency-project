<!-- Navbar Component -->
<template>
    <nav class="navbar" :class="{ 'shadow-lg': scrolled }">
      <div class="navbar-brand">
        <h1 class="text-gradient">TravelAgency</h1>
      </div>
      <ul class="navbar-links" :class="{ 'active': menuOpen }">
        <li v-for="link in links" :key="link.path">
          <router-link :to="link.path" @click="closeMenu">
            {{ link.name }}
            <span class="link-underline"></span>
          </router-link>
        </li>
      </ul>
      <button class="burger-menu" @click="toggleMenu" aria-label="Menu">
        <span class="burger-line" :class="{ 'active': menuOpen }"></span>
        <span class="burger-line" :class="{ 'active': menuOpen }"></span>
        <span class="burger-line" :class="{ 'active': menuOpen }"></span>
      </button>
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
        scrolled.value = window.scrollY > 50
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
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    background-color: rgba(255, 255, 255, 0.98);
    backdrop-filter: blur(12px);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    transition: all 0.4s ease;
  }
  
  .shadow-lg {
    box-shadow: 0 4px 20px -1px rgba(0, 0, 0, 0.1);
  }
  
  .text-gradient {
    font-size: 2rem;
    font-weight: 800;
    background: linear-gradient(45deg, #FF6B6B, #4ECDC4);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    margin: 0;
  }
  
  .navbar-links {
    display: flex;
    list-style: none;
    gap: 2.5rem;
    margin: 0;
    padding: 0;
  }
  
  .navbar-links a {
    text-decoration: none;
    color: #2D3436;
    font-weight: 600;
    padding: 0.5rem 0;
    position: relative;
    transition: color 0.3s ease;
  }
  
  .link-underline {
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 100%;
    height: 2px;
    background: linear-gradient(45deg, #FF6B6B, #4ECDC4);
    transform: scaleX(0);
    transition: transform 0.4s ease;
    transform-origin: right;
  }
  
  .navbar-links a:hover {
    color: #FF6B6B;
  }
  
  .navbar-links a:hover .link-underline,
  .navbar-links a.router-link-active .link-underline {
    transform: scaleX(1);
    transform-origin: left;
  }
  
  .burger-menu {
    display: none;
    flex-direction: column;
    gap: 6px;
    background: none;
    border: none;
    padding: 0.5rem;
    cursor: pointer;
  }
  
  .burger-line {
    width: 28px;
    height: 2px;
    background: #2D3436;
    transition: all 0.4s ease;
  }
  
  .burger-line.active:nth-child(1) {
    transform: rotate(45deg) translate(6px, 6px);
  }
  
  .burger-line.active:nth-child(2) {
    opacity: 0;
  }
  
  .burger-line.active:nth-child(3) {
    transform: rotate(-45deg) translate(6px, -6px);
  }
  
  @media screen and (max-width: 768px) {
    /* Mobile styles remain the same with updated colors */
  }
  </style>
  