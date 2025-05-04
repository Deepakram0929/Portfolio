import AOS from 'aos';
import Typed from 'typed.js';

// Initialize AOS animation library
AOS.init({
  duration: 800,
  easing: 'ease-in-out',
  once: false,
  mirror: false
});

// Initialize Typed.js for the typing animation
document.addEventListener('DOMContentLoaded', () => {
  const options = {
    strings: ['AWS DevOps Engineer', 'Cloud Infrastructure Specialist', 'CI/CD Expert', 'Automation Engineer'],
    typeSpeed: 50,
    backSpeed: 30,
    backDelay: 2000,
    loop: true,
    cursorChar: '|'
  };
  
  if (document.getElementById('typed-text')) {
    new Typed('#typed-text', options);
  }
  
  // Handle navigation menu toggle
  const menuButton = document.querySelector('.menu-button');
  const navLinks = document.querySelector('.nav-links');
  
  if (menuButton) {
    menuButton.addEventListener('click', () => {
      menuButton.classList.toggle('active');
      navLinks.classList.toggle('active');
    });
  }
  
  // Close menu when clicking on a nav link (mobile)
  const navItems = document.querySelectorAll('.nav-links a');
  navItems.forEach(item => {
    item.addEventListener('click', () => {
      menuButton.classList.remove('active');
      navLinks.classList.remove('active');
    });
  });
  
  // Highlight active nav item on scroll
  const sections = document.querySelectorAll('section');
  window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (scrollY >= (sectionTop - 300)) {
        current = section.getAttribute('id');
      }
    });
    
    navItems.forEach(item => {
      item.classList.remove('active');
      if (item.getAttribute('href').substring(1) === current) {
        item.classList.add('active');
      }
    });
    
    // Show/hide scroll to top button
    const scrollToTop = document.querySelector('.scroll-to-top');
    if (scrollY > 500) {
      scrollToTop.classList.add('visible');
    } else {
      scrollToTop.classList.remove('visible');
    }
  });
  
  // Scroll to top button functionality
  const scrollToTop = document.querySelector('.scroll-to-top');
  if (scrollToTop) {
    scrollToTop.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
  
  // Handle project filtering
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');
  
  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Update active button
      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
      
      // Filter projects
      const filter = button.getAttribute('data-filter');
      
      projectCards.forEach(card => {
        if (filter === 'all') {
          card.style.display = 'block';
        } else {
          const categories = card.getAttribute('data-category').split(' ');
          if (categories.includes(filter)) {
            card.style.display = 'block';
          } else {
            card.style.display = 'none';
          }
        }
      });
      
      // Re-initialize AOS after filtering
      AOS.refresh();
    });
  });
  
  // Form submission
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      // Simulate form submission
      const submitButton = contactForm.querySelector('button[type="submit"]');
      const originalText = submitButton.textContent;
      
      submitButton.disabled = true;
      submitButton.textContent = 'Sending...';
      
      setTimeout(() => {
        alert('Message sent successfully! This is a demo form; in a real portfolio, this would send your message to the portfolio owner.');
        contactForm.reset();
        submitButton.disabled = false;
        submitButton.textContent = originalText;
      }, 1500);
    });
  }
  
  // Theme switcher
  const themeToggle = document.getElementById('checkbox');
  const storedTheme = localStorage.getItem('theme');
  
  if (storedTheme === 'dark') {
    document.body.classList.add('dark-theme');
    if (themeToggle) themeToggle.checked = true;
  }
  
  if (themeToggle) {
    themeToggle.addEventListener('change', () => {
      if (themeToggle.checked) {
        document.body.classList.add('dark-theme');
        localStorage.setItem('theme', 'dark');
      } else {
        document.body.classList.remove('dark-theme');
        localStorage.setItem('theme', 'light');
      }
    });
  }
});