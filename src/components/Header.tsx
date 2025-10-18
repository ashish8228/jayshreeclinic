'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const menuItemsLeft = [
  { id: 'home', label: 'Home' },
  { id: 'services', label: 'Services' },
  { id: 'team', label: 'Our Team' },
];

const menuItemsRight = [
  { id: 'testimonials', label: 'Testimonials' },
  { id: 'whychooseus', label: 'Why choose us' },
  { id: 'contact', label: 'Contact Us' },
];

export default function Header() {
  const [active, setActive] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const leftRefs = useRef<Record<string, HTMLLIElement | null>>({});
  const rightRefs = useRef<Record<string, HTMLLIElement | null>>({});
  const navRef = useRef<HTMLElement | null>(null);

  // manual click guard so observer doesn't override during smooth scroll
  const manualTargetRef = useRef<string | null>(null);
  const manualClearTimer = useRef<number | null>(null);

  const [buttonStyle, setButtonStyle] = useState<{ left: number; top: number; width: number; height: number }>({
    left: 0,
    top: 0,
    width: 0,
    height: 0,
  });

  function scrollToId(id: string) {
    const el = document.getElementById(id);
    if (!el) return;
    const header = navRef.current;
    const headerHeight = header ? (header as HTMLElement).getBoundingClientRect().height : 90;
    const top = el.getBoundingClientRect().top + window.pageYOffset - headerHeight + 8;
    window.scrollTo({ top, behavior: 'smooth' });
  }

  // update highlight position relative to nav
  useEffect(() => {
    const activeElement = leftRefs.current[active] || rightRefs.current[active] || null;
    const navElement = navRef.current;
    if (activeElement && navElement) {
      const rect = activeElement.getBoundingClientRect();
      const navRect = navElement.getBoundingClientRect();
      setButtonStyle({
        left: rect.left - navRect.left,
        top: rect.top - navRect.top,
        width: rect.width,
        height: rect.height,
      });
    }
  }, [active]);

  function handleSetActive(id: string) {
    // set manual guard so IntersectionObserver doesn't override while scrolling
    manualTargetRef.current = id;

    // clear existing timer
    if (manualClearTimer.current) {
      window.clearTimeout(manualClearTimer.current);
      manualClearTimer.current = null;
    }
    // safety: clear manual guard after 4s if something goes wrong
    manualClearTimer.current = window.setTimeout(() => {
      manualTargetRef.current = null;
      manualClearTimer.current = null;
    }, 4000);

    setActive(id);
    setIsMobileMenuOpen(false);

    if (typeof window !== 'undefined') {
      history.replaceState(null, '', `#${id}`);
    }

    // let React paint the layout change so motion/layout animation starts, then scroll
    requestAnimationFrame(() => scrollToId(id));
  }

  // IntersectionObserver to set `active` on scroll, respects manualTargetRef
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const header = navRef.current;
    const headerHeight = header ? header.getBoundingClientRect().height : 90;

    const sectionIds = [...menuItemsLeft, ...menuItemsRight].map(i => i.id);
    const sections: HTMLElement[] = sectionIds
      .map(id => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      entries => {
        const manualTarget = manualTargetRef.current;

        if (manualTarget) {
          const targetEntry = entries.find(e => (e.target as HTMLElement).id === manualTarget);
          if (targetEntry && targetEntry.isIntersecting) {
            setActive(manualTarget);
            manualTargetRef.current = null;
            if (manualClearTimer.current) {
              window.clearTimeout(manualClearTimer.current);
              manualClearTimer.current = null;
            }
          }
          return;
        }

        const visibleEntries = entries.filter(e => e.isIntersecting);

        if (visibleEntries.length > 0) {
          visibleEntries.sort((a, b) => (b.intersectionRatio || 0) - (a.intersectionRatio || 0));
          const top = visibleEntries[0];
          const id = (top.target as HTMLElement).id;
          setActive(prev => (prev === id ? prev : id));
        } else {
          const byTop = sections
            .map(s => ({ id: s.id, top: Math.abs(s.getBoundingClientRect().top - headerHeight) }))
            .sort((a, b) => a.top - b.top);
          if (byTop.length) setActive(byTop[0].id);
        }
      },
      {
        root: null,
        rootMargin: `-${headerHeight}px 0px 0px 0px`,
        threshold: [0.25, 0.5, 0.75],
      }
    );

    sections.forEach(s => observer.observe(s));

    return () => {
      observer.disconnect();
      if (manualClearTimer.current) {
        window.clearTimeout(manualClearTimer.current);
        manualClearTimer.current = null;
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const allMenuItems = [...menuItemsLeft, ...menuItemsRight];

  return (
    <>
      <nav
        ref={navRef}
        className="top-0 left-0 flex items-center justify-between lg:justify-around px-8 py-2 border-b border-gray-200 bg-white font-heading h-[70px] lg:h-[90px] w-full z-50 fixed"
      >
        <motion.div
          layout
          layoutId="active-bg"
          transition={{ type: 'spring', stiffness: 500, damping: 30 }}
          style={{
            position: 'absolute',
            left: buttonStyle.left,
            top: buttonStyle.top,
            width: buttonStyle.width,
            height: buttonStyle.height,
            backgroundColor: 'var(--color-accent)',
            zIndex: -1,
            borderRadius: '8px',
          }}
          className="hidden lg:block"
        />

        <Link href="/#home" className="relative z-10 lg:order-2">
          <Image
            src="./images/Logo.png"
            alt="Clinic Logo"
            width={70}
            height={60}
            sizes="(max-width: 480px) 50px, (max-width: 768px) 60px, 70px"
            className=" w-[50px] sm:w-[60px] lg:w-[70px] h-auto object-contain rounded-full"
            priority
          />
        </Link>

        <ul className="hidden lg:flex gap-20 text-base font-semibold relative z-10 lg:order-1">
          {menuItemsLeft.map(({ id, label }) => (
            <li
              key={id}
              ref={el => {
                leftRefs.current[id] = el;
              }}
              onClick={() => handleSetActive(id)}
              className={`cursor-pointer px-4 py-2 rounded-lg ${active === id ? 'text-gray-700' : 'text-gray-700 hover:text-[var(--color-accent)]'}`}
            >
              <a href={`#${id}`} onClick={(e) => e.preventDefault()}>
                <span>{label}</span>
              </a>
            </li>
          ))}
        </ul>

        <ul className="hidden lg:flex gap-20 text-base font-semibold relative z-10 lg:order-3">
          {menuItemsRight.map(({ id, label }) => (
            <li
              key={id}
              ref={el => {
                rightRefs.current[id] = el;
              }}
              onClick={() => handleSetActive(id)}
              className={`cursor-pointer px-4 py-2 rounded-lg ${active === id ? 'text-gray-700' : 'text-gray-700 hover:text-[var(--color-accent)]'}`}
            >
              <a href={`#${id}`} onClick={(e) => e.preventDefault()}>
                <span>{label}</span>
              </a>
            </li>
          ))}
        </ul>

        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden relative z-10 flex flex-col justify-center items-center w-10 h-10 gap-1.5"
          aria-label="Toggle menu"
        >
          <motion.span animate={isMobileMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }} className="w-6 h-0.5 bg-gray-700 transition-transform duration-60 ease-in-out" />
          <motion.span animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }} className="w-6 h-0.5 bg-gray-700 transition-transform duration-60 ease-in-out" />
          <motion.span animate={isMobileMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }} className="w-6 h-0.5 bg-gray-700 transition-transform duration-60 ease-in-out" />
        </button>
      </nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed top-[70px] left-0 w-full h-[calc(100vh-90px)] bg-white z-40 lg:hidden overflow-y-auto"
          >
            <ul className="flex flex-col p-8 gap-6 text-lg font-semibold">
              {allMenuItems.map(({ id, label }) => (
                <li
                  key={id}
                  onClick={() => { handleSetActive(id); }}
                  className={`cursor-pointer px-4 py-3 rounded-lg border-b border-gray-100 ${active === id ? 'bg-[var(--color-accent)] ' : 'text-gray-700 hover:bg-gray-100'}`}
                >
                  <a href={`#${id}`} onClick={(e) => e.preventDefault()}>
                    <span>{label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
