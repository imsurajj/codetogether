document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const overlayMenu = document.querySelector('.overlay-menu');
    const menuLinks = document.querySelectorAll('.menu-links li');
    
    // Initialize GSAP timeline for menu animation
    const menuTl = gsap.timeline({ paused: true });
    
    menuTl
        .to(overlayMenu, {
            duration: 0.5,
            opacity: 1,
            visibility: 'visible',
            ease: 'power2.inOut'
        })
        .to(menuLinks, {
            duration: 0.4,
            opacity: 1,
            y: 0,
            stagger: 0.1,
            ease: 'power2.out'
        });
  
    // Toggle menu
    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        if (menuToggle.classList.contains('active')) {
            menuTl.play();
        } else {
            menuTl.reverse();
        }
    });
  
    // Hero section animations
    const heroTl = gsap.timeline();
  
    heroTl
        .from('.hero-title', {
            duration: 1,
            y: 50,
            opacity: 0,
            ease: 'power3.out'
        })
        .from('.hero-text', {
            duration: 1,
            y: 30,
            opacity: 0,
            ease: 'power3.out'
        }, '-=0.5')
        .from('.hero-buttons', {
            duration: 1,
            y: 30,
            opacity: 0,
            ease: 'power3.out'
        }, '-=0.7')
        .from('.point', {
            duration: 1,
            scale: 0,
            opacity: 0,
            stagger: 0.2,
            ease: 'back.out(1.7)'
        }, '-=0.5');
  
    // Animate connection lines
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const heroImage = document.querySelector('.hero-image');
    
    canvas.style.position = 'absolute';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.pointerEvents = 'none';
    heroImage.appendChild(canvas);
  
    function resizeCanvas() {
        canvas.width = heroImage.offsetWidth;
        canvas.height = heroImage.offsetHeight;
    }
  
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
  
    function drawConnections() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        const points = document.querySelectorAll('.point');
        
        ctx.strokeStyle = '#00ff9d';
        ctx.lineWidth = 2;
  
        points.forEach((point, i) => {
            const rect = point.getBoundingClientRect();
            const heroRect = heroImage.getBoundingClientRect();
            
            const x1 = rect.left + rect.width/2 - heroRect.left;
            const y1 = rect.top + rect.height/2 - heroRect.top;
  
            points.forEach((point2, j) => {
                if (i !== j) {
                    const rect2 = point2.getBoundingClientRect();
                    const x2 = rect2.left + rect2.width/2 - heroRect.left;
                    const y2 = rect2.top + rect2.height/2 - heroRect.top;
  
                    ctx.beginPath();
                    ctx.moveTo(x1, y1);
                    ctx.lineTo(x2, y2);
                    ctx.stroke();
                }
            });
        });
    }
  
    // Animate connections
    gsap.ticker.add(drawConnections);
  });



  // Companies Sections ------------------------------------------

  
document.addEventListener("DOMContentLoaded", function () {
    // existing javascript code
    const featureCards = document.querySelectorAll(".feature-card");
  
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      {
        threshold: 0.2,
      }
    );
  
    featureCards.forEach((card) => {
      observer.observe(card);
    });
  
    featureCards.forEach((card) => {
      const speed = parseFloat(card.dataset.parallaxSpeed);
      gsap.to(card, {
        z: -50 * speed,
        scrollTrigger: {
          trigger: card,
          scrub: true,
          start: "top bottom",
          end: "bottom top",
        },
      });
    });
  
      // Smooth scroll links
     const navLinks = document.querySelectorAll('nav a[href^="#"], .overlay-menu a[href^="#"]');
  
      navLinks.forEach(link => {
          link.addEventListener('click', function(e){
              e.preventDefault();
              const targetId = this.getAttribute('href');
              gsap.to(window, {
                  duration: 1,
                  scrollTo: targetId,
                  ease: "power3.inOut"
              })
          })
      })
  
      //toggle menu
  
      const menuToggle = document.querySelector('.menu-toggle');
      const overlayMenu = document.querySelector('.overlay-menu');
  
      menuToggle.addEventListener('click', () => {
      overlayMenu.classList.toggle('active');
      });
  
      // Companies Ticker Animation 
      
        const tickerScroll = document.querySelector('.ticker-scroll');
        const scrollWidth = tickerScroll.scrollWidth;
      
         gsap.to(tickerScroll, {
            x: () => -(scrollWidth / 2), // Moves the element to the left to make the second half appear.
            duration: 20, 
            ease: 'none',
            repeat: -1,
        });
  });
  


// Feature Sections -------------------------------------------------------------
  document.addEventListener("DOMContentLoaded", function () {
    const featureCards = document.querySelectorAll(".feature-card");
  
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      {
        threshold: 0.2,
      }
    );
  
    featureCards.forEach((card) => {
      observer.observe(card);
    });
  
    featureCards.forEach((card) => {
      const speed = parseFloat(card.dataset.parallaxSpeed);
      gsap.to(card, {
        z: -50 * speed,
        scrollTrigger: {
          trigger: card,
          scrub: true,
          start: "top bottom",
          end: "bottom top",
        },
      });
    });
  });
  

  // Feature Section Redirect

  