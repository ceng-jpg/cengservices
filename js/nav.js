// nav.js - auto-detects base path and injects nav + footer
(function() {
  const path = window.location.pathname;

  // Determine base relative to current page
  let base = '';
  if (path.includes('/pages/services/')) {
    base = '../../';
  } else if (path.includes('/pages/')) {
    base = '../';
  }

  function isActive(href) {
    const pageName = href.split('/').pop();
    return path.endsWith(pageName);
  }

  function navLink(href, label) {
    const active = isActive(href) ? ' class="active"' : '';
    return `<li><a href="${base}${href}"${active}>${label}</a></li>`;
  }

  function mobileLink(href, label) {
    const active = isActive(href) ? ' class="active"' : '';
    return `<a href="${base}${href}"${active}>${label}</a>`;
  }

  const NAV = `
<nav>
  <a href="${base}index.html" class="nav-logo">
    <div class="logo-box">CS</div>
    <span>cengservices</span>
  </a>
  <ul class="nav-links">
    ${navLink('index.html', 'HOME')}
    ${navLink('pages/about.html', 'ABOUT')}
    ${navLink('pages/services.html', 'SERVICES')}
    ${navLink('pages/portfolio.html', 'PORTFOLIO')}
    ${navLink('pages/contact.html', 'CONTACT')}
  </ul>
  <a href="${base}pages/contact.html" class="nav-cta">HIRE ME →</a>
  <button class="hamburger" aria-label="Menu">
    <span></span><span></span><span></span>
  </button>
</nav>
<div class="mobile-menu">
  ${mobileLink('index.html', 'HOME')}
  ${mobileLink('pages/about.html', 'ABOUT')}
  ${mobileLink('pages/services.html', 'SERVICES')}
  ${mobileLink('pages/portfolio.html', 'PORTFOLIO')}
  ${mobileLink('pages/contact.html', 'CONTACT')}
  <a href="${base}pages/contact.html" class="nav-cta" style="margin-top:1rem">HIRE ME →</a>
</div>`;

  const FOOTER = `
<footer>
  <p>© 2025 CENGSERVICES — ALL RIGHTS RESERVED</p>
  <ul class="footer-links">
    <li><a href="${base}index.html">HOME</a></li>
    <li><a href="${base}pages/about.html">ABOUT</a></li>
    <li><a href="${base}pages/services.html">SERVICES</a></li>
    <li><a href="${base}pages/contact.html">CONTACT</a></li>
  </ul>
</footer>`;

  document.body.insertAdjacentHTML('afterbegin', NAV);
  document.body.insertAdjacentHTML('beforeend', FOOTER);
})();