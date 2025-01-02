<!-- Footer Component -->
<template>
    <footer class="footer">
      <div class="footer-content">
        <div class="footer-section">
          <h3>TravelAgency</h3>
          <p>Votre partenaire de confiance pour des voyages inoubliables</p>
        </div>
        <div class="footer-section">
          <h4>Contact</h4>
          <p>
            <i class="fas fa-envelope"></i> contact@travelagency.com<br>
            <i class="fas fa-phone"></i> +33 1 23 45 67 89
          </p>
        </div>
        <div class="footer-section social-links">
          <h4>Suivez-nous</h4>
          <div class="social-icons">
            <a href="#" aria-label="Facebook"><i class="fab fa-facebook"></i></a>
            <a href="#" aria-label="Twitter"><i class="fab fa-twitter"></i></a>
            <a href="#" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; {{ currentYear }} Travel Agency. Tous droits réservés.</p>
      </div>
    </footer>
  </template>
  
  <script>
  // Script remains the same
  </script>
  
  <style scoped>
  .footer {
    background: linear-gradient(135deg, #2D3436 0%, #17232D 100%);
    color: white;
    padding: 4rem 2rem 1.5rem;
    width: 100%;
    position: relative;
    margin-top: 4rem;
  }
  
  .footer::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(to right, #FF6B6B, #4ECDC4);
  }
  
  .footer-content {
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 3rem;
    padding-bottom: 3rem;
  }
  
  .footer-section h3 {
    font-size: 1.8rem;
    margin-bottom: 1.2rem;
    background: linear-gradient(45deg, #FF6B6B, #4ECDC4);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  
  .footer-section h4 {
    font-size: 1.3rem;
    margin-bottom: 1.2rem;
    color: #4ECDC4;
  }
  
  .footer-section p {
    line-height: 1.8;
    color: #F7F7F7;
    font-size: 1.1rem;
  }
  
  .social-icons {
    display: flex;
    gap: 1.5rem;
    margin-top: 1.5rem;
  }
  
  .social-icons a {
    color: white;
    font-size: 1.6rem;
    transition: all 0.4s ease;
    padding: 0.5rem;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.1);
  }
  
  .social-icons a:hover {
    color: #4ECDC4;
    transform: translateY(-3px);
    background: rgba(255, 255, 255, 0.15);
  }
  
  .footer-bottom {
    text-align: center;
    padding-top: 2rem;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
  }
  
  .footer-bottom p {
    color: #A0A0A0;
    font-size: 1rem;
  }
  
  @media screen and (max-width: 768px) {
    .footer {
      padding: 3rem 1.5rem 1rem;
    }
  
    .footer-content {
      grid-template-columns: 1fr;
      text-align: center;
      gap: 2rem;
    }
  
    .social-icons {
      justify-content: center;
    }
  }
  </style>
  