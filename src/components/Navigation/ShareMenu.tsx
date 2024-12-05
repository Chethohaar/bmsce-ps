import React, { useState } from 'react';
import { Share2, Instagram, Facebook, Twitter, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const ShareMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const shareLinks = [
    {
      name: 'Instagram',
      icon: Instagram,
      url: 'https://www.instagram.com/bmsce_acm?igsh=ZWsyM3ZmaWxwMzV3',
      color: 'hover:bg-pink-600'
    },
    {
      name: 'WhatsApp',
      icon: MessageCircle,
      url: `https://wa.me/?text=${encodeURIComponent('Check out this amazing Green Tech website! https://www.instagram.com/bmsce_acm?igsh=ZWsyM3ZmaWxwMzV3')}`,
      color: 'hover:bg-green-600'
    },
    {
      name: 'Twitter',
      icon: Twitter,
      url: `https://twitter.com/intent/tweet?url=${encodeURIComponent('https://www.instagram.com/bmsce_acm?igsh=ZWsyM3ZmaWxwMzV3')}&text=${encodeURIComponent('Check out this amazing Green Tech website!')}`,
      color: 'hover:bg-blue-400'
    },
    {
      name: 'Facebook',
      icon: Facebook,
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent('https://www.instagram.com/bmsce_acm?igsh=ZWsyM3ZmaWxwMzV3')}`,
      color: 'hover:bg-blue-600'
    }
  ];

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
        aria-label="Share"
      >
        <Share2 className="w-5 h-5 text-gray-600 dark:text-gray-300" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-40"
            />

            {/* Share Menu */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.2 }}
              className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden z-50"
            >
              <div className="p-2 space-y-1">
                {shareLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-gray-700 dark:text-gray-200 hover:text-white ${link.color} transition-colors`}
                    onClick={() => setIsOpen(false)}
                  >
                    <link.icon className="w-5 h-5" />
                    <span>{link.name}</span>
                  </a>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}; 