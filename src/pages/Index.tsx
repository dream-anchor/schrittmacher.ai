import { useEffect, useRef } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import DualitySection from '@/components/DualitySection';
import WendeSection from '@/components/WendeSection';
import TransformationSection from '@/components/TransformationSection';
import ProjectsSection from '@/components/ProjectsSection';
import CredentialsGrid from '@/components/CredentialsGrid';
import QuoteSection from '@/components/QuoteSection';
import ProcessSection from '@/components/ProcessSection';
import FAQSection from '@/components/FAQSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

const Index = () => {
  const containerRef = useScrollReveal();
  const atmosphereRef = useRef<HTMLDivElement>(null);

  // Scroll color temperature shift (cool → warm)
  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const updateAtmosphere = () => {
      if (!atmosphereRef.current) return;
      const scrollPct = Math.min(window.scrollY / (document.body.scrollHeight - window.innerHeight), 1);
      const coolOpacity = (1 - scrollPct) * 0.06;
      const warmOpacity = scrollPct * 0.08;
      atmosphereRef.current.style.background = `
        radial-gradient(ellipse 80% 60% at 30% 20%, hsl(215 60% 50% / ${coolOpacity}), transparent),
        radial-gradient(ellipse 80% 60% at 70% 80%, hsl(40 90% 55% / ${warmOpacity}), transparent)
      `;
    };

    window.addEventListener('scroll', updateAtmosphere, { passive: true });
    updateAtmosphere();
    return () => window.removeEventListener('scroll', updateAtmosphere);
  }, []);

  // Cursor glow on desktop
  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const glow = document.createElement('div');
    glow.style.cssText = `
      position: fixed; width: 400px; height: 400px; border-radius: 50%;
      background: radial-gradient(circle, hsl(40 90% 55% / 0.06), transparent 70%);
      pointer-events: none; z-index: 0; transform: translate(-50%, -50%);
      transition: left 0.15s ease-out, top 0.15s ease-out, opacity 0.3s;
    `;
    document.body.appendChild(glow);

    const move = (e: MouseEvent) => {
      glow.style.left = e.clientX + 'px';
      glow.style.top = e.clientY + 'px';
    };
    const hide = () => { glow.style.opacity = '0'; };
    const show = () => { glow.style.opacity = '1'; };

    if (window.matchMedia('(hover: hover)').matches) {
      window.addEventListener('mousemove', move);
      document.addEventListener('mouseleave', hide);
      document.addEventListener('mouseenter', show);
    } else {
      glow.style.display = 'none';
    }

    return () => {
      glow.remove();
      window.removeEventListener('mousemove', move);
      document.removeEventListener('mouseleave', hide);
      document.removeEventListener('mouseenter', show);
    };
  }, []);

  return (
    <div ref={containerRef} className="noise-overlay">
      <div ref={atmosphereRef} className="scroll-atmosphere" />
      <Navigation />
      <main>
        <HeroSection />
        <DualitySection />
        <WendeSection />
        <TransformationSection />
        <ProjectsSection />
        <CredentialsGrid />
        <QuoteSection />
        <ProcessSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
