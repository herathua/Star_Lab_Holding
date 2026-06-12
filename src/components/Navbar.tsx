import React, { useState, useEffect, useRef } from 'react';

type NavbarProps = {
  onOpenModal: () => void;
};
import { Menu, X } from 'lucide-react';
import { motion } from 'motion/react';
import LogoBrand from './LogoBrand';

export default function Navbar({ onOpenModal }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [show, setShow] = useState(true);

  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY === 0) {
        setShow(true);
      } else if (currentScrollY > lastScrollY.current) {
        setShow(false);
      } else {
        setShow(true);
      }

      lastScrollY.current = currentScrollY;
    };

    const handleMouseMove = (e: MouseEvent) => {
      const inTopArea = e.clientY <= 60;

      if (window.scrollY > 0 && inTopArea) {
        setShow(true);
      }

      if (window.scrollY > 0 && !inTopArea && window.scrollY > 80) {
        setShow(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const handleMobileNavClick = (callback?: () => void) => {
    setIsOpen(false);
    if (callback) callback();
  };

  return (
    <motion.nav
      initial={{ y: 0 }}
      animate={{ y: show ? 0 : -100 }}
      transition={{ duration: 0.25, ease: 'easeInOut' }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-xl border-b border-gray-100"
    >
      <div className="max-w-7xl mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center"
        >
          <LogoBrand size="small" />
        </button>

        <div className="hidden md:flex items-center gap-10">
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-[18px] text-[#25282B] transition hover:text-[#CCA13A] py-4"
          >
            About
          </button>
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-[18px] text-[#25282B] transition hover:text-[#CCA13A] py-4"
          >
            Ecosystem
          </button>
          <button
            type="button"
            onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}
            className="text-[18px] text-[#25282B] transition hover:text-[#CCA13A] py-4"
          >
            Partners
          </button>

          <button
            onClick={onOpenModal}
            className="text-[18px] font-bold text-[#25282B] transition hover:text-[#CCA13A]"
          >
            Contact Us
          </button>
        </div>

        <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <motion.div
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.2, ease: 'easeInOut' }}
        className="overflow-hidden md:hidden border-t border-gray-100"
      >
        <div className="flex flex-col gap-2 px-4 pb-4 pt-3">
          <button
            type="button"
            onClick={() => handleMobileNavClick(() => window.scrollTo({ top: 0, behavior: 'smooth' }))}
            className="w-full rounded-[8px] px-4 py-3 text-left text-[16px] font-medium text-[#25282B] transition hover:bg-gray-100"
          >
            About
          </button>
          <button
            type="button"
            onClick={() => handleMobileNavClick(() => window.scrollTo({ top: 0, behavior: 'smooth' }))}
            className="w-full rounded-[8px] px-4 py-3 text-left text-[16px] font-medium text-[#25282B] transition hover:bg-gray-100"
          >
            Ecosystem
          </button>
          <button
            type="button"
            onClick={() => handleMobileNavClick(() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' }))}
            className="w-full rounded-[8px] px-4 py-3 text-left text-[16px] font-medium text-[#25282B] transition hover:bg-gray-100"
          >
            Partners
          </button>
          <button
            type="button"
            onClick={() => handleMobileNavClick(onOpenModal)}
            className="mt-2 rounded-[8px] border border-[#25282B] bg-white px-4 py-3 text-left text-[16px] font-bold text-[#25282B] transition hover:bg-[#25282B] hover:text-white"
          >
            Contact Us
          </button>
        </div>
      </motion.div>
    </motion.nav>
  );
}
