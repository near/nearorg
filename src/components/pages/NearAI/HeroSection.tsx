import { ArrowRight } from 'lucide-react';
import React from 'react';

interface CTAButtonProps {
  href: string;
  children: React.ReactNode;
  primary?: boolean;
  className?: string;
  external?: boolean;
}

const CTAButton = ({ href, children, primary = false, className = '', external = false }: CTAButtonProps) => {
  const isNearAiDomain = href.includes('near.ai');
  const shouldOpenNewTab = external && !isNearAiDomain;

  return (
    <a
      href={href}
      className={`
        inline-flex items-center justify-center px-8 py-3 rounded-lg font-medium transition-all
        ${
          primary
            ? 'bg-[#00EB9A] text-black hover:bg-[#00EB9A]/90 shadow-[#00EB9A]/30 shadow-lg hover:shadow-xl'
            : 'bg-black/30 text-white hover:text-[#00EB9A] hover:bg-black/40 border border-[#00EB9A]/20'
        }
        ${className}
        group
      `}
      {...(shouldOpenNewTab ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    >
      <span className="flex items-center">
        {children}
        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
      </span>
    </a>
  );
};

const DragonLogo = () => (
  <div className="relative w-32 h-32 mx-auto mb-8">
    <div className="absolute inset-0 bg-gradient-radial from-[#00EB9A]/20 to-transparent animate-pulse" />
    <img src="/dragon.svg" alt="Dragon Logo" className="w-full h-full" />
  </div>
);

const HeroSection = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center">
      {/* Gradient effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-radial from-[#00EB9A]/5 to-transparent opacity-30" />
        <div className="absolute inset-0 bg-gradient-conic from-[#00EB9A]/0 via-[#00EB9A]/5 to-[#00EB9A]/0 animate-slow-spin" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-32 pb-24">
        <h1 className="text-5xl sm:text-6xl font-bold mb-8">
          The future of AI is <span className="text-[#00EB9A]">User-Owned</span>
        </h1>
        <p className="text-xl text-[#AFD0C5] mb-4 max-w-2xl mx-auto">
          Build and own the next generation of AI models, agents, and infrastructure.
        </p>
        <p className="text-sm text-[#AFD0C5]/60 mb-12">Early alpha. Big vision. Your chance to shape what's next.</p>

        <div className="flex flex-wrap justify-center gap-4">
          <CTAButton href="https://app.near.ai" primary external>
            Access Developer Hub
          </CTAButton>
          <CTAButton href="https://chat.near.ai" external>
            Try AI Assistant
          </CTAButton>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
