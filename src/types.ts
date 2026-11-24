export type ScreenType = 'pdp' | 'fitting' | 'feed';

export type SlotType = 'top' | 'bottom' | 'socks' | 'shoes' | 'accessory';

export type CategoryFilter = 'all' | 'tops' | 'bottoms' | 'footwear' | 'accessories';

export type WardrobeTab = 'purchased' | 'liked' | 'recent';

export type StageViewMode = 'avatar' | 'flatlay';

export type ClothingId =
  | 'nordic-cardigan'
  | 'cream-cable-knit'
  | 'khaki-field-jacket'
  | 'navy-stripe-sweat'
  | 'butter-tweed-jacket'
  | 'indigo-denim-skirt'
  | 'black-pleats-skirt'
  | 'cream-corduroy-pants'
  | 'charcoal-midi-skirt'
  | 'white-lace-socks'
  | 'ivory-ribbed-socks'
  | 'camel-ugg-boots'
  | 'brown-penny-loafer'
  | 'black-maryjane'
  | 'pearl-5-hairpin'
  | 'cocoa-wool-beret'
  | 'tartan-ribbon-pin';

export interface ClothingItem {
  id: ClothingId;
  name: string;
  shortName: string;
  brand: string;
  brandKr: string;
  price: number;
  originalPrice?: number;
  discountRate?: number;
  slot: SlotType;
  category: Exclude<CategoryFilter, 'all'>;
  tabs: WardrobeTab[];
  colorName: string;
  swatchColor: string;
  editorialNote: string;
  material: string;
  fitNote: string;
  rating: number;
  reviewCount: number;
  isExclusive?: boolean;
}

export interface EquippedOutfit {
  top: ClothingId | null;
  bottom: ClothingId | null;
  socks: ClothingId | null;
  shoes: ClothingId | null;
  accessory: ClothingId | null;
}

export type HairStyleId = 'bob' | 'long-wave' | 'twin-bun' | 'ponytail';
export type FaceStyleId = 'sparkle' | 'happy' | 'sweet' | 'dreamy';

export interface AvatarAppearance {
  skinTone: string;
  skinShadow: string;
  hairStyle: HairStyleId;
  hairColor: string;
  hairHighlight: string;
  faceStyle: FaceStyleId;
  blushColor: string;
}

export interface FeedLook {
  id: string;
  handle: string;
  displayName: string;
  hashtag: string;
  moodTags: string[];
  caption: string;
  likes: number;
  cardBg: string;
  appearance: AvatarAppearance;
  outfit: EquippedOutfit;
}
