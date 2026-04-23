import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { translations } from './data';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [lang, setLang] = useState('ru');
  const [scrolled, setScrolled] = useState(false);
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const t = translations[lang] || translations['en'];
  const servicesById = (t.offers.items || []).reduce((acc, service) => {
    acc[service.id] = service;
    return acc;
  }, {});
  const arrangedServiceTiles = [1, 'brand', 3, 2, 5, 6]
    .map((tile) => (tile === 'brand' ? tile : servicesById[tile]))
    .filter(Boolean);
  const serviceImagePosition = {
    1: 'center 44%',
    2: 'center 43%',
    3: 'center 42%',
    4: 'center 48%',
    5: 'center 40%',
    6: 'center 28%',
  };
  const serviceCardImages = {
    1: '/service1.jpg',
    2: '/service3.jpg',
    3: '/service2.jpg',
    5: '/service4.jpg',
    6: '/service5.jpg',
    4: '/service4.jpg',
  };
  const modalServiceImages = {
    1: '/service1.jpg',
    2: '/service3.jpg',
    3: '/service2.jpg',
    5: '/service4.jpg',
    6: '/service5.jpg',
    4: '/service4.jpg',
  };
  const modalImagePosition = {
    1: 'center 58%',
    2: 'center 57%',
    3: 'center 44%',
    4: 'center 62%',
    5: 'center 38%',
    6: 'center 24%',
  };

  useEffect(() => {
    if (isCalendlyOpen || isMenuOpen || selectedService) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isCalendlyOpen, isMenuOpen, selectedService]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-[#2c2c2c] min-h-screen text-white font-body overflow-x-hidden">
      <nav className={`fixed w-full z-50 transition-all duration-500 px-5 md:px-12 py-5 flex justify-between items-center text-white ${scrolled ? 'bg-black/70 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
        <a href="#hero" className="inline-flex items-center" aria-label="SomaSensus home">
          <img src="/logo.png" alt="SomaSensus" className="h-10 w-10 md:h-12 md:w-12 rounded-full object-cover border border-white/20" />
        </a>

        <div className="hidden md:flex gap-9 text-[11px] tracking-[0.24em] font-semibold uppercase">
          <a href="#space" className="hover:text-white/70 transition">SomaSensus</a>
          <a href="#about" className="hover:text-white/70 transition">{t.nav.about}</a>
          <a href="#services" className="hover:text-white/70 transition">{t.nav.services}</a>
          <a href="#booking" className="hover:text-white/70 transition">{t.nav.booking}</a>
          <a href="#contact" className="hover:text-white/70 transition">{t.nav.contact}</a>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex gap-2 md:gap-3 text-[10px] md:text-[11px] tracking-[0.14em] md:tracking-[0.2em] font-semibold bg-white/10 px-2.5 md:px-3 py-1.5 rounded-full">
            <button onClick={() => setLang('ru')} className={lang === 'ru' ? 'text-white' : 'text-white/60'}>RU</button>
            <button onClick={() => setLang('et')} className={lang === 'et' ? 'text-white' : 'text-white/60'}>ET</button>
            <button onClick={() => setLang('en')} className={lang === 'en' ? 'text-white' : 'text-white/60'}>EN</button>
          </div>
          <button onClick={() => setIsMenuOpen(true)} className="md:hidden text-3xl leading-none">☰</button>
        </div>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.25 }}
            className="fixed inset-0 z-[70] bg-[#262729] p-10 flex flex-col"
          >
            <div className="flex items-center justify-between mb-12">
              <span className="font-display italic text-4xl">SomaSensus</span>
              <button onClick={() => setIsMenuOpen(false)} className="text-4xl">×</button>
            </div>
            <div className="flex flex-col gap-7 text-3xl font-display italic">
              <a href="#space" onClick={() => setIsMenuOpen(false)}>SomaSensus</a>
              <a href="#about" onClick={() => setIsMenuOpen(false)}>{t.nav.about}</a>
              <a href="#services" onClick={() => setIsMenuOpen(false)}>{t.nav.services}</a>
              <a href="#booking" onClick={() => setIsMenuOpen(false)}>{t.nav.booking}</a>
              <a href="#contact" onClick={() => setIsMenuOpen(false)}>{t.nav.contact}</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <section id="hero" className="relative h-screen flex items-center justify-center text-center px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[#6b705c]" />
        <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-overlay">
          <source src="/vid.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/20" />
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="relative z-10 w-full max-w-5xl">
          <p className="text-[11px] md:text-xs uppercase tracking-[0.36em] md:tracking-[0.48em] text-white/90 mb-10 md:mb-12 font-body">{t.hero.welcome}</p>
          <h1 className="font-display italic text-[clamp(2.8rem,14vw,4.3rem)] md:text-8xl lg:text-[155px] leading-[0.82] whitespace-nowrap">{t.hero.title}</h1>
          <p className="mt-9 md:mt-12 relative top-[16px] md:top-[25px] text-[13px] md:text-[16px] tracking-[0.13em] md:tracking-[0.18em] text-white/90 font-body">{t.hero.subtitle}</p>
          <p className="mt-7 md:mt-8 relative top-[16px] md:top-[25px] text-[14px] md:text-[21px] leading-[1.35] text-white/95 font-display italic">{t.hero.quote}</p>
        </motion.div>
      </section>

      <section id="space" className="bg-[#2c2c2c] py-[96px] md:py-[122px] px-5 md:px-10 border-t border-white/10">
        <div className="max-w-6xl mx-auto relative">
          <div className="mb-14 md:mb-20 relative -top-6 md:-top-10 flex flex-col items-center">
            <h2 className="font-display italic text-center text-[clamp(1.95rem,10vw,2.35rem)] md:text-[74px] leading-[0.94] px-2 md:px-0 whitespace-normal md:whitespace-nowrap max-w-[280px] md:max-w-none">{t.welcomeSpace.title}</h2>
            <span className="mt-3 h-px w-[170px] md:w-[260px] bg-white/55" />
          </div>
          <div className="relative">
            <div className="grid md:grid-cols-3 gap-6 md:gap-7 mb-12">
              <img src="/welcome1.jpg" alt="SomaSensus room" className="w-full h-[260px] md:h-[360px] object-cover object-center" />
              <div className="relative w-full h-[260px] md:h-[360px] overflow-hidden">
                <video autoPlay loop muted playsInline className="w-full h-full object-cover object-center">
                  <source src="/Video%202.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-[#2c2c2c]/45" />
              </div>
              <img src="/welcome2.jpg" alt="SomaSensus treatment" className="w-full h-[260px] md:h-[360px] object-cover object-[center_46%]" />
            </div>

            <div className="pointer-events-none hidden md:block absolute left-[-20px] top-full -mt-14 h-[66px] w-[74px] border-l border-b border-white/45 rounded-bl-[10px]" />
            <div className="pointer-events-none hidden md:block absolute right-[-20px] top-full -mt-14 h-[66px] w-[74px] border-r border-b border-white/45 rounded-br-[10px]" />
          </div>

          <div className="max-w-3xl mx-auto text-center text-[16px] md:text-[18px] leading-[1.58] text-white/90 font-body space-y-5">
            <p>{t.welcomeSpace.text}</p>
            <p>{t.welcomeSpace.text2}</p>
          </div>

          <div className="pointer-events-none mx-auto mt-10 h-px w-[220px] md:w-[280px] bg-white/45" />
        </div>
      </section>

      <section id="about" className="bg-[#6b7a57] py-[96px] md:py-[122px] px-5 md:px-10">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-[1.1fr_0.9fr] gap-12 md:gap-14 items-center">
          <div>
            <div className="relative mb-10 md:mb-12">
              <h2 className="font-display italic text-[50px] md:text-[74px] leading-[0.95] relative -top-2 md:-top-10 break-words">{t.aboutYana.title}</h2>
              <span className="absolute left-0 bottom-[-4px] h-px w-[75vw] max-w-[320px] md:w-[420px] md:max-w-none bg-white/55" />
            </div>
            <p className="text-[16px] md:text-[22px] leading-[1.65] font-body mb-10 md:mb-16 text-white/94 max-w-[620px]">{t.aboutYana.intro}</p>
            <div className="relative mt-3 md:mt-5 pl-6 md:pl-8">
              <span className="absolute left-0 top-1 bottom-1 w-px bg-white/55" />
              <span className="absolute left-0 top-1 h-px w-4 bg-white/55" />
              <span className="absolute left-0 bottom-1 h-px w-5 bg-white/55" />
              <div className="space-y-5 md:space-y-6">
                {t.aboutYana.roles.map((role, index) => (
                  <h3 key={index} className="font-display italic text-[26px] md:text-[34px] leading-[1.08] md:leading-[1.15] break-words">{role}</h3>
                ))}
              </div>
            </div>
            <div className="bg-[#60704f]/45 border border-white/20 p-7 md:p-9 mt-10 md:mt-16 space-y-10 md:space-y-12 max-w-[480px]">
              <div>
                <h3 className="font-display italic text-[36px] md:text-[52px] leading-[0.98] mb-7 md:mb-9 relative -top-5 md:-top-10 break-words">{t.aboutYana.skillsTitle}</h3>
                <ul className="space-y-4.5 md:space-y-5 font-body text-[15px] md:text-[17px] text-white/95">
                  {t.aboutYana.skills.map((skill, index) => (
                    <li key={index}>· {skill}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="justify-self-center w-full max-w-[430px]">
            <div className="mb-8 md:mb-10 flex items-center justify-center gap-4 md:gap-7">
              <span className="h-px w-[34px] md:w-[66px] bg-white/55" />
              <h2 className="font-display italic text-[32px] md:text-[48px] leading-[0.95] break-words text-center">{t.aboutYana.roleLabel}</h2>
              <span className="h-px w-[34px] md:w-[66px] bg-white/55" />
            </div>
            <div className="relative">
              <img src="/yana.jpg" alt="Yana Belova" className="w-full h-[520px] object-cover object-[center_20%]" />
              <span className="hidden md:block absolute -right-8 -bottom-5 h-[66px] w-[52px] border-r border-b border-white/55 rounded-br-[10px]" />
            </div>
          </div>
        </div>
      </section>

      <section className="relative h-[360px] md:h-[520px] overflow-hidden">
        <img src="/scul.jpg" alt="Consultation" className="w-full h-full object-cover object-[center_32%] grayscale" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(22,22,22,0.08),rgba(22,22,22,0.58))]" />
      </section>

      <section id="services" className="bg-[#2c2c2c] pt-[62px] pb-[60px] md:pt-[82px] md:pb-[76px] px-5 md:px-10">
        <div className="max-w-6xl mx-auto">
          <div className="relative mb-5 md:mb-10">
            <h2 className="font-display italic text-center text-[52px] md:text-[74px] leading-[0.92] relative -top-2 md:-top-8">{t.offers.title}</h2>
            <span className="hidden md:block mx-auto mt-1 h-px w-[200px] bg-white/55" />
          </div>

          <div className="relative">
            <span className="pointer-events-none hidden md:block absolute -left-4 -top-4 h-[48px] w-[48px] border-l border-t border-white/45 rounded-tl-[10px]" />
            <span className="pointer-events-none hidden md:block absolute -right-4 -top-4 h-[48px] w-[48px] border-r border-t border-white/45 rounded-tr-[10px]" />
            <span className="pointer-events-none hidden md:block absolute -left-4 -bottom-4 h-[48px] w-[48px] border-l border-b border-white/45 rounded-bl-[10px]" />
            <span className="pointer-events-none hidden md:block absolute -right-4 -bottom-4 h-[48px] w-[48px] border-r border-b border-white/45 rounded-br-[10px]" />

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7">
              {arrangedServiceTiles.map((tile, index) => {
                if (tile === 'brand') {
                  return (
                    <article key="brand-tile" className="order-first md:order-none flex flex-col items-center justify-center min-h-[340px] md:min-h-[490px] p-5 md:p-10 text-center">
                      <span className="pointer-events-none mb-5 h-[18px] w-[118px] border-t border-white/50 rounded-t-full" />
                      <div className="w-[150px] h-[150px] md:w-[190px] md:h-[190px] rounded-full border border-white/30 overflow-hidden">
                        <img src="/logo.png" alt="SomaSensus" className="w-full h-full rounded-full object-cover" />
                      </div>
                      <p className="mt-5 md:mt-8 font-display italic text-[40px] md:text-[52px] leading-[0.95]">SomaSensus</p>
                      <span className="pointer-events-none mt-3 md:mt-4 h-px w-[116px] bg-white/50" />
                    </article>
                  );
                }

                const service = tile;
                return (
                  <motion.article
                    key={service.id}
                    whileHover={{ y: -6 }}
                    className="bg-[#747a67] border border-white/10 flex flex-col overflow-hidden cursor-pointer"
                    onClick={() => setSelectedService(service)}
                  >
                    <img
                      src={serviceCardImages[service.id] || `/service${service.id}.jpg`}
                      alt={service.name}
                      className="w-full h-[240px] object-cover"
                      style={{ objectPosition: serviceImagePosition[service.id] }}
                    />
                    <div className="p-6 md:p-7 flex-1 flex flex-col min-h-[220px]">
                      <h3 className="font-display italic text-[clamp(1.1rem,1.85vw,1.55rem)] leading-[1.02] mb-3">{service.name}</h3>
                      <div className="mb-3 border-t border-white/20" />
                      <p className="font-body text-[15px] md:text-[16px] leading-[1.58] text-white/88 flex-1">{service.desc}</p>
                      <div className="mt-auto pt-5 border-t border-white/20">
                        <div className="-mt-[15px] flex items-center gap-3">
                          <span className="inline-block font-body text-[10px] md:text-[11px] tracking-[0.02em] text-white/92 bg-[#747a67] px-1">{service.price}</span>
                        </div>
                        <div className="mt-3 flex justify-start">
                          <span className="font-body text-sm uppercase tracking-[0.18em] border-b border-white/45 whitespace-nowrap bg-[#747a67] px-1">{t.offers.details}</span>
                        </div>
                      </div>
                    </div>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section id="booking" className="relative pt-[32px] md:pt-[42px] pb-[72px] md:pb-[88px] px-5 md:px-10 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/booking-bg.jpg')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(28,24,25,0.78),rgba(81,57,34,0.62))]" />
        <div className="relative z-10 max-w-[1400px] mx-auto">
          <div className="flex items-center justify-center gap-5 md:gap-8 mb-9 md:mb-11">
            <span className="hidden md:block h-px w-[150px] bg-white/55" />
            <h2 className="font-display italic text-center text-[38px] md:text-[54px] leading-[0.9]">{t.booking.title}</h2>
            <span className="hidden md:block h-px w-[150px] bg-white/55" />
          </div>
          <div className="grid lg:grid-cols-[1.68fr_0.82fr] gap-10 lg:gap-16 items-start">
            <div className="pr-0 lg:pr-5">
              <div className="space-y-1 md:space-y-2 border-l border-white/60 pl-5 md:pl-6">
                {t.booking.locations.map((location, index) => (
                  <div key={index} className="pb-3 md:pb-4 overflow-hidden">
                    <h3 className="font-display italic text-[clamp(2rem,7.8vw,2.2rem)] md:text-[48px] leading-[0.94] whitespace-nowrap">{location.name}</h3>
                    <p className="font-display italic text-[clamp(1.8rem,7vw,2rem)] md:text-[34px] leading-[1.05] text-white/95 mt-1 whitespace-nowrap">{location.schedule}</p>
                    <p className="font-body text-[11px] md:text-[17px] leading-[1.4] text-white/92 uppercase mt-4 md:whitespace-nowrap">{location.subtitle}</p>
                    <p className="font-body text-[14px] md:text-[18px] leading-[1.4] text-white/88 mt-1">{location.address}</p>
                    <hr className="mt-3 md:mt-4 w-[70%] border-0 border-t border-white/35" />
                  </div>
                ))}
              </div>

              <p className="mt-5 md:mt-6 mb-0 text-[13px] md:text-[16px] leading-[1.42] font-body text-white/92">{t.booking.extraSunday}</p>
              <div className="h-[34px] md:h-[34px]" aria-hidden="true" />
              <div className="mb-[30px] md:mb-[42px] border border-white/35 bg-white/10 px-4 py-2.5 text-center">
                <p className="font-body text-[13px] md:text-[19px] tracking-[0.04em] md:tracking-[0.06em] uppercase text-white/95">{t.booking.firstVisitPromo}</p>
              </div>
              <div className="p-4 md:p-5 bg-black/20">
                <h4 className="font-display italic text-[22px] md:text-[40px] leading-[0.96] mb-3 md:mb-4 whitespace-nowrap">{t.booking.infoTitle}</h4>
                <div className="border-t border-white/35 mb-2.5" />
                <div
                  className="space-y-2.5 text-[13px] md:text-[14px] leading-[1.46] font-body text-white/92 md:whitespace-nowrap"
                  style={{ lineHeight: 'calc(1.46em + 1px)' }}
                >
                  {t.booking.infoLines.map((line, index) => (
                    <p key={index}>{line}</p>
                  ))}
                </div>
              </div>
              <div className="border-t border-white/35 mt-1" />
            </div>

            <div className="lg:pl-8 lg:max-w-[430px] lg:justify-self-end">
              <div className="bg-black/20 p-3 md:p-4">
                <h3 className="font-display text-[24px] md:text-[34px] leading-[0.92] mb-2.5 md:mb-3 text-white/95">{t.booking.priceTitle}</h3>
                <div className="mb-2.5 md:mb-3 border-t border-white/35" />
                <div className="space-y-2.5 md:space-y-3">
                  {t.booking.priceList.map((item, index) => (
                    <div key={index} className="pb-2 md:pb-2.5 border-b border-white/25 last:border-b-0 last:pb-0">
                      <p className="font-body text-[15px] md:text-[20px] leading-[1.18] text-white/95">{item.name}</p>
                      <p className="font-body text-[14px] md:text-[18px] leading-[1.24] text-white/92 mt-0.5">{item.price}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-2.5 pt-2 border-t border-white/25 text-[12px] md:text-[14px] leading-[1.3] font-body text-white/90">
                  <p>{t.booking.payment}</p>
                </div>
              </div>

              <button
                onClick={() => setIsCalendlyOpen(true)}
                className="w-full mt-4 md:mt-5 bg-[#6b7a57] hover:bg-[#60704f] transition-all duration-200 py-4 md:py-5 text-[clamp(2.6rem,15vw,3.05rem)] md:text-[52px] font-display italic rounded-[16px] cursor-pointer hover:shadow-[0_10px_24px_rgba(0,0,0,0.28)] hover:-translate-y-[1px] active:translate-y-0"
              >
                {t.booking.form.btn}
              </button>

              <div className="mt-4 bg-black/20 px-4 py-3 md:px-5 md:py-4 text-left border-t border-b border-white/35">
                <p className="font-body text-[12px] md:text-[15px] leading-[1.35] text-white/93">
                  <span className="font-display text-[32px] md:text-[40px] leading-none align-middle">NB!</span>
                  <span className="align-middle"> - {t.booking.nbLines[0]}</span>
                </p>
              </div>
              <div className="mt-3 flex justify-center">
                <span className="hidden md:block h-px w-[220px] bg-white/45" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="press" className="relative py-24 px-5 md:px-10 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/feedback-bg.jpg')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(61,45,28,0.66),rgba(80,60,33,0.55))]" />
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="relative pb-10 md:pb-12">
            <h3 className="text-xs tracking-[0.5em] text-center mb-10 uppercase font-bold text-white opacity-60 relative -top-10">
              {t.feedback.title}
              <span className="hidden md:block absolute left-1/2 -bottom-4 h-px w-16 -translate-x-1/2 bg-white/85" />
            </h3>
            <span className="pointer-events-none hidden md:block absolute left-[-228px] top-[184px] h-px w-[150px] bg-white/55" />
            <span className="pointer-events-none hidden md:block absolute right-[-228px] top-[184px] h-px w-[150px] bg-white/55" />
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {t.feedback.reviews.map((review, index) => (
              <motion.article key={index} whileHover={{ scale: 1.02 }} className="bg-[#6b705c] p-10 shadow-2xl border border-white/20 flex flex-col justify-between min-h-[320px] text-white">
                <p className="font-display italic text-xl leading-relaxed">"{review.text}"</p>
                <span className="mt-8 pt-6 border-t border-white/20 uppercase text-[10px] font-semibold tracking-[0.3em] text-white/70">— {review.author}</span>
              </motion.article>
            ))}
          </div>
          <div className="pointer-events-none hidden md:block mx-auto mt-12 h-px w-[420px] bg-white/55" />
        </div>
      </section>

      <section className="relative h-[54vh] min-h-[380px] overflow-hidden">
        <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
          <source src="/video-bg.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(99,70,45,0.58),rgba(92,108,76,0.58))]" />
        <div className="relative z-10 h-full flex items-center justify-center">
          <h2 className="font-display italic text-[68px] md:text-[96px]">SomaSensus</h2>
        </div>
      </section>

      <section id="contact" className="bg-[#6b7a57] py-[84px] px-5 md:px-10">
        <div className="max-w-6xl mx-auto">
          <div className="relative flex justify-center mb-12 pt-4 md:pt-5">
            <span className="pointer-events-none hidden md:block absolute left-1/2 top-1/2 h-px w-[110px] -translate-y-1/2 -translate-x-[320px] bg-white/55" />
            <span className="pointer-events-none hidden md:block absolute left-1/2 top-1/2 h-px w-[110px] -translate-y-1/2 translate-x-[210px] bg-white/55" />
            <span className="font-body text-[20px] px-10 py-3 border border-white/35 rounded-full text-white/92">{t.contact.sharePrompt}</span>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <article className="relative border border-white/25 p-7 min-h-[235px]">
              <span className="hidden md:block absolute -left-4 -top-4 h-8 w-8 border-l border-t border-white/55 rounded-tl-[10px]" />
              <span className="hidden md:block absolute -left-4 -bottom-4 h-8 w-8 border-l border-b border-white/55 rounded-bl-[10px]" />
              <h3 className="font-display italic text-[32px] md:text-[36px] mb-8 relative -top-3">{t.contact.locationTitle}</h3>
              <div className="font-body text-[20px] space-y-1">
                <p>{t.contact.locations[0]}</p>
                <a className="underline underline-offset-4 block" href="https://maps.google.com/?q=Pelgulinna%20Tervisemaja%2C%20Tallinn" target="_blank" rel="noreferrer">{t.contact.locations[1]}</a>
                <a className="underline underline-offset-4 block" href="https://maps.google.com/?q=Linnamae%2037a%2C%20Tallinn" target="_blank" rel="noreferrer">{t.contact.locations[2]}</a>
              </div>
            </article>

            <article className="border border-white/25 p-7 min-h-[235px]">
              <h3 className="font-display italic text-[32px] md:text-[36px] mb-4 relative -top-3">{t.contact.hoursTitle}</h3>
              <div className="font-body text-[20px] space-y-2">
                {t.contact.hours.map((hour, index) => (
                  <p key={index}>{hour}</p>
                ))}
              </div>
            </article>

            <article className="relative border border-white/25 p-7 min-h-[235px]">
              <span className="hidden md:block absolute -right-4 -top-4 h-8 w-8 border-r border-t border-white/55 rounded-tr-[10px]" />
              <span className="hidden md:block absolute -right-4 -bottom-4 h-8 w-8 border-r border-b border-white/55 rounded-br-[10px]" />
              <h3 className="font-display italic text-[32px] md:text-[36px] mb-4 relative -top-3">{t.contact.socialTitle}</h3>
              <div className="font-body text-[20px] space-y-1">
                <a className="underline underline-offset-4 block" href="https://www.instagram.com/yana.belova.physio_est/?hl=am-et" target="_blank" rel="noreferrer">Instagram</a>
                <a className="underline underline-offset-4 block" href="https://www.facebook.com/p/SomaSensus-61566848969221/" target="_blank" rel="noreferrer">Facebook</a>
                <a className="underline underline-offset-4 block" href="mailto:yanabelova.physio@gmail.com">yanabelova.physio@gmail.com</a>
              </div>
            </article>
          </div>
        </div>
      </section>

      <AnimatePresence>
        {selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[88] bg-black/75 backdrop-blur-sm flex items-center justify-center p-2 sm:p-4 md:p-10"
            onClick={() => setSelectedService(null)}
          >
            <motion.div
              initial={{ y: 24, scale: 0.97 }}
              animate={{ y: 0, scale: 1 }}
              exit={{ y: 24, scale: 0.97 }}
              transition={{ duration: 0.25 }}
              className="relative bg-[#747a67] w-full max-w-[1120px] h-[96vh] md:h-[96vh] overflow-hidden border border-white/20 shadow-2xl flex flex-col"
              onClick={(event) => event.stopPropagation()}
            >
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-3 right-4 z-10 text-4xl text-white/75 hover:text-white leading-none cursor-pointer"
                aria-label="Close"
              >
                ×
              </button>
              <img
                src={modalServiceImages[selectedService.id] || `/service${selectedService.id}.jpg`}
                alt={selectedService.name}
                className="w-full h-[250px] sm:h-[280px] md:h-[360px] lg:h-[400px] object-cover flex-none"
                style={{ objectPosition: modalImagePosition[selectedService.id] }}
              />
              <div className="p-4 sm:p-5 md:p-8 lg:p-10 flex-1 min-h-0 flex flex-col">
                <div className="flex-1 md:overflow-y-auto pr-0 md:pr-2">
                  <div className="pb-4 border-b border-white/35">
                    <h3 className="font-display italic text-[clamp(2.4rem,13vw,2.8rem)] md:text-[56px] lg:text-[62px] leading-[1]">{selectedService.name}</h3>
                  </div>
                  <div className="h-[14px] md:h-[34px]" aria-hidden="true" />
                  <p className="font-body text-[14px] md:text-[20px] lg:text-[22px] leading-[1.6] md:leading-[1.7] text-white/92">{selectedService.desc}</p>
                  <div className="h-[8px] md:h-[12px]" aria-hidden="true" />
                  <div className="mt-2 md:mt-3 text-[14px] md:text-[18px] lg:text-[20px] font-body text-white/95">
                    <span className="uppercase tracking-[0.18em] text-white/70">{t.offers.priceLabel}: </span>
                    <span>{selectedService.price}</span>
                  </div>
                  <div className="h-[16px] md:h-[30px]" aria-hidden="true" />
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 md:gap-y-7 text-[14px] md:text-[18px] lg:text-[20px] leading-[1.6] md:leading-[1.9] font-body text-white/88">
                    {selectedService.benefits.map((benefit, index) => (
                      <p key={index}>• {benefit}</p>
                    ))}
                  </div>
                </div>
                <button
                  onClick={() => {
                    setSelectedService(null);
                    setIsCalendlyOpen(true);
                  }}
                  className="mt-4 md:mt-7 w-full bg-[#6b7a57] hover:bg-[#60704f] transition-all duration-200 py-3.5 md:py-5 uppercase tracking-[0.18em] md:tracking-[0.2em] text-[12px] md:text-base font-semibold rounded-[16px] cursor-pointer hover:shadow-[0_10px_24px_rgba(0,0,0,0.28)] hover:-translate-y-[1px] active:translate-y-0"
                >
                  {t.booking.form.btn}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}

        {isCalendlyOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[90] bg-black/70 backdrop-blur-sm flex items-center justify-center p-6 md:p-10"
            onClick={() => setIsCalendlyOpen(false)}
          >
            <motion.div
              initial={{ scaleY: 0.02, opacity: 0, rotateX: -88 }}
              animate={{ scaleY: 1, opacity: 1, rotateX: 0 }}
              exit={{ scaleY: 0.02, opacity: 0, rotateX: -88 }}
              transition={{ duration: 0.5, ease: [0.2, 0.8, 0.2, 1] }}
              style={{ transformOrigin: 'center center' }}
              className="relative bg-[#f4f0ea] w-full max-w-5xl h-[82vh] border border-black/20 shadow-2xl overflow-hidden"
              onClick={(event) => event.stopPropagation()}
            >
              <button
                onClick={() => setIsCalendlyOpen(false)}
                className="absolute top-3 right-4 z-10 text-4xl text-[#2c2c2c]/70 hover:text-[#2c2c2c] leading-none"
                aria-label="Close"
              >
                ×
              </button>
              <iframe
                title="Calendly booking"
                src="https://calendly.com/yanabelova-massages/massage-physiotherapy-session?month=2026-04"
                className="w-full h-full"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;