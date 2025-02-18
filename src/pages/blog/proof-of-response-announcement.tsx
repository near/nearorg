import React from 'react';

import BlogPost from '@/components/pages/NearAI/BlogPost';

const PostPage = () => {
  return (
    <BlogPost
      title="Announcing Proof of Response: a novel primitive in decentralized systems to guarantee liveness and responsiveness of services"
      date="2025-02-18"
      author={{
        name: 'Alex Skidanov',
      }}
    >
      <p className="text-lg leading-relaxed mb-12 text-[#AFD0C5]">
        Today Illia and I published a preprint of “Proof of Response,” a paper introducing a novel primitive for
        decentralized systems. Proof of Response is a novel mechanism for guaranteeing liveness and responsiveness of
        services, with a wide range of potential use cases. You can download and read the full paper{' '}
        <a
          download
          href="https://raw.githubusercontent.com/nearai/por/refs/heads/main/ProofOfResponse.pdf"
          className="text-[#00EB9A] no-underline hover:underline"
        >
          here
        </a>
        . We welcome comments and feedback.
      </p>
      <p className="text-lg leading-relaxed mb-12 text-[#AFD0C5]">
        In summary: Proof of Response is a new primitive to guarantee liveness and responsiveness of services in
        decentralized systems. Because decentralized networks composed of many participants or nodes––such as blockchain
        networks or groups of AI agents––contain so many interdependencies, Proof of Response offers a path to better
        performance overall and incentives for participants to complete the services they promise. It also introduces a
        more granular way for nodes to provide particular services to other nodes to enable higher quality service
        provision across a distributed network.
      </p>
      <p className="text-lg leading-relaxed mb-12 text-[#AFD0C5]">
        In Proof of Response, one participant or agent can request some data from another participant or agent, and
        either receive it, or prove to the system that the requested data has not been sent. This blog will illustrate
        how Proof of Response works by way of real world examples.
      </p>
      <p className="text-lg leading-relaxed mb-12 text-[#AFD0C5]">
        The NEAR AI team believes that in the very near future, the majority of human tasks will be performed by a
        massive network of interconnected AI agents. My personal agent will work with a specialized travel agent to book
        my vacation, which in turn will work with agents specific to airlines and hotels, car services and restaurant
        reservations.
      </p>
      <p className="text-lg leading-relaxed mb-12 text-[#AFD0C5]">
        In the morning, my personal agent will work with a shopping agent to buy coffee when I’m running low. Then it
        will pull the weather from the weather agent to show, and potentially take some action, such as to change AC
        settings. It will take action, that is, if the weather agent is online and live. If the weather agent is down,
        my personal assistant agent needs to get creative: find another weather agent, or act without having all the
        necessary information.
      </p>
      <p className="text-lg leading-relaxed mb-12 text-[#AFD0C5]">
        With millions of agents taking dependency on million other agents, agents going offline can cause chain
        reactions of downtime or suboptimal performance. For the system as a whole to work, there must be a way for
        agent providers to declare an uptime, and for the agent consumers to be able to punish providers if the declared
        uptime is not upheld.
      </p>
      <p className="text-lg leading-relaxed mb-12 text-[#AFD0C5]">
        The problem here is that if my personal assistant agent claims that the weather agent is offline, while the
        weather agent claims that it is online, there is no way for the system to verify which of the two of us is in
        the wrong. This problem is known as the “two generals problem” in computer networking.
      </p>
      <p className="text-lg leading-relaxed mb-12 text-[#AFD0C5]">
        In the simple case where the agent is either online for everyone, or offline for everyone, a system can be
        designed where once my personal assistant makes a claim that the weather agent is offline, a small number of
        validators ping the weather agent, and confirms whether it’s online or offline. Instead, we want a mechanism
        that can handle more sophisticated cases, in which the agent might not be offline for everybody, but it doesn’t
        want to serve a very particular request necessary for me.
      </p>
      <p className="text-lg leading-relaxed mb-12 text-[#AFD0C5]">
        The core idea behind Proof of Response is a network of interconnected relayers that connect a set of service
        providers (agents or services) and users (agents, services, or old fashioned humans). When a user, let’s call
        her Alice, wants to fetch some data from a service provider, let’s call her Sarah, Alice chooses a path via the
        relayers such that she is connected to the first relayer on the path, and Sarah is connected to the last. Say
        the path is Alice - Bob - Charlie - David - Sarah. Alice then sends the request to Bob, saying that she wants
        data from Sarah, and specifying the path via which to relay the message.
      </p>
      <p className="text-lg leading-relaxed mb-12 text-[#AFD0C5]">
        For each edge in the network, the protocol maintains the declared latency, and the cost to use it. The two
        participants on the two ends of the edge have a state channel open between them via which they route the
        payments for the messages. When Alice sends the message to Bob, both Alice and Bob know the cumulative latency
        of the path from Alice to Sarah. Once Bob has received the message, he must do one of the following:
      </p>
      <ol className="text-[#AFD0C5] list-decimal pl-4 space-y-3">
        <li>Send the response from Sarah to Alice, or</li>
        <li>Send to Alice a proof that one of the edges on her route to Sarah no longer exists.</li>
      </ol>
      <p className="text-lg leading-relaxed mb-12 text-[#AFD0C5]">
        Moreover, Bob must either do one of those two things within the cumulative declared latency of the edges on the
        path, or let’s say for each 200ms (a number that Alice and Bob need to agree upon in advance) of delay, they
        would need to send Alice a small payment via their payment channel. Note that Bob must be sending those small
        payments for as long as he hasn’t sent to Alice either the response from Sarah, or a proof of a broken edge. In
        particular, if Sarah chooses not to respond to the message, Bob will eventually have to send Alice a proof of a
        broken edge.
      </p>
      <p className="text-lg leading-relaxed mb-12 text-[#AFD0C5]">
        If we now consider the protocol between Bob and Charlie, we will notice that for as long as Charlie sticks to
        the protocol, Bob will also be able to. Once Charlie sends Bob the response or the proof of a broken edge, Bob
        can forward it to Alice, and for every 200ms of delay, Bob forwards Alice the payment from Charlie. If Charlie
        deviates from the protocol, meaning that he doesn’t send Bob the payment for the delay, Bob can choose to either
        break the edge, and thus still conform to the protocol, or wait for Charlie and pay the delay fee out of pocket.
      </p>
      <p className="text-lg leading-relaxed mb-12 text-[#AFD0C5]">
        Alice pays for the message routed, and Bob, Charlie, and David all make money from messages sent by Alice and
        other users of the network. Thus, if Sarah ends up not responding to the message from Alice, for David it makes
        no sense to sacrifice their edge with Charlie, with whom they do business, and the most likely outcome is that
        an edge that is immediately incident to Sarah will end up being broken.
      </p>
      <p className="text-lg leading-relaxed mb-12 text-[#AFD0C5]">
        Either way, Alice either receives the response from Sarah, with a small compensation for any delay, or receives
        proof that someone deviated from the protocol, and an edge was destroyed. In the latter case, Alice can continue
        issuing the same request over different paths, until Sarah is separated from the network.
      </p>
      <p className="text-lg leading-relaxed mb-12 text-[#AFD0C5]">
        Proof of Response doesn’t itself impose any requirements on the message that Sarah sends to Alice besides the
        fact that it needs to be signed by Sarah. It is up to the protocols that build on top of Proof of Response to
        introduce validation of such messages, and procedures to enforce their correctness. This also means that Proof
        of Response can be used by many types of protocols and many different use cases, from AI to crypto and beyond.
      </p>
      <p className="text-lg leading-relaxed mb-12 text-[#AFD0C5]">
        As another example, consider a data storage protocol. Protocols such as Filecoin, Arweave, Sia, and OnMachina
        have mechanisms in place to ensure that the providers of the storage store the file for the agreed upon
        duration, but they do not have a way to ensure that the data is served. In such protocols the data providers
        already have a stake that works as an assurance that the data is stored. With proof of response, the protocols
        can reuse the same stake to ensure that the data is also served. A user that wants to get data from the storage
        provider can request it via Proof of Response. As was shown above, they will either receive the response from
        the provider, or separate them from the network. The data storage protocol can build extra slashing mechanisms
        into their contracts that would slash the data provider if they get disconnected from the network, or if the
        user can provide any message signed by the data provider that doesn’t adhere to the data storage protocol.
      </p>
      <p className="text-lg leading-relaxed mb-12 text-[#AFD0C5]">
        Once we started working on Proof of Response, we noticed that there are many places where it can be helpful. For
        example, blockchain nodes would be easier to design if the nodes can be certain that their peers will respond to
        their block requests. AI inference providers such as Hyperbolic can provide provable guaranteed uptime to their
        users.
      </p>
      <p className="text-lg leading-relaxed mb-12 text-[#AFD0C5]">
        Most importantly, in a large network of AI agents, agent creators can provide assurances to the developers who
        want to take dependency on their agents that either their agents will be online and available, or a compensation
        will be paid out to the developer, all handled by smart contracts. This way, Proof of Response ensures liveness
        of agents in the agentic Internet of the future.
      </p>
      <p className="text-lg leading-relaxed mb-12 text-[#AFD0C5]">
        Besides liveness, we also need to ensure the safety of the agents, meaning that we want to make sure that the
        agents do what they claim to do, and do not leak private user data in doing so. Both of these guarantees can be
        ensured by using another technology called Trusted Execution Environments (TEEs). NEAR AI will be using Proof of
        Response as part of a system utilizing TEEs and will share another post about how it works very soon.
      </p>
      <p className="text-lg leading-relaxed mb-12 text-[#AFD0C5]">
        For those interested in downloading and reading the full Proof of Response paper or offering comments and
        feedback, here’s{' '}
        <a
          download
          href="https://raw.githubusercontent.com/nearai/por/refs/heads/main/ProofOfResponse.pdf"
          className="text-[#00EB9A] no-underline hover:underline"
        >
          the link
        </a>{' '}
        again.
      </p>
    </BlogPost>
  );
};

export default PostPage;
