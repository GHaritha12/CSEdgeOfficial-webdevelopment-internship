// Apply parallax effect based on scroll position
window.addEventListener('scroll', function() {
    let parallaxSections = document.querySelectorAll('.parallax');
    
    for (let section of parallaxSections) {
      let scrolled = window.pageYOffset;
      let rate = section.dataset.rate;
      section.style.backgroundPositionY = -(scrolled * rate) + 'px';
    }
  });
  