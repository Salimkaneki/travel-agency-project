<template>
  <div class="about-page">
    <header class="hero">
      <div class="hero-content">
        <h1 class="fade-in">Découvrez le monde avec nous</h1>
        <p class="hero-subtitle">Une aventure unique vous attend depuis 2010</p>
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
  color: #1a1a1a;
  background: linear-gradient(to bottom right, #f8f9ff, #ffffff);
}

.hero {
  height: 70vh;
  background: linear-gradient(rgba(37, 99, 235, 0.1), rgba(59, 130, 246, 0.2)),
              linear-gradient(45deg, #2563EB, #3B82F6);
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
  font-size: 3.5rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  letter-spacing: 1px;
  line-height: 1.2;
}

.hero-subtitle {
  font-size: 1.2rem;
  font-weight: 400;
  letter-spacing: 0.5px;
  color: rgba(255, 255, 255, 0.9);
}

.stats-section {
  display: flex;
  justify-content: space-around;
  padding: 4rem 2rem;
  background-color: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
}

.stat {
  text-align: center;
}

.stat-value {
  display: block;
  font-size: 2.5rem;
  font-weight: 600;
  color: #2563EB;
  margin-bottom: 0.5rem;
}

.stat-label {
  font-size: 1rem;
  color: #4B5563;
}

.content-wrapper {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
}

section {
  padding: 6rem 0;
}

section h2 {
  font-size: 2.5rem;
  font-weight: 600;
  text-align: center;
  margin-bottom: 3rem;
  color: #1a1a1a;
  position: relative;
}

section h2::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 120px;
  height: 8px;
  background: linear-gradient(90deg, #3B82F6, #60A5FA);
  border-radius: 4px;
  opacity: 0.3;
}

.mission-content {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  font-size: 1.2rem;
  line-height: 1.7;
  color: #4B5563;
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
  border-radius: 8px;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}

.service-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 20px rgba(59, 130, 246, 0.1);
}


.service-card i {
  font-size: 2.5rem;
  background: linear-gradient(45deg, #2563EB, #3B82F6);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent; /* Propriété standard au lieu de text-fill-color */
  margin-bottom: 1.5rem;
}


.service-card h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  font-weight: 600;
  color: #1a1a1a;
}

.service-card p {
  color: #4B5563;
  line-height: 1.7;
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
  border-radius: 16px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
}

.member-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.team-card:hover .member-image img {
  transform: scale(1.1);
}

.member-info h3 {
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
  font-weight: 600;
  color: #1a1a1a;
}

.member-role {
  color: #2563EB;
  font-weight: 500;
  margin-bottom: 0.5rem;
}

.member-languages {
  font-size: 0.9rem;
  color: #4B5563;
}

@media (max-width: 768px) {
  .hero h1 {
    font-size: 2.5rem;
  }

  .hero-subtitle {
    font-size: 1.1rem;
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