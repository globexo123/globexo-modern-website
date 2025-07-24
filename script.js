document.addEventListener('DOMContentLoaded', function() {
  // Mobile Menu Toggle
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const nav = document.querySelector('.nav');
  const header = document.querySelector('.header');
  
  mobileMenuBtn.addEventListener('click', function() {
    nav.classList.toggle('active');
    this.querySelector('i').classList.toggle('fa-times');
    this.querySelector('i').classList.toggle('fa-bars');
  });
  
  // Nav Indicator Animation
  const navLinks = document.querySelectorAll('.nav-link');
  const navIndicator = document.querySelector('.nav-indicator');
  
  function moveIndicator(el) {
    if (!el) return;
    navIndicator.style.width = `${el.offsetWidth}px`;
    navIndicator.style.left = `${el.offsetLeft}px`;
  }
  
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      navLinks.forEach(l => l.classList.remove('active'));
      this.classList.add('active');
      moveIndicator(this);
      
      // Close mobile menu when a link is clicked
      if (nav.classList.contains('active')) {
        nav.classList.remove('active');
        mobileMenuBtn.querySelector('i').classList.remove('fa-times');
        mobileMenuBtn.querySelector('i').classList.add('fa-bars');
      }
    });
    
    if (link.classList.contains('active')) {
      moveIndicator(link);
    }
  });
  
  // Header Scroll Effect
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
  
  // Create salt particles dynamically
  const saltParticles = document.querySelector('.salt-particles');
  if (saltParticles) {
    for (let i = 0; i < 15; i++) {
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
      
      // Random delay
      particle.style.animationDelay = `${Math.random() * 5}s`;
      
      saltParticles.appendChild(particle);
    }
  }
  
  // Contact Form Submission
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Get form values
      const name = this.querySelector('input[type="text"]').value;
      const email = this.querySelector('input[type="email"]').value;
      const subject = this.querySelector('input[type="text"]:nth-of-type(2)').value;
      const message = this.querySelector('textarea').value;
      
      // Here you would typically send the data to a server
      console.log('Form submitted:', { name, email, subject, message });
      
      // Show success message
      alert('Thank you for your message! We will get back to you soon.');
      
      // Reset form
      this.reset();
    });
  }
  
  // Initialize animations when elements come into view
  const animateElements = document.querySelectorAll('.animate__animated');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add(entry.target.dataset.animate);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  
  animateElements.forEach(el => {
    observer.observe(el);
  });

  // ڈراپ ڈاؤن مینیو کے لیے موبائل ہینڈلنگ (نیا اضافہ)
  document.querySelectorAll('.dropbtn').forEach(btn => {
    btn.addEventListener('click', function(e) {
      if (window.innerWidth <= 768) {
        e.preventDefault();
        this.nextElementSibling.classList.toggle('show');
      }
    });
  });
});