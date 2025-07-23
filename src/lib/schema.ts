export function generatePersonSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Zain Ali",
    alternateName: "Zain Younas",
    jobTitle: "Full Stack Developer",
    description:
      "Passionate full-stack developer with expertise in React, Next.js, TypeScript, and modern web technologies. Creating beautiful, functional, and user-friendly applications.",
    url: "https://zain.bugslashers.com",
    image: {
      "@type": "ImageObject",
      url: "https://zain.bugslashers.com/images/image.png",
      width: 400,
      height: 400,
    },
    sameAs: [
      "https://github.com/zainali453",
      "https://linkedin.com/in/zainyounas", // Update with your actual LinkedIn
    ],
    knowsAbout: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Node.js",
      "Full Stack Development",
      "Web Development",
      "Frontend Development",
      "Backend Development",
      "Database Design",
      "API Development",
      "Responsive Design",
      "UI/UX Development",
    ],
    hasOccupation: {
      "@type": "Occupation",
      name: "Full Stack Developer",
      description:
        "Develops complete web applications using modern technologies",
      occupationLocation: {
        "@type": "Place",
        name: "Remote/Pakistan", // Update with your location
      },
    },
    alumniOf: {
      "@type": "Organization",
      name: "FAST NUCES",
      url: "https://www.nu.edu.pk/",
    },
    worksFor: {
      "@type": "Organization",
      name: "Freelance",
    },
  };
}

export function generateWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Zain Ali Portfolio",
    alternateName: "Zain Ali - Full Stack Developer",
    url: "https://zain.bugslashers.com",
    description:
      "Portfolio website of Zain Ali, a passionate full-stack developer specializing in React, Next.js, and TypeScript",
    author: {
      "@type": "Person",
      name: "Zain Ali",
      url: "https://zain.bugslashers.com",
    },
    publisher: {
      "@type": "Person",
      name: "Zain Ali",
    },
    potentialAction: {
      "@type": "SearchAction",
      target: "https://zain.bugslashers.com/?search={search_term_string}",
      "query-input": "required name=search_term_string",
    },
    mainEntity: {
      "@type": "Person",
      name: "Zain Ali",
      jobTitle: "Full Stack Developer",
      url: "https://zain.bugslashers.com",
    },
  };
}

export function generateProfessionalServiceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Zain Ali - Full Stack Development Services",
    description:
      "Professional web development services specializing in React, Next.js, and TypeScript applications",
    url: "https://zain.bugslashers.com",
    image: "https://zain.bugslashers.com/images/image.png",
    serviceType: "Web Development",
    provider: {
      "@type": "Person",
      name: "Zain Ali",
      jobTitle: "Full Stack Developer",
    },
    areaServed: {
      "@type": "Place",
      name: "Worldwide",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Web Development Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "React Development",
            description: "Custom React application development",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Next.js Development",
            description: "Modern Next.js web application development",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "TypeScript Development",
            description: "Type-safe application development with TypeScript",
          },
        },
      ],
    },
  };
}
