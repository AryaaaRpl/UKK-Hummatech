  const modal = document.getElementById('modalPajero');
  const spinner = document.getElementById('spinnerPajero');
  const image = document.getElementById('imgPajero');


  window.addEventListener('load', function() {
    setTimeout(function() {
      const loader = document.getElementById('page');

      if(loader) {
        loader.classList.add('d-none');
      }
    }, 2000);
  })
  modal.addEventListener('show.bs.modal', () => {
    if (spinner.classList.contains('d-none')) {
      spinner.classList.remove('d-none');
    }

    if (!image.classList.contains('d-none')) {
      image.classList.add('d-none');
    }

    setTimeout(() => {
      if (!spinner.classList.contains('d-none')) {
        spinner.classList.add('d-none');
      }

      if (image.classList.contains('d-none')) {
        image.classList.remove('d-none');
      }
    }, 1000);
  });

  modal.addEventListener('hidden.bs.modal', () => {
    if (spinner.classList.contains('d-none')) {
      spinner.classList.remove('d-none');
    }

    if (!image.classList.contains('d-none')) {
      image.classList.add('d-none');
    }
  });

  
  const modalI = document.getElementById('modalInnova');
  const spinnerI = document.getElementById('spinnerInnova');
  const imageI = document.getElementById('imgInnova');

  modalI.addEventListener('show.bs.modal', () => {
    if (spinnerI.classList.contains('d-none')) {
      spinnerI.classList.remove('d-none');
    }

    if (!imageI.classList.contains('d-none')) {
      imageI.classList.add('d-none');
    }

    setTimeout(() => {
      if (!spinnerI.classList.contains('d-none')) {
        spinnerI.classList.add('d-none');
      }

      if (imageI.classList.contains('d-none')) {
        imageI.classList.remove('d-none');
      }
    }, 1000);
  });

  modalI.addEventListener('hidden.bs.modal', () => {
    if (spinnerC.classList.contains('d-none')) {
      spinnerC.classList.remove('d-none');
    }

    if (!imageI.classList.contains('d-none')) {
      imageI.classList.add('d-none');
    }
  });
  const modalC = document.getElementById('modalCooper');
  const spinnerC = document.getElementById('spinnerCooper');
  const imageC = document.getElementById('imgCooper');

  modalC.addEventListener('show.bs.modal', () => {
    if (spinnerC.classList.contains('d-none')) {
      spinnerC.classList.remove('d-none');
    }

    if (!imageC.classList.contains('d-none')) {
      imageC.classList.add('d-none');
    }

    setTimeout(() => {
      if (!spinnerC.classList.contains('d-none')) {
        spinnerC.classList.add('d-none');
      }

      if (imageC.classList.contains('d-none')) {
        imageC.classList.remove('d-none');
      }
    }, 1000);
  });

  modalC.addEventListener('hidden.bs.modal', () => {
    if (spinnerC.classList.contains('d-none')) {
      spinnerC.classList.remove('d-none');
    }

    if (!imageC.classList.contains('d-none')) {
      imageC.classList.add('d-none');
    }
  });

  
  


