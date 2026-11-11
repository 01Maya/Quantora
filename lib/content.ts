import {
  Database,
  Infinity as InfinityIcon,
  TrendingUp,
  PieChart,
  Landmark,
  CreditCard,
  LineChart,
  Rocket,
  Search,
  BarChart3,
  FileText,
  Scale,
  Twitter,
  Linkedin,
  Mail,
  type LucideIcon,
} from "lucide-react";

export const navLinks = [
  { label: "Overview", href: "#research" },
  { label: "Capabilities", href: "#features" },
  { label: "Analysts", href: "#analysts" },
  { label: "Academy", href: "#academy" },
];

export const benefits: { icon: LucideIcon; title: string; text: string }[] = [
  {
    icon: Database,
    title: "Unlock Proprietary Data",
    text: "Connect your entire proprietary knowledge base to your investment copilot.",
  },
  {
    icon: InfinityIcon,
    title: "Deep Financial Research",
    text: "Use Quantora's deep research to tackle complex investment questions.",
  },
  {
    icon: TrendingUp,
    title: "Rapid Insights",
    text: "Turn investor presentations, SEC filings and market data into new insights.",
  },
];

export const accordion = [
  {
    title: "Simplified Integration",
    text: "Connect your data once and let the copilot work across your whole team.",
  },
  {
    title: "Rigorous Research by Default",
    text: "Every answer is traced back to filings, transcripts and your own files.",
  },
  {
    title: "Cover More Opportunities",
    text: "Screen far more companies without adding hours to your week.",
  },
];

export const capabilities = [
  {
    img: "/images/world.jpg",
    alt: "Laptop with financial charts beside a globe",
    tag: "Knowledge",
    title: "Leverage the World's Data",
    text: "Gather intelligence from web search, SEC filings, transcripts and private data in one platform.",
  },
  {
    img: "/images/security.jpg",
    alt: "Analyst and robot under a security shield",
    tag: "Security & Compliance",
    title: "Enterprise-Grade Security",
    text: "Backed by SOC 2 Type 2 and GDPR compliance, so your data is never used and remains with you.",
  },
  {
    img: "/images/finance.jpg",
    alt: "Businessman presenting a growth chart to a robot",
    tag: "Performance",
    title: "AI Designed for Finance",
    text: "Quantora's AI thinks like an analyst, approaching problems with rigor and first principles.",
  },
];

export const analysts: { icon: LucideIcon; title: string; text: string }[] = [
  {
    icon: PieChart,
    title: "Private & Public Equity",
    text: "Source, screen and evaluate opportunities faster with a copilot that understands company narratives, filings and diligence data.",
  },
  {
    icon: Landmark,
    title: "Investment Banking",
    text: "Generate more deals by speeding up financial analysis, comps, pitch decks and client deliverables.",
  },
  {
    icon: CreditCard,
    title: "Credit",
    text: "Read between the lines of borrower documents, surfacing risks and spotlighting what matters.",
  },
  {
    icon: LineChart,
    title: "Hedge Funds",
    text: "Gain a market edge with fast research that extracts meaningful insights from primary and secondary sources.",
  },
  {
    icon: Rocket,
    title: "Venture Capital",
    text: "Evaluate founders, markets and startups with structured insights, benchmarking and portfolio support.",
  },
];

export const expectations: { icon: LucideIcon; title: string; text: string }[] =
  [
    {
      icon: Search,
      title: "Deep Market Research",
      text: "Deeply research markets and competitive dynamics.",
    },
    {
      icon: BarChart3,
      title: "Earnings Analysis",
      text: "Compare guidance, tone and margins across quarters.",
    },
    {
      icon: FileText,
      title: "Filing Review",
      text: "Surface changes in risk factors and footnotes instantly.",
    },
    {
      icon: Scale,
      title: "Instant Comps",
      text: "Build peer sets and valuation ranges in seconds.",
    },
  ];

export const resources = [
  {
    img: "/images/compliance.jpg",
    alt: "Compliance whitepaper with gavel and scales",
    tag: "Whitepaper",
    title: "The Rising Cost of Compliance Fines & How Data Reasoning Can Help",
  },
  {
    img: "/images/webinar.jpg",
    alt: "Live webinar host at a microphone",
    tag: "Webinar",
    title: "Memory-Efficient Model Training with Low-Rank Projection",
  },
  {
    img: "/images/event.jpg",
    alt: "Leaders retreat venue in the mountains",
    tag: "Event",
    title: "Future Proof Leaders Retreat",
  },
];

export const footerCols: {
  title: string;
  links: { label: string; href: string; icon?: LucideIcon }[];
}[] = [
  {
    title: "Learn",
    links: [
      { label: "Webinars", href: "#" },
      { label: "Academy", href: "#academy" },
      { label: "Blog", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "#" },
      { label: "Careers", href: "#" },
      { label: "News", href: "#" },
    ],
  },
  {
    title: "Connect",
    links: [
      { label: "Twitter (X)", href: "#", icon: Twitter },
      { label: "LinkedIn", href: "#", icon: Linkedin },
      { label: "Newsletter", href: "#", icon: Mail },
    ],
  },
];
