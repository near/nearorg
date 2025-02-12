import { format, parseISO } from 'date-fns';
import Link from 'next/link';

import PageWrapper from '@/components/pages/NearAI/PageWrapper';
import { rfps } from '@/data/rfps';

const RFPList = () => {
  return (
    <PageWrapper withAnimation={true}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-24">
        <header className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Requests for Proposals</h1>
          <p className="text-xl text-[#AFD0C5]">Join us in building the future of intelligent agents</p>
        </header>

        <div className="grid gap-8">
          {rfps.map((rfp) => (
            <Link
              key={rfp.slug}
              href={`/rfps/${rfp.slug}`}
              className="block p-8 rounded-xl border border-[#00EB9A]/20 bg-black/30
                   backdrop-blur-sm hover:bg-black/40 transition-all group"
            >
              <div className="flex items-center gap-4 mb-4 text-sm text-[#AFD0C5]">
                <span>{rfp.author.name}</span>
                <span>•</span>
                <time dateTime={rfp.date}>{format(parseISO(rfp.date), 'MMMM d, yyyy')}</time>
              </div>

              <h2 className="text-2xl font-bold mb-3">{rfp.title}</h2>

              <p className="text-[#AFD0C5]">{rfp.excerpt}</p>
            </Link>
          ))}
        </div>
      </div>
    </PageWrapper>
  );
};

export default RFPList;
