/* =========================================================
   NAVBAR & UI INTERACTION
========================================================= */

// Toggle Mobile Menu
function toggleMenu() {
    const menu = document.getElementById('nav-menu');
    menu.classList.toggle('open');
}

// Handle Form Submissions with branded feedback
document.addEventListener('DOMContentLoaded', () => {
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            alert("Thank you for choosing Global Travels! Our experts will contact you shortly.");
            form.reset();
        });
    });

    // Initialize Image Sliders (Simple auto-fade logic)
    initSimpleSlider();
});

/* =========================================================
   PHOTO SLIDER LOGIC
   Simulates a slider by cycling through images in a card
========================================================= */
function initSimpleSlider() {
    const sliderImages = document.querySelectorAll('.slider-img');
    if (sliderImages.length === 0) return;

    let currentIndex = 0;
    setInterval(() => {
        sliderImages[currentIndex].style.display = 'none';
        currentIndex = (currentIndex + 1) % sliderImages.length;
        sliderImages[currentIndex].style.display = 'block';
    }, 3000); // Changes image every 3 seconds
}