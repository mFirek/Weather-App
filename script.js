
  window.addEventListener('DOMContentLoaded', function() {
    var sunnyBg = document.getElementById('sunny_bg');
    var nightBg = document.getElementById('night_bg');
    
    sunnyBg.style.display = 'none';
    
    setTimeout(function() {
      nightBg.style.display = 'none';
      sunnyBg.style.display = 'block'; 
    }, 3000);
  });

