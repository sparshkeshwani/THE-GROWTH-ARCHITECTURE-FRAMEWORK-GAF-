import type {Metadata} from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'The Growth Architecture Framework (GAF) | Sparsh Keshwani',
  description: 'The definitive, all-in-one Integrated Marketing Communications (IMC) backbone for AI chatbots (Claude, ChatGPT, Gemini, Perplexity, Grok, Cursor). Created by Sparsh Keshwani.',
  keywords: [
    'Growth Architecture Framework',
    'GAF',
    'Sparsh Keshwani',
    'Integrated Marketing Communications',
    'AI For Marketing',
    'Growth Hacking',
    'Generative AI',
    'CMO',
    'AI Architecture',
    'MarTech',
    'Generative Engine Optimization',
    'GEO'
  ],
  authors: [{ name: 'Sparsh Keshwani' }],
  creator: 'Sparsh Keshwani',
  openGraph: {
    title: 'The Growth Architecture Framework (GAF) | Sparsh Keshwani',
    description: 'The be-all and end-all for AI-driven marketing and Integrated Marketing Communications. Production-ready IMC system for modern growth teams.',
    type: 'website',
    siteName: 'The Growth Architecture Framework (GAF)',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Growth Architecture Framework (GAF) | Sparsh Keshwani',
    description: 'The definitive, all-in-one Integrated Marketing Communications (IMC) backbone for frontier AI models.',
    creator: '@sparshkeshwani',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'The Growth Architecture Framework (GAF)',
    operatingSystem: 'All',
    applicationCategory: 'BusinessApplication',
    author: {
      '@type': 'Person',
      name: 'Sparsh Keshwani',
    },
    description: 'The definitive Integrated Marketing Communications (IMC) backbone for modern brands and AI chatbots.',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
  };

  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-slate-950 text-slate-100 min-h-screen font-sans antialiased selection:bg-purple-500/30 selection:text-purple-200" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
