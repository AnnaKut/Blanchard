window.addEventListener('DOMContentLoaded', () => {

  const menu = document.querySelector('#menu');
  const enter = document.querySelector('.main-header__enter');
  const classMenu = 'menu';

  function removeMenu() {
    menu.classList.remove(classMenu);
    enter.classList.remove(classMenu);
    document.body.classList.remove('fixed-page');
  }

  function showArtistPage(country = 'italy') {
    const art = document.querySelectorAll(`.artists__link_${country}`);

    art.forEach((artists) => {
    artists.addEventListener('click', (event) => {
    const id = event.currentTarget.dataset.id

    document.querySelectorAll(`.catalog__artist_${country}`).forEach((artists) => {
      artists.classList.remove('catalog__artist_active');
    })
    document.getElementById(`${id}`).classList.add('catalog__artist_active');
    art.forEach((artists) => {
      artists.classList.remove('artists__link_active')
    })
    document.querySelector(`[data-id="${id}"]`).classList.add('artists__link_active');
    })
    })
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

  const tab = document.querySelectorAll('.catalog__btn');

  tab.forEach((tabs) => {
    tabs.addEventListener('click', (event) => {
      const path = event.currentTarget.dataset.path;
      document.querySelectorAll('.catalog__content').forEach(function(tabContent) {
        tabContent.classList.remove('catalog__content_active');
      })
      document.querySelector(`[data-target="${path}"]`).classList.toggle('catalog__content_active');
      tab.forEach((tabs) => {
        tabs.classList.remove('catalog__btn_active');
      })
      document.querySelector(`[data-path="${path}"]`).classList.add('catalog__btn_active');
      showArtistPage(path);

      document.querySelectorAll(".accordion").forEach((el) => {
        new Accordion(el, {
        modal: true,
        });
      });
    })
  });

  const btnEvents = document.querySelector('.events__btn');

  btnEvents.addEventListener('click', () => {
    document.querySelectorAll('.events__item').forEach((item) => {
      item.classList.add('events__item_active')
    });
    btnEvents.classList.add('events__btn_hidden')
  });

  showArtistPage();

  
  
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
