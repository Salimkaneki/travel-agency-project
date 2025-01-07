<template>
  <div class="contact-page">
    <div class="contact-hero">
      <h1>Parlons de vos Rêves de Voyage</h1>
      <p>Notre équipe est à votre écoute pour créer votre prochain voyage inoubliable</p>
    </div>

    <div class="contact-container">
      <div class="contact-grid">
        <!-- Informations de contact -->
        <div class="contact-info-card">
          <h2>Nous Contacter</h2>
          
          <div class="info-section">
            <div class="info-item">
              <i class="fas fa-phone-alt"></i>
              <div class="info-content">
                <h3>Téléphone</h3>
                <p>+33 1 23 45 67 89</p>
                <p class="subtitle">Lun-Ven, 9h-18h</p>
              </div>
            </div>

            <div class="info-item">
              <i class="fas fa-envelope"></i>
              <div class="info-content">
                <h3>Email</h3>
                <p>contact@voyagedreams.fr</p>
                <p class="subtitle">Réponse sous 24h</p>
              </div>
            </div>

            <div class="info-item">
              <i class="fas fa-map-marker-alt"></i>
              <div class="info-content">
                <h3>Adresse</h3>
                <p>123 Avenue des Voyages</p>
                <p class="subtitle">75008 Paris, France</p>
              </div>
            </div>
          </div>

          <div class="social-links">
            <a href="#" class="social-link">
              <i class="fab fa-instagram"></i>
            </a>
            <a href="#" class="social-link">
              <i class="fab fa-facebook"></i>
            </a>
            <a href="#" class="social-link">
              <i class="fab fa-linkedin"></i>
            </a>
          </div>
        </div>

        <!-- Formulaire de contact -->
        <div class="contact-form-card">
          <form @submit.prevent="handleSubmit" class="contact-form">
            <div class="form-header">
              <h2>Envoyez-nous un Message</h2>
              <p>Un conseiller vous répondra dans les plus brefs délais</p>
            </div>

            <div class="form-grid">
              <div class="form-group">
                <label for="name">Nom complet</label>
                <input 
                  type="text" 
                  id="name" 
                  v-model="form.name"
                  :class="{ 'error': errors.name }"
                  @focus="clearError('name')"
                  placeholder="Votre nom"
                  required
                />
                <span v-if="errors.name" class="error-message">{{ errors.name }}</span>
              </div>

              <div class="form-group">
                <label for="email">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  v-model="form.email"
                  :class="{ 'error': errors.email }"
                  @focus="clearError('email')"
                  placeholder="votre@email.com"
                  required
                />
                <span v-if="errors.email" class="error-message">{{ errors.email }}</span>
              </div>
            </div>

            <div class="form-group">
              <label for="subject">Type de demande</label>
              <select 
                id="subject" 
                v-model="form.subject"
                :class="{ 'error': errors.subject }"
                @focus="clearError('subject')"
                required
              >
                <option value="">Sélectionnez le type de demande</option>
                <option value="devis">Devis personnalisé</option>
                <option value="info">Informations voyage</option>
                <option value="rdv">Rendez-vous conseil</option>
                <option value="urgence">Assistance urgente</option>
                <option value="autre">Autre demande</option>
              </select>
              <span v-if="errors.subject" class="error-message">{{ errors.subject }}</span>
            </div>

            <div class="form-group">
              <label for="message">Message</label>
              <textarea 
                id="message" 
                v-model="form.message"
                :class="{ 'error': errors.message }"
                @focus="clearError('message')"
                rows="5"
                placeholder="Décrivez votre projet de voyage..."
                required
              ></textarea>
              <span v-if="errors.message" class="error-message">{{ errors.message }}</span>
            </div>

            <div class="form-group checkbox-group">
              <label class="checkbox-label">
                <input 
                  type="checkbox" 
                  v-model="form.newsletter"
                />
                <span>Je souhaite recevoir la newsletter de Voyage Dreams</span>
              </label>
            </div>

            <button 
              type="submit" 
              class="submit-button"
              :disabled="isSubmitting"
            >
              <span>{{ isSubmitting ? 'Envoi en cours...' : 'Envoyer le message' }}</span>
              <i :class="isSubmitting ? 'fas fa-spinner fa-spin' : 'fas fa-paper-plane'"></i>
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactPage",
  data() {
    return {
      form: {
        name: "",
        email: "",
        subject: "",
        message: "",
        newsletter: false
      },
      errors: {},
      isSubmitting: false
    };
  },
  methods: {
    validateEmail(email) {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(email);
    },
    clearError(field) {
      this.$delete(this.errors, field);
    },
    validateForm() {
      this.errors = {};
      
      if (!this.form.name.trim()) {
        this.errors.name = "Le nom est requis";
      }
      
      if (!this.form.email) {
        this.errors.email = "L'email est requis";
      } else if (!this.validateEmail(this.form.email)) {
        this.errors.email = "Veuillez entrer un email valide";
      }
      
      if (!this.form.subject) {
        this.errors.subject = "Veuillez sélectionner un sujet";
      }
      
      if (!this.form.message.trim()) {
        this.errors.message = "Le message est requis";
      }
      
      return Object.keys(this.errors).length === 0;
    },
    async handleSubmit() {
      if (!this.validateForm()) return;
      
      this.isSubmitting = true;
      
      try {
        // Simuler un appel API
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        // Réinitialiser le formulaire
        this.form = {
          name: "",
          email: "",
          subject: "",
          message: "",
          newsletter: false
        };
        
        // Afficher un message de succès
        alert("Votre message a bien été envoyé ! Nous vous répondrons dans les plus brefs délais.");
      } catch (error) {
        alert("Une erreur est survenue. Veuillez réessayer plus tard.");
      } finally {
        this.isSubmitting = false;
      }
    }
  }
};
</script>

<style scoped>
.contact-page {
  min-height: 100vh;
  background-color: #f8f9fa;
}

.contact-hero {
  background: linear-gradient(135deg, #3498db, #2980b9);
  padding: 4rem 2rem;
  text-align: center;
  color: white;
}

.contact-hero h1 {
  font-size: 2.5rem;
  font-weight: 300;
  margin-bottom: 1rem;
}

.contact-hero p {
  font-size: 1.2rem;
  opacity: 0.9;
}

.contact-container {
  max-width: 1200px;
  margin: -3rem auto 3rem;
  padding: 0 2rem;
}

.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 2rem;
}

.contact-info-card,
.contact-form-card {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.contact-info-card {
  position: sticky;
  top: 2rem;
  height: max-content;
}

.contact-info-card h2,
.contact-form-card h2 {
  color: #2c3e50;
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
}

.info-section {
  margin: 2rem 0;
}

.info-item {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.info-item i {
  color: #3498db;
  font-size: 1.2rem;
  padding-top: 0.25rem;
}

.info-content h3 {
  font-size: 1rem;
  color: #2c3e50;
  margin-bottom: 0.25rem;
}

.info-content p {
  color: #666;
  margin: 0;
}

.info-content .subtitle {
  font-size: 0.9rem;
  color: #999;
  margin-top: 0.25rem;
}

.social-links {
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #f8f9fa;
  color: #3498db;
  transition: all 0.3s ease;
}

.social-link:hover {
  background-color: #3498db;
  color: white;
  transform: translateY(-2px);
}

.form-header {
  margin-bottom: 2rem;
}

.form-header p {
  color: #666;
}

.form-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

.form-group {
  margin-bottom: 1.5rem;
}

label {
  display: block;
  color: #2c3e50;
  margin-bottom: 0.5rem;
  font-weight: 500;
}

input,
select,
textarea {
  width: 100%;
  padding: 0.8rem;
  border: 2px solid #e9ecef;
  border-radius: 8px;
  font-size: 1rem;
  transition: all 0.3s ease;
  color: #2c3e50;
}

input:focus,
select:focus,
textarea:focus {
  border-color: #3498db;
  outline: none;
  box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.1);
}

input.error,
select.error,
textarea.error {
  border-color: #e74c3c;
}

.error-message {
  color: #e74c3c;
  font-size: 0.875rem;
  margin-top: 0.5rem;
}

.checkbox-group {
  margin: 1.5rem 0;
}

.checkbox-label {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
}

.checkbox-label input[type="checkbox"] {
  width: auto;
}

.submit-button {
  width: 100%;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  background-color: #3498db;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.submit-button:hover:not(:disabled) {
  background-color: #2980b9;
}

.submit-button:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

@media (max-width: 768px) {
  .contact-container {
    margin-top: -2rem;
    padding: 0 1rem;
  }

  .contact-grid {
    grid-template-columns: 1fr;
  }

  .contact-info-card {
    position: static;
  }

  .form-grid {
    grid-template-columns: 1fr;
  }

  .contact-hero h1 {
    font-size: 2rem;
  }
}
</style>