<template>
    <div class="contact-container">
      <div class="contact-card">
        <h1 class="title">Contactez-nous</h1>
        
        <div class="contact-info">
          <div class="info-item">
            <i class="fas fa-phone"></i>
            <span>+33 1 23 45 67 89</span>
          </div>
          <div class="info-item">
            <i class="fas fa-envelope"></i>
            <span>contact@voyagedreams.fr</span>
          </div>
          <div class="info-item">
            <i class="fas fa-map-marker-alt"></i>
            <span>123 Avenue des Voyages, Paris</span>
          </div>
        </div>
  
        <form @submit.prevent="handleSubmit" class="contact-form">
          <div class="form-group">
            <label for="name">Nom</label>
            <input 
              type="text" 
              id="name" 
              v-model="form.name" 
              required
              placeholder="Votre nom"
            />
          </div>
  
          <div class="form-group">
            <label for="email">Email</label>
            <input 
              type="email" 
              id="email" 
              v-model="form.email" 
              required
              placeholder="votre@email.com"
            />
          </div>
  
          <div class="form-group">
            <label for="subject">Sujet</label>
            <select id="subject" v-model="form.subject" required>
              <option value="">Sélectionnez un sujet</option>
              <option value="devis">Demande de devis</option>
              <option value="info">Demande d'informations</option>
              <option value="rdv">Prise de rendez-vous</option>
              <option value="autre">Autre</option>
            </select>
          </div>
  
          <div class="form-group">
            <label for="message">Message</label>
            <textarea 
              id="message" 
              v-model="form.message" 
              required
              rows="5"
              placeholder="Votre message..."
            ></textarea>
          </div>
  
          <button type="submit" class="submit-button">
            <span>Envoyer</span>
            <i class="fas fa-paper-plane"></i>
          </button>
        </form>
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
        },
      };
    },
    methods: {
      handleSubmit() {
        // Simuler l'envoi du formulaire
        console.log('Formulaire soumis:', this.form);
        
        // Afficher un message de confirmation
        alert(`Merci ${this.form.name} ! Nous reviendrons vers vous rapidement.`);
        
        // Réinitialiser le formulaire
        this.form = {
          name: "",
          email: "",
          subject: "",
          message: "",
        };
      },
    },
  };
  </script>
  
  <style scoped>
  .contact-container {
    max-width: 800px;
    margin: 2rem auto;
    padding: 0 1rem;
  }
  
  .contact-card {
    background: white;
    padding: 2rem;
    border-radius: 12px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  
  .title {
    color: #2c3e50;
    font-size: 2rem;
    text-align: center;
    margin-bottom: 2rem;
  }
  
  .contact-info {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    gap: 1rem;
    margin-bottom: 2rem;
    padding: 1rem;
    background-color: #f8f9fa;
    border-radius: 8px;
  }
  
  .info-item {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: #666;
  }
  
  .info-item i {
    color: #4a90e2;
    font-size: 1.2rem;
  }
  
  .contact-form {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }
  
  .form-group {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
  
  label {
    color: #2c3e50;
    font-weight: 500;
  }
  
  input,
  select,
  textarea {
    padding: 0.8rem;
    border: 1px solid #ddd;
    border-radius: 6px;
    font-size: 1rem;
    transition: border-color 0.3s ease;
  }
  
  input:focus,
  select:focus,
  textarea:focus {
    outline: none;
    border-color: #4a90e2;
    box-shadow: 0 0 0 2px rgba(74, 144, 226, 0.2);
  }
  
  .submit-button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    padding: 1rem 2rem;
    background-color: #4a90e2;
    color: white;
    border: none;
    border-radius: 6px;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  .submit-button:hover {
    background-color: #357abd;
  }
  
  .submit-button i {
    font-size: 1rem;
  }
  
  /* Responsive design */
  @media (max-width: 600px) {
    .contact-card {
      padding: 1.5rem;
    }
  
    .contact-info {
      flex-direction: column;
      align-items: flex-start;
      gap: 1rem;
    }
  
    .title {
      font-size: 1.5rem;
    }
  }
  </style>