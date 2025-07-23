document.addEventListener('DOMContentLoaded', function() {
  // Mobile Menu Toggle
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const nav = document.querySelector('.nav');
  
  mobileMenuBtn.addEventListener('click', function() {
    nav.classList.toggle('active');
    this.querySelector('i').classList.toggle('fa-times');
    this.querySelector('i').classList.toggle('fa-bars');
  });
  
  // Nav Indicator Animation
  const navLinks = document.querySelectorAll('.nav-link');
  const navIndicator = document.querySelector('.nav-indicator');
  
  function moveIndicator(el) {
    navIndicator.style.width = `${el.offsetWidth}px`;
    navIndicator.style.left = `${el.offsetLeft}px`;
  }
  
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      navLinks.forEach(l => l.classList.remove('active'));
      this.classList.add('active');
      moveIndicator(this);
    });
    
    if (link.classList.contains('active')) {
      moveIndicator(link);
    }
  });
  
  // Header Scroll Effect
  const header = document.querySelector('.header');
  
  window.addEventListener('scroll', function() {
    if (window.scrollY > 100) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
  
  // Smooth Scrolling for Anchor Links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: 'smooth'
        });
      }
    });
  });
  
  // Create additional salt particles dynamically
  const saltParticles = document.querySelector('.salt-particles');
  
  for (let i = 0; i < 10; i++) {
    const particle = document.createElement('div');
    particle.classList.add('particle');
    
    // Random size between 3px and 8px
    const size = Math.random() * 5 + 3;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    
    // Random position
    particle.style.top = `${Math.random() * 100}%`;
    particle.style.left = `${Math.random() * 100}%`;
    
    // Random animation duration between 10s and 25s
    particle.style.animationDuration = `${Math.random() * 15 + 10}s`;
    
    saltParticles.appendChild(particle);
  }
});