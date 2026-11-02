export interface GafSubModule {
  id: string;
  name: string;
  description: string;
  defaultDirective: string;
  deliverables: string[];
  recommendedModel: string;
}

export interface GafModule {
  id: number;
  number: string;
  title: string;
  tagline: string;
  badge: string;
  color: string;
  subModules: GafSubModule[];
}

export const GAF_MODULES: GafModule[] = [
  {
    id: 1,
    number: "01",
    title: "Audience, Brand & Positioning",
    tagline: "ICP synthesis, competitive battlecards, packaging models & crisis PR",
    badge: "Foundation",
    color: "from-blue-600 to-cyan-500",
    subModules: [
      {
        id: "1.1",
        name: "Persona Development",
        description: "Synthesize user research and customer interviews into detailed ICP profiles detailing demographics, firmographics, triggers, core goals, and pain points.",
        defaultDirective: "[TASK DIRECTIVE]: Execute Module 1.1 (Persona Development) for [PRODUCT NAME]. Synthesize a multi-dimensional ICP profile including firmographics, psychological triggers, and core friction points.",
        deliverables: ["Tier-1 ICP Matrix", "Psychographic Triggers", "Negative Persona Exclusion Rules"],
        recommendedModel: "Claude 3.7 / GPT-4o"
      },
      {
        id: "1.2",
        name: "Messaging Frameworks & Battlecards",
        description: "Audit market alternatives to draft unique value propositions (UVPs), positioning statements, battle cards, and objection-handling guides.",
        defaultDirective: "[TASK DIRECTIVE]: Execute Module 1.2 (Messaging Frameworks & Competitive Intelligence) for [PRODUCT NAME]. Audit top 3 alternatives and construct sales battlecards with objection handling.",
        deliverables: ["Value Proposition Matrix", "Head-to-Head Battlecards", "Objection Killing Scripts"],
        recommendedModel: "Claude 3.7 / Gemini 2.0 Pro"
      },
      {
        id: "1.3",
        name: "Brand Asset & Collateral Direction",
        description: "Produce formatted copy and creative specifications for pitch decks, one-pagers, brochures, and digital promo kits.",
        defaultDirective: "[TASK DIRECTIVE]: Execute Module 1.3 (Brand Asset & Collateral Direction) for [PRODUCT NAME]. Draft enterprise 1-pager copy and creative specification guidelines.",
        deliverables: ["Executive 1-Pager", "Slide Deck Narrative Flow", "Creative Specs Sheet"],
        recommendedModel: "Claude 3.7 / GPT-4o"
      },
      {
        id: "1.4",
        name: "Pricing Architecture & Packaging Design",
        description: "Formulate monetization strategies, pricing tier models, discount structure rules, feature-gating frameworks, and value-metric selection for SaaS or product offerings.",
        defaultDirective: "[TASK DIRECTIVE]: Execute Module 1.4 (Pricing Architecture & Packaging Design) for [PRODUCT NAME]. Structure tier packaging, value-metrics, and feature-gating thresholds for SaaS growth.",
        deliverables: ["Tier Packaging Model", "Value-Metric Formula", "Feature-Gating Map"],
        recommendedModel: "GPT-4o / Claude 3.7"
      },
      {
        id: "1.5",
        name: "Crisis Communication & Reputational PR",
        description: "Create incident response protocols, public relations statement generators, press response frameworks, and multi-channel stakeholder communication plans for brand crises.",
        defaultDirective: "[TASK DIRECTIVE]: Execute Module 1.5 (Crisis Communication Playbook) for [PRODUCT NAME]. Trigger: Outage/Service Disruption. Provide PR press statement, internal team SOP, and stakeholder response matrix.",
        deliverables: ["Incident Press Release", "Stakeholder Escalation Matrix", "Social Media Holding Statements"],
        recommendedModel: "Claude 3.7 / GPT-4o"
      }
    ]
  },
  {
    id: 2,
    number: "02",
    title: "Lead Generation & Acquisition Funnels",
    tagline: "High-converting lead magnets, nurture sequences & scaled ABM",
    badge: "Acquisition",
    color: "from-emerald-600 to-teal-500",
    subModules: [
      {
        id: "2.1",
        name: "Lead Magnet Creation & Gate Management",
        description: "Ideate, structure, and draft copy for high-converting lead magnets (e.g., whitepapers, templates, interactive calculators) alongside high-converting landing page copy.",
        defaultDirective: "[TASK DIRECTIVE]: Execute Module 2.1 (Lead Magnet Creation & Gate Management) for [PRODUCT NAME]. Ideate 3 high-leverage gated lead magnets and generate the corresponding landing page conversion copy.",
        deliverables: ["Interactive Asset Blueprint", "Long-Form Landing Page Copy", "Lead Qualification Form Spec"],
        recommendedModel: "Claude 3.7 / GPT-4o"
      },
      {
        id: "2.2",
        name: "Lead Nurture & Automated Email Sequences",
        description: "Write trigger-based email drip campaigns (welcome series, activation streams, re-engagement workflows) designed to move MQLs to SQLs.",
        defaultDirective: "[TASK DIRECTIVE]: Execute Module 2.2 (Lead Nurture & Automated Email Sequences) for [PRODUCT NAME]. Write a 5-part behavioral email drip series to transition MQLs to SQLs.",
        deliverables: ["5-Stage Drip Matrix", "Subject Line Multi-Variants", "Behavioral Trigger Flowchart"],
        recommendedModel: "Claude 3.7 / Gemini 2.0"
      },
      {
        id: "2.3",
        name: "Dynamic Personalization & ABM at Scale",
        description: "Build frameworks for orchestrating programmatic dynamic content injection, hyper-personalized account tiers (Tier 1/2/3 ABM), and real-time intent data triggers across large-scale enterprise funnels.",
        defaultDirective: "[TASK DIRECTIVE]: Execute Module 2.3 (Dynamic Personalization & ABM at Scale) for [PRODUCT NAME]. Design an enterprise ABM intent trigger matrix with programmatic landing page variables.",
        deliverables: ["Tier 1/2/3 ABM Matrix", "Programmatic Token Injectors", "Intent Score Routing Rules"],
        recommendedModel: "GPT-4o / Claude 3.7"
      }
    ]
  },
  {
    id: 3,
    number: "03",
    title: "Content Strategy, SEO & Answer Engines",
    tagline: "Generative Engine Optimization (GEO), topic clusters & search dominance",
    badge: "Organic & GEO",
    color: "from-purple-600 to-indigo-500",
    subModules: [
      {
        id: "3.1",
        name: "Organic Search & Topic Clustering",
        description: "Build keyword trees, programmatic content calendars, and search intent clusters to dominate organic search rankings.",
        defaultDirective: "[TASK DIRECTIVE]: Execute Module 3.1 (Organic Search & Topic Clustering) for [PRODUCT NAME]. Construct a 30-day topical authority cluster and semantic keyword hierarchy.",
        deliverables: ["Topic Cluster Architecture", "Intent-Mapped Keyword Tree", "Editorial Production Queue"],
        recommendedModel: "Perplexity / GPT-4o"
      },
      {
        id: "3.2",
        name: "Technical & On-Page SEO Optimization",
        description: "Draft SEO title tags, meta descriptions, internal linking strategies, and content refresh outlines for existing web pages.",
        defaultDirective: "[TASK DIRECTIVE]: Execute Module 3.2 (Technical & On-Page SEO Optimization) for [PRODUCT NAME]. Provide an on-page audit template, semantic headers schema, and internal linking graph.",
        deliverables: ["Meta Tags Specification", "Semantic Schema (JSON-LD)", "Internal Link Architecture"],
        recommendedModel: "Gemini 2.0 / GPT-4o"
      },
      {
        id: "3.3",
        name: "Generative Engine Optimization (GEO)",
        description: "Optimize brand visibility and content specifically for AI search engines, answer engines (Perplexity, Gemini, ChatGPT Search), and LLM direct-answer datasets.",
        defaultDirective: "[TASK DIRECTIVE]: Execute Module 3.3 (Generative Engine Optimization - GEO) for [PRODUCT NAME]. Build a brand citation matrix and direct-answer content optimization plan for Perplexity, ChatGPT Search, and Gemini.",
        deliverables: ["GEO Answer Engine Matrix", "Information Gain Content Formula", "Direct Citation Injection Guide"],
        recommendedModel: "Perplexity Pro / Claude 3.7"
      },
      {
        id: "3.4",
        name: "Content Repurposing Engine",
        description: "Transform pillar content (long-form blog posts, podcasts, webinars) into platform-native social posts, newsletter issues, audio scripts, and visual slide outlines.",
        defaultDirective: "[TASK DIRECTIVE]: Execute Module 3.4 (Content Repurposing Engine) for [PRODUCT NAME]. Ingest pillar webinar/blog post and decompose into 5 LinkedIn carousels, 1 newsletter, and 10 micro-threads.",
        deliverables: ["Omnichannel Distribution Tree", "Platform-Native Carousels", "Short-Form Video Script Hooks"],
        recommendedModel: "Claude 3.7 / GPT-4o"
      }
    ]
  },
  {
    id: 4,
    number: "04",
    title: "Paid Media & Performance Marketing",
    tagline: "PPC, paid social architecture, creative hooks & CAC reduction",
    badge: "Performance",
    color: "from-amber-600 to-orange-500",
    subModules: [
      {
        id: "4.1",
        name: "Paid Campaign Architecture (PPC & Social)",
        description: "Design campaign structures, budget allocations, targeting parameters, and ad angles for Google Search, LinkedIn Ads, Meta, and niche display networks.",
        defaultDirective: "[TASK DIRECTIVE]: Execute Module 4.1 (Paid Campaign Architecture) for [PRODUCT NAME]. Design full-funnel campaign structure across Google Search and LinkedIn with budget allocation model.",
        deliverables: ["Account Structure Blueprint", "Budget Pacing Calculator", "Audience Exclusion Matrix"],
        recommendedModel: "GPT-4o / Claude 3.7"
      },
      {
        id: "4.2",
        name: "Ad Creative & Copy Iteration",
        description: "Write multi-variant ad copy, headline variations, and visual hooks for A/B testing to lower Customer Acquisition Cost (CAC).",
        defaultDirective: "[TASK DIRECTIVE]: Execute Module 4.2 (Ad Creative & Copy Iteration) for [PRODUCT NAME]. Write 10 high-converting ad angles (Pain, Gain, Social Proof, Contrarian) for LinkedIn and Meta.",
        deliverables: ["10 Ad Creative Variations", "Hook & Scroll-Stopper Matrix", "A/B Testing Hypothesis Log"],
        recommendedModel: "Claude 3.7 / GPT-4o"
      }
    ]
  },
  {
    id: 5,
    number: "05",
    title: "Lifecycle Marketing, PLG & Retention",
    tagline: "Time-to-Value acceleration, PQL scoring, freemium loops & churn prevention",
    badge: "Retention & PLG",
    color: "from-rose-600 to-pink-500",
    subModules: [
      {
        id: "5.1",
        name: "Onboarding & Activation Sequences",
        description: "Design campaign touchpoints, post-purchase emails, and product tour copy to accelerate Time-to-Value (TTV) for new users.",
        defaultDirective: "[TASK DIRECTIVE]: Execute Module 5.1 (Onboarding & Activation Sequences) for [PRODUCT NAME]. Map Day 0 to Day 14 onboarding telemetry, in-app triggers, and activation milestones.",
        deliverables: ["Aha-Moment Milestone Map", "Day 0-14 Trigger Matrix", "Empty-State In-App Copy"],
        recommendedModel: "Claude 3.7 / Gemini 2.0"
      },
      {
        id: "5.2",
        name: "Retention, Churn Reduction & Advocacy",
        description: "Build win-back campaigns, upsell/cross-sell triggers, referral program copy, and customer review request sequences.",
        defaultDirective: "[TASK DIRECTIVE]: Execute Module 5.2 (Retention & Churn Reduction) for [PRODUCT NAME]. Design an automated cancellation deflection flow and a 3-step inactive user win-back sequence.",
        deliverables: ["Cancellation Flow Script", "Win-Back Email Sequence", "NPS & Advocacy Incentive Loop"],
        recommendedModel: "Claude 3.7 / GPT-4o"
      },
      {
        id: "5.3",
        name: "Product-Led Growth (PLG) & In-App Mechanics",
        description: "Craft strategies for freemium-to-paid conversion loops, product-qualified lead (PQL) scoring models, feature usage triggers, and contextual upgrade prompts within user flows.",
        defaultDirective: "[TASK DIRECTIVE]: Execute Module 5.3 (Product-Led Growth Mechanics) for [PRODUCT NAME]. Scope: Build PQL scoring criteria, feature activation triggers, and contextual in-app upgrade prompt scripts.",
        deliverables: ["PQL Mathematical Scoring Model", "Usage Limit Warning Banners", "Paywall Modal Copy"],
        recommendedModel: "GPT-4o / Claude 3.7"
      },
      {
        id: "5.4",
        name: "Omnichannel Customer Journey Orchestration",
        description: "Design cross-channel state-machine routing rules (e.g., dynamically switching messaging between web push, SMS, email, and in-app triggers based on live user action events).",
        defaultDirective: "[TASK DIRECTIVE]: Execute Module 5.4 (Omnichannel Customer Journey Orchestration) for [PRODUCT NAME]. Create an event-driven state-machine diagram coordinating Push, Email, and In-App modal channels.",
        deliverables: ["State Machine Logic Graph", "Fallback Channel Waterfall", "Event Deduplication Rules"],
        recommendedModel: "Claude 3.7 / Cursor"
      }
    ]
  },
  {
    id: 6,
    number: "06",
    title: "Go-to-Market (GTM), Sales Enablement & Events",
    tagline: "Product launches, sales battlecards, RevOps alignment & co-marketing",
    badge: "Revenue Ops",
    color: "from-violet-600 to-purple-500",
    subModules: [
      {
        id: "6.1",
        name: "Product Launch Campaigns",
        description: "Orchestrate multi-channel launch playbooks for new feature rollouts, tier changes, or product releases.",
        defaultDirective: "[TASK DIRECTIVE]: Execute Module 6.1 (Product Launch Campaigns) for [PRODUCT NAME]. Generate a 3-phase (Tease, Launch, Sustain) GTM rollout roadmap across PR, Product Hunt, and Customer Base.",
        deliverables: ["T-minus 30 Launch Gantt", "Launch Day War Room Checklist", "Tiered Press Outreach Brief"],
        recommendedModel: "Claude 3.7 / GPT-4o"
      },
      {
        id: "6.2",
        name: "Sales Enablement & RevOps Alignment",
        description: "Produce collateral for direct sales cycles, demo scripts, enterprise proposal templates, buyer deck outlines, sales battlecards, and CRM pipeline stage definitions/handoffs.",
        defaultDirective: "[TASK DIRECTIVE]: Execute Module 6.2 (Sales Enablement & RevOps Alignment) for [PRODUCT NAME]. Outputs: Enterprise sales battlecard, demo script outline, and Marketing-to-Sales CRM handoff criteria.",
        deliverables: ["AE Demo Discovery Guide", "Enterprise Proposal Boilerplate", "MQL-to-SQL SLA Handoff Contract"],
        recommendedModel: "Claude 3.7 / GPT-4o"
      },
      {
        id: "6.3",
        name: "Co-Marketing & Strategic Partnerships",
        description: "Draft partnership pitches, joint webinar outlines, affiliate campaign assets, and podcast outreach campaigns.",
        defaultDirective: "[TASK DIRECTIVE]: Execute Module 6.3 (Co-Marketing & Strategic Partnerships) for [PRODUCT NAME]. Draft cold partnership outreach proposals and a joint go-to-market webinar agenda.",
        deliverables: ["Ecosystem Partner Pitch", "Joint Marketing Agreement SLA", "Co-Branded Webinar Outline"],
        recommendedModel: "Claude 3.7 / Gemini 2.0"
      },
      {
        id: "6.4",
        name: "Event Planning & Execution",
        description: "Plan agendas, promotional emails, host scripts, and post-event follow-up workflows for virtual webinars or field events.",
        defaultDirective: "[TASK DIRECTIVE]: Execute Module 6.4 (Event Planning & Execution) for [PRODUCT NAME]. Plan a high-intent virtual summit agenda with promotional sequence and speaker briefings.",
        deliverables: ["Summit Run-of-Show Agenda", "Attendee Promotional Drip", "Post-Event Lead Routing Script"],
        recommendedModel: "Claude 3.7 / GPT-4o"
      }
    ]
  },
  {
    id: 7,
    number: "07",
    title: "Ecosystem, Partnerships & Advocacy Networks",
    tagline: "Creator operations, affiliate tiers, fraud detection & community playbooks",
    badge: "Network Effects",
    color: "from-sky-600 to-blue-500",
    subModules: [
      {
        id: "7.1",
        name: "Influencer & Affiliate Relationship Operations",
        description: "Design programmatic creator onboarding workflows, commission tier structures, contract terms tracking frameworks, and performance fraud detection SOPs.",
        defaultDirective: "[TASK DIRECTIVE]: Execute Module 7.1 (Influencer & Affiliate Operations) for [PRODUCT NAME]. Design tiered commission structure (Silver, Gold, Diamond) and affiliate fraud mitigation rules.",
        deliverables: ["Affiliate Tier Economics", "Creator Agreement Template", "Fraud Detection Heuristics SOP"],
        recommendedModel: "GPT-4o / Claude 3.7"
      },
      {
        id: "7.2",
        name: "Community Management & Advocacy Networks",
        description: "Create engagement playbooks, community moderation guidelines, member recognition structures, and organic ambassador tier management plans.",
        defaultDirective: "[TASK DIRECTIVE]: Execute Module 7.2 (Community Management & Advocacy Networks) for [PRODUCT NAME]. Create a Discord/Slack community onboarding ritual and VIP ambassador program.",
        deliverables: ["Community Moderation Playbook", "Ambassador Perk Ladder", "Weekly Ritual Cadence Matrix"],
        recommendedModel: "Claude 3.7 / Gemini 2.0"
      }
    ]
  },
  {
    id: 8,
    number: "08",
    title: "Global Strategy, Localization & Compliance",
    tagline: "Multi-region adaptation, GDPR/CCPA consent & AI safety governance",
    badge: "Governance",
    color: "from-red-600 to-rose-500",
    subModules: [
      {
        id: "8.1",
        name: "Localization & Cultural Adaptation",
        description: "Translate and adapt messaging for regional markets, incorporating market-specific idioms and localized regulatory positioning for multi-region or global expansion campaigns.",
        defaultDirective: "[TASK DIRECTIVE]: Execute Module 8.1 (Localization & Cultural Adaptation) for [PRODUCT NAME]. Adapt core value propositions for EMEA and APAC markets with localized cultural nuance.",
        deliverables: ["Regional Messaging Adaptation Sheet", "Currency & Pricing Translation Table", "Cultural Nuance Guide"],
        recommendedModel: "Claude 3.7 / Gemini 2.0"
      },
      {
        id: "8.2",
        name: "Regulatory Compliance & Consent Architecture",
        description: "Build detailed implementation guides for regional privacy frameworks (GDPR, CCPA, Digital Personal Data Protection Act) covering cookie consent banners, data minimization rules, and cross-border data transfer protocols.",
        defaultDirective: "[TASK DIRECTIVE]: Execute Module 8.2 (Regulatory Compliance & Consent Architecture) for [PRODUCT NAME]. Formulate GDPR/CCPA cookie banner policy copy, opt-out workflows, and data audit logs.",
        deliverables: ["Cookie Banner Hierarchy", "Privacy Notice Architecture", "Data Subject Access Request (DSAR) SOP"],
        recommendedModel: "GPT-4o / Claude 3.7"
      },
      {
        id: "8.3",
        name: "Brand Safety & Content Moderation Protocols",
        description: "Establish automated guardrails for generative text/image outputs, automated detection of potential regulatory or trademark infringements in ad copy, and compliance guardrails for synthetic media disclosures.",
        defaultDirective: "[TASK DIRECTIVE]: Execute Module 8.3 (Brand Safety & Content Moderation) for [PRODUCT NAME]. Establish automated safety filters for generative AI marketing outputs and synthetic media disclosures.",
        deliverables: ["Automated Brand Safety Policy", "Trademark & Claim Guardrails", "Synthetic Media Disclosure Standards"],
        recommendedModel: "Claude 3.7 / GPT-4o"
      }
    ]
  },
  {
    id: 9,
    number: "09",
    title: "Advanced Analytics, Operations & AI Architecture",
    tagline: "MTA attribution, MMM math, multi-agent swarms & model fine-tuning",
    badge: "AI Engineering",
    color: "from-fuchsia-600 to-purple-600",
    subModules: [
      {
        id: "9.1",
        name: "Advanced Attribution & ROI Modeling",
        description: "Develop frameworks for multi-touch attribution (MTA), marketing mix modeling (MMM), and cohort-based customer lifetime value to CAC (LTV:CAC) predictive calculations.",
        defaultDirective: "[TASK DIRECTIVE]: Execute Module 9.1 (Advanced Attribution & ROI Modeling) for [PRODUCT NAME]. Model multi-touch attribution (First-touch, W-shaped, Markov chain) and calculate predictive LTV:CAC cohorts.",
        deliverables: ["Attribution Weighting Models", "LTV:CAC Cohort Matrix", "Marketing Mix Modeling (MMM) Spec"],
        recommendedModel: "GPT-4o / Claude 3.7"
      },
      {
        id: "9.2",
        name: "MarTech & Workflow Integration",
        description: "Map lead scoring models, CRM lifecycle stages, automated routing rules, and data sync workflows between marketing tools.",
        defaultDirective: "[TASK DIRECTIVE]: Execute Module 9.2 (MarTech & Workflow Integration) for [PRODUCT NAME]. Build a unified CRM data flow architecture connecting HubSpot/Salesforce, Segment, and AI agents.",
        deliverables: ["Stack Architecture Diagram", "Lead Scoring Logic Specification", "Webhook Sync Data Dictionary"],
        recommendedModel: "Cursor / GPT-4o"
      },
      {
        id: "9.3",
        name: "Agentic Workflows & Multi-Agent Orchestration",
        description: "Create execution instructions and system handoff protocols for chaining multiple specialized AI agents (e.g., Research Agent -> Copywriting Agent -> Optimization/Code Agent in Cursor, CrewAI, or AutoGen frameworks).",
        defaultDirective: "[TASK DIRECTIVE]: Execute Module 9.3 (Agentic Workflows & Multi-Agent Orchestration) for [PRODUCT NAME]. Formulate handoff protocols and JSON schemas for Research Agent -> Copywriting Agent -> SEO Optimizer.",
        deliverables: ["Multi-Agent Orchestration Schema", "JSON Handoff Payloads", "Agent Failure & Fallback Protocol"],
        recommendedModel: "Cursor / Claude 3.7 / CrewAI"
      },
      {
        id: "9.4",
        name: "Continuous Model Fine-Tuning & Alignment",
        description: "Design standardized pipelines for collecting internal team feedback, formatting reinforcement learning (RLHF/DPO) datasets, and fine-tuning custom open-weight models on proprietary brand assets and historical conversion data.",
        defaultDirective: "[TASK DIRECTIVE]: Execute Module 9.4 (Continuous Model Fine-Tuning & Alignment) for [PRODUCT NAME]. Design an RLHF/DPO pipeline capturing top-performing copy to fine-tune custom marketing models.",
        deliverables: ["DPO Pair Curation Protocol", "Prompt-Response Evaluation Rubric", "Synthetic Data Generation Guardrails"],
        recommendedModel: "Claude 3.7 / GPT-4o"
      },
      {
        id: "9.5",
        name: "AI Workflows & Team Enablement",
        description: "Develop system prompts, custom instructions, brand-voice guides, and reusable AI SOPs for internal team execution.",
        defaultDirective: "[TASK DIRECTIVE]: Execute Module 9.5 (AI Workflows & Team Enablement) for [PRODUCT NAME]. Draft the internal AI Operating System handbook for marketing team members.",
        deliverables: ["Team AI Playbook", "Departmental Prompt Library", "Quality Assurance Checklist"],
        recommendedModel: "Claude 3.7 / Gemini 2.0"
      },
      {
        id: "9.6",
        name: "Performance Analytics & Fundraising Strategy",
        description: "Analyze marketing metrics across campaigns to generate channel performance reports, budget reallocation models, and investor/fundraising pitch data.",
        defaultDirective: "[TASK DIRECTIVE]: Execute Module 9.6 (Performance Analytics & Fundraising Strategy) for [PRODUCT NAME]. Generate an investor-ready growth deck slide summarizing unit economics, CAC payback, and channel scalability.",
        deliverables: ["Investor Unit Economics Teaser", "CAC Payback Period Waterfall", "Growth Sensitivity Scenario Matrix"],
        recommendedModel: "GPT-4o / Claude 3.7"
      }
    ]
  }
];

export const PRESET_USE_CASES = [
  {
    name: "Enterprise B2B AI Platform",
    productName: "CortexMesh AI",
    icp: "Enterprise VP of Engineering, Chief AI Officers & Data Directors (Fortune 500)",
    goalKpi: "Increase pipeline velocity, drive $2M in new ARR, reduce CAC by 28%",
    brandTone: "Authoritative, mathematically grounded, enterprise-grade, visionary",
    channels: "Generative AI Search (GEO), LinkedIn Ads, ABM Tier-1 Executive Dinners",
    moduleIndex: 2, // GEO
    subModuleId: "3.3",
  },
  {
    name: "DevTool / Serverless SaaS",
    productName: "VectorForge Cloud",
    icp: "Full-Stack Software Engineers, Tech Leads, and AI Application Developers",
    goalKpi: "Drive Product-Qualified Lead (PQL) signups from 5,000 to 25,000/mo",
    brandTone: "Technical, developer-first, transparent, punchy, zero buzzwords",
    channels: "Hacker News, GitHub Trending, In-App Interactive CLI, Technical Docs",
    moduleIndex: 4, // PLG
    subModuleId: "5.3",
  },
  {
    name: "DTC Premium Wellness",
    productName: "NootroPeak Organic",
    icp: "High-performing founders, biohackers, and knowledge workers aged 25-45",
    goalKpi: "Lower Blended CAC under $38, increase 90-day LTV to $165",
    brandTone: "Empowering, clean, scientifically backed, aspirational, vibrant",
    channels: "Meta Ads, TikTok Organic, Klaviyo Behavioral Drip, Creator Partnerships",
    moduleIndex: 3, // Paid Media
    subModuleId: "4.2",
  },
  {
    name: "HealthTech / Regulatory Compliance",
    productName: "AegisHealth Care",
    icp: "Hospital CIOs, Medical Practice Compliance Officers, and Privacy Directors",
    goalKpi: "Achieve 45% SQL-to-Opportunity rate with strict HIPAA compliance",
    brandTone: "Uncompromisingly secure, institutional, reassuring, precise",
    channels: "Industry Summits, Gated Whitepapers, Direct ABM Outreach, Organic Search",
    moduleIndex: 7, // Compliance
    subModuleId: "8.2",
  }
];

export const HASHTAGS_LIST = [
  "#AIForMarketing",
  "#IntegratedMarketingCommunications",
  "#GrowthHacking",
  "#SparshKeshwani",
  "#GenerativeAI",
  "#CMO",
  "#AIArchitecture",
  "#MarTech",
  "#GAF",
  "#GenerativeEngineOptimization",
  "#ProductLedGrowth",
  "#AgenticAI",
  "#GrowthArchitecture"
];
