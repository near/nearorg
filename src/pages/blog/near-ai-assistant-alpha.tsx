import React from 'react';

import BlogPost from '@/components/pages/NearAI/BlogPost';

const AssistantPost = () => {
  return (
    <BlogPost
      title="NEAR AI Assistant is in Alpha: User-Owned AI in Action"
      date="2024-11-10"
      author={{
        name: "Illia Polosukhin"
      }}
    >
      <p className="text-lg leading-relaxed mb-12 text-[#AFD0C5]">
        In the last couple of years, AI assistants have become a part of many people&apos;s daily lives for performing and streamlining all sorts of everyday tasks. But they have a major shortcoming: they can gather information and answer questions in text format, but they can&apos;t take any actions on behalf of the user.
      </p>

      <p className="text-lg leading-relaxed mb-12 text-[#AFD0C5]">
        At NEAR, we believe that the future is AI-first and that everyone will have their own AI assistant as the primary way to interact with computing and the Internet. Instead of various middleman companies capturing value from every user interaction, User-Owned AI should be powering assistants to focus on the individual user&apos;s success and wellbeing and to guarantee privacy.
      </p>

      <p className="text-lg leading-relaxed mb-12 text-[#AFD0C5]">
        Today, NEAR AI is opening up access to NEAR AI Assistant (Alpha). You can check it out at <a href="https://chat.near.ai" className="text-[#00EB9A] no-underline hover:underline">chat.near.ai</a>.
      </p>

      <p className="text-lg leading-relaxed mb-12 text-[#AFD0C5]">
        This is the first step in our journey to put a User-Owned AI in the hands of everyone in the world. The alpha version of NEAR AI Assistant is taking the first steps of executing actions on the user&apos;s behalf, such as preparing blockchain-based actions or shopping. It has user-specific memory and can act on the user&apos;s behalf in both Web2 and Web3 by connecting with other AI agents and services. It does this by calling other agents to which it has access with a request for a specific action. The NEAR AI Assistant also knows how to present the response, either in text or by generating a rich user interface when it&apos;s needed.
      </p>

      <div className="relative aspect-video w-full mb-16 rounded-xl overflow-hidden">
        <iframe
          src="https://www.youtube.com/embed/pqt71pObjaY"
          title="NEAR AI Assistant Demo"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute top-0 left-0 w-full h-full"
        />
      </div>

      <p className="text-lg leading-relaxed mb-12 text-[#AFD0C5]">
        We are open sourcing the whole platform to enable the community to build more integrations and functionality, as well as to offer the assistant to their own users. You can find the source code for the NEAR AI Assistant <a href="https://app.near.ai/agents/agentic.near/assistant/0.0.9/source" className="text-[#00EB9A] no-underline hover:underline">here</a> and the overall tooling <a href="https://github.com/nearai/nearai" className="text-[#00EB9A] no-underline hover:underline">here</a>. It is designed to allow developers to contribute new functionality in a permissionless way by building specialized agents.
      </p>

      <p className="text-lg leading-relaxed mb-12 text-[#AFD0C5]">
        We envision that in future versions, the NEAR AI Assistant will be able to predict users&apos; needs by analyzing context, perform complex tasks by coordinating a number of other agents performing different jobs, and even transact with third party services across both Web2 and Web3 on the user&apos;s behalf.
      </p>

      <p className="text-lg leading-relaxed mb-12 text-[#AFD0C5]">
        AI has the power to make humans more efficient, productive, and collaborative—but this must not come at the expense of data ownership, privacy, and economic opportunity for individuals. While this alpha product is just the beginning of making User-Owned AI a reality, it is an important first step towards making sure the AI we use every day is privacy-preserving, community-built and -owned, and designed to benefit users not corporations.
      </p>

      <p className="text-lg leading-relaxed mb-12 text-[#AFD0C5]">
        Try the NEAR AI Assistant alpha at <a href="https://chat.near.ai" className="text-[#00EB9A] no-underline hover:underline">chat.near.ai</a> and follow along for updates and new functionality at <a href="https://near.ai" className="text-[#00EB9A] no-underline hover:underline">near.ai</a>.
      </p>
    </BlogPost>
  );
};

export default AssistantPost;