import { format } from 'date-fns';
import { Facebook, Link as LinkIcon,Linkedin, Twitter } from 'lucide-react';
import React from 'react';

import { BlogWrapper } from '@/components/pages/NearAI/PageWrapper';

interface BlogPostProps {
  title: string;
  date: string;
  author: {
    name: string;
    avatar?: string;
    title?: string;
  };
  children: React.ReactNode;
}

const ShareButton = ({
                       href,
                       icon: Icon,
                       label
                     }: {
  href: string;
  icon: React.ElementType;
  label: string;
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="p-2 text-[#AFD0C5] hover:text-[#00EB9A] hover:bg-[#00EB9A]/10
              rounded-lg transition-all flex items-center gap-2"
    aria-label={`Share on ${label}`}
  >
    <Icon className="w-5 h-5" />
    <span className="sr-only">{label}</span>
  </a>
);

const SocialShare = ({ url, title }: { url: string; title: string }) => {
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  return (
    <div className="flex items-center gap-2 justify-center mt-24 pb-12 border-b border-[#00EB9A]/20">
      <span className="text-[#AFD0C5] mr-2">Share:</span>
      <ShareButton
        href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`}
        icon={Twitter}
        label="Twitter"
      />
      <ShareButton
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
        icon={Linkedin}
        label="LinkedIn"
      />
      <ShareButton
        href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
        icon={Facebook}
        label="Facebook"
      />
      <button
        onClick={() => {
          navigator.clipboard.writeText(url);
          // Could add a toast notification here
        }}
        className="p-2 text-[#AFD0C5] hover:text-[#00EB9A] hover:bg-[#00EB9A]/10
                   rounded-lg transition-all"
        aria-label="Copy link"
      >
        <LinkIcon className="w-5 h-5" />
      </button>
    </div>
  );
};

const BlogPost = ({ title, date, author, children }: BlogPostProps) => {
  const currentUrl = typeof window !== 'undefined' ? window.location.href : '';

  return (
    <BlogWrapper>
      <div className="max-w-[65ch] mx-auto px-6 md:px-8">
        <header className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">
            {title}
          </h1>

          <div className="flex items-center justify-center gap-4">
            <div className="text-center">
              <div className="font-medium text-white">{author.name}</div>
              <time className="text-sm text-[#AFD0C5]">
                {format(new Date(date), 'MMMM d, yyyy')}
              </time>
            </div>
          </div>
        </header>

        <div className="space-y-12">
          {children}
        </div>

        <SocialShare url={currentUrl} title={title} />
      </div>
    </BlogWrapper>
  );
};

export default BlogPost;