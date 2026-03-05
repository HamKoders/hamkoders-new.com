export const metadata = {
  title: "CRM Developer Services to Build Stronger Customer Relations",
  description:
    "Our expert CRM developers create custom solutions to organize sales, track customer data, and improve engagement—helping your team stay connected and responsive.",
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

import vector from "../../../../public/images/crm-dev-banner.png";

import service1 from "../../../../public/images/software-development-services/crm-development/1.png";
import service2 from "../../../../public/images/software-development-services/crm-development/2.png";
import service3 from "../../../../public/images/software-development-services/crm-development/3.png";
import service4 from "../../../../public/images/software-development-services/crm-development/4.png";
import service5 from "../../../../public/images/software-development-services/crm-development/5.png";
import service6 from "../../../../public/images/software-development-services/crm-development/6.png";

import discussCtaImage from "../../../../public/images/crm-dev-cta.png";

import signVector from "../../../../public/images/sign-vector.png";

const bannerData = {
  bgImage: "/images/webapp-dev-banner.webp",
  heading1: (
    <h1 className="same-heading">
      Advanced<span> CRM Solutions </span>for Growth
    </h1>
  ),
  para: (
    <p className="para">
       Improve customer engagement and business efficiency with Hamkoders CRM development services that centralize data, simplify communication, and maintain secure, reliable business operations.
    </p>
  ),
  image: vector,
  imageAlt: "vector",
};

const serviceData = {
  heading1: (
    <h2 className="same-heading">
      Building CRM Solutions<br /> <span>That Support Growth</span>
    </h2>
  ),
  para: "Hamkoders custom CRM development services are aligned with your business goals, improving customer engagement, simplifying operations, and supporting long-term growth through smooth and reliable system functionality.",
  serviceBox: [
    {
      image: service1,
      heading4: (
        <h4>
          Custom CRM <br />
          Development
        </h4>
      ),
      para: "We develop tailored CRM platforms aligned with business workflows, improving productivity, operational efficiency, and effective customer relationship management.",
    },
    {
      image: service2,
      heading4: (
        <h4>
          ERM Software <br />
          Integration
        </h4>
      ),
      para: "Our CRM solutions include ERM integration features that help businesses identify, monitor, and manage operational risks with improved efficiency.",
    },
    {
      image: service3,
      heading4: (
        <h4>
          Automation<br />
          and Workflow
        </h4>
      ),
      para: "We streamline repetitive processes, reduce manual workload, and optimize workflows to increase productivity and improve overall operational performance.",
    },
    {
      image: service4,
      heading4: (
        <h4>
          Data Analytics <br />
          and Reporting
        </h4>
      ),
      para: "Our CRM systems provide real-time insights, custom dashboards, and detailed reporting tools to support strategic planning and business growth.",
    },
    {
      image: service5,
      heading4: (
        <h4>
          Integration with <br /> 
          Existing Tools
        </h4>
      ),
      para: "We enable seamless CRM integration with ERP, marketing, and communication platforms to maintain efficient and continuous business operations.",
    },
    {
      image: service6,
      heading4: (
        <h4>
          Support and <br />
          Maintenance
        </h4>
      ),
      para: "We provide regular updates, performance monitoring, and technical support to keep CRM systems secure, stable, and running efficiently.",
    },
  ],
  btnText: "Start CRM Development",
};

const discussCtaData = {
  heading1: <h2 className="same-heading">Enhance Customer Engagement</h2>,
  heading2: (
      <h3 className="same-heading">
        <span>and Business Management</span>
      </h3>
    ),
  para: "Partner with Hamkoders for CRM development services that centralize customer data, optimize workflows, strengthen engagement, and support sustainable business growth through efficient management systems.",
  image: discussCtaImage,
};

const demandCompData = {
  heading1: (
    <h2 className="same-heading">
      CRM Development Solutions<span> for Modern Businesses</span>
    </h2>
  ),
  para: 'Our CRM development agency provides complete solutions to improve customer experience, streamline operations, and manage risks effectively. Hire expert CRM developers from Hamkoders to integrate ERM systems, strengthen engagement, optimize workflows, and deliver secure, scalable CRM platforms.',
  demandBox: [
    {
      heading4: (
        <h4>Custom CRM <br /> Architecture</h4>
      ),
      para: 'We design scalable CRM systems tailored to industry standards and business processes for improved performance and operational efficiency.',
      image: signVector
    },
    {
      heading4: (
        <h4>ERM Software  <br />Capabilities</h4>
      ),
      para: 'We integrate ERM features that help businesses monitor, manage, and reduce operational, financial, and compliance risks efficiently.',
      image: signVector
    },
    {
      heading4: (
        <h4>Automation and <br />Productivity</h4>
      ),
      para: 'Our CRM platforms simplify communication, tasks, and workflows to enhance team productivity and reduce operational errors.',
      image: signVector
    },
    {
      heading4: (
        <h4>Data-Driven <br /> Insights</h4>
      ),
      para: 'We deliver real-time analytics, reports, and dashboards that support strategic planning and effective performance management.',
      image: signVector
    }
  ]
}

const faqs = [
  {
    question: "What is CRM development?",
    answer:
      "CRM development involves building customized customer relationship management systems that help businesses organize data, improve communication, and manage customer interactions efficiently.",
  },
  {
    question: "How does CRM support risk management?",
    answer:
      "By integrating enterprise risk management features and ERM tools, CRM systems help businesses identify, monitor, and reduce operational risks effectively.",
  },
  {
    question: "Can CRM be customized for different industries?",
    answer:
      "Yes, CRM systems can be tailored to match industry-specific workflows, customer management processes, and unique operational requirements.",
  },
  {
    question: "Does CRM offer analytics and reporting?",
    answer:
      "Yes, CRM platforms provide real-time analytics, performance reports, and dashboards to support smarter decision-making and growth planning.",
  },
  {
    question: "Can CRM integrate with other business tools?",
    answer:
      "Yes, CRM systems integrate easily with ERP, marketing tools, and communication platforms to ensure seamless business operations",
  },
  {
    question: "Do you provide ongoing support for CRM systems?",
    answer:
      "Yes, Hamkoders offers continuous updates, monitoring, and technical support to keep CRM systems secure, optimized, and running smoothly.",
  }
];

const CrmDevelopment = () => {
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

export default CrmDevelopment;
