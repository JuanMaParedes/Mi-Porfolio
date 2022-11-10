const menuToggle = document.querySelector('.toggle');
const menuG = document.querySelector('.grillaM');
const showcase = document.querySelector('.showcase');
const cerrarMenu = document.querySelector('.menu');



menuG.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    showcase.classList.toggle('active');
  });
  cerrarMenu.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    showcase.classList.toggle('active');
  });

