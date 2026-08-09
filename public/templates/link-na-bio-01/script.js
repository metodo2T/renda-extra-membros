/**
 * ==========================================================================
 * SCRIPT PRINCIPAL - LINK DA BIO EDITORIAL
 * Funcionalidades: Accordion FAQ, Animações de Scroll, Ano Automático
 * ==========================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  // Initialize Lucide icons if available
  if (typeof lucide !== 'undefined' && lucide.createIcons) {
    lucide.createIcons();
  }

  // 1. Atualização Automática do Ano no Rodapé
  initCurrentYear();

  // 2. Acordeão de Perguntas Frequentes (FAQ)
  initFaqAccordion();

  // 3. Animações de Revelação no Scroll (IntersectionObserver)
  initScrollReveal();

  // 4. Rolagem Suave para Indicador de Scroll
  initSmoothScroll();
});

/**
 * Define o ano atual no elemento com ID 'current-year'
 */
function initCurrentYear() {
  const yearElement = document.getElementById('current-year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
}

/**
 * Controla o funcionamento do acordeão no FAQ.
 * Garante que apenas uma pergunta fique aberta por vez e lida com acessibilidade ARIA.
 */
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach((item) => {
    const trigger = item.querySelector('.faq-trigger');

    if (!trigger) return;

    trigger.addEventListener('click', () => {
      const isOpen = item.classList.contains('active');

      // Fecha todos os outros itens para manter apenas um aberto por vez
      faqItems.forEach((otherItem) => {
        otherItem.classList.remove('active');
        const otherTrigger = otherItem.querySelector('.faq-trigger');
        if (otherTrigger) {
          otherTrigger.setAttribute('aria-expanded', 'false');
        }
      });

      // Alterna o estado do item clicado
      if (!isOpen) {
        item.classList.add('active');
        trigger.setAttribute('aria-expanded', 'true');
      }
    });

    // Suporte para navegação via teclado (Enter / Espaço)
    trigger.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        trigger.click();
      }
    });
  });
}

/**
 * Aplica animações sutis de fade-in + translateY ao rolar a página
 */
function initScrollReveal() {
  const revealElements = document.querySelectorAll('.reveal-on-scroll');

  if (!revealElements.length) return;

  // Se o usuário preferir movimento reduzido, revela todos imediatamente
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReducedMotion || !('IntersectionObserver' in window)) {
    revealElements.forEach((el) => el.classList.add('is-visible'));
    return;
  }

  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -50px 0px',
    threshold: 0.15,
  };

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        obs.unobserve(entry.target); // Anima apenas uma vez
      }
    });
  }, observerOptions);

  revealElements.forEach((el) => observer.observe(el));
}

/**
 * Configura rolagem suave ao clicar na seta indicadora do Hero
 */
function initSmoothScroll() {
  const scrollBtn = document.querySelector('.scroll-indicator');
  if (scrollBtn) {
    scrollBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = scrollBtn.getAttribute('href');
      if (targetId && targetId !== '#') {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  }
}
