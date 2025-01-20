import React from 'react';

import BlogPost from '@/components/pages/NearAI/BlogPost';

const TEEBlogPost = () => {
  return (
    <BlogPost
      title="Building Next-Gen NEAR AI Infrastructure with TEEs"
      date="2025-01-20"
      author={{
        name: 'Illia Polosukhin',
      }}
    >
      <p className="text-xl text-[#AFD0C5] italic text-center mb-12">
        Enabling Fully Private, Verifiable AI Agents with Phala Network
      </p>

      <div className="bg-black/30 border border-[#00EB9A]/20 rounded-xl p-6 mb-16">
        <h2 className="text-white font-bold mb-4 text-xl">TLDR:</h2>
        <ul className="text-[#AFD0C5] list-disc pl-4 space-y-3">
          <li>
            The first open source private ML SDK, built by{' '}
            <a href="https://phala.network/" className="text-[#00EB9A] no-underline hover:underline">
              Phala Network
            </a>{' '}
            in collaboration with NEAR AI, is now live
          </li>
          <li>
            This initial piece of TEE infra will enable developers to build private + trusted AI agents, paving the way
            for many more agentic use cases & broader adoption
          </li>
          <li>
            Next step: a one-click version to run any model or agent through privacy-preserving infra on NEAR AI Hub
          </li>
        </ul>
      </div>

      <p className="text-lg leading-relaxed mb-12 text-[#AFD0C5]">
        NEAR AI is building infrastructure to power the User-Owned AI stack. The base layer of this stack is TEE
        infrastructure for ensuring privacy and verifiability of all data and code. TEE stands for "trusted execution
        environment," meaning a secure area in a hardware processor that guarantees the code and data running through it
        are not accessible to the operator of the machine. These TEE processors––Intel CPUs and NVIDIA GPUs––enable
        confidential computing for a range of privacy-preserving AI apps with verifiable security guarantees.
      </p>

      <h2 className="text-3xl font-bold mt-24 mb-12 text-[#00EB9A]">Enabling Privacy-Preserving AI with TEE</h2>

      <p className="text-lg leading-relaxed mb-12 text-[#AFD0C5]">
        Today, the first piece of TEE infra from NEAR AI – an SDK built by Phala Network – is now{' '}
        <a href="https://github.com/nearai/Private-ML-SDK" className="text-[#00EB9A] no-underline hover:underline">
          live
        </a>{' '}
        and is fully open source. The NEAR AI team will use TEE infra to verify that all AI agents running inference via
        the NEAR AI Hub are private. This enables verifiably secure data – unlike many of today's popular AI agents,
        which offer no guarantees against stealing data nor how potentially sensitive inputs are being used to train
        models. Closed source AI companies have already made{' '}
        <a
          href="https://www.cnbc.com/2023/03/23/openai-ceo-says-a-bug-allowed-some-chatgpt-to-see-others-chat-titles.html"
          className="text-[#00EB9A] no-underline hover:underline"
        >
          major
        </a>{' '}
        <a
          href="https://www.mondaq.com/italy/privacy-protection/1569616/data-privacy-violation-openaichatgpt-to-pay-a-fine-of-15-million-euros"
          className="text-[#00EB9A] no-underline hover:underline"
        >
          mistakes
        </a>{' '}
        with compromising sensitive data and even today's most popular decentralized AI platforms are not providing any
        privacy or security guarantees for users' data.
      </p>

      <p className="text-lg leading-relaxed mb-12 text-[#AFD0C5]">
        The cryptographic assurance of TEEs opens up a lot of use cases that aren't possible with today's agents because
        of data sensitivity. With verifiable security guarantees, users and businesses alike can be confident that all
        of their data remains encrypted and protected throughout the entire AI process––from when it's first submitted
        by users, through the computation phase, until the final results are delivered.
      </p>

      <h2 className="text-3xl font-bold mt-24 mb-12 text-[#00EB9A]">Unlocking New Use Cases & Enterprise Adoption</h2>

      <p className="text-lg leading-relaxed mb-12 text-[#AFD0C5]">
        TEE-powered AI infrastructure presents a quantum leap forward in the kinds of applications and use cases that
        can run on open-source AI models. With assurance that user data remains 100% private during AI inference and
        verifiable proof that AI computations are executed as intended, it is now possible to create open source AI
        solutions with sensitive financial data or healthcare records, as well as enterprise or even government
        applications. When combined with crypto-based payments and NEAR's identity and security features, this unlocks
        significant value for businesses and builders who were previously unable to safely work with first-generation AI
        agents, whether closed source or decentralized.
      </p>

      <p className="text-lg leading-relaxed mb-12 text-[#AFD0C5]">
        This makes it possible for enterprises or data owners to work together without having to share any data or make
        it visible to one another. If Business A can run Business B's software on their own hardware, each provisioning
        services to one another and running compute over proprietary data while ensuring total privacy on both sides, a
        lot of new use cases become possible. One example might be, different hospitals or doctors' offices that each
        have health data they don't want to expose to one another can share information without violating
        confidentiality obligations.
      </p>

      <p className="text-lg leading-relaxed mb-12 text-[#AFD0C5]">
        TEE infra also enables sensitive data to be used for fine tuning more specialized models without making that
        data visible to anyone––this could apply for the same example of medical records, resulting in much more
        effective models for health use cases overall. This also works for restricting how a model is used, including a
        model that results from such specialized fine-tuning. So it could explicitly prevent anyone running inference on
        sensitive data from making queries about that data. Likewise, this makes it possible to demand pay per usage of
        a model and enables monetization of model usage overall––more on this from NEAR AI soon.
      </p>

      <p className="text-lg leading-relaxed mb-12 text-[#AFD0C5]">
        At a high level, this brings us closer to realizing the user-owned AI vision of an AI agent personal assistant
        that can interact with all of a user's data without compromising their privacy. Imagine AI agents for end users
        that can pay bills or even complete tax paperwork – with better security than today's Web2 and analog tools.
      </p>

      <h2 className="text-3xl font-bold mt-24 mb-12 text-[#00EB9A]">How Does It Work?</h2>

      <p className="text-lg leading-relaxed mb-12 text-[#AFD0C5]">
        The SDK is designed to support high-performance AI workloads while providing cryptographic proof that the
        computations were executed correctly and privately. Thanks to Remote Attestation, users also get proof that
        their application is running on genuine, secure hardware with the correct, unmodified code. Importantly, the
        solution from NEAR AI & Phala achieves this without significant performance penalties compared to running in a
        traditional way.
      </p>

      <p className="text-lg leading-relaxed mb-12 text-[#AFD0C5]">
        The SDK combines NVIDIA GPU TEE and Intel TDX technologies to create a secure, verifiable infrastructure for
        running AI models. TDX (Intel Trust Domain Extensions) is Intel's virtualization-based security technology used
        to create isolated, encrypted virtual machines that protect sensitive data from unauthorized access. GPU TEE is
        NVIDIA's confidential computing technology for graphics processing units to protect AI workloads and data during
        computation. The SDK also creates a reproducible system for trustless verification of AI computations while
        being permissionless and hardware agnostic.
      </p>

      <h2 className="text-3xl font-bold mt-24 mb-12 text-[#00EB9A]">Advancing AI Agent Frameworks</h2>

      <p className="text-lg leading-relaxed mb-12 text-[#AFD0C5]">
        This first piece of TEE infrastructure is one step of many towards enabling private, verifiable AI that is truly
        user-owned. It will soon be integrated into the{' '}
        <a href="http://app.near.ai" className="text-[#00EB9A] no-underline hover:underline">
          NEAR AI Hub
        </a>{' '}
        agent hosting platform––and since it's open source, it's available for anyone interested to use right away.
        While it is not plug-and-play for all developers just yet, NEAR AI is committed to building in the open and
        making things open source along the way to encourage transparency and collaboration in the user-owned AI
        ecosystem.
      </p>

      <p className="text-lg leading-relaxed mb-12 text-[#AFD0C5]">
        If you're building agent frameworks or agents and want them to run in a private and verifiable way, check out
        the SDK{' '}
        <a href="https://github.com/nearai/Private-ML-SDK" className="text-[#00EB9A] no-underline hover:underline">
          on GitHub
        </a>{' '}
        and connect with us (
        <a href="https://t.me/nearaialpha" className="text-[#00EB9A] no-underline hover:underline">
          https://t.me/nearaialpha
        </a>
        ) for help getting started with NEAR.AI.
      </p>
    </BlogPost>
  );
};

export default TEEBlogPost;
