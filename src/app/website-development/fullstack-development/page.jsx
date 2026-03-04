export const metadata = {
  title: "Full Stack Development Agency Services for Scalable Solution",
  description:
    "We offer full-stack development agency services that bring frontend and backend together — smart, secure, and built to scale with your business at every stages.",
};
import React from "react";
import PageLayout from "@/components/PageLayout";
import AndroidAppBanner from "@/components/AndroidAppBanner/AndroidAppBanner";
import FeaturedBrands from "@/components/PortfolioComp/FeaturedBrands/FeaturedBrands";
import AndroidServices from "@/components/AndroidServices/AndroidServices";
import AndroidProgress from "@/components/AndroidProgress/AndroidProgress";
import AwardsSec from "@/components/AwardsSec/AwardsSec";
import DiscussCta from "@/components/DiscussCta/DiscussCta";
import Testimonials from "@/components/Testimonials/Testimonials";
import CategoryService from "@/components/CategoryService/CategoryService";
import FAQSection from "@/components/AboutComp/FaqSec/FaqSec";
import DemandComp from "@/components/DemandComp/DemandComp";

import vector from "../../../../public/images/fullstack-vector.png";

import service1 from "../../../../public/images/website-services/fullstack-development/1.png";
import service2 from "../../../../public/images/website-services/fullstack-development/2.png";
import service3 from "../../../../public/images/website-services/fullstack-development/3.png";
import service4 from "../../../../public/images/website-services/fullstack-development/4.png";
import service5 from "../../../../public/images/website-services/fullstack-development/5.png";
import service6 from "../../../../public/images/website-services/fullstack-development/6.png";

import discussCtaImage from "../../../../public/images/discuss-cta-image-full-web-dev.webp";

import signVector from "../../../../public/images/sign-vector.png";

const bannerData = {
  bgImage: "/images/fullstack-banner.webp",
  heading1: (
    <h1 className="same-heading">
      ADVANCING BUSINESS WITH <span> Full-Stack</span> Development
    </h1>
  ),
  para: (
    <p className="para">
      Hamkoders builds scalable full-stack solutions combining frontend and backend technologies to improve performance, streamline operations, and support long-term digital growth.
    </p>
  ),
  image: vector,
  imageAlt: "vector",
};

const serviceData = {
  heading1: (
    <h2 className="same-heading">
      BUILDING THE DIGITAL ENGINE <br /> <span>THAT POWERS SYSTEMS</span>
    </h2>
  ),
  para: "Our backend development ensures high-performance operations, seamless integrations, and secure scalable infrastructure, managing complex data while supporting business and product growth.",
  serviceBox: [
    {
      image: service1,
      heading4: (
        <h4>
          CUSTOM SERVER <br />
          Architecture
        </h4>
      ),
      para: "We design powerful backend architectures that manage heavy workloads and maintain consistent performance, structured for dynamic functionality and future expansion.",
    },
    {
      image: service2,
      heading4: (
        <h4>
          HIGH-SPEED DATA    <br />
          PROCESSING
        </h4>
      ),
      para: "We implement optimized server logic, fast database queries, and advanced caching strategies for rapid response times and stable system uptime.",
    },
    {
      image: service3,
      heading4: (
        <h4>
          RESULT-ORIENTED <br />
          PERFORMANCE 
        </h4>
      ),
      para: "Every backend component supports measurable outcomes, from faster operations and automation to improved engagement and revenue growth.",
    },
    {
      image: service4,
      heading4: (
        <h4>
          API AND DATABASE <br />
          INTEGRATION
        </h4>
      ),
      para: "Our backend frameworks enable smooth communication between systems, applications, and databases, improving efficiency and building a connected digital ecosystem.",
    },
    {
      image: service5,
      heading4: (
        <h4>
          ENTERPRISE SECURITY<br />
          CONTROLS
        </h4>
      ),
      para: "Security is integrated into every backend layer. With encryption, access control, and monitoring, we protect sensitive data and ensure secure transactions.  ",
    },
    {
      image: service6,
      heading4: (
        <h4>
          SCALABLE <br />
          BACKEND SOLUTIONS 
        </h4>
      ),
      para: "Our backend systems are built to grow with user demand and evolving technologies, allowing feature expansion without downtime or instability.",
    }
  ],
  btnText: "Start Fullstack Development",
};

const discussCtaData = {
  heading1: <h2 className="same-heading">DRIVING GROWTH WITH </h2>,
  heading2: (
      <h3 className="same-heading">
        <span>FULL-STACK DEVELOPMENT</span>
      </h3>
    ),
  para: "Partner with HadzTech for end-to-end development, ensuring seamless integration of all components, accelerating innovation, streamlining delivery, and achieving measurable digital product results.",
  image: discussCtaImage,
};

const demandCompData = {
  heading1: (
    <h2 className="same-heading">
       FULL-STACK<span> SOLUTIONS ENGINEERED</span>  FOR SCALABILITY AND BUSINESS GROWTH

    </h2>
  ),
  para: 'Our full-stack development services combine powerful front-end and backend technologies to build scalable digital platforms. Hamkoders developers create complete web solutions with optimized performance, strong architecture, and seamless integrations to ensure smooth functionality and long-term business growth.',
  demandBox: [
    {
      heading4: (
        <h4>Unified <br />  Architecture</h4>
      ),
      para: 'Develop complete systems combining front-end interfaces with powerful backend infrastructure and logic',
      image: signVector
    },
    {
      heading4: (
        <h4>API & System <br />  Integration</h4>
      ),
      para: 'Connect applications, third-party services, and databases for smooth digital workflows and automation.',
      image: signVector
    },
    {
      heading4: (
        <h4>Performance <br />Optimization</h4>
      ),
      para: 'Optimize full-stack applications for speed, stability, and seamless user experiences across platforms.',
      image: signVector
    },
    {
      heading4: (
        <h4>Deployment & <br /> Maintenance</h4>
      ),
      para: 'Ensure reliable deployment and continuous monitoring for long-term performance and scalability.',
      image: signVector
    }
  ]
}

const faqs = [
  {
    question: "What is full-stack development?",
    answer:
      "Full-stack development covers both front-end and backend systems to build complete, scalable digital platforms",
  },
  {
    question: "Why choose full-stack development?",
    answer:
      "It ensures seamless performance, faster development, and smooth integration between user interface and server systems.",
  },
  {
    question: "Which technologies do you use for full-stack projects?",
    answer:
      "We use modern frameworks, scalable backend technologies, and optimized databases for complete development solutions",
  },
  {
    question: "Can you upgrade existing full-stack applications?",
    answer:
      " Yes, we enhance performance, improve design, and upgrade backend architecture for better scalability.",
  },
  {
    question: "Will the system handle business growth?",
    answer:
      "Our full-stack solutions are built to scale with traffic, users, and future feature expansion.",
  },
  {
    question: "Do you offer long-term support?",
    answer:
      "Yes, we provide updates, monitoring, and continuous optimization for long-term performance.",
  }
];

const FullstackDevelopment = () => {
  return (
    <PageLayout>
      <AndroidAppBanner bannerData={bannerData} />
      <FeaturedBrands heading={"Trusted by"} headingSpan={"Leading Brands"} />
      <AndroidServices serviceData={serviceData} />
      <AndroidProgress />
      <AwardsSec />
      <DiscussCta discussCtaData={discussCtaData} />
      <Testimonials />
      <div className="CategoryService_padding">
        <CategoryService />
      </div>
      <DemandComp demandCompData={demandCompData}/>
      <FAQSection faqs={faqs} />
    </PageLayout>
  );
};

export default FullstackDevelopment;
