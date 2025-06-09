// Akkordeon-Logik
document.addEventListener('DOMContentLoaded', () => {
  const accordions = document.querySelectorAll('.accordion-header');
  accordions.forEach(header => {
    header.addEventListener('click', () => {
      const content = header.nextElementSibling;
      content.style.display = content.style.display === 'block' ? 'none' : 'block';
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

document.addEventListener('DOMContentLoaded', function() {
  // Alle Service-Kärtchen auswählen
  const serviceCards = document.querySelectorAll('.service-card');

  // Für jedes Kärtchen einen Klick-Handler registrieren
  serviceCards.forEach(card => {
    card.addEventListener('click', function() {
      // Die Ziel-URL aus dem data-target-Attribut auslesen
      const targetURL = card.getAttribute('data-target');
      
      // Falls eine Ziel-URL vorhanden ist, zur Seite navigieren
      if (targetURL) {
        window.location.href = targetURL;
      } else {
        // Optional: Meldung falls kein data-target definiert ist
        alert('Weitere Informationen in Kürze...');
      }
    });
  });
});
