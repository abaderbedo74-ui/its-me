// ===================================================================
// Professional Animation Script for CC EGYPT Portfolio
// ===================================================================

document.addEventListener("DOMContentLoaded", () => {
    
    // ==========================================
    // 1. HERO SECTION ANIMATIONS
    // ==========================================
    
    const heroSection = document.querySelector('.hero-top');
    const mainIcon = document.querySelector('.main-icon');
    const heroTitle = document.querySelector('.hero-top h1');
    const heroDesc = document.querySelector('.hero-desc');
    
    // Initial hero state - hidden for entrance animation
    function initHeroAnimation() {
        // Set initial states
        mainIcon.style.opacity = '0';
        mainIcon.style.transform = 'translateY(-30px) scale(0.8)';
        
        heroTitle.style.opacity = '0';
        heroTitle.style.transform = 'translateY(30px)';
        
        heroDesc.style.opacity = '0';
        heroDesc.style.transform = 'translateY(20px)';
        
        // Animate icon first (floating effect)
        setTimeout(() => {
            mainIcon.style.transition = 'all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)';
            mainIcon.style.opacity = '1';
            mainIcon.style.transform = 'translateY(0) scale(1)';
            
            // Continuous floating animation after entrance
            animateFloat(mainIcon);
        }, 300);
        
        // Title animation
        setTimeout(() => {
            heroTitle.style.transition = 'all 0.8s ease-out';
            heroTitle.style.opacity = '1';
            heroTitle.style.transform = 'translateY(0)';
        }, 600);
        
        // Description animation
        setTimeout(() => {
            heroDesc.style.transition = 'all 0.6s ease-out';
            heroDesc.style.opacity = '1';
            heroDesc.style.transform = 'translateY(0)';
        }, 900);
    }
    
    // Floating animation for icon
    function animateFloat(element) {
        let start = Date.now();
        let floatAnim = () => {
            let time = Date.now() - start;
            let offset = Math.sin(time / 1000) * 10;
            element.style.transform = `translateY(${offset}px)`;
            requestAnimationFrame(floatAnim);
        };
        floatAnim();
    }
    
    // Run hero animation
    initHeroAnimation();
    
    // ==========================================
    // 2. NAVBAR ANIMATIONS
    // ==========================================
    
    const navbar = document.querySelector(".navbar");
    const navLinks = document.querySelectorAll('.nav-item, .cta-btn');
    
    // Slide down animation on load
    navbar.style.transform = 'translateY(-100%)';
    navbar.style.opacity = '0';
    
    setTimeout(() => {
        navbar.style.transition = 'all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)';
        navbar.style.transform = 'translateY(0)';
        navbar.style.opacity = '1';
    }, 100);
    
    // Navbar scroll effect with smooth transitions
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            navbar.style.padding = "15px 60px";
            navbar.style.background = "rgba(0, 0, 0, 0.95)";
            navbar.style.backdropFilter = "blur(20px)";
            navbar.style.borderBottom = "1px solid rgba(255, 255, 255, 0.1)";
            navbar.style.boxShadow = "0 4px 30px rgba(0, 0, 0, 0.3)";
        } else {
            navbar.style.padding = "40px 60px";
            navbar.style.background = "transparent";
            navbar.style.backdropFilter = "none";
            navbar.style.borderBottom = "none";
            navbar.style.boxShadow = "none";
        }
    });
    
    // Nav links hover effects
    navLinks.forEach(link => {
        link.addEventListener('mouseenter', () => {
            link.style.transition = 'all 0.3s ease';
            link.style.transform = 'translateY(-2px)';
        });
        link.addEventListener('mouseleave', () => {
            link.style.transform = 'translateY(0)';
        });
    });
    
    // Logo hover effect
    const logo = document.querySelector('.logo');
    logo.addEventListener('mouseenter', () => {
        logo.style.transition = 'all 0.3s ease';
        logo.style.textShadow = '0 0 20px rgba(255, 255, 255, 0.5)';
    });
    logo.addEventListener('mouseleave', () => {
        logo.style.textShadow = 'none';
    });
    
    // ==========================================
    // 3. SERVICES SECTION - 3D TILT & ANIMATIONS
    // ==========================================
    
    const serviceItems = document.querySelectorAll(".service-item");
    
    serviceItems.forEach((item, index) => {
        // Set initial state
        item.style.opacity = "0";
        item.style.transform = "translateY(50px) scale(0.9)";
        item.style.transition = `all 0.6s cubic-bezier(0.34, 1.56, 0.64, ${index * 0.1 + 0.2})`;
        
        // Add 3D tilt effect container
        item.style.transformStyle = "preserve-3d";
        item.style.perspective = "1000px";
        
        // 3D Tilt Effect on Hover
        item.addEventListener('mousemove', (e) => {
            const rect = item.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;
            
            item.style.transition = 'transform 0.1s ease';
            item.style.transform = `translateY(0) scale(1.05) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });
        
        item.addEventListener('mouseleave', () => {
            item.style.transition = 'all 0.4s ease';
            item.style.transform = 'translateY(0) scale(1) rotateX(0) rotateY(0)';
        });
    });
    
    // ==========================================
    // 4. SCROLL REVEAL ANIMATION (Enhanced)
    // ==========================================
    
    const observerOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                // Add a slight delay for stagger effect
                setTimeout(() => {
                    entry.target.style.opacity = "1";
                    entry.target.style.transform = "translateY(0) scale(1)";
                }, 100);
            }
        });
    }, observerOptions);
    
    serviceItems.forEach((item) => {
        observer.observe(item);
    });
    
    // ==========================================
    // 5. CTA BUTTON - ENHANCED INTERACTION
    // ==========================================
    
    const ctaBtn = document.querySelector(".cta-btn");
    
    // Mouse down effect
    ctaBtn.addEventListener("mousedown", () => {
        ctaBtn.style.transition = 'all 0.1s ease';
        ctaBtn.style.transform = "scale(0.92) rotate(-1deg)";
    });
    
    // Mouse up effect
    ctaBtn.addEventListener("mouseup", () => {
        ctaBtn.style.transition = 'all 0.2s cubic-bezier(0.34, 1.56, 0.64, 1)';
        ctaBtn.style.transform = "scale(1) rotate(0deg)";
    });
    
    // Mouse leave reset
    ctaBtn.addEventListener('mouseleave', () => {
        ctaBtn.style.transition = 'all 0.3s ease';
        ctaBtn.style.transform = "scale(1) rotate(0deg)";
    });
    
    // Hover glow effect
    ctaBtn.addEventListener('mouseenter', () => {
        ctaBtn.style.boxShadow = '0 0 30px rgba(255, 255, 255, 0.2), inset 0 0 20px rgba(255, 255, 255, 0.1)';
        ctaBtn.style.borderColor = 'rgba(255, 255, 255, 0.5)';
    });
    
    ctaBtn.addEventListener('mouseleave', () => {
        ctaBtn.style.boxShadow = 'none';
        ctaBtn.style.borderColor = '#333';
    });
    
    // ==========================================
    // 6. PARALLAX BACKGROUND EFFECT
    // ==========================================
    
    const heroTop = document.querySelector('.hero-top');
    
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        if (scrollY < heroTop.offsetHeight) {
            heroTop.style.backgroundPositionY = `${scrollY * 0.4}px`;
        }
    });
    
    // ==========================================
    // 7. FOOTER ANIMATIONS
    // ==========================================
    
    const footer = document.querySelector('.bottom-bar');
    const footerLinks = document.querySelectorAll('.info-link');
    
    // Footer entrance animation
    footer.style.opacity = '0';
    footer.style.transform = 'translateY(30px)';
    
    const footerObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                footer.style.transition = 'all 0.6s ease-out';
                footer.style.opacity = '1';
                footer.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.3 });
    
    footerObserver.observe(footer);
    
    // Footer links hover animation
    footerLinks.forEach(link => {
        link.addEventListener('mouseenter', () => {
            link.style.transition = 'all 0.3s ease';
            link.style.color = '#fff';
            link.style.transform = 'translateX(5px)';
        });
        link.addEventListener('mouseleave', () => {
            link.style.color = '#666';
            link.style.transform = 'translateX(0)';
        });
    });
    
    // ==========================================
    // 8. SMOOTH SCROLL INDICATOR (Optional)
    // ==========================================
    
    // Create scroll indicator
    const scrollIndicator = document.createElement('div');
    scrollIndicator.className = 'scroll-indicator';
    scrollIndicator.innerHTML = '<span>↓</span>';
    scrollIndicator.style.cssText = `
        position: absolute;
        bottom: 30px;
        left: 50%;
        transform: translateX(-50%);
        color: white;
        font-size: 24px;
        opacity: 0.7;
        animation: bounce 2s infinite;
        z-index: 10;
    `;
    
    // Add bounce animation keyframes
    const style = document.createElement('style');
    style.textContent = `
        @keyframes bounce {
            0%, 20%, 50%, 80%, 100% { transform: translateX(-50%) translateY(0); }
            40% { transform: translateX(-50%) translateY(-10px); }
            60% { transform: translateX(-50%) translateY(-5px); }
        }
        @keyframes glow-pulse {
            0%, 100% { box-shadow: 0 0 5px rgba(255,255,255,0.2); }
            50% { box-shadow: 0 0 20px rgba(255,255,255,0.4); }
        }
    `;
    document.head.appendChild(style);
    
    heroSection.appendChild(scrollIndicator);
    
    // Hide scroll indicator on scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            scrollIndicator.style.opacity = '0';
            scrollIndicator.style.transition = 'opacity 0.3s ease';
        } else {
            scrollIndicator.style.opacity = '0.7';
        }
    });
    
    // ==========================================
    // 9. SERVICE ITEMS ICONS ANIMATION
    // ==========================================
    
    const serviceIcons = document.querySelectorAll('.service-item img');
    
    serviceIcons.forEach(icon => {
        // Set initial state
        icon.style.transition = 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)';
        
        // Get parent service item for hover detection
        const parentItem = icon.closest('.service-item');
        
        parentItem.addEventListener('mouseenter', () => {
            icon.style.transform = 'scale(1.3) rotate(15deg)';
        });
        
        parentItem.addEventListener('mouseleave', () => {
            icon.style.transform = 'scale(1) rotate(0deg)';
        });
    });
    
    // ==========================================
    // 10. CUSTOM CURSOR EFFECT (Optional)
    // ==========================================
    
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    cursor.style.cssText = `
        width: 20px;
        height: 20px;
        border: 2px solid white;
        border-radius: 50%;
        position: fixed;
        pointer-events: none;
        z-index: 9999;
        transition: transform 0.1s ease, background 0.3s ease;
        mix-blend-mode: difference;
    `;
    document.body.appendChild(cursor);
    
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX - 10 + 'px';
        cursor.style.top = e.clientY - 10 + 'px';
    });
    
    // Cursor hover effect on interactive elements
    const interactiveElements = document.querySelectorAll('a, button, .service-item');
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.style.transform = 'scale(1.5)';
            cursor.style.background = 'rgba(255,255,255,0.2)';
        });
        el.addEventListener('mouseleave', () => {
            cursor.style.transform = 'scale(1)';
            cursor.style.background = 'transparent';
        });
    });
    
    console.log('✨ Professional animations loaded successfully!');
});
