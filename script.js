<<<<<<< HEAD
// Toggle Mobile Menu and Active Navigation Links
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const navItems = document.querySelectorAll('.nav-links a');
    
    // Toggle mobile menu
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
    }
    
    // Close mobile menu when a nav item is clicked
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            if (hamburger) {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
            }
            
            // Remove active class from all links
            navItems.forEach(link => link.classList.remove('active'));
            
            // Add active class to clicked link
            this.classList.add('active');
        });
    });
    
    // Add active class to current section in navigation
    function setActiveNavLink() {
        const sections = document.querySelectorAll('section');
        const scrollPosition = window.scrollY + 100; // Offset for header
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navItems.forEach(item => {
                    item.classList.remove('active');
                    if (item.getAttribute('href') === `#${sectionId}`) {
                        item.classList.add('active');
                    }
                });
            }
        });
    }
    
    // Check active section on scroll
    window.addEventListener('scroll', setActiveNavLink);
    
    // Set active section on load
    setActiveNavLink();
=======
// Toggle Mobile Menu and Active Navigation Links
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const navItems = document.querySelectorAll('.nav-links a');
    
    // Toggle mobile menu
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
    }
    
    // Close mobile menu when a nav item is clicked
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            if (hamburger) {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
            }
            
            // Remove active class from all links
            navItems.forEach(link => link.classList.remove('active'));
            
            // Add active class to clicked link
            this.classList.add('active');
        });
    });
    
    // Add active class to current section in navigation
    function setActiveNavLink() {
        const sections = document.querySelectorAll('section');
        const scrollPosition = window.scrollY + 100; // Offset for header
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navItems.forEach(item => {
                    item.classList.remove('active');
                    if (item.getAttribute('href') === `#${sectionId}`) {
                        item.classList.add('active');
                    }
                });
            }
        });
    }
    
    // Check active section on scroll
    window.addEventListener('scroll', setActiveNavLink);
    
    // Set active section on load
    setActiveNavLink();
>>>>>>> a0f66d13b8a64cb3c51c23610cfdf4e3553d7453
});