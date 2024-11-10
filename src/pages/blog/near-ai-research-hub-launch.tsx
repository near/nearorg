import React from 'react';

import BlogPost from '@/components/pages/NearAI/BlogPost';

const ResearchHubPost = () => {
  return (
    <BlogPost
      title="NEAR AI Launches Research Hub to Build the Next Frontier AI Model"
      date="2024-11-10"
      author={{
        name: 'Illia Polosukhin',
      }}
    >
      <div className="bg-black/30 border border-[#00EB9A]/20 rounded-xl p-6 mb-16">
        <h2 className="text-white font-bold mb-4 text-xl">TLDR:</h2>
        <ul className="text-[#AFD0C5] list-disc pl-4 space-y-3">
          <li>NEAR.AI is in the process of building the next generation frontier AI model with 1.4T parameters</li>
          <li>Using a Trusted Execution Environment, the model can be guaranteed to be private and monetizable</li>
          <li>
            We have launched the NEAR AI Research Hub to coordinate and incentivize researchers to work together to
            build these models. The first competition is now live at{' '}
            <a href="http://app.near.ai" className="text-[#00EB9A] no-underline hover:underline">
              app.near.ai
            </a>
          </li>
        </ul>
      </div>

      <p className="text-lg leading-relaxed mb-12 text-[#AFD0C5]">
        Open Source is broken. If the current scaling curve continues, the next generation of frontier AI models will
        have more than one trillion parameters. Training such a model will cost hundreds of millions of dollars—several
        times more than the biggest models today—and the generation after it will cost even more.
      </p>

      <p className="text-lg leading-relaxed mb-12 text-[#AFD0C5]">
        Today only large centralized AI labs can train such models. Few like Meta actually release their models in the
        open. We want to ensure that the best AI models are always available to everyone, permissionlessly. Everyone
        should have access to frontier AI models with absolute certainty that their data cannot be seen by anyone. Today
        we&apos;re launching the NEAR AI Research Hub, a community-built, decentralized frontier AI lab that can build
        bigger and better models than even the biggest, best-funded centralized companies can.
      </p>

      <p className="text-lg leading-relaxed mb-12 text-[#AFD0C5]">
        Our first goal at NEAR.AI is to create a model with 1.4T parameters (3.4x bigger than Meta&apos;s latest Llama
        model). This requires solving two problems: how to create the best 1.4T parameters model, and how to make it
        economically viable. It must be monetizable once it&apos;s trained; it needs a well-orchestrated decentralized
        research approach that can compete with the big companies&apos; labs; and it needs to be trainable over a
        physically distributed and/or slow network.
      </p>

      <p className="text-lg leading-relaxed mb-12 text-[#AFD0C5]">
        To get to the best 1.4T parameter model, we are starting a continuous competition on a 0.5B parameter model
        starting every month. We provide resources to all the researchers who want to contribute ideas towards the goal,
        including the ways to improve the quality and speed of the training loop, data preparation, and filtering. The
        results are measured on a publicly available benchmark.
      </p>

      <p className="text-lg leading-relaxed mb-12 text-[#AFD0C5]">
        We then continuously choose the subset of participants who performed best in this first level, and have them
        work on creating the best 2B model, and then the best 8B, 30B, 70B, 350B, and finally 1.4T. At each level, the
        number of participants gets smaller, and the model size becomes larger, until eventually the best researchers
        work on the final 1.4T parameter model, equipped with all the ideas and experiments from the previous steps. New
        researchers can keep joining at the entry level of each 0.5B competition cycle.
      </p>

      <p className="text-lg leading-relaxed mb-12 text-[#AFD0C5]">
        The smaller the number of participants, the more it will move from a competitive model to a collaborative one.
        The number of resources available will also increase over time. Let&apos;s expect that if we start with 1000
        participants in the first step, then somewhere around the 20 best researchers will work on the finishing touches
        for the 1.4T.
      </p>

      <p className="text-lg leading-relaxed mb-12 text-[#AFD0C5]">
        The first competition to train the 0.5B parameter model is open right now. Learn more,{' '}
        <a href="https://forms.gle/N9y5TGBcyoxVeFiCA" className="text-[#00EB9A] no-underline hover:underline">
          apply to participate
        </a>
        , and subscribe for updates about future competitions at{' '}
        <a href="http://app.near.ai" className="text-[#00EB9A] no-underline hover:underline">
          app.near.ai
        </a>
        .
      </p>

      <h2 className="text-3xl font-bold mt-24 mb-12 text-[#00EB9A]">Trusted Execution Environments</h2>

      <p className="text-lg leading-relaxed mb-12 text-[#AFD0C5]">
        How will we pull off building a 1.4T parameter, monetizable model in a decentralized way? Enter the world of
        Trusted Execution Environments, or TEEs. Modern processors and GPUs (starting with H100s) allow one actor,
        Alice, to run code on a machine of another actor, Bob, without trusting Bob, while having the following two
        guarantees: (a) Bob is in fact running the code Alice expected him to run, and (b) Bob cannot spy on the
        execution that Alice wants him to carry out. In other words, Alice can safely send any private data into such a
        computation, being certain Bob will not be able to see it.
      </p>

      <p className="text-lg leading-relaxed mb-12 text-[#AFD0C5]">
        This enables many great scenarios, including private inference: a network of TEE-enabled machines can run open
        source models, and anyone can run inference on their private data on such a network while being 100% certain
        their data is not seen by others.
      </p>

      <p className="text-lg leading-relaxed mb-12 text-[#AFD0C5]">
        TEEs enable training of a frontier large-language model in such a way that people can freely copy it to each
        other, but cannot use the model for free. The model can have fully open source implementation, with all the raw
        data and data processing pipelines open. It can then be trained on a cluster of TEE-enabled machines.
      </p>

      <p className="text-lg leading-relaxed mb-12 text-[#AFD0C5]">
        In this setup, the model is available to everyone, it can be run locally as long as the user has a TEE-enabled
        machine, everyone knows and can verify the exact way the model was trained; but each usage of the model must be
        paid for. We can use payment channels to enable the open source community to continuously pool resources to
        train larger and larger frontier LLMs, available to everyone in a permissionless fashion, and to be certain that
        the investment will pay off, fueling a sustainable way to then train each consecutive model.
      </p>

      <p className="text-lg leading-relaxed mb-12 text-[#AFD0C5]">
        Today NEAR is actively developing SDKs for TEE-enabled inference and training, and works with multiple ecosystem
        projects to ensure that a large number of machines with H100s are available on NEAR-enabled GPU marketplaces.
      </p>

      <h2 className="text-3xl font-bold mt-24 mb-12 text-[#00EB9A]">Decentralized Infrastructure</h2>

      <p className="text-lg leading-relaxed mb-12 text-[#AFD0C5]">
        To enable progress on open source frontier AI, we need a single decentralized place where people share, prepare,
        and monetize data and models, run and share experiments, provide and find compute resources, and generally
        conduct research. Massive datasets need to be stored, and APIs, real-time data providers, vector store
        databases, and other services in the decentralized networks all need verifiable liveness.
      </p>

      <p className="text-lg leading-relaxed mb-12 text-[#AFD0C5]">
        NEAR is building all the infrastructure components, such as decentralized storage, decentralized compute
        clusters, and the networking protocol with response and delivery guarantees directly into NEAR Protocol, with
        help from our ecosystem projects.
      </p>

      <h2 className="text-3xl font-bold mt-24 mb-12 text-[#00EB9A]">Join Us</h2>

      <p className="text-lg leading-relaxed mb-12 text-[#AFD0C5]">
        With TEE-enabled inference and training, an ecosystem contributing the necessary decentralized infrastructure
        components, and a training competition to build the best frontier model in an open and distributed way, we
        believe NEAR AI Research Hub is poised to achieve User-Owned AI that is better than the for-profit, centralized
        AI dominating the market today. Join us at{' '}
        <a href="http://app.near.ai" className="text-[#00EB9A] no-underline hover:underline">
          app.near.ai
        </a>{' '}
        or{' '}
        <a href="https://forms.gle/N9y5TGBcyoxVeFiCA" className="text-[#00EB9A] no-underline hover:underline">
          apply to participate
        </a>{' '}
        in the competition.
      </p>
    </BlogPost>
  );
};

export default ResearchHubPost;
