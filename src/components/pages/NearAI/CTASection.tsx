import { ArrowRight, ArrowUpRight } from 'lucide-react';
import React from 'react';

import XIcon from '@/components/pages/NearAI/XIcon';
import YouTubeIcon from '@/components/pages/NearAI/YouTubeIcon';

interface CTAButtonProps {
  href: string;
  children: React.ReactNode;
  primary?: boolean;
  external?: boolean;
}

const CTAButton = ({ href, children, primary = false, external = false }: CTAButtonProps) => (
  <a
    href={href}
    className={`
      inline-flex items-center px-8 py-3 rounded-lg font-medium transition-all
      ${
        primary
          ? 'bg-[#00EB9A] text-black hover:bg-[#00EB9A]/90 shadow-[#00EB9A]/30 shadow-lg hover:shadow-xl'
          : 'bg-black/30 text-white hover:text-[#00EB9A] hover:bg-black/40 border border-[#00EB9A]/20'
      }
    `}
    {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
  >
    {children}
    {external ? <ArrowUpRight className="ml-2 h-4 w-4" /> : <ArrowRight className="ml-2 h-4 w-4" />}
  </a>
);

const CTASection = () => {
  return (
    <footer className="relative border-t border-[#00EB9A]/20">
      <div className="relative py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">
            The future of AI is <span className="text-[#00EB9A]">as yet unwritten</span>.
          </h2>
          <p className="text-xl text-[#AFD0C5] mb-12">It's time to take a stand. It's time for User-Owned AGI.</p>

          <div className="flex flex-col items-center gap-8">
            {/* Main CTAs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl w-full">
              <CTAButton href="https://app.near.ai" primary external>
                Research Hub
              </CTAButton>
              <CTAButton href="https://chat.near.ai" external>
                AI Assistant
              </CTAButton>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-6">
              <a
                href="https://x.com/near_ai"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-[#AFD0C5] hover:text-white transition-colors"
                aria-label="Follow NEAR AI on X"
              >
                <XIcon className="h-6 w-6" />
              </a>
              <a
                href="https://youtube.com/playlist?list=PL9tzQn_TEuFWMuPiQOXhaE5lpOTnxLPZY"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-[#AFD0C5] hover:text-white transition-colors"
                aria-label="Watch AI Office Hours on YouTube"
              >
                <YouTubeIcon className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Gradient Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-radial from-[#00EB9A]/5 to-transparent opacity-30" />
      </div>
    </footer>
  );
};

export default CTASection;
