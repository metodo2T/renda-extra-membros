/* Main interactions */
(function () {
  "use strict";

  if (typeof gsap !== "undefined" && typeof ScrollTrigger !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
  }

  function updateBonusDeadlineDate() {
    var bonusDateEl = document.getElementById("bonusDeadlineDate");
    if (!bonusDateEl) return;

    var now = new Date();
    var brDate = new Intl.DateTimeFormat("pt-BR", {
      timeZone: "America/Sao_Paulo",
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    }).format(now);

    bonusDateEl.textContent = brDate;
  }

  updateBonusDeadlineDate();
  setInterval(updateBonusDeadlineDate, 60000);

  function runHeroEntrance() {
    if (typeof gsap === "undefined") return;
    var tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    tl.to(".name-reveal", { opacity: 1, y: 0, duration: 1.2 }, 0.1);
    tl.to(
      ".blur-in",
      { opacity: 1, filter: "blur(0px)", y: 0, duration: 1, stagger: 0.1 },
      0.3
    );
  }

  requestAnimationFrame(runHeroEntrance);

  var marqueeTrack = document.getElementById("marqueeTrack");
  if (typeof gsap !== "undefined" && marqueeTrack) {
    gsap.to(marqueeTrack, {
      xPercent: -50,
      duration: 40,
      ease: "none",
      repeat: -1,
    });
  }

  var painHighlight = document.getElementById("painHighlight");
  if (typeof gsap !== "undefined" && painHighlight) {
    var pieces = painHighlight.querySelectorAll(
      ".pain-highlight-main, .pain-highlight-accent"
    );

    pieces.forEach(function (piece) {
      var originalText = piece.textContent;
      var hasLeadingSpace = /^\s/.test(originalText);
      var hasTrailingSpace = /\s$/.test(originalText);
      var words = originalText.trim().split(/\s+/);
      piece.textContent = "";
      words.forEach(function (word, wordIdx) {
        var wordSpan = document.createElement("span");
        wordSpan.className = "typing-word";

        word.split("").forEach(function (char) {
          var span = document.createElement("span");
          span.className = "typing-char";
          span.textContent = char;
          wordSpan.appendChild(span);
        });

        piece.appendChild(wordSpan);
        if (wordIdx < words.length - 1) {
          piece.appendChild(document.createTextNode(" "));
        }
      });

      if (hasLeadingSpace) {
        piece.insertBefore(document.createTextNode(" "), piece.firstChild);
      }
      if (hasTrailingSpace) {
        piece.appendChild(document.createTextNode(" "));
      }
    });

    var typingChars = painHighlight.querySelectorAll(".typing-char");
    gsap.fromTo(
      typingChars,
      { opacity: 0.12, y: 8 },
      {
        opacity: 1,
        y: 0,
        ease: "none",
        stagger: 0.03,
        scrollTrigger: {
          trigger: painHighlight,
          start: "top 85%",
          end: "top 45%",
          scrub: true,
        },
      }
    );
  }

  // Animação dos cards "Com a biblioteca você vai" ao scroll
  if (typeof gsap !== "undefined" && typeof ScrollTrigger !== "undefined") {
    var bfxSection1 = document.querySelector(".benefits-fx-section");
    if (bfxSection1) {
      var bfxCards1 = bfxSection1.querySelectorAll(".bfx-card");
      gsap.fromTo(
        bfxCards1,
        { opacity: 0, y: 44 },
        {
          opacity: 1,
          y: 0,
          duration: 0.65,
          ease: "power3.out",
          stagger: 0.13,
          scrollTrigger: {
            trigger: bfxSection1,
            start: "top 72%",
            toggleActions: "play none none none",
          },
        }
      );
    }
  }

  // Animação dos cards "Veja tudo o que vai receber" ao scroll
  if (typeof gsap !== "undefined" && typeof ScrollTrigger !== "undefined") {
    var tightCards = gsap.utils.toArray(".tight-card");
    if (tightCards.length > 0) {
      gsap.fromTo(
        tightCards,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 0.75,
          ease: "power3.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: tightCards[0],
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    }
  }

  var vcTrack = document.getElementById("vcSliderTrack");
  var vcWrapper = document.getElementById("vcSliderWrapper");
  var vcCarouselSection = document.getElementById("videoCarouselSection");

  if (vcTrack && vcWrapper) {
    var vcSlides = vcTrack.querySelectorAll(".vc-slide");
    var slideCount = vcSlides.length;
    var currentSlide = 0;
    var isDragging = false;
    var startPosX = 0;
    var rawTranslate = 0;

    function updateSlides() {
      vcSlides.forEach(function (slide, idx) {
        var video = slide.querySelector("video");
        var diff = (idx - currentSlide) % slideCount;
        if (diff < -Math.floor(slideCount / 2)) diff += slideCount;
        if (diff > Math.floor(slideCount / 2)) diff -= slideCount;

        if (diff === 0) {
          slide.classList.add("is-active");
          slide.style.transform = "translateX(0) scale(1)";
          slide.style.opacity = 1;
          slide.style.filter = "blur(0)";
          slide.style.zIndex = 5;
          var playP = video.play();
          if (playP !== undefined) playP.catch(function () {});
        } else {
          slide.classList.remove("is-active");
          video.pause();
          video.currentTime = 0;
          var scale = 0.85;
          var xOffset = Math.sign(diff) * 100 + diff * 20;
          var blurVal = Math.abs(diff) * 2;
          slide.style.transform =
            "translateX(" + xOffset + "%) scale(" + scale + ")";
          slide.style.opacity = 0.5;
          slide.style.filter = "blur(" + Math.min(blurVal, 8) + "px)";
          slide.style.zIndex = 5 - Math.abs(diff);
        }
      });
    }

    function setPositionByIndex() {
      vcTrack.style.transition = "none";
      vcTrack.style.transform = "translateX(0%)";
      updateSlides();
    }

    function getPositionX(e) {
      return e.type.indexOf("mouse") > -1 ? e.pageX : e.touches[0].clientX;
    }

    function dragStart(e) {
      isDragging = true;
      startPosX = getPositionX(e);
      vcWrapper.style.cursor = "grabbing";
      vcTrack.style.transition = "none";
    }

    function dragMove(e) {
      if (!isDragging) return;
      var currentPosition = getPositionX(e);
      rawTranslate = currentPosition - startPosX;
    }

    function dragEnd() {
      if (!isDragging) return;
      isDragging = false;
      vcWrapper.style.cursor = "grab";

      if (rawTranslate < -50) {
        currentSlide = (currentSlide + 1) % slideCount;
      } else if (rawTranslate > 50) {
        currentSlide = (currentSlide - 1 + slideCount) % slideCount;
      }

      rawTranslate = 0;
      setPositionByIndex();
    }

    vcWrapper.addEventListener("mousedown", dragStart);
    vcWrapper.addEventListener("mousemove", dragMove);
    vcWrapper.addEventListener("mouseup", dragEnd);
    vcWrapper.addEventListener("mouseleave", function () {
      if (isDragging) dragEnd();
    });

    vcWrapper.addEventListener("touchstart", dragStart, { passive: true });
    vcWrapper.addEventListener("touchmove", dragMove, { passive: true });
    vcWrapper.addEventListener("touchend", dragEnd);

    vcSlides.forEach(function (slide) {
      slide.querySelector("video").addEventListener("ended", function () {
        currentSlide = (currentSlide + 1) % slideCount;
        setPositionByIndex();
      });
    });

    if (typeof ScrollTrigger !== "undefined" && vcCarouselSection) {
      var painSection = document.querySelector(".pain-section");
      if (painSection) {
        ScrollTrigger.create({
          trigger: painSection,
          start: "top 70%",
          onEnter: function () {
            vcCarouselSection.classList.add("theme-dark");
          },
          onLeaveBack: function () {
            vcCarouselSection.classList.remove("theme-dark");
          },
        });
      }
    }

    if ("IntersectionObserver" in window && vcCarouselSection) {
      var vcObserver = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            var activeVid = vcSlides[currentSlide].querySelector("video");
            if (entry.isIntersecting) {
              if (activeVid.paused) {
                var p = activeVid.play();
                if (p !== undefined) p.catch(function () {});
              }
            } else {
              activeVid.pause();
            }
          });
        },
        { threshold: 0.5 }
      );
      vcObserver.observe(vcCarouselSection);
    }

    setPositionByIndex();
  }

  // ── Bonus cards: sobreposição progressiva ao scroll ─────────────────────────
  // CSS sticky cuida da mecânica de sobreposição dos cards.
  // GSAP apenas escurece/escala o card1 quando card2 chega a sobrepor.
  if (typeof gsap !== "undefined" && typeof ScrollTrigger !== "undefined") {
    var bonusCards = gsap.utils.toArray(".bonus-card");
    if (bonusCards.length >= 2) {
      var card1 = bonusCards[0];
      var card2 = bonusCards[1];

      // Garante estado limpo — sem resquício de animações anteriores
      gsap.set(card1, { clearProps: "all" });
      gsap.set(card2, { clearProps: "all" });

      ScrollTrigger.create({
        trigger: card2,
        // Inicia mais tarde para o card 1 aparecer completo antes do escurecimento.
        start: "top 55%",
        end: "top 8%",
        scrub: 0.3,
        invalidateOnRefresh: true,
        animation: gsap.fromTo(
          card1,
          { scale: 1, filter: "brightness(1)", transformOrigin: "top center" },
          { scale: 0.98, filter: "brightness(0.82)", transformOrigin: "top center", ease: "none" }
        ),
      });
    }

    // Recalcula posições após imagens/fontes carregarem
    window.addEventListener("load", function () {
      ScrollTrigger.refresh();
    });
  }

  var reveals = document.querySelectorAll(".reveal, .reveal-left");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            io.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "-60px 0px", threshold: 0.1 }
    );
    reveals.forEach(function (el) {
      io.observe(el);
    });
  } else {
    reveals.forEach(function (el) {
      el.classList.add("in-view");
    });
  }
})();

// ═══════════════════════════════════════════
// Three.js — Lazy Loader + Banner Highlight + Checklist
// Carrega Three.js apenas quando as seções relevantes se aproximam do viewport.
// ═══════════════════════════════════════════
(function () {
  var threeLoaded = false;
  var threeLoading = false;

  function runThreeInits() {
    initBHThree();
    if (typeof window.__initChecklist3D === "function") {
      window.__initChecklist3D();
    }
  }

  function loadThreeJS() {
    if (threeLoaded) { runThreeInits(); return; }
    if (threeLoading) return;
    threeLoading = true;
    var s = document.createElement("script");
    s.src = "https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js";
    s.onload = function () { threeLoaded = true; runThreeInits(); };
    document.head.appendChild(s);
  }

  // Observa os elementos que dependem de Three.js
  var targets = [];
  var bhCanvas = document.getElementById("bh-three-canvas");
  var clContainer = document.getElementById("checklist3d");
  if (bhCanvas) targets.push(bhCanvas);
  if (clContainer) targets.push(clContainer);

  if (!targets.length) return;

  if ("IntersectionObserver" in window) {
    var obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          loadThreeJS();
          obs.disconnect();
        }
      });
    }, { rootMargin: "300px 0px" });
    targets.forEach(function (t) { obs.observe(t); });
  } else {
    // Fallback: carrega imediatamente se IntersectionObserver não disponível
    loadThreeJS();
  }
})();

function initBHThree() {
  var canvas = document.getElementById("bh-three-canvas");
  if (!canvas || typeof THREE === "undefined") return;
  if (canvas.dataset.threeInit) return; // evita dupla inicialização
  canvas.dataset.threeInit = "1";

  var SIZE = 240;
  var scene = new THREE.Scene();
  var camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
  camera.position.z = 5;

  var renderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true, antialias: true });
  renderer.setSize(SIZE, SIZE);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  // Iluminação
  var ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
  scene.add(ambientLight);
  var dirLight = new THREE.DirectionalLight(0x00f0ff, 1.5);
  dirLight.position.set(2, 3, 4);
  scene.add(dirLight);
  var backLight = new THREE.DirectionalLight(0x00a8b5, 1);
  backLight.position.set(-2, -3, -4);
  scene.add(backLight);

  var group = new THREE.Group();
  scene.add(group);

  // Moeda base
  var coinGeo = new THREE.CylinderGeometry(1.4, 1.4, 0.15, 64);
  coinGeo.rotateX(Math.PI / 2);

  // Textura do símbolo $
  var tCanvas = document.createElement("canvas");
  tCanvas.width = 256;
  tCanvas.height = 256;
  var ctx = tCanvas.getContext("2d");
  ctx.fillStyle = "#00d8ea";
  ctx.fillRect(0, 0, 256, 256);
  ctx.fillStyle = "#ffffff";
  ctx.font = "bold 160px serif";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.shadowColor = "#ffffff";
  ctx.shadowBlur = 15;
  ctx.fillText("$", 128, 140);

  var coinTex = new THREE.CanvasTexture(tCanvas);
  coinTex.center.set(0.5, 0.5);
  coinTex.rotation = Math.PI / 2;
  coinTex.needsUpdate = true;

  var faceMat = new THREE.MeshPhysicalMaterial({
    map: coinTex,
    metalness: 0.8,
    roughness: 0.2,
    clearcoat: 1.0,
    clearcoatRoughness: 0.1,
  });
  var sideMat = new THREE.MeshPhysicalMaterial({
    color: 0x00d8ea,
    metalness: 0.9,
    roughness: 0.2,
  });

  var coin = new THREE.Mesh(coinGeo, [sideMat, faceMat, faceMat]);
  group.add(coin);

  var ringGeo = new THREE.TorusGeometry(1.8, 0.02, 16, 100);
  var ringMat = new THREE.MeshBasicMaterial({ color: 0x00f0ff, transparent: true, opacity: 0.8 });
  var ring1 = new THREE.Mesh(ringGeo, ringMat);
  var ring2 = new THREE.Mesh(ringGeo, ringMat);
  ring1.rotation.x = Math.PI / 2;
  ring2.rotation.y = Math.PI / 2;
  group.add(ring1);
  group.add(ring2);

  var ptGeo = new THREE.BufferGeometry();
  var ptCount = 90;
  var ptPos = new Float32Array(ptCount * 3);
  for (var i = 0; i < ptCount * 3; i++) {
    ptPos[i] = (Math.random() - 0.5) * 5;
  }
  ptGeo.setAttribute("position", new THREE.BufferAttribute(ptPos, 3));
  var ptMat = new THREE.PointsMaterial({ color: 0x00f0ff, size: 0.05, transparent: true, opacity: 0.6 });
  var pts = new THREE.Points(ptGeo, ptMat);
  scene.add(pts);

  var clock = new THREE.Clock();

  function bhAnimate() {
    requestAnimationFrame(bhAnimate);
    var t = clock.getElapsedTime();
    group.rotation.y = t * 1.2;
    group.rotation.x = Math.sin(t * 1.5) * 0.15;
    group.position.y = Math.sin(t * 2) * 0.15;
    ring1.rotation.z += 0.01;
    ring2.rotation.z -= 0.01;
    pts.rotation.y = -t * 0.5;
    renderer.render(scene, camera);
  }

  bhAnimate();
}
