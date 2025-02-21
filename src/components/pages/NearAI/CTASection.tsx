import { ArrowRight } from 'lucide-react';
import React from 'react';

import { useInteractionTracking } from '@/hooks/useInteractionTracking';
import XIcon from '@/components/pages/NearAI/XIcon';
import YouTubeIcon from '@/components/pages/NearAI/YouTubeIcon';

interface CTAButtonProps {
  href: string;
  children: React.ReactNode;
  primary?: boolean;
  external?: boolean;
  trackingId?: string;
}

const CTAButton = ({ href, children, primary = false, external = false, trackingId }: CTAButtonProps) => {
  const { trackRef } = useInteractionTracking();
  const isNearAiDomain = href.includes('near.ai');
  const shouldOpenNewTab = external && !isNearAiDomain;
  
  return (
    <a
      ref={(el) => trackRef(el, trackingId || `cta_button_${children}`)}
      href={href}
      className={`
        inline-flex items-center justify-center px-8 py-3 rounded-lg font-medium transition-all
        ${
          primary
            ? 'bg-[#00EB9A] text-black hover:bg-[#00EB9A]/90 shadow-[#00EB9A]/30 shadow-lg hover:shadow-xl'
            : 'bg-black/30 text-white hover:text-[#00EB9A] hover:bg-black/40 border border-[#00EB9A]/20'
        }
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

const CTASection = () => {
  return (
    <footer className="relative border-t border-[#00EB9A]/20">
      <div className="relative py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">
            The future of AI is <span className="text-[#00EB9A]">as yet unwritten</span>.
          </h2>
          <p className="text-xl text-[#AFD0C5] mb-12">It's time to take a stand. It's time for User-Owned AI.</p>

          <div className="flex flex-col items-center gap-8">
            {/* Main CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CTAButton 
                href="https://app.near.ai" 
                primary 
                external 
                trackingId="cta_developer_hub"
              >
                Try Developer Hub
              </CTAButton>
              <CTAButton 
                href="https://chat.near.ai" 
                external
                trackingId="cta_ai_assistant"
              >
                Chat with Assistant
              </CTAButton>
              <CTAButton
                href="https://airtable.com/appc0ZVhbKj8hMLvH/pag4dQKP3KF3qrTFo/form"
                external
                trackingId="cta_contact_us"
              >
                Contact us
              </CTAButton>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-6">
              <a
                href="https://twitter.com/NEAR_AI"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#AFD0C5] hover:text-[#00EB9A] transition-colors"
              >
                <XIcon className="w-6 h-6" />
              </a>
              <a
                href="https://www.youtube.com/@NEAR_AI"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#AFD0C5] hover:text-[#00EB9A] transition-colors"
              >
                <YouTubeIcon className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default CTASection;
