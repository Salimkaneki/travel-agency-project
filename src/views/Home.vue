<template>
  <div class="home">
    <div class="hero-section">
      <div class="hero-content">
        <div class="hero-text">
          <h1 class="title">
            Découvrez le monde avec nous
            <span class="title-accent"></span>
          </h1>
          <p class="subtitle">
            Une aventure unique vous attend. Des voyages sur mesure pour des souvenirs inoubliables.
          </p>
          <div class="buttons">
            <router-link to="/destinations" class="btn btn-primary">
              Explorer les destinations
              <span class="btn-arrow">→</span>
            </router-link>
            <router-link to="/offers" class="btn btn-secondary">
              Nos offres
            </router-link>
          </div>
        </div>
      </div>
      <div class="hero-visual">
        <div class="image-container">
          <img src="@/assets/images/paris.jpg" alt="Paris" class="main-image"/>
          <img src="@/assets/images/bali.jpg" alt="Bali" class="secondary-image"/>
          <div class="image-overlay"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.home {
  min-height: 100vh;
  background: linear-gradient(to bottom right, #f8f9ff, #ffffff);
  overflow: hidden;
}

.hero-section {
  max-width: 1400px;
  margin: 0 auto;
  padding: 6rem 2rem;
  display: flex;
  align-items: center;
  gap: 4rem;
  position: relative;
}

.hero-content {
  flex: 1;
  position: relative;
  z-index: 2;
}

.hero-text {
  max-width: 600px;
}

.title {
  font-size: 3.5rem;
  color: #1a1a1a;
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
  background: linear-gradient(90deg, #3B82F6, #60A5FA);
  border-radius: 4px;
  opacity: 0.3;
}

.subtitle {
  font-size: 1.2rem;
  color: #4B5563;
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
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.btn-primary {
  background: linear-gradient(45deg, #2563EB, #3B82F6);
  color: white;
  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.2);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(59, 130, 246, 0.3);
}

.btn-secondary {
  background: white;
  color: #1a1a1a;
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
  transition: transform 0.5s ease;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
}

.main-image {
  width: 80%;
  height: 400px;
  right: 0;
  top: 0;
  z-index: 2;
  transform: rotateY(-5deg);
}

.secondary-image {
  width: 60%;
  height: 350px;
  left: 0;
  bottom: 0;
  z-index: 1;
  transform: rotateY(5deg);
}

.image-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(45deg, rgba(59, 130, 246, 0.1), transparent);
  border-radius: 16px;
  z-index: 3;
}

@media (max-width: 1024px) {
  .hero-section {
    flex-direction: column;
    padding: 4rem 2rem;
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

  .hero-visual {
    width: 100%;
    margin-top: 3rem;
  }

  .image-container {
    height: 400px;
  }
}

@media (max-width: 768px) {
  .hero-section {
    padding: 3rem 1.5rem;
  }

  .title {
    font-size: 2.5rem;
  }

  .buttons {
    flex-direction: column;
  }

  .image-container {
    height: 300px;
  }

  .main-image {
    width: 90%;
    height: 300px;
    position: relative;
    transform: none;
  }

  .secondary-image {
    display: none;
  }
}
</style>