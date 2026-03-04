export const metadata = {
  title: "Custom Backend Development Service for Robust Digital Growth",
  description:
    "Our custom backend development services deliver speed flexibility, and security crafted to support complex systems seamless performance, and future scalability.",
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

import vector from "../../../../public/images/backend-vector.png";

import service1 from "../../../../public/images/website-services/backend-development/1.png";
import service2 from "../../../../public/images/website-services/backend-development/2.png";
import service3 from "../../../../public/images/website-services/backend-development/3.png";
import service4 from "../../../../public/images/website-services/backend-development/4.png";
import service5 from "../../../../public/images/website-services/backend-development/5.png";
import service6 from "../../../../public/images/website-services/backend-development/6.png";

import discussCtaImage from "../../../../public/images/discuss-cta-image-back-web-dev.webp";

import signVector from "../../../../public/images/sign-vector.png";

const bannerData = {
  bgImage: "/images/backend-banner.webp",
  heading1: (
    <h1 className="same-heading">
      POWERFUL  <span> Back-End</span> DEVELOPMENT
    </h1>
  ),
  para: (
    <p className="para">
     Hamkoders provide backend development services that create secure, scalable, and high-performance systems designed to manage data efficiently and support business growth.
    </p>
  ),
  image: vector,
  imageAlt: "vector",
};

const serviceData = {
  heading1: (
    <h2 className="same-heading">
      Building the Digital Engine <br /> <span>That RUNS BUSINESS SYSTEMS</span>
    </h2>
  ),
  para: "Our backend development ensures secure performance, powerful integrations, and scalable infrastructure, managing data efficiently while supporting long-term platform growth.",
  serviceBox: [
    {
      image: service1,
      heading4: (
        <h4>
          Custom Server <br />
          Architecture
        </h4>
      ),
      para: "We build strong backend frameworks designed to manage heavy operations and maintain consistent system performance for evolving digital platforms.",
    },
    {
      image: service2,
      heading4: (
        <h4>
          API and Database <br />
          Integration
        </h4>
      ),
      para: "Our backend developers connect applications and databases seamlessly, enabling smooth communication and creating a unified digital ecosystem.",
    },
    {
      image: service3,
      heading4: (
        <h4>
          High-Speed <br />
          Data Processing
        </h4>
      ),
      para: "We implement optimized server logic and advanced data handling to deliver fast responses, stable performance, and uninterrupted system functionality.",
    },
    {
      image: service4,
      heading4: (
        <h4>
          ADVANCED Security<br />
          Controls
        </h4>
      ),
      para: "Security is integrated into every backend system using encryption, secure access layers, and monitoring to protect sensitive data and transactions.",
    },
    {
      image: service5,
      heading4: (
        <h4>
          Scalable BACKEND<br />
          Solutions
        </h4>
      ),
      para: "Our backend systems grow with your business. Flexible architecture allows feature expansion without affecting speed or performance stability.",
    },
    {
      image: service6,
      heading4: (
        <h4>
          PERFORMANCE-FOCUSED  <br />
          RESULTS
        </h4>
      ),
      para: "Each backend solution is structured to improve automation, efficiency, and measurable growth, supporting long-term digital success.",
    }
  ],
  btnText: "Start Backend Development",
};

const discussCtaData = {
  heading1: <h2 className="same-heading">Powering Business Growth Through</h2>,
  heading2: (
      <h3 className="same-heading">
        <span>BACK-END Solutions</span>
      </h3>
    ),
  para: "Power your business with Hamkoders backend development services built for scalability, performance, and security. We create reliable systems that support growth, streamline operations, and ensure smooth application performance.",
  image: discussCtaImage,
};

const demandCompData = {
  heading1: (
    <h2 className="same-heading">
      Back-End<span> Solutions Engineered</span> for Reliability and Future Expansion
    </h2>
  ),
  para: 'Our custom backend development services provide secure, scalable, and flexible solutions for digital success. Hamkoders backend developers build strong infrastructures and advanced server-side logic, ensuring platforms operate reliably under real-world traffic while supporting growth, automation, and seamless application performance.',
  demandBox: [
    {
      heading4: (
        <h4>Scalable <br /> Architecture</h4>
      ),
      para: 'Build flexible backend systems that adapt to traffic growth, user demands, and expanding platforms.',
      image: signVector
    },
    {
      heading4: (
        <h4>API  <br /> Integration</h4>
      ),
      para: 'Seamlessly connect applications, services, and databases with secure and scalable backend integrations.',
      image: signVector
    },
    {
      heading4: (
        <h4>Database <br />Optimization</h4>
      ),
      para: 'Ensure strong performance using structured, secure, and high-speed database architecture for applications  .',
      image: signVector
    },
    {
      heading4: (
        <h4>Cloud <br /> Deployment</h4>
      ),
      para: 'Deploy backend systems on cloud environments for reliability, performance, and seamless scalability.',
      image: signVector
    }
  ]
}

const faqs = [
  {
    question: "What is back-end development?",
    answer:
      "Back-end development manages server logic, databases, and integrations that power applications and ensure smooth system functionality.",
  },
  {
    question: "Why is a strong back-end important?",
    answer:
      "It ensures speed, scalability, and reliability. A powerful backend manages data efficiently and keeps digital platforms secure.",
  },
  {
    question: "What technologies do you use for back-end development?",
    answer:
      "We use scalable frameworks, secure databases, and cloud-ready infrastructure for high-performance backend systems.",
  },
  {
    question: "Can you integrate third-party services into my system?",
    answer:
      " Yes, we connect APIs, payment gateways, and external tools for smooth and efficient digital operations.",
  },
  {
    question: "Will the back-end support future feature upgrades?",
    answer:
      "Our backend systems are built for scalability, allowing seamless feature expansion and performance improvements.",
  },
  {
    question: "Do you provide ongoing server-side support?",
    answer:
      "Yes, we offer monitoring, maintenance, and optimization to ensure continuous backend performance.",
  }
];

const BackendDevelopment = () => {
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

export default BackendDevelopment;
