/**
 * [NOME DO CURSO] Landing Page - Vanilla JavaScript Interactions
 */

document.addEventListener("DOMContentLoaded", () => {
  initRevealAnimations();
  initStickyScrollStory();
  initStepPhaseObserver();
  initFaqAccordion();
  initSmoothScroll();
});

/* ==========================================================================
   1. REVEAL ANIMATIONS (IntersectionObserver)
   ========================================================================== */
function initRevealAnimations() {
  const animElements = document.querySelectorAll("[data-anim]");
  if (!animElements.length) return;

  // Add anim-init class to html root
  document.documentElement.classList.add("anim-init");

  // Check which elements are already in the initial viewport
  animElements.forEach((el) => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      el.classList.add("kit-visible");
    }
  });

  // Observer for reveal on scroll
  const observerOptions = {
    root: null,
    rootMargin: "0px 0px -60px 0px",
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("kit-visible");
        obs.unobserve(entry.target);
      }
    });
  }, observerOptions);

  animElements.forEach((el) => {
    if (!el.classList.contains("kit-visible")) {
      observer.observe(el);
    }
  });
}

/* ==========================================================================
   2. STICKY SCROLL STORY SECTION
   ========================================================================== */
function initStickyScrollStory() {
  const storySection = document.querySelector(".pna-story-section");
  const phrase1 = document.getElementById("storyPhrase1");
  const phrase2 = document.getElementById("storyPhrase2");

  if (!storySection || !phrase1 || !phrase2) return;

  let ticking = false;

  function updateStory() {
    const rect = storySection.getBoundingClientRect();
    const sectionHeight = storySection.offsetHeight;
    const windowHeight = window.innerHeight;

    // Calculate scroll progress through section (0 to 1)
    const totalScrollable = sectionHeight - windowHeight;
    const currentScroll = -rect.top;
    const progress = Math.max(0, Math.min(1, currentScroll / totalScrollable));

    const isVisible = rect.top <= 0 && rect.bottom >= windowHeight;

    if (!isVisible && (rect.top > windowHeight || rect.bottom < 0)) {
      phrase1.classList.remove("pna-story-phrase--active", "pna-story-phrase--exit");
      phrase2.classList.remove("pna-story-phrase--active");
      ticking = false;
      return;
    }

    if (progress < 0.45) {
      // Phase 1 active
      phrase1.classList.add("pna-story-phrase--active");
      phrase1.classList.remove("pna-story-phrase--exit");
      phrase2.classList.remove("pna-story-phrase--active");
    } else {
      // Phase 2 active, Phase 1 exits
      phrase1.classList.remove("pna-story-phrase--active");
      phrase1.classList.add("pna-story-phrase--exit");
      phrase2.classList.add("pna-story-phrase--active");
    }

    ticking = false;
  }

  window.addEventListener("scroll", () => {
    if (!ticking) {
      requestAnimationFrame(updateStory);
      ticking = true;
    }
  });

  window.addEventListener("resize", () => {
    requestAnimationFrame(updateStory);
  });

  updateStory();
}

/* ==========================================================================
   3. HOW IT WORKS - SCROLL PHASE BACKGROUND CHANGES
   ========================================================================== */
function initStepPhaseObserver() {
  const stepsSection = document.querySelector(".pna-steps-scroll-section");
  const stepPanels = document.querySelectorAll(".pna-step-panel");

  if (!stepsSection || !stepPanels.length) return;

  const phaseObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const phase = entry.target.getAttribute("data-phase");
          if (phase) {
            stepsSection.classList.remove(
              "pna-steps--phase-1",
              "pna-steps--phase-2",
              "pna-steps--phase-3"
            );
            stepsSection.classList.add(`pna-steps--phase-${phase}`);
          }
        }
      });
    },
    {
      root: null,
      rootMargin: "-20% 0px -20% 0px",
      threshold: 0.5,
    }
  );

  stepPanels.forEach((panel) => phaseObserver.observe(panel));
}

/* ==========================================================================
   4. FAQ ACCORDION (Single Open Item)
   ========================================================================== */
function initFaqAccordion() {
  const faqItems = document.querySelectorAll(".kit-faq__item");
  if (!faqItems.length) return;

  faqItems.forEach((item) => {
    const questionBtn = item.querySelector(".kit-faq__question");
    const answer = item.querySelector(".kit-faq__answer");

    if (!questionBtn || !answer) return;

    questionBtn.addEventListener("click", () => {
      const isOpen = item.classList.contains("kit-faq__item--open");

      // Close all items
      faqItems.forEach((otherItem) => {
        otherItem.classList.remove("kit-faq__item--open");
        const otherBtn = otherItem.querySelector(".kit-faq__question");
        const otherAns = otherItem.querySelector(".kit-faq__answer");
        if (otherBtn) otherBtn.setAttribute("aria-expanded", "false");
        if (otherAns) otherAns.style.maxHeight = null;
      });

      // Toggle clicked item if it wasn't open
      if (!isOpen) {
        item.classList.add("kit-faq__item--open");
        questionBtn.setAttribute("aria-expanded", "true");
        answer.style.maxHeight = answer.scrollHeight + "px";
      }
    });
  });
}

/* ==========================================================================
   5. NATIVE SMOOTH SCROLLING FOR ANCHOR LINKS
   ========================================================================== */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const href = this.getAttribute("href");
      if (!href || href === "#") return;

      const targetEl = document.querySelector(href);
      if (targetEl) {
        e.preventDefault();
        targetEl.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });
}
