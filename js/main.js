// ============================================================
// LANGUAGE TOGGLE
// ============================================================
let currentLang = localStorage.getItem('lang') || 'es';

function applyLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('lang', lang);
    document.documentElement.lang = lang;

    document.querySelectorAll('[data-es][data-en]').forEach(function(el) {
        var text = el.getAttribute('data-' + lang);
        if (text !== null) {
            el.innerHTML = text;
        }
    });

    var current = document.getElementById('langCurrent');
    var other   = document.getElementById('langOther');
    if (current && other) {
        current.textContent = lang === 'es' ? 'ES' : 'EN';
        other.textContent   = lang === 'es' ? 'EN' : 'ES';
    }

    if (lang === 'en') {
        document.title = 'Naim Massoumian — Executive Coaching';
        var meta = document.querySelector('meta[name="description"]');
        if (meta) meta.setAttribute('content', 'Executive coaching for executives and leaders. 10+ years of experience as COO of an international company. Madrid.');
    } else {
        document.title = 'Naim Massoumian — Coaching Ejecutivo';
        var meta = document.querySelector('meta[name="description"]');
        if (meta) meta.setAttribute('content', 'Coaching ejecutivo para directivos y líderes. Más de 10 años de experiencia como COO de empresa internacional. Madrid.');
    }
}

document.getElementById('langToggle').addEventListener('click', function() {
    applyLanguage(currentLang === 'es' ? 'en' : 'es');
});

// ============================================================
// NAV: SCROLL EFFECT
// ============================================================
var nav = document.getElementById('nav');

window.addEventListener('scroll', function() {
    if (window.scrollY > 20) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
}, { passive: true });

// ============================================================
// NAV: MOBILE MENU
// ============================================================
var burger  = document.getElementById('navBurger');
var navMenu = document.getElementById('navMenu');

burger.addEventListener('click', function() {
    var isOpen = navMenu.classList.toggle('open');
    burger.classList.toggle('open', isOpen);
    burger.setAttribute('aria-label', isOpen ? 'Cerrar menú' : 'Abrir menú');
});

navMenu.querySelectorAll('a').forEach(function(link) {
    link.addEventListener('click', function() {
        navMenu.classList.remove('open');
        burger.classList.remove('open');
    });
});

// Close menu if clicking outside
document.addEventListener('click', function(e) {
    if (!nav.contains(e.target) && navMenu.classList.contains('open')) {
        navMenu.classList.remove('open');
        burger.classList.remove('open');
    }
});

// ============================================================
// INIT
// ============================================================
applyLanguage(currentLang);
