import { ArrowRight, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import type { ReactNode } from 'react';
import React from 'react';

interface ProductCardProps {
  title: string;
  description: string;
  features: ReactNode[];
  cta: {
    text: string;
    href: string;
  };
  alpha?: boolean;
  className?: string;
}

const ProductCard = ({ title, description, features, cta, alpha, className = '' }: ProductCardProps) => (
  <div className={`w-full lg:w-2/3 relative group ${className}`}>
    <div className="absolute inset-0 bg-gradient-to-b from-[#00EB9A]/0 via-[#00EB9A]/[0.02] to-[#00EB9A]/[0.08] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    <div className="relative bg-black/30 p-8 rounded-xl border border-[#00EB9A]/20 backdrop-blur-sm overflow-hidden">
      <div className="flex items-start justify-between mb-4">
        <h3 className="text-2xl font-bold text-white">{title}</h3>
        {alpha && <span className="px-3 py-1 text-sm bg-[#00EB9A]/10 text-[#00EB9A] rounded-full">Alpha</span>}
      </div>
      <p className="text-[#AFD0C5] mb-6">{description}</p>
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-[#AFD0C5]">
            <ChevronRight className="h-5 w-5 text-[#00EB9A] mr-2" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <a
        href={cta.href}
        className={`inline-flex w-full items-center justify-center px-6 py-3 rounded-lg font-medium transition-all
                 ${
                   cta.text === 'Coming Soon'
                     ? 'bg-gray-600 cursor-not-allowed opacity-50'
                     : 'bg-[#00EB9A] text-black hover:bg-[#00EB9A]/90'
                 }`}
        onClick={cta.text === 'Coming Soon' ? (e) => e.preventDefault() : undefined}
      >
        {cta.text}
        {cta.text !== 'Coming Soon' && <ArrowRight className="ml-2 h-4 w-4" />}
      </a>
    </div>
  </div>
);

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
          {/* Research Hub - Left */}
          <div className="flex justify-start w-full">
            <ProductCard
              title="Research Hub"
              description="Build cutting-edge AI models, get paid for your contributions"
              features={[
                'Join our first model training competition',
                'Develop and deploy specialized AI agents',
                'Build the rewards and royalties system with us',
              ]}
              cta={{ text: 'Research Hub (Alpha)', href: 'https://app.near.ai' }}
              alpha={true}
            />
          </div>

          {/* AI Assistant - Right */}
          <div className="flex justify-end w-full">
            <ProductCard
              title="AI Assistant"
              description="Takes action for you across Web2 and Web3"
              features={[
                'Works for you, not just talks to you',
                'Built on open standards and protocols',
                'Alpha stage today, much more to come',
              ]}
              cta={{ text: 'AI Assistant (Alpha)', href: 'https://chat.near.ai' }}
              alpha={true}
            />
          </div>

          {/* Agent Protocol - Left */}
          <div className="lg:mr-auto lg:pr-16">
            <ProductCard
              title="Agent Protocol"
              description="The open standard for AI agents to connect, act, and transact"
              features={[
                'Connect across Web2 and Web3 services',
                'Authorize and complete payments seamlessly',
                'Protect your data and identity',
              ]}
              cta={{ text: 'Coming Soon', href: '#' }}
              alpha={false}
            />
          </div>

          {/* Contact Us - Left */}
          <div className="flex justify-end w-full">
            <ProductCard
              title="Contact Us"
              description="Let us know how we can support your project"
              features={[
                <>
                  View current{' '}
                  <Link href="/rfps" className="text-[#00EB9A] no-underline hover:underline">
                    Requests for Proposals (RFPs)
                  </Link>
                </>,
                <>
                  Get involved with an{' '}
                  <a
                    href="http://onetrillionagents.com/"
                    target="_blank"
                    className="text-[#00EB9A] no-underline hover:underline"
                  >
                    AI Hackathon
                  </a>
                </>,
              ]}
              cta={{ text: 'Get In Touch', href: 'https://airtable.com/appc0ZVhbKj8hMLvH/pag4dQKP3KF3qrTFo/form' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSection;
