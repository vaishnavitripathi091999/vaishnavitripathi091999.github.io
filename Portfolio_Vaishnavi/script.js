/* Vaishnavi Tripathi — Portfolio interactions */
(function () {
  'use strict';

  /* Sticky nav background */
  var nav = document.querySelector('.nav');
  function onScroll() {
    if (!nav) return;
    nav.classList.toggle('is-stuck', window.scrollY > 24);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* Mobile menu */
  var toggle = document.querySelector('.nav__toggle');
  var links = document.querySelector('.nav__links');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      var open = links.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    links.addEventListener('click', function (e) {
      if (e.target.closest('a')) {
        links.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  /* Reveal on scroll */
  var revealables = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && revealables.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    revealables.forEach(function (el) { io.observe(el); });
  } else {
    revealables.forEach(function (el) { el.classList.add('in'); });
  }

  /* Active section highlighting (home page only) */
  var sections = document.querySelectorAll('section[id]');
  var navLinks = document.querySelectorAll('.nav__links a[href^="#"]');
  if (sections.length && navLinks.length && 'IntersectionObserver' in window) {
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        navLinks.forEach(function (a) {
          a.classList.toggle('active', a.getAttribute('href') === '#' + entry.target.id);
        });
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    sections.forEach(function (s) { spy.observe(s); });
  }

  /* Typed rotating line in the hero */
  var typeEl = document.querySelector('.type-out');
  if (typeEl) {
    var words = (typeEl.dataset.words || '').split('|').filter(Boolean);
    var reduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!words.length) {
      /* nothing to do */
    } else if (reduced) {
      typeEl.textContent = words[0];
    } else {
      var wi = 0, ci = 0, deleting = false;
      (function tick() {
        var word = words[wi];
        ci += deleting ? -1 : 1;
        typeEl.textContent = word.slice(0, ci);
        var delay = deleting ? 38 : 68;
        if (!deleting && ci === word.length) { deleting = true; delay = 1600; }
        else if (deleting && ci === 0) { deleting = false; wi = (wi + 1) % words.length; delay = 320; }
        setTimeout(tick, delay);
      })();
    }
  }

  /* Current year in footer */
  document.querySelectorAll('[data-year]').forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });
})();
