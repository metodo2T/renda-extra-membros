import React from 'react';
import { BehanceIcon, WhatsAppIcon, YouTubeIcon } from './CustomIcons';
import { ProfileData } from '../types';

interface ProfileHeaderProps {
  profile: ProfileData;
  onSocialClick: (platform: string, url: string) => void;
}

const COVER_PORTFOLIO_IMAGES = [
  {
    url: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=600',
    title: 'Social Media Strategy',
  },
  {
    url: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=600',
    title: 'Branding & Identity',
  },
  {
    url: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=600',
    title: 'Content Creation',
  },
  {
    url: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=600',
    title: 'Feed Aesthetics',
  },
  {
    url: 'https://images.unsplash.com/photo-1542744094-3a31b272c490?auto=format&fit=crop&q=80&w=600',
    title: 'Digital Marketing',
  },
  {
    url: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&q=80&w=600',
    title: 'Visual Assets',
  },
];

export const ProfileHeader: React.FC<ProfileHeaderProps> = ({ profile, onSocialClick }) => {
  const marqueeImages = [...COVER_PORTFOLIO_IMAGES, ...COVER_PORTFOLIO_IMAGES];

  return (
    <div className="flex flex-col items-center text-center pb-4 relative w-full">
      {/* Full-Width Cover Banner spanning across the entire screen width */}
      <div className="w-[100vw] max-w-[100vw] relative left-1/2 -translate-x-1/2 h-52 sm:h-64 md:h-72 overflow-hidden bg-purple-950 border-b border-purple-200">
        {/* Infinite Marquee Track of Works */}
        <div className="animate-marquee h-full items-center gap-3 py-2 opacity-90">
          {marqueeImages.map((img, idx) => (
            <div
              key={idx}
              className="h-full w-36 sm:w-52 md:w-60 rounded-xl overflow-hidden shrink-0 border border-purple-400/30 relative group"
            >
              <img
                src={img.url}
                alt={img.title}
                className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-950/90 via-transparent to-transparent flex items-end p-2.5">
                <span className="text-xs text-purple-100 font-semibold truncate">{img.title}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Profile Photo positioned lower down, overlapping the bottom of the cover banner */}
      <div className="relative group z-10 -mt-20 sm:-mt-24 md:-mt-28 mb-4">
        <div className="absolute -inset-1.5 bg-gradient-to-tr from-purple-600 via-fuchsia-500 to-purple-800 rounded-full blur opacity-80 group-hover:opacity-100 transition duration-500" />
        
        <div className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-full overflow-hidden border-4 border-white shadow-2xl bg-purple-900">
          <img
            src={profile.avatarUrl}
            alt={`${profile.namePrefix} ${profile.nameBold}`}
            className="w-full h-full object-cover object-center transform group-hover:scale-105 transition duration-500"
            referrerPolicy="no-referrer"
          />
          {/* Subtle vignette overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-purple-950/30 via-transparent to-transparent" />
        </div>
      </div>

      {/* Name and Title */}
      <h1 className="text-2xl sm:text-3xl tracking-wider mb-1 text-purple-950">
        <span className="font-extralight tracking-widest text-purple-900/90">{profile.namePrefix}</span>{' '}
        <span className="font-black tracking-tight text-purple-950">{profile.nameBold}</span>
      </h1>

      <p className="text-purple-800/80 text-sm sm:text-base font-semibold tracking-wide mb-2">
        {profile.role}
      </p>
    </div>
  );
};

