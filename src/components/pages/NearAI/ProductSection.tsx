import { ArrowRight, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import type { ReactNode } from 'react';
import React from 'react';
import { useInteractionTracking } from '@/hooks/useInteractionTracking';

interface ProductCardProps {
  title: string;
  description: string;
  features: ReactNode[];
  cta: {
    text: string;
    href: string;
  };
  alpha?: string;
  className?: string;
  trackingId?: string;
}

const ProductCard = ({ title, description, features, cta, alpha, className = '', trackingId }: ProductCardProps) => {
  const { trackRef } = useInteractionTracking();
  const isNearAiDomain = cta.href.includes('near.ai');
  const shouldOpenNewTab = cta.href.startsWith('http') && !isNearAiDomain;

  return (
    <div className={`w-full lg:w-2/3 relative h-full ${className}`}>
      <div className="relative bg-black/30 p-8 rounded-xl border border-[#00EB9A]/20 backdrop-blur-sm h-full flex flex-col">
        <div className="flex items-start justify-between mb-4">
          <h3 className="text-2xl font-bold text-white">{title}</h3>
          {alpha && (
            <span className="px-3 py-1 text-sm bg-[#00EB9A]/10 text-[#00EB9A] rounded-full">
              {alpha}
            </span>
          )}
        </div>
        <p className="text-[#AFD0C5] mb-6">{description}</p>
        <ul className="space-y-3 mb-8 flex-grow">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center text-[#AFD0C5]">
              <ChevronRight className="h-5 w-5 text-[#00EB9A] mr-2" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        <a
          ref={(el) => trackRef(el, trackingId || `product_${title.toLowerCase().replace(/\s+/g, '_')}`)}
          href={cta.href}
          className={`
            inline-flex w-full items-center justify-center px-6 py-3 rounded-lg font-medium 
            transition-all group
            ${
              cta.text === 'Coming Soon'
                ? 'bg-gray-600 cursor-not-allowed opacity-50'
                : 'bg-[#00EB9A] text-black hover:bg-[#00EB9A]/90 shadow-[#00EB9A]/30 shadow-lg hover:shadow-xl'
            }
          `}
          {...(shouldOpenNewTab ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
          onClick={cta.text === 'Coming Soon' ? (e) => e.preventDefault() : undefined}
        >
          <span className="flex items-center">
            {cta.text}
            {cta.text !== 'Coming Soon' && (
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            )}
          </span>
        </a>
      </div>
    </div>
  );
};

const ProductSection = () => {
  return (
    <div className="relative py-24 w-full">
      {/* Vertical connecting line with stronger glow */}
      <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px hidden lg:block">
        {/* Base line */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#00EB9A]/0 via-[#00EB9A]/40 to-[#00EB9A]/0" />
        {/* Glow effect */}
        <div className="absolute inset-0 w-px blur-sm bg-gradient-to-b from-[#00EB9A]/0 via-[#00EB9A]/40 to-[#00EB9A]/0" />
      </div>

      <div className="max-w-[1920px] mx-auto px-8">
        <div className="space-y-16">
          {/* Developer Hub - Left */}
          <div className="flex justify-start w-full min-h-[400px]">
            <ProductCard
              title="Developer Hub"
              description="Build cutting-edge AI models, get paid for your contributions"
              features={[
                'Join our first model training competition',
                'Develop and deploy specialized AI agents',
                'Build the rewards and royalties system with us',
              ]}
              cta={{ text: 'Try Developer Hub', href: 'https://app.near.ai' }}
              alpha="alpha"
              trackingId="product_developer_hub"
            />
          </div>

          {/* AI Assistant - Right */}
          <div className="flex justify-end w-full min-h-[400px]">
            <ProductCard
              title="AI Assistant"
              description="Takes action for you across Web2 and Web3"
              features={[
                'Works for you, not just talks to you',
                'Built on open standards and protocols',
                'Alpha stage today, much more to come',
              ]}
              cta={{ text: 'Chat with Assistant', href: 'https://chat.near.ai' }}
              alpha="alpha v2"
              trackingId="product_ai_assistant"
            />
          </div>

          {/* Agent Protocol - Left */}
          <div className="flex justify-start w-full min-h-[400px] lg:mr-auto lg:pr-16">
            <ProductCard
              title="Agent Protocol"
              description="The open standard for AI agents to connect, act, and transact"
              features={[
                'Connect across Web2 and Web3 services',
                'Open-source and community-driven',
                'Join the protocol working group',
              ]}
              cta={{ text: 'Coming Soon', href: '#' }}
              trackingId="product_agent_protocol"
            />
          </div>

          {/* Contact Us - Right */}
          <div className="flex justify-end w-full min-h-[400px]">
            <ProductCard
              title="Contact Us"
              description="Let us know how we can support your project"
              features={[
                <span key="rfps">
                  View current <Link href="/rfps" className="text-[#00EB9A] hover:text-[#00EB9A]/80 transition-colors">
                    Requests for Proposals (RFPs)
                  </Link>
                </span>,
                <span key="hackathon">
                  Get involved with an <a href="http://onetrillionagents.com/" target="_blank" rel="noopener noreferrer" className="text-[#00EB9A] hover:text-[#00EB9A]/80 transition-colors">
                    AI Hackathon
                  </a>
                </span>
              ]}
              cta={{ text: 'Get In Touch', href: 'https://airtable.com/appc0ZVhbKj8hMLvH/pag4dQKP3KF3qrTFo/form' }}
              trackingId="product_contact_us"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSection;
