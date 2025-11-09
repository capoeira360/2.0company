const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Page load animations
document.addEventListener('DOMContentLoaded', () => {
  if (!prefersReduced) document.body.classList.add('animate-in');
  setupScrollReveal();
  setupModals();
  setupNavHideShow();
  setupJumpLinks();
  observeSVGDraw();
  setupPageTransitions();
  markActiveNav();
});

function setupScrollReveal() {
  const els = Array.from(document.querySelectorAll('[data-reveal]'));
  if (prefersReduced) {
    els.forEach(el => el.classList.add('revealed'));
    return;
  }
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const idx = els.indexOf(el);
        const delay = (idx % 8) * 60; // gentle stagger across groups
        el.style.transitionDelay = `${delay}ms`;
        el.classList.add('revealed');
        io.unobserve(el);
      }
    });
  }, { rootMargin: '0px 0px -10% 0px', threshold: 0.08 });
  els.forEach(el => io.observe(el));
}

function setupModals() {
  const openBtns = document.querySelectorAll('[data-modal-target]');
  openBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const sel = btn.getAttribute('data-modal-target');
      const modal = sel ? document.querySelector(sel) : null;
      if (!modal) return;
      modal.classList.add('open');
      modal.setAttribute('aria-hidden', 'false');
      // focus trapping minimal: focus close button
      const closeBtn = modal.querySelector('.modal-close');
      closeBtn?.focus();
    });
  });

  const closeActions = (modal) => {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
  };

  document.addEventListener('click', (e) => {
    const target = e.target;
    if (!(target instanceof Element)) return;
    if (target.matches('[data-close]')) {
      const modal = target.closest('.modal');
      if (modal) closeActions(modal);
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      document.querySelectorAll('.modal.open').forEach(m => closeActions(m));
    }
  });
}

function setupNavHideShow() {
  const header = document.querySelector('.site-header');
  if (!header) return;
  let lastY = window.scrollY;
  let ticking = false;
  const onScroll = () => {
    const y = window.scrollY;
    if (!ticking) {
      window.requestAnimationFrame(() => {
        const goingDown = y > lastY && y > 80;
        header.classList.toggle('nav-hidden', goingDown);
        lastY = y;
        ticking = false;
      });
      ticking = true;
    }
  };
  window.addEventListener('scroll', onScroll, { passive: true });
}

function setupJumpLinks() {
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', (e) => {
      const href = a.getAttribute('href');
      if (!href) return;
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: prefersReduced ? 'auto' : 'smooth', block: 'start' });
      }
    });
  });
}

function observeSVGDraw() {
  const svgs = document.querySelectorAll('.svg-draw');
  if (prefersReduced) {
    svgs.forEach(svg => svg.classList.add('svg-in-view'));
    return;
  }
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('svg-in-view');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });
  svgs.forEach(svg => io.observe(svg));
}

function setupPageTransitions() {
  const isInternal = (href) => {
    try {
      const url = new URL(href, window.location.href);
      return url.origin === window.location.origin && url.pathname !== window.location.pathname;
    } catch (_) {
      return false;
    }
  };
  document.querySelectorAll('a').forEach(a => {
    const href = a.getAttribute('href');
    if (!href || href.startsWith('#') || href.startsWith('mailto:')) return;
    a.addEventListener('click', (e) => {
      if (!isInternal(href)) return; // external link: default behavior
      e.preventDefault();
      if (!prefersReduced) {
        document.body.classList.add('page-out');
        setTimeout(() => { window.location.href = href; }, 190);
      } else {
        window.location.href = href;
      }
    });
  });
}

function markActiveNav() {
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.site-nav .nav-link').forEach(link => {
    const href = link.getAttribute('href');
    const isActive = (href && href === path) || (path === 'index.html' && href === 'index.html');
    if (isActive) {
      link.setAttribute('aria-current', 'page');
      link.style.color = 'var(--accent)';
    }
  });
}