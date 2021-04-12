window.addEventListener('DOMContentLoaded', () => {

  const menu = document.querySelector('#menu');
  const enter = document.querySelector('.main-header__enter');
  const classMenu = 'menu';

  function removeMenu() {
    menu.classList.remove(classMenu);
    enter.classList.remove(classMenu);
    document.body.classList.remove('fixed-page');
  }

  document.querySelector('#burger').addEventListener('click', () => {
      menu.classList.toggle(classMenu);
      enter.classList.toggle(classMenu);
      document.body.classList.toggle('fixed-page');
  });
  document.querySelectorAll('.main-header__link').forEach((link) => {
    link.addEventListener('click', () => {
      removeMenu();
    });
  });
  document.querySelector('.main-header__enter-link').addEventListener('click', () => {
    removeMenu();
  });
});

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.art-direction__btn').forEach((arts) => {
    arts.addEventListener('click', (event) => {
      const path = event.currentTarget.dataset.path

      document.querySelectorAll('.art-direction__artists-list').forEach((artists) => {
        artists.classList.remove('art-direction__artists-list_active');
      });
      document.querySelectorAll('.art-direction__btn').forEach((art) => {
        art.classList.remove('active');
      });
      document.querySelector(`[data-target="${path}"]`).classList.add('art-direction__artists-list_active');
      document.querySelector(`[data-path="${path}"]`).classList.add('active');
    });
  });
  document.querySelectorAll('.art-direction__artists-list').forEach((link) => {
    link.addEventListener('mouseleave', () => {

      document.querySelectorAll('.art-direction__artists-list').forEach((artists) => {
        artists.classList.remove('art-direction__artists-list_active');
      });
      document.querySelectorAll('.art-direction__btn').forEach((art) => {
        art.classList.remove('active');
      });
    })
  });
})
