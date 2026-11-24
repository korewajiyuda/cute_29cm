import React from 'react';
import { ClothingItem } from '../../types';
import { ClothingIconSvg } from './ClothingIcons';

interface ProductEditorialSvgProps {
  item: ClothingItem;
  slideIndex: number;
}

export const ProductEditorialSvg: React.FC<ProductEditorialSvgProps> = ({
  item,
  slideIndex,
}) => {
  const isNordic = item.id === 'nordic-cardigan';

  // Slide 0: Minimalist 29CM Studio Hero Cut
  if (slideIndex === 0) {
    if (isNordic) {
      return (
        <svg viewBox="0 0 400 440" fill="none" className="w-full h-full" aria-label={item.name}>
          {/* Gallery studio off-white backdrop */}
          <rect width="400" height="440" fill="#F4F3EF" />
          {/* Architectural studio daylight beam */}
          <polygon points="0,0 240,0 130,440 0,440" fill="#FFFFFF" opacity="0.45" />
          {/* Thin minimalist rack bar & wire hanger */}
          <line x1="0" y1="36" x2="400" y2="36" stroke="#D5D2CA" strokeWidth="1" />
          <path
            d="M200 36V66C200 72 206 75 206 80C206 84 202 87 198 87"
            stroke="#111111"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
          <path d="M198 87L146 112M198 87L254 112" stroke="#111111" strokeWidth="1.5" strokeLinecap="round" />

          {/* Soft floor shadow */}
          <ellipse cx="200" cy="396" rx="108" ry="12" fill="#DDDAD0" opacity="0.7" />

          {/* Editorial Nordic Zip-up Cardigan Silhouette (refined sharp 29CM proportion) */}
          <g>
            {/* Back collar inside */}
            <path d="M167 98H233V122H167V98Z" fill="#C7B69B" />
            {/* Main body & tailored sleeves */}
            <path
              d="M165 104L112 128L88 268L124 274L138 192V358H262V192L276 274L312 268L288 128L235 104H165Z"
              fill="#E6D9C3"
              stroke="#1A1816"
              strokeWidth="1.8"
              strokeLinejoin="round"
            />
            {/* High ribbed zip stand collar */}
            <path
              d="M166 96H234V128H166V96Z"
              fill="#DACAB0"
              stroke="#1A1816"
              strokeWidth="1.8"
              strokeLinejoin="round"
            />
            <path
              d="M174 97V127M182 97V127M190 97V127M210 97V127M218 97V127M226 97V127"
              stroke="#B4A184"
              strokeWidth="1.2"
            />

            {/* Editorial Nordic Jacquard Chest & Upper Sleeve Pattern */}
            <rect x="139" y="152" width="122" height="58" fill="#5D4738" />
            {/* Crisp white fair-isle zigzag borders */}
            <path
              d="M139 160L147 152L155 160L163 152L171 160L179 152L187 160L195 152L203 160L211 152L219 160L227 152L235 160L243 152L251 160L261 152"
              stroke="#FAF6EE"
              strokeWidth="1.8"
              strokeLinejoin="round"
            />
            <path
              d="M139 202L147 210L155 202L163 210L171 202L179 210L187 202L195 210L203 202L211 210L219 202L227 210L235 202L243 210L251 202L261 210"
              stroke="#FAF6EE"
              strokeWidth="1.8"
              strokeLinejoin="round"
            />
            {/* Stylized Nordic Reindeer / Snowstar Geometric Motifs */}
            {[156, 180, 220, 244].map((cx) => (
              <g key={cx}>
                <path
                  d={`M${cx - 8} 181H${cx + 8}M${cx} 173V189M${cx - 5.5} 175.5L${cx + 5.5} 186.5M${cx + 5.5} 175.5L${cx - 5.5} 186.5`}
                  stroke="#EFE3CC"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
                <circle cx={cx} cy="181" r="2.2" fill="#D5B26E" />
              </g>
            ))}

            {/* Secondary dotted knit band below */}
            {[148, 160, 172, 184, 216, 228, 240, 252].map((cx) => (
              <polygon
                key={cx}
                points={`${cx},226 ${cx + 4},222 ${cx + 8},226 ${cx + 4},230`}
                fill="#7D624E"
              />
            ))}
            {[154, 166, 178, 222, 234, 246].map((cx) => (
              <circle key={cx} cx={cx} cy="240" r="1.8" fill="#9E856B" />
            ))}

            {/* Sleeve matching jacquard bands */}
            <polygon points="107,164 137,156 136,184 102,193" fill="#5D4738" />
            <polygon points="293,164 263,156 264,184 298,193" fill="#5D4738" />
            <circle cx="120" cy="174" r="3" fill="#FAF6EE" />
            <circle cx="280" cy="174" r="3" fill="#FAF6EE" />

            {/* Subtle woven texture lines */}
            <path d="M150 260V336M172 260V336M228 260V336M250 260V336" stroke="#D5C5AA" strokeWidth="1" strokeDasharray="3 5" />

            {/* Ribbed cuffs & bottom hem */}
            <path d="M138 336H262" stroke="#1A1816" strokeWidth="1.4" />
            {[148, 158, 168, 178, 188, 212, 222, 232, 242, 252].map((x) => (
              <line key={x} x1={x} y1="337" x2={x} y2="357" stroke="#B6A387" strokeWidth="1.2" />
            ))}
            <path d="M90 250L127 256M310 250L273 256" stroke="#1A1816" strokeWidth="1.4" />

            {/* Metallic Two-Way Center Zipper */}
            <line x1="200" y1="96" x2="200" y2="358" stroke="#1A1816" strokeWidth="2.2" />
            <line x1="200" y1="100" x2="200" y2="354" stroke="#F4F3EF" strokeWidth="1" strokeDasharray="2 3" />
            {/* Top puller */}
            <rect x="196.5" y="128" width="7" height="12" rx="1.5" fill="#C9C4BA" stroke="#1A1816" strokeWidth="1.3" />
            {/* Bottom two-way puller */}
            <rect x="196.5" y="330" width="7" height="11" rx="1.5" fill="#C9C4BA" stroke="#1A1816" strokeWidth="1.3" />
          </g>

          {/* Subtle 29CM Editorial Watermark Caption */}
          <text
            x="24"
            y="416"
            fill="#111111"
            fontSize="10"
            fontWeight="600"
            letterSpacing="2.2"
            opacity="0.55"
          >
            29CM EXCLUSIVE · WINTER ARCHIVE
          </text>
          <text
            x="376"
            y="416"
            textAnchor="end"
            fill="#111111"
            fontSize="10"
            letterSpacing="1.4"
            opacity="0.45"
          >
            01 / 03
          </text>
        </svg>
      );
    }

    // Editorial Studio Presentation for any other selected 29CM item
    return (
      <div className="relative w-full h-full bg-[#F4F3EF] flex flex-col items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 opacity-40"
          style={{
            background: 'linear-gradient(125deg, #FFFFFF 0%, transparent 55%)',
          }}
        />
        <div className="absolute top-6 left-6 text-[10px] font-semibold tracking-[0.2em] text-[#111111]/55 uppercase">
          {item.brand} · STUDIO CUT
        </div>
        <div className="relative z-10 w-64 h-64 flex items-center justify-center">
          <ClothingIconSvg id={item.id} className="w-60 h-60 drop-shadow-[0_18px_22px_rgba(17,17,17,0.08)]" />
        </div>
        <div className="absolute bottom-5 left-6 right-6 flex items-center justify-between text-[10px] tracking-[0.16em] text-[#111111]/50 font-medium">
          <span>29CM CURATED SELECTION</span>
          <span>01 / 03</span>
        </div>
      </div>
    );
  }

  // Slide 1: Macro Textile / Colorway Detail View
  if (slideIndex === 1) {
    return (
      <svg viewBox="0 0 400 440" fill="none" className="w-full h-full" aria-label="Textile detail">
        <rect width="400" height="440" fill="#EFECE4" />
        {/* Woven knit swatch grid */}
        <rect x="34" y="42" width="332" height="296" fill={item.swatchColor} stroke="#111111" strokeWidth="1.2" />
        {/* Knit pattern texture overlay */}
        {isNordic ? (
          <g>
            <rect x="34" y="130" width="332" height="118" fill="#5D4738" />
            {[60, 110, 160, 210, 260, 310, 348].map((x) => (
              <g key={x}>
                <path
                  d={`M${x - 16} 189H${x + 16}M${x} 173V205M${x - 11} 178L${x + 11} 200M${x + 11} 178L${x - 11} 200`}
                  stroke="#FAF6EE"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                />
                <circle cx={x} cy="189" r="3.6" fill="#D5B26E" />
              </g>
            ))}
            <path
              d="M34 146L52 130L70 146L88 130L106 146L124 130L142 146L160 130L178 146L196 130L214 146L232 130L250 146L268 130L286 146L304 130L322 146L340 130L366 146"
              stroke="#FAF6EE"
              strokeWidth="2.2"
            />
            <path
              d="M34 232L52 248L70 232L88 248L106 232L124 248L142 232L160 248L178 232L196 248L214 232L232 248L250 232L268 248L286 232L304 248L322 232L340 248L366 232"
              stroke="#FAF6EE"
              strokeWidth="2.2"
            />
          </g>
        ) : (
          <g opacity="0.25">
            {[70, 110, 150, 190, 230, 270, 310].map((y) => (
              <line key={y} x1="34" y1={y} x2="366" y2={y} stroke="#111111" strokeWidth="1" strokeDasharray="6 6" />
            ))}
            {[80, 140, 200, 260, 320].map((x) => (
              <line key={x} x1={x} y1="42" x2={x} y2="338" stroke="#111111" strokeWidth="1" strokeDasharray="4 8" />
            ))}
          </g>
        )}
        {/* Editorial material card strip */}
        <rect x="34" y="338" width="332" height="54" fill="#FFFFFF" stroke="#111111" strokeWidth="1.2" />
        <text x="50" y="361" fill="#111111" fontSize="11" fontWeight="700" letterSpacing="1.2">
          FABRIC DETAIL · {item.colorName.toUpperCase()}
        </text>
        <text x="50" y="379" fill="#666666" fontSize="10.5">
          {item.material}
        </text>
        <text x="376" y="420" textAnchor="end" fill="#111111" fontSize="10" letterSpacing="1.4" opacity="0.45">
          02 / 03
        </text>
      </svg>
    );
  }

  // Slide 2: 29CM Architectural Fit Spec Sketch
  return (
    <svg viewBox="0 0 400 440" fill="none" className="w-full h-full" aria-label="Fit specification">
      <rect width="400" height="440" fill="#FAFAFA" />
      {/* Subtle architectural blueprint grid */}
      {[80, 160, 240, 320].map((x) => (
        <line key={x} x1={x} y1="0" x2={x} y2="440" stroke="#EBEBEB" strokeWidth="1" />
      ))}
      {[88, 176, 264, 352].map((y) => (
        <line key={y} x1="0" y1={y} x2="400" y2={y} stroke="#EBEBEB" strokeWidth="1" />
      ))}

      {/* Clean technical garment wireframe */}
      <path
        d="M168 94H232L284 122L306 254L274 260L258 176V334H142V176L126 260L94 254L116 122L168 94Z"
        fill="#FFFFFF"
        stroke="#111111"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <line x1="200" y1="94" x2="200" y2="334" stroke="#111111" strokeWidth="1" strokeDasharray="3 3" />

      {/* Measurement callout lines */}
      {/* Shoulder width */}
      <line x1="116" y1="74" x2="284" y2="74" stroke="#111111" strokeWidth="1" />
      <line x1="116" y1="68" x2="116" y2="80" stroke="#111111" strokeWidth="1" />
      <line x1="284" y1="68" x2="284" y2="80" stroke="#111111" strokeWidth="1" />
      <rect x="166" y="64" width="68" height="20" fill="#FAFAFA" />
      <text x="200" y="78" textAnchor="middle" fill="#111111" fontSize="10" fontWeight="600">
        어깨 47cm
      </text>

      {/* Total length */}
      <line x1="334" y1="94" x2="334" y2="334" stroke="#111111" strokeWidth="1" />
      <line x1="328" y1="94" x2="340" y2="94" stroke="#111111" strokeWidth="1" />
      <line x1="328" y1="334" x2="340" y2="334" stroke="#111111" strokeWidth="1" />
      <rect x="304" y="204" width="60" height="20" fill="#FAFAFA" />
      <text x="334" y="218" textAnchor="middle" fill="#111111" fontSize="10" fontWeight="600">
        총장 56cm
      </text>

      {/* Chest width */}
      <line x1="142" y1="214" x2="258" y2="214" stroke="#FF4800" strokeWidth="1.2" />
      <rect x="168" y="204" width="64" height="20" fill="#FFFFFF" />
      <text x="200" y="218" textAnchor="middle" fill="#FF4800" fontSize="10" fontWeight="600">
        가슴 54cm
      </text>

      <text x="24" y="416" fill="#111111" fontSize="10" fontWeight="600" letterSpacing="1.8" opacity="0.55">
        TECHNICAL SPEC · RELAXED CROP FIT
      </text>
      <text x="376" y="416" textAnchor="end" fill="#111111" fontSize="10" letterSpacing="1.4" opacity="0.45">
        03 / 03
      </text>
    </svg>
  );
};
