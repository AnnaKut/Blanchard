window.addEventListener('DOMContentLoaded', () => {

  const menu = document.querySelector('#menu');
  const burger = document.querySelector('.menu-burger');
  const classMenu = 'menu';

  function removeMenu() {
    menu.classList.remove(classMenu);
    burger.classList.remove(classMenu);
  }

  document.querySelector('#burger').addEventListener('click', () => {
      menu.classList.toggle(classMenu);
      burger.classList.toggle(classMenu);
  });
  document.querySelectorAll('.header-nav-link').forEach((link) => {
    link.addEventListener('click', () => {
      removeMenu();
    });
  });
  document.querySelector('.enter-link').addEventListener('click', () => {
    removeMenu();
  });
});

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.header-banner-btn').forEach((arts) => {
    arts.addEventListener('click', (event) => {
      const path = event.currentTarget.dataset.path

      document.querySelectorAll('.header-banner-list').forEach((artists) => {
        artists.classList.remove('header-banner-list-active');
      });
      document.querySelectorAll('.header-banner-btn').forEach((art) => {
        art.classList.remove('active');
      });
      document.querySelector(`[data-target="${path}"]`).classList.add('header-banner-list-active');
      document.querySelector(`[data-path="${path}"]`).classList.add('active');
    });
  });
  document.querySelectorAll('.header-banner-list').forEach((link) => {
    link.addEventListener('mouseleave', () => {

      document.querySelectorAll('.header-banner-list').forEach((artists) => {
        artists.classList.remove('header-banner-list-active');
      });
      document.querySelectorAll('.header-banner-btn').forEach((art) => {
        art.classList.remove('active');
      });
    })
  });
})
