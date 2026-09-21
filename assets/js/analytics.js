(() => {
  const id = document.querySelector('meta[name="ga-measurement-id"]')?.content;
  const choiceKey = 'pots-and-bowls-analytics-choice';
  if (!id) return;
  const load = () => {
    if (window.gtag) return;
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${id}`;
    document.head.append(script);
    window.dataLayer = window.dataLayer || [];
    window.gtag = function gtag() { window.dataLayer.push(arguments); };
    window.gtag('js', new Date());
    window.gtag('config', id);
    if (document.body.dataset.pageType === 'menu') window.gtag('event', 'view_menu', { menu_name: document.body.dataset.menuName });
    document.addEventListener('click', (event) => {
      const link = event.target.closest('a[href]');
      if (!link) return;
      const href = link.getAttribute('href');
      const eventName = href.startsWith('tel:') ? 'contact_click' : href.startsWith('mailto:') ? 'contact_click' : href.includes('google.com/maps') || href.includes('maps.app.goo.gl') ? 'directions_click' : href.includes('instagram.com') || href.includes('facebook.com') ? 'social_click' : href.includes('/menu/') ? 'select_menu' : '';
      if (eventName) window.gtag('event', eventName, { link_url: link.href, link_text: link.textContent.trim() });
    });
  };
  const choice = localStorage.getItem(choiceKey);
  if (choice === 'accepted') return load();
  if (choice === 'declined') return;
  const banner = document.createElement('aside');
  const isSpanish = document.documentElement.lang.toLowerCase().startsWith('es');
  const copy = isSpanish
    ? { message: 'Usamos analíticas opcionales para entender el uso del sitio.', privacy: 'Privacidad', privacyUrl: '/es/privacidad/', decline: 'Rechazar', accept: 'Aceptar analíticas' }
    : { message: 'We use optional analytics to understand site use.', privacy: 'Privacy', privacyUrl: '/privacy/', decline: 'Decline', accept: 'Accept analytics' };
  banner.className = 'analytics-notice';
  banner.innerHTML = `<p>${copy.message} <a href="${copy.privacyUrl}">${copy.privacy}</a></p><button type="button" data-choice="declined">${copy.decline}</button><button type="button" data-choice="accepted">${copy.accept}</button>`;
  banner.addEventListener('click', (event) => {
    const choice = event.target.dataset.choice;
    if (!choice) return;
    localStorage.setItem(choiceKey, choice);
    banner.remove();
    if (choice === 'accepted') load();
  });
  document.body.append(banner);
})();
