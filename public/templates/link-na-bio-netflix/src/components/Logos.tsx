import React from 'react';

export const MetaAdsLogo: React.FC<{ className?: string; size?: number }> = ({ className = "w-6 h-6", size }) => (
  <svg
    viewBox="0 0 100 100"
    className={className}
    style={size ? { width: size, height: size } : undefined}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="metaGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#0081FB" />
        <stop offset="50%" stopColor="#0668E1" />
        <stop offset="100%" stopColor="#0064E0" />
      </linearGradient>
    </defs>
    <path
      d="M31.2 28C22.6 28 15 34.6 15 45.4C15 57.5 24.3 69 34.8 69C42.8 69 48.6 63.3 53.6 56.4C58.8 49.2 63.8 40.5 70.3 33.8C75.2 28.8 80.9 26 87.5 29.8C93.4 33.2 97 39.8 97 47.6C97 58.8 89.2 69 78.5 69C69.7 69 63.8 62.9 58.7 55.8C53.7 48.8 48.4 39.8 41.8 33.3C37.2 28.8 33.8 28 31.2 28Z"
      fill="url(#metaGrad)"
      stroke="url(#metaGrad)"
      strokeWidth="3"
    />
  </svg>
);

export const GoogleAdsLogo: React.FC<{ className?: string; size?: number }> = ({ className = "w-6 h-6", size }) => (
  <svg
    viewBox="0 0 100 100"
    className={className}
    style={size ? { width: size, height: size } : undefined}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M20 72L42 32C44 28.5 48.5 27.5 52 29.5L78 44.5C81.5 46.5 82.5 51 80.5 54.5L58.5 94.5C56.5 98 52 99 48.5 97L22.5 82C19 80 18 75.5 20 72Z"
      fill="#FBBC04"
    />
    <path
      d="M80.5 54.5L58.5 94.5C56.5 98 52 99 48.5 97L22.5 82C19 80 18 75.5 20 72L42 32C44 28.5 48.5 27.5 52 29.5L78 44.5C81.5 46.5 82.5 51 80.5 54.5Z"
      fill="#4285F4"
    />
    <circle cx="31" cy="77" r="13" fill="#34A853" />
    <path
      d="M31 64C38.1797 64 44 69.8203 44 77C44 84.1797 38.1797 90 31 90C23.8203 90 18 84.1797 18 77C18 69.8203 23.8203 64 31 64Z"
      fill="#34A853"
    />
  </svg>
);

export const WhatsAppLogo: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893 0-3.18-1.238-6.167-3.487-8.414"/>
  </svg>
);

export const MetaPartnerBadge: React.FC<{ className?: string }> = ({ className = "h-5" }) => (
  <div className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-blue-950/80 border border-blue-500/30 text-blue-300 text-xs font-semibold shadow-sm ${className}`}>
    <MetaAdsLogo className="w-3.5 h-3.5" />
    <span>Meta Business Partner</span>
  </div>
);

export const GooglePartnerBadge: React.FC<{ className?: string }> = ({ className = "h-5" }) => (
  <div className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/30 text-emerald-300 text-xs font-semibold shadow-sm ${className}`}>
    <GoogleAdsLogo className="w-3.5 h-3.5" />
    <span>Google Premier Partner</span>
  </div>
);
