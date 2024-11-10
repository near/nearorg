import { ArrowRight, ChevronRight, Coins, Lock, Users } from 'lucide-react';
import React from 'react';

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a href={href} className="text-gray-400 hover:text-green-400 transition-colors px-4 py-2 text-sm tracking-wide">
    {children}
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
      inline-flex items-center px-8 py-3 rounded-md font-medium transition-all
      ${
        primary
          ? 'bg-green-500 text-black hover:bg-green-400 shadow-green-500/50 shadow-lg hover:shadow-xl'
          : 'bg-white/5 text-gray-300 hover:text-green-400 hover:bg-white/10 border border-gray-800'
      }
      ${className}
    `}
  >
    {children}
    <ArrowRight className="ml-2 h-4 w-4" />
  </a>
);

const GlowingText = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
  <span className={`text-green-400 ${className}`}>{children}</span>
);

const CircuitryBackground = () => <div className="absolute inset-0 bg-[url('/circuit-pattern.png')] opacity-5" />;

const DragonLogo = () => (
  <div className="relative w-24 h-24 mx-auto mb-8">
    <div className="absolute inset-0 bg-green-500 rounded-full blur-xl opacity-20 animate-pulse" />
    <img src="/dragon-logo.svg" alt="NEAR.ai" className="relative w-full h-full" />
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
  <div className="relative group">
    <div className="absolute inset-0 bg-green-500/5 rounded-md group-hover:bg-green-500/10 transition-all" />
    <div className="relative flex flex-col items-start p-8 border border-gray-800 rounded-md">
      <div className="p-3 bg-green-500/10 rounded-md mb-4">
        <Icon className="h-6 w-6 text-green-400" />
      </div>
      <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-green-400 transition-colors">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  </div>
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
  <div className="relative group">
    <div className="relative bg-black/40 p-8 border border-gray-800 rounded-md group-hover:border-green-900 transition-all">
      <div className="flex items-start justify-between mb-4">
        <h3 className="text-2xl font-bold text-white group-hover:text-green-400 transition-colors">{title}</h3>
        {alpha && <span className="px-3 py-1 text-sm bg-green-500/10 text-green-400 rounded-full">Alpha</span>}
      </div>
      <p className="text-gray-400 mb-6">{description}</p>
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-gray-400">
            <ChevronRight className="h-5 w-5 text-green-500 mr-2" />
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

const NewsletterSignup = () => (
  <div className="flex max-w-md mx-auto">
    <input
      type="email"
      placeholder="Enter your email"
      className="flex-1 px-6 py-3 bg-black/40 border border-gray-800 text-white placeholder-gray-500 focus:outline-none focus:border-green-500 rounded-l-md"
    />
    <button className="px-8 py-3 bg-green-500 text-black rounded-r-md hover:bg-green-400 transition-colors">
      Subscribe
    </button>
  </div>
);

const LandingPage = () => {
  return (
    <div className="relative min-h-screen text-white bg-black">
      <CircuitryBackground />

      {/* Navigation */}
      <nav className="relative border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex-shrink-0">
              <span className="text-2xl font-bold tracking-wider">NEAR.ai</span>
            </div>
            <div className="hidden md:flex items-center space-x-2">
              <NavLink href="https://app.near.ai">Research Hub alpha</NavLink>
              <NavLink href="https://chat.near.ai">AI Assistant alpha</NavLink>
              <NavLink href="#">AI Office Hours</NavLink>
              <NavLink href="/blog">Blog</NavLink>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
          <DragonLogo />
          <h1 className="text-5xl font-bold mb-6 tracking-tight">
            Building the world's best <GlowingText>truly open AI</GlowingText>.
          </h1>
          <p className="text-xl text-gray-400 mb-8">Join the community building the user-owned future of AI.</p>
          <p className="text-sm text-gray-500 mb-12">Early alpha. Big vision. Your chance to shape what's next.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <CTAButton href="https://app.near.ai" primary>
              Access Research Hub
            </CTAButton>
            <CTAButton href="https://chat.near.ai">Try AI Assistant</CTAButton>
          </div>
        </div>
      </div>

      {/* Vision Section */}
      <div className="relative py-32 bg-black/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <p className="text-3xl font-light">AI is reshaping the internet.</p>
            <p className="text-3xl font-light">But today it's controlled by a handful of companies.</p>
            <p className="text-3xl font-light">Your data. Their profits.</p>
            <p className="text-3xl font-bold">
              The future must be <GlowingText>user-owned</GlowingText>.
            </p>
          </div>
        </div>
      </div>

      {/* Products Section */}
      <div className="relative py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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

      {/* Features Section */}
      <div className="relative py-32 bg-black/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
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

      {/* Final CTA */}
      <div className="relative py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">
            The future of AI is <GlowingText>as yet unwritten</GlowingText>.
          </h2>
          <p className="text-xl text-gray-400 mb-12">It's time to take a stand. It's time for User-Owned AGI.</p>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative border-t border-gray-800 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-semibold mb-8">Get updates as we build the future of AI on NEAR</h3>
            <NewsletterSignup />
          </div>
          <div className="flex flex-wrap justify-center gap-4 mt-16">
            <CTAButton href="https://app.near.ai" primary>
              Access Research Hub
            </CTAButton>
            <CTAButton href="https://chat.near.ai">Try AI Assistant</CTAButton>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
