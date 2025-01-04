<!-- Footer Component -->
<template>
  <footer class="footer">
    <div class="footer-content">
      <div class="footer-section brand-section">
        <h3>TravelAgency</h3>
        <p>Créons ensemble vos plus beaux voyages</p>
      </div>
      <div class="footer-section">
        <h4>Contactez-nous</h4>
        <ul>
          <li>contact@travelagency.com</li>
          <li>+33 1 23 45 67 89</li>
          <li>123 Avenue des Voyages, Paris</li>
        </ul>
      </div>
      <div class="footer-section">
        <h4>Liens rapides</h4>
        <ul>
          <li><router-link to="/about">À propos</router-link></li>
          <li><router-link to="/destinations">Destinations</router-link></li>
          <li><router-link to="/contact">Contact</router-link></li>
        </ul>
      </div>
      <div class="footer-section">
        <h4>Suivez-nous</h4>
        <div class="social-links">
          <a href="#" aria-label="Facebook">
            <i class="fab fa-facebook"></i>
          </a>
          <a href="#" aria-label="Instagram">
            <i class="fab fa-instagram"></i>
          </a>
          <a href="#" aria-label="Twitter">
            <i class="fab fa-twitter"></i>
          </a>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <p>&copy; {{ new Date().getFullYear() }} TravelAgency. Tous droits réservés.</p>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: #1a1a1a;
  color: #fff;
  padding-top: 4rem;
  position: relative;
}

.footer::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, #2563EB, #3B82F6);
}

.footer-content {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 4rem;
}

.footer-section h3 {
  font-size: 2rem;
  margin-bottom: 1rem;
  background: linear-gradient(45deg, #2563EB, #3B82F6);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.footer-section h4 {
  font-size: 1.2rem;
  color: #fff;
  margin-bottom: 1.5rem;
}

.footer-section ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-section ul li {
  margin-bottom: 1rem;
  color: #9CA3AF;
}

.footer-section a {
  color: #9CA3AF;
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-section a:hover {
  color: #3B82F6;
}

.social-links {
  display: flex;
  gap: 1rem;
}

.social-links a {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

.social-links a:hover {
  background: #3B82F6;
  color: white;
  transform: translateY(-3px);
}

.footer-bottom {
  margin-top: 4rem;
  padding: 1.5rem;
  text-align: center;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.footer-bottom p {
  color: #9CA3AF;
}

@media (max-width: 1024px) {
  .footer-content {
    grid-template-columns: repeat(2, 1fr);
    gap: 3rem;
  }
}

@media (max-width: 768px) {
  .footer-content {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 2.5rem;
  }

  .social-links {
    justify-content: center;
  }
}
</style>