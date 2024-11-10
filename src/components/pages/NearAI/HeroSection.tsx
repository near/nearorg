import { ArrowRight } from 'lucide-react';
import React from 'react';

interface CTAButtonProps {
  href: string;
  children: React.ReactNode;
  primary?: boolean;
  className?: string;
}

const CTAButton = ({ href, children, primary = false, className = '' }: CTAButtonProps) => (
  <a
    href={href}
    className={`
      inline-flex items-center px-8 py-3 rounded-lg font-medium transition-all
      ${
        primary
          ? 'bg-[#00EB9A] text-black hover:bg-[#00EB9A]/90 shadow-[#00EB9A]/30 shadow-lg hover:shadow-xl'
          : 'bg-black/30 text-white hover:text-[#00EB9A] hover:bg-black/40 border border-[#00EB9A]/20'
      }
      ${className}
    `}
  >
    {children}
    <ArrowRight className="ml-2 h-4 w-4" />
  </a>
);

const DragonLogo = () => (
  <div className="relative w-32 h-32 mx-auto mb-8">
    {/* Glow effect */}
    <div className="absolute inset-0 bg-[#00EB9A] rounded-full blur-2xl opacity-20 animate-pulse" />
    {/* Logo */}
    <div className="relative w-full h-full">
      <img src="/dragon-logo.svg" alt="NEAR AI" className="w-full h-full" />
    </div>
  </div>
);

const GlowingText = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
  <span className={`text-[#00EB9A] ${className}`}>{children}</span>
);

const HeroSection = () => {
  return (
    <div className="relative min-h-[90vh] flex flex-col justify-center items-center pt-20 pb-16 px-4">
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-radial from-[#00EB9A]/5 to-transparent opacity-50" />

      <div className="max-w-4xl mx-auto text-center relative">
        <DragonLogo />

        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 tracking-tight">
          Building the world's best <GlowingText>truly open AI</GlowingText>.
        </h1>

        <p className="text-xl md:text-2xl text-[#AFD0C5] mb-4">
          Join the community building the user-owned future of AI.
        </p>

        <p className="text-sm text-[#AFD0C5]/60 mb-12">Early alpha. Big vision. Your chance to shape what's next.</p>

        <div className="flex flex-wrap justify-center gap-4">
          <CTAButton href="https://app.near.ai" primary>
            Access Research Hub
          </CTAButton>
          <CTAButton href="https://chat.near.ai">Try AI Assistant</CTAButton>
        </div>
      </div>

      {/* Optional: Animated elements can go here */}
      <div className="absolute inset-0 pointer-events-none">
        {/* We can add star/glow animations here if desired */}
      </div>
    </div>
  );
};

export default HeroSection;
