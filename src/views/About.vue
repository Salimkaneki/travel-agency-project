<template>
  <div class="about-page">
    <header class="hero">
      <div class="hero-content">
        <h1 class="fade-in">Voyage Dreams</h1>
        <p class="hero-subtitle">Créateur d'expériences de voyage depuis 2010</p>
      </div>
    </header>

    <section class="stats-section">
      <div class="stat">
        <span class="stat-value">15k+</span>
        <span class="stat-label">Voyageurs satisfaits</span>
      </div>
      <div class="stat">
        <span class="stat-value">120+</span>
        <span class="stat-label">Destinations</span>
      </div>
      <div class="stat">
        <span class="stat-value">98%</span>
        <span class="stat-label">Taux de satisfaction</span>
      </div>
    </section>

    <section class="mission-section">
      <div class="content-wrapper">
        <h2>Notre Mission</h2>
        <div class="mission-content">
          <p>
            Créer des voyages qui dépassent vos attentes. Chaque itinéraire est 
            conçu comme une œuvre d'art, mélangeant découvertes authentiques et 
            moments d'exception.
          </p>
        </div>
      </div>
    </section>

    <section class="services-section">
      <div class="content-wrapper">
        <h2>Nos Services</h2>
        <div class="services-grid">
          <div v-for="service in services" :key="service.id" class="service-card">
            <i :class="service.icon"></i>
            <h3>{{ service.title }}</h3>
            <p>{{ service.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="team-section">
      <div class="content-wrapper">
        <h2>Notre Équipe</h2>
        <div class="team-grid">
          <div v-for="member in team" :key="member.id" class="team-card">
            <div class="member-image">
              <img :src="member.photo" :alt="member.name">
            </div>
            <div class="member-info">
              <h3>{{ member.name }}</h3>
              <p class="member-role">{{ member.role }}</p>
              <p class="member-languages">{{ member.languages.join(' · ') }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
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
          description: 'Des itinéraires uniques créés selon vos envies et votre style de voyage.',
          icon: 'fas fa-compass'
        },
        {
          id: 2,
          title: 'Expertise Locale',
          description: "Un réseau d'experts locaux pour vous faire découvrir l'authenticité de chaque destination.",
          icon: 'fas fa-map-marked-alt'
        },
        {
          id: 3,
          title: 'Conciergerie 24/7',
          description: 'Une équipe dédiée à votre service tout au long de votre voyage.',
          icon: 'fas fa-clock'
        }
      ],
      team: [
        {
          id: 1,
          name: 'Sophie Martin',
          role: 'Directrice des Voyages',
          languages: ['Français', 'Anglais', 'Espagnol'],
          photo: require('@/assets/team-1.jpg')
        },
        {
          id: 2,
          name: 'Pierre Dubois',
          role: 'Expert Asie',
          languages: ['Français', 'Anglais', 'Japonais'],
          photo: require('@/assets/team-2.jpg')
        },
        {
          id: 3,
          name: 'Marie Lambert',
          role: 'Conseillère Voyages',
          languages: ['Français', 'Anglais', 'Italien'],
          photo: require('@/assets/team-3.jpeg')
        }
      ]
    }
  }
}
</script>

<style scoped>
.about-page {
  color: #2C3E50;
}

.hero {
  height: 70vh;
  background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
              #3498DB;  /* Couleur de fond au lieu d'une image */
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
}

.hero-content {
  max-width: 800px;
  padding: 0 2rem;
}

.hero h1 {
  font-size: 4rem;
  font-weight: 300;
  margin-bottom: 1rem;
  letter-spacing: 2px;
}

.hero-subtitle {
  font-size: 1.5rem;
  font-weight: 300;
  letter-spacing: 1px;
}

.stats-section {
  display: flex;
  justify-content: space-around;
  padding: 4rem 2rem;
  background-color: #F8F9FA;
}

.stat {
  text-align: center;
}

.stat-value {
  display: block;
  font-size: 2.5rem;
  font-weight: 300;
  color: #3498DB;
  margin-bottom: 0.5rem;
}

.stat-label {
  font-size: 1rem;
  color: #6C757D;
}

.content-wrapper {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

section {
  padding: 6rem 0;
}

section h2 {
  font-size: 2.5rem;
  font-weight: 300;
  text-align: center;
  margin-bottom: 3rem;
  color: #2C3E50;
}

.mission-section {
  background-color: white;
}

.mission-content {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  font-size: 1.2rem;
  line-height: 1.8;
  color: #6C757D;
}

.services-section {
  background-color: #F8F9FA;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.service-card {
  background: white;
  padding: 3rem 2rem;
  text-align: center;
  border-radius: 4px;
  transition: transform 0.3s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.service-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
}

.service-card i {
  font-size: 2.5rem;
  color: #3498DB;
  margin-bottom: 1.5rem;
}

.service-card h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  font-weight: 500;
}

.service-card p {
  color: #6C757D;
  line-height: 1.6;
}

.team-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 3rem;
}

.team-card {
  text-align: center;
}

.member-image {
  width: 200px;
  height: 200px;
  margin: 0 auto 1.5rem;
  overflow: hidden;
  border-radius: 50%;
}

.member-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.team-card:hover .member-image img {
  transform: scale(1.1);
}

.member-info h3 {
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
  font-weight: 500;
}

.member-role {
  color: #3498DB;
  margin-bottom: 0.5rem;
}

.member-languages {
  font-size: 0.9rem;
  color: #6C757D;
}

@media (max-width: 768px) {
  .hero h1 {
    font-size: 3rem;
  }

  .hero-subtitle {
    font-size: 1.2rem;
  }

  .stats-section {
    flex-direction: column;
    gap: 2rem;
  }

  section {
    padding: 4rem 0;
  }

  .team-grid {
    gap: 2rem;
  }

  .member-image {
    width: 150px;
    height: 150px;
  }
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

.fade-in {
  animation: fadeIn 1s ease-out;
}
</style>