<template>
  <div class="offers-page">
    <header class="offers-header">
      <h1>Offres Spéciales</h1>
      <p class="subtitle">Découvrez nos offres exceptionnelles pour vos prochaines aventures</p>
    </header>

    <!-- Section Offres Flash -->
    <section class="offers-section">
      <h2>Offres Flash <span class="countdown">Expire dans : {{ countdownDisplay }}</span></h2>
      <div class="offers-grid">
        <div v-for="offer in flashOffers" :key="offer.id" class="offer-card flash">
          <div class="offer-image">
            <img 
              :src="offer.image" 
              :alt="'Photo de ' + offer.destination"
              @error="handleImageError"
            />
            <div class="discount-badge">-{{ offer.discount }}%</div>
          </div>
          <div class="offer-content">
            <h3>{{ offer.destination }}</h3>
            <p class="offer-dates">{{ offer.dates }}</p>
            <p class="offer-description">{{ offer.description }}</p>
            <div class="price-container">
              <span class="original-price">{{ offer.originalPrice }}€</span>
              <span class="final-price">{{ calculateDiscountedPrice(offer) }}€</span>
            </div>
            <button class="book-button" @click="bookNow(offer)" :disabled="isOfferExpired">
              {{ isOfferExpired ? 'Offre expirée' : 'Réserver' }}
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Section Offres Saisonnières -->
    <section class="offers-section">
      <h2>Offres Saisonnières</h2>
      <div class="offers-grid">
        <div v-for="offer in seasonalOffers" :key="offer.id" class="offer-card seasonal">
          <div class="offer-image">
            <img 
              :src="offer.image" 
              :alt="'Photo de ' + offer.destination"
              loading="lazy"
              @error="handleImageError"
            />
            <div class="season-badge">{{ offer.season }}</div>
          </div>
          <div class="offer-content">
            <h3>{{ offer.destination }}</h3>
            <p class="offer-dates">{{ offer.dates }}</p>
            <p class="offer-description">{{ offer.description }}</p>
            <div class="offer-features">
              <span v-for="feature in offer.features" :key="feature" class="feature-tag">
                {{ feature }}
              </span>
            </div>
            <div class="price-container">
              <span class="final-price">{{ offer.price }}€</span>
              <span class="price-info">par personne</span>
            </div>
            <button class="book-button" @click="bookNow(offer)">Réserver</button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "OffersPage",
  data() {
    return {
      countdown: 24 * 60 * 60,
      // fallbackImage: require('@/assets/images/placeholder.jpg'),
      flashOffers: [
        {
          id: 1,
          destination: "Week-end à Rome",
          dates: "Du 15 au 17 Mars 2025",
          description: "Escapade romantique dans la ville éternelle, vol et hôtel inclus",
          image: require('@/assets/images/rome.jpg'),
          discount: 30,
          originalPrice: 599,
        },
        {
          id: 2,
          destination: "Séjour à Santorin",
          dates: "Du 1 au 8 Avril 2025",
          description: "Une semaine dans les Cyclades avec vue sur la Caldera",
          image: require('@/assets/images/santorini.jpg'),
          discount: 25,
          originalPrice: 1299,
        }
      ],
      seasonalOffers: [
        {
          id: 3,
          destination: "Safari au Kenya",
          dates: "Été 2025",
          description: "Découvrez la grande migration dans le Masai Mara",
          image: require('@/assets/images/kenya.jpg'),
          season: "Été",
          price: 2499,
          features: ["Pension complète", "Guide privé", "4x4 inclus"]
        },
        {
          id: 4,
          destination: "Ski dans les Alpes",
          dates: "Hiver 2025",
          description: "Séjour tout compris dans une station prestigieuse",
          image: require('@/assets/images/alps.jpg'),
          season: "Hiver",
          price: 1299,
          features: ["Forfait ski", "Matériel", "Cours inclus"]
        }
      ]
    };
  },
  computed: {
    countdownDisplay() {
      const hours = Math.floor(this.countdown / 3600);
      const minutes = Math.floor((this.countdown % 3600) / 60);
      const seconds = this.countdown % 60;
      return `${hours}h ${minutes}m ${seconds}s`;
    },
    isOfferExpired() {
      return this.countdown <= 0;
    }
  },
  methods: {
    calculateDiscountedPrice(offer) {
      return Math.round(offer.originalPrice * (1 - offer.discount / 100));
    },
    bookNow(offer) {
      if (this.isOfferExpired && offer.discount) return;
      console.log('Réservation pour:', offer.destination);
    },
    startCountdown() {
      setInterval(() => {
        if (this.countdown > 0) {
          this.countdown--;
        }
      }, 1000);
    },
    handleImageError(event) {
      event.target.src = this.fallbackImage;
    }
  },
  mounted() {
    this.startCountdown();
  }
};
</script>

<style scoped>
.offers-page {
  padding: 2rem 1rem;
  max-width: 1200px;
  margin: 0 auto;
}

.offers-header {
  text-align: center;
  margin-bottom: 3rem;
}

.offers-header h1 {
  font-size: 2.5rem;
  color: #2196F3;
  margin-bottom: 0.5rem;
}

.subtitle {
  color: #666;
  font-size: 1.2rem;
}

.offers-section {
  margin-bottom: 4rem;
}

.offers-section h2 {
  font-size: 1.8rem;
  margin-bottom: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.countdown {
  font-size: 1rem;
  color: #ff4444;
  background: #ffebee;
  padding: 0.5rem 1rem;
  border-radius: 20px;
}

.offers-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.offer-card {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.offer-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
}

.offer-image {
  position: relative;
  height: 200px;
}

.offer-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.discount-badge, .season-badge {
  position: absolute;
  top: 1rem;
  right: 1rem;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-weight: 600;
  backdrop-filter: blur(4px);
}

.discount-badge {
  background: rgba(255, 68, 68, 0.9);
  color: white;
}

.season-badge {
  background: rgba(33, 150, 243, 0.9);
  color: white;
}

.offer-content {
  padding: 1.5rem;
}

.offer-content h3 {
  margin-bottom: 0.5rem;
  font-size: 1.3rem;
  color: #333;
}

.offer-dates {
  color: #666;
  font-size: 0.9rem;
  margin-bottom: 1rem;
}

.offer-description {
  color: #444;
  margin-bottom: 1rem;
  line-height: 1.5;
}

.offer-features {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.feature-tag {
  background: #E3F2FD;
  color: #2196F3;
  padding: 0.3rem 0.8rem;
  border-radius: 15px;
  font-size: 0.9rem;
}

.price-container {
  margin-bottom: 1rem;
  display: flex;
  align-items: baseline;
  gap: 0.5rem;
}

.original-price {
  color: #666;
  text-decoration: line-through;
  margin-right: 0.5rem;
}

.final-price {
  color: #2196F3;
  font-size: 1.5rem;
  font-weight: bold;
}

.price-info {
  color: #666;
  font-size: 0.9rem;
}

.book-button {
  width: 100%;
  padding: 0.8rem;
  background: #2196F3;
  color: white;
  border: none;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.book-button:hover:not(:disabled) {
  background: #1976D2;
}

.book-button:disabled {
  background: #ccc;
  cursor: not-allowed;
}

@media (max-width: 768px) {
  .offers-header h1 {
    font-size: 2rem;
  }
  
  .offers-section h2 {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }
  
  .countdown {
    font-size: 0.9rem;
  }

  .offer-image {
    position: relative;
    height: 200px;
    overflow: hidden;
    background: #f5f5f5;
  }
  
  .offer-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }
  
  .offer-card:hover .offer-img {
    transform: scale(1.05);
  }
  
  /* Effet de superposition au survol */
  .offer-image::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, transparent 50%, rgba(0, 0, 0, 0.1));
    pointer-events: none;
  }
  
  /* Animation de chargement pour les images */
  @keyframes imagePlaceholder {
    0% { background-position: -200% 0; }
    100% { background-position: 200% 0; }
  }
  
  .offer-image.loading {
    background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
    background-size: 200% 100%;
    animation: imagePlaceholder 1.5s infinite;
  }
}
</style>