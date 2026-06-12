import React, { useCallback, useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import Footer from './Footer';

type HeroProps = {
  onOpenModal: () => void;
};

const featureItems = [
  {
    title: 'A Loyalty Token',
    desc: 'Every time you shop a Star Lab product, any product, any brand, you earn $STAR. The loyalty currency for a 15-brand celebrity ecosystem, earned through real purchases.',
    icon: '/images/A-Loyalty-Token.png'
  },
  {
    title: 'A Staking Asset',
    desc: 'Hold and stake $STAR to unlock seven tiers of exclusive access, from early product drops to private events with founders and celebrity partners. The more you hold, the closer you get.',
    icon: '/images/A-Staking-Asset.png'
  },
  {
    title: 'A Yield Instrument',
    desc: "10% of Star Lab's total portfolio EBITDA is distributed quarterly to $STAR stakers. Real revenue from real products on real shelves. Distributed on-chain. Transparent. Audited.",
    icon: '/images/A-Yield-Instrument.png'
  }
];

export default function Hero({ onOpenModal }: HeroProps) {
  const [brandSlideIndex, setBrandSlideIndex] = useState(0);
  const [brandDirection, setBrandDirection] = useState<1 | -1>(1);
  const [brandAnimating, setBrandAnimating] = useState(false);
  const [brandHovering, setBrandHovering] = useState(false);
  const [teamSlideIndex, setTeamSlideIndex] = useState(0);
  const [teamAnimating, setTeamAnimating] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (ticking) return;
      ticking = true;

      window.requestAnimationFrame(() => {
        setScrollY(window.scrollY);
        ticking = false;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToBrands = () => {
    const element = document.getElementById('brands');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handlePreviousBrand = useCallback(() => {
    if (brandAnimating) {
      return;
    }

    setBrandDirection(-1);
    setBrandAnimating(true);
  }, [brandAnimating]);

  const handleNextBrand = useCallback(() => {
    if (brandAnimating) {
      return;
    }

    setBrandDirection(1);
    setBrandAnimating(true);
  }, [brandAnimating]);

  useEffect(() => {
    if (!brandHovering) {
      return undefined;
    }

    const interval = window.setInterval(() => {
      handleNextBrand();
    }, 4000);

    return () => window.clearInterval(interval);
  }, [brandHovering, handleNextBrand]);

  const brandCards = [
    {
      title: 'RESLTS:+',
      category: 'SKINCARE',
      frame: 'bg-[#FFFEFE]',
      backplate: 'bg-[#EEEEEE]',
      accent: 'bg-[#F6F2EE]',
      mockup: 'bg-gradient-to-b from-[#F7C1B5] to-[#E78A78]',
      details: 'bg-[#E7A28E]',
      image: '/images/Brestmask.png'
    },
    {
      title: 'SOOTHE STICK',
      category: 'SKINCARE',
      frame: 'bg-[#FFFEFE]',
      backplate: 'bg-[#DDF2FF]',
      accent: 'bg-[#CFEFFF]',
      mockup: 'bg-gradient-to-b from-[#7BD2F7] to-[#0B8CD9]',
      details: 'bg-[#F1F7FF]',
      image: '/images/footrelief.png'
    },
    {
      title: 'HIGH HEELS & HUSTLE',
      category: 'SKINCARE',
      frame: 'bg-[#FFFEFE]',
      backplate: 'bg-[#F54179]',
      accent: 'bg-[#FFADD5]',
      mockup: 'bg-gradient-to-b from-[#FFB2DA] to-[#F54179]',
      details: 'bg-[#FFE2EF]',
      image: '/images/coorlie.png'
    },
    {
      title: 'MOMPRO',
      category: 'SKINCARE',
      frame: 'bg-[#FFFEFE]',
      backplate: 'bg-[#E5DFD9]',
      accent: 'bg-[#CFC8BE]',
      mockup: 'bg-gradient-to-b from-[#C1B6D7] to-[#8C77B6]',
      details: 'bg-[#EFE8DA]',
      image: '/images/product1.png'
    },
    {
      title: 'HIGH HEELS & HUSTLE',
      category: 'SKINCARE',
      frame: 'bg-[#FFFEFE]',
      backplate: 'bg-[#F54179]',
      accent: 'bg-[#FFADD5]',
      mockup: 'bg-gradient-to-b from-[#FFB2DA] to-[#F54179]',
      details: 'bg-[#FFE2EF]',
      image: '/images/soothe.png'
    },
    {
      title: 'MOMPRO',
      category: 'SKINCARE',
      frame: 'bg-[#FFFEFE]',
      backplate: 'bg-[#E5DFD9]',
      accent: 'bg-[#CFC8BE]',
      mockup: 'bg-gradient-to-b from-[#C1B6D7] to-[#8C77B6]',
      details: 'bg-[#EFE8DA]',
      image: '/images/sukltz.png'
    }
  ];

  const brandRenderStartIndex = brandSlideIndex + (brandDirection === -1 && brandAnimating ? -1 : 0);
  const brandTrackCards = Array.from({ length: 4 }, (_, offset) => {
    const cardIndex = (brandRenderStartIndex + offset + brandCards.length) % brandCards.length;
    return brandCards[cardIndex];
  });
  const brandStep = 303;

  const teamCards = [
    {
      initials: 'AH',
      name: 'Andrea Horblitt',
      image: '/images/Andrea Horblitt.png',
      role: 'Founder & Chairperson,<br> Star Lab Holdings & Star Lab',
      bio: `Andrea Horblitt is the founder of Star Lab Products, a next-generation consumer product incubator focused on developing and scaling celebrity-driven brands.<br><br>

With nearly two decades of experience in branding, product development, celebrity partnerships, manufacturing, and viral marketing, Andrea began her career through the New York City nightlife scene, creating celebrity-driven promotions and experiential campaigns before influencer marketing became mainstream. She later launched SUKITZ, a candy and lifestyle brand recognized for one of the earliest large-scale fan participation campaigns on social media.<br><br>

The originality of Andrea’s marketing approach attracted the attention of legendary advertising icon George Lois, who became a mentor and helped shape her approach.`
    },
    {
      initials: 'JV',
      name: 'Josh Van Zyk',
      image: '/images/Josh Van Zak.png',
      role: 'Chief Operating Officer',
      bio: `Andrea Horblitt is the founder of Star Lab Products, a next-generation consumer product incubator focused on developing and scaling celebrity-driven brands.<br><br>

With nearly two decades of experience in branding, product development, celebrity partnerships, manufacturing, and viral marketing, Andrea began her career through the New York City nightlife scene, creating celebrity-driven promotions and experiential campaigns before influencer marketing became mainstream. She later launched SUKITZ, a candy and lifestyle brand recognized for one of the earliest large-scale fan participation campaigns on social media.<br><br>

The originality of Andrea’s marketing approach attracted the attention of legendary advertising icon George Lois, who helped shape her approach to branding, celebrity marketing, and consumer storytelling.<br><br>

In 2006, Andrea invented the original sticker wallet for the back of phones, filing U.S. Provisional Patent Application No. 60/789,557 for the Removable Reusable Wallet, which was later acquired by a marketing company for promotional and consumer applications.<br><br>

When developing products, Andrea focuses on innovation, convenience, consumer experience, and creating brands designed to deliver visible, real-world results.`
    },
    {
      initials: 'CP',
      name: 'Coleen Perrier',
      image: '/images/Colleen Ferrier.png',
      role: 'Brand Strategy Lead',
      bio: `Josh is an MIT graduate with a passion for enabling people to build the world in which they want to live. He has completed a postgraduate fellowship in systems biology at Harvard Medical School, received the Quest AI Award for Artificial Intelligence research, and led research at Yale University and the University of Cambridge.<br><br>

His research spans xenobiotic materials, international peace, and artificial intelligence, with projects featured in DEZEEN Magazine, Netflix's Abstract, the Wall Street Journal, the National Design Awards, the San Francisco Museum of Modern Art, Cooper Hewitt Museum, Centre Pompidou, and the Smithsonian Museum.<br><br>

Josh is an advisor to the MIT Media Lab and Engineering Innovation Group at MIT, as well as the Diagnostics Accelerator at Harvard Medical School. He has been designated a UNESCO Peace Fellow.`
    },
    {
      initials: 'KR',
      name: 'Kyle Ruddien',
      image: '/images/Kyle Rudden.png',
      role: 'Growth & Distribution',
      bio: `Kyle Rudden is an expert in global corporate finance, capital markets, and emerging technologies with experience across Wall Street and startup ecosystems.<br><br>

He started his career at J.P. Morgan Securities in Investment Banking (M&A) and Equity Capital Markets.<br><br>

As a former Institutional Investor-ranked equity analyst, he founded and led J.P. Morgan's Global Energy Research Group, overseeing coverage of $2 trillion in market cap and managing a team of over 20 senior analysts across the U.S., Europe, Asia, and South America.<br><br>

Kyle later co-founded an M&A advisory boutique (sold to Black & Veatch) specializing in energy-sector bankruptcies and distressed assets.<br><br>

Most recently, he co-founded a sustainability and impact investing research firm, where he collaborated with GRI and SASB on reporting/accounting standards, partnered with S&P and Bloomberg creating sustainability-related equity indexes, and developed blockchain-enabled sustainable supply chain commodity traceability technology.`
    },
    {
      initials: 'SP',
      name: 'Shayne Perrier',
      image: '/images/Shayne Ferrier.png',
      role: 'Creative Partnerships',
      bio: `Kyle Rudden is an expert in global corporate finance, capital markets, and emerging technologies with experience across Wall Street and startup ecosystems. He started his career at J.P. Morgan Securities in Investment Banking (M&A) and Equity Capital Markets. As a former Institutional Investor-ranked equity analyst, he founded and led J.P. Morgan's Global Energy Research Group, overseeing coverage of $2 trillion in market cap and managing a team of over 20 senior analysts across the U.S., Europe, Asia, and South America. Kyle later co-founded an M&A advisory boutique (sold to Black & Veatch) specializing in energy-sector bankruptcies and distressed assets. Most recently, he co-founded a sustainability and impact investing research firm, where he collaborated with GRI and SASB on reporting/accounting standards, partnered with S&P and Bloomberg creating sustainability-related equity indexes, and developed blockchain-enabled sustainable supply chain commodity traceability technology. Kyle's research is included in the Kellogg School of Management's MBA curriculum (FINC-946 Impact Investing), and he has contributed to numerous books.`
    }
  ];

  const renderWithBreaks = (text: string) =>
    text.split(/<br\s*\/?/gi).flatMap((segment, index) =>
      index === 0 ? [segment] : [<br key={index} />, segment]
    );

  const getInitials = (name: string) => {
    const words = name.trim().split(/\s+/);
    if (words.length === 0) return '';
    if (words.length === 1) return words[0].slice(0, 2).toUpperCase();
    return `${words[0][0]}${words[words.length - 1][0]}`.toUpperCase();
  };

  const handlePreviousTeam = () => {
    if (teamAnimating) return;
    setTeamAnimating(true);
    setTeamSlideIndex((i) => (i - 1 + teamCards.length) % teamCards.length);
  };

  const handleNextTeam = () => {
    if (teamAnimating) return;
    setTeamAnimating(true);
    setTeamSlideIndex((i) => (i + 1) % teamCards.length);
  };

  return (
    <div className="w-full overflow-hidden bg-white">
    
      <section className="relative w-full overflow-visible bg-white py-14 lg:py-[72px]">
        <motion.div
          className="hidden md:block absolute top-[42px] right-[-10px] w-[590px] aspect-square pointer-events-none rotate-[23deg] z-0"
          animate={{ y: scrollY * 0.03 }}
          transition={{ ease: 'easeOut', duration: 0.45 }}
        >
          <img
            src="/images/world.png"
            alt=""
            className="w-full h-full object-contain"
            loading="eager"
          />
        </motion.div>

        <motion.div
          className="hidden md:block absolute left-[-260px] top-[514px] w-[520px] aspect-square pointer-events-none -rotate-[36deg] z-1 opacity-90"
          animate={{ y: -scrollY * 0.04 }}
          transition={{ ease: 'easeOut', duration: 0.45 }}
        >
          <img
            src="/images/world.png"
            alt=""
            className="w-full h-full object-contain"
            loading="eager"
          />
        </motion.div>

        <div className="mx-auto flex max-w-[1200px] flex-col items-center gap-10 px-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: 'easeOut' }}
            className="w-full max-w-[1200px]"
          >
            <p className="uppercase text-[28px] sm:text-[32px] md:text-[50px] font-bold leading-[1] tracking-[0.18em] text-transparent bg-gradient-to-r from-[#D89E20] to-[#7A4F0B] bg-clip-text">
              WE DONT MAKE ORDINARY
            </p>

            <img
              src="/images/we-make-extraordinary.png"
              alt="We make extraordinary"
              className="mt-6 w-full max-w-[760px] object-contain"
            />

            <img
              src="/images/we-make-extraordinary-line.png"
              alt="Decorative underline"
              className="mt-4 w-full max-w-[490px] object-contain"
            />

            <p className="mt-6 max-w-[600px] text-[18px] leading-[30px] text-[#5D666F] sm:text-[20px]">
              Star Lab Products is a celebrity-powered product incubator and global distribution company. We turn ideas into iconic brands with speed, strategy, and worldwide reach.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <button
                onClick={scrollToBrands}
                className="flex h-[43px] min-w-[160px] items-center justify-center rounded-[8px] bg-gradient-to-b from-[#D89E20] to-[#7A4F0C] px-6 text-[16px] font-medium uppercase text-white transition-opacity hover:opacity-90"
                style={{ fontFamily: 'DM Sans, sans-serif' }}
              >
                EXPLORE BRANDS
              </button>

              <button
                onClick={onOpenModal}
                className="flex h-[43px] min-w-[160px] items-center justify-center rounded-[8px] border-[2px] border-[#25282B] bg-white px-6 text-[16px] font-extrabold uppercase text-[#25282B] transition-colors hover:bg-[#25282B] hover:text-white"
                style={{ fontFamily: 'DM Sans, sans-serif', lineHeight: '27px' }}
              >
                SUBMIT IDEA
              </button>
            </div>
          </motion.div>
        </div>
      </section>
      <section className="relative w-full bg-white py-20">
        <div className="mx-auto flex w-full max-w-[980px] flex-col items-center px-4 text-center">
          <div className="mb-8 flex h-[45px] w-[224px] items-center justify-center rounded-[6px] border border-[#25282B]">
            <span
              className="text-[16px] font-bold uppercase leading-[19px] tracking-[0.08em] text-[#25282B]"
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              ABOUT STAR LAB
            </span>
          </div>

          <h2
            className="max-w-[764px] text-[40px] font-bold leading-[1.08] text-[#25282B] sm:text-[48px] md:text-[60px]"
            style={{ fontFamily: 'Red Hat Display, sans-serif' }}
          >
            Fueling Ideas. Building Icons. Creating Value.
          </h2>

          <p
            className="mt-8 max-w-[804px] text-[20px] leading-[1.63] text-[#1C2539] sm:text-[22px]"
            style={{ fontFamily: 'DM Sans, sans-serif' }}
          >
            Star Lab Holdings is a next-generation holding company building and scaling iconic brands at the intersection of celebrities, consumer products, technology, wellness and Web3. We partner with visionary founders, creators, and innovators to develop culturally relevant brands with global impact. By combining strategic investment, creative storytelling, and operational expertise, Star Lab helps transform bold ideas into scalable, future-focused businesses.
          </p>
        </div>
      </section>
      <section className="relative w-full bg-[#F2F2F2] py-24">
        <div className="mx-auto flex w-full max-w-[1240px] flex-col items-center px-4 text-center">
          <div className="mb-6 inline-flex h-[45px] items-center justify-center rounded-[6px] border border-[#DDA221] bg-white px-5">
            <span
              className="text-[14px] font-bold uppercase leading-[19px] tracking-[0.18em] text-[#8D5C07]"
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              OUR ECOSYSTEMS
            </span>
          </div>

          <h2
            className="text-[46px] font-bold leading-[1.02] text-transparent bg-gradient-to-r from-[#DDA221] to-[#442200] bg-clip-text sm:text-[56px] md:text-[64px]"
            style={{ fontFamily: 'Red Hat Display, sans-serif' }}
          >
            Star Lab Ecosystem.
          </h2>

          <div className="mt-12 grid w-full gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {[
              {
                image: '/images/image1.png',
                title: 'STAR LAB PRODUCTS',
                text: 'Celebrity-powered consumer products across beauty, wellness, food, beverage and lifestyle.',
                button: 'VISIT PRODUCTS'
              },
              {
                image: '/images/image2.png',
                title: 'STAR LAB HEALTH',
                text: 'Advanced health, longevity, wellness, and preventative care brands built with science and innovation.',
                button: 'VISIT HEALTH'
              },
              {
                image: '/images/image3.png',
                title: 'STAR LAB TECH',
                text: 'Web3, AI, tokenized rewards, creator ecosystems and technology powering the future of commerce.',
                button: 'VISIT TECH'
              },
              {
                image: '/images/image4.png',
                title: 'STAR LAB BROKERAGE',
                text: 'Strategic talent partnerships, endorsements, appearances, and brand collaborations across entertainment, sports, and creators.',
                button: 'VISIT BROKERAGE'
              }
            ].map((item) => (
              <div key={item.title} className="flex h-full flex-col overflow-hidden rounded-[28px] bg-white shadow-[0_24px_80px_rgba(0,0,0,0.08)]">
                <div className="h-[240px] w-full overflow-hidden bg-[#F6F6F6]">
                  <img src={item.image} alt={item.title} className="h-full w-full object-cover" />
                </div>
                <div className="flex flex-1 flex-col px-6 pb-8 pt-6 text-center">
                  <h3 className="text-[16px] font-bold uppercase leading-[24px] text-[#25282B]" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                    {item.title}
                  </h3>
                  <p className="mt-4 text-[15px] leading-[24px] text-[#5D666F]" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                    {item.text}
                  </p>
                  <button
                    type="button"
                    className="mt-auto inline-flex h-[44px] min-w-[150px] items-center justify-center rounded-[8px] bg-[#20282D] px-5 text-[15px] font-semibold uppercase text-white transition duration-200 hover:bg-[#111517]"
                    style={{ fontFamily: 'DM Sans, sans-serif' }}
                  >
                    {item.button}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="relative w-full bg-white py-24">
        <div className="mx-auto flex w-full max-w-[1240px] flex-col items-center px-4 text-center">
          <div className="mb-6 inline-flex h-[45px] items-center justify-center rounded-[6px] border border-[#25282B] bg-white px-5">
            <span
              className="text-[14px] font-bold uppercase leading-[19px] tracking-[0.18em] text-[#25282B]"
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              OUR ECOSYSTEMS
            </span>
          </div>

          <h2
            className="text-[46px] font-bold leading-[1.02] text-[#25282B] sm:text-[56px] md:text-[64px]"
            style={{ fontFamily: 'Red Hat Display, sans-serif' }}
          >
            Star Lab Strategic Partners.
          </h2>

          <div className="mt-12 grid w-full gap-6 lg:grid-cols-3">
            {[
              {
                image: '/images/star found.png',
                title: 'WEB3 & TOKENIZATION INFRASTRUCTURE',
                text: 'Independent strategic technology partner providing Web3 infrastructure, tokenization, digital rewards, blockchain integrations, and next-generation community engagement solutions.'
              },
              {
                image: '/images/starlab token.png',
                title: 'STAR LAB TOKEN',
                text: 'Independent rewards and access token designed to incentivize engagement, unlock experiences, and provide exclusive benefits across the Star Lab ecosystem. Tradable on approved platforms.'
              },
              {
                image: '/images/web3.png',
                title: 'STAR FUND',
                text: 'Independent strategic funding initiative dedicated to allocating annual capital, resources, and support to accelerate innovation and high-potential opportunities within the ecosystem.'
              }
            ].map((item) => (
              <div key={item.title} className="overflow-hidden rounded-[28px] bg-white shadow-[0_24px_80px_rgba(0,0,0,0.08)]">
                <div className="h-[220px] w-full overflow-hidden bg-[#F4F4F4]">
                  <img src={item.image} alt={item.title} className="h-full w-full object-contain" />
                </div>
                <div className="px-6 pb-10 pt-6 text-center">
                  <h3 className="text-[16px] font-bold uppercase leading-[24px] text-[#25282B]" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                    {item.title}
                  </h3>
                  <p className="mt-4 text-[15px] leading-[24px] text-[#5D666F]" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section
        className="relative w-full overflow-hidden bg-cover bg-center py-[70px]"
        style={{ backgroundImage: "url('/images/banner.png')" }}
      >
        <div className="relative mx-auto flex min-h-[420px] w-full max-w-[840px] flex-col items-center justify-center px-6 text-center">
          <div className="flex h-[45px] w-[223px] items-center justify-center rounded-[6px] border border-[rgba(255,255,255,0.19)]">
            <span
              className="text-[16px] font-semibold uppercase leading-[19px] text-white"
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              GET INVOLVED
            </span>
          </div>

          <h2
            className="mt-[28px] text-[32px] font-bold uppercase leading-[42px] text-white sm:text-[42px] sm:leading-[55px] md:text-[48px] md:leading-[65px]"
            style={{ fontFamily: 'Red Hat Display, sans-serif' }}
          >
            Have a brand or A Business Ready to Scale?
          </h2>

          <div className="mt-[24px] flex flex-col gap-3 sm:flex-row sm:justify-center">
            <button
              type="button"
              className="w-full rounded-[6px] bg-white px-4 py-3 text-[16px] font-medium uppercase text-[#25282B] sm:w-auto"
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              SUBMIT A BRAND
              <br />
              OR BUSINESS
            </button>

            <button
              type="button"
              className="w-full rounded-[6px] bg-white px-4 py-3 text-[16px] font-medium uppercase text-[#25282B] sm:w-auto"
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              CONTACT US
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
