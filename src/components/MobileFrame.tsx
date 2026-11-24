import React from 'react';
import { Compass, ShoppingBag } from 'lucide-react';
import { ScreenType } from '../types';
import { AcnhLeafIcon } from './svg/AcnhMotifs';

interface MobileFrameProps {
  activeScreen: ScreenType;
  onSelectScreen: (screen: ScreenType) => void;
  children: React.ReactNode;
}

export const MobileFrame: React.FC<MobileFrameProps> = ({
  activeScreen,
  onSelectScreen,
  children,
}) => {
  const isCozyMode = activeScreen !== 'pdp';

  const navItems: {
    id: ScreenType;
    label: string;
    sublabel: string;
  }[] = [
    { id: 'pdp', label: '29CM 상품', sublabel: 'SHOP' },
    { id: 'fitting', label: '피팅룸', sublabel: 'FITTING' },
    { id: 'feed', label: '#추구미', sublabel: 'FEED' },
  ];

  return (
    <div
      className={`min-h-screen w-full flex justify-center transition-colors duration-500 ${
        isCozyMode ? 'bg-[#EAE3D2]' : 'bg-[#E9E9E7]'
      }`}
    >
      {/* Centered 430px Mobile App Frame */}
      <div
        className={`relative w-full max-w-[430px] min-h-screen flex flex-col shadow-[0_0_50px_rgba(17,17,17,0.12)] transition-colors duration-300 ${
          isCozyMode
            ? 'bg-[#F8F5EC] border-x border-[#DFD4BF]'
            : 'bg-[#FFFFFF] border-x border-[#E2E2E2]'
        }`}
      >
        {/* Subtle Prototype Top Mode Strip */}
        <div
          className={`px-4 py-1.5 flex items-center justify-between text-[10px] font-bold tracking-[0.06em] transition-colors duration-300 ${
            isCozyMode
              ? 'bg-[#4A3F35] text-[#F8F5EC]'
              : 'bg-[#111111] text-[#FFFFFF]'
          }`}
        >
          <span className="flex items-center gap-1.5">
            <span
              className={`w-1.5 h-1.5 rounded-full ${
                isCozyMode ? 'bg-[#78D5B3]' : 'bg-[#FF4800]'
              }`}
            />
            {activeScreen === 'pdp' && '29CM · EDITORIAL PRODUCT DETAIL'}
            {activeScreen === 'fitting' && '29CM x COZY AVATAR FITTING ROOM'}
            {activeScreen === 'feed' && '29CM x #CHUGUMI COMMUNITY FEED'}
          </span>
          <span className="opacity-70">PROTOTYPE</span>
        </div>

        {/* Main Screen Content */}
        <main className="flex-1 relative">{children}</main>

        {/* Adaptive Bottom Tab Bar */}
        <nav
          aria-label="Primary navigation"
          className={`fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[430px] h-[64px] z-40 px-3 flex items-center justify-around transition-all duration-300 ${
            isCozyMode
              ? 'bg-[#FFFDF9]/96 backdrop-blur-md border-t-2 border-[#E5DAC5] text-[#4A3F35]'
              : 'bg-[#FFFFFF] border-t border-[#111111] text-[#111111]'
          }`}
        >
          {navItems.map((tab) => {
            const active = activeScreen === tab.id;
            const renderIcon = () => {
              if (tab.id === 'pdp') {
                return (
                  <ShoppingBag
                    className={`w-[19px] h-[19px] ${
                      active ? 'stroke-[2.4]' : 'stroke-[1.8]'
                    }`}
                  />
                );
              }
              if (tab.id === 'fitting') {
                return <AcnhLeafIcon className="w-[21px] h-[21px]" />;
              }
              return (
                <Compass
                  className={`w-[19px] h-[19px] ${
                    active ? 'stroke-[2.4]' : 'stroke-[1.8]'
                  }`}
                />
              );
            };

            if (!isCozyMode) {
              // 29CM Sharp Minimalist Tab Style
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => onSelectScreen(tab.id)}
                  className={`relative flex-1 h-full flex flex-col items-center justify-center gap-0.5 transition-opacity ${
                    active ? 'text-[#111111]' : 'text-[#8C8C8C] hover:text-[#111111]'
                  }`}
                >
                  {active && (
                    <span className="absolute top-0 inset-x-6 h-[2px] bg-[#111111]" />
                  )}
                  {renderIcon()}
                  <span className="text-[10.5px] font-bold tracking-[-0.01em]">
                    {tab.label}
                  </span>
                </button>
              );
            }

            // Cozy ACNH Pill Tab Style
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => onSelectScreen(tab.id)}
                className={`acnh-pill-press flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-2xl border-2 transition-all ${
                  active
                    ? 'bg-[#78D5B3] border-[#4A3F35] text-[#4A3F35] shadow-[0_2px_0_0_#4A3F35]'
                    : 'bg-transparent border-transparent text-[#8A7968] hover:text-[#4A3F35] hover:bg-[#F8F5EC]'
                }`}
              >
                {renderIcon()}
                <span className="text-[11.5px] font-extrabold tracking-[-0.01em]">
                  {tab.label}
                </span>
              </button>
            );
          })}
        </nav>
      </div>
    </div>
  );
};
