(() => {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.site-nav');
  const body = document.body;

  if (toggle && nav) {
    const closeMenu = () => {
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label', 'Відкрити меню');
      nav.classList.remove('is-open');
      body.classList.remove('menu-open');
    };

    toggle.addEventListener('click', () => {
      const isOpen = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!isOpen));
      toggle.setAttribute('aria-label', isOpen ? 'Відкрити меню' : 'Закрити меню');
      nav.classList.toggle('is-open', !isOpen);
      body.classList.toggle('menu-open', !isOpen);
    });

    nav.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
    document.addEventListener('keydown', event => {
      if (event.key === 'Escape') closeMenu();
    });
    window.addEventListener('resize', () => {
      if (window.innerWidth > 700) closeMenu();
    });
  }

  const year = document.querySelector('#year');
  if (year) year.textContent = new Date().getFullYear();

  const portrait = document.querySelector('.portrait-image');
  const placeholder = document.querySelector('.portrait-placeholder');
  if (portrait && placeholder) {
    portrait.addEventListener('load', () => {
      portrait.hidden = false;
      placeholder.hidden = true;
    });
    portrait.addEventListener('error', () => {
      portrait.hidden = true;
      placeholder.hidden = false;
    });
    if (portrait.complete && portrait.naturalWidth > 0) {
      portrait.hidden = false;
      placeholder.hidden = true;
    }
  }
})();
