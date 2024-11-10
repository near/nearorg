import React from 'react';

import AnimatedBackground from '@/components/pages/NearAI/AnimatedBackground';
import Navbar from '@/components/pages/NearAI/Navbar';

interface PageWrapperProps {
  children: React.ReactNode;
  className?: string;
  withAnimation?: boolean; // If we want to disable animations on some pages
}

const PageWrapper = ({ children, className = '', withAnimation = true }: PageWrapperProps) => {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-x-hidden">
      {/* Background elements */}
      {withAnimation && <AnimatedBackground />}

      {/* Main content */}
      <div className="relative z-10">
        <Navbar />
        <main className={className}>{children}</main>
      </div>
    </div>
  );
};

export default PageWrapper;

// Blog layout specific wrapper
interface BlogWrapperProps {
  children: React.ReactNode;
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl';
}

export const BlogWrapper = ({ children, maxWidth = 'lg' }: BlogWrapperProps) => {
  const maxWidthClasses = {
    sm: 'max-w-2xl',
    md: 'max-w-3xl',
    lg: 'max-w-4xl',
    xl: 'max-w-5xl',
  };

  return (
    <PageWrapper withAnimation={false}>
      <div
        className={`${maxWidthClasses[maxWidth]} mx-auto px-4 sm:px-6 py-24 prose prose-invert
        prose-p:mb-12 prose-h2:text-3xl prose-h2:mt-24 prose-h2:mb-12 prose-h2:text-[#00EB9A]
        prose-ul:my-12 prose-li:my-4`}
      >
        {children}
      </div>
    </PageWrapper>
  );
};
