import { format } from 'date-fns';
import Link from 'next/link';
import React from 'react';

import PageWrapper from '@/components/pages/NearAI/PageWrapper';

const posts = [
  {
    slug: 'building-next-gen-near-ai-infrastructure-with-tees',
    title: 'Building Next-Gen NEAR AI Infrastructure with TEEs',
    excerpt: 'Enabling Fully Private, Verifiable AI Agents with Phala Network',
    date: '2025-01-20',
    author: {
      name: 'Illia Polosukhin',
    },
  },
  {
    slug: 'near-ai-research-hub-launch',
    title: 'NEAR AI Launches Research Hub to Build the Next Frontier AI Model',
    excerpt:
      'NEAR.AI is in the process of building the next generation frontier AI model with 1.4T parameters. The first competition is now live.',
    date: '2024-11-10',
    author: {
      name: 'Illia Polosukhin',
    },
  },
  {
    slug: 'near-ai-assistant-alpha',
    title: 'NEAR AI Assistant is in Alpha: User-Owned AI in Action',
    excerpt:
      'Today, NEAR AI is opening up access to NEAR AI Assistant (Alpha). This is the first step in our journey to put a User-Owned AI in the hands of everyone in the world.',
    date: '2024-11-10',
    author: {
      name: 'Illia Polosukhin',
    },
  },
];

const BlogIndex = () => {
  return (
    <PageWrapper withAnimation={true}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-24">
        <header className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">NEAR AI Blog</h1>
          <p className="text-xl text-[#AFD0C5]">Updates and insights from the NEAR AI team</p>
        </header>

        <div className="grid gap-8">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="block p-8 rounded-xl border border-[#00EB9A]/20 bg-black/30
                       backdrop-blur-sm hover:bg-black/40 transition-all group"
            >
              <div className="flex items-center gap-4 mb-4 text-sm text-[#AFD0C5]">
                <span>{post.author.name}</span>
                <span>•</span>
                <time dateTime={post.date}>{format(new Date(post.date), 'MMMM d, yyyy')}</time>
              </div>

              <h2 className="text-2xl font-bold mb-3">{post.title}</h2>

              <p className="text-[#AFD0C5]">{post.excerpt}</p>
            </Link>
          ))}
        </div>
      </div>
    </PageWrapper>
  );
};

export default BlogIndex;
