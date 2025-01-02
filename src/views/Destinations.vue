<template>
    <div class="destinations">
      <header class="destinations-header">
        <h1>Découvrez nos destinations</h1>
        <p class="subtitle">Des expériences uniques aux quatre coins du monde</p>
      </header>
  
      <div class="destinations-grid">
        <article 
          v-for="destination in destinations" 
          :key="destination.id" 
          class="destination-card"
          @mouseenter="destination.isHovered = true"
          @mouseleave="destination.isHovered = false"
        >
          <div class="card-image-container">
            <img :src="destination.imageUrl" :alt="destination.name" class="card-image" />
            <div class="card-overlay" :class="{ 'overlay-visible': destination.isHovered }">
              <button class="explore-btn" @click="showDetails(destination)">
                Explorer
              </button>
            </div>
          </div>
          <div class="card-content">
            <h2>{{ destination.name }}</h2>
            <p class="destination-description">{{ destination.description }}</p>
            <div class="destination-features">
              <span v-for="feature in destination.features" 
                    :key="feature" 
                    class="feature-tag">
                {{ feature }}
              </span>
            </div>
            <div class="price-section">
              <span class="price">À partir de {{ destination.price }}€</span>
            </div>
          </div>
        </article>
      </div>
  
      <div v-if="selectedDestination" class="modal-backdrop" @click="closeModal">
        <div class="modal-content" @click.stop>
          <button class="close-btn" @click="closeModal">&times;</button>
          <img :src="selectedDestination.imageUrl" :alt="selectedDestination.name" class="modal-image"/>
          <h2>{{ selectedDestination.name }}</h2>
          <p class="modal-description">{{ selectedDestination.longDescription }}</p>
          <div class="destination-features">
            <span v-for="feature in selectedDestination.features" 
                  :key="feature" 
                  class="feature-tag">
              {{ feature }}
            </span>
          </div>
          <div class="modal-info">
            <p class="price">À partir de {{ selectedDestination.price }}€</p>
            <button class="book-btn">Réserver maintenant</button>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: "Destinations",
  data() {
    return {
      selectedDestination: null,
      destinations: [
        {
          id: 1,
          name: "Paris",
          description: "La ville lumière, connue pour la Tour Eiffel et ses musées.",
          longDescription: "Paris, capitale de la France, est une métropole majeure et l'une des plus belles villes du monde. Découvrez son architecture exceptionnelle, sa gastronomie renommée et son art de vivre unique. Des quartiers historiques aux boutiques de luxe, chaque coin de rue raconte une histoire.",
          imageUrl: require('@/assets/images/paris.jpg'), 
          price: 299,
          features: ["Culture", "Gastronomie", "Shopping"],
          isHovered: false
        },
        {
          id: 2,
          name: "Bali",
          description: "Une île paradisiaque avec des plages magnifiques et des temples.",
          longDescription: "Bali est une île indonésienne connue pour ses montagnes volcaniques, ses rizières en terrasses, ses plages et ses récifs coralliens. Les temples hindous et les retraites de yoga en font une destination prisée pour la détente et la spiritualité.",
          imageUrl: require('@/assets/images/bali.jpg'),
          price: 899,
          features: ["Plages", "Culture", "Bien-être"],
          isHovered: false
        },
        {
          id: 3,
          name: "New York",
          description: "La ville qui ne dort jamais, avec ses gratte-ciel et ses attractions.",
          longDescription: "New York incarne le rêve américain avec ses gratte-ciel emblématiques, ses quartiers animés et sa diversité culturelle unique. De Broadway à Central Park, découvrez une ville qui vibre jour et nuit.",
          imageUrl: require('@/assets/images/new-york.jpg'),
          price: 799,
          features: ["Shopping", "Art", "Divertissement"],
          isHovered: false
        },
      ],
    };
  },
  methods: {
    showDetails(destination) {
      this.selectedDestination = destination;
      document.body.style.overflow = 'hidden';
    },
    closeModal() {
      this.selectedDestination = null;
      document.body.style.overflow = '';
    }
  },
};
</script>

<style scoped>
.destinations {
  padding: 8rem 2rem 4rem;
  background: #f8f9fa;
  min-height: 100vh;
}

.destinations-header {
  text-align: center;
  margin-bottom: 4rem;
}

.destinations-header h1 {
  font-size: 3.5rem;
  color: #2c3e50;
  margin-bottom: 1rem;
  font-weight: 800;
}

.subtitle {
  color: #34495e;
  font-size: 1.4rem;
  font-weight: 400;
}

.destinations-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
  gap: 2.5rem;
  max-width: 1400px;
  margin: 0 auto;
}

.destination-card {
  background: white;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.06);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  border: 1px solid rgba(0, 0, 0, 0.05);
}

.destination-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.12);
}

.card-image-container {
  position: relative;
  height: 260px;
  overflow: hidden;
}

.card-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s ease;
}

.destination-card:hover .card-image {
  transform: scale(1.1);
}

.card-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(44, 62, 80, 0.85);
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: all 0.4s ease;
}

.overlay-visible {
  opacity: 1;
}

.explore-btn {
  background: white;
  color: #2c3e50;
  border: none;
  padding: 1rem 2.5rem;
  border-radius: 30px;
  font-weight: 700;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  transform: translateY(20px);
  opacity: 0;
}

.overlay-visible .explore-btn {
  transform: translateY(0);
  opacity: 1;
}

.explore-btn:hover {
  background: #f8f9fa;
  transform: scale(1.05);
}

.card-content {
  padding: 2rem;
}

.card-content h2 {
  font-size: 1.8rem;
  color: #2c3e50;
  margin-bottom: 1rem;
  font-weight: 700;
}

.destination-description {
  color: #34495e;
  margin-bottom: 1.5rem;
  line-height: 1.6;
}

.destination-features {
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
  margin-bottom: 1.5rem;
}

.feature-tag {
  background: #f8f9fa;
  color: #2c3e50;
  padding: 0.6rem 1.2rem;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 600;
  transition: all 0.3s ease;
  border: 1px solid rgba(44, 62, 80, 0.1);
}

.feature-tag:hover {
  background: #edf2f7;
  transform: scale(1.05);
}

.price-section {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 1.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(0, 0, 0, 0.05);
}

.price {
  color: #2c3e50;
  font-weight: 800;
  font-size: 1.6rem;
}

/* Modal styles */
.modal-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(44, 62, 80, 0.85);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: 2rem;
  backdrop-filter: blur(8px);
}

.modal-content {
  background: white;
  border-radius: 24px;
  padding: 3rem;
  max-width: 900px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);
}

.close-btn {
  position: absolute;
  top: 2rem;
  right: 2rem;
  background: white;
  border: none;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  font-size: 1.8rem;
  cursor: pointer;
  color: #2c3e50;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.close-btn:hover {
  background: #2c3e50;
  color: white;
  transform: rotate(90deg);
}

.modal-image {
  width: 100%;
  height: 400px;
  object-fit: cover;
  border-radius: 16px;
  margin-bottom: 2rem;
}

.modal-content h2 {
  font-size: 2.5rem;
  color: #2c3e50;
  margin-bottom: 1rem;
  font-weight: 800;
}

.modal-description {
  color: #34495e;
  margin: 1.5rem 0;
  line-height: 1.8;
  font-size: 1.1rem;
}

.modal-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 2.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(0, 0, 0, 0.05);
}

.book-btn {
  background: #2c3e50;
  color: white;
  border: none;
  padding: 1.2rem 3rem;
  border-radius: 30px;
  font-weight: 700;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.book-btn:hover {
  background: #34495e;
  transform: translateY(-2px);
}

@media (max-width: 768px) {
  .destinations {
    padding: 6rem 1rem 2rem;
  }

  .destinations-header h1 {
    font-size: 2.5rem;
  }

  .subtitle {
    font-size: 1.2rem;
  }

  .destinations-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .modal-content {
    margin: 1rem;
    padding: 1.5rem;
  }

  .modal-image {
    height: 250px;
  }

  .modal-content h2 {
    font-size: 2rem;
  }

  .modal-info {
    flex-direction: column;
    gap: 1.5rem;
    align-items: stretch;
  }

  .book-btn {
    width: 100%;
  }
}
</style>