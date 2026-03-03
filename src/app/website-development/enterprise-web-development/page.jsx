export const metadata = {
  title: "Enterprise Web Development Services for Scalable Performance",
  description:
    "We deliver enterprise web development that’s scalable, secure, and tailored to complex business needs, built for performance, flexibility, and long-term growth.",
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

import vector from "../../../../public/images/enterprise-web-vector.png";

import service1 from "../../../../public/images/website-services/enterprise-web-development/1.png";
import service2 from "../../../../public/images/website-services/enterprise-web-development/2.png";
import service3 from "../../../../public/images/website-services/enterprise-web-development/3.png";
import service4 from "../../../../public/images/website-services/enterprise-web-development/4.png";
import service5 from "../../../../public/images/website-services/enterprise-web-development/5.png";
import service6 from "../../../../public/images/website-services/enterprise-web-development/6.png";

import discussCtaImage from "../../../../public/images/discuss-cta-image-ent-web-dev.webp";

import signVector from "../../../../public/images/sign-vector.png";
import enterpriseBGImage from "../../../../public/images/enterprise-dev-banner.webp";

const bannerData = {
  bgImage: "/images/enterprise-dev-banner.webp",
  heading1: (
    <h1 className="same-heading">
      <span>HIGH-PERFORMANCE</span> Web Solutions
    </h1>
  ),
  para: (
    <p className="para">
      Hamkoders delivers
      <span> Enterprise Web Development </span>  Services built on secure, scalable, and innovative platforms that streamline operations, accelerate growth, and ensure long-term digital success.

    </p>
  ),
  image: vector,
  imageAlt: "vector",
};

const serviceData = {
  heading1: (
    <h2 className="same-heading">
      POWERING THE DIGITAL CORE <br /> <span> of GLOBAL Enterprises</span>
    </h2>
  ),
  para: "Our advanced web development services deliver secure, scalable platforms built to manage complex data, high traffic, and critical operations while supporting innovation and sustainable business growth.",
  serviceBox: [
    {
      image: service1,
      heading4: (
        <h4>
          SMART PLATFORM <br />
          Architecture
        </h4>
      ),
      para: " We build powerful platform structures designed for scalability, flexibility, and smooth performance to support enterprise growth and evolving digital demands.",
    },
    {
      image: service2,
      heading4: (
        <h4>
          CONNECTED USER  <br />
          EXPERIENCE
        </h4>
      ),
      para: "Our intuitive designs and systems ensure smooth navigation, strong engagement, and seamless interaction across modern digital platforms.",
    },
    {
      image: service3,
      heading4: (
        <h4>
        
          HIGH Performance <br />
          Engineering
        </h4>
      ),
      para: "We implement advanced optimization techniques and fast-loading frameworks to deliver stable performance and reliability across enterprise-level operations.",
    },
    {
      image: service4,
      heading4: (
        <h4>
          ENTERPRISE DATA  <br />
          SECURITY
        </h4>
      ),
      para: "We implement strong security systems and monitoring tools to protect sensitive data and maintain stable digital environments for businesses.",
    },
    {
      image: service5,
      heading4: (
        <h4>
          SEO-DRIVEN <br />
          Architecture
        </h4>
      ),
      para: "We integrate SEO-focused development to improve visibility, boost rankings, and drive consistent organic traffic across search engines.",
    },
    {
      image: service6,
      heading4: (
        <h4>
          Measurable <br />
          RESULTS
        </h4>
      ),
      para: "Our strategies focus on delivering measurable performance, higher conversions, and consistent growth aligned with business objectives.",
    },
  ],
  btnText: "Start Enterprise Website Development",
};

const discussCtaData = {
  heading1: <h2 className="same-heading">EMPOWERING THE FUTURE OF DIGITAL</h2>,
  heading2: (
    <h3 className="same-heading">
      <span>Enterprise Operations</span>
    </h3>
  ),
  para: "Partner with Hamkoders to build advanced digital platforms that streamline operations, improve performance, and support long-term global business growth.",
  image: discussCtaImage,
};

const demandCompData = {
  heading1: (
    <h2 className="same-heading">
      Enterprise <span>  WEB Development Solutions</span> BUILT FOR SCALABILITY & GROWTH
    </h2>
  ),
  para: "Our enterprise web development services deliver secure, scalable, and future-ready digital platforms designed to support business growth, automation, and long-term performance worldwide.",
  demandBox: [
    {
      heading4: (
        <h4>
          Tailored
          <br /> Digital Strategy
        </h4>
      ),
      para: "We collaborate with businesses to build customized digital strategies aligned with goals, industry standards, and smooth operational workflows.",
      image: signVector,
    },
    {
      heading4: (
        <h4>
          Infrastructure Built <br /> for Reliability
        </h4>
      ),
      para: "We develop stable and scalable systems using modern architecture to ensure performance, security, and continuous growth for enterprise businesses.",
      image: signVector,
    },
    {
      heading4: (
        <h4>
          Adaptive Scalability <br /> Model
        </h4>
      ),
      para: "Our scalable solutions allow businesses to expand features, users, and performance without affecting speed, stability, or operations.",
      image: signVector,
    },
    {
      heading4: (
        <h4>
          Integrated Security <br /> Foundation
        </h4>
      ),
      para: "We implement strong security protocols, encryption, and compliance systems to protect enterprise data and maintain secure digital environments.",
      image: signVector,
    },
  ],
};

const faqs = [
  {
    question: "What defines enterprise-level web development?",
    answer:
      "Enterprise web development focuses on scalable architecture, strong security, advanced integrations, and high-performance systems built to handle large traffic, data, and business operations efficiently.",
  },
  {
    question: "How do enterprise projects differ from standard websites?",
    answer:
      "Enterprise projects require advanced architecture, deeper integrations, stronger security, and performance optimization to support complex operations, automation, and long-term business scalability.",
  },
  {
    question:
      "Can existing enterprise systems be integrated with new platforms?",
    answer:
      "Yes, we integrate CRM, ERP, APIs, and third-party systems with new enterprise platforms to ensure smooth data flow, automation, and improved operational efficiency.",
  },
  {
    question: "How long does an enterprise project typically take?",
    answer:
      "Project timelines depend on features, integrations, and complexity. Most enterprise platforms take a few weeks to several months for full development and deployment.",
  },
  {
    question: "Will the platform remain adaptable to future needs?",
    answer:
      "Yes, we build scalable and flexible enterprise platforms designed to grow with your business, allowing future upgrades, integrations, and performance improvements.",
  },
  {
    question: "Do you provide post-launch enterprise support?",
    answer:
      "Yes, we offer continuous maintenance, updates, monitoring, and technical support to ensure long-term stability, performance, and security of your enterprise platform.",
  },
];

const EnterpriseWebDevelopment = () => {
  return (
    <PageLayout>
      <AndroidAppBanner bannerData={bannerData} />
      <FeaturedBrands heading={"Trusted by"} headingSpan={"GLobal Brands"} />
      <AndroidServices serviceData={serviceData} />
      <AndroidProgress />
      <AwardsSec />
      <DiscussCta discussCtaData={discussCtaData} />
      <Testimonials />
      <div className="CategoryService_padding">
        <CategoryService />
      </div>
      <DemandComp demandCompData={demandCompData} />
      <FAQSection faqs={faqs} />
    </PageLayout>
  );
};

export default EnterpriseWebDevelopment;
