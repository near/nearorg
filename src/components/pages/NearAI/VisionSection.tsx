import React from 'react';

const VisionText = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
  <p className={`text-3xl font-light ${className}`}>{children}</p>
);

const GlowingText = ({ children }: { children: React.ReactNode }) => <span className="text-[#00EB9A]">{children}</span>;

const VisionSection = () => {
  return (
    <div className="relative py-32">
      {/* Optional gradient overlay */}
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <VisionText>AI is reshaping the internet.</VisionText>

          <VisionText>But today it's controlled by a handful of companies.</VisionText>

          <VisionText>Your data. Their profits.</VisionText>

          <VisionText className="text-3xl font-bold">
            The future must be <GlowingText>user-owned</GlowingText>.
          </VisionText>
        </div>
      </div>

      {/* Optional: animated background effect */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black" />
        {/* We can add the WebLines component here if desired */}
      </div>
    </div>
  );
};

export default VisionSection;
