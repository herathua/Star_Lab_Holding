import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';

interface RequestBriefModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function RequestBriefModal({ isOpen, onClose }: RequestBriefModalProps) {
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTimeout(() => {
      onClose();
    }, 1000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.98, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98, y: 10 }}
            className="relative z-[110] w-full max-w-4xl overflow-hidden rounded-[10px] bg-[#f5f5f5] shadow-[0_35px_90px_-18px_rgba(0,0,0,0.35)]"
          >
            <button
              onClick={onClose}
              className="absolute right-4 top-4 text-gray-400 transition-colors hover:text-ink z-[120]"
            >
              <X size={20} />
            </button>

            <div className="grid gap-6 md:grid-cols-[2fr_1fr]">
              <div className="px-6 py-8 md:px-[75px] md:py-[57px]">
                <div className="mb-8 md:mb-[26px]">
                  <p
                    className="uppercase text-[#20282D]"
                    style={{
                      fontFamily: 'DM Sans, sans-serif',
                      fontSize: '16px',
                      fontWeight: 600,
                      lineHeight: '19px',
                      letterSpacing: '2px',
                    }}
                  >
                    SUBMIT IDEA
                  </p>
                  <h2
                    className="mt-2 text-[#1C2539] max-w-full"
                    style={{
                      fontFamily: 'Red Hat Display, sans-serif',
                      fontSize: '40px',
                      fontWeight: 700,
                      lineHeight: '65px',
                      maxWidth: '650px',
                    }}
                  >
                    Request the Full Tokenomics Brief
                  </h2>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4 w-full max-w-[650px]">
                  <input
                    required
                    type="text"
                    placeholder="Your Name"
                    className="w-full h-[51px] rounded-[10px] border border-[#EAEAEA] bg-white px-4 text-[15px] text-[#1C2539] placeholder:text-[#5D666F] focus:outline-none request-input"
                    style={{ fontFamily: 'DM Sans, sans-serif' }}
                  />
                  <input
                    required
                    type="email"
                    placeholder="Email"
                    className="w-full h-[51px] rounded-[10px] border border-[#EAEAEA] bg-white px-4 text-[15px] text-[#1C2539] placeholder:text-[#5D666F] focus:outline-none request-input"
                    style={{ fontFamily: 'DM Sans, sans-serif' }}
                  />
                  <textarea
                    required
                    placeholder="Brand Idea..."
                    rows={3}
                    className="w-full rounded-[10px] border border-[#EAEAEA] bg-white px-4 pt-[15px] text-[15px] text-[#1C2539] placeholder:text-[#5D666F] focus:outline-none resize-none request-input"
                    style={{ fontFamily: 'DM Sans, sans-serif' }}
                  />

                  <div>
                    <button
                      type="submit"
                      className="w-full max-w-[180px] rounded-[10px] bg-[#20282D] px-5 py-3 text-[15px] font-bold text-white transition-colors duration-300 hover:bg-[#1a2024] active:scale-95"
                      style={{ fontFamily: 'DM Sans, sans-serif' }}
                    >
                      Submit Request
                    </button>
                  </div>
                </form>
              </div>

            <div className="absolute top-1/2 right-0 translate-x-[50%] -translate-y-[45%] w-[500px] md:w-[750px] pointer-events-none hidden md:block">
              <img
                src="/images/star.png"
                alt=""
                className="w-full h-full object-contain rotate-[-30deg]"
              />
            </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
