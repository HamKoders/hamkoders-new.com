export const metadata = {
  title: "SaaS App Development Services That Scale with Your Business",
  description:
    "We provide SaaS app development services that are secure and scalable, tailored to help your business grow, engage users, and thrive in a competitive market.",
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

import vector from "../../../../public/images/saas-app-vector.png";

import service1 from "../../../../public/images/app-services/saas-app-development/1.png";
import service2 from "../../../../public/images/app-services/saas-app-development/2.png";
import service3 from "../../../../public/images/app-services/saas-app-development/3.png";
import service4 from "../../../../public/images/app-services/saas-app-development/4.png";
import service5 from "../../../../public/images/app-services/saas-app-development/5.png";
import service6 from "../../../../public/images/app-services/saas-app-development/6.png";

import discussCtaImage from "../../../../public/images/discuss-cta-image1.png";

import signVector from "../../../../public/images/sign-vector.png";

const bannerData = {
  bgImage: "/images/backend-banner.webp",
  heading1: (
    <h1 className="same-heading">
      Scalable <br /><span> SaaS App </span>Development
    </h1>
  ),
  para: (
    <p className="para">
      Hamkoders SaaS app development services deliver secure, scalable, and high-performing cloud solutions that encourage innovation, increase revenue, and support steady business growth
    </p>
  ),
  image: vector,
  imageAlt: "vector",
};

const serviceData = {
  heading1: (
    <h2 className="same-heading">
      Building SaaS Applications
      <br /> <span>That Scale</span>
    </h2>
  ),
  para: "Our SaaS application development services deliver optimized, reliable, and user-friendly apps with multi-tenant architecture, cloud integration, and seamless functionality for businesses of all sizes.",
  serviceBox: [
    {
      image: service1,
      heading4: (
        <h4>
          Custom SaaS
          <br />
          Architecture
        </h4>
      ),
      para: "We build scalable and modular applications designed around unique business needs, ensuring every solution delivers flexibility, supports future expansion, and adapts smoothly to evolving market demands.",
    },
    {
      image: service2,
      heading4: (
        <h4>
          User-Friendly
          <br />
          Interface
        </h4>
      ),
      para: "Our team designs intuitive dashboards and interfaces that simplify workflows, improve usability, and increase engagement. Smart, user-focused design encourages adoption, boosts retention, and enhances user satisfaction.",
    },
    {
      image: service3,
      heading4: (
        <h4>
          High-Performance
          <br />
          Cloud Solutions
        </h4>
      ),
      para: "We optimize server-side performance, manage databases efficiently, and integrate APIs to deliver fast, reliable application performance across platforms for a smooth user experience.",
    },
    {
      image: service4,
      heading4: (
        <h4>
          Security and <br />
          Compliance
        </h4>
      ),
      para: "We follow proven practices, including secure data storage and compliance standards, to protect sensitive business and user information while ensuring reliable application security.",
    },
    {
      image: service5,
      heading4: (
        <h4>
          Multi-Tenant <br />
          and Subscription
        </h4>
      ),
      para: "Our SaaS platforms support multi-client management, subscription models, and user roles, enabling flexible operations and controlled access for improved performance and management.",
    },
    {
      image: service6,
      heading4: (
        <h4>
          Ongoing Maintenance
          <br />
          and Updates
        </h4>
      ),
      para: "We provide continuous monitoring, performance tuning, and feature updates to keep your SaaS application reliable, competitive, and aligned with changing business needs.",
    },
  ],
  btnText: "Start Saas App Development",
};

const discussCtaData = {
  heading1: <h2 className="same-heading">Empower Business with</h2>,
  heading2: (
    <h3 className="same-heading">
      <span>SaaS Solutions</span>
    </h3>
  ),
  para: "Partner with Hamkoders to build scalable SaaS platforms that simplify operations, improve user engagement, and deliver measurable business results.  ",
  image: discussCtaImage,
};

const demandCompData = {
  heading1: (
    <h2 className="same-heading">
      SaaS App Development Solutions Designed
      <span> for Efficiency and Growth</span>
    </h2>
  ),
  para: "Our SaaS app development services combine strategic planning, advanced technology, and strong architecture to build scalable, high-performing cloud platforms. Through smart SaaS development, Hamkoders delivers reliable solutions that improve efficiency, support growth, and provide future-ready applications for businesses of every size.",
  demandBox: [
    {
      heading4: (
        <h4>
          Strategic <br /> SaaS Planning
        </h4>
      ),
      para: "We align application features, structure, and functionality with business objectives to deliver solutions focused on measurable growth.",
      image: signVector,
    },
    {
      heading4: (
        <h4>
          Scalable and
          <br />
          Modular
        </h4>
      ),
      para: "Our platforms are scalable and flexible, supporting new features and integrations without compromising performance or user experience.",
      image: signVector,
    },
    {
      heading4: (
        <h4>
          Optimized
          <br />
          Performance
        </h4>
      ),
      para: "We focus on speed, stability, and seamless functionality to deliver dependable applications across all user activities.",
      image: signVector,
    },
    {
      heading4: (
        <h4>
          Security <br /> Measures
        </h4>
      ),
      para: "We apply layered security controls, encryption standards, and compliance practices to protect sensitive data and maintain user trust.",
      image: signVector,
    },
  ],
};

const faqs = [
  {
    question: "What is SaaS app development?",
    answer:
      "SaaS app development involves creating cloud-based software applications that users access online through subscription-based models.",
  },
  {
    question: "How long does it take to develop a SaaS app?",
    answer:
      "Depending on complexity, features, and integrations, development generally takes between 12 to 20 weeks.",
  },
  {
    question: "Can SaaS apps support multiple clients and subscriptions?",
    answer:
      "Yes, SaaS platforms can manage multiple clients, user roles, and subscription plans within a secure multi-tenant structure.",
  },
  {
    question: "Will the SaaS app be secure and compliant?",
    answer:
      "Yes, we implement strong security measures and compliance standards to ensure safe and reliable application performance.",
  },
  {
    question: "Can SaaS apps integrate with existing systems?",
    answer:
      "Yes, SaaS applications can integrate smoothly with ERP, CRM, APIs, and other business systems.",
  },
  {
    question: "Do you provide post-launch support for SaaS apps?",
    answer:
      "Yes, Hamkoders offers continuous updates, monitoring, and technical support after launch.",
  },
];

const SaasAppDevelopment = () => {
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

export default SaasAppDevelopment;
