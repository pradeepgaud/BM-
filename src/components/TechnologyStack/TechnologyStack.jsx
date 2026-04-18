import React, { useState } from "react";

// Tech stack data wahi hai jo aapne diya tha
const techStack = {
  "Core Technologies": [
    {
      name: "React 18.2+",
      logo: "https://cdn.worldvectorlogo.com/logos/react-2.svg",
    },
    {
      name: "TypeScript 5.0+",
      logo: "https://cdn.worldvectorlogo.com/logos/typescript.svg",
    },
    {
      name: "JavaScript ES2023",
      logo: "https://cdn.worldvectorlogo.com/logos/javascript-1.svg",
    },
    { name: "HTML5", logo: "https://cdn.worldvectorlogo.com/logos/html-1.svg" },
    { name: "CSS3", logo: "https://cdn.worldvectorlogo.com/logos/css-3.svg" },
    {
      name: "WebAssembly",
      logo: "https://cdn.worldvectorlogo.com/logos/webassembly-1.svg",
    },
  ],
  "Frameworks & Libraries": [
    {
      name: "Next.js",
      logo: "https://cdn.worldvectorlogo.com/logos/next-js.svg",
    },
    { name: "Vite", logo: "https://cdn.worldvectorlogo.com/logos/vitejs.svg" },
    { name: "Remix", logo: "https://cdn.worldvectorlogo.com/logos/remix.svg" },
    {
      name: "Gatsby",
      logo: "https://cdn.worldvectorlogo.com/logos/gatsby.svg",
    },
    {
      name: "React App",
      logo: "https://cdn.worldvectorlogo.com/logos/react-2.svg",
    },
    {
      name: "Expo (React Native)",
      logo: "https://cdn.worldvectorlogo.com/logos/expo-1.svg",
    },
  ],
  "State Management": [
    {
      name: "Redux Toolkit",
      logo: "https://cdn.worldvectorlogo.com/logos/redux.svg",
    },

    {
      name: "MobX",
      logo: "https://cdn.worldvectorlogo.com/logos/mobx.svg",
    },
    {
      name: "Recoil",
      logo: "https://cdn.worldvectorlogo.com/logos/recoil-js.svg",
    },
    {
      name: "React (Context API)",
      logo: "https://cdn.worldvectorlogo.com/logos/react-2.svg",
    },
    // {
    //   name: "React Query",
    //   logo: "https://cdn.worldvectorlogo.com/logos/react-query.svg",
    // },
    // {
    //   name: "SWR",
    //   logo: "https://swr.vercel.app/logo.svg",
    // },
  ],
  "UI Libraries & Styling": [
    {
      name: "Tailwind CSS",
      logo: "https://cdn.worldvectorlogo.com/logos/tailwind-css-2.svg",
    },

    {
      name: "Framer Motion",
      logo: "https://cdn.worldvectorlogo.com/logos/framer-motion.svg",
    },
    {
      name: "Styled Components",
      logo: "https://styled-components.com/logo.png",
    },
    {
      name: "Saas UI",
      logo: "https://avatars.githubusercontent.com/u/77029847?s=200&v=4",
    },
    {
      name: "Shadcn UI",
      logo: "https://avatars.githubusercontent.com/u/139895814?s=200&v=4",
    },
    {
      name: "MUI",
      logo: "https://cdn.worldvectorlogo.com/logos/material-ui-1.svg",
    },
  ],
  "Testing & Quality": [
    {
      name: "Jest",
      logo: "https://cdn.worldvectorlogo.com/logos/jest-2.svg",
    },
    {
      name: "React Testing Library",
      logo: "https://testing-library.com/img/octopus-64x64.png",
    },
    {
      name: "Cypress",
      logo: "https://cdn.worldvectorlogo.com/logos/cypress-1.svg",
    },
    {
      name: "Playwright",
      logo: "https://playwright.dev/img/playwright-logo.svg",
    },
    {
      name: "ESLint",
      logo: "https://cdn.worldvectorlogo.com/logos/eslint.svg",
    },
    {
      name: "Prettier",
      logo: "https://cdn.worldvectorlogo.com/logos/prettier-2.svg",
    },
  ],
  "Build & Development Tools": [
    {
      name: "Webpack",
      logo: "https://cdn.worldvectorlogo.com/logos/webpack-icon.svg",
    },
    {
      name: "Vite",
      logo: "https://cdn.worldvectorlogo.com/logos/vitejs.svg",
    },
    {
      name: "Babel",
      logo: "https://cdn.worldvectorlogo.com/logos/babel-10.svg",
    },
    {
      name: "Package Managers",
      logo: "https://cdn.worldvectorlogo.com/logos/npm.svg",
    },
    {
      name: "Git",
      logo: "https://cdn.worldvectorlogo.com/logos/github-icon-2.svg",
    },
    {
      name: "Docker",
      logo: "https://cdn.worldvectorlogo.com/logos/docker.svg",
    },
  ],
  "Backend Integration": [
    {
      name: "REST APIs",
      logo: "https://cdn-icons-png.flaticon.com/512/919/919825.png",
    },

    {
      name: "Firebase",
      logo: "https://cdn.worldvectorlogo.com/logos/firebase-1.svg",
    },

    {
      name: "AWS Amplify",
      logo: "https://cdn.worldvectorlogo.com/logos/aws-amplify.svg",
    },
  ],
  "Performance & Monitoring": [
    {
      name: "Sentry",
      logo: "https://cdn.worldvectorlogo.com/logos/sentry-3.svg",
    },
    {
      name: "Lighthouse",
      logo: "https://cdn.worldvectorlogo.com/logos/lighthouse.svg",
    },
    {
      name: "Datadog",
      logo: "https://cdn.worldvectorlogo.com/logos/datadog.svg",
    },
    {
      name: "New Relic",
      logo: "https://cdn.worldvectorlogo.com/logos/new-relic.svg",
    },
  ],
};

const TechnologyStack = () => {
  const [activeTab, setActiveTab] = useState("Core Technologies");

  return (
    <>
      <section className="tech-section">
        <div className="auto-container">
          {/* Top spacing kam karne ke liye mb-4 aur mt-0 use kiya hai */}
          <h3 className="mb-5 mt-0 text-center theme-h3">
            Our Modern ReactJS Technology Stack
          </h3>

          {/* Capsule Tabs */}
          <div className="tech-tabs-container">
            {Object.keys(techStack).map((tabName) => (
              <button
                key={tabName}
                className={`tech-tab-btn ${activeTab === tabName ? "active" : ""}`}
                onClick={() => setActiveTab(tabName)}
              >
                {tabName}
              </button>
            ))}
          </div>

          {/* Logo Grid */}
          <div className="tech-logos-grid" key={activeTab}>
            {techStack[activeTab]?.map((item, i) => (
              <div className="tech-logo-card" key={i} data-name={item.name}>
                <img src={item.logo} alt={item.name} loading="lazy" />
              </div>
            ))}
          </div>
        </div>

        <style>{`
    .tech-section {
      background-color: var(--body-bg);
      /* Padding top kam kar di hai */
      padding: 60px 0 100px 0;
      text-align: center;
    }

    .tech-tabs-container {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 12px;
      margin-bottom: 40px; /* Spacing adjusted */
      padding: 0 20px;
    }

    .tech-tab-btn {
      background: var(--bg-color);
      border: 1px solid var(--border-color2-rgba);
      color: rgba(255, 255, 255, 0.6);
      padding: 10px 22px;
      border-radius: 100px;
      font-size: 14px;
      font-family: var(--heading-font-family);
      font-weight: 500;
      cursor: pointer;
      transition: all 0.3s ease;
    }

    .tech-tab-btn.active {
      background: var(--theme-color1);
      border-color: var(--theme-color1);
      color: #fff;
      box-shadow: 0 8px 20px rgba(var(--theme-color1-rgb), 0.25);
    }

    .tech-logos-grid {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 20px;
      max-width: 1100px;
      margin: 0 auto;
    }

    .tech-logo-card {
      width: 130px;
      height: 130px;
      background: rgba(255, 255, 255, 0.02);
      border: 1px solid rgba(255, 255, 255, 0.05);
      border-radius: 18px;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 30px;
      transition: all 0.4s ease;
      position: relative;
    }

    .tech-logo-card:hover {
      background: rgba(var(--theme-color1-rgb), 0.05);
      border-color: var(--theme-color1);
      transform: translateY(-8px);
    }

    .tech-logo-card img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      /* Filter hata diya hai taaki icons default colored rahein */
      filter: none;
      transition: all 0.4s ease;
    }

    .tech-logo-card:hover img {
      transform: scale(1.1);
    }

    /* Tooltip logic for name on hover */
    .tech-logo-card::after {
      content: attr(data-name);
      position: absolute;
      bottom: -10px;
      left: 50%;
      transform: translateX(-50%);
      background: var(--theme-color2);
      color: #fff;
      font-size: 11px;
      padding: 4px 8px;
      border-radius: 4px;
      opacity: 0;
      transition: 0.3s;
      pointer-events: none;
      font-family: var(--body-font-family);
    }

    .tech-logo-card:hover::after {
      opacity: 1;
      bottom: 10px;
    }
  `}</style>
      </section>
    </>
  );
};

export default TechnologyStack;
