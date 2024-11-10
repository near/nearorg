import { Coins, Lock, Users } from 'lucide-react';
import React from 'react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ElementType;
}

const FeatureCard = ({ title, description, icon: Icon }: FeatureCardProps) => (
  <div className="relative group overflow-hidden">
    {/* Gradient background that appears on hover */}
    <div className="absolute inset-0 bg-gradient-to-b from-[#00EB9A]/0 via-[#00EB9A]/[0.02] to-[#00EB9A]/[0.08] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

    {/* Main content */}
    <div className="relative flex flex-col items-start p-8 bg-black/30 backdrop-blur-sm rounded-xl border border-[#00EB9A]/20">
      {/* Icon container with glow */}
      <div className="relative mb-6">
        <div className="absolute inset-0 bg-[#00EB9A]/20 blur-xl rounded-full" />
        <div className="relative p-4 bg-[#00EB9A]/10 rounded-lg">
          <Icon className="h-6 w-6 text-[#00EB9A]" />
        </div>
      </div>

      <h3 className="text-xl font-semibold mb-4 text-white">{title}</h3>

      <p className="text-[#AFD0C5] text-lg">{description}</p>
    </div>
  </div>
);

const FeaturesSection = () => {
  return (
    <div className="relative py-32 overflow-hidden">
      {/* Optional gradient background */}
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
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

      {/* Decorative elements */}
      <div className="absolute -bottom-1/2 left-0 right-0 h-full bg-gradient-to-t from-black to-transparent pointer-events-none" />
      <div className="absolute -top-1/2 left-0 right-0 h-full bg-gradient-to-b from-black to-transparent pointer-events-none" />
    </div>
  );
};

export default FeaturesSection;
