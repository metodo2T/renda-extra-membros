import React, { useState, useEffect } from "react";
import { Building2, Menu, X } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/5544999688125?text=Quero%20saber%20mais%20sobre%20os%20im%C3%B3veis";

// Official 3D Animated WhatsApp Icon
const WHATSAPP_3D_EMOJI = "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Speech%20Bubbles/Speech%20Balloon.png";

const OfficialWhatsAppIcon = ({ size = 28 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className="text-white drop-shadow-md"
    aria-hidden="true"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.99c-.002 5.45-4.437 9.887-9.885 9.887m0-18.068c-6.108 0-11.077 4.969-11.08 11.079 0 1.952.51 3.857 1.48 5.538l-1.572 5.742 5.875-1.541a11.033 11.033 0 005.292 1.34h.005c6.108 0 11.076-4.969 11.079-11.079a11.002 11.002 0 00-3.242-7.834 11.006 11.006 0 00-7.837-3.245" />
  </svg>
);

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`site-header ${scrolled ? "site-header--scrolled" : ""}`} id="header">
      <div className="site-header__inner">
        <a href="#" className="site-header__logo">
          <div className="site-header__logo-icon">
            <Building2 size={20} />
          </div>
          <div className="site-header__logo-text">
            <span className="site-header__logo-name">MARCUS VANCE</span>
            <span className="site-header__logo-sub">CONSULTORIA IMOBILIÁRIA</span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <div className="site-header__nav">
          <a href="#diferenciais" className="site-header__link">Diferenciais</a>
          <a href="#comparativo" className="site-header__link">Comparativo</a>
          <a href="#servicos" className="site-header__link">Serviços</a>
          <a href="#garantia" className="site-header__link">Garantia</a>
          <a href="#faq" className="site-header__link">FAQ</a>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="site-header__toggle"
          aria-label={mobileMenuOpen ? "Fechar Menu" : "Abrir Menu"}
          type="button"
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="site-header__mobile-menu">
          <a
            href="#diferenciais"
            className="site-header__mobile-link"
            onClick={() => setMobileMenuOpen(false)}
          >
            Diferenciais
          </a>
          <a
            href="#comparativo"
            className="site-header__mobile-link"
            onClick={() => setMobileMenuOpen(false)}
          >
            Comparativo
          </a>
          <a
            href="#servicos"
            className="site-header__mobile-link"
            onClick={() => setMobileMenuOpen(false)}
          >
            Serviços
          </a>
          <a
            href="#garantia"
            className="site-header__mobile-link"
            onClick={() => setMobileMenuOpen(false)}
          >
            Garantia
          </a>
          <a
            href="#faq"
            className="site-header__mobile-link"
            onClick={() => setMobileMenuOpen(false)}
          >
            FAQ
          </a>
        </div>
      )}
    </nav>
  );
}
