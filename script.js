
  window.addEventListener('DOMContentLoaded', function() {
    var sunnyBg = document.getElementById('sunny_bg');
    var nightBg = document.getElementById('night_bg');
    
    // Ukryj element sunny_bg na początku
    sunnyBg.style.display = 'none';
    
    // Ukryj element night_bg po 3 sekundach
    setTimeout(function() {
      nightBg.style.display = 'none';
      sunnyBg.style.display = 'block'; // Pokaż element sunny_bg
    }, 3000);
  });

