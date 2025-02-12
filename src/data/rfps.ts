export const rfps = [
  {
    slug: 'ai-auditor-agent',
    title: 'Development of an AI Auditor Agent on NEAR AI Hub',
    excerpt:
      'Creation of an AI Auditor Agent capable of auditing the code of AI agents running on the NEAR AI platform.',
    contact: 'Cameron.dennis@near.ai | Telegram: @camerondennis',
    requirements:
      'Experience with AI development and security, background in TEE implementations, knowledge of security and compliance frameworks',
    date: '2025-02-12',
    deadline: '2025-02-17',
    author: {
      name: 'Cameron Dennis',
    },
    submitProposalUrl: 'https://airtable.com/appc0ZVhbKj8hMLvH/pag4dQKP3KF3qrTFo/form',
    content: `
      <div>
        <section>
          <h2 class="text-3xl font-bold mt-12 mb-8 text-[#00EB9A]">Overview</h2>
          <p class="text-lg leading-relaxed mb-4 text-[#AFD0C5]">NEAR AI is seeking proposals for the development of an AI Auditor Agent capable of auditing the code of AI agents running on the NEAR AI platform. Proposers will define comprehensive security, privacy, and compliance standards that the Auditor Agent will enforce. The AI Auditor Agent will leverage Trusted Execution Environments (TEE) to ensure the confidentiality of agent code during auditing. Additionally, this project includes extending the platform to allow agents to post additional information for other agents, enabling the Auditor Agent to share audit reports in a secure and efficient manner.</p>
        </section>

        <section>
          <h2 class="text-3xl font-bold mt-12 mb-8 text-[#00EB9A]">Key Objectives</h2>
          <h3 class="text-2xl font-bold mb-8">AI Code Auditing</h3>
          <p class="text-lg leading-relaxed mb-4 text-[#AFD0C5]">Develop an AI Auditor Agent that can:</p>
          <ul class="text-lg leading-relaxed text-[#AFD0C5] pl-6 list-disc mb-8">
            <li>Analyze and validate the code of AI agents against proposer-defined compliance guidelines, privacy standards, and security best practices</li>
            <li>Detect potential vulnerabilities, malicious behaviors, or unauthorized modifications in agent code</li>
            <li>By running on the NEAR AI platform, the auditor will operate fully within a TEE to maintain the privacy and integrity of the audited agent code by March 1, 2025</li>
          </ul>

          <h3 class="text-2xl font-bold mb-8">Secure Report Posting</h3>
          <p class="text-lg leading-relaxed mb-4 text-[#AFD0C5]">Extend the NEAR.AI platform to enable:</p>
          <ul class="text-lg leading-relaxed text-[#AFD0C5] pl-6 list-disc">
            <li>Agents to post additional information, such as audit reports, for access by other agents</li>
            <li>Secure storage and retrieval of these reports, ensuring only authorized agents can access relevant data</li>
          </ul>
        </section>

        <section>
          <h2 class="text-3xl font-bold mt-12 mb-8 text-[#00EB9A]">Scope of Work</h2>
          
          <h3 class="text-2xl font-bold mb-8">1. AI Auditor Agent Development</h3>
          <h4 class="text-xl font-bold mb-4">Audit Capabilities:</h4>
          <ul class="text-lg leading-relaxed text-[#AFD0C5] pl-6 list-disc mb-8">
            <li>Propose and implement comprehensive compliance guidelines for AI agents running on NEAR.AI</li>
            <li>Define and enforce security best practices for agent code</li>
            <li>Establish privacy standards that prevent data leakage and user tracking</li>
            <li>Build functionality to assess AI agent code against these proposed standards</li>
            <li>Create detection mechanisms for security vulnerabilities and performance issues</li>
          </ul>

          <h4 class="text-xl font-bold mb-4">TEE Integration:</h4>
          <ul class="text-lg leading-relaxed text-[#AFD0C5] pl-6 list-disc mb-8">
            <li>Ensure the Auditor Agent operates entirely within a TEE to prevent unauthorized access to the code being audited</li>
            <li>Verify the integrity of the auditing process</li>
            <li>Implement secure mechanisms for sharing audit results while maintaining confidentiality</li>
          </ul>

          <h3 class="text-2xl font-bold mb-8">2. NEAR.AI Platform Enhancements</h3>
          <h4 class="text-xl font-bold mb-4">Data Posting Mechanism:</h4>
          <ul class="text-lg leading-relaxed text-[#AFD0C5] pl-6 list-disc mb-8">
            <li>Design and implement a feature for agents to post structured additional information</li>
            <li>Include metadata tagging for efficient organization and retrieval</li>
            <li>Implement secure access controls for posted information</li>
          </ul>

          <h3 class="text-2xl font-bold mb-8">3. Reporting and User Interface</h3>
          <h4 class="text-xl font-bold mb-4">Audit Report Format:</h4>
          <ul class="text-lg leading-relaxed text-[#AFD0C5] pl-6 list-disc mb-8">
            <li>Define a standard format for audit reports</li>
            <li>Include details such as audit date, findings, recommendations, and compliance status</li>
            <li>Document violations of proposed security, privacy, and compliance standards</li>
          </ul>

          <h4 class="text-xl font-bold mb-4">Agent Interactions:</h4>
          <ul class="text-lg leading-relaxed text-[#AFD0C5] pl-6 list-disc">
            <li>Provide a user-friendly interface for viewing and managing reports</li>
            <li>Implement secure communication channels between agents</li>
          </ul>
        </section>

        <section>
          <h2 class="text-3xl font-bold mt-12 mb-8 text-[#00EB9A]">Deliverables</h2>
          
          <h3 class="text-2xl font-bold mb-8">AI Auditor Agent</h3>
          <ul class="text-lg leading-relaxed text-[#AFD0C5] pl-6 list-disc mb-8">
            <li>Fully functional and tested AI Auditor Agent operating within a TEE</li>
            <li>Documentation of the auditing process and supported features</li>
            <li>Comprehensive set of security, privacy, and compliance standards</li>
          </ul>

          <h3 class="text-2xl font-bold mb-8">Platform Enhancements</h3>
          <ul class="text-lg leading-relaxed text-[#AFD0C5] pl-6 list-disc mb-8">
            <li>Mechanism for agents to post and retrieve additional information</li>
            <li>Access control and data security implementation</li>
            <li>Integration with existing NEAR.AI platform features</li>
          </ul>

          <h3 class="text-2xl font-bold mb-8">Reporting Tools</h3>
          <ul class="text-lg leading-relaxed text-[#AFD0C5] pl-6 list-disc mb-8">
            <li>Standardized audit report format</li>
            <li>APIs and user interfaces for managing audit-related data</li>
            <li>Documentation of security measures for report sharing</li>
          </ul>

          <h3 class="text-2xl font-bold mb-8">Technical Documentation</h3>
          <ul class="text-lg leading-relaxed text-[#AFD0C5] pl-6 list-disc mb-8">
            <li>Comprehensive documentation covering system architecture, APIs, and operational guidelines</li>
            <li>Detailed explanation of implemented security standards and compliance rules</li>
            <li>Guidelines for future standard updates and modifications</li>
          </ul>

          <h3 class="text-2xl font-bold mb-8">Test Suite</h3>
          <ul class="text-lg leading-relaxed text-[#AFD0C5] pl-6 list-disc">
            <li>Unit and integration tests to validate functionality and performance</li>
            <li>Security testing framework for validating compliance checks</li>
            <li>Performance benchmarks for TEE operations</li>
          </ul>
        </section>

        <section>
          <h2 class="text-3xl font-bold mt-12 mb-8 text-[#00EB9A]">Evaluation Criteria</h2>
          <ol class="text-lg leading-relaxed text-[#AFD0C5] space-y-3 pl-6 list-decimal">
            <li><strong>Technical Approach (40%)</strong>: Comprehensiveness of proposed standards, TEE integration feasibility, innovation in approach, clarity and completeness of implementation strategy</li>
            <li><strong>Security and Privacy Design (30%)</strong>: Robustness of security measures, effectiveness of privacy protection mechanisms, strength of data protection approaches, quality of access control systems</li>
            <li><strong>Team Expertise (20%)</strong>: Experience with AI development and security, background in TEE implementations, track record of successful similar projects, knowledge of security and compliance frameworks</li>
            <li><strong>Project Management (10%)</strong>: Realistic timeline and milestones, clear communication and reporting plans, risk management strategy, cost effectiveness</li>
          </ol>
        </section>

        <section>
          <h2 class="text-3xl font-bold mt-12 mb-8 text-[#00EB9A]">Proposal Submission Guidelines</h2>
          
          <h3 class="text-2xl font-bold mb-8">Proposal Content</h3>
          <ol class="text-lg leading-relaxed text-[#AFD0C5] space-y-3 pl-6 list-decimal space-y-6">
            <li>
              <strong>Executive Summary</strong>
              <ul class="list-disc pl-6 mt-2">
                <li>Overview of proposed solution</li>
                <li>Key innovations and advantages</li>
                <li>Team capabilities summary</li>
              </ul>
            </li>
            <li>
              <strong>Technical Approach</strong>
              <ul class="list-disc pl-6 mt-2">
                <li>Detailed explanation of implementation strategy</li>
                <li>Proposed security, privacy, and compliance standards</li>
                <li>TEE integration approach</li>
                <li>System architecture and design</li>
              </ul>
            </li>
            <li>
              <strong>Team Qualifications</strong>
              <ul class="list-disc pl-6 mt-2">
                <li>Profiles and experience of key team members</li>
                <li>Relevant project experience</li>
                <li>Security and compliance expertise</li>
              </ul>
            </li>
            <li>
              <strong>Implementation Plan</strong>
              <ul class="list-disc pl-6 mt-2">
                <li>Project milestones and timelines</li>
                <li>Resource allocation</li>
                <li>Risk management strategy</li>
                <li>Quality assurance approach</li>
              </ul>
            </li>
            <li>
              <strong>Budget</strong>
              <ul class="list-disc pl-6 mt-2">
                <li>Detailed cost breakdown</li>
                <li>Resource allocation</li>
                <li>Payment schedule</li>
              </ul>
            </li>
            <li>
              <strong>References</strong>
              <ul class="list-disc pl-6 mt-2">
                <li>Examples of previous relevant projects</li>
                <li>Client testimonials</li>
                <li>Security audit history</li>
              </ul>
            </li>
          </ol>

          <h3 class="text-2xl font-bold mt-12 mb-4">Submission Deadline</h3>
          <p class="text-lg leading-relaxed text-[#AFD0C5] mb-12">All proposals must be submitted by February 17, 2025. Late submissions will not be considered.</p>

          <h3 class="text-2xl font-bold mt-12 mb-4">Submission Process</h3>
          <p class="text-lg leading-relaxed text-[#AFD0C5] mb-12">Please complete the "Submit Proposal" form below and be sure to fill out the fields under "Agent Request for Proposal" in great detail. You can expect a response within 72 hours from submission.</p>

          <h3 class="text-2xl font-bold mb-8">Contact Information</h3>
          <p class="text-lg leading-relaxed text-[#AFD0C5] mb-2">For any inquiries regarding this RFP, please contact:</p>
          <ul class="text-lg leading-relaxed text-[#AFD0C5] space-y-2">
            <li>Email: Cameron.dennis@near.ai</li>
            <li>Telegram: @camerondennis</li>
          </ul>
        </section>
      </div>
    `,
  },
];
