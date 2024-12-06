import { Home, HelpCircle, History, Mail, Shield, Maximize, Cast, Share2 } from 'lucide-react';
import { MenuItem } from './MenuItem';
import type { Page } from '../../types';
import type { GameState } from '../../types';

interface MenuItemsProps {
  currentPage: Page;
  onPageChange: (page: Page) => void;
  onClose: () => void;
  onFullscreen: () => void;
  onCast: () => void;
  onShare: () => void;
  gameState: GameState;
}

export function MenuItems({ 
  currentPage, 
  onPageChange, 
  onClose, 
  onFullscreen, 
  onCast,
  onShare 
}: MenuItemsProps) {
  const menuItems = [
    { icon: Home, label: 'Home', page: 'game' as const },
    { icon: HelpCircle, label: 'How to Play', page: 'how-to-play' as const },
    { icon: History, label: 'Recent Games', page: 'history' as const },
    { icon: Mail, label: 'Contact Us', page: 'contact' as const },
    { icon: Shield, label: 'Privacy Policy', page: 'privacy' as const },
  ];

  const handlePageChange = (page: Page) => {
    onPageChange(page);
    onClose();
  };

  return (
    <nav className="py-1 relative z-[100]">
      {menuItems.map((item) => (
        <MenuItem
          key={item.page}
          {...item}
          currentPage={currentPage}
          onClick={handlePageChange}
        />
      ))}
      
      <div className="border-t border-emerald-100 dark:border-emerald-800 my-1" />
      
      <button
        onClick={() => {
          onShare();
          onClose();
        }}
        className="w-full px-4 py-2 text-left flex items-center gap-3 text-emerald-800 dark:text-emerald-200 hover:bg-emerald-50 dark:hover:bg-emerald-800/50"
      >
        <Share2 className="w-4 h-4" />
        Share Game
      </button>

      <button
        onClick={() => {
          onFullscreen();
          onClose();
        }}
        className="w-full px-4 py-2 text-left flex items-center gap-3 text-emerald-800 dark:text-emerald-200 hover:bg-emerald-50 dark:hover:bg-emerald-800/50"
      >
        <Maximize className="w-4 h-4" />
        Toggle Fullscreen
      </button>
      
      <button
        onClick={() => {
          onCast();
          onClose();
        }}
        className="w-full px-4 py-2 text-left flex items-center gap-3 text-emerald-800 dark:text-emerald-200 hover:bg-emerald-50 dark:hover:bg-emerald-800/50"
      >
        <Cast className="w-4 h-4" />
        Cast to TV
      </button>
    </nav>
  );
}