window.addEventListener('DOMContentLoaded', function() {
    var sunnyBg = document.getElementById('sunny_bg');
    var nightBg = document.getElementById('night_bg');
    
    sunnyBg.style.display = 'none';
        
    setInterval(function() {
      if (nightBg.classList.contains('active')) {
        nightBg.style.display = 'none';
        sunnyBg.style.display = 'block'; 
        nightBg.classList.remove('active');
        sunnyBg.classList.add('active');
      } else {
        nightBg.style.display = 'block'; 
        sunnyBg.style.display = 'none';
        nightBg.classList.add('active');
        sunnyBg.classList.remove('active');
      }
    }, 3000);
  });