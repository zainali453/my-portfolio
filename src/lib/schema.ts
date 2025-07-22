export function generatePersonSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Zain Ali",
    jobTitle: "Full Stack Developer",
    description:
      "Passionate full-stack developer with expertise in React, Next.js, TypeScript, and modern web technologies.",
    url: "https://zainali.bugslashers.com",
    image: "https://zainali.bugslashers.com/images/image.png",
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
    ],
    alumniOf: {
      "@type": "Organization",
      name: "FAST NUCES",
    },
  };
}

export function generateWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Zain Ali Portfolio",
    url: "https://zainali.bugslashers.com",
    description:
      "Portfolio website of Zain Ali, a passionate full-stack developer",
    author: {
      "@type": "Person",
      name: "Zain Ali",
    },
  };
}
