// Configuração de partículas
particlesJS("particles-js", {
  "particles": {
      "number": {
          "value": 80,
          "density": {
              "enable": true,
              "value_area": 800
          }
      },
      "color": {
          "value": ["#8a37ff", "#ff00aa", "#00f7ff"]
      },
      "shape": {
          "type": ["circle", "triangle"],
          "stroke": {
              "width": 0,
              "color": "#000000"
          }
      },
      "opacity": {
          "value": 0.5,
          "random": true,
          "anim": {
              "enable": true,
              "speed": 1,
              "opacity_min": 0.1,
              "sync": false
          }
      },
      "size": {
          "value": 4,
          "random": true,
          "anim": {
              "enable": true,
              "speed": 4,
              "size_min": 0.3,
              "sync": false
          }
      },
      "line_linked": {
          "enable": true,
          "distance": 150,
          "color": "#ffffff",
          "opacity": 0.2,
          "width": 1
      },
      "move": {
          "enable": true,
          "speed": 3,
          "direction": "none",
          "random": true,
          "straight": false,
          "out_mode": "out",
          "bounce": false,
          "attract": {
              "enable": true,
              "rotateX": 800,
              "rotateY": 1600
          }
      }
  },
  "interactivity": {
      "detect_on": "canvas",
      "events": {
          "onhover": {
              "enable": true,
              "mode": "grab"
          },
          "onclick": {
              "enable": true,
              "mode": "push"
          },
          "resize": true
      },
      "modes": {
          "grab": {
              "distance": 140,
              "line_linked": {
                  "opacity": 0.5
              }
          },
          "push": {
              "particles_nb": 4
          }
      }
  },
  "retina_detect": true
});

// Efeito de scroll no menu
window.addEventListener('scroll', function() {
  const navbar = document.getElementById('navbar');
  if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
  } else {
      navbar.classList.remove('scrolled');
  }
});

// Inicializa animações ao rolar
AOS.init({
  duration: 1000,
  once: true,
  easing: 'ease-in-out'
});

// Cursor personalizado
function initCustomCursor() {
  const cursor = document.querySelector('.custom-cursor');
  
  document.addEventListener('mousemove', (e) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
      
      // Efeito quando passa sobre elementos interativos
      const interactiveElements = document.querySelectorAll('a, button, .project-link, .tech-tag');
      let isInteractive = false;
      
      interactiveElements.forEach(el => {
          if (el.matches(':hover')) {
              isInteractive = true;
          }
      });
      
      if (isInteractive) {
          cursor.classList.add('cursor-hover');
      } else {
          cursor.classList.remove('cursor-hover');
      }
  });
}

// Efeito 3D nos cards de projeto
function initProjectCards3D() {
  const projectCards = document.querySelectorAll('.project-card');
  
  projectCards.forEach(card => {
      card.addEventListener('mousemove', (e) => {
          const rect = card.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          const centerX = rect.width / 2;
          const centerY = rect.height / 2;
          const angleX = (y - centerY) / 20;
          const angleY = (centerX - x) / 20;
          
          card.style.transform = `translateY(-10px) rotateX(${angleX}deg) rotateY(${angleY}deg)`;
      });
      
      card.addEventListener('mouseleave', () => {
          card.style.transform = 'translateY(0) rotateX(0) rotateY(0)';
      });
  });
}

// Animação de entrada dos projetos
function animateProjectsGrid() {
  const projectsGrid = document.getElementById('projects-grid');
  setTimeout(() => {
      projectsGrid.classList.add('animated');
  }, 500);
}

// Atualiza o ano do copyright
function updateCopyrightYear() {
  document.getElementById('current-year').textContent = new Date().getFullYear();
}

// Efeito de confete nos links de projeto
function initConfettiEffects() {
  const projectLinks = document.querySelectorAll('.project-link:not(.outline)');
  
  projectLinks.forEach(link => {
      link.addEventListener('click', (e) => {
          if (link.getAttribute('href') === '#') {
              e.preventDefault();
          }
          
          // Criar confetes
          for (let i = 0; i < 30; i++) {
              createConfetti(e.clientX, e.clientY);
          }
      });
  });
}

function createConfetti(x, y) {
  const confetti = document.createElement('div');
  confetti.classList.add('confetti');
  
  // Cores aleatorias
  const colors = ['#ff00aa', '#8a37ff', '#00f7ff', '#ffffff'];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  
  // Configuração do confete
  confetti.style.backgroundColor = randomColor;
  confetti.style.left = `${x}px`;
  confetti.style.top = `${y}px`;
  confetti.style.width = `${Math.random() * 10 + 5}px`;
  confetti.style.height = `${Math.random() * 10 + 5}px`;
  confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
  
  // Animação
  const angle = Math.random() * Math.PI * 2;
  const velocity = Math.random() * 5 + 2;
  const rotationSpeed = (Math.random() - 0.5) * 20;
  let rotation = 0;
  
  document.body.appendChild(confetti);
  
  let posX = x;
  let posY = y;
  let opacity = 1;
  let frame = 0;
  const totalFrames = 100;
  
  function animate() {
      frame++;
      
      // Fisica do confete
      posX += Math.cos(angle) * velocity;
      posY += Math.sin(angle) * velocity + frame * 0.2; // Gravidade
      rotation += rotationSpeed;
      opacity = 1 - frame / totalFrames;
      
      // Aplicar transformações
      confetti.style.left = `${posX}px`;
      confetti.style.top = `${posY}px`;
      confetti.style.transform = `rotate(${rotation}deg)`;
      confetti.style.opacity = opacity;
      
      // Continuar animação ou remover
      if (frame < totalFrames) {
          requestAnimationFrame(animate);
      } else {
          confetti.remove();
      }
  }
  
  requestAnimationFrame(animate);
}

// Inicializa tudo quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', () => {
  initCustomCursor();
  initProjectCards3D();
  animateProjectsGrid();
  updateCopyrightYear();
  initConfettiEffects();
  
  // Scroll suave para âncoras
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
          e.preventDefault();
          const target = document.querySelector(this.getAttribute('href'));
          if (target) {
              window.scrollTo({
                  top: target.offsetTop - 100,
                  behavior: 'smooth'
              });
          }
      });
  });
});
