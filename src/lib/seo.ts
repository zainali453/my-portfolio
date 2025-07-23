// SEO Configuration and Utilities
export const siteConfig = {
  name: "Zain Ali Portfolio",
  title: "Zain Ali - Full Stack Developer | React, Next.js, TypeScript Expert",
  description:
    "Passionate full-stack developer with expertise in React, Next.js, TypeScript, and modern web technologies. Creating beautiful, functional, and user-friendly applications. Available for hire.",
  url: "https://zain.bugslashers.com",
  ogImage: "https://zain.bugslashers.com/images/image.png",
  creator: "Zain Ali",
  keywords: [
    "Full Stack Developer",
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript Developer",
    "JavaScript Developer",
    "Node.js Developer",
    "Web Development",
    "Software Engineer",
    "Frontend Engineer",
    "Zain Ali",
    "Zain Younas",
    "Portfolio",
    "Hire Developer",
    "Freelance Developer",
    "React Expert",
    "Next.js Expert",
    "Modern Web Development",
    "Responsive Design",
    "UI/UX Development",
  ],
  social: {
    github: "https://github.com/zainali453",
    linkedin: "https://linkedin.com/in/zainyounas",
    twitter: "@zainali73938845", // Update with your actual Twitter handle
  },
};

export function generateBreadcrumbSchema(
  items: Array<{ name: string; url: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Zain Ali - Full Stack Developer",
    alternateName: "Zain Ali Portfolio",
    url: siteConfig.url,
    logo: siteConfig.ogImage,
    description: siteConfig.description,
    founder: {
      "@type": "Person",
      name: "Zain Ali",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      availableLanguage: ["English", "Urdu"],
    },
    sameAs: Object.values(siteConfig.social).filter(
      (url) => url !== "@yourusername"
    ),
  };
}

export const defaultOpenGraph = {
  type: "website" as const,
  locale: "en_US",
  url: siteConfig.url,
  siteName: siteConfig.name,
  title: siteConfig.title,
  description: siteConfig.description,
  images: [
    {
      url: siteConfig.ogImage,
      width: 1200,
      height: 630,
      alt: "Zain Ali - Full Stack Developer Portfolio",
      type: "image/png",
    },
  ],
};

export const defaultTwitter = {
  card: "summary_large_image" as const,
  title: siteConfig.title,
  description: siteConfig.description,
  creator: siteConfig.social.twitter,
  images: [siteConfig.ogImage],
};
