import styled from 'styled-components';

import { Flex } from '@/components/lib/Flex';

const Content = styled.div`
  max-width: 800px;
  margin: auto auto;
  //color: #e7e7e7;
  color: #000;
  background-color: #ccc;

  p {
    font-size: 16px;
    margin-bottom: 1.5em;
    margin-top: 1.5em;
    font-family:
      FK Grotesk,
      ui-sans-serif,
      system-ui,
      -apple-system,
      BlinkMacSystemFont,
      Segoe UI,
      Roboto,
      Helvetica Neue,
      Arial,
      Noto Sans,
      sans-serif,
      Apple Color Emoji,
      Segoe UI Emoji,
      Segoe UI Symbol,
      Noto Color Emoji;
    text-rendering: optimizeLegibility;
  }
`;

const H1 = styled.h1`
  font-size: 2.5em;
  font-weight: 700;
  margin-top: 1em;
  margin-bottom: 1em;
  text-align: center;
`;
export const NearAIHome = () => {
  return (
    <div>
      <Flex>
        <div className="grow relative">
          <div className="relative" style={{ backgroundColor: '#ccc' }}>
            <div>
              <img
                alt="Image | NEAR &amp; Social Good: Bringing Web3 to the Fringes"
                className="md:w-auto order-2 rounded-[10px] sm:col-span-2 sm:mb-[48px] sm:order-1 w-full"
                src="https://pages.near.org/wp-content/uploads/2024/01/illia-dragon-social.png"
              />
            </div>
            <Content>
              <H1> NEAR.AI Master Plan </H1>
              <div className="flex items-center justify-between mb-[20px]">
                <div className="font-[400] text-[#6D7073] text-[14px] uppercase">Illia Polosukhin</div>
                <div className="font-[400] text-[#6D7073] text-[14px]"> May, 2024</div>
              </div>
              <div className="md:prose-base prose">
                <p>
                  NEAR.AI will build towards Open Source AGI (artificial general intelligence). Here is the plan:
                  <ul>
                    <li>Teaching machines to code: AI Developer</li>
                    <li>Use AI Developer to teach machines to do research: AI Researcher</li>
                    <li>Use AI Researcher to advance science towards AGI that is owned by all</li>
                  </ul>
                </p>
                <p>
                  We commit to building in Open Source as a non-profit organization, the NEAR Foundation, driven by the
                  vision of{' '}
                  <a href="https://near.org/blog/self-sovereignty-is-near-a-vision-for-our-ecosystem" target="_blank">
                    Self-Sovereignty
                  </a>
                  . The NEAR ecosystem is best positioned to achieve this vision at scale by combining user distribution
                  in the tens of millions, a Web3 developer ecosystem that includes a growing number of AI projects, and
                  ample financial resources required to succeed in AI.
                </p>
                <p>
                  NEAR&apos;s initial product is a scalable blockchain that is easy to use and develop on, with more
                  active users than any other blockchain today. But the long term NEAR vision has always been to enable
                  all people to control their assets, data, and power of choice by transforming how we interact with
                  computing: I call this the Self Sovereign Operating System.
                </p>
                <p>
                  Critical to achieving this vision is User-Owned AI with capabilities that serve on the user’s behalf,
                  able to access all the users’ data without leaking it to third parties while optimizing for users’
                  benefit. User-owned AI means offering users the ability to customize their computing experience to the
                  deepest level without any compromises on ownership, privacy, or security. Beyond individual users, it
                  works across communities and brands while facilitating direct transactions without a middleman.
                </p>
                <p>
                  The NEAR.AI team, led by Alex Skidanov and me, will first build an “AI Developer.” We are attacking
                  the core problem: how to build end-to-end applications from user intent. Imagine asking an AI
                  Developer to build a note-taking app that has specific features personalized for you and all your data
                  is guaranteed to stay private.
                </p>
                <p>
                  At NEAR, we started building an AI Developer in 2017. My work on Transformers got me excited that we
                  could make progress on this world-changing problem. We tried building a co-pilot (
                  <a href="https://youtu.be/dNQV05Qry3A?si=6tIjKtnmExKe2M81" target="_blank">
                    video from 2017 of first AI-driven autocomplete
                  </a>
                  ) but this approach didn’t accomplish what we wanted. We tried to go directly for mobile application
                  building, but the problem space was too broad for models at the time. When we first looked at smart
                  contracts, we felt they were an interesting subset of coding but they were overshadowed by too many
                  other challenges with blockchains at that point in time.
                </p>
                <p>
                  Then{' '}
                  <a href="https://near.org/blog/near-ai-near-protocol" target="_blank">
                    NEAR went through a transition
                  </a>{' '}
                  in 2018, pivoting to build a decentralized development platform that truly works: scales to billions
                  of users, easy to use and program. This included a sharded blockchain protocol, decentralized
                  frontends, and middleware/indexing to create an end-to-end application framework. We felt this was the
                  best way to make an impact and empower developers at the time––we also thought it would take about six
                  months and then we’d go back to AI.
                </p>
                <p>
                  Now in mid-2024, there is a whole ecosystem of infrastructure and application builders who are
                  expanding what is possible using NEAR. NEAR has onboarded tens of millions of users, 2 million of whom
                  are daily active users, which creates a perfect substrate for the next stage of innovation: combining
                  Web3 and AI.
                </p>
                <p>
                  But there has been a major limitation in the blockchain space: products are fragmented across hundreds
                  of chains while the number of products developed today is not enough to truly offer a competitive
                  landscape to existing systems. There are less than{' '}
                  <a href="https://www.developerreport.com/" target="_blank">
                    7,000
                  </a>{' '}
                  full time developers in all of Web3, which is less than a single department at Google.
                </p>
                <p>
                  Web3 code is very valuable, meaning that it is expensive to develop and it supports multibillion
                  dollar projects on top of quite small codebases composing with other applications. This is in contrast
                  to the current Web2 software paradigm where a billion-dollar codebase contains orders of magnitude
                  more code and complexity. By removing the expense to build Web3 products and instead generating them
                  from simple language inputs, AI Developer will enable a major efficiency leap in creating valuable
                  Web3 applications, unlocking a lot more value overall and making anyone a developer.
                </p>
                <p>
                  NEAR.AI development will always be open source, providing software, datasets, and models to the
                  broader community to develop other products. NEAR.AI will not be the only team working on this effort,
                  but will combine forces across both the AI and Web3 ecosystems in the Open Source spirit. This will be
                  important in order to execute faster than any centralized effort can, while using resources more
                  efficiently via collaboration and incentives frameworks.
                </p>
                <p>
                  To achieve this, we will need to engage the creativity of the community to unlock the range of new
                  applications people want to build. We will need a range of infrastructure that goes beyond core
                  blockchain primitives: peer-to-peer communication, on-edge data and inference, decentralized data
                  storage, private computation, and more. We will need more developers than ever to actually write code
                  to train the model. All of this is only possible by engaging a wide NEAR ecosystem and by leveraging
                  the existing $NEAR token-based economy.
                </p>
                <p style={{ paddingBottom: '2rem' }}></p>
              </div>
            </Content>
          </div>
        </div>
      </Flex>
    </div>
  );
};
