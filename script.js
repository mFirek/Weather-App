window.addEventListener('DOMContentLoaded', function() {
    var weatherElements = document.querySelectorAll('.bg');
    var currentIndex = 0;

    function switchWeather() {
      weatherElements[currentIndex].classList.remove('active');
      weatherElements[currentIndex].classList.add('hidden');
      currentIndex = (currentIndex + 1) % weatherElements.length;
      weatherElements[currentIndex].classList.remove('hidden');
      weatherElements[currentIndex].classList.add('active');
    }

    for (var i = 1; i < weatherElements.length; i++) {
      weatherElements[i].classList.add('hidden');
    }

    setInterval(switchWeather, 3000);
  });