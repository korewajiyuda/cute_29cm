import React, { useState } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Heart,
  Share2,
  ShoppingBag,
  Star,
  Truck,
  Check,
  Sparkles,
} from 'lucide-react';
import { ClothingId, ClothingItem } from '../../types';
import { CLOTHING_ITEMS, formatKRW } from '../../data/wardrobeData';
import { ProductEditorialSvg } from '../svg/ProductEditorialSvg';
import { ClothingIconSvg } from '../svg/ClothingIcons';
import { AcnhLeafIcon, MiniAvatarBadgeSvg } from '../svg/AcnhMotifs';

interface ProductDetailScreenProps {
  product: ClothingItem;
  isLiked: boolean;
  onToggleLike: (id: ClothingId) => void;
  onSelectProduct: (id: ClothingId) => void;
  onTryOnAvatar: (item: ClothingItem) => void;
  bagCount: number;
  onAddToBag: (item: ClothingItem) => void;
}

export const ProductDetailScreen: React.FC<ProductDetailScreenProps> = ({
  product,
  isLiked,
  onToggleLike,
  onSelectProduct,
  onTryOnAvatar,
  bagCount,
  onAddToBag,
}) => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [brandFollowed, setBrandFollowed] = useState(false);
  const [justAdded, setJustAdded] = useState(false);

  const relatedItems = CLOTHING_ITEMS.filter((i) => i.id !== product.id).slice(0, 4);

  const handleBuyClick = () => {
    onAddToBag(product);
    setJustAdded(true);
    window.setTimeout(() => setJustAdded(false), 1600);
  };

  const slides = [
    { label: 'STUDIO' },
    { label: 'DETAIL' },
    { label: 'SPEC' },
  ];

  return (
    <div className="relative min-h-full bg-[#FFFFFF] text-[#111111] font-editorial pb-36">
      {/* 29CM Sharp Minimalist Top Header */}
      <header className="sticky top-0 z-30 bg-[#FFFFFF]/95 backdrop-blur-sm border-b border-[#111111] px-4 h-12 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <button
            type="button"
            onClick={() => onSelectProduct('nordic-cardigan')}
            className="p-1 -ml-1 hover:opacity-60 transition-opacity"
            aria-label="Back to main editorial product"
          >
            <ChevronLeft className="w-5 h-5 stroke-[1.8]" />
          </button>
          <span className="text-[17px] font-black tracking-[-0.04em] leading-none">
            29CM
          </span>
          <span className="text-[10px] font-medium tracking-[0.12em] text-[#767676] uppercase border-l border-[#D8D8D8] pl-2.5">
            SELECT SHOP
          </span>
        </div>
        <div className="flex items-center gap-3.5">
          <button
            type="button"
            className="hover:opacity-60 transition-opacity"
            aria-label="Share product"
          >
            <Share2 className="w-[18px] h-[18px] stroke-[1.7]" />
          </button>
          <button
            type="button"
            onClick={handleBuyClick}
            className="relative hover:opacity-60 transition-opacity"
            aria-label="Shopping bag"
          >
            <ShoppingBag className="w-[19px] h-[19px] stroke-[1.7]" />
            {bagCount > 0 && (
              <span className="absolute -top-1.5 -right-2 min-w-[16px] h-4 px-1 bg-[#111111] text-[#FFFFFF] text-[9px] font-bold flex items-center justify-center">
                {bagCount}
              </span>
            )}
          </button>
        </div>
      </header>

      {/* Editorial Product Visual Stage */}
      <section className="relative w-full aspect-[10/11] bg-[#F4F3EF] border-b border-[#111111] overflow-hidden">
        <ProductEditorialSvg item={product} slideIndex={slideIndex} />

        {/* Slide Switcher Controls */}
        <div className="absolute top-3.5 right-3.5 flex border border-[#111111] bg-[#FFFFFF]/90 backdrop-blur-xs">
          {slides.map((s, idx) => (
            <button
              key={s.label}
              type="button"
              onClick={() => setSlideIndex(idx)}
              className={`px-2.5 py-1 text-[10px] font-semibold tracking-[0.08em] transition-colors ${
                slideIndex === idx
                  ? 'bg-[#111111] text-[#FFFFFF]'
                  : 'text-[#111111] hover:bg-[#F2F2F2]'
              }`}
            >
              {s.label}
            </button>
          ))}
        </div>

        {/* Exclusive badge */}
        {product.isExclusive && (
          <div className="absolute top-3.5 left-3.5 bg-[#111111] text-[#FFFFFF] px-2.5 py-1 text-[10px] font-bold tracking-[0.1em]">
            29CM 단독
          </div>
        )}
      </section>

      {/* Brand Strip */}
      <section className="px-5 py-3.5 border-b border-[#E8E8E8] flex items-center justify-between">
        <div>
          <div className="flex items-center gap-1.5">
            <span className="text-[13px] font-extrabold tracking-[0.04em] uppercase">
              {product.brand}
            </span>
            <ChevronRight className="w-3.5 h-3.5 text-[#767676]" />
          </div>
          <p className="text-[11px] text-[#767676] mt-0.5">{product.brandKr}</p>
        </div>
        <button
          type="button"
          onClick={() => setBrandFollowed((prev) => !prev)}
          className={`px-3 py-1.5 text-[11px] font-semibold border transition-colors ${
            brandFollowed
              ? 'border-[#111111] bg-[#111111] text-[#FFFFFF]'
              : 'border-[#111111] bg-[#FFFFFF] text-[#111111] hover:bg-[#F7F7F7]'
          }`}
        >
          {brandFollowed ? '팔로잉' : '브랜드 팔로우'}
        </button>
      </section>

      {/* Product Core Info */}
      <section className="px-5 py-5 border-b border-[#E8E8E8]">
        <div className="flex items-start justify-between gap-3">
          <h1 className="text-[19px] font-bold leading-[1.35] tracking-[-0.02em] text-[#111111]">
            {product.name}
          </h1>
          <button
            type="button"
            onClick={() => onToggleLike(product.id)}
            className="shrink-0 p-1.5 border border-[#E8E8E8] hover:border-[#111111] transition-colors"
            aria-label="Toggle wishlist"
          >
            <Heart
              className={`w-4 h-4 ${
                isLiked ? 'fill-[#FF4800] text-[#FF4800]' : 'text-[#111111]'
              }`}
            />
          </button>
        </div>

        {/* Rating row */}
        <div className="flex items-center gap-1.5 mt-2.5">
          <div className="flex items-center gap-0.5">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                className="w-3.5 h-3.5 fill-[#111111] text-[#111111]"
              />
            ))}
          </div>
          <span className="text-[12px] font-bold text-[#111111]">
            {product.rating.toFixed(1)}
          </span>
          <span className="text-[12px] text-[#767676] underline underline-offset-2">
            리뷰 {product.reviewCount}개 보기
          </span>
        </div>

        {/* Price Block */}
        <div className="mt-4 pt-4 border-t border-[#F0F0F0]">
          {product.originalPrice && (
            <div className="text-[12px] text-[#9A9A9A] line-through">
              {formatKRW(product.originalPrice)}
            </div>
          )}
          <div className="flex items-baseline gap-2 mt-0.5">
            {product.discountRate && (
              <span className="text-[22px] font-extrabold text-[#FF4800] tracking-[-0.02em]">
                {product.discountRate}%
              </span>
            )}
            <span className="text-[22px] font-extrabold text-[#111111] tracking-[-0.02em]">
              {formatKRW(product.price)}
            </span>
          </div>
          <div className="mt-2 inline-flex items-center gap-1.5 px-2 py-1 bg-[#F7F7F7] border border-[#E8E8E8] text-[11px] text-[#111111]">
            <span className="font-bold">첫 구매 10% 쿠폰 적용가</span>
            <span className="text-[#FF4800] font-bold">
              {formatKRW(Math.round(product.price * 0.9))}
            </span>
          </div>
        </div>

        {/* Inline ACNH Fitting Room Banner Callout inside PDP */}
        <button
          type="button"
          onClick={() => onTryOnAvatar(product)}
          className="mt-5 w-full group border-2 border-[#4A3F35] bg-[#F8F5EC] rounded-2xl p-3.5 flex items-center justify-between text-left transition-transform active:scale-[0.98] shadow-[0_3px_0_0_#E5DAC5] hover:bg-[#FFFDF9]"
        >
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-[#E6F7F0] border-2 border-[#78D5B3] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
              <MiniAvatarBadgeSvg className="w-9 h-9" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-full bg-[#78D5B3] text-[#4A3F35]">
                  NEW · 내 옷장 연동
                </span>
              </div>
              <p className="text-[13px] font-bold text-[#4A3F35] mt-1 leading-tight">
                내 아바타에 입혀보고 코디 맞춰보기
              </p>
              <p className="text-[11px] text-[#8A7968] mt-0.5">
                구매한 옷·찜한 옷과 바로 믹스매치
              </p>
            </div>
          </div>
          <div className="w-8 h-8 rounded-full bg-[#F6D76B] border-2 border-[#4A3F35] flex items-center justify-center shrink-0">
            <ChevronRight className="w-4 h-4 text-[#4A3F35] stroke-[2.5]" />
          </div>
        </button>
      </section>

      {/* Shipping & Color Info */}
      <section className="px-5 py-4 border-b border-[#E8E8E8] space-y-3 text-[12px]">
        <div className="flex items-start gap-4">
          <span className="w-16 shrink-0 text-[#767676] font-medium">배송정보</span>
          <div className="flex-1">
            <div className="flex items-center gap-1.5 font-semibold text-[#111111]">
              <Truck className="w-3.5 h-3.5 stroke-[2]" />
              <span>오늘 출발 예정 · 전 상품 무료배송</span>
            </div>
            <p className="text-[11px] text-[#767676] mt-0.5">
              오후 2시 이전 주문 시 당일 출고 (CJ대한통운)
            </p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <span className="w-16 shrink-0 text-[#767676] font-medium">컬러</span>
          <div className="flex items-center gap-2">
            <span
              className="w-4 h-4 border border-[#111111] inline-block"
              style={{ backgroundColor: product.swatchColor }}
            />
            <span className="font-medium text-[#111111]">{product.colorName}</span>
          </div>
        </div>
      </section>

      {/* Editorial Description Section */}
      <section className="px-5 py-6 border-b border-[#111111]">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-[11px] font-extrabold tracking-[0.18em] uppercase text-[#111111]">
            EDITORIAL NOTE
          </h2>
          <span className="text-[10px] text-[#767676] tracking-[0.08em]">
            CURATED BY 29CM
          </span>
        </div>
        <p className="text-[13.5px] leading-[1.72] text-[#222222] font-normal">
          {product.editorialNote}
        </p>

        <div className="mt-5 grid grid-cols-1 gap-2.5 border-t border-[#E8E8E8] pt-4 text-[12px]">
          <div className="flex justify-between gap-4">
            <span className="text-[#767676] shrink-0">MATERIAL</span>
            <span className="text-right font-medium text-[#111111]">{product.material}</span>
          </div>
          <div className="flex justify-between gap-4">
            <span className="text-[#767676] shrink-0">FIT &amp; TOUCH</span>
            <span className="text-right font-medium text-[#111111]">{product.fitNote}</span>
          </div>
        </div>
      </section>

      {/* Related 29CM Curation Items */}
      <section className="px-5 py-6 bg-[#FAFAFA]">
        <div className="flex items-center justify-between mb-3.5">
          <h2 className="text-[13px] font-bold tracking-[-0.01em] text-[#111111]">
            함께 매치하기 좋은 29CM 셀렉션
          </h2>
          <span className="text-[11px] text-[#767676]">클릭하여 상세 보기</span>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {relatedItems.map((rel) => (
            <button
              key={rel.id}
              type="button"
              onClick={() => {
                onSelectProduct(rel.id);
                setSlideIndex(0);
              }}
              className="group bg-[#FFFFFF] border border-[#E5E5E5] hover:border-[#111111] transition-colors text-left"
            >
              <div className="aspect-square bg-[#F5F4F0] flex items-center justify-center p-4 border-b border-[#EFEFEF]">
                <ClothingIconSvg
                  id={rel.id}
                  className="w-24 h-24 group-hover:scale-105 transition-transform"
                />
              </div>
              <div className="p-2.5">
                <p className="text-[10px] font-bold tracking-[0.04em] text-[#767676] truncate">
                  {rel.brand}
                </p>
                <p className="text-[12px] font-medium text-[#111111] truncate mt-0.5">
                  {rel.shortName}
                </p>
                <p className="text-[12px] font-bold text-[#111111] mt-1">
                  {formatKRW(rel.price)}
                </p>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* Floating ACNH-style [아바타에 입혀보기] Action Pill (bottom-right above buy bar) */}
      <div className="fixed bottom-[126px] left-1/2 -translate-x-1/2 w-full max-w-[430px] pointer-events-none z-40 px-4 flex justify-end">
        <div className="pointer-events-auto flex flex-col items-end">
          {/* Tiny speech bubble hint */}
          <div className="mb-1.5 mr-2 px-2.5 py-1 rounded-full bg-[#FFFDF9] border-2 border-[#4A3F35] text-[10.5px] font-bold text-[#4A3F35] shadow-acnh-sm flex items-center gap-1 animate-float-slow">
            <Sparkles className="w-3 h-3 text-[#52B491]" />
            <span>이 옷 바로 피팅하기</span>
          </div>
          <button
            type="button"
            onClick={() => onTryOnAvatar(product)}
            className="acnh-pill-press group flex items-center gap-2 pl-2.5 pr-4 py-2 rounded-full bg-[#78D5B3] border-2 border-[#4A3F35] text-[#4A3F35] shadow-acnh-float hover:bg-[#86DEC0]"
          >
            <span className="w-8 h-8 rounded-full bg-[#FFFDF9] border-2 border-[#4A3F35] flex items-center justify-center shrink-0 group-hover:animate-acnh-pop">
              <MiniAvatarBadgeSvg className="w-7 h-7" />
            </span>
            <span className="text-[13px] font-extrabold tracking-[-0.02em] whitespace-nowrap">
              아바타에 입혀보기
            </span>
            <AcnhLeafIcon className="w-4 h-4 -mr-0.5 shrink-0" />
          </button>
        </div>
      </div>

      {/* Sharp Minimalist 29CM Bottom Purchase Bar (sits right above app nav) */}
      <div className="fixed bottom-[64px] left-1/2 -translate-x-1/2 w-full max-w-[430px] z-30 bg-[#FFFFFF] border-t border-[#111111] px-4 py-2.5 flex items-center gap-2.5">
        <button
          type="button"
          onClick={() => onToggleLike(product.id)}
          className="w-11 h-11 border border-[#111111] flex flex-col items-center justify-center shrink-0 hover:bg-[#F7F7F7] transition-colors"
          aria-label="Wishlist"
        >
          <Heart
            className={`w-4 h-4 ${
              isLiked ? 'fill-[#FF4800] text-[#FF4800]' : 'text-[#111111]'
            }`}
          />
          <span className="text-[9px] font-semibold mt-0.5">
            {isLiked ? '찜함' : '찜'}
          </span>
        </button>
        <button
          type="button"
          onClick={handleBuyClick}
          className="flex-1 h-11 bg-[#111111] text-[#FFFFFF] text-[13.5px] font-bold tracking-[0.02em] hover:bg-[#2A2A2A] active:scale-[0.99] transition-all flex items-center justify-center gap-1.5"
        >
          {justAdded ? (
            <>
              <Check className="w-4 h-4" />
              <span>장바구니에 담겼습니다</span>
            </>
          ) : (
            <span>구매하기 · {formatKRW(product.price)}</span>
          )}
        </button>
      </div>
    </div>
  );
};
