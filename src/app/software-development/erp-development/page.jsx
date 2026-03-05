export const metadata = {
  title: "ERP Software Development Services to Streamline Operations",
  description:
    "Our ERP software development services simplify complex processes—boosting productivity with tailored systems that connect teams, data, and workflows.",
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

import vector from "../../../../public/images/erp-development-banner.png";

import service1 from "../../../../public/images/software-development-services/erp-development/1.png";
import service2 from "../../../../public/images/software-development-services/erp-development/2.png";
import service3 from "../../../../public/images/software-development-services/erp-development/3.png";
import service4 from "../../../../public/images/software-development-services/erp-development/4.png";
import service5 from "../../../../public/images/software-development-services/erp-development/5.png";
import service6 from "../../../../public/images/software-development-services/erp-development/6.png";

import discussCtaImage from "../../../../public/images/erp-dev-cta.webp";

import signVector from "../../../../public/images/sign-vector.png";

const bannerData = {
  bgImage: "/images/front-end-banner.webp",
  heading1: (
    <h1 className="same-heading">
      Advanced<span> ERP Systems </span>for Growth
    </h1>
  ),
  para: (
    <p className="para">
      Improve productivity and efficiency with Hamkoders ERP software development services, connecting finance, HR, and operations within one secure, integrated system.
    </p>
  ),
  image: vector,
  imageAlt: "vector",
};

const serviceData = {
  heading1: (
    <h2 className="same-heading">
      Developing ERP Systems<br /> <span>That Strengthen Businesses</span>  
    </h2>
  ),
  para: "Hamkoders ERP development services are designed around your business structure, improving workflows, enhancing collaboration, and providing real-time data insights for smarter operational and strategic decisions.",
  serviceBox: [
    {
      image: service1,
      heading4: (
        <h4>
          Custom ERP <br />
          Solutions
        </h4>
      ),
      para: "We develop ERP systems tailored to specific business operations, ensuring smooth alignment with processes, goals, and day-to-day management needs.",
    },
    {
      image: service2,
      heading4: (
        <h4>
          Modular and <br />
          Scalable
        </h4>
      ),
      para: "Our ERP platforms are flexible and modular, allowing seamless feature expansion and scalability as business requirements and operations continue to grow.",
    },
    {
      image: service3,
      heading4: (
        <h4>
          Process<br />
          Automation
        </h4>
      ),
      para: "We streamline repetitive and time-intensive tasks through automation, increasing productivity and minimizing errors across business operations and teams.",
    },
    {
      image: service4,
      heading4: (
        <h4>
          Data <br />
          Analytics
        </h4>
      ),
      para: "Our ERP solutions deliver real-time analytics, detailed reports, and dashboards that help businesses monitor performance and make informed decisions.",
    },
    {
      image: service5,
      heading4: (
        <h4>
          Integration
        </h4>
      ),
      para: "We provide smooth integration with existing systems and business tools to maintain workflow continuity and improve operational efficiency.",
    },
    {
      image: service6,
      heading4: (
        <h4>
          Ongoing <br />
          Maintenance
        </h4>
      ),
      para: "We deliver regular updates, performance monitoring, and technical support to keep ERP systems secure, stable, and running efficiently.",
    },
  ],
  btnText: "Start ERP Development",
};

const discussCtaData = {
  heading1: <h2 className="same-heading">Enhance Business Efficiency</h2>,
  heading2: (
      <h3 className="same-heading">
        <span>with Advanced ERP Expertise</span> 
      </h3>
    ),
  para: "Work with Hamkoders’ professional ERP development team to simplify operations, improve productivity, and support scalable business growth through smart, integrated management solutions.",
  image: discussCtaImage,
};

const demandCompData = {
  heading1: (
    <h2 className="same-heading">
      ERP Development Solutions<span> for Modern Businesses</span>
    </h2>
  ),
  para: ' Our ERP software development services provide complete systems that simplify operations, reduce costs, and improve decision-making. Hire ERP developers from Hamkoders to unify workflows, enhance productivity, and support scalable business growth through smart integrated management platforms.',
  demandBox: [
    {
      heading4: (
        <h4>Custom ERP <br /> Development</h4>
      ),
      para: 'We create solutions customized to specific industries and business models, ensuring smooth functionality and efficient workflow management across operations.',
      image: signVector
    },
    {
      heading4: (
        <h4>Scalable <br />Architecture</h4>
      ),
      para: 'ERP systems are designed with flexibility, supporting business expansion and future upgrades without affecting performance or stability.',
      image: signVector
    },
    {
      heading4: (
        <h4>Workflow <br />Automation</h4>
      ),
      para: 'We streamline processes through automation, reducing manual effort, lowering errors, and improving overall operational efficiency.',
      image: signVector
    },
    {
      heading4: (
        <h4>Data-Driven <br /> Support</h4>
      ),
      para: 'Our ERP platforms deliver real-time insights, analytics, and reports to support smart planning and effective performance monitoring.',
      image: signVector
    }
  ]
}

const faqs = [
  {
    question: "What is ERP development?",
    answer:
      "ERP development involves creating customized enterprise software that integrates core business processes like finance, HR, and operations into one unified and efficient management system.",
  },
  {
    question: "How long does it take to develop an ERP system?",
    answer:
      "The timeline depends on project complexity and features, usually ranging between 12 to 24 weeks to deliver a fully customized and functional ERP solution.",
  },
  {
    question: "Can ERP systems be customized for different industries?",
    answer:
      "Yes, ERP systems can be tailored for various industries, aligning features and workflows with specific business processes and operational requirements.",
  },
  {
    question: "Does ERP help with data analytics?",
    answer:
      "Yes, ERP platforms provide real-time analytics, reports, and insights that support better decision-making and performance tracking.",
  },
  {
    question: "Can ERP integrate with existing business tools?",
    answer:
      "Yes, ERP solutions can integrate smoothly with current business software, platforms, and tools for seamless workflow management.",
  },
  {
    question: "Do you provide ongoing ERP support?",
    answer:
      "Yes, Hamkoders provides continuous ERP maintenance, updates, and technical support to ensure smooth performance and long-term system reliability",
  }
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
      <DemandComp demandCompData={demandCompData}/>
      <FAQSection faqs={faqs} />
    </PageLayout>
  );
};

export default ErpDevelopment;
