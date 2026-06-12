import { Instagram, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative w-full overflow-hidden border-t-[5px] border-[#A27C2B] bg-[#F9F9F8] pb-[34px] pt-[40px]">
      <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-[120px]">
        <div className="flex flex-col gap-10 border-b border-transparent pb-[38px] md:flex-row md:items-start md:justify-between">
          <div className="max-w-[320px]">
            <img
              src="/images/logo.png"
              alt="Star Lab Products logo"
              className="h-[48px] w-auto object-contain"
            />

            <p
              className="mt-[14px] max-w-[270px] text-[14px] leading-[20px] text-[#555E65]"
              style={{ fontFamily: '"DM Sans", sans-serif' }}
            >
              We turn ideas into iconic brands with speed, strategy, and worldwide reach.
            </p>
          </div>

          <div className="flex flex-col gap-8 md:flex-row md:gap-[110px] md:pt-[4px]">
            <div
              className="space-y-[10px] text-[13.5px] font-medium text-[#555E65] cursor-pointer"
              style={{ fontFamily: '"DM Sans", sans-serif' }}
            >
              <div className="hover:text-black transition-colors">About</div>
              <div className="hover:text-black transition-colors">Brands</div>
              <div className="hover:text-black transition-colors">Team</div>
              <div className="hover:text-black transition-colors">Submit Idea</div>
            </div>

            <div
              className="space-y-[10px] text-[13.5px] font-medium text-[#555E65] cursor-pointer"
              style={{ fontFamily: '"DM Sans", sans-serif' }}
            >
              <div className="hover:text-black transition-colors">Star Lab Holdings</div>
              <div className="hover:text-black transition-colors">Star Lab Health</div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-4 text-[13px] text-[#8E969C] sm:flex-row sm:items-center sm:justify-between">
          <div style={{ fontFamily: '"DM Sans", sans-serif' }}>© 2026 Star Lab Holdings Inc.</div>
          <div className="flex items-center gap-[20px] text-[#1A1A1A]">
            <a href="#" className="hover:opacity-80 transition-opacity text-[#1A1A1A]">
              <Instagram size={24} strokeWidth={2} className="stroke-current" />
            </a>
            <a href="#" className="hover:opacity-80 transition-opacity text-[#1A1A1A]">
              <Linkedin size={20} className="fill-current stroke-none" />
            </a>
            <a href="#" className="hover:opacity-80 transition-opacity text-[#1A1A1A]">
              <Mail size={22} strokeWidth={1.8} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
