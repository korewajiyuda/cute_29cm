import React from 'react';
import { ClothingId } from '../../types';

interface ClothingIconProps {
  id: ClothingId;
  className?: string;
}

const OUTLINE = '#4A3F35';

export const ClothingIconSvg: React.FC<ClothingIconProps> = ({
  id,
  className = 'w-16 h-16',
}) => {
  switch (id) {
    case 'nordic-cardigan':
      return (
        <svg viewBox="0 0 100 100" fill="none" className={className} aria-hidden="true">
          {/* Soft ground drop shadow */}
          <ellipse cx="50" cy="88" rx="28" ry="4.5" fill="#E3D7C0" opacity="0.65" />
          {/* Chubby 2.5D Cardigan Silhouette */}
          <path
            d="M35 19L16 30C12 32.5 11.2 37.5 13 42.5L18.5 55.5C19.8 58.3 23 59.3 25.8 58L29.5 56V79C29.5 82.8 32.5 85 36.5 85H63.5C67.5 85 70.5 82.8 70.5 79V56L74.2 58C77 59.3 80.2 58.3 81.5 55.5L87 42.5C88.8 37.5 88 32.5 84 30L65 19H35Z"
            fill="#E7D8BE"
            stroke={OUTLINE}
            strokeWidth="2.6"
            strokeLinejoin="round"
          />
          {/* Subtle inner 2.5D shading */}
          <path
            d="M30.5 54V78C30.5 81 33 83.5 36.5 83.5H63.5C67 83.5 69.5 81 69.5 78V54"
            fill="#DFCCA9"
            opacity="0.45"
          />
          {/* High ribbed zip collar */}
          <path
            d="M36 17.5C36 14.5 38.8 13 42 13H58C61.2 13 64 14.5 64 17.5V25.5C64 27.5 61 28.5 58 28.5H42C39 28.5 36 27.5 36 25.5V17.5Z"
            fill="#DAC7A5"
            stroke={OUTLINE}
            strokeWidth="2.4"
            strokeLinejoin="round"
          />
          <path d="M41 15V26.5M45.5 15V26.5M54.5 15V26.5M59 15V26.5" stroke="#B7A07C" strokeWidth="1.5" strokeLinecap="round" />
          {/* Nordic Jacquard Chest Band */}
          <path d="M29.8 35H70.2V53H29.8V35Z" fill="#6F5542" />
          {/* Top & Bottom zigzag jacquard trim */}
          <path
            d="M30 37.5L34 35L38 37.5L42 35L46 37.5L50 35L54 37.5L58 35L62 37.5L66 35L70 37.5"
            stroke="#FFFDF9"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M30 50.5L34 53L38 50.5L42 53L46 50.5L50 53L54 50.5L58 53L62 50.5L66 53L70 50.5"
            stroke="#FFFDF9"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Mini Deer & Snowflake Motifs on Band */}
          {/* Left cute stylized deer/snowflake */}
          <path d="M36 44H42M39 41V47M37 42L41 46M41 42L37 46" stroke="#F6D76B" strokeWidth="1.6" strokeLinecap="round" />
          {/* Right cute stylized deer/snowflake */}
          <path d="M58 44H64M61 41V47M59 42L63 46M63 42L59 46" stroke="#F6D76B" strokeWidth="1.6" strokeLinecap="round" />
          {/* Tiny diamonds between */}
          <polygon points="45,44 47,42 49,44 47,46" fill="#FFFDF9" />
          <polygon points="51,44 53,42 55,44 53,46" fill="#FFFDF9" />
          {/* Lower small reindeer-dot row */}
          <circle cx="36" cy="61" r="1.8" fill="#8C6B52" />
          <circle cx="43" cy="64" r="1.5" fill="#8C6B52" />
          <circle cx="57" cy="64" r="1.5" fill="#8C6B52" />
          <circle cx="64" cy="61" r="1.8" fill="#8C6B52" />
          {/* Sleeve Nordic bands */}
          <path d="M15.5 41.5L26 37.5L28 43.5L17.5 47.5Z" fill="#6F5542" />
          <path d="M84.5 41.5L74 37.5L72 43.5L82.5 47.5Z" fill="#6F5542" />
          <circle cx="21.5" cy="42.5" r="1.5" fill="#FFFDF9" />
          <circle cx="78.5" cy="42.5" r="1.5" fill="#FFFDF9" />
          {/* Ribbed hem & cuffs */}
          <path d="M30 77.5H70" stroke={OUTLINE} strokeWidth="2" />
          <path d="M36 78V84M42 78V84M58 78V84M64 78V84" stroke="#B7A07C" strokeWidth="1.6" strokeLinecap="round" />
          <path d="M17.5 51.5L26.5 48.2" stroke={OUTLINE} strokeWidth="2" strokeLinecap="round" />
          <path d="M82.5 51.5L73.5 48.2" stroke={OUTLINE} strokeWidth="2" strokeLinecap="round" />
          {/* Center Zipper & Cute Ring Pull */}
          <path d="M50 14V84.5" stroke={OUTLINE} strokeWidth="2.3" />
          <path d="M50 28V81" stroke="#FFFDF9" strokeWidth="1" strokeDasharray="2 3" opacity="0.7" />
          <circle cx="50" cy="31.5" r="3" fill="#F6D76B" stroke={OUTLINE} strokeWidth="1.8" />
        </svg>
      );

    case 'cream-cable-knit':
      return (
        <svg viewBox="0 0 100 100" fill="none" className={className} aria-hidden="true">
          <ellipse cx="50" cy="87" rx="27" ry="4.5" fill="#E3D7C0" opacity="0.65" />
          <path
            d="M36 20L17 31C13 33.5 12 38.5 13.8 43.5L19 56C20.3 58.6 23.4 59.5 26.2 58.2L30 56V78.5C30 82 33 84.5 37 84.5H63C67 84.5 70 82 70 78.5V56L73.8 58.2C76.6 59.5 79.7 58.6 81 56L86.2 43.5C88 38.5 87 33.5 83 31L64 20C60.5 25.5 55.8 27.8 50 27.8C44.2 27.8 39.5 25.5 36 20Z"
            fill="#F6EFE1"
            stroke={OUTLINE}
            strokeWidth="2.6"
            strokeLinejoin="round"
          />
          {/* Ribbed crew neck */}
          <path
            d="M36 20C39.5 26 44.2 28.5 50 28.5C55.8 28.5 60.5 26 64 20C61.2 17.6 56.2 16.5 50 16.5C43.8 16.5 38.8 17.6 36 20Z"
            fill="#EAE0CC"
            stroke={OUTLINE}
            strokeWidth="2.3"
            strokeLinejoin="round"
          />
          {/* Fisherman cable knit braids */}
          <path
            d="M40 34C37.5 38 42.5 42 40 46C37.5 50 42.5 54 40 58C37.5 62 42.5 66 40 70"
            stroke="#CBBBA0"
            strokeWidth="2.4"
            strokeLinecap="round"
          />
          <path
            d="M50 33C47 37.5 53 42.5 50 47C47 51.5 53 56.5 50 61C47 65.5 53 70 50 73"
            stroke="#BFA98A"
            strokeWidth="2.8"
            strokeLinecap="round"
          />
          <path
            d="M60 34C62.5 38 57.5 42 60 46C62.5 50 57.5 54 60 58C62.5 62 57.5 66 60 70"
            stroke="#CBBBA0"
            strokeWidth="2.4"
            strokeLinecap="round"
          />
          {/* Hem & cuffs */}
          <path d="M30.5 77H69.5" stroke={OUTLINE} strokeWidth="2" />
          <path d="M36 77.5V83.5M43 77.5V83.5M50 77.5V83.5M57 77.5V83.5M64 77.5V83.5" stroke="#CBBBA0" strokeWidth="1.6" strokeLinecap="round" />
          <path d="M18 51.5L27 48.2M82 51.5L73 48.2" stroke={OUTLINE} strokeWidth="2" strokeLinecap="round" />
        </svg>
      );

    case 'khaki-field-jacket':
      return (
        <svg viewBox="0 0 100 100" fill="none" className={className} aria-hidden="true">
          <ellipse cx="50" cy="88" rx="29" ry="4.5" fill="#E3D7C0" opacity="0.65" />
          <path
            d="M34 20L15 30C11.5 32.5 10.8 37.5 12.5 42.5L18 56C19.5 59 22.8 59.8 25.8 58.3L29 56.5V80C29 83.2 31.8 85.2 35.5 85.2H64.5C68.2 85.2 71 83.2 71 80V56.5L74.2 58.3C77.2 59.8 80.5 59 82 56L87.5 42.5C89.2 37.5 88.5 32.5 85 30L66 20H34Z"
            fill="#7E8865"
            stroke={OUTLINE}
            strokeWidth="2.6"
            strokeLinejoin="round"
          />
          {/* Corduroy brown collar */}
          <path
            d="M34 19.5L46 31.5L50 26L54 31.5L66 19.5C61.5 16.2 56 15.2 50 15.2C44 15.2 38.5 16.2 34 19.5Z"
            fill="#7C563C"
            stroke={OUTLINE}
            strokeWidth="2.3"
            strokeLinejoin="round"
          />
          {/* Placket & tortoise buttons */}
          <path d="M50 27V85" stroke={OUTLINE} strokeWidth="2.2" />
          <circle cx="46.2" cy="40" r="2.2" fill="#4A3F35" />
          <circle cx="46.2" cy="54" r="2.2" fill="#4A3F35" />
          <circle cx="46.2" cy="68" r="2.2" fill="#4A3F35" />
          {/* Two chunky utility flap pockets */}
          <rect x="33.5" y="56" width="12.5" height="14" rx="3" fill="#6D7756" stroke={OUTLINE} strokeWidth="2" />
          <path d="M33.5 60.5H46" stroke={OUTLINE} strokeWidth="2" />
          <rect x="54" y="56" width="12.5" height="14" rx="3" fill="#6D7756" stroke={OUTLINE} strokeWidth="2" />
          <path d="M54 60.5H66.5" stroke={OUTLINE} strokeWidth="2" />
          {/* Cuff tabs */}
          <path d="M17.5 52L26.2 48.5M82.5 52L73.8 48.5" stroke="#5E6648" strokeWidth="2.4" strokeLinecap="round" />
        </svg>
      );

    case 'navy-stripe-sweat':
      return (
        <svg viewBox="0 0 100 100" fill="none" className={className} aria-hidden="true">
          <ellipse cx="50" cy="87" rx="27" ry="4.5" fill="#E3D7C0" opacity="0.65" />
          <path
            d="M35 20L16 31C12.2 33.5 11.4 38.5 13.2 43.5L18.5 56C19.8 58.6 23 59.5 25.8 58.2L29.5 56V78.5C29.5 82 32.5 84.5 36.5 84.5H63.5C67.5 84.5 70.5 82 70.5 78.5V56L74.2 58.2C77 59.5 80.2 58.6 81.5 56L86.8 43.5C88.6 38.5 87.8 33.5 84 31L65 20H35Z"
            fill="#2E4060"
            stroke={OUTLINE}
            strokeWidth="2.6"
            strokeLinejoin="round"
          />
          {/* Ivory horizontal stripes */}
          <path d="M30 39H70M30 51H70M30 63H70M30 75H70" stroke="#F8F3E6" strokeWidth="4.6" />
          {/* Sleeve stripes */}
          <path d="M15.5 41L26.5 37M18 50L27.5 46.5" stroke="#F8F3E6" strokeWidth="3.6" strokeLinecap="round" />
          <path d="M84.5 41L73.5 37M82 50L72.5 46.5" stroke="#F8F3E6" strokeWidth="3.6" strokeLinecap="round" />
          {/* Re-stroke body outline cleanly */}
          <path
            d="M35 20L16 31C12.2 33.5 11.4 38.5 13.2 43.5L18.5 56C19.8 58.6 23 59.5 25.8 58.2L29.5 56V78.5C29.5 82 32.5 84.5 36.5 84.5H63.5C67.5 84.5 70.5 82 70.5 78.5V56L74.2 58.2C77 59.5 80.2 58.6 81.5 56L86.8 43.5C88.6 38.5 87.8 33.5 84 31L65 20H35Z"
            stroke={OUTLINE}
            strokeWidth="2.6"
            strokeLinejoin="round"
          />
          {/* Crisp white rugby polo collar */}
          <path
            d="M35 19L45.5 30.5L50 25L54.5 30.5L65 19C60.5 16.2 55.5 15.5 50 15.5C44.5 15.5 39.5 16.2 35 19Z"
            fill="#FFFDF9"
            stroke={OUTLINE}
            strokeWidth="2.3"
            strokeLinejoin="round"
          />
          <rect x="47.5" y="25" width="5" height="12" rx="2" fill="#FFFDF9" stroke={OUTLINE} strokeWidth="1.8" />
        </svg>
      );

    case 'butter-tweed-jacket':
      return (
        <svg viewBox="0 0 100 100" fill="none" className={className} aria-hidden="true">
          <ellipse cx="50" cy="85" rx="26" ry="4.5" fill="#E3D7C0" opacity="0.65" />
          <path
            d="M36 21L18 31C14.2 33.5 13.4 38.5 15 43.5L20 55C21.3 57.6 24.4 58.5 27.2 57.2L30.5 55V75.5C30.5 79 33.5 81.5 37.5 81.5H62.5C66.5 81.5 69.5 79 69.5 75.5V55L72.8 57.2C75.6 58.5 78.7 57.6 80 55L85 43.5C86.6 38.5 85.8 33.5 82 31L64 21C60.5 25.5 55.8 27.5 50 27.5C44.2 27.5 39.5 25.5 36 21Z"
            fill="#F4DC94"
            stroke={OUTLINE}
            strokeWidth="2.6"
            strokeLinejoin="round"
          />
          {/* Subtle tweed weave speckles */}
          <path
            d="M36 36H44M56 36H64M35 46H43M57 46H65M36 69H44M56 69H64"
            stroke="#DFC16D"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeDasharray="2 3"
          />
          {/* Braided ivory trim along neckline & center */}
          <path
            d="M36 22C39.8 27 44.5 29.2 50 29.2C55.5 29.2 60.2 27 64 22"
            stroke="#FFFDF9"
            strokeWidth="3.2"
            strokeLinecap="round"
          />
          <path d="M50 28V81" stroke="#FFFDF9" strokeWidth="3.2" />
          <path d="M50 28V81" stroke={OUTLINE} strokeWidth="2" />
          {/* Gold dome buttons */}
          <circle cx="45.5" cy="39" r="2.6" fill="#EBB844" stroke={OUTLINE} strokeWidth="1.5" />
          <circle cx="45.5" cy="52" r="2.6" fill="#EBB844" stroke={OUTLINE} strokeWidth="1.5" />
          <circle cx="45.5" cy="65" r="2.6" fill="#EBB844" stroke={OUTLINE} strokeWidth="1.5" />
          {/* Mini tweed front pockets */}
          <rect x="34.5" y="57" width="10.5" height="9.5" rx="2.5" fill="#EDD07D" stroke={OUTLINE} strokeWidth="1.8" />
          <rect x="55" y="57" width="10.5" height="9.5" rx="2.5" fill="#EDD07D" stroke={OUTLINE} strokeWidth="1.8" />
          <circle cx="39.8" cy="60.5" r="1.4" fill="#FFFDF9" />
          <circle cx="60.2" cy="60.5" r="1.4" fill="#FFFDF9" />
        </svg>
      );

    case 'indigo-denim-skirt':
      return (
        <svg viewBox="0 0 100 100" fill="none" className={className} aria-hidden="true">
          <ellipse cx="50" cy="84" rx="30" ry="4.5" fill="#E3D7C0" opacity="0.65" />
          <path
            d="M29 24H71L80.5 74.5C81.2 78.2 78.4 81.5 74.5 81.5H25.5C21.6 81.5 18.8 78.2 19.5 74.5L29 24Z"
            fill="#3B5682"
            stroke={OUTLINE}
            strokeWidth="2.7"
            strokeLinejoin="round"
          />
          {/* Waistband */}
          <path d="M27.5 34H72.5" stroke={OUTLINE} strokeWidth="2.3" />
          {/* Ochre contrast denim stitches */}
          <path d="M29 31.5H71" stroke="#E0A95B" strokeWidth="1.5" strokeDasharray="3 2.5" />
          <path d="M21 76.5H79" stroke="#E0A95B" strokeWidth="1.5" strokeDasharray="3 2.5" />
          {/* Center fly & brass button */}
          <path d="M50 34V51C50 53.5 47.5 55 45.5 55" stroke="#E0A95B" strokeWidth="1.7" strokeLinecap="round" />
          <path d="M50 34V80.5" stroke="#2D4367" strokeWidth="1.8" />
          <circle cx="50" cy="29" r="2.7" fill="#EBB85A" stroke={OUTLINE} strokeWidth="1.5" />
          {/* Curved front denim pockets */}
          <path d="M27.5 46C34 45.5 38 41 39 34.5" stroke="#E0A95B" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M72.5 46C66 45.5 62 41 61 34.5" stroke="#E0A95B" strokeWidth="1.8" strokeLinecap="round" />
          {/* Belt loops */}
          <rect x="35" y="24.5" width="3.5" height="9" rx="1" fill="#31486E" stroke={OUTLINE} strokeWidth="1.3" />
          <rect x="61.5" y="24.5" width="3.5" height="9" rx="1" fill="#31486E" stroke={OUTLINE} strokeWidth="1.3" />
        </svg>
      );

    case 'black-pleats-skirt':
      return (
        <svg viewBox="0 0 100 100" fill="none" className={className} aria-hidden="true">
          <ellipse cx="50" cy="84" rx="31" ry="4.5" fill="#E3D7C0" opacity="0.65" />
          <path
            d="M29 24H71L82 75C82.8 78.5 80 81.5 76.5 81.5H23.5C20 81.5 17.2 78.5 18 75L29 24Z"
            fill="#343131"
            stroke={OUTLINE}
            strokeWidth="2.7"
            strokeLinejoin="round"
          />
          <path d="M27.5 34H72.5" stroke="#534D4D" strokeWidth="2.2" />
          {/* Crisp knife pleat lines */}
          <path
            d="M36 34.5L30.5 80.5M45 34.5L43 80.5M55 34.5L57 80.5M64 34.5L69.5 80.5"
            stroke="#5D5757"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M39 36L35 79M61 36L65 79"
            stroke="#222020"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
          {/* Subtle buckle detail on waistband */}
          <rect x="60" y="27" width="6.5" height="4.5" rx="1.2" fill="#D5C8B8" stroke={OUTLINE} strokeWidth="1.2" />
        </svg>
      );

    case 'cream-corduroy-pants':
      return (
        <svg viewBox="0 0 100 100" fill="none" className={className} aria-hidden="true">
          <ellipse cx="50" cy="89" rx="28" ry="4" fill="#E3D7C0" opacity="0.65" />
          <path
            d="M30 16H70L76 82C76.3 84.8 74.1 87 71.2 87H56.5C54 87 52 85.2 51.8 82.8L50 53L48.2 82.8C48 85.2 46 87 43.5 87H28.8C25.9 87 23.7 84.8 24 82L30 16Z"
            fill="#ECE2CE"
            stroke={OUTLINE}
            strokeWidth="2.6"
            strokeLinejoin="round"
          />
          {/* Waistband & wooden button */}
          <path d="M29 25H71" stroke={OUTLINE} strokeWidth="2.2" />
          <circle cx="50" cy="20.5" r="2.4" fill="#9E7652" stroke={OUTLINE} strokeWidth="1.4" />
          {/* Fine corduroy vertical ridges */}
          <path
            d="M34 29L30 82M40 29L37.5 82M45.5 29L44.5 52M54.5 29L55.5 52M60 29L62.5 82M66 29L70 82"
            stroke="#D6C7AA"
            strokeWidth="1.7"
            strokeLinecap="round"
          />
          {/* Cute trouser tuck seams */}
          <path d="M50 25V44" stroke={OUTLINE} strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      );

    case 'charcoal-midi-skirt':
      return (
        <svg viewBox="0 0 100 100" fill="none" className={className} aria-hidden="true">
          <ellipse cx="50" cy="89" rx="26" ry="4" fill="#E3D7C0" opacity="0.65" />
          <path
            d="M31 16H69L75 82C75.3 85 73 87.5 70 87.5H53.5V67C53.5 64.5 50 63.5 50 66.5V87.5H30C27 87.5 24.7 85 25 82L31 16Z"
            fill="#5C5B61"
            stroke={OUTLINE}
            strokeWidth="2.6"
            strokeLinejoin="round"
          />
          {/* Clean tailored waistband */}
          <path d="M30 25.5H70" stroke={OUTLINE} strokeWidth="2.2" />
          <path d="M39 26V38M61 26V38" stroke="#45444A" strokeWidth="1.8" strokeLinecap="round" />
          {/* Soft fabric highlight */}
          <path d="M36 36L32.5 80" stroke="#75747B" strokeWidth="2.2" strokeLinecap="round" opacity="0.55" />
        </svg>
      );

    case 'white-lace-socks':
      return (
        <svg viewBox="0 0 100 100" fill="none" className={className} aria-hidden="true">
          <ellipse cx="50" cy="86" rx="28" ry="4.5" fill="#E3D7C0" opacity="0.65" />
          {/* Back sock */}
          <g transform="translate(11, -3) rotate(5 50 50)">
            <path
              d="M36 22H56V62C56 66 59 68 63 70C67.5 72 70 75 69.5 79C69 83 65 85 59.5 85H41C36.5 85 33.5 81.5 34 77L36 22Z"
              fill="#F2ECE0"
              stroke={OUTLINE}
              strokeWidth="2.4"
              strokeLinejoin="round"
            />
            <path
              d="M34.5 23C36.5 19.5 39.5 19.5 41 23C42.5 19.5 45.5 19.5 47 23C48.5 19.5 51.5 19.5 53 23C54.5 19.5 56.5 19.5 57.5 23"
              fill="#FFFDF9"
              stroke={OUTLINE}
              strokeWidth="2.1"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          {/* Front sock */}
          <g transform="translate(-8, 2) rotate(-5 50 50)">
            <path
              d="M34 22H54V62C54 66 57 68 61 70C65.5 72 68 75 67.5 79C67 83 63 85 57.5 85H39C34.5 85 31.5 81.5 32 77L34 22Z"
              fill="#FFFDF9"
              stroke={OUTLINE}
              strokeWidth="2.5"
              strokeLinejoin="round"
            />
            {/* Scalloped lace frill top */}
            <path
              d="M32.5 23C34.5 19.2 37.5 19.2 39 23C40.5 19.2 43.5 19.2 45 23C46.5 19.2 49.5 19.2 51 23C52.5 19.2 54.5 19.2 55.5 23"
              fill="#FFFDF9"
              stroke={OUTLINE}
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Delicate eyelet dots */}
            <circle cx="38.5" cy="27.5" r="1.2" fill="#D5C7AE" />
            <circle cx="44" cy="27.5" r="1.2" fill="#D5C7AE" />
            <circle cx="49.5" cy="27.5" r="1.2" fill="#D5C7AE" />
            {/* Rib lines */}
            <path d="M40 33V67M48 33V65" stroke="#EAE1D0" strokeWidth="1.8" strokeLinecap="round" />
            {/* Soft heel accent */}
            <path d="M33.5 68C37.5 68 40 71 40 75" stroke="#E5DAC5" strokeWidth="2.2" strokeLinecap="round" />
          </g>
        </svg>
      );

    case 'ivory-ribbed-socks':
      return (
        <svg viewBox="0 0 100 100" fill="none" className={className} aria-hidden="true">
          <ellipse cx="50" cy="85" rx="28" ry="4.5" fill="#E3D7C0" opacity="0.65" />
          {/* Back sock */}
          <g transform="translate(10, -2) rotate(6 50 50)">
            <path
              d="M36 28H56V62C56 66 59 68 63 70C67 72 69.5 75 69 79C68.5 83 64.5 85 59 85H41C36.5 85 33.5 81.5 34 77L36 28Z"
              fill="#E5DBC7"
              stroke={OUTLINE}
              strokeWidth="2.4"
              strokeLinejoin="round"
            />
          </g>
          {/* Front sock */}
          <g transform="translate(-8, 2) rotate(-5 50 50)">
            <path
              d="M34 28H54V62C54 66 57 68 61 70C65 72 67.5 75 67 79C66.5 83 62.5 85 57 85H39C34.5 85 31.5 81.5 32 77L34 28Z"
              fill="#F3EBDC"
              stroke={OUTLINE}
              strokeWidth="2.5"
              strokeLinejoin="round"
            />
            {/* Thick ribbed fold cuff */}
            <rect x="32.5" y="25" width="23" height="10.5" rx="3.5" fill="#EBE0CC" stroke={OUTLINE} strokeWidth="2.2" />
            <path d="M38 27V33.5M44 27V33.5M50 27V33.5" stroke="#CBBBA0" strokeWidth="1.7" strokeLinecap="round" />
            <path d="M40 39V67M48 39V65" stroke="#DDD0B8" strokeWidth="2" strokeLinecap="round" />
          </g>
        </svg>
      );

    case 'camel-ugg-boots':
      return (
        <svg viewBox="0 0 100 100" fill="none" className={className} aria-hidden="true">
          <ellipse cx="50" cy="83" rx="34" ry="5" fill="#E3D7C0" opacity="0.68" />
          {/* Left Boot (slightly behind) */}
          <g transform="translate(-14, -3)">
            <path
              d="M34 38H58V58C64 60 70 64 70 71C70 76.5 65.5 79 59 79H35C30.5 79 28 75.5 28 71V50C28 45 31 41 34 38Z"
              fill="#B97D49"
              stroke={OUTLINE}
              strokeWidth="2.5"
              strokeLinejoin="round"
            />
            {/* Platform Sole */}
            <path d="M28.5 73.5H69.5V77C69.5 79.2 66.5 80.5 62 80.5H34C30.5 80.5 28.5 78.8 28.5 76.5V73.5Z" fill="#DFC39D" stroke={OUTLINE} strokeWidth="2.1" />
            {/* Fluffy Shearling Cuff */}
            <path
              d="M32 39C32 34.5 36.5 33 40 35C42.5 32.5 48.5 32.5 51 35C54.5 33 59.5 34.5 59.5 39C59.5 43.2 55.5 44.8 46 44.8C36.5 44.8 32 43.2 32 39Z"
              fill="#FAF4E7"
              stroke={OUTLINE}
              strokeWidth="2.2"
              strokeLinejoin="round"
            />
          </g>
          {/* Right Boot (front hero) */}
          <g transform="translate(15, 3)">
            <path
              d="M34 38H58V58C64 60 70 64 70 71C70 76.5 65.5 79 59 79H35C30.5 79 28 75.5 28 71V50C28 45 31 41 34 38Z"
              fill="#CC915A"
              stroke={OUTLINE}
              strokeWidth="2.6"
              strokeLinejoin="round"
            />
            {/* Signature UGG stitched seam */}
            <path d="M46 45V66C46 69.5 52 71.5 60 71.5" stroke="#A66D3C" strokeWidth="1.9" strokeDasharray="3 2.5" strokeLinecap="round" />
            {/* Platform Sole */}
            <path d="M28.5 73.5H69.5V77C69.5 79.2 66.5 80.5 62 80.5H34C30.5 80.5 28.5 78.8 28.5 76.5V73.5Z" fill="#E8CEAA" stroke={OUTLINE} strokeWidth="2.2" />
            {/* Fluffy Shearling Cuff */}
            <path
              d="M32 39C32 34.5 36.5 33 40 35C42.5 32.5 48.5 32.5 51 35C54.5 33 59.5 34.5 59.5 39C59.5 43.2 55.5 44.8 46 44.8C36.5 44.8 32 43.2 32 39Z"
              fill="#FFFDF9"
              stroke={OUTLINE}
              strokeWidth="2.3"
              strokeLinejoin="round"
            />
          </g>
        </svg>
      );

    case 'brown-penny-loafer':
      return (
        <svg viewBox="0 0 100 100" fill="none" className={className} aria-hidden="true">
          <ellipse cx="50" cy="80" rx="34" ry="5" fill="#E3D7C0" opacity="0.65" />
          {/* Left Loafer (behind) */}
          <g transform="translate(-14, -7) rotate(-4 50 50)">
            <path
              d="M27 52C27 48 31 46 35 48C40 50.5 44 51 49 48.5C53 46.5 56 49 58 53C64 55 71 58.5 71 65.5C71 71 66 74 59 74H33C28.5 74 26 70.5 26 66L27 52Z"
              fill="#623C28"
              stroke={OUTLINE}
              strokeWidth="2.4"
              strokeLinejoin="round"
            />
            <path d="M26.5 69.5H70.5V73C70.5 74.8 68 76 64 76H32C28.5 76 26.5 74.2 26.5 72V69.5Z" fill="#3B251B" stroke={OUTLINE} strokeWidth="2" />
          </g>
          {/* Right Loafer (front) */}
          <g transform="translate(12, 4) rotate(2 50 50)">
            <path
              d="M27 52C27 48 31 46 35 48C40 50.5 44 51 49 48.5C53 46.5 56 49 58 53C64 55 71 58.5 71 65.5C71 71 66 74 59 74H33C28.5 74 26 70.5 26 66L27 52Z"
              fill="#7A4C34"
              stroke={OUTLINE}
              strokeWidth="2.6"
              strokeLinejoin="round"
            />
            {/* Penny Saddle Strap */}
            <path d="M47 50.5L56 54.5L53 63L44 59.5Z" fill="#633B27" stroke={OUTLINE} strokeWidth="1.9" strokeLinejoin="round" />
            <ellipse cx="50" cy="57" rx="2.4" ry="1.3" transform="rotate(20 50 57)" fill="#9E6A4C" />
            {/* Leather Gloss Highlight */}
            <path d="M61 59.5C64 60.5 66 62 66.5 64" stroke="#B68060" strokeWidth="2.2" strokeLinecap="round" />
            {/* Chunky Sole */}
            <path d="M26.5 69.5H70.5V73C70.5 74.8 68 76 64 76H32C28.5 76 26.5 74.2 26.5 72V69.5Z" fill="#3D281E" stroke={OUTLINE} strokeWidth="2.1" />
          </g>
        </svg>
      );

    case 'black-maryjane':
      return (
        <svg viewBox="0 0 100 100" fill="none" className={className} aria-hidden="true">
          <ellipse cx="50" cy="80" rx="34" ry="5" fill="#E3D7C0" opacity="0.65" />
          {/* Back shoe */}
          <g transform="translate(-14, -6) rotate(-4 50 50)">
            <path
              d="M26 56C26 52 29.5 50 33 52C38 56 47 58 55 54C62 55 71 59 71 66C71 71.5 66 74.5 59 74.5H33C28 74.5 25.5 71 25.5 66.5L26 56Z"
              fill="#2B2829"
              stroke={OUTLINE}
              strokeWidth="2.4"
              strokeLinejoin="round"
            />
            <path d="M43 57.5C47 54 52 53 56 54.5" stroke={OUTLINE} strokeWidth="3.2" strokeLinecap="round" />
          </g>
          {/* Front shoe */}
          <g transform="translate(12, 4) rotate(2 50 50)">
            <path
              d="M26 56C26 52 29.5 50 33 52C38 56 47 58 55 54C62 55 71 59 71 66C71 71.5 66 74.5 59 74.5H33C28 74.5 25.5 71 25.5 66.5L26 56Z"
              fill="#353234"
              stroke={OUTLINE}
              strokeWidth="2.6"
              strokeLinejoin="round"
            />
            {/* Cream insole peek */}
            <path d="M33 53.5C38 57.5 46 58.8 53 55.5" stroke="#EFE6D5" strokeWidth="2.4" strokeLinecap="round" />
            {/* Mary Jane Strap + Buckle */}
            <path d="M42 58.5C46 53.5 51.5 52 56.5 54.5" stroke="#222021" strokeWidth="4.2" strokeLinecap="round" />
            <circle cx="49" cy="54.5" r="2.3" fill="#E8DFD1" stroke={OUTLINE} strokeWidth="1.2" />
            {/* Patent shine */}
            <path d="M61 60.5C64 61.5 66.2 63.2 66.8 65.5" stroke="#7E7A7D" strokeWidth="2.3" strokeLinecap="round" />
          </g>
        </svg>
      );

    case 'pearl-5-hairpin':
      return (
        <svg viewBox="0 0 100 100" fill="none" className={className} aria-hidden="true">
          <ellipse cx="50" cy="74" rx="28" ry="4.5" fill="#E3D7C0" opacity="0.65" />
          <g transform="rotate(-14 50 50)">
            {/* Gold snap clip base */}
            <path
              d="M17 50C17 44.5 22 41 30 41H76C81 41 84 45 84 50C84 55 81 59 76 59H30C22 59 17 55.5 17 50Z"
              fill="#EBC463"
              stroke={OUTLINE}
              strokeWidth="2.5"
              strokeLinejoin="round"
            />
            <path d="M24 50H76" stroke="#C59835" strokeWidth="2.2" strokeLinecap="round" />
            {/* 5 Luminous Pearls */}
            {[26, 38, 50, 62, 74].map((cx, idx) => (
              <g key={cx}>
                <circle
                  cx={cx}
                  cy={50}
                  r={idx === 2 ? 7.4 : idx === 1 || idx === 3 ? 6.8 : 6.1}
                  fill="#FAF5EB"
                  stroke={OUTLINE}
                  strokeWidth="2.2"
                />
                <circle
                  cx={cx - 2}
                  cy={47.8}
                  r={idx === 2 ? 2.1 : 1.7}
                  fill="#FFFFFF"
                />
              </g>
            ))}
          </g>
          {/* Cute tiny sparkles */}
          <path d="M77 25L78.5 29.5L83 31L78.5 32.5L77 37L75.5 32.5L71 31L75.5 29.5L77 25Z" fill="#F6D76B" stroke={OUTLINE} strokeWidth="1.2" strokeLinejoin="round" />
        </svg>
      );

    case 'cocoa-wool-beret':
      return (
        <svg viewBox="0 0 100 100" fill="none" className={className} aria-hidden="true">
          <ellipse cx="50" cy="77" rx="30" ry="4.5" fill="#E3D7C0" opacity="0.65" />
          {/* Beret stem */}
          <path d="M51 31C52.5 26.5 55 24 57 23.5" stroke={OUTLINE} strokeWidth="3.2" strokeLinecap="round" />
          {/* Plush beret crown */}
          <path
            d="M16 54C16 37 32 29 51 29C70 29 85 37.5 85 52.5C85 63.5 72 69 50 69C28 69 16 64 16 54Z"
            fill="#835D47"
            stroke={OUTLINE}
            strokeWidth="2.8"
            strokeLinejoin="round"
          />
          {/* Soft warm felt highlight */}
          <path
            d="M27 45C33 38 43 35.5 55 36"
            stroke="#A57B62"
            strokeWidth="3.5"
            strokeLinecap="round"
            opacity="0.7"
          />
          {/* Inner band shadow */}
          <path
            d="M26 65.5C33 68 41 69 50 69C59 69 67 68 74 65.5"
            stroke="#634332"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>
      );

    case 'tartan-ribbon-pin':
      return (
        <svg viewBox="0 0 100 100" fill="none" className={className} aria-hidden="true">
          <ellipse cx="50" cy="82" rx="26" ry="4" fill="#E3D7C0" opacity="0.65" />
          {/* Ribbon tails */}
          <path
            d="M46 53L31 76L41 72L45 78L50 56Z"
            fill="#A63739"
            stroke={OUTLINE}
            strokeWidth="2.4"
            strokeLinejoin="round"
          />
          <path
            d="M54 53L69 76L59 72L55 78L50 56Z"
            fill="#A63739"
            stroke={OUTLINE}
            strokeWidth="2.4"
            strokeLinejoin="round"
          />
          {/* Left plump bow loop */}
          <path
            d="M48 47C38 33 21 31 18 45C15.5 56.5 29 63 48 53Z"
            fill="#C24345"
            stroke={OUTLINE}
            strokeWidth="2.6"
            strokeLinejoin="round"
          />
          {/* Right plump bow loop */}
          <path
            d="M52 47C62 33 79 31 82 45C84.5 56.5 71 63 52 53Z"
            fill="#C24345"
            stroke={OUTLINE}
            strokeWidth="2.6"
            strokeLinejoin="round"
          />
          {/* Tartan plaid accent lines */}
          <path d="M24 44H42M26 51H43M31 38V55M38 40V55" stroke="#2D3C54" strokeWidth="1.8" opacity="0.7" />
          <path d="M58 44H76M57 51H74M62 40V55M69 38V55" stroke="#2D3C54" strokeWidth="1.8" opacity="0.7" />
          <path d="M25 47.5H42M58 47.5H75" stroke="#F6D76B" strokeWidth="1.2" opacity="0.85" />
          {/* Center knot */}
          <rect
            x="43.5"
            y="42.5"
            width="13"
            height="14"
            rx="5.5"
            fill="#D45355"
            stroke={OUTLINE}
            strokeWidth="2.5"
          />
        </svg>
      );
  }
};
