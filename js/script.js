document.addEventListener('DOMContentLoaded', function() {
  // Accordion
  const accordions = document.querySelectorAll('.accordion-header');
  accordions.forEach(header => {
    header.addEventListener('click', () => {
      const content = header.nextElementSibling;
      content.style.display = content.style.display === 'block' ? 'none' : 'block';
    });
  });

  // Service Cards
  const serviceCards = document.querySelectorAll('.service-card');
  serviceCards.forEach(card => {
    card.addEventListener('click', function() {
      const targetURL = card.getAttribute('data-target');
      if (targetURL) {
        window.location.href = targetURL;
      } else {
        alert('Weitere Informationen in Kürze...');
      }
    });
  });
});

// Preloader-Logik
window.addEventListener('load', () => {
  const preloader = document.getElementById('preloader');
  setTimeout(() => {
    preloader.style.transition = 'opacity 0.5s ease';
    preloader.style.opacity = '0';
    setTimeout(() => {
      preloader.style.display = 'none';
    }, 500);
  }, 2000);
});

