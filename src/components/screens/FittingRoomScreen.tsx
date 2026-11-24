import React, { useMemo, useState } from 'react';
import {
  Check,
  ExternalLink,
  LayoutGrid,
  Palette,
  RotateCcw,
  ShoppingBag,
  Sparkles,
  X,
} from 'lucide-react';
import {
  AvatarAppearance,
  CategoryFilter,
  ClothingId,
  ClothingItem,
  EquippedOutfit,
  SlotType,
  StageViewMode,
  WardrobeTab,
} from '../../types';
import {
  CLOTHING_ITEMS,
  CLOTHING_MAP,
  FACE_STYLE_PRESETS,
  HAIR_COLOR_PRESETS,
  HAIR_STYLE_PRESETS,
  SKIN_TONE_PRESETS,
  formatKRW,
} from '../../data/wardrobeData';
import { AvatarStageSvg } from '../svg/AvatarStageSvg';
import { ClothingIconSvg } from '../svg/ClothingIcons';
import {
  AcnhLeafIcon,
  AvatarModeIcon,
  CategoryAccessoryIcon,
  CategoryBottomIcon,
  CategoryFootwearIcon,
  CategoryTopIcon,
  FlatlayModeIcon,
  HangerBadgeSvg,
  SparkleStarSvg,
} from '../svg/AcnhMotifs';

interface FittingRoomScreenProps {
  appearance: AvatarAppearance;
  onChangeAppearance: (next: AvatarAppearance) => void;
  outfit: EquippedOutfit;
  onToggleEquip: (item: ClothingItem) => void;
  onResetOutfit: () => void;
  activeTooltipItem: ClothingItem | null;
  onSelectTooltipItem: (item: ClothingItem) => void;
  likedIds: Set<ClothingId>;
  recentIds: ClothingId[];
  bounceTick: number;
  bannerMessage: string | null;
  onDismissBanner: () => void;
  onOpenProductDetail: (id: ClothingId) => void;
  onAddLookToBag: (items: ClothingItem[]) => void;
}

const WARDROBE_TABS: { id: WardrobeTab; label: string }[] = [
  { id: 'purchased', label: '구매한 옷' },
  { id: 'liked', label: '찜한 옷' },
  { id: 'recent', label: '최근 본 옷' },
];

const CATEGORY_FILTERS: {
  id: CategoryFilter;
  label: string;
  renderIcon: (cls: string) => React.ReactNode;
}[] = [
  {
    id: 'all',
    label: '전체',
    renderIcon: (cls) => <LayoutGrid className={cls} />,
  },
  {
    id: 'tops',
    label: '상의/아우터',
    renderIcon: (cls) => <CategoryTopIcon className={cls} />,
  },
  {
    id: 'bottoms',
    label: '하의',
    renderIcon: (cls) => <CategoryBottomIcon className={cls} />,
  },
  {
    id: 'footwear',
    label: '신발/양말',
    renderIcon: (cls) => <CategoryFootwearIcon className={cls} />,
  },
  {
    id: 'accessories',
    label: '액세서리',
    renderIcon: (cls) => <CategoryAccessoryIcon className={cls} />,
  },
];

export const FittingRoomScreen: React.FC<FittingRoomScreenProps> = ({
  appearance,
  onChangeAppearance,
  outfit,
  onToggleEquip,
  onResetOutfit,
  activeTooltipItem,
  onSelectTooltipItem,
  likedIds,
  recentIds,
  bounceTick,
  bannerMessage,
  onDismissBanner,
  onOpenProductDetail,
  onAddLookToBag,
}) => {
  const [viewMode, setViewMode] = useState<StageViewMode>('avatar');
  const [activeTab, setActiveTab] = useState<WardrobeTab>('purchased');
  const [categoryFilter, setCategoryFilter] = useState<CategoryFilter>('all');
  const [customizeOpen, setCustomizeOpen] = useState(false);
  const [summaryOpen, setSummaryOpen] = useState(false);
  const [clickedCardId, setClickedCardId] = useState<ClothingId | null>(null);
  const [bagSavedToast, setBagSavedToast] = useState(false);

  const equippedList = useMemo(() => {
    const slots: SlotType[] = ['top', 'bottom', 'socks', 'shoes', 'accessory'];
    return slots
      .map((s) => (outfit[s] ? CLOTHING_MAP[outfit[s]!] : null))
      .filter((x): x is ClothingItem => x !== null);
  }, [outfit]);

  const totalOutfitPrice = useMemo(
    () => equippedList.reduce((sum, item) => sum + item.price, 0),
    [equippedList],
  );

  const tabItems = useMemo(() => {
    if (activeTab === 'purchased') {
      return CLOTHING_ITEMS.filter((i) => i.tabs.includes('purchased'));
    }
    if (activeTab === 'liked') {
      return CLOTHING_ITEMS.filter((i) => likedIds.has(i.id));
    }
    // Recent tab preserves recent order + default recent tagged items
    const ordered: ClothingItem[] = [];
    const seen = new Set<ClothingId>();
    for (const id of recentIds) {
      if (!seen.has(id) && CLOTHING_MAP[id]) {
        ordered.push(CLOTHING_MAP[id]);
        seen.add(id);
      }
    }
    for (const item of CLOTHING_ITEMS) {
      if (item.tabs.includes('recent') && !seen.has(item.id)) {
        ordered.push(item);
        seen.add(item.id);
      }
    }
    return ordered;
  }, [activeTab, likedIds, recentIds]);

  const filteredItems = useMemo(() => {
    if (categoryFilter === 'all') return tabItems;
    return tabItems.filter((item) => item.category === categoryFilter);
  }, [tabItems, categoryFilter]);

  const isEquipped = (item: ClothingItem) => outfit[item.slot] === item.id;

  const handleCardClick = (item: ClothingItem) => {
    setClickedCardId(item.id);
    onToggleEquip(item);
    window.setTimeout(() => setClickedCardId(null), 380);
  };

  const handleSaveLookToBag = () => {
    onAddLookToBag(equippedList);
    setBagSavedToast(true);
    window.setTimeout(() => {
      setBagSavedToast(false);
      setSummaryOpen(false);
    }, 1100);
  };

  const flatlaySlots: {
    slot: SlotType;
    label: string;
    category: CategoryFilter;
    posClass: string;
    rot: string;
    sizeClass: string;
    floatClass: string;
  }[] = [
    {
      slot: 'accessory',
      label: '헤어 액세서리',
      category: 'accessories',
      posClass: 'top-3 left-5',
      rot: '-7deg',
      sizeClass: 'w-16 h-16',
      floatClass: 'animate-float-delay',
    },
    {
      slot: 'top',
      label: '상의 / 아우터',
      category: 'tops',
      posClass: 'top-5 left-1/2 -translate-x-1/2',
      rot: '2deg',
      sizeClass: 'w-28 h-28',
      floatClass: 'animate-float-slow',
    },
    {
      slot: 'socks',
      label: '양말',
      category: 'footwear',
      posClass: 'top-8 right-5',
      rot: '8deg',
      sizeClass: 'w-[70px] h-[70px]',
      floatClass: 'animate-float-delay',
    },
    {
      slot: 'bottom',
      label: '하의',
      category: 'bottoms',
      posClass: 'bottom-4 left-7',
      rot: '-4deg',
      sizeClass: 'w-24 h-24',
      floatClass: 'animate-float-slow',
    },
    {
      slot: 'shoes',
      label: '신발',
      category: 'footwear',
      posClass: 'bottom-3 right-6',
      rot: '5deg',
      sizeClass: 'w-24 h-24',
      floatClass: 'animate-float-delay',
    },
  ];

  return (
    <div className="min-h-full acnh-dot-bg text-[#4A3F35] pb-24 flex flex-col">
      {/* Cozy ACNH Fitting Room Header */}
      <header className="sticky top-0 z-30 bg-[#F8F5EC]/92 backdrop-blur-md px-4 pt-3 pb-2.5 flex items-center justify-between border-b-2 border-[#E5DAC5]/80">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-2xl bg-[#FFFDF9] border-2 border-[#4A3F35] flex items-center justify-center shadow-acnh-sm">
            <AcnhLeafIcon className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <h1 className="text-[15.5px] font-extrabold tracking-[-0.02em] text-[#4A3F35] leading-none">
                코지 피팅룸
              </h1>
              <span className="text-[9.5px] font-extrabold px-1.5 py-0.5 rounded-full bg-[#78D5B3]/35 text-[#2F6F58] border border-[#78D5B3]">
                29CM
              </span>
            </div>
            <p className="text-[10.5px] text-[#8A7968] mt-0.5">
              나만의 아바타로 옷장 믹스매치
            </p>
          </div>
        </div>

        <div className="flex items-center gap-1.5">
          <button
            type="button"
            onClick={onResetOutfit}
            className="acnh-pill-press w-8 h-8 rounded-2xl bg-[#FFFDF9] border-2 border-[#E5DAC5] flex items-center justify-center text-[#8A7968] hover:text-[#4A3F35] hover:border-[#4A3F35]"
            title="기본 착장으로 초기화"
            aria-label="Reset outfit"
          >
            <RotateCcw className="w-3.5 h-3.5 stroke-[2.3]" />
          </button>
          <button
            type="button"
            onClick={() => setSummaryOpen(true)}
            className="acnh-pill-press flex items-center gap-1.5 px-3 h-8 rounded-2xl bg-[#F6D76B] border-2 border-[#4A3F35] text-[#4A3F35] text-[11.5px] font-extrabold shadow-[0_2px_0_0_#4A3F35]"
          >
            <ShoppingBag className="w-3.5 h-3.5 stroke-[2.3]" />
            <span>착장 {equippedList.length}</span>
          </button>
        </div>
      </header>

      {/* Arrival Banner Toast (from Screen A or Screen C) */}
      {bannerMessage && (
        <div className="px-4 pt-2.5 animate-tooltip-in">
          <div className="rounded-2xl bg-[#E6F7F0] border-2 border-[#78D5B3] px-3.5 py-2 flex items-center justify-between gap-2 shadow-acnh-sm">
            <div className="flex items-center gap-2 text-[11.5px] font-bold text-[#2F6F58]">
              <Sparkles className="w-3.5 h-3.5 shrink-0 text-[#52B491]" />
              <span>{bannerMessage}</span>
            </div>
            <button
              type="button"
              onClick={onDismissBanner}
              className="text-[#52B491] hover:text-[#2F6F58] p-0.5"
              aria-label="Dismiss banner"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}

      {/* 1) TOP PREVIEW STAGE */}
      <section className="px-4 pt-3">
        <div className="relative rounded-3xl border-2 border-[#E5DAC5] bg-[#FFFDF9] shadow-acnh overflow-hidden">
          {/* View Mode Segmented Switcher */}
          <div className="px-3.5 pt-3 pb-2 flex items-center justify-between gap-2 relative z-20">
            <div className="inline-flex p-1 rounded-2xl bg-[#F2ECE0] border-2 border-[#E5DAC5]">
              <button
                type="button"
                onClick={() => setViewMode('avatar')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-[11.5px] font-extrabold transition-all ${
                  viewMode === 'avatar'
                    ? 'bg-[#78D5B3] text-[#4A3F35] border-2 border-[#4A3F35] shadow-[0_2px_0_0_#4A3F35]'
                    : 'text-[#8A7968] border-2 border-transparent hover:text-[#4A3F35]'
                }`}
              >
                <AvatarModeIcon className="w-3.5 h-3.5" />
                <span>아바타 착용</span>
              </button>
              <button
                type="button"
                onClick={() => setViewMode('flatlay')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-[11.5px] font-extrabold transition-all ${
                  viewMode === 'flatlay'
                    ? 'bg-[#F6D76B] text-[#4A3F35] border-2 border-[#4A3F35] shadow-[0_2px_0_0_#4A3F35]'
                    : 'text-[#8A7968] border-2 border-transparent hover:text-[#4A3F35]'
                }`}
              >
                <FlatlayModeIcon className="w-3.5 h-3.5" />
                <span>OOTD 보드</span>
              </button>
            </div>

            {viewMode === 'avatar' ? (
              <button
                type="button"
                onClick={() => setCustomizeOpen((prev) => !prev)}
                className={`acnh-pill-press flex items-center gap-1.5 px-2.5 py-1.5 rounded-2xl border-2 text-[11px] font-extrabold transition-colors ${
                  customizeOpen
                    ? 'bg-[#4A3F35] border-[#4A3F35] text-[#FFFDF9]'
                    : 'bg-[#FFFDF9] border-[#4A3F35] text-[#4A3F35] shadow-[0_2px_0_0_#E5DAC5]'
                }`}
              >
                <Palette className="w-3.5 h-3.5" />
                <span>아바타 꾸미기</span>
              </button>
            ) : (
              <span className="text-[10.5px] font-bold px-2.5 py-1 rounded-full bg-[#FDF6D8] border border-[#E5DAC5] text-[#8A7968]">
                총 {formatKRW(totalOutfitPrice)}
              </span>
            )}
          </div>

          {/* Stage Canvas Area */}
          {viewMode === 'avatar' ? (
            <div className="relative h-[268px] acnh-stage-bg flex items-center justify-center overflow-hidden">
              {/* Decorative Cozy Room Arch Window & Subtle Leaf Motifs */}
              <div className="absolute top-3 left-1/2 -translate-x-1/2 w-52 h-56 rounded-t-full border-2 border-dashed border-[#E5DAC5]/80 pointer-events-none" />
              <div className="absolute top-5 left-5 opacity-45 pointer-events-none">
                <AcnhLeafIcon className="w-6 h-6 -rotate-12" />
              </div>
              <div className="absolute bottom-6 right-5 opacity-40 pointer-events-none">
                <AcnhLeafIcon className="w-5 h-5 rotate-12" />
              </div>

              {/* Subtle Total Price Tag on left */}
              <button
                type="button"
                onClick={() => setSummaryOpen(true)}
                className="absolute bottom-3 left-3.5 z-10 px-2.5 py-1 rounded-2xl bg-[#FFFDF9]/90 border-2 border-[#E5DAC5] text-[10.5px] font-bold text-[#6F6052] hover:border-[#4A3F35] transition-colors"
              >
                코디 합계 <span className="text-[#4A3F35] font-extrabold">{formatKRW(totalOutfitPrice)}</span>
              </button>

              {/* Sparkle Burst Stars when item changes */}
              {bounceTick > 0 && (
                <div key={`sparkle-${bounceTick}`} className="pointer-events-none absolute inset-0 z-20">
                  <div className="absolute top-8 left-[28%] animate-sparkle-burst">
                    <SparkleStarSvg className="w-6 h-6" fill="#F6D76B" />
                  </div>
                  <div className="absolute top-14 right-[25%] animate-sparkle-burst">
                    <SparkleStarSvg className="w-5 h-5" fill="#78D5B3" />
                  </div>
                  <div className="absolute bottom-14 left-[26%] animate-sparkle-burst">
                    <SparkleStarSvg className="w-4 h-4" fill="#F4A69E" />
                  </div>
                </div>
              )}

              {/* 2.5-Head SD ACNH Avatar */}
              <div
                key={`avatar-bounce-${bounceTick}`}
                className={bounceTick > 0 ? 'animate-acnh-bounce' : 'animate-avatar-idle'}
              >
                <AvatarStageSvg
                  appearance={appearance}
                  outfit={outfit}
                  className="w-[205px] h-[258px] drop-shadow-[0_6px_8px_rgba(74,63,53,0.08)]"
                />
              </div>

              {/* Avatar Customization Floating Popover */}
              {customizeOpen && (
                <div className="absolute inset-x-3 bottom-2.5 top-2 z-30 rounded-3xl bg-[#FFFDF9]/98 border-2 border-[#4A3F35] shadow-lg p-3.5 overflow-y-auto no-scrollbar animate-tooltip-in">
                  <div className="flex items-center justify-between pb-2 mb-2.5 border-b-2 border-dashed border-[#E5DAC5]">
                    <span className="text-[12.5px] font-extrabold text-[#4A3F35] flex items-center gap-1.5">
                      <Palette className="w-3.5 h-3.5 text-[#52B491]" />
                      아바타 꾸미기
                    </span>
                    <button
                      type="button"
                      onClick={() => setCustomizeOpen(false)}
                      className="w-6 h-6 rounded-full bg-[#F8F5EC] border border-[#D6C7AC] flex items-center justify-center text-[#4A3F35]"
                      aria-label="Close avatar customizer"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  {/* Skin Tone */}
                  <div className="mb-3">
                    <p className="text-[10.5px] font-bold text-[#8A7968] mb-1.5">피부톤</p>
                    <div className="flex items-center gap-2">
                      {SKIN_TONE_PRESETS.map((skin) => {
                        const selected = appearance.skinTone === skin.color;
                        return (
                          <button
                            key={skin.id}
                            type="button"
                            onClick={() =>
                              onChangeAppearance({
                                ...appearance,
                                skinTone: skin.color,
                                skinShadow: skin.shadow,
                              })
                            }
                            className={`flex flex-col items-center gap-1 px-2 py-1 rounded-2xl border-2 transition-transform active:scale-95 ${
                              selected
                                ? 'border-[#4A3F35] bg-[#FDF6D8]'
                                : 'border-transparent hover:bg-[#F8F5EC]'
                            }`}
                          >
                            <span
                              className="w-6 h-6 rounded-full border-2 border-[#4A3F35]"
                              style={{ backgroundColor: skin.color }}
                            />
                            <span className="text-[9.5px] font-bold text-[#4A3F35]">
                              {skin.label}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Hair Style */}
                  <div className="mb-3">
                    <p className="text-[10.5px] font-bold text-[#8A7968] mb-1.5">헤어스타일</p>
                    <div className="grid grid-cols-4 gap-1.5">
                      {HAIR_STYLE_PRESETS.map((hs) => {
                        const selected = appearance.hairStyle === hs.id;
                        return (
                          <button
                            key={hs.id}
                            type="button"
                            onClick={() =>
                              onChangeAppearance({ ...appearance, hairStyle: hs.id })
                            }
                            className={`py-1.5 rounded-xl border-2 text-[11px] font-bold transition-all ${
                              selected
                                ? 'bg-[#78D5B3] border-[#4A3F35] text-[#4A3F35]'
                                : 'bg-[#F8F5EC] border-[#E5DAC5] text-[#6F6052]'
                            }`}
                          >
                            {hs.label}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Hair Color */}
                  <div className="mb-3">
                    <p className="text-[10.5px] font-bold text-[#8A7968] mb-1.5">헤어 컬러</p>
                    <div className="flex items-center gap-2">
                      {HAIR_COLOR_PRESETS.map((hc) => {
                        const selected = appearance.hairColor === hc.color;
                        return (
                          <button
                            key={hc.id}
                            type="button"
                            onClick={() =>
                              onChangeAppearance({
                                ...appearance,
                                hairColor: hc.color,
                                hairHighlight: hc.highlight,
                              })
                            }
                            className={`w-7 h-7 rounded-full border-2 flex items-center justify-center transition-transform active:scale-95 ${
                              selected
                                ? 'border-[#4A3F35] ring-2 ring-[#78D5B3]'
                                : 'border-[#D6C7AC]'
                            }`}
                            style={{ backgroundColor: hc.color }}
                            title={hc.label}
                            aria-label={hc.label}
                          >
                            {selected && <Check className="w-3.5 h-3.5 text-[#FFFDF9] stroke-[3]" />}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Eyes & Blush */}
                  <div>
                    <p className="text-[10.5px] font-bold text-[#8A7968] mb-1.5">눈 &amp; 볼터치</p>
                    <div className="grid grid-cols-4 gap-1.5">
                      {FACE_STYLE_PRESETS.map((face) => {
                        const selected = appearance.faceStyle === face.id;
                        return (
                          <button
                            key={face.id}
                            type="button"
                            onClick={() =>
                              onChangeAppearance({
                                ...appearance,
                                faceStyle: face.id,
                                blushColor: face.blush,
                              })
                            }
                            className={`py-1.5 rounded-xl border-2 text-[11px] font-bold transition-all ${
                              selected
                                ? 'bg-[#F6D76B] border-[#4A3F35] text-[#4A3F35]'
                                : 'bg-[#F8F5EC] border-[#E5DAC5] text-[#6F6052]'
                            }`}
                          >
                            {face.label}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ) : (
            /* MODE 2: OOTD FLATLAY BOARD VIEW (No Avatar Body!) */
            <div className="relative h-[268px] acnh-flatlay-bg overflow-hidden">
              {/* Cute Decorative Tape / Stamp Label */}
              <div className="absolute top-2.5 left-1/2 -translate-x-1/2 pointer-events-none opacity-45">
                <span className="text-[9.5px] font-extrabold tracking-[0.22em] text-[#8A7968] uppercase">
                  TODAY&apos;S OOTD BOARD
                </span>
              </div>

              {flatlaySlots.map((slotMeta) => {
                const itemId = outfit[slotMeta.slot];
                const item = itemId ? CLOTHING_MAP[itemId] : null;
                const isFocused = item && activeTooltipItem?.id === item.id;

                return (
                  <div
                    key={slotMeta.slot}
                    className={`absolute ${slotMeta.posClass}`}
                  >
                    {item ? (
                      <button
                        type="button"
                        onClick={() => onSelectTooltipItem(item)}
                        style={{ '--float-rot': slotMeta.rot } as React.CSSProperties}
                        className={`${slotMeta.floatClass} group relative flex flex-col items-center focus:outline-none`}
                      >
                        <div
                          className={`rounded-3xl p-1.5 transition-all ${
                            isFocused
                              ? 'bg-[#E6F7F0]/90 ring-2 ring-[#78D5B3] scale-105'
                              : 'hover:scale-105'
                          }`}
                        >
                          <ClothingIconSvg
                            id={item.id}
                            className={`${slotMeta.sizeClass} drop-shadow-[0_8px_10px_rgba(74,63,53,0.14)]`}
                          />
                        </div>
                        <span className="mt-0.5 px-2 py-0.5 rounded-full bg-[#FFFDF9]/95 border-[1.5px] border-[#4A3F35] text-[9.5px] font-extrabold text-[#4A3F35] shadow-acnh-sm whitespace-nowrap">
                          {item.shortName}
                        </span>
                      </button>
                    ) : (
                      <button
                        type="button"
                        onClick={() => setCategoryFilter(slotMeta.category)}
                        className="w-20 h-20 rounded-3xl border-2 border-dashed border-[#D6C7AC] bg-[#FFFDF9]/75 flex flex-col items-center justify-center text-[#A1917F] hover:border-[#78D5B3] hover:text-[#4A3F35] transition-colors"
                      >
                        <span className="text-[10px] font-bold">+ {slotMeta.label}</span>
                      </button>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Speech Bubble Tooltip with Cute Tail */}
        {activeTooltipItem && (
          <div
            key={`tooltip-${activeTooltipItem.id}-${bounceTick}`}
            className="relative mt-3 animate-tooltip-in"
          >
            {/* Upward speech bubble tail */}
            <div className="absolute -top-[7px] left-1/2 -translate-x-1/2 w-3.5 h-3.5 rotate-45 bg-[#FFFDF9] border-t-2 border-l-2 border-[#4A3F35] z-10" />
            <div className="relative rounded-3xl bg-[#FFFDF9] border-2 border-[#4A3F35] px-4 py-2.5 shadow-[0_3px_0_0_#E5DAC5] flex items-center justify-between gap-2.5">
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-1.5">
                  <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-[#FDF6D8] border border-[#E5C968] text-[#4A3F35] truncate max-w-[140px]">
                    {activeTooltipItem.brand}
                  </span>
                  <span className="text-[12px] font-extrabold text-[#4A3F35]">
                    {formatKRW(activeTooltipItem.price)}
                  </span>
                </div>
                <p className="text-[12px] font-bold text-[#6F6052] truncate mt-1">
                  {activeTooltipItem.name}
                </p>
              </div>
              <button
                type="button"
                onClick={() => onOpenProductDetail(activeTooltipItem.id)}
                className="acnh-pill-press shrink-0 flex items-center gap-1 px-2.5 py-1.5 rounded-2xl bg-[#E6F7F0] border-2 border-[#78D5B3] text-[11px] font-extrabold text-[#2F6F58] hover:bg-[#78D5B3] hover:text-[#4A3F35] transition-colors"
              >
                <span>상세</span>
                <ExternalLink className="w-3 h-3" />
              </button>
            </div>
          </div>
        )}
      </section>

      {/* 2) BOTTOM WARDROBE DRAWER */}
      <section className="mt-3.5 flex-1 rounded-t-[32px] bg-[#FFFDF9] border-t-2 border-x-2 border-[#E5DAC5] px-4 pt-3.5 pb-6 shadow-[0_-6px_20px_rgba(74,63,53,0.05)]">
        {/* Cute Drawer Grab Handle */}
        <div className="w-10 h-1.5 rounded-full bg-[#E5DAC5] mx-auto mb-3" />

        {/* 3 Wardrobe Source Tabs */}
        <div className="grid grid-cols-3 gap-1.5 p-1 rounded-2xl bg-[#F8F5EC] border-2 border-[#E5DAC5]">
          {WARDROBE_TABS.map((tab) => {
            const active = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`py-2 rounded-xl text-[12px] font-extrabold transition-all ${
                  active
                    ? 'bg-[#F6D76B] text-[#4A3F35] border-2 border-[#4A3F35] shadow-[0_2px_0_0_#4A3F35]'
                    : 'text-[#8A7968] border-2 border-transparent hover:text-[#4A3F35]'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Category Filter Chips with Custom SVG Icons */}
        <div className="mt-3 flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-1">
          {CATEGORY_FILTERS.map((cat) => {
            const active = categoryFilter === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setCategoryFilter(cat.id)}
                className={`acnh-pill-press shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-2xl border-2 text-[11.5px] font-extrabold transition-colors ${
                  active
                    ? 'bg-[#78D5B3] border-[#4A3F35] text-[#4A3F35] shadow-[0_2px_0_0_#4A3F35]'
                    : 'bg-[#FFFDF9] border-[#E5DAC5] text-[#8A7968] hover:border-[#D6C7AC] hover:text-[#4A3F35]'
                }`}
              >
                {cat.renderIcon('w-3.5 h-3.5 shrink-0')}
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Clothing Items Grid (2.5D ACNH SVG Icons) */}
        {filteredItems.length === 0 ? (
          <div className="mt-6 py-10 rounded-3xl border-2 border-dashed border-[#E5DAC5] bg-[#F8F5EC]/60 text-center">
            <p className="text-[12.5px] font-bold text-[#8A7968]">
              이 카테고리에 담긴 옷이 아직 없어요
            </p>
            <button
              type="button"
              onClick={() => setCategoryFilter('all')}
              className="mt-2.5 px-3.5 py-1.5 rounded-full bg-[#78D5B3] border-2 border-[#4A3F35] text-[11.5px] font-extrabold text-[#4A3F35]"
            >
              전체 옷 보기
            </button>
          </div>
        ) : (
          <div className="mt-3 grid grid-cols-3 gap-2.5">
            {filteredItems.map((item) => {
              const worn = isEquipped(item);
              const popping = clickedCardId === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handleCardClick(item)}
                  className={`relative rounded-3xl border-2 p-2 text-left transition-all flex flex-col items-center ${
                    popping ? 'animate-acnh-pop' : ''
                  } ${
                    worn
                      ? 'bg-[#E6F7F0]/70 border-[#78D5B3] shadow-[0_3px_0_0_#78D5B3]'
                      : 'bg-[#F8F5EC]/70 border-[#E5DAC5] hover:border-[#D6C7AC] shadow-[0_3px_0_0_#E5DAC5]'
                  }`}
                >
                  {/* Equipped Mint Hanger + Check Badge */}
                  {worn && (
                    <span
                      className="absolute -top-1.5 -right-1.5 z-10 w-6 h-6 rounded-full bg-[#78D5B3] border-2 border-[#4A3F35] text-[#4A3F35] flex items-center justify-center shadow-sm"
                      title="착용 중"
                    >
                      <HangerBadgeSvg className="w-3.5 h-3.5" />
                    </span>
                  )}

                  {/* 2.5D ACNH Clothing Icon */}
                  <div className="w-full aspect-square rounded-2xl bg-[#FFFDF9] border border-[#EDE4D3] flex items-center justify-center p-1.5">
                    <ClothingIconSvg id={item.id} className="w-[66px] h-[66px]" />
                  </div>

                  {/* Compact Label */}
                  <div className="w-full mt-1.5 px-0.5 text-center">
                    <p className="text-[9px] font-extrabold text-[#9A8A79] truncate uppercase tracking-[0.02em]">
                      {item.brand}
                    </p>
                    <p className="text-[11px] font-extrabold text-[#4A3F35] truncate leading-tight mt-0.5">
                      {item.shortName}
                    </p>
                    <p className="text-[10px] font-bold text-[#6F6052] mt-0.5">
                      {formatKRW(item.price)}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        )}
      </section>

      {/* Cozy Outfit Summary & One-Tap Cart Sheet */}
      {summaryOpen && (
        <div
          className="fixed inset-0 z-50 flex items-end justify-center bg-[#4A3F35]/40 backdrop-blur-[2px]"
          onClick={() => setSummaryOpen(false)}
        >
          <div
            className="w-full max-w-[430px] rounded-t-[32px] bg-[#FFFDF9] border-t-2 border-x-2 border-[#4A3F35] p-5 pb-7 animate-sheet-up"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 border-b-2 border-dashed border-[#E5DAC5]">
              <div className="flex items-center gap-2">
                <AcnhLeafIcon className="w-5 h-5" />
                <h2 className="text-[15.5px] font-extrabold text-[#4A3F35]">
                  현재 착용 중인 29CM 착장 ({equippedList.length})
                </h2>
              </div>
              <button
                type="button"
                onClick={() => setSummaryOpen(false)}
                className="w-7 h-7 rounded-full bg-[#F8F5EC] border-2 border-[#E5DAC5] flex items-center justify-center text-[#4A3F35]"
                aria-label="Close summary modal"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="mt-3 space-y-2 max-h-[45vh] overflow-y-auto no-scrollbar">
              {equippedList.map((item) => (
                <div
                  key={item.id}
                  className="rounded-2xl bg-[#F8F5EC] border-2 border-[#E5DAC5] p-2.5 flex items-center gap-3"
                >
                  <div className="w-12 h-12 rounded-2xl bg-[#FFFDF9] border border-[#E5DAC5] flex items-center justify-center shrink-0">
                    <ClothingIconSvg id={item.id} className="w-10 h-10" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-[10px] font-extrabold text-[#8A7968]">{item.brand}</p>
                    <p className="text-[12.5px] font-extrabold text-[#4A3F35] truncate">
                      {item.name}
                    </p>
                    <p className="text-[11.5px] font-bold text-[#52B491]">
                      {formatKRW(item.price)}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      setSummaryOpen(false);
                      onOpenProductDetail(item.id);
                    }}
                    className="px-2.5 py-1.5 rounded-xl bg-[#FFFDF9] border-2 border-[#E5DAC5] text-[10.5px] font-extrabold text-[#4A3F35] hover:border-[#4A3F35]"
                  >
                    상세
                  </button>
                </div>
              ))}
            </div>

            <div className="mt-4 pt-3 border-t-2 border-dashed border-[#E5DAC5]">
              <div className="flex items-center justify-between mb-3">
                <span className="text-[12.5px] font-bold text-[#8A7968]">코디 총 금액</span>
                <span className="text-[18px] font-extrabold text-[#4A3F35]">
                  {formatKRW(totalOutfitPrice)}
                </span>
              </div>
              <button
                type="button"
                onClick={handleSaveLookToBag}
                className="acnh-pill-press w-full py-3 rounded-2xl bg-[#78D5B3] border-2 border-[#4A3F35] text-[#4A3F35] text-[13.5px] font-extrabold shadow-acnh-mint flex items-center justify-center gap-2"
              >
                {bagSavedToast ? (
                  <>
                    <Check className="w-4 h-4 stroke-[2.6]" />
                    <span>29CM 장바구니에 일괄 담기 완료!</span>
                  </>
                ) : (
                  <>
                    <ShoppingBag className="w-4 h-4 stroke-[2.3]" />
                    <span>착장 아이템 한 번에 장바구니 담기</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
