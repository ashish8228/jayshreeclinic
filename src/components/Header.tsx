'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt3 } from 'react-icons/hi';
import { IoClose } from 'react-icons/io5';
import { AiOutlineHome } from 'react-icons/ai';
import { MdMedicalServices } from 'react-icons/md';
import { FaUsers } from 'react-icons/fa';
import { FaCommentDots } from 'react-icons/fa';
import { GiChoice } from 'react-icons/gi';
import { FiMail } from 'react-icons/fi';

const menuItemsLeft = [
  { id: 'home', label: 'Home', icon: <AiOutlineHome /> },
  { id: 'services', label: 'Services', icon: <MdMedicalServices /> },
  { id: 'team', label: 'Our Team', icon: <FaUsers /> },
];

const menuItemsRight = [
  { id: 'testimonials', label: 'Testimonials', icon: <FaCommentDots /> },
  { id: 'whychooseus', label: 'Why choose us', icon: <GiChoice /> },
  { id: 'contact', label: 'Contact Us', icon: <FiMail /> },
];

export default function Header() {
  const [active, setActive] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const leftRefs = useRef<Record<string, HTMLLIElement | null>>({});
  const rightRefs = useRef<Record<string, HTMLLIElement | null>>({});
  const navRef = useRef<HTMLElement | null>(null);

  const manualTargetRef = useRef<string | null>(null);
  const manualClearTimer = useRef<number | null>(null);

  const [buttonStyle, setButtonStyle] = useState({
    left: 0,
    top: 0,
    width: 0,
    height: 0,
  });

  function scrollToId(id: string) {
    const el = document.getElementById(id);
    if (!el) return;
    const header = navRef.current;
    const headerHeight = header?.getBoundingClientRect().height ?? 90;
    const top = el.getBoundingClientRect().top + window.pageYOffset - headerHeight + 8;
    window.scrollTo({ top, behavior: 'smooth' });
  }

  useEffect(() => {
    const activeEl = leftRefs.current[active] || rightRefs.current[active];
    const navEl = navRef.current;
    if (activeEl && navEl) {
      const rect = activeEl.getBoundingClientRect();
      const navRect = navEl.getBoundingClientRect();
      setButtonStyle({
        left: rect.left - navRect.left,
        top: rect.top - navRect.top,
        width: rect.width,
        height: rect.height,
      });
    }
  }, [active]);

  function handleSetActive(id: string) {
    manualTargetRef.current = id;
    if (manualClearTimer.current) {
      window.clearTimeout(manualClearTimer.current);
      manualClearTimer.current = null;
    }
    manualClearTimer.current = window.setTimeout(() => {
      manualTargetRef.current = null;
      manualClearTimer.current = null;
    }, 4000);

    setActive(id);
    setIsMobileMenuOpen(false);
    history.replaceState(null, '', `#${id}`);
    requestAnimationFrame(() => scrollToId(id));
  }

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const headerHeight = navRef.current?.getBoundingClientRect().height ?? 90;
    const sectionIds = [...menuItemsLeft, ...menuItemsRight].map(i => i.id);
    const sections = sectionIds.map(id => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      entries => {
        const manual = manualTargetRef.current;
        if (manual) {
          const entry = entries.find(e => (e.target as HTMLElement).id === manual);
          if (entry?.isIntersecting) {
            setActive(manual);
            manualTargetRef.current = null;
            if (manualClearTimer.current) {
              window.clearTimeout(manualClearTimer.current);
              manualClearTimer.current = null;
            }
          }
          return;
        }
        const visible = entries.filter(e => e.isIntersecting);
        if (visible.length) {
          visible
            .sort((a, b) => (b.intersectionRatio || 0) - (a.intersectionRatio || 0));
          setActive((visible[0].target as HTMLElement).id);
        } else {
          const closest = sections
            .map(s => ({ id: s.id, top: Math.abs(s.getBoundingClientRect().top - headerHeight) }))
            .sort((a, b) => a.top - b.top)[0];
          setActive(closest.id);
        }
      },
      { root: null, rootMargin: `-${headerHeight}px 0px 0px 0px`, threshold: [0.25, 0.5, 0.75] }
    );

    sections.forEach(s => observer.observe(s));
    return () => {
      observer.disconnect();
      if (manualClearTimer.current) {
        window.clearTimeout(manualClearTimer.current);
      }
    };
  }, []);

  const allMenuItems = [...menuItemsLeft, ...menuItemsRight];

  return (
    <>
      <nav
        ref={navRef}
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between lg:justify-around w-full h-[70px] lg:h-[90px] px-8 py-2 bg-white border-b border-gray-200 font-heading"
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
            borderRadius: '8px',
            zIndex: -1,
          }}
          className="hidden lg:block"
        />

        <Link href="/#home" className="relative z-10 lg:order-2">
          <Image
            src="/images/Logo.png"
            alt="Clinic Logo"
            width={70}
            height={60}
            className="w-[50px] sm:w-[60px] lg:w-[70px] h-auto object-contain rounded-full"
            priority
          />

        </Link>

        {/* Desktop Left Menu (no icons) */}
        <ul className="hidden lg:flex gap-20 relative z-10 lg:order-1 text-base font-semibold">
          {menuItemsLeft.map(({ id, label }) => (
            <li
              key={id}
              ref={(el) => { (leftRefs.current[id] = el) }}
              onClick={() => handleSetActive(id)}
              className={`px-4 py-2 rounded-lg cursor-pointer ${active === id ? 'text-gray-700' : 'text-gray-700 hover:text-[var(--color-accent)]'
                }`}
            >
              <a href={`#${id}`} onClick={e => e.preventDefault()}>
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop Right Menu (no icons) */}
        <ul className="hidden lg:flex gap-20 relative z-10 lg:order-3 text-base font-semibold">
          {menuItemsRight.map(({ id, label }) => (
            <li
              key={id}
              ref={(el) => { (rightRefs.current[id] = el) }}
              onClick={() => handleSetActive(id)}
              className={`px-4 py-2 rounded-lg cursor-pointer ${active === id ? 'text-gray-700' : 'text-gray-700 hover:text-[var(--color-accent)]'
                }`}
            >
              <a href={`#${id}`} onClick={e => e.preventDefault()}>
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden relative z-10 flex items-center justify-center w-10 h-10 text-gray-700 hover:text-[var(--color-primary)] transition-colors"
          aria-label="Toggle menu"
        >
          <AnimatePresence mode="wait">
            {isMobileMenuOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <IoClose className="w-8 h-8" />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <HiMenuAlt3 className="w-7 h-7" />
              </motion.div>
            )}
          </AnimatePresence>
        </button>
      </nav>

      {/* Mobile Menu (icons shown) */}
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
              {allMenuItems.map(({ id, label, icon }) => (
                <li
                  key={id}
                  onClick={() => handleSetActive(id)}
                  className={`flex items-center gap-2 px-4 py-3 rounded-lg border-b border-gray-100 cursor-pointer ${active === id ? 'bg-[var(--color-accent)]' : 'text-gray-700 hover:bg-gray-100'
                    }`}
                >
                  {icon}
                  <a href={`#${id}`} onClick={e => e.preventDefault()}>
                    {label}
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
