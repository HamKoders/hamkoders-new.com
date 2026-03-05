export const metadata = {
  title: "Enterprise Risk Management Services for Smarter Decisions",
  description:
    "We provide enterprise risk management services to help you identify, manage, and reduce business risks—ensuring compliance, continuity, and long-term stability.",
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

import vector from "../../../../public/images/erm-dev-banner.png";

import service1 from "../../../../public/images/software-development-services/erm-development/1.png";
import service2 from "../../../../public/images/software-development-services/erm-development/2.png";
import service3 from "../../../../public/images/software-development-services/erm-development/3.png";
import service4 from "../../../../public/images/software-development-services/erm-development/4.png";
import service5 from "../../../../public/images/software-development-services/erm-development/5.png";
import service6 from "../../../../public/images/software-development-services/erm-development/6.png";

import discussCtaImage from "../../../../public/images/erm-dev-cta.png";

import signVector from "../../../../public/images/sign-vector.png";

const bannerData = {
  bgImage: "/images/android-app-dev.webp",
  heading1: (
    <h1 className="same-heading">
      Enterprise<span> Risk Management </span>Services
    </h1>
  ),
  para: (
    <p className="para">
      Enhance business stability and decision-making with Hamkoders enterprise risk management services. We help organizations identify, evaluate, and reduce risks through centralized data systems, automated workflows, and secure compliant solutions that support smarter operations and sustainable growth.
    </p>
  ),
  image: vector,
  imageAlt: "vector",
};

const serviceData = {
  heading1: (
    <h2 className="same-heading">
      Providing ERM Solutions
      <br /> <span>That Reduce Risk</span>
    </h2>
  ),
  para: "Hamkoders enterprise risk management services help businesses detect risks, maintain compliance, lower operational threats, and ensure secure, scalable continuity for stable and efficient growth.",
  serviceBox: [
    {
      image: service1,
      heading4: (
        <h4>
          Custom ERM <br />
          Development
        </h4>
      ),
      para: "We create customized ERM solutions aligned with organizational risk strategies, improving visibility, compliance, and overall operational performance.",
    },
    {
      image: service2,
      heading4: (
        <h4>
          ERM Software <br />
          Integration
        </h4>
      ),
      para: "Our team delivers advanced ERM software integration, helping businesses identify, evaluate, and manage potential risks across all operational areas.",
    },
    {
      image: service3,
      heading4: (
        <h4>
          Automation and <br />
          Workflow
        </h4>
      ),
      para: "We simplify risk-related tasks through automation, reducing manual effort and streamlining workflows to improve efficiency and productivity.",
    },
    {
      image: service4,
      heading4: (
        <h4>
          Data Analytics <br />
          and Reporting
        </h4>
      ),
      para: "Our ERM platforms deliver real-time data insights, interactive dashboards, and reports to support strong decision-making and business stability.",
    },
    {
      image: service5,
      heading4: (
        <h4>
          Integration with <br />
          Existing Systems
        </h4>
      ),
      para: "We enable smooth ERM integration with ERP, CRM, and finance platforms to maintain unified and efficient business operations.",
    },
    {
      image: service6,
      heading4: (
        <h4>
          Support and 
          <br />
          Maintenance
        </h4>
      ),
      para: "We provide continuous monitoring, regular updates, and technical support to keep ERM systems secure, reliable, and performing efficiently.",
    },
  ],
  btnText: "Start ERM Development",
};

const discussCtaData = {
  heading1: <h2 className="same-heading">Strengthen Business Control</h2>,
  heading2: (
    <h3 className="same-heading">
      <span>and Risk Preparedness</span>
    </h3>
  ),
  para: "Partner with Hamkoders for ERM software development that centralizes risk data, automates compliance processes, improves decision-making, and supports stable, long-term business growth.",
  image: discussCtaImage,
};

const demandCompData = {
  heading1: (
    <h2 className="same-heading">
      Risk Management Solutions<span> for Modern Enterprises</span>
    </h2>
  ),
  para: "Hamkoders delivers reliable enterprise risk management services that help businesses detect risks, maintain compliance, and ensure stable operations. Our scalable solutions support growth, strengthen internal controls, and adapt to changing risks, helping organizations manage uncertainty confidently.",
  demandBox: [
    {
      heading4: (
        <h4>
          Custom ERM <br />Architecture
        </h4>
      ),
      para: "We build scalable ERM systems designed around industry standards and business processes to ensure strong performance and efficiency.",
      image: signVector,
    },
    {
      heading4: (
        <h4>
          Advanced Risk <br />
          Capabilities
        </h4>
      ),
      para: "Integrated ERM features enable organizations to identify, monitor, and control operational, financial, and compliance risks effectively.",
      image: signVector,
    },
    {
      heading4: (
        <h4>
          Workflow <br />
          Automation
        </h4>
      ),
      para: "Our solutions simplify communication, automate routine tasks, and improve productivity across teams and operations.",
      image: signVector,
    },
    {
      heading4: (
        <h4>
          Insightful <br /> Analytics
        </h4>
      ),
      para: " Access real-time data, detailed reports, and dashboards to support smarter decisions and effective performance tracking.",
      image: signVector,
    },
  ],
};

const faqs = [
  {
    question: "What is ERM development?",
    answer:
      "ERM development involves creating enterprise risk management systems that help businesses identify, monitor, and manage risks while maintaining compliance and operational stability.",
  },
  {
    question: "How does ERM improve risk control?",
    answer:
      "By combining enterprise risk management services with advanced ERM software, businesses gain real-time risk visibility and respond faster to potential threats.",
  },
  {
    question: "Can ERM solutions be tailored by industry?",
    answer:
      "Yes, ERM systems can be customized according to industry requirements, risk factors, and specific business operations.",
  },
  {
    question: "Do ERM systems provide analytics?",
    answer:
      "Yes, ERM platforms offer real-time analytics, dashboards, and reports to support risk monitoring and strategic decision-making.",
  },
  {
    question: "Are ERM tools compatible with other systems?",
    answer:
      "Yes, ERM solutions integrate easily with ERP, CRM, and financial systems to ensure smooth business operations.",
  },
  {
    question: "Is ongoing support available?",
    answer:
      "Yes, Hamkoders provides continuous updates, monitoring, and technical support to maintain secure and efficient ERM system performance.",
  },
];

const ErpDevelopment = () => {
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
      <DemandComp demandCompData={demandCompData} />
      <FAQSection faqs={faqs} />
    </PageLayout>
  );
};

export default ErpDevelopment;
