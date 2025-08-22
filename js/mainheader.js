const header = document.getElementById('mainheader');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 100) { // Altere "100" para o ponto desejado
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });