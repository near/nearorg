import { format, parseISO } from 'date-fns';
import { ArrowRight } from 'lucide-react';
import type { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import React from 'react';

import { BlogWrapper } from '@/components/pages/NearAI/PageWrapper';
import { rfps } from '@/data/rfps';

export const getServerSideProps = (async (req) => {
  const slug = req.query.slug as string;
  const rfp = rfps.find((item) => item.slug === slug);

  if (!rfp)
    return {
      notFound: true,
    };

  return { props: { rfp } };
}) satisfies GetServerSideProps<{ rfp: (typeof rfps)[number] }>;

export default function RfpPost({ rfp }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <BlogWrapper>
      <div className="mx-auto px-6 md:px-8 space-y-12">
        <header className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">{rfp.title}</h1>

          <div className="flex items-center justify-center gap-4">
            <div className="text-center">
              <div className="font-medium text-white">{rfp.author.name}</div>
              <time className="text-sm text-[#AFD0C5]">{format(parseISO(rfp.date), 'MMMM d, yyyy')}</time>
            </div>
          </div>
        </header>

        <div
          className="space-y-12"
          dangerouslySetInnerHTML={{
            __html: rfp.content,
          }}
        />

        <a
          href={rfp.submitProposalUrl}
          target="_blank"
          className={`
      inline-flex items-center px-8 py-3 rounded-lg font-medium transition-all
      bg-[#00EB9A] text-black hover:bg-[#00EB9A]/90 shadow-[#00EB9A]/30 shadow-lg hover:shadow-xl
    `}
        >
          Submit Proposal
          <ArrowRight className="ml-2 h-4 w-4" />
        </a>
      </div>
    </BlogWrapper>
  );
}
