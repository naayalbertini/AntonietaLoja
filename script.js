
  const botaoMenu = document.querySelector('.botao-menu');
  const menu = document.querySelector('.menu-oculto');

  botaoMenu.addEventListener('click', () => {
    menu.classList.toggle('menu-visivel');
  });

