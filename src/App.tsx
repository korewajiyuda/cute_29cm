import React, { useCallback, useState } from 'react';
import {
  AvatarAppearance,
  ClothingId,
  ClothingItem,
  EquippedOutfit,
  FeedLook,
  ScreenType,
} from './types';
import {
  CLOTHING_ITEMS,
  CLOTHING_MAP,
  DEFAULT_APPEARANCE,
  DEFAULT_OUTFIT,
} from './data/wardrobeData';
import { MobileFrame } from './components/MobileFrame';
import { ProductDetailScreen } from './components/screens/ProductDetailScreen';
import { FittingRoomScreen } from './components/screens/FittingRoomScreen';
import { ChugumiFeedScreen } from './components/screens/ChugumiFeedScreen';

export const App: React.FC = () => {
  const [activeScreen, setActiveScreen] = useState<ScreenType>('pdp');
  const [selectedProductId, setSelectedProductId] =
    useState<ClothingId>('nordic-cardigan');
  const [appearance, setAppearance] = useState<AvatarAppearance>(DEFAULT_APPEARANCE);
  const [outfit, setOutfit] = useState<EquippedOutfit>(DEFAULT_OUTFIT);
  const [activeTooltipItem, setActiveTooltipItem] = useState<ClothingItem | null>(
    CLOTHING_MAP['nordic-cardigan'],
  );
  const [likedIds, setLikedIds] = useState<Set<ClothingId>>(
    () =>
      new Set(
        CLOTHING_ITEMS.filter((i) => i.tabs.includes('liked')).map((i) => i.id),
      ),
  );
  const [recentIds, setRecentIds] = useState<ClothingId[]>([
    'nordic-cardigan',
    'indigo-denim-skirt',
    'camel-ugg-boots',
    'khaki-field-jacket',
    'butter-tweed-jacket',
  ]);
  const [bagCount, setBagCount] = useState<number>(1);
  const [bounceTick, setBounceTick] = useState<number>(0);
  const [bannerMessage, setBannerMessage] = useState<string | null>(null);

  const triggerBounce = useCallback(() => {
    setBounceTick((prev) => prev + 1);
  }, []);

  const recordRecent = useCallback((id: ClothingId) => {
    setRecentIds((prev) => [id, ...prev.filter((item) => item !== id)]);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Screen A -> Screen B: Auto-equip the PDP product and jump to Fitting Room
  const handleTryOnFromPdp = (item: ClothingItem) => {
    setOutfit((prev) => ({
      ...prev,
      [item.slot]: item.id,
    }));
    setActiveTooltipItem(item);
    recordRecent(item.id);
    setBannerMessage(`${item.brand} '${item.shortName}' 아이템을 아바타에 입혀봤어요!`);
    setActiveScreen('fitting');
    triggerBounce();
    scrollToTop();
  };

  // Toggle equip/unequip inside Fitting Room
  const handleToggleEquip = (item: ClothingItem) => {
    setOutfit((prev) => {
      const alreadyWorn = prev[item.slot] === item.id;
      return {
        ...prev,
        [item.slot]: alreadyWorn ? null : item.id,
      };
    });
    setActiveTooltipItem(item);
    recordRecent(item.id);
    setBannerMessage(null);
    triggerBounce();
  };

  const handleResetOutfit = () => {
    setOutfit(DEFAULT_OUTFIT);
    setActiveTooltipItem(CLOTHING_MAP['nordic-cardigan']);
    setBannerMessage('노르딕 윈터 기본 착장으로 돌아왔어요!');
    triggerBounce();
  };

  // Screen C -> Screen B: Apply entire community look onto my avatar
  const handleApplyLookToMyAvatar = (look: FeedLook) => {
    setOutfit({ ...look.outfit });
    const heroItemId =
      look.outfit.top ||
      look.outfit.bottom ||
      look.outfit.shoes ||
      look.outfit.accessory;
    if (heroItemId) {
      setActiveTooltipItem(CLOTHING_MAP[heroItemId]);
    }
    setBannerMessage(
      `${look.handle}님의 ${look.hashtag} 코디를 내 아바타에 그대로 입혔어요!`,
    );
    setActiveScreen('fitting');
    triggerBounce();
    scrollToTop();
  };

  // Toggle wishlist item
  const handleToggleLike = (id: ClothingId) => {
    setLikedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  // Open any clothing item in Screen A (29CM PDP)
  const handleOpenProductDetail = (id: ClothingId) => {
    setSelectedProductId(id);
    recordRecent(id);
    setActiveScreen('pdp');
    scrollToTop();
  };

  const handleSelectScreen = (screen: ScreenType) => {
    setActiveScreen(screen);
    scrollToTop();
  };

  return (
    <MobileFrame activeScreen={activeScreen} onSelectScreen={handleSelectScreen}>
      {activeScreen === 'pdp' && (
        <ProductDetailScreen
          product={CLOTHING_MAP[selectedProductId]}
          isLiked={likedIds.has(selectedProductId)}
          onToggleLike={handleToggleLike}
          onSelectProduct={handleOpenProductDetail}
          onTryOnAvatar={handleTryOnFromPdp}
          bagCount={bagCount}
          onAddToBag={() => setBagCount((c) => c + 1)}
        />
      )}

      {activeScreen === 'fitting' && (
        <FittingRoomScreen
          appearance={appearance}
          onChangeAppearance={(next) => {
            setAppearance(next);
            triggerBounce();
          }}
          outfit={outfit}
          onToggleEquip={handleToggleEquip}
          onResetOutfit={handleResetOutfit}
          activeTooltipItem={activeTooltipItem}
          onSelectTooltipItem={setActiveTooltipItem}
          likedIds={likedIds}
          recentIds={recentIds}
          bounceTick={bounceTick}
          bannerMessage={bannerMessage}
          onDismissBanner={() => setBannerMessage(null)}
          onOpenProductDetail={handleOpenProductDetail}
          onAddLookToBag={(items) => setBagCount((c) => c + items.length)}
        />
      )}

      {activeScreen === 'feed' && (
        <ChugumiFeedScreen
          onApplyLookToMyAvatar={handleApplyLookToMyAvatar}
          onOpenProductDetail={handleOpenProductDetail}
        />
      )}
    </MobileFrame>
  );
};

export default App;
