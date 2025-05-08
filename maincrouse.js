function jumpEffect(element) {
    
    element.classList.add('jumping');
  
    setTimeout(function() {
      element.classList.remove('jumping');
    }, 1500); 
  }
