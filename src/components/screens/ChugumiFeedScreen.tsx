import React, { useMemo, useState } from 'react';
import { ExternalLink, Hash, Heart, Sparkles, X } from 'lucide-react';
import { ClothingId, ClothingItem, FeedLook, SlotType } from '../../types';
import { CHUGUMI_FEED_LOOKS, CLOTHING_MAP, formatKRW } from '../../data/wardrobeData';
import { AvatarStageSvg } from '../svg/AvatarStageSvg';
import { ClothingIconSvg } from '../svg/ClothingIcons';
import { AcnhLeafIcon, HangerBadgeSvg } from '../svg/AcnhMotifs';

interface ChugumiFeedScreenProps {
  onApplyLookToMyAvatar: (look: FeedLook) => void;
  onOpenProductDetail: (id: ClothingId) => void;
}

const HASHTAG_FILTERS = [
  '#전체',
  '#연말노르딕룩',
  '#성수동카페룩',
  '#꾸안꾸미니멀',
  '#프렌치시크',
  '#빈티지캐주얼',
];

export const ChugumiFeedScreen: React.FC<ChugumiFeedScreenProps> = ({
  onApplyLookToMyAvatar,
  onOpenProductDetail,
}) => {
  const [selectedTag, setSelectedTag] = useState('#전체');
  const [likedLookIds, setLikedLookIds] = useState<Set<string>>(() => new Set(['look-winter-cozy']));
  const [poppingLikeId, setPoppingLikeId] = useState<string | null>(null);
  const [activeLook, setActiveLook] = useState<FeedLook | null>(null);

  const visibleLooks = useMemo(() => {
    if (selectedTag === '#전체') return CHUGUMI_FEED_LOOKS;
    return CHUGUMI_FEED_LOOKS.filter(
      (look) => look.hashtag === selectedTag || look.moodTags.includes(selectedTag),
    );
  }, [selectedTag]);

  const toggleLikeLook = (e: React.MouseEvent, lookId: string) => {
    e.stopPropagation();
    setPoppingLikeId(lookId);
    setLikedLookIds((prev) => {
      const next = new Set(prev);
      if (next.has(lookId)) next.delete(lookId);
      else next.add(lookId);
      return next;
    });
    window.setTimeout(() => setPoppingLikeId(null), 350);
  };

  const getLookItems = (look: FeedLook): ClothingItem[] => {
    const slots: SlotType[] = ['top', 'bottom', 'socks', 'shoes', 'accessory'];
    return slots
      .map((s) => (look.outfit[s] ? CLOTHING_MAP[look.outfit[s]!] : null))
      .filter((x): x is ClothingItem => x !== null);
  };

  return (
    <div className="min-h-full acnh-dot-bg text-[#4A3F35] pb-24">
      {/* Header */}
      <header className="sticky top-0 z-30 bg-[#F8F5EC]/92 backdrop-blur-md px-4 pt-3.5 pb-3 border-b-2 border-[#E5DAC5]/80">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-2xl bg-[#F6D76B] border-2 border-[#4A3F35] flex items-center justify-center shadow-acnh-sm">
              <Hash className="w-4 h-4 text-[#4A3F35] stroke-[2.6]" />
            </div>
            <div>
              <h1 className="text-[16px] font-extrabold tracking-[-0.02em] text-[#4A3F35] leading-none">
                #추구미 피드
              </h1>
              <p className="text-[10.5px] text-[#8A7968] mt-0.5">
                마음에 드는 유저 코디를 내 아바타에 원탭 피팅
              </p>
            </div>
          </div>
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#FFFDF9] border-2 border-[#E5DAC5] text-[10.5px] font-extrabold text-[#52B491]">
            <AcnhLeafIcon className="w-3.5 h-3.5" />
            <span>{CHUGUMI_FEED_LOOKS.length} OOTD</span>
          </span>
        </div>

        {/* Hashtag Filter Pills */}
        <div className="mt-3 flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-0.5">
          {HASHTAG_FILTERS.map((tag) => {
            const active = selectedTag === tag;
            return (
              <button
                key={tag}
                type="button"
                onClick={() => setSelectedTag(tag)}
                className={`acnh-pill-press shrink-0 px-3 py-1.5 rounded-full border-2 text-[11.5px] font-extrabold transition-colors ${
                  active
                    ? 'bg-[#78D5B3] border-[#4A3F35] text-[#4A3F35] shadow-[0_2px_0_0_#4A3F35]'
                    : 'bg-[#FFFDF9] border-[#E5DAC5] text-[#8A7968] hover:border-[#D6C7AC] hover:text-[#4A3F35]'
                }`}
              >
                {tag}
              </button>
            );
          })}
        </div>
      </header>

      {/* 2-Column Cozy Avatar Look Grid */}
      <section className="px-4 pt-4">
        <div className="grid grid-cols-2 gap-3">
          {visibleLooks.map((look) => {
            const liked = likedLookIds.has(look.id);
            const likeCount = look.likes + (liked ? 1 : 0);
            const itemCount = getLookItems(look).length;

            return (
              <div
                key={look.id}
                role="button"
                tabIndex={0}
                onClick={() => setActiveLook(look)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setActiveLook(look);
                  }
                }}
                className="group cursor-pointer rounded-3xl bg-[#FFFDF9] border-2 border-[#E5DAC5] hover:border-[#4A3F35] shadow-acnh overflow-hidden transition-all active:scale-[0.98] flex flex-col"
              >
                {/* Avatar Thumbnail Stage */}
                <div
                  className="relative pt-3 pb-1 px-2 flex flex-col items-center justify-center border-b-2 border-[#EFE6D5]"
                  style={{ backgroundColor: look.cardBg }}
                >
                  {/* Top-left item count chip */}
                  <span className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded-full bg-[#FFFDF9]/90 border border-[#E5DAC5] text-[9.5px] font-extrabold text-[#8A7968]">
                    {itemCount} items
                  </span>

                  {/* Top-right Like button */}
                  <button
                    type="button"
                    onClick={(e) => toggleLikeLook(e, look.id)}
                    className={`absolute top-2 right-2 px-2 py-1 rounded-full bg-[#FFFDF9]/95 border-[1.5px] border-[#E5DAC5] flex items-center gap-1 transition-colors hover:border-[#F4A69E] ${
                      poppingLikeId === look.id ? 'animate-acnh-pop' : ''
                    }`}
                    aria-label={`Like ${look.handle}`}
                  >
                    <Heart
                      className={`w-3 h-3 ${
                        liked
                          ? 'fill-[#F27D72] text-[#F27D72]'
                          : 'text-[#A1917F]'
                      }`}
                    />
                    <span className="text-[10px] font-extrabold text-[#4A3F35]">
                      {likeCount}
                    </span>
                  </button>

                  {/* Avatar SVG */}
                  <div className="mt-2 group-hover:-translate-y-1 transition-transform duration-300">
                    <AvatarStageSvg
                      appearance={look.appearance}
                      outfit={look.outfit}
                      compact
                      className="w-[126px] h-[168px]"
                    />
                  </div>
                </div>

                {/* Card Meta Info */}
                <div className="p-3 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="inline-block px-2 py-0.5 rounded-full bg-[#FDF6D8] border border-[#E8CF78] text-[10.5px] font-extrabold text-[#4A3F35]">
                      {look.hashtag}
                    </span>
                    <p className="text-[12px] font-extrabold text-[#4A3F35] mt-1.5 truncate">
                      {look.handle}
                    </p>
                    <p className="text-[10.5px] text-[#8A7968] mt-0.5 line-clamp-2 leading-[1.45]">
                      {look.caption}
                    </p>
                  </div>

                  <div className="mt-2.5 pt-2 border-t border-dashed border-[#E5DAC5] flex items-center justify-between text-[10.5px] font-extrabold text-[#52B491]">
                    <span>착장 아이템 보기</span>
                    <Sparkles className="w-3 h-3" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Look Detail Bottom-Sheet Modal */}
      {activeLook && (() => {
        const items = getLookItems(activeLook);
        const totalPrice = items.reduce((sum, i) => sum + i.price, 0);
        const liked = likedLookIds.has(activeLook.id);

        return (
          <div
            className="fixed inset-0 z-50 flex items-end justify-center bg-[#4A3F35]/45 backdrop-blur-[2px]"
            onClick={() => setActiveLook(null)}
          >
            <div
              className="w-full max-w-[430px] rounded-t-[32px] bg-[#FFFDF9] border-t-2 border-x-2 border-[#4A3F35] p-5 pb-7 animate-sheet-up max-h-[86vh] flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Top Bar */}
              <div className="flex items-center justify-between pb-3 border-b-2 border-dashed border-[#E5DAC5]">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-full bg-[#FDF6D8] border-2 border-[#4A3F35] text-[11px] font-extrabold text-[#4A3F35]">
                    {activeLook.hashtag}
                  </span>
                  <span className="text-[13px] font-extrabold text-[#4A3F35]">
                    {activeLook.handle}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setActiveLook(null)}
                  className="w-7 h-7 rounded-full bg-[#F8F5EC] border-2 border-[#E5DAC5] flex items-center justify-center text-[#4A3F35]"
                  aria-label="Close modal"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Avatar Mini Hero + Speech Bubble Caption */}
              <div
                className="mt-3 rounded-3xl border-2 border-[#E5DAC5] p-3 flex items-center gap-3"
                style={{ backgroundColor: activeLook.cardBg }}
              >
                <div className="w-20 h-24 rounded-2xl bg-[#FFFDF9]/85 border border-[#E5DAC5] flex items-center justify-center shrink-0 overflow-hidden">
                  <AvatarStageSvg
                    appearance={activeLook.appearance}
                    outfit={activeLook.outfit}
                    compact
                    className="w-[74px] h-[96px]"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="relative rounded-2xl bg-[#FFFDF9] border-2 border-[#E5DAC5] px-3 py-2 text-[11.5px] font-bold text-[#4A3F35] leading-[1.45]">
                    {activeLook.caption}
                  </div>
                  <div className="mt-2 flex items-center justify-between text-[11px]">
                    <span className="font-bold text-[#8A7968]">
                      총 {items.length}개 ·{' '}
                      <strong className="text-[#4A3F35]">{formatKRW(totalPrice)}</strong>
                    </span>
                    <button
                      type="button"
                      onClick={(e) => toggleLikeLook(e, activeLook.id)}
                      className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#FFFDF9] border border-[#E5DAC5] font-extrabold text-[#4A3F35]"
                    >
                      <Heart
                        className={`w-3 h-3 ${
                          liked ? 'fill-[#F27D72] text-[#F27D72]' : 'text-[#A1917F]'
                        }`}
                      />
                      <span>{activeLook.likes + (liked ? 1 : 0)}</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* 29CM Worn Item List */}
              <div className="mt-3.5 flex-1 overflow-y-auto no-scrollbar space-y-2 pr-0.5">
                <p className="text-[11px] font-extrabold text-[#8A7968] px-1">
                  착용한 29CM 아이템 목록
                </p>
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="rounded-2xl bg-[#F8F5EC] border-2 border-[#E5DAC5] p-2.5 flex items-center gap-3"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-[#FFFDF9] border border-[#E5DAC5] flex items-center justify-center shrink-0">
                      <ClothingIconSvg id={item.id} className="w-10 h-10" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-[10px] font-extrabold text-[#8A7968] uppercase">
                        {item.brand}
                      </p>
                      <p className="text-[12px] font-extrabold text-[#4A3F35] truncate">
                        {item.name}
                      </p>
                      <p className="text-[11.5px] font-extrabold text-[#52B491] mt-0.5">
                        {formatKRW(item.price)}
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => {
                        setActiveLook(null);
                        onOpenProductDetail(item.id);
                      }}
                      className="acnh-pill-press shrink-0 flex items-center gap-1 px-2.5 py-1.5 rounded-xl bg-[#FFFDF9] border-2 border-[#E5DAC5] text-[10.5px] font-extrabold text-[#4A3F35] hover:border-[#4A3F35]"
                    >
                      <span>29CM</span>
                      <ExternalLink className="w-3 h-3" />
                    </button>
                  </div>
                ))}
              </div>

              {/* Primary CTA: [내 아바타에 그대로 입혀보기] */}
              <div className="mt-4 pt-3 border-t-2 border-dashed border-[#E5DAC5]">
                <button
                  type="button"
                  onClick={() => {
                    const lookToApply = activeLook;
                    setActiveLook(null);
                    onApplyLookToMyAvatar(lookToApply);
                  }}
                  className="acnh-pill-press w-full py-3.5 rounded-2xl bg-[#78D5B3] border-2 border-[#4A3F35] text-[#4A3F35] text-[14px] font-extrabold shadow-acnh-mint flex items-center justify-center gap-2 hover:bg-[#86DEC0]"
                >
                  <HangerBadgeSvg className="w-4 h-4" />
                  <span>내 아바타에 그대로 입혀보기</span>
                  <Sparkles className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        );
      })()}
    </div>
  );
};
