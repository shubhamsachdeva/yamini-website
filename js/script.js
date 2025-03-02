// Initialize AOS animation library
document.addEventListener('DOMContentLoaded', function() {
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true,
        mirror: false
    });
    
    // Navbar functionality
    const navbar = document.querySelector('.navbar');
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    const navLinks = document.querySelectorAll('.nav-link');

    // Let Bootstrap handle the toggle
    // Instead, we'll just add click handlers for the links

    // Close menu when clicking a link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            // Use Bootstrap's collapse API to hide the menu
            const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
                toggle: false
            });
            bsCollapse.hide();
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        const isClickInside = navbar.contains(e.target);
        if (!isClickInside && navbarCollapse.classList.contains('show')) {
            // Use Bootstrap's collapse API to hide the menu
            const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
                toggle: false
            });
            bsCollapse.hide();
        }
    });

    // Form validation
    const forms = document.querySelectorAll('.needs-validation');
    Array.from(forms).forEach(form => {
        form.addEventListener('submit', function(event) {
            if (!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
            }
            form.classList.add('was-validated');
        });
    });

    // Smooth scrolling for navbar links
    document.querySelectorAll('a.nav-link').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            window.scrollTo({
                top: targetSection.offsetTop - 80,
                behavior: 'smooth'
            });
        });
    });
    
    // Navbar background change on scroll
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Fix for missing Font Awesome icons
    const mirrorIcons = document.querySelectorAll('.fa-mirror');
    if (mirrorIcons.length > 0) {
        mirrorIcons.forEach(icon => {
            icon.classList.remove('fa-mirror');
            icon.classList.add('fa-id-badge');
        });
    }
}); 