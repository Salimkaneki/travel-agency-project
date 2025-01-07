<template>
  <div class="home">
    <section class="hero-section">
      <div class="hero-content">
        <div class="hero-text">
          <h1 class="title">
            Découvrez le monde avec nous
            <span class="title-accent" aria-hidden="true"></span>
          </h1>
          <p class="subtitle">
            Une aventure unique vous attend. Des voyages sur mesure pour des souvenirs inoubliables.
          </p>
          <div class="buttons">
            <router-link to="/destinations" class="btn btn-primary">
              Explorer les destinations
              <span class="btn-arrow" aria-hidden="true">→</span>
            </router-link>
            <router-link to="/offers" class="btn btn-secondary">
              Nos offres
            </router-link>
          </div>
        </div>
      </div>
      <div class="hero-visual">
        <div class="image-container">
          <img 
            :src="require('@/assets/images/paris.jpg')" 
            alt="Vue panoramique de Paris avec la Tour Eiffel" 
            class="main-image"
            loading="lazy"
          />
          <img 
            :src="require('@/assets/images/bali.jpg')" 
            alt="Plage paradisiaque de Bali" 
            class="secondary-image"
            loading="lazy"
          />
          <div class="image-overlay" aria-hidden="true"></div>
        </div>
      </div>
    </section>

    <section class="featured-section section">
      <div class="container">
        <h2 class="section-title">Destinations populaires</h2>
        <div class="featured-grid">
          <article v-for="destination in destinations" 
                   :key="destination.id" 
                   class="destination-card">
            <div class="card-image-wrapper">
              <img :src="destination.image" 
                   :alt="'Vue de ' + destination.name"
                   class="card-image"
                   loading="lazy" />
              <div class="card-overlay">
                <span class="card-price">À partir de {{ destination.price }}€</span>
              </div>
            </div>
            <div class="card-content">
              <h3 class="card-title">{{ destination.name }}</h3>
              <p class="card-description">{{ destination.description }}</p>
              <div class="card-footer">
                <div class="card-info">
                  <span class="card-duration">{{ destination.duration }} jours</span>
                  <span class="card-rating">
                    ★ {{ destination.rating }}
                  </span>
                </div>
                <router-link :to="'/destination/' + destination.id" class="card-button">
                  Découvrir
                  <span class="btn-arrow">→</span>
                </router-link>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';

// État pour l'animation au scroll
const heroContent = ref(null);
const isVisible = ref(false);

// Observer basique pour les animations au scroll
onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        isVisible.value = entry.isIntersecting;
      });
    },
    { threshold: 0.2 }
  );

  if (heroContent.value) {
    observer.observe(heroContent.value);
  }
});
</script>

<style scoped>
.home {
  min-height: 100vh;
  background: linear-gradient(to bottom right, #f8f9ff, #ffffff);
  overflow-x: hidden;
}

.hero-section {
  max-width: var(--container-width);
  margin: 0 auto;
  padding: 8rem 2rem 6rem;
  display: flex;
  align-items: center;
  gap: 4rem;
  position: relative;
}

.hero-content {
  flex: 1;
  position: relative;
  z-index: 2;
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 0.8s ease forwards;
}

.hero-text {
  max-width: 600px;
}

.title {
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  color: var(--text-color);
  line-height: 1.2;
  margin-bottom: 1.5rem;
  position: relative;
}

.title-accent {
  position: absolute;
  bottom: -10px;
  left: 0;
  width: 120px;
  height: 8px;
  background: linear-gradient(90deg, var(--primary-color), var(--secondary-color));
  border-radius: 4px;
  opacity: 0.3;
}

.subtitle {
  font-size: clamp(1rem, 2vw, 1.2rem);
  color: var(--text-light);
  line-height: 1.7;
  margin-bottom: 2.5rem;
}

.buttons {
  display: flex;
  gap: 1.5rem;
}

.btn {
  padding: 1rem 2rem;
  border-radius: 8px;
  font-weight: 600;
  text-decoration: none;
  transition: all var(--transition-speed) ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.btn-primary {
  background: linear-gradient(45deg, var(--primary-color), var(--secondary-color));
  color: white;
  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.2);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(59, 130, 246, 0.3);
}

.btn-secondary {
  background: white;
  color: var(--text-color);
  border: 2px solid #E5E7EB;
}

.btn-secondary:hover {
  background: #F9FAFB;
  border-color: #D1D5DB;
}

.btn-arrow {
  transition: transform 0.3s ease;
}

.btn-primary:hover .btn-arrow {
  transform: translateX(4px);
}

.hero-visual {
  flex: 1;
  position: relative;
}

.image-container {
  position: relative;
  height: 500px;
  perspective: 1000px;
}

.main-image, .secondary-image {
  position: absolute;
  border-radius: 16px;
  object-fit: cover;
  transition: transform 0.8s ease;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  opacity: 0;
  animation: fadeIn 1s ease forwards 0.3s;
}

.main-image {
  width: 80%;
  height: 400px;
  right: 0;
  top: 0;
  z-index: 2;
  transform: rotateY(-5deg) translateX(50px);
  animation: slideInRight 1s ease forwards 0.3s;
}

.secondary-image {
  width: 60%;
  height: 350px;
  left: 0;
  bottom: 0;
  z-index: 1;
  transform: rotateY(5deg) translateX(-50px);
  animation: slideInLeft 1s ease forwards 0.5s;
}

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideInRight {
  to {
    opacity: 1;
    transform: rotateY(-5deg) translateX(0);
  }
}

@keyframes slideInLeft {
  to {
    opacity: 1;
    transform: rotateY(5deg) translateX(0);
  }
}

@media (max-width: 1024px) {
  .hero-section {
    flex-direction: column;
    padding: 6rem 2rem 4rem;
    text-align: center;
  }

  .hero-text {
    margin: 0 auto;
  }

  .title-accent {
    left: 50%;
    transform: translateX(-50%);
  }

  .buttons {
    justify-content: center;
  }

  .image-container {
    height: 400px;
    margin-top: 2rem;
  }
}

@media (max-width: 768px) {
  .hero-section {
    padding: 4rem 1.5rem 3rem;
  }

  .buttons {
    flex-direction: column;
    gap: 1rem;
  }

  .image-container {
    height: 300px;
  }

  .main-image {
    width: 100%;
    height: 300px;
    position: relative;
    transform: none;
  }

  .secondary-image {
    display: none;
  }
}

@media (prefers-reduced-motion: reduce) {
  .hero-content,
  .main-image,
  .secondary-image {
    animation: none;
    transform: none;
  }
}
</style>