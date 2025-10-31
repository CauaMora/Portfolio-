// Inicialização das particulas com configurações avançadas
document.addEventListener('DOMContentLoaded', function() {
    // Configuração de particulas
    if (typeof particlesJS !== 'undefined') {
        particlesJS('particles-js', {
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
                    "type": "circle",
                    "stroke": {
                        "width": 0,
                        "color": "#000000"
                    },
                    "polygon": {
                        "nb_sides": 5
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
                    "value": 3,
                    "random": true,
                    "anim": {
                        "enable": true,
                        "speed": 2,
                        "size_min": 0.1,
                        "sync": false
                    }
                },
                "line_linked": {
                    "enable": true,
                    "distance": 150,
                    "color": "#ff00aa",
                    "opacity": 0.2,
                    "width": 1
                },
                "move": {
                    "enable": true,
                    "speed": 1,
                    "direction": "none",
                    "random": false,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false,
                    "attract": {
                        "enable": true,
                        "rotateX": 600,
                        "rotateY": 1200
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
                            "opacity": 0.6
                        }
                    },
                    "bubble": {
                        "distance": 400,
                        "size": 40,
                        "duration": 2,
                        "opacity": 0.8,
                        "speed": 3
                    },
                    "repulse": {
                        "distance": 200,
                        "duration": 0.4
                    },
                    "push": {
                        "particles_nb": 4
                    },
                    "remove": {
                        "particles_nb": 2
                    }
                }
            },
            "retina_detect": true
        });
    }

    // Inicializa AOS para animações de scroll
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 1000,
            easing: 'ease-in-out',
            once: false,
            mirror: true
        });
    }

    // Inicializa o loader
    setTimeout(() => {
        const loaderWrapper = document.querySelector('.loader-wrapper');
        if (loaderWrapper) {
            loaderWrapper.style.opacity = "0";
            loaderWrapper.style.visibility = "hidden";
            document.body.style.overflow = "visible";
        }
    }, 1500);

    // Configurações para o cursor personalizado
    const cursor = document.querySelector('.mouse-follower');
    const cursorFx = document.querySelector('.mouse-follower-fx');
    
    document.addEventListener('mousemove', (e) => {
        if (cursor && cursorFx) {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
            
            // adiciona um leve atraso ao segundo cursor para efeito visual
            setTimeout(() => {
                cursorFx.style.left = e.clientX + 'px';
                cursorFx.style.top = e.clientY + 'px';
            }, 100);
        }
    });

    // Adiciona efeito hover ao cursor quando passar sobre elementos interativos
    const interactiveElements = document.querySelectorAll('a, button, .skill-tag, .nav-link, .cta-button, .social-link');
    
    interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', () => {
            if (cursor && cursorFx) {
                cursor.classList.add('hover');
                cursorFx.classList.add('hover');
            }
        });
        
        element.addEventListener('mouseleave', () => {
            if (cursor && cursorFx) {
                cursor.classList.remove('hover');
                cursorFx.classList.remove('hover');
            }
        });
    });

    // Navegaçao suave ao clicar nos links do menu
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Verifica se o link é interno (começa com #)
            if (href.charAt(0) === '#') {
                e.preventDefault();
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 100,
                        behavior: 'smooth'
                    });
                    
                    // Fecha o menu mobile se estiver aberto
                    const navMenu = document.querySelector('.nav-menu');
                    const navToggle = document.querySelector('.nav-toggle');
                    
                    if (navMenu.classList.contains('active')) {
                        navMenu.classList.remove('active');
                        navToggle.classList.remove('active');
                    }
                }
            }
        });
    });

    // Toggle do menu mobile
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }

    // Atualiza o ano atual no copyright do footer
    const currentYearElement = document.getElementById('current-year');
    if (currentYearElement) {
        currentYearElement.textContent = new Date().getFullYear();
    }

    // Animação de digitação para o texto de introdução
    const typingText = document.querySelector('.typing-text');
    
    if (typingText) {
        const text = typingText.textContent;
        typingText.textContent = '';
        let charIndex = 0;
        
        function typeText() {
            if (charIndex < text.length) {
                typingText.textContent += text.charAt(charIndex);
                charIndex++;
                setTimeout(typeText, 50); // Velocidade da digitação
            } else {
                // Adiciona classe para iniciar a animação do cursor piscando
                document.querySelector('.cursor').classList.add('blink');
            }
        }
        
        // Inicia a animação após um pequeno delay
        setTimeout(typeText, 1000);
    }

    // Scroll ativo para navegação
    const sections = document.querySelectorAll('section');
    
    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            const scrollPosition = window.pageYOffset;
            
            if (scrollPosition >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });

        // Efeito de paralaxe nos elementos decorativos
        const scrollY = window.pageYOffset;
        
        document.querySelectorAll('.floating-shapes .shape').forEach((shape, index) => {
            const speed = 0.1 * (index + 1);
            shape.style.transform = `translateY(${scrollY * speed}px)`;
        });

        // Animação da barra de navegação (fixa após scroll)
        const navbar = document.getElementById('navbar');
        
        if (navbar) {
            if (scrollY > 50) {
                navbar.classList.add('fixed');
            } else {
                navbar.classList.remove('fixed');
            }
        }
    });

    // Animação para as skills tags
    const skillTags = document.querySelectorAll('.skill-tag');
    
    skillTags.forEach(tag => {
        tag.addEventListener('mouseenter', () => {
            tag.classList.add('active');
        });
        
        tag.addEventListener('mouseleave', () => {
            tag.classList.remove('active');
        });
    });

    // Efeito de glitch para textos (classe .glitch-text)
    const glitchTexts = document.querySelectorAll('.glitch-text');
    
    glitchTexts.forEach(text => {
        setInterval(() => {
            text.classList.add('glitch-effect');
            
            setTimeout(() => {
                text.classList.remove('glitch-effect');
            }, 200);
        }, 3000); // Frequencia do efeito glitch
    });

    // Animação para botão de voltar ao topo
    const backToTopButton = document.querySelector('.back-to-top a');
    
    if (backToTopButton) {
        backToTopButton.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
        
        // Mostra/esconde o botão baseado na posição do scroll
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                backToTopButton.classList.add('active');
            } else {
                backToTopButton.classList.remove('active');
            }
        });
    }

    // Animação para revelar seções ao rolar
    const observerOptions = {
        threshold: 0.25,
        rootMargin: "0px 0px -100px 0px"
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('section, .profile-img-container, .about-content').forEach(section => {
        observer.observe(section);
    });

    // Preloader para imagens
    const images = document.querySelectorAll('img');
    let loadedCount = 0;
    
    images.forEach(image => {
        const tempImage = new Image();
        tempImage.onload = () => {
            loadedCount++;
            const progress = Math.floor((loadedCount / images.length) * 100);
            const loaderProgress = document.querySelector('.loader-progress');
            
            if (loaderProgress) {
                loaderProgress.style.width = `${progress}%`;
            }
        };
        tempImage.src = image.src;
    });
});