import { ArrowRight, ChevronRight, Coins, Lock, Users } from 'lucide-react';
import React from 'react';

const NavLink = ({ href, children, className }: { href: string; children: React.ReactNode; className?: string }) => (
  <a
    href={href}
    className={`group flex items-center gap-2 text-[#AFD0C5] hover:text-white transition-colors px-4 py-2 ${className || ''}`}
  >
    {children}
    <span className="opacity-0 group-hover:opacity-100 transition-opacity">
      <svg width="16" height="16" viewBox="0 0 16 16" className="translate-y-[1px]">
        <path stroke="currentColor" strokeWidth="1.2" d="M2.4 13.6L13.6 2.4M13.6 2.4V11.0545M13.6 2.4H4.94536" />
      </svg>
    </span>
  </a>
);

const CTAButton = ({
  href,
  children,
  primary = false,
  className = '',
}: {
  href: string;
  children: React.ReactNode;
  primary?: boolean;
  className?: string;
}) => (
  <a
    href={href}
    className={`
      inline-flex items-center px-6 py-3 rounded-lg font-medium transition-all
      ${
        primary
          ? 'bg-[#00EB9A] text-black hover:bg-[#00EB9A]/90'
          : 'bg-white/5 text-white hover:bg-white/10 border border-[#00EB9A]/20'
      }
      ${className}
    `}
  >
    {children}
    <ArrowRight className="ml-2 h-4 w-4" />
  </a>
);

const ProductCard = ({
  title,
  description,
  features,
  cta,
  alpha,
}: {
  title: React.ReactNode;
  description: React.ReactNode;
  features: React.ReactNode[];
  cta: { text: React.ReactNode; href: string };
  alpha: React.ReactNode;
}) => (
  <div className="bg-black/30 p-8 rounded-xl border border-[#00EB9A]/20 backdrop-blur-sm relative group overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-b from-[#00EB9A]/0 via-[#00EB9A]/[0.02] to-[#00EB9A]/[0.08] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    <div className="relative">
      <div className="flex items-start justify-between mb-4">
        <h3 className="text-2xl font-bold text-white group-hover:text-[#00EB9A] transition-colors">{title}</h3>
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
      <CTAButton href={cta.href} primary className="w-full justify-center">
        {cta.text}
      </CTAButton>
    </div>
  </div>
);

const FeatureCard = ({
  title,
  description,
  icon: Icon,
}: {
  title: React.ReactNode;
  description: React.ReactNode;
  icon: React.ElementType;
}) => (
  <div className="relative group overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-b from-[#00EB9A]/0 via-[#00EB9A]/[0.02] to-[#00EB9A]/[0.08] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    <div className="relative flex flex-col items-start p-6 bg-black/30 backdrop-blur-sm rounded-xl border border-[#00EB9A]/20">
      <div className="p-3 bg-[#00EB9A]/10 rounded-lg mb-4">
        <Icon className="h-6 w-6 text-[#00EB9A]" />
      </div>
      <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-[#00EB9A] transition-colors">{title}</h3>
      <p className="text-[#AFD0C5]">{description}</p>
    </div>
  </div>
);

const NewsletterSignup = () => (
  <div className="flex max-w-md mx-auto">
    <input
      type="email"
      placeholder="Enter your email"
      className="flex-1 px-4 py-3 bg-black/30 border border-[#00EB9A]/20 text-white placeholder-gray-500 focus:outline-none focus:border-[#00EB9A]/50 rounded-l-lg"
    />
    <button className="px-6 py-3 bg-[#00EB9A] text-black rounded-r-lg hover:bg-[#00EB9A]/90 transition-colors">
      Subscribe
    </button>
  </div>
);

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-[#00EB9A]/20 backdrop-blur-md bg-black/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between h-16 items-center">
            <div className="flex-shrink-0 text-2xl font-bold">NEAR.ai</div>
            <div className="flex items-center gap-2">
              <NavLink href="https://app.near.ai">
                Research Hub<span className="text-[#00EB9A]">alpha</span>
              </NavLink>
              <NavLink href="https://chat.near.ai">
                AI Assistant<span className="text-[#00EB9A]">alpha</span>
              </NavLink>
              <NavLink href="https://youtube.com/playlist?list=PL9tzQn_TEuFWMuPiQOXhaE5lpOTnxLPZY">
                AI Office Hours
              </NavLink>
              <NavLink href="/blog">Blog</NavLink>
              <NavLink href="/about">About</NavLink>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <div className="relative">
        <div className="max-w-4xl mx-auto px-4 pt-24 pb-16 text-center">
          <h1 className="text-5xl font-bold mb-6">
            Building the world&apos;s best <span className="text-[#00EB9A]">truly open AI</span>.
          </h1>
          <p className="text-xl text-[#AFD0C5] mb-12">Join the community building the user-owned future of AI.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <CTAButton href="https://app.near.ai" primary>
              Access Research Hub
            </CTAButton>
            <CTAButton href="https://chat.near.ai">Try AI Assistant</CTAButton>
          </div>
        </div>
      </div>

      {/* Vision Section */}
      <div className="bg-black/50 py-24">
        <div className="max-w-3xl mx-auto px-4 text-center space-y-8">
          <p className="text-3xl font-light">AI is reshaping the internet.</p>
          <p className="text-3xl font-light">But today it&apos;s controlled by a handful of companies.</p>
          <p className="text-3xl font-light">Your data. Their profits.</p>
          <p className="text-3xl font-bold">
            The future must be <span className="text-[#00EB9A]">user-owned</span>.
          </p>
        </div>
      </div>

      {/* Products Section */}
      <div className="py-24 relative">
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#00EB9A]/0 via-[#00EB9A]/20 to-[#00EB9A]/0 hidden lg:block"></div>
        <div className="max-w-7xl mx-auto px-4">
          <div className="space-y-16">
            {/* Research Hub - Left */}
            <div className="lg:w-[600px] lg:mr-auto lg:pr-16">
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
            <div className="lg:w-[600px] lg:ml-auto lg:pl-16">
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
            <div className="lg:w-[600px] lg:mr-auto lg:pr-16">
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
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-black/50 py-24">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              title="User-Owned AI"
              description="Your data is always yours. Your AI works for you, not corporations. No compromises on privacy or ownership."
              icon={Lock}
            />
            <FeatureCard
              title="Shape What's Next"
              description="Join the community building the future of AI: open standards, protocols, and models that put users first."
              icon={Users}
            />
            <FeatureCard
              title="Get Paid to Build"
              description="Move beyond tinkering and side projects. We're building a sustainable model where AI researchers and developers earn rewards and royalties for their open-source contributions."
              icon={Coins}
            />
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-[#00EB9A]/20 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-semibold mb-6">Get updates as we build the future of AI on NEAR</h3>
            <NewsletterSignup />
          </div>
          <div className="flex flex-wrap justify-center gap-4 mt-16 mb-12">
            <CTAButton href="https://app.near.ai" primary>
              Access Research Hub
            </CTAButton>
            <CTAButton href="https://chat.near.ai">Try AI Assistant</CTAButton>
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-[#AFD0C5]">
            <NavLink href="https://app.near.ai">
              Research Hub<span className="text-[#00EB9A]">alpha</span>
            </NavLink>
            <NavLink href="https://chat.near.ai">
              AI Assistant<span className="text-[#00EB9A]">alpha</span>
            </NavLink>
            <NavLink href="https://youtube.com/playlist?list=PL9tzQn_TEuFWMuPiQOXhaE5lpOTnxLPZY">
              AI Office Hours
            </NavLink>
            <NavLink href="/blog">Blog</NavLink>
            <NavLink href="/about">About</NavLink>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
