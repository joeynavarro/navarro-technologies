(() => {
  const language = document.body.dataset.language || 'en';
  const languageLinks = document.querySelectorAll('[data-language-choice]');
  const preferenceKey = 'navarro-language';
  const rememberLanguage = value => {
    try { localStorage.setItem(preferenceKey, value); } catch { /* Links still work when storage is unavailable. */ }
  };
  const updateLanguageLinks = () => {
    languageLinks.forEach(link => {
      const path = link.dataset.languageChoice === 'es'
        ? document.body.dataset.spanishPage : document.body.dataset.englishPage;
      link.href = path + window.location.hash;
    });
  };
  updateLanguageLinks();
  window.addEventListener('hashchange', updateLanguageLinks);
  languageLinks.forEach(link => link.addEventListener('click', () => {
    rememberLanguage(link.dataset.languageChoice);
  }));
  let savedLanguage;
  try { savedLanguage = localStorage.getItem(preferenceKey); } catch { /* Storage is optional. */ }
  const englishPath = document.body.dataset.englishPage;
  if (language === 'en' && savedLanguage === 'es' &&
      (window.location.pathname === englishPath ||
       (englishPath === '/' && window.location.pathname === '/index.html'))) {
    window.location.replace(document.body.dataset.spanishPage + window.location.search + window.location.hash);
    return;
  }
  if (language === 'es') rememberLanguage('es');

  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('#main-nav');
  toggle?.addEventListener('click', () => {
    const expanded = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!expanded));
    nav.classList.toggle('is-open', !expanded);
  });
  nav?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    toggle?.setAttribute('aria-expanded', 'false');
    nav.classList.remove('is-open');
  }));
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && toggle?.getAttribute('aria-expanded') === 'true') {
      toggle.setAttribute('aria-expanded', 'false');
      nav.classList.remove('is-open');
      toggle.focus();
    }
  });
  const copy = document.querySelector('.copy-email');
  const status = document.querySelector('.copy-status');
  copy?.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(copy.dataset.email);
      status.textContent = document.body.dataset.copySuccess;
    } catch {
      status.textContent = document.body.dataset.copyFallback.replace('{email}', copy.dataset.email);
    }
  });
  const sectionIds = ['top', 'services', 'stories', 'portfolio', 'qualifications', 'about', 'contact'];
  const sections = sectionIds.map(id => document.getElementById(id)).filter(Boolean);
  const counter = document.querySelector('#current-section');
  let scheduled = false;
  const updateSection = () => {
    scheduled = false;
    if (!sections.length) return;
    let active = sections[0];
    for (const section of sections) {
      if (section.getBoundingClientRect().top <= window.innerHeight * 0.38) active = section;
    }
    if (counter) counter.textContent = String(sectionIds.indexOf(active.id) + 1).padStart(2, '0');
    nav?.querySelectorAll(':scope > a').forEach(link => {
      const current = link.getAttribute('href').endsWith(`#${active.id}`);
      link.classList.toggle('is-active', current);
      if (current) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
  };
  window.addEventListener('scroll', () => {
    if (!scheduled) { scheduled = true; requestAnimationFrame(updateSection); }
  }, { passive: true });
  window.addEventListener('resize', updateSection);
  updateSection();
})();
