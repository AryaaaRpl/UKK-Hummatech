  // loading
  window.addEventListener('load', function() {
    setTimeout(function() {
      const loader = document.getElementById('page');

      if(loader) {
        loader.classList.add('d-none');
      }
    }, 2000);
  })
  