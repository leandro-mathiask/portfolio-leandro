function menuAparecer() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "./src/images/menu_white_36dp.svg";
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "./src/images/close_white_36dp.svg";
    }
};


function saveScrollPosition() {
    const scrollPosition = window.scrollY;
    localStorage.setItem('scrollPosition', scrollPosition);
  }
  
  function restoreScrollPosition() {
    const scrollPosition = localStorage.getItem('scrollPosition');
    if (scrollPosition !== null) {
        window.scrollTo({
            top: scrollPosition,
            behavior: 'smooth' // Adiciona a transição suave
        });
        localStorage.removeItem('scrollPosition');
    }
  }
  
  // Adiciona um event listener para salvar a posição do scroll ao clicar no link
  document.addEventListener('DOMContentLoaded', function () {
    const languageBtn = document.querySelector('.language-btn');
    if (languageBtn) {
        languageBtn.addEventListener('click', saveScrollPosition);
    }
    restoreScrollPosition();
  });