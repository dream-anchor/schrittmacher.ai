import { useEffect } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import DualitySection from '@/components/DualitySection';
import TransformationSection from '@/components/TransformationSection';
import KIWerkbank from '@/components/KIWerkbank';
import CredentialsGrid from '@/components/CredentialsGrid';
import QuoteSection from '@/components/QuoteSection';
import ProcessSection from '@/components/ProcessSection';
import FAQSection from '@/components/FAQSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

const Index = () => {
  const containerRef = useScrollReveal();

  // Cursor glow on desktop
  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const glow = document.createElement('div');
    glow.style.cssText = `
      position: fixed; width: 300px; height: 300px; border-radius: 50%;
      background: radial-gradient(circle, hsl(40 90% 55% / 0.06), transparent 70%);
      pointer-events: none; z-index: 0; transform: translate(-50%, -50%);
      transition: opacity 0.3s;
    `;
    document.body.appendChild(glow);

    const move = (e: MouseEvent) => {
      glow.style.left = e.clientX + 'px';
      glow.style.top = e.clientY + 'px';
    };
    const hide = () => { glow.style.opacity = '0'; };
    const show = () => { glow.style.opacity = '1'; };

    // Only show on non-touch devices
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
      <Navigation />
      <main>
        <HeroSection />
        <DualitySection />
        <TransformationSection />
        <KIWerkbank />
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
