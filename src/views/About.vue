<template>
    <div class="about-container">
      <div class="hero-section">
        <h1>À propos de Voyage Dreams</h1>
        <p class="subtitle">Votre partenaire de confiance depuis 2010</p>
      </div>
  
      <div class="content-section">
        <div class="mission-block">
          <h2>Notre Mission</h2>
          <p>
            Chez Voyage Dreams, nous nous engageons à créer des expériences 
            de voyage uniques et personnalisées. Notre équipe passionnée 
            transforme vos rêves de voyage en réalité.
          </p>
        </div>
  
        <div class="services">
          <h2>Nos Services</h2>
          <div class="services-grid">
            <div v-for="service in services" :key="service.id" class="service-card">
              <i :class="service.icon"></i>
              <h3>{{ service.title }}</h3>
              <p>{{ service.description }}</p>
            </div>
          </div>
        </div>
  
        <div class="team">
          <h2>Notre Équipe</h2>
          <div class="team-grid">
            <div v-for="member in team" :key="member.id" class="team-card">
              <img :src="member.photo" :alt="member.name">
              <h3>{{ member.name }}</h3>
              <p>{{ member.role }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'AboutPage',
    data() {
      return {
        services: [
          {
            id: 1,
            title: 'Voyages Sur Mesure',
            description: 'Des itinéraires personnalisés selon vos envies',
            icon: 'fas fa-map-marked-alt'
          },
          {
            id: 2,
            title: 'Expertise Locale',
            description: 'Des partenaires locaux sélectionnés dans chaque destination',
            icon: 'fas fa-globe-americas'
          },
          {
            id: 3,
            title: 'Support 24/7',
            description: 'Une assistance disponible à tout moment pendant votre voyage',
            icon: 'fas fa-headset'
          }
        ],
        team: [
          {
            id: 1,
            name: 'Sophie Martin',
            role: 'Directrice des Voyages',
            photo: '/images/team-1.jpg'
          },
          {
            id: 2,
            name: 'Pierre Dubois',
            role: 'Expert Asie',
            photo: '/images/team-2.jpg'
          },
          {
            id: 3,
            name: 'Marie Lambert',
            role: 'Conseillère Voyages',
            photo: '/images/team-3.jpg'
          }
        ]
      }
    }
  }
  </script>
  
  <style scoped>
  .about-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem;
  }
  
  .hero-section {
    text-align: center;
    padding: 4rem 2rem;
    background-color: #f8f9fa;
    border-radius: 12px;
    margin-bottom: 3rem;
  }
  
  .hero-section h1 {
    font-size: 2.5rem;
    color: #2c3e50;
    margin-bottom: 1rem;
  }
  
  .subtitle {
    font-size: 1.2rem;
    color: #666;
  }
  
  .content-section {
    display: flex;
    flex-direction: column;
    gap: 4rem;
  }
  
  .mission-block {
    text-align: center;
    max-width: 800px;
    margin: 0 auto;
  }
  
  h2 {
    color: #2c3e50;
    font-size: 1.8rem;
    margin-bottom: 1.5rem;
    text-align: center;
  }
  
  .services-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
    margin-top: 2rem;
  }
  
  .service-card {
    padding: 2rem;
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    text-align: center;
  }
  
  .service-card i {
    font-size: 2rem;
    color: #4a90e2;
    margin-bottom: 1rem;
  }
  
  .service-card h3 {
    color: #2c3e50;
    margin-bottom: 1rem;
  }
  
  .team-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 2rem;
    margin-top: 2rem;
  }
  
  .team-card {
    text-align: center;
  }
  
  .team-card img {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 1rem;
  }
  
  .team-card h3 {
    color: #2c3e50;
    margin-bottom: 0.5rem;
  }
  
  .team-card p {
    color: #666;
  }
  
  @media (max-width: 768px) {
    .hero-section {
      padding: 3rem 1rem;
    }
  
    .hero-section h1 {
      font-size: 2rem;
    }
  
    .services-grid,
    .team-grid {
      grid-template-columns: 1fr;
    }
  
    .team-card img {
      width: 150px;
      height: 150px;
    }
  }
  </style>