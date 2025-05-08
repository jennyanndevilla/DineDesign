function jumpEffect(element) {
    element.classList.add('jump');
    element.addEventListener('animationend', function handleEnd() {
      element.classList.remove('jump');
      element.removeEventListener('animationend', handleEnd);
    });
  }
  
