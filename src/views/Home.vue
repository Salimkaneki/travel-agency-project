<template>
    <div class="home">
      <div class="hero-section">
        <div class="content-wrapper">
          <h1 class="title">
            <span class="gradient-text">Explorez le Monde</span>
            <br/>avec Travel Agency
          </h1>
          <p class="subtitle">
            Découvrez des destinations extraordinaires et vivez des expériences 
            inoubliables grâce à nos offres exclusives et personnalisées.
          </p>
          <div class="cta-container">
            <router-link to="/destinations" class="cta-button primary">
              Découvrir nos destinations
              <span class="button-arrow">→</span>
            </router-link>
            <router-link to="/offers" class="cta-button secondary">
              Voir les offres spéciales
            </router-link>
          </div>
        </div>
        <div class="decorative-shape"></div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "Home"
  };
  </script>
  
  <style scoped>
  .home {
    min-height: 100vh;
    display: flex;
    align-items: center;
    background: linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(249,250,251,0.95) 100%);
  }
  
  .hero-section {
    width: 100%;
    padding: 6rem 2rem;
    position: relative;
    overflow: hidden;
  }
  
  .content-wrapper {
    max-width: 1200px;
    margin: 0 auto;
    position: relative;
    z-index: 2;
  }
  
  .title {
    font-size: 3.5rem;
    line-height: 1.2;
    margin-bottom: 1.5rem;
    font-weight: 800;
    color: #2D3436;
  }
  
  .gradient-text {
    background: linear-gradient(45deg, #FF6B6B, #4ECDC4);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  
  .subtitle {
    font-size: 1.25rem;
    line-height: 1.6;
    color: #636E72;
    max-width: 600px;
    margin-bottom: 2.5rem;
  }
  
  .cta-container {
    display: flex;
    gap: 1.5rem;
    flex-wrap: wrap;
  }
  
  .cta-button {
    display: inline-flex;
    align-items: center;
    padding: 1rem 2rem;
    border-radius: 12px;
    font-weight: 600;
    font-size: 1.1rem;
    text-decoration: none;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
  }
  
  .cta-button.primary {
    background: linear-gradient(45deg, #FF6B6B, #4ECDC4);
    color: white;
    box-shadow: 0 4px 15px rgba(255, 107, 107, 0.2);
  }
  
  .cta-button.secondary {
    background: rgba(255, 255, 255, 0.9);
    color: #2D3436;
    border: 2px solid #E0E0E0;
  }
  
  .button-arrow {
    margin-left: 0.5rem;
    transition: transform 0.3s ease;
  }
  
  .cta-button.primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(255, 107, 107, 0.3);
  }
  
  .cta-button.primary:hover .button-arrow {
    transform: translateX(4px);
  }
  
  .cta-button.secondary:hover {
    background: #F8F9FA;
    border-color: #4ECDC4;
    transform: translateY(-2px);
  }
  
  .decorative-shape {
    position: absolute;
    top: -50%;
    right: -20%;
    width: 800px;
    height: 800px;
    background: linear-gradient(45deg, rgba(78, 205, 196, 0.1), rgba(255, 107, 107, 0.1));
    border-radius: 50%;
    z-index: 1;
    animation: float 8s ease-in-out infinite;
  }
  
  @keyframes float {
    0%, 100% {
      transform: translateY(0) rotate(0deg);
    }
    50% {
      transform: translateY(-30px) rotate(5deg);
    }
  }
  
  @media screen and (max-width: 768px) {
    .hero-section {
      padding: 4rem 1.5rem;
      text-align: center;
    }
  
    .title {
      font-size: 2.5rem;
    }
  
    .subtitle {
      font-size: 1.1rem;
      margin: 0 auto 2rem auto;
    }
  
    .cta-container {
      justify-content: center;
    }
  
    .decorative-shape {
      opacity: 0.5;
    }
  }
  </style>