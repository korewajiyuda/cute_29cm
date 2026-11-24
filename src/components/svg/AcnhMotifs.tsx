import React from 'react';

interface IconProps {
  className?: string;
}

export const AcnhLeafIcon: React.FC<IconProps> = ({ className = 'w-5 h-5' }) => (
  <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true">
    <path
      d="M25.5 6.5C18.5 5.5 11.2 8.2 7.8 14.3C5.3 18.8 6.5 23.4 9.5 25.4C12.8 27.6 18.6 27.4 22.8 23.2C25.9 20.1 27.1 14.4 26.7 9.6L21.9 12.1L24.5 7.4C24.9 6.8 25.2 6.6 25.5 6.5Z"
      fill="#78D5B3"
      stroke="#4A3F35"
      strokeWidth="2.1"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M7.5 26.8C10.5 22.8 14.3 18.5 20.2 14.2"
      stroke="#4A3F35"
      strokeWidth="2.1"
      strokeLinecap="round"
    />
    <path
      d="M12.2 18.3C11.4 16.4 11.6 14.5 12.2 13.1"
      stroke="#FFFDF9"
      strokeWidth="1.6"
      strokeLinecap="round"
      opacity="0.85"
    />
  </svg>
);

export const HangerBadgeSvg: React.FC<IconProps> = ({ className = 'w-4 h-4' }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
    <path
      d="M12 6.2C12 4.9 13.1 4 14.3 4.3C15.2 4.5 15.7 5.5 15.2 6.4C14.7 7.2 13.3 7.8 12 8.5V9.5"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 9.5L4.5 14.8C3.6 15.4 4.05 16.8 5.15 16.8H18.85C19.95 16.8 20.4 15.4 19.5 14.8L12 9.5Z"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const SparkleStarSvg: React.FC<IconProps & { fill?: string }> = ({
  className = 'w-5 h-5',
  fill = '#F6D76B',
}) => (
  <svg viewBox="0 0 28 28" fill="none" className={className} aria-hidden="true">
    <path
      d="M14 2.5C15.2 9.1 18.9 12.8 25.5 14C18.9 15.2 15.2 18.9 14 25.5C12.8 18.9 9.1 15.2 2.5 14C9.1 12.8 12.8 9.1 14 2.5Z"
      fill={fill}
      stroke="#4A3F35"
      strokeWidth="1.8"
      strokeLinejoin="round"
    />
  </svg>
);

export const MiniAvatarBadgeSvg: React.FC<IconProps> = ({ className = 'w-7 h-7' }) => (
  <svg viewBox="0 0 36 36" fill="none" className={className} aria-hidden="true">
    {/* Chibi hair back */}
    <path
      d="M8.5 15.5C8.5 9.2 12.6 5.5 18 5.5C23.4 5.5 27.5 9.2 27.5 15.5V21.5C27.5 23.2 26 24.2 24.4 24.2H11.6C10 24.2 8.5 23.2 8.5 21.5V15.5Z"
      fill="#5A3E31"
      stroke="#4A3F35"
      strokeWidth="1.8"
    />
    {/* Tiny cardigan body */}
    <path
      d="M11.5 24.5C11.5 23.2 14.2 22.3 18 22.3C21.8 22.3 24.5 23.2 24.5 24.5L26 30.2C26.2 31 25.6 31.8 24.7 31.8H11.3C10.4 31.8 9.8 31 10 30.2L11.5 24.5Z"
      fill="#F6D76B"
      stroke="#4A3F35"
      strokeWidth="1.8"
      strokeLinejoin="round"
    />
    {/* Chibi face */}
    <ellipse
      cx="18"
      cy="16.5"
      rx="7.5"
      ry="6.8"
      fill="#F8D7BD"
      stroke="#4A3F35"
      strokeWidth="1.8"
    />
    {/* Bangs */}
    <path
      d="M10.4 15.2C10.9 10.6 13.8 8.3 18 8.3C22.2 8.3 25.1 10.6 25.6 15.2C23.6 14.1 21.8 13.6 20.1 14.4C18.8 12.8 16.8 12.8 15.4 14.4C13.7 13.6 11.9 14.2 10.4 15.2Z"
      fill="#5A3E31"
      stroke="#4A3F35"
      strokeWidth="1.6"
      strokeLinejoin="round"
    />
    {/* Eyes & blush */}
    <circle cx="15" cy="17.2" r="1.25" fill="#4A3F35" />
    <circle cx="21" cy="17.2" r="1.25" fill="#4A3F35" />
    <ellipse cx="13.2" cy="19.1" rx="1.6" ry="0.9" fill="#F4A69E" opacity="0.85" />
    <ellipse cx="22.8" cy="19.1" rx="1.6" ry="0.9" fill="#F4A69E" opacity="0.85" />
    <path
      d="M16.7 19.3C17.4 20.1 18.6 20.1 19.3 19.3"
      stroke="#4A3F35"
      strokeWidth="1.4"
      strokeLinecap="round"
    />
  </svg>
);

export const CategoryTopIcon: React.FC<IconProps> = ({ className = 'w-4 h-4' }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
    <path
      d="M8.5 5.2L5 7.4L3.5 11.8L6.8 12.8V18.8C6.8 19.5 7.3 20 8 20H16C16.7 20 17.2 19.5 17.2 18.8V12.8L20.5 11.8L19 7.4L15.5 5.2C14.4 6.5 13.3 7.1 12 7.1C10.7 7.1 9.6 6.5 8.5 5.2Z"
      fill="currentColor"
      fillOpacity="0.18"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const CategoryBottomIcon: React.FC<IconProps> = ({ className = 'w-4 h-4' }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
    <path
      d="M7.5 5.5H16.5L19.2 18.2C19.4 19 18.8 19.7 18 19.7H6C5.2 19.7 4.6 19 4.8 18.2L7.5 5.5Z"
      fill="currentColor"
      fillOpacity="0.18"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M7.2 8.4H16.8" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    <path d="M10.4 8.6L9.6 19.4M13.6 8.6L14.4 19.4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
  </svg>
);

export const CategoryFootwearIcon: React.FC<IconProps> = ({ className = 'w-4 h-4' }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
    <path
      d="M8.2 5.2H13.4V12.2C13.4 13.4 14.3 14.3 15.5 14.5L18.2 15C19.5 15.3 20.2 16.4 20.2 17.6C20.2 18.8 19.2 19.6 18 19.6H7.4C6.3 19.6 5.5 18.8 5.5 17.7V13.8C5.5 12.4 6.2 11.4 7.2 10.6L8.2 5.2Z"
      fill="currentColor"
      fillOpacity="0.18"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M7.8 8.3H13.4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
  </svg>
);

export const CategoryAccessoryIcon: React.FC<IconProps> = ({ className = 'w-4 h-4' }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
    <path
      d="M5 12.2C5 9.2 8.1 7 12 7C15.9 7 19 9.2 19 12.2C19 14.3 16.5 15.6 12 15.6C7.5 15.6 5 14.3 5 12.2Z"
      fill="currentColor"
      fillOpacity="0.18"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinejoin="round"
    />
    <path d="M12 7V5.2" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" />
    <circle cx="9.2" cy="18.3" r="1.4" fill="currentColor" />
    <circle cx="12" cy="18.3" r="1.4" fill="currentColor" />
    <circle cx="14.8" cy="18.3" r="1.4" fill="currentColor" />
  </svg>
);

export const FlatlayModeIcon: React.FC<IconProps> = ({ className = 'w-4 h-4' }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
    <rect x="3.5" y="3.5" width="7.5" height="8.5" rx="2.2" stroke="currentColor" strokeWidth="1.9" />
    <rect x="13" y="3.5" width="7.5" height="5.5" rx="2.2" stroke="currentColor" strokeWidth="1.9" />
    <rect x="13" y="11" width="7.5" height="9.5" rx="2.2" stroke="currentColor" strokeWidth="1.9" />
    <rect x="3.5" y="14" width="7.5" height="6.5" rx="2.2" stroke="currentColor" strokeWidth="1.9" />
  </svg>
);

export const AvatarModeIcon: React.FC<IconProps> = ({ className = 'w-4 h-4' }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
    <circle cx="12" cy="8.5" r="4.5" stroke="currentColor" strokeWidth="1.9" />
    <path
      d="M5.8 19.6C6.4 16.2 8.9 14.4 12 14.4C15.1 14.4 17.6 16.2 18.2 19.6C18.3 20.1 17.9 20.5 17.4 20.5H6.6C6.1 20.5 5.7 20.1 5.8 19.6Z"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinejoin="round"
    />
  </svg>
);
