/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from "react";
import { Header } from "./components/Header";
import {
  KeyRound,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/5544999688125?text=Quero%20saber%20mais%20sobre%20os%20im%C3%B3veis";

const WhatsAppIcon = ({ size = 20, className = "" }: { size?: number; className?: string }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.99c-.002 5.45-4.437 9.887-9.885 9.887m0-18.068c-6.108 0-11.077 4.969-11.08 11.079 0 1.952.51 3.857 1.48 5.538l-1.572 5.742 5.875-1.541a11.033 11.033 0 005.292 1.34h.005c6.108 0 11.076-4.969 11.079-11.079a11.002 11.002 0 00-3.242-7.834 11.006 11.006 0 00-7.837-3.245" />
  </svg>
);

const HERO_MANSION_IMAGES = [
  {
    url: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1920&q=80",
    title: "Mansão Contemporânea de Alto Padrão",
  },
  {
    url: "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1920&q=80",
    title: "Villa Neoclássica Exclusiva",
  },
  {
    url: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1920&q=80",
    title: "Residência Arquitetônica em Condomínio",
  },
  {
    url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1920&q=80",
    title: "Mansão Iluminada com Vista Panorâmica",
  },
  {
    url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=80",
    title: "Design Minimalista & Conceito Aberto",
  },
  {
    url: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1920&q=80",
    title: "Propriedade Exclusiva com Piscina Infinita",
  },
];

export default function App() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-play interval for background carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_MANSION_IMAGES.length);
    }, 4500);

    return () => clearInterval(timer);
  }, []);

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % HERO_MANSION_IMAGES.length);
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + HERO_MANSION_IMAGES.length) % HERO_MANSION_IMAGES.length);
  };

  // Ready class on HTML root
  useEffect(() => {
    document.documentElement.classList.add("is-ready");
  }, []);

  // IntersectionObserver for Scroll Reveal
  useEffect(() => {
    const revealElements = document.querySelectorAll(
      ".reveal-media, .reveal-side, .reveal-up, .reveal-mark, .reveal-write"
    );

    if (!("IntersectionObserver" in window)) {
      revealElements.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.22,
        rootMargin: "0px 0px -8% 0px",
      }
    );

    revealElements.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, []);

  // Word Reveal renderer helper
  const renderWordSpans = (nodes: Array<{ text: string; isEm?: boolean }>, startIdx = 0) => {
    let currentIdx = startIdx;
    return nodes.map((node, nIdx) => {
      const words = node.text.split(" ");
      const wordSpans = words.map((w, wIdx) => {
        const idx = currentIdx++;
        return (
          <React.Fragment key={wIdx}>
            <span
              className="reveal-word"
              style={{ "--word-index": idx } as React.CSSProperties}
            >
              {w}
            </span>
            {wIdx < words.length - 1 ? " " : ""}
          </React.Fragment>
        );
      });

      if (node.isEm) {
        return <em key={nIdx}>{wordSpans} </em>;
      }
      return <React.Fragment key={nIdx}>{wordSpans} </React.Fragment>;
    });
  };

  const toggleFaq = (index: number) => {
    setOpenFaqIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="page-shell">
      {/* BRAND NAVBAR HEADER */}
      <Header />

      {/* SECTION 1: HERO */}
      <header className="hero">
        {/* Background Mansion Carousel - Clear & Visible */}
        <div className="hero__media">
          {HERO_MANSION_IMAGES.map((image, idx) => (
            <div
              key={idx}
              className={`hero__slide ${idx === currentSlide ? "is-active" : ""}`}
              aria-hidden={idx !== currentSlide}
            >
              <img
                src={image.url}
                alt={image.title}
                className="hero__slide-img"
                loading={idx === 0 ? "eager" : "lazy"}
              />
            </div>
          ))}
        </div>



        <div className="hero__grid">
          <h1 className="hero__title">
            <span className="hero__title-span">ENCONTRE O IMÓVEL DOS SEUS SONHOS</span>
            <br />
            <span className="hero__title-span hero__title-highlight">COM SEGURANÇA E EXCLUSIVIDADE</span>
          </h1>

          <p className="hero__sub">
            Atendimento personalizado, assessoria jurídica especializada e acesso às
            propriedades mais exclusivas da região para você morar ou investir com total
            tranquilidade, rentabilidade e sofisticação.
          </p>

          <div className="hero__cta">
            <a
              className="button button--primary button--whatsapp"
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppIcon size={22} />
              <span>Quero Saber Mais Sobre os Imóveis</span>
            </a>
          </div>
        </div>

        <div className="hero__line" aria-hidden="true" />
      </header>

      {/* SECTION 2: ABOUT / CHAOS BLOCK */}
      <section className="section-dark about-block">
        <div className="about-block__inner">
          <figure className="about-block__media reveal-media">
            <img
              src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80"
              alt="Imóvel residencial moderno de alto padrão com iluminação dourada e arquitetura luxuosa"
              loading="lazy"
            />
          </figure>

          <div className="about-block__content reveal-side">
            <h2 className="about-block__title">
              O DESAFIO DA
              <br />
              BUSCA IMOBILIÁRIA
            </h2>

            <div className="about-block__tags">
              <span className="about-block__pill">burocracia excessiva</span>
              <span className="about-block__pill">anúncios desatualizados</span>
              <span className="about-block__pill">processos inseguros</span>
            </div>

            <p className="about-block__copy">
              Encontrar a propriedade perfeita ou vender um imóvel pelo valor justo exige
              curadoria criteriosa, análise jurídica sólida e negociação estratégica para proteger seu patrimônio e economizar seu tempo valioso.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3: SERVICES / BENEFITS */}
      <section id="diferenciais" className="section-dark services-block">
        <div className="services-block__inner">
          <h2 className="services-block__title reveal-up">
            DIFERENCIAIS DA NOSSA CONSULTORIA
          </h2>

          <div className="services-block__grid">
            <div
              className="service-card reveal-up"
              style={{ transitionDelay: "0ms" }}
            >
              <div className="service-card__icon-holder">
                <KeyRound size={26} />
              </div>
              <h3 className="service-card__title">Curadoria Exclusiva</h3>
              <p className="service-card__copy">
                Acesso a um portfólio selecionado de imóveis residenciais e comerciais,
                incluindo opções off-market e lançamentos seletos de alto padrão.
              </p>
            </div>

            <div
              className="service-card reveal-up"
              style={{ transitionDelay: "180ms" }}
            >
              <div className="service-card__icon-holder">
                <ShieldCheck size={26} />
              </div>
              <h3 className="service-card__title">Segurança Jurídica</h3>
              <p className="service-card__copy">
                Análise completa de certidões, contratos e documentações imobiliárias para
                garantir uma transação 100% transparente e sem imprevistos.
              </p>
            </div>

            <div
              className="service-card reveal-up"
              style={{ transitionDelay: "360ms" }}
            >
              <div className="service-card__icon-holder">
                <TrendingUp size={26} />
              </div>
              <h3 className="service-card__title">Negociação Assertiva</h3>
              <p className="service-card__copy">
                Orientação estratégica focada na máxima valorização do seu imóvel ou nas melhores
                condições de compra, investimento e financiamento.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: COMPARISON */}
      <section id="comparativo" className="section-dark comparison-block">
        <div className="comparison-block__inner">
          <div className="comparison-block__header reveal-up">
            <h2 className="comparison-block__title">
              VEJA A DIFERENÇA NA PRÁTICA
            </h2>
          </div>

          <div className="comparison-block__grid">
            {/* Negative Card */}
            <div className="comparison-card comparison-card--negative reveal-up">
              <h3 className="comparison-card__title">Sem Consultoria Exclusiva</h3>
              <ul className="comparison-card__list">
                <li className="comparison-card__item reveal-mark">
                  <span className="comparison-card__marker">×</span>
                  Visitas a imóveis fora do perfil desejado
                </li>
                <li className="comparison-card__item reveal-mark">
                  <span className="comparison-card__marker">×</span>
                  Insegurança jurídica e riscos contratuais
                </li>
                <li className="comparison-card__item reveal-mark">
                  <span className="comparison-card__marker">×</span>
                  Demora e desgaste com burocracia desnecessária
                </li>
                <li className="comparison-card__item reveal-mark">
                  <span className="comparison-card__marker">×</span>
                  Falta de transparência e preços desalinhados com o mercado
                </li>
              </ul>
            </div>

            {/* Positive Card */}
            <div className="comparison-card comparison-card--positive reveal-up">
              <h3 className="comparison-card__title">Com Consultoria Exclusiva</h3>
              <ul className="comparison-card__list">
                <li className="comparison-card__item reveal-mark">
                  <span className="comparison-card__marker">✓</span>
                  Atendimento VIP e curadoria ajustada ao seu estilo de vida
                </li>
                <li className="comparison-card__item reveal-mark">
                  <span className="comparison-card__marker">✓</span>
                  Assessoria jurídica e documental do início ao fim
                </li>
                <li className="comparison-card__item reveal-mark">
                  <span className="comparison-card__marker">✓</span>
                  Processo ágil, discreto e sem dores de cabeça
                </li>
                <li className="comparison-card__item reveal-mark">
                  <span className="comparison-card__marker">✓</span>
                  Negociação assertiva com foco no seu interesse financeiro
                </li>
              </ul>
            </div>
          </div>

          <div className="comparison-block__cta reveal-up">
            <a
              className="button button--comparison button--whatsapp"
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppIcon size={22} />
              <span>Quero Saber Mais Sobre os Imóveis</span>
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 5: QUOTE METHOD BLOCK */}
      <section className="section-dark quote-block">
        <div className="quote-block__inner">
          <div className="quote-block__panel">
            <blockquote className="quote-block__text reveal-write">
              {renderWordSpans([
                { text: "Não se trata apenas de transacionar imóveis," },
                { text: "vai além: é realizar conquistas e proteger patrimônio.", isEm: true },
                {
                  text: "O foco é oferecer uma experiência imobiliária impecável, segura e altamente personalizada.",
                },
              ])}
            </blockquote>

            <p className="quote-block__meta reveal-write reveal-write--delay">
              {renderWordSpans(
                [
                  {
                    text: "Com uma metodologia humanizada, sigilosa e respaldada por profunda leitura de mercado, transformamos a compra ou venda do seu imóvel em uma jornada leve e rentável.",
                  },
                ],
                14
              )}
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 6: DELIVERABLES */}
      <section id="servicos" className="section-light deliverables-block">
        <div className="deliverables-block__inner">
          <header className="deliverables-block__header reveal-up">
            <h2 className="deliverables-block__title">
              SOLUÇÕES DE
              <br />
              ALTO PADRÃO
            </h2>
          </header>

          <div className="deliverables-block__grid">
            {/* Card 1 */}
            <article className="deliverable-card reveal-up">
              <div className="deliverable-card__media">
                <img
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
                  alt="Serviço 1 - Compra & Seleção VIP"
                  loading="lazy"
                />
              </div>
              <div className="deliverable-card__caption">
                <h3 className="deliverable-card__title">Compra & Seleção VIP</h3>
                <p className="deliverable-card__copy">
                  Curadoria filtrada com as melhores propriedades do mercado
                  perfeitamente alinhadas aos seus critérios de moradia.
                </p>
              </div>
            </article>

            {/* Card 2 (Offset on desktop) */}
            <article className="deliverable-card deliverable-card--offset reveal-up">
              <div className="deliverable-card__media">
                <img
                  src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80"
                  alt="Serviço 2 - Avaliação Mercadológica"
                  loading="lazy"
                />
              </div>
              <div className="deliverable-card__caption">
                <h3 className="deliverable-card__title">Avaliação Mercadológica</h3>
                <p className="deliverable-card__copy">
                  Estudo técnico de precificação precisa para maximizar o retorno financeiro
                  e a liquidez na venda da sua propriedade.
                </p>
              </div>
            </article>

            {/* Card 3 */}
            <article className="deliverable-card reveal-up">
              <div className="deliverable-card__media">
                <img
                  src="https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=800&q=80"
                  alt="Serviço 3 - Suporte Contratual & Crédito"
                  loading="lazy"
                />
              </div>
              <div className="deliverable-card__caption">
                <h3 className="deliverable-card__title">Suporte Contratual & Crédito</h3>
                <p className="deliverable-card__copy">
                  Gestão integral de simulação bancária, financiamento imobiliário,
                  escrituração e registros de cartório.
                </p>
              </div>
            </article>

            {/* Card 4 (Offset on desktop) */}
            <article className="deliverable-card deliverable-card--offset reveal-up">
              <div className="deliverable-card__media">
                <img
                  src="https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=800&q=80"
                  alt="Serviço 4 - Investimentos Imobiliários"
                  loading="lazy"
                />
              </div>
              <div className="deliverable-card__caption">
                <h3 className="deliverable-card__title">
                  Investimentos Imobiliários
                </h3>
                <p className="deliverable-card__copy">
                  Identificação de oportunidades com alta taxa de valorização,
                  rentabilidade em locação e ativos patrimoniais consolidados.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* SECTION 7: OFFER */}
      <section id="contato" className="section-dark offer-block">
        <div className="offer-block__inner">
          <div className="offer-card reveal-up">
            <span className="offer-card__eyebrow">Atendimento VIP</span>
            <h2 className="offer-card__title">
              CONSULTORIA IMOBILIÁRIA PERSONALIZADA
            </h2>

            <ul className="offer-card__list">
              <li className="offer-card__item">
                <span className="offer-card__dot" />
                Avaliação gratuita e análise de mercado da sua propriedade
              </li>
              <li className="offer-card__item">
                <span className="offer-card__dot" />
                Acesso exclusivo a imóveis off-market
              </li>
              <li className="offer-card__item">
                <span className="offer-card__dot" />
                Acompanhamento jurídico, contratual e bancário completo
              </li>
              <li className="offer-card__item">
                <span className="offer-card__dot" />
                Agendamento flexível de visitas privativas com suporte dedicado
              </li>
            </ul>

            <div className="offer-card__price-box">
              <div className="offer-card__price-label">Atendimento sob medida</div>
              <div className="offer-card__price-val">EXCLUSIVIDADE & SEGURANÇA</div>
            </div>

            <a
              className="button button--offer button--whatsapp"
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppIcon size={24} />
              <span>Quero Saber Mais Sobre os Imóveis</span>
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 8: GUARANTEE */}
      <section id="garantia" className="section-dark guarantee-block">
        <div className="guarantee-block__inner">
          <div className="guarantee-card reveal-up">
            <div className="guarantee-seal">
              <div className="guarantee-ring">
                <div className="guarantee-seven">
                  <span className="guarantee-seven__back">7</span>
                  <span className="guarantee-seven__front">7</span>
                </div>
                <div className="guarantee-glow" />
              </div>
            </div>

            <div className="guarantee-card__content">
              <div className="guarantee-card__eyebrow">Compromisso de Excelência</div>
              <h2 className="guarantee-card__title">7 Pilares de Segurança Imobiliária</h2>
              <p className="guarantee-card__copy">
                Nossa atuação é pautada por rigorosa auditoria de certidões, transparência nas negociações,
                sigilo absoluto de dados e apoio total até o momento da entrega das chaves.
              </p>
              <p className="guarantee-card__note">
                Corretor credenciado ao CRECI com vasta experiência na intermediação de imóveis de alto padrão.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 9: FAQ */}
      <section id="faq" className="section-dark faq-block">
        <div className="faq-block__inner">
          <header className="faq-block__header reveal-up">
            <span className="faq-block__eyebrow">DÚVIDAS FREQUENTES</span>
            <h2 className="faq-block__title">PERGUNTAS FREQUENTES</h2>
          </header>

          <div className="faq-list">
            {[
              {
                q: "Como funciona o atendimento inicial da consultoria?",
                a: "Realizamos uma reunião presencial ou online para compreender detalhadamente suas preferências, exigências de localização, orçamento e objetivos da compra ou venda.",
              },
              {
                q: "Vocês auxiliam na aprovação de financiamento imobiliário?",
                a: "Sim. Oferecemos suporte completo no processo de simulação de crédito, negociação das melhores taxas bancárias e organização de documentação para uso do FGTS.",
              },
              {
                q: "Quais tipos de imóveis fazem parte do portfólio?",
                a: "Atendemos imóveis residenciais de alto padrão, casas em condomínios fechados, coberturas, terrenos exclusivos e ativos comerciais selecionados.",
              },
              {
                q: "Qual a vantagem de uma consultoria exclusiva frente às imobiliárias tradicionais?",
                a: "Com nossa consultoria, você tem um corretor especialista dedicado focado no seu interesse, garantindo agilidade, curadoria sem visitas inúteis e total sigilo.",
              },
              {
                q: "Como posso cadastrar meu imóvel para venda ou locação?",
                a: "Basta entrar em contato pelo nosso WhatsApp. Faremos uma avaliação precisa do imóvel e elaboraremos um plano de divulgação direcionado a compradores qualificados.",
              },
            ].map((item, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div key={idx} className="faq-item">
                  <button
                    className="faq-item__trigger"
                    aria-expanded={isOpen}
                    onClick={() => toggleFaq(idx)}
                  >
                    <span>{item.q}</span>
                    <div className="faq-icon">
                      <div className="faq-icon__bar-h" />
                      <div className="faq-icon__bar-v" />
                    </div>
                  </button>

                  <div
                    className={`faq-item__answer ${isOpen ? "" : "hidden"}`}
                  >
                    <p className="m-0">{item.a}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 10: MINIMAL FOOTER */}
      <footer className="footer-minimal">
        <p className="footer-minimal__text">
          MARCUS VANCE CONSULTORIA IMOBILIÁRIA © TODOS OS DIREITOS RESERVADOS. CRECI 00000-J
        </p>
      </footer>
    </div>
  );
}
