export const metadata = {
  title: "CMS Development Services for Easy Content Control and Growth",
  description:
    "We deliver CMS development services that give you full control—build fast, secure, and scalable websites that are easy to update, manage, and grow over time.",
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

import vector from "../../../../public/images/cms-dev-banner.png";

import service1 from "../../../../public/images/software-development-services/cms-development/1.png";
import service2 from "../../../../public/images/software-development-services/cms-development/2.png";
import service3 from "../../../../public/images/software-development-services/cms-development/3.png";
import service4 from "../../../../public/images/software-development-services/cms-development/4.png";
import service5 from "../../../../public/images/software-development-services/cms-development/5.png";
import service6 from "../../../../public/images/software-development-services/cms-development/6.png";

import discussCtaImage from "../../../../public/images/cms-dev-cta.png";

import signVector from "../../../../public/images/sign-vector.png";

const bannerData = {
  bgImage: "/images/enterprise-dev-banner.webp",
  heading1: (
    <h1 className="same-heading">
      Next-Generation <span> CMS </span>Solutions
    </h1>
  ),
  para: (
    <p className="para">
     Strengthen your digital presence with Hamkoders CMS development services, delivering efficient content management systems, enterprise solutions, and reliable CMS website development for modern businesses.
    </p>
  ),
  image: vector,
  imageAlt: "vector",
};

const serviceData = {
  heading1: (
    <h2 className="same-heading">
      Creating  CMS Platforms <br /> <span>That Strengthen  Businesses</span>
    </h2>
  ),
  para: "Hamkoders CMS website development services deliver flexible, scalable, and secure platforms that simplify content management, improve collaboration, and maintain consistent digital experiences across every business channel.",
  serviceBox: [
    {
      image: service1,
      heading4: (
        <h4>
          Custom CMS <br />
          Development
        </h4>
      ),
      para: "We build CMS platforms tailored to business requirements, enabling simple content creation, editing, and publishing across digital platforms.",
    },
    {
      image: service2,
      heading4: (
        <h4>
          Enterprise CMS <br />
          Development
        </h4>
      ),
      para: "Our enterprise CMS solutions offer advanced functionality, strong security, and scalable performance to support large and growing organizations.",
    },
    {
      image: service3,
      heading4: (
        <h4>
          Responsive CMS<br />
          Development
        </h4>
      ),
      para: "We create CMS websites that are mobile-friendly, SEO-ready, and user-focused to improve engagement and visitor experience.",
    },
    {
      image: service4,
      heading4: (
        <h4>
          Automation and <br />
          Collaboration
        </h4>
      ),
      para: "Our CMS platforms simplify workflows, automate routine tasks, and improve team collaboration for smoother business operations.",
    },
    {
      image: service5,
      heading4: (
        <h4>
          Integration with <br /> 
          Third-Party Tools
        </h4>
      ),
      para: "We enable smooth integration with marketing tools, analytics systems, CRM, and other platforms to enhance performance and functionality.",
    },
    {
      image: service6,
      heading4: (
        <h4>
          Ongoing Maintenance <br />
          & Support
        </h4>
      ),
      para: "We provide regular updates, monitoring, and technical support to keep CMS platforms secure, optimized, and aligned with evolving business needs.",
    },
  ],
  btnText: "Start CMS Development",
};

const discussCtaData = {
  heading1: <h2 className="same-heading">Enhance Content </h2>,
  heading2: (
      <h3 className="same-heading">
        <span>Management Efficiency</span>
      </h3>
    ),
  para: "Partner with Hamkoders for enterprise CMS development that simplifies website management, supports digital growth, and delivers secure, flexible, and scalable solutions for modern businesses.",
  image: discussCtaImage,
};

const demandCompData = {
  heading1: (
    <h2 className="same-heading">
      CMS Development Solutions<span> for Modern Enterprises</span>
    </h2>
  ),
  para: 'Our CMS development services deliver complete solutions for building dynamic, secure, and scalable websites. Hamkoders, a reliable CMS development company, provides enterprise CMS and expert website development to strengthen digital presence, streamline operations, and improve business efficiency.',
  demandBox: [
    {
      heading4: (
        <h4>Custom CMS <br /> Architecture</h4>
      ),
      para: ' We design and implement CMS platforms aligned with business workflows and content strategies for better performance and management.',
      image: signVector
    },
    {
      heading4: (
        <h4>Enterprise CMS <br />Development</h4>
      ),
      para: 'Our solutions deliver strong security, flexible functionality, and scalable architecture suitable for enterprise-level organizations.',
      image: signVector
    },
    {
      heading4: (
        <h4>Responsive and <br /> Interactive Design</h4>
      ),
      para: 'We develop CMS websites that are visually engaging, easy to navigate, and fully optimized for all screen sizes.',
      image: signVector
    },
    {
      heading4: (
        <h4>Integration and <br />Optimization</h4>
      ),
      para: 'We ensure seamless integration with third-party platforms while optimizing performance for speed, stability, and usability.',
      image: signVector
    }
  ]
}

const faqs = [
  {
    question: "What is CMS development?",
    answer:
      "CMS development involves creating content management systems that allow businesses to manage, update, and publish digital content easily.",
  },
  {
    question: "What is enterprise CMS development",
    answer:
      "Enterprise CMS development delivers scalable, secure, and robust content management platforms designed for large organizations and complex operations.",
  },
  {
    question: "Can CMS websites be customized?",
    answer:
      "Yes, CMS websites can be fully customized to match business goals, branding, and content management requirements.",
  },
  {
    question: "Why choose Hamkoders as a CMS development company?",
    answer:
      "Hamkoders delivers secure, scalable, and user-focused CMS solutions designed to improve digital presence and operational efficiency.",
  },
  {
    question: "Can CMS integrate with other business tools?",
    answer:
      "Yes, CMS platforms integrate seamlessly with CRM, marketing tools, analytics, and other business systems.",
  },
  {
    question: "Do you provide ongoing CMS support and maintenance?",
    answer:
      "Hamkoders offers continuous updates, monitoring, and technical support to keep CMS platforms secure, optimized, and reliable.",
  }
];

const CmsDevelopment = () => {
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

export default CmsDevelopment;
