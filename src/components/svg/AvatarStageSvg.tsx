import React from 'react';
import { AvatarAppearance, ClothingId, EquippedOutfit } from '../../types';

interface AvatarStageSvgProps {
  appearance: AvatarAppearance;
  outfit: EquippedOutfit;
  className?: string;
  compact?: boolean;
}

const LINE = '#4A3F35';

const renderBackHair = (appearance: AvatarAppearance) => {
  const { hairStyle, hairColor, hairHighlight } = appearance;
  switch (hairStyle) {
    case 'bob':
      return (
        <g>
          <path
            d="M54 96C54 55 77 42 110 42C143 42 166 55 166 96V134C166 144 156 150 144 148H76C64 150 54 144 54 134V96Z"
            fill={hairColor}
            stroke={LINE}
            strokeWidth="3"
            strokeLinejoin="round"
          />
          <path
            d="M66 140C72 146 80 147 86 145M154 140C148 146 140 147 134 145"
            stroke={hairHighlight}
            strokeWidth="2.4"
            strokeLinecap="round"
            opacity="0.6"
          />
        </g>
      );
    case 'long-wave':
      return (
        <g>
          <path
            d="M52 94C52 53 76 41 110 41C144 41 168 53 168 94C172 118 175 144 167 167C163 178 153 182 144 176C136 184 124 185 110 183C96 185 84 184 76 176C67 182 57 178 53 167C45 144 48 118 52 94Z"
            fill={hairColor}
            stroke={LINE}
            strokeWidth="3"
            strokeLinejoin="round"
          />
          <path
            d="M62 126C58 140 62 154 60 166M158 126C162 140 158 154 160 166"
            stroke={hairHighlight}
            strokeWidth="2.6"
            strokeLinecap="round"
            opacity="0.55"
          />
        </g>
      );
    case 'twin-bun':
      return (
        <g>
          {/* Left & Right Chubby Buns */}
          <circle cx="62" cy="59" r="19" fill={hairColor} stroke={LINE} strokeWidth="3" />
          <path d="M53 54C56 48 63 46 69 49" stroke={hairHighlight} strokeWidth="2.6" strokeLinecap="round" opacity="0.65" />
          <circle cx="158" cy="59" r="19" fill={hairColor} stroke={LINE} strokeWidth="3" />
          <path d="M151 49C157 46 164 48 167 54" stroke={hairHighlight} strokeWidth="2.6" strokeLinecap="round" opacity="0.65" />
          {/* Main head hair silhouette */}
          <path
            d="M56 96C56 58 78 44 110 44C142 44 164 58 164 96C164 126 146 142 110 142C74 142 56 126 56 96Z"
            fill={hairColor}
            stroke={LINE}
            strokeWidth="3"
          />
        </g>
      );
    case 'ponytail':
      return (
        <g>
          {/* Flowing low side ponytail */}
          <path
            d="M148 112C168 116 179 134 176 156C174 169 164 177 154 173C159 163 158 149 148 139Z"
            fill={hairColor}
            stroke={LINE}
            strokeWidth="3"
            strokeLinejoin="round"
          />
          <circle cx="154" cy="123" r="5" fill="#F6D76B" stroke={LINE} strokeWidth="2" />
          <path
            d="M56 95C56 57 78 44 110 44C142 44 164 57 164 95C164 127 146 143 110 143C74 143 56 127 56 95Z"
            fill={hairColor}
            stroke={LINE}
            strokeWidth="3"
          />
        </g>
      );
  }
};

const renderFrontHair = (appearance: AvatarAppearance) => {
  const { hairStyle, hairColor, hairHighlight } = appearance;
  return (
    <g>
      {/* Top Crown + Cute Soft Bangs */}
      <path
        d="M57 96C58 63 80 46 110 46C140 46 162 63 163 96C157 91 151 87 145 84C144 92 140 97 134 99C132 90 128 84 121 82C119 92 114 97 108 99C105 90 101 84 94 82C91 91 86 96 79 98C76 91 74 87 72 84C67 87 62 91 57 96Z"
        fill={hairColor}
        stroke={LINE}
        strokeWidth="2.8"
        strokeLinejoin="round"
      />
      {/* Side face-framing strands */}
      {hairStyle === 'bob' || hairStyle === 'long-wave' ? (
        <>
          <path
            d="M58 92C56 108 58 124 64 134C67 125 66 111 66 96Z"
            fill={hairColor}
            stroke={LINE}
            strokeWidth="2.4"
            strokeLinejoin="round"
          />
          <path
            d="M162 92C164 108 162 124 156 134C153 125 154 111 154 96Z"
            fill={hairColor}
            stroke={LINE}
            strokeWidth="2.4"
            strokeLinejoin="round"
          />
        </>
      ) : null}
      {/* Cozy ACNH Glossy Hair Halo Arc */}
      <path
        d="M78 65C87 57 100 54 114 55"
        stroke={hairHighlight}
        strokeWidth="3.5"
        strokeLinecap="round"
        opacity="0.72"
      />
      <circle cx="123" cy="57" r="2.2" fill={hairHighlight} opacity="0.72" />
    </g>
  );
};

const renderFace = (appearance: AvatarAppearance) => {
  const { faceStyle, blushColor } = appearance;
  return (
    <g>
      {/* Rosy ACNH Cheek Blush */}
      <ellipse cx="77" cy="117" rx="9" ry="5" fill={blushColor} opacity="0.65" />
      <ellipse cx="143" cy="117" rx="9" ry="5" fill={blushColor} opacity="0.65" />

      {/* Tiny cute nose triangle/dot */}
      <path d="M108.5 113.5L110 116L111.5 113.5Z" fill="#DF9C83" />

      {/* Eyes per style */}
      {faceStyle === 'sparkle' && (
        <g>
          <ellipse cx="88" cy="107" rx="5.5" ry="6.8" fill={LINE} />
          <circle cx="86.2" cy="104.5" r="2.1" fill="#FFFFFF" />
          <circle cx="90" cy="109.5" r="1" fill="#FFFFFF" />
          <path d="M81 102L84 104" stroke={LINE} strokeWidth="2.2" strokeLinecap="round" />

          <ellipse cx="132" cy="107" rx="5.5" ry="6.8" fill={LINE} />
          <circle cx="130.2" cy="104.5" r="2.1" fill="#FFFFFF" />
          <circle cx="134" cy="109.5" r="1" fill="#FFFFFF" />
          <path d="M139 102L136 104" stroke={LINE} strokeWidth="2.2" strokeLinecap="round" />

          <path d="M104 123C107.2 126.5 112.8 126.5 116 123" stroke={LINE} strokeWidth="2.5" strokeLinecap="round" />
        </g>
      )}

      {faceStyle === 'happy' && (
        <g>
          <path d="M81 108.5C83.5 102.5 92.5 102.5 95 108.5" stroke={LINE} strokeWidth="3.2" strokeLinecap="round" />
          <path d="M125 108.5C127.5 102.5 136.5 102.5 139 108.5" stroke={LINE} strokeWidth="3.2" strokeLinecap="round" />
          <path
            d="M103.5 122C105.5 127.5 114.5 127.5 116.5 122Z"
            fill="#EB8A82"
            stroke={LINE}
            strokeWidth="2.2"
            strokeLinejoin="round"
          />
        </g>
      )}

      {faceStyle === 'sweet' && (
        <g>
          <circle cx="88" cy="108" r="5" fill={LINE} />
          <circle cx="86.5" cy="106" r="1.8" fill="#FFFFFF" />
          <circle cx="132" cy="108" r="5" fill={LINE} />
          <circle cx="130.5" cy="106" r="1.8" fill="#FFFFFF" />
          <path d="M105.5 123.5C108 125.5 112 125.5 114.5 123.5" stroke={LINE} strokeWidth="2.4" strokeLinecap="round" />
        </g>
      )}

      {faceStyle === 'dreamy' && (
        <g>
          <ellipse cx="88" cy="109" rx="5.2" ry="4.5" fill={LINE} />
          <path d="M81.5 105H94.5" stroke={LINE} strokeWidth="2.6" strokeLinecap="round" />
          <circle cx="86.5" cy="108" r="1.5" fill="#FFFFFF" />

          <ellipse cx="132" cy="109" rx="5.2" ry="4.5" fill={LINE} />
          <path d="M125.5 105H138.5" stroke={LINE} strokeWidth="2.6" strokeLinecap="round" />
          <circle cx="130.5" cy="108" r="1.5" fill="#FFFFFF" />

          <path d="M106 124C108.5 125.2 111.5 125.2 114 124" stroke={LINE} strokeWidth="2.3" strokeLinecap="round" />
        </g>
      )}
    </g>
  );
};

const renderSocks = (socksId: ClothingId | null) => {
  if (!socksId) return null;
  if (socksId === 'white-lace-socks') {
    return (
      <g>
        {/* Left & Right White Long Socks */}
        <path
          d="M90 231H106V263C106 266 103 268 98 268C93 268 90 266 90 263V231Z"
          fill="#FFFDF9"
          stroke={LINE}
          strokeWidth="2.3"
        />
        <path
          d="M114 231H130V263C130 266 127 268 122 268C117 268 114 266 114 263V231Z"
          fill="#FFFDF9"
          stroke={LINE}
          strokeWidth="2.3"
        />
        {/* Scalloped Eyelet Lace Frills */}
        <path
          d="M89.5 232C91.5 228.5 94 228.5 95.5 232C97 228.5 99.5 228.5 101 232C102.5 228.5 105 228.5 106.5 232"
          fill="#FFFDF9"
          stroke={LINE}
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M113.5 232C115.5 228.5 118 228.5 119.5 232C121 228.5 123.5 228.5 125 232C126.5 228.5 129 228.5 130.5 232"
          fill="#FFFDF9"
          stroke={LINE}
          strokeWidth="2"
          strokeLinecap="round"
        />
        <circle cx="95" cy="236" r="1" fill="#D5C7AE" />
        <circle cx="101" cy="236" r="1" fill="#D5C7AE" />
        <circle cx="119" cy="236" r="1" fill="#D5C7AE" />
        <circle cx="125" cy="236" r="1" fill="#D5C7AE" />
      </g>
    );
  }
  if (socksId === 'ivory-ribbed-socks') {
    return (
      <g>
        <path
          d="M90 238H106V263C106 266 103 268 98 268C93 268 90 266 90 263V238Z"
          fill="#F2E9D8"
          stroke={LINE}
          strokeWidth="2.3"
        />
        <path
          d="M114 238H130V263C130 266 127 268 122 268C117 268 114 266 114 263V238Z"
          fill="#F2E9D8"
          stroke={LINE}
          strokeWidth="2.3"
        />
        <rect x="89" y="236" width="18" height="6" rx="2.5" fill="#E9DEC8" stroke={LINE} strokeWidth="2" />
        <rect x="113" y="236" width="18" height="6" rx="2.5" fill="#E9DEC8" stroke={LINE} strokeWidth="2" />
        <path d="M95 244V256M101 244V256M119 244V256M125 244V256" stroke="#D5C7AC" strokeWidth="1.5" strokeLinecap="round" />
      </g>
    );
  }
  return null;
};

const renderShoes = (shoesId: ClothingId | null) => {
  if (!shoesId) return null;
  if (shoesId === 'camel-ugg-boots') {
    return (
      <g>
        {/* Left UGG Boot */}
        <path
          d="M88 250H107V268C107 272 103.5 274 97 274H90C85.5 274 83.5 271 84.5 266.5L88 250Z"
          fill="#C98F58"
          stroke={LINE}
          strokeWidth="2.5"
          strokeLinejoin="round"
        />
        <path d="M84.5 270.5H107V273.5C107 275.2 104 276 98 276H90C86 276 84.5 274.5 84.5 272.5V270.5Z" fill="#E8CEAA" stroke={LINE} strokeWidth="2" />
        {/* Fluffy shearling collar */}
        <path
          d="M86 250.5C86 247 90 246 93 247.5C95.5 245.5 100 245.5 102.5 247.5C105.5 246 109 247 109 250.5C109 253.5 105 254.5 97.5 254.5C90 254.5 86 253.5 86 250.5Z"
          fill="#FFFDF9"
          stroke={LINE}
          strokeWidth="2.1"
        />
        {/* Right UGG Boot */}
        <path
          d="M113 250H132L135.5 266.5C136.5 271 134.5 274 130 274H123C116.5 274 113 272 113 268V250Z"
          fill="#C98F58"
          stroke={LINE}
          strokeWidth="2.5"
          strokeLinejoin="round"
        />
        <path d="M113 270.5H135.5V272.5C135.5 274.5 134 276 130 276H122C116 276 113 275.2 113 273.5V270.5Z" fill="#E8CEAA" stroke={LINE} strokeWidth="2" />
        <path
          d="M111 250.5C111 247 114.5 246 117.5 247.5C120 245.5 124.5 245.5 127 247.5C130 246 134 247 134 250.5C134 253.5 130 254.5 122.5 254.5C115 254.5 111 253.5 111 250.5Z"
          fill="#FFFDF9"
          stroke={LINE}
          strokeWidth="2.1"
        />
      </g>
    );
  }
  if (shoesId === 'brown-penny-loafer') {
    return (
      <g>
        {/* Left Loafer */}
        <path
          d="M89 258H106V269C106 272.5 103 274.5 96.5 274.5H90C85.5 274.5 84 271.5 85 267L89 258Z"
          fill="#784B34"
          stroke={LINE}
          strokeWidth="2.4"
          strokeLinejoin="round"
        />
        <rect x="89.5" y="261" width="15" height="4.2" rx="1.5" fill="#5D3826" stroke={LINE} strokeWidth="1.5" />
        <path d="M84.8 271.5H106.2V274C106.2 275.5 103.5 276 97 276H90C86 276 84.8 274.5 84.8 273V271.5Z" fill="#3B251B" stroke={LINE} strokeWidth="1.8" />
        {/* Right Loafer */}
        <path
          d="M114 258H131L135 267C136 271.5 134.5 274.5 130 274.5H123.5C117 274.5 114 272.5 114 269V258Z"
          fill="#784B34"
          stroke={LINE}
          strokeWidth="2.4"
          strokeLinejoin="round"
        />
        <rect x="115.5" y="261" width="15" height="4.2" rx="1.5" fill="#5D3826" stroke={LINE} strokeWidth="1.5" />
        <path d="M113.8 271.5H135.2V273C135.2 274.5 134 276 130 276H123C116.5 276 113.8 275.5 113.8 274V271.5Z" fill="#3B251B" stroke={LINE} strokeWidth="1.8" />
      </g>
    );
  }
  if (shoesId === 'black-maryjane') {
    return (
      <g>
        {/* Left Mary Jane */}
        <path
          d="M89 262C93 265 102 265 106 262V269.5C106 273 103 275 96.5 275H90C85.5 275 84 272 85 268L89 262Z"
          fill="#312E30"
          stroke={LINE}
          strokeWidth="2.4"
          strokeLinejoin="round"
        />
        <path d="M89.5 261H106" stroke="#222021" strokeWidth="3.2" strokeLinecap="round" />
        <circle cx="97.5" cy="261" r="1.6" fill="#E8DFD1" />
        {/* Right Mary Jane */}
        <path
          d="M114 262C118 265 127 265 131 262L135 268C136 272 134.5 275 130 275H123.5C117 275 114 273 114 269.5V262Z"
          fill="#312E30"
          stroke={LINE}
          strokeWidth="2.4"
          strokeLinejoin="round"
        />
        <path d="M114 261H130.5" stroke="#222021" strokeWidth="3.2" strokeLinecap="round" />
        <circle cx="122.5" cy="261" r="1.6" fill="#E8DFD1" />
      </g>
    );
  }
  return null;
};

const renderBottom = (bottomId: ClothingId | null) => {
  if (!bottomId) {
    // Cozy basic cream shorts underneath
    return (
      <path
        d="M86 196H134L137 219C137.3 221.5 135 223 132.5 223H114L110 214L106 223H87.5C85 223 82.7 221.5 83 219L86 196Z"
        fill="#E5DCCB"
        stroke={LINE}
        strokeWidth="2.4"
        strokeLinejoin="round"
      />
    );
  }
  switch (bottomId) {
    case 'indigo-denim-skirt':
      return (
        <g>
          <path
            d="M85 194H135L144 226C144.8 229 142.5 231.5 139.2 231.5H80.8C77.5 231.5 75.2 229 76 226L85 194Z"
            fill="#3B5682"
            stroke={LINE}
            strokeWidth="2.6"
            strokeLinejoin="round"
          />
          <path d="M84 202H136" stroke="#E0A95B" strokeWidth="1.4" strokeDasharray="3 2.5" />
          <path d="M77.5 227.5H142.5" stroke="#E0A95B" strokeWidth="1.4" strokeDasharray="3 2.5" />
          <path d="M110 201V230.5" stroke="#2A4064" strokeWidth="1.8" />
          <circle cx="110" cy="198.5" r="2.2" fill="#EBB85A" stroke={LINE} strokeWidth="1.3" />
          <path d="M84 211C90 210 93.5 206.5 94.5 202" stroke="#E0A95B" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M136 211C130 210 126.5 206.5 125.5 202" stroke="#E0A95B" strokeWidth="1.5" strokeLinecap="round" />
        </g>
      );
    case 'black-pleats-skirt':
      return (
        <g>
          <path
            d="M85 194H135L146 226.5C146.8 229.5 144.5 232 141 232H79C75.5 232 73.2 229.5 74 226.5L85 194Z"
            fill="#333031"
            stroke={LINE}
            strokeWidth="2.6"
            strokeLinejoin="round"
          />
          <path d="M84 202H136" stroke="#534D4D" strokeWidth="1.8" />
          <path
            d="M93 202L88 231M102 202L100 231M118 202L120 231M127 202L132 231"
            stroke="#5D5757"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </g>
      );
    case 'cream-corduroy-pants':
      return (
        <g>
          <path
            d="M85 194H135L140 256C140.2 258.5 138 260.5 135 260.5H117C114.5 260.5 112.5 258.8 112.2 256.2L110 225L107.8 256.2C107.5 258.8 105.5 260.5 103 260.5H85C82 260.5 79.8 258.5 80 256L85 194Z"
            fill="#ECE2CE"
            stroke={LINE}
            strokeWidth="2.6"
            strokeLinejoin="round"
          />
          <path
            d="M92 203L89 256M99 203L97.5 256M121 203L122.5 256M128 203L131 256"
            stroke="#D6C7AA"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
          <path d="M110 198V221" stroke={LINE} strokeWidth="1.8" strokeLinecap="round" />
        </g>
      );
    case 'charcoal-midi-skirt':
      return (
        <g>
          <path
            d="M85 194H135L141 245C141.3 248 139 250 136 250H114V234C114 231.5 110 230.5 110 233.5V250H84C81 250 78.7 248 79 245L85 194Z"
            fill="#5C5B61"
            stroke={LINE}
            strokeWidth="2.6"
            strokeLinejoin="round"
          />
          <path d="M84 202H136" stroke="#45444A" strokeWidth="1.8" />
          <path d="M91 208L88 244" stroke="#75747B" strokeWidth="2" strokeLinecap="round" opacity="0.55" />
        </g>
      );
    default:
      return null;
  }
};

const renderTop = (topId: ClothingId | null) => {
  if (!topId) {
    // Soft basic cream tee when no top is selected
    return (
      <path
        d="M93 147L73 157C68 159.5 66 166 67 173L77 177L83 169V198C83 200.5 85.5 202 88.5 202H131.5C134.5 202 137 200.5 137 198V169L143 177L153 173C154 166 152 159.5 147 157L127 147C122 152.5 116.5 154.5 110 154.5C103.5 154.5 98 152.5 93 147Z"
        fill="#FFFDF9"
        stroke={LINE}
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
    );
  }

  switch (topId) {
    case 'nordic-cardigan':
      return (
        <g>
          {/* Cozy chubby cardigan body + sleeves */}
          <path
            d="M93 146L73 157C68 160 66 167 66.5 174L68.5 186C69 189 72 190.5 75.5 189.5L82.5 187.5V199C82.5 202 85.5 204 89 204H131C134.5 204 137.5 202 137.5 199V187.5L144.5 189.5C148 190.5 151 189 151.5 186L153.5 174C154 167 152 160 147 157L127 146H93Z"
            fill="#E7D8BE"
            stroke={LINE}
            strokeWidth="2.6"
            strokeLinejoin="round"
          />
          {/* High ribbed zip collar */}
          <path
            d="M95 142.5C95 140 97.5 139 101 139H119C122.5 139 125 140 125 142.5V151.5C125 153.5 122 155 119 155H101C98 155 95 153.5 95 151.5V142.5Z"
            fill="#DAC7A5"
            stroke={LINE}
            strokeWidth="2.3"
          />
          {/* Nordic Jacquard Band across chest */}
          <rect x="83.5" y="161" width="53" height="16.5" fill="#6F5542" />
          <path
            d="M84 163.2L88 161L92 163.2L96 161L100 163.2L104 161L108 163.2L112 161L116 163.2L120 161L124 163.2L128 161L132 163.2L136 161"
            stroke="#FFFDF9"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          <path
            d="M84 175.5L88 177.5L92 175.5L96 177.5L100 175.5L104 177.5L108 175.5L112 177.5L116 175.5L120 177.5L124 175.5L128 177.5L132 175.5L136 177.5"
            stroke="#FFFDF9"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          {/* Mini golden snowflake/reindeer motifs */}
          <path d="M92 169H98M95 166V172M93 167L97 171M97 167L93 171" stroke="#F6D76B" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M122 169H128M125 166V172M123 167L127 171M127 167L123 171" stroke="#F6D76B" strokeWidth="1.5" strokeLinecap="round" />
          <polygon points="103,169 105,167 107,169 105,171" fill="#FFFDF9" />
          <polygon points="113,169 115,167 117,169 115,171" fill="#FFFDF9" />
          {/* Sleeve bands */}
          <path d="M68 170L79 167L80.5 173L69 176Z" fill="#6F5542" />
          <path d="M152 170L141 167L139.5 173L151 176Z" fill="#6F5542" />
          {/* Center zipper & ring pull */}
          <path d="M110 140V203.5" stroke={LINE} strokeWidth="2.2" />
          <circle cx="110" cy="157" r="2.7" fill="#F6D76B" stroke={LINE} strokeWidth="1.6" />
          {/* Ribbed hem */}
          <path d="M83 197H137" stroke={LINE} strokeWidth="1.9" />
          <path d="M90 198V203M97 198V203M123 198V203M130 198V203" stroke="#B7A07C" strokeWidth="1.5" strokeLinecap="round" />
        </g>
      );

    case 'cream-cable-knit':
      return (
        <g>
          <path
            d="M93 147L73 157C68 160 66 167 66.5 174L68.5 186C69 189 72 190.5 75.5 189.5L82.5 187.5V199C82.5 202 85.5 204 89 204H131C134.5 204 137.5 202 137.5 199V187.5L144.5 189.5C148 190.5 151 189 151.5 186L153.5 174C154 167 152 160 147 157L127 147C122.5 152.5 116.5 154.5 110 154.5C103.5 154.5 97.5 152.5 93 147Z"
            fill="#F6EFE1"
            stroke={LINE}
            strokeWidth="2.6"
            strokeLinejoin="round"
          />
          {/* Crew neck rib */}
          <path
            d="M93 147C97.5 153 103.5 155 110 155C116.5 155 122.5 153 127 147C123.5 144.5 117.5 143.5 110 143.5C102.5 143.5 96.5 144.5 93 147Z"
            fill="#EAE0CC"
            stroke={LINE}
            strokeWidth="2.2"
          />
          {/* Cable knit waves */}
          <path d="M97 160C95 164 99 168 97 172C95 176 99 180 97 184C95 188 99 191 97 194" stroke="#CBBBA0" strokeWidth="2.2" strokeLinecap="round" />
          <path d="M110 159C107.5 163.5 112.5 168 110 172.5C107.5 177 112.5 181.5 110 186C107.5 190 112 193 110 195" stroke="#BFA98A" strokeWidth="2.6" strokeLinecap="round" />
          <path d="M123 160C125 164 121 168 123 172C125 176 121 180 123 184C125 188 121 191 123 194" stroke="#CBBBA0" strokeWidth="2.2" strokeLinecap="round" />
          <path d="M83 197H137" stroke={LINE} strokeWidth="1.9" />
        </g>
      );

    case 'khaki-field-jacket':
      return (
        <g>
          <path
            d="M92 146L72 156C67 159 65 166 65.5 174L67.5 187C68 190 71.5 191.5 75 190.5L81.5 188.5V201C81.5 204 84.5 206 88 206H132C135.5 206 138.5 204 138.5 201V188.5L145 190.5C148.5 191.5 152 190 152.5 187L154.5 174C155 166 153 159 148 156L128 146H92Z"
            fill="#7E8865"
            stroke={LINE}
            strokeWidth="2.6"
            strokeLinejoin="round"
          />
          {/* Corduroy collar */}
          <path
            d="M93 146L105 158L110 152.5L115 158L127 146C122 143 116 142 110 142C104 142 98 143 93 146Z"
            fill="#7C563C"
            stroke={LINE}
            strokeWidth="2.2"
            strokeLinejoin="round"
          />
          <path d="M110 153V205.5" stroke={LINE} strokeWidth="2.1" />
          <circle cx="106.5" cy="166" r="1.9" fill={LINE} />
          <circle cx="106.5" cy="179" r="1.9" fill={LINE} />
          <circle cx="106.5" cy="192" r="1.9" fill={LINE} />
          {/* Two front utility pockets */}
          <rect x="86.5" y="180" width="15" height="15" rx="3" fill="#6D7756" stroke={LINE} strokeWidth="1.9" />
          <path d="M86.5 184.5H101.5" stroke={LINE} strokeWidth="1.8" />
          <rect x="118.5" y="180" width="15" height="15" rx="3" fill="#6D7756" stroke={LINE} strokeWidth="1.9" />
          <path d="M118.5 184.5H133.5" stroke={LINE} strokeWidth="1.8" />
        </g>
      );

    case 'navy-stripe-sweat':
      return (
        <g>
          <path
            d="M93 147L73 157C68 160 66 167 66.5 174L68.5 186C69 189 72 190.5 75.5 189.5L82.5 187.5V199C82.5 202 85.5 204 89 204H131C134.5 204 137.5 202 137.5 199V187.5L144.5 189.5C148 190.5 151 189 151.5 186L153.5 174C154 167 152 160 147 157L127 147H93Z"
            fill="#2E4060"
            stroke={LINE}
            strokeWidth="2.6"
            strokeLinejoin="round"
          />
          <path d="M83.5 164H136.5M83.5 176H136.5M83.5 188H136.5M83.5 199H136.5" stroke="#F8F3E6" strokeWidth="4.2" />
          <path d="M68 171L80 168M69 181L81 178" stroke="#F8F3E6" strokeWidth="3.4" strokeLinecap="round" />
          <path d="M152 171L140 168M151 181L139 178" stroke="#F8F3E6" strokeWidth="3.4" strokeLinecap="round" />
          {/* Re-stroke silhouette cleanly */}
          <path
            d="M93 147L73 157C68 160 66 167 66.5 174L68.5 186C69 189 72 190.5 75.5 189.5L82.5 187.5V199C82.5 202 85.5 204 89 204H131C134.5 204 137.5 202 137.5 199V187.5L144.5 189.5C148 190.5 151 189 151.5 186L153.5 174C154 167 152 160 147 157L127 147H93Z"
            stroke={LINE}
            strokeWidth="2.6"
            strokeLinejoin="round"
          />
          {/* White rugby collar */}
          <path
            d="M94 146L105 157.5L110 152L115 157.5L126 146C121 143 116 142 110 142C104 142 99 143 94 146Z"
            fill="#FFFDF9"
            stroke={LINE}
            strokeWidth="2.2"
            strokeLinejoin="round"
          />
          <rect x="107.8" y="152" width="4.4" height="10" rx="1.8" fill="#FFFDF9" stroke={LINE} strokeWidth="1.6" />
        </g>
      );

    case 'butter-tweed-jacket':
      return (
        <g>
          <path
            d="M93 147L74 157C69 160 67 167 67.5 174L69.5 185C70 188 73 189.5 76.5 188.5L83 186.5V196.5C83 199.5 86 201.5 89.5 201.5H130.5C134 201.5 137 199.5 137 196.5V186.5L143.5 188.5C147 189.5 150 188 150.5 185L152.5 174C153 167 151 160 146 157L127 147C122.5 152.5 116.5 154.5 110 154.5C103.5 154.5 97.5 152.5 93 147Z"
            fill="#F4DC94"
            stroke={LINE}
            strokeWidth="2.6"
            strokeLinejoin="round"
          />
          {/* Cream braided trim */}
          <path d="M94 148C98 153 103.5 155 110 155C116.5 155 122 153 126 148" stroke="#FFFDF9" strokeWidth="3" strokeLinecap="round" />
          <path d="M110 154V201" stroke="#FFFDF9" strokeWidth="3" />
          <path d="M110 154V201" stroke={LINE} strokeWidth="1.9" />
          {/* Gold dome buttons */}
          <circle cx="105.5" cy="165" r="2.3" fill="#EBB844" stroke={LINE} strokeWidth="1.4" />
          <circle cx="105.5" cy="177" r="2.3" fill="#EBB844" stroke={LINE} strokeWidth="1.4" />
          <circle cx="105.5" cy="189" r="2.3" fill="#EBB844" stroke={LINE} strokeWidth="1.4" />
          {/* Mini pockets */}
          <rect x="88" y="180" width="12.5" height="11" rx="2.5" fill="#EDD07D" stroke={LINE} strokeWidth="1.7" />
          <rect x="119.5" y="180" width="12.5" height="11" rx="2.5" fill="#EDD07D" stroke={LINE} strokeWidth="1.7" />
        </g>
      );

    default:
      return null;
  }
};

const renderAccessory = (accessoryId: ClothingId | null) => {
  if (!accessoryId) return null;
  switch (accessoryId) {
    case 'pearl-5-hairpin':
      return (
        <g transform="translate(65, 67) rotate(-28)">
          <rect x="0" y="0" width="28" height="7" rx="3.5" fill="#EBC463" stroke={LINE} strokeWidth="1.6" />
          {[4, 9, 14, 19, 24].map((cx, i) => (
            <g key={cx}>
              <circle
                cx={cx}
                cy="3.5"
                r={i === 2 ? 3.2 : 2.8}
                fill="#FAF5EB"
                stroke={LINE}
                strokeWidth="1.4"
              />
              <circle cx={cx - 0.8} cy="2.5" r="0.8" fill="#FFFFFF" />
            </g>
          ))}
        </g>
      );
    case 'cocoa-wool-beret':
      return (
        <g transform="translate(64, 24) rotate(7 50 28)">
          <path d="M51 11C53 6 56 4 58.5 3.5" stroke={LINE} strokeWidth="3" strokeLinecap="round" />
          <path
            d="M8 31C8 14 27 8 49 8C71 8 89 15 89 30C89 40 73 44 48 44C23 44 8 40 8 31Z"
            fill="#835D47"
            stroke={LINE}
            strokeWidth="2.8"
            strokeLinejoin="round"
          />
          <path d="M21 22C29 16 41 14 55 15" stroke="#A57B62" strokeWidth="3.2" strokeLinecap="round" opacity="0.7" />
        </g>
      );
    case 'tartan-ribbon-pin':
      return (
        <g transform="translate(56, 48) rotate(-22)">
          <path d="M16 17L7 31L13 28.5L15.5 32.5L19 19Z" fill="#A63739" stroke={LINE} strokeWidth="1.9" strokeLinejoin="round" />
          <path d="M22 17L31 31L25 28.5L22.5 32.5L19 19Z" fill="#A63739" stroke={LINE} strokeWidth="1.9" strokeLinejoin="round" />
          <path d="M18 14C12 5 2 5 1 13C0 20 8 23 18 17Z" fill="#C24345" stroke={LINE} strokeWidth="2.1" strokeLinejoin="round" />
          <path d="M20 14C26 5 36 5 37 13C38 20 30 23 20 17Z" fill="#C24345" stroke={LINE} strokeWidth="2.1" strokeLinejoin="round" />
          <path d="M5 13H15M23 13H33" stroke="#2D3C54" strokeWidth="1.5" opacity="0.75" />
          <path d="M10 9V17M28 9V17" stroke="#F6D76B" strokeWidth="1.1" opacity="0.85" />
          <rect x="15.5" y="11.5" width="7" height="7.5" rx="3" fill="#D45355" stroke={LINE} strokeWidth="2" />
        </g>
      );
    default:
      return null;
  }
};

export const AvatarStageSvg: React.FC<AvatarStageSvgProps> = ({
  appearance,
  outfit,
  className = 'w-52 h-64',
  compact = false,
}) => {
  return (
    <svg
      viewBox={compact ? '25 22 170 264' : '15 18 190 272'}
      fill="none"
      className={className}
      aria-label="Cozy ACNH Avatar"
    >
      {/* Ground soft cushion shadow */}
      <ellipse cx="110" cy="276" rx="45" ry="9" fill="#DFD2B8" opacity="0.72" />

      {/* 1. Back Hair */}
      {renderBackHair(appearance)}

      {/* 2. Chubby SD Arms & Hands */}
      <g>
        <path
          d="M84 156L70 184C67.5 189 69.5 195 74.5 196.5C79.2 198 83.5 195 85 190L92 169"
          fill={appearance.skinTone}
          stroke={LINE}
          strokeWidth="2.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M136 156L150 184C152.5 189 150.5 195 145.5 196.5C140.8 198 136.5 195 135 190L128 169"
          fill={appearance.skinTone}
          stroke={LINE}
          strokeWidth="2.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>

      {/* 3. Chubby SD Legs & Feet */}
      <g>
        <path
          d="M90 212H106V266C106 270 102.5 273 97.5 273C92.5 273 89.5 270 89.5 266L90 212Z"
          fill={appearance.skinTone}
          stroke={LINE}
          strokeWidth="2.6"
          strokeLinejoin="round"
        />
        <path
          d="M114 212H130L130.5 266C130.5 270 127.5 273 122.5 273C117.5 273 114 270 114 266V212Z"
          fill={appearance.skinTone}
          stroke={LINE}
          strokeWidth="2.6"
          strokeLinejoin="round"
        />
      </g>

      {/* 4. Socks Layer */}
      {renderSocks(outfit.socks)}

      {/* 5. Shoes Layer */}
      {renderShoes(outfit.shoes)}

      {/* 6. Bottoms Layer */}
      {renderBottom(outfit.bottom)}

      {/* 7. Neck */}
      <rect
        x="101"
        y="135"
        width="18"
        height="16"
        rx="7"
        fill={appearance.skinShadow}
        stroke={LINE}
        strokeWidth="2.4"
      />

      {/* 8. Tops / Outerwear Layer */}
      {renderTop(outfit.top)}

      {/* 9. Cute Ears & Big SD Head */}
      <circle cx="60" cy="106" r="10" fill={appearance.skinTone} stroke={LINE} strokeWidth="2.6" />
      <circle cx="160" cy="106" r="10" fill={appearance.skinTone} stroke={LINE} strokeWidth="2.6" />
      <ellipse
        cx="110"
        cy="98"
        rx="51"
        ry="45"
        fill={appearance.skinTone}
        stroke={LINE}
        strokeWidth="2.8"
      />
      {/* Gentle warm lower-chin shade */}
      <path
        d="M74 128C84 139 97 143 110 143C123 143 136 139 146 128C136 135 123 138 110 138C97 138 84 135 74 128Z"
        fill={appearance.skinShadow}
        opacity="0.55"
      />

      {/* 10. Face Expressions & Blush */}
      {renderFace(appearance)}

      {/* 11. Front Hair / Bangs */}
      {renderFrontHair(appearance)}

      {/* 12. Hair Accessory Layer */}
      {renderAccessory(outfit.accessory)}
    </svg>
  );
};
