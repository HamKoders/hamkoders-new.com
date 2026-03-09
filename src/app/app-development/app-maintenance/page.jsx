export const metadata = {
  title: "Mobile App Maintenance Services for Seamless App Performance",
  description:
    "Our mobile app maintenance services ensure your app stays fast, secure, and up-to-date—preventing issues, improving UX, and supporting your app’s growth.",
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

import vector from "../../../../public/images/app-maintenance-vector.png";

import service1 from "../../../../public/images/app-services/app-maintenance/1.png";
import service2 from "../../../../public/images/app-services/app-maintenance/2.png";
import service3 from "../../../../public/images/app-services/app-maintenance/3.png";
import service4 from "../../../../public/images/app-services/app-maintenance/4.png";
import service5 from "../../../../public/images/app-services/app-maintenance/5.png";
import service6 from "../../../../public/images/app-services/app-maintenance/6.png";

import discussCtaImage from "../../../../public/images/discuss-cta-image-maintain-ser.png";

import signVector from "../../../../public/images/sign-vector.png";

const bannerData = {
  bgImage: "/images/fullstack-banner.webp",
  heading1: (
    <h1 className="same-heading">
      Ongoing <span>App Maintenance</span>
    </h1>
  ),
  para: (
    <p className="para">
      Hamkoders mobile app maintenance services keep applications secure, optimized, and fully updated, tracking performance to ensure smooth operation and continuous business growth.
    </p>
  ),
  image: vector,
  imageAlt: "vector",
};

const serviceData = {
  heading1: (
    <h2 className="same-heading">
      Keeping Applications Secure,<br /> <span>Fast, and Functional</span>
    </h2>
  ),
  para: "Our mobile app backup, recovery, and performance monitoring services maintain peak efficiency, reliability, and user satisfaction by resolving technical issues, refining functionality, and ensuring compatibility with evolving platforms.",
  serviceBox: [
    {
      image: service1,
      heading4: (
        <h4>
          Performance<br />
          Monitoring
        </h4>
      ),
      para: "We track performance metrics, identify bottlenecks, and apply improvements to maintain smooth, responsive, and stable operation across all platforms.",
    },
    {
      image: service2,
      heading4: (
        <h4>
          Bug Fixes
        </h4>
      ),
      para: "Our team quickly resolves errors, crashes, and technical issues, minimizing downtime and ensuring a seamless, uninterrupted, and reliable user experience across all applications.",
    },
    {
      image: service3,
      heading4: (
        <h4>
          Feature<br />
          Enhancements
        </h4>
      ),
      para: "Continuous monitoring and timely updates protect sensitive data, reduce vulnerabilities, and maintain compliance with industry standards.",
    },
    {
      image: service4,
      heading4: (
        <h4>
          Security <br />
          Management
        </h4>
      ),
      para: "Continuous monitoring and regular security updates safeguard sensitive data, prevent vulnerabilities, ensure compliance with industry standards, and maintain secure, reliable, and high-performing application environments.",
    },
    {
      image: service5,
      heading4: (
        <h4>
          Cross-Platform <br />
          Compatibility
        </h4>
      ),
      para: "We ensure apps remain compatible with the latest devices, operating systems, and third-party tools for uninterrupted functionality.",
    },
    {
      image: service6,
      heading4: (
        <h4>
          Analytics and<br />
          Reporting
        </h4>
      ),
      para: "We provide actionable performance insights, user behavior analysis, and strategic recommendations to optimize growth and efficiency.",
    }
  ],
  btnText: "Start App Maintenance",
};

const discussCtaData = {
  heading1: <h2 className="same-heading">Maximize App</h2>,
  heading2: (
      <h3 className="same-heading">
        <span>Reliability and Longevity</span>
      </h3>
    ),
  para: "Partner with Hamkoders for app backup and recovery services that ensure stable performance, strong security, uninterrupted user experiences, and long-term digital value.",
  image: discussCtaImage,
};

const demandCompData = {
  heading1: (
    <h2 className="same-heading">
      Application Maintenance Solutions<span> for Continuous Success</span>
    </h2>
  ),
  para: 'Our mobile app maintenance services combine proactive monitoring, optimization, and reliable technical support. Through mobile app support and maintenance services, Hamkoders ensures applications remain secure, stable, future-ready, and perform smoothly while delivering strong user experiences and supporting ongoing business growth.',
  demandBox: [
    {
      heading4: (
        <h4>Proactive<br />Monitoring</h4>
      ),
      para: 'We continuously track system performance and enhance app speed, responsiveness, and efficiency to maintain smooth operation.',
      image: signVector
    },
    {
      heading4: (
        <h4>Technical  <br />Support</h4>
      ),
      para: 'Our team resolves issues quickly, minimizing disruption and ensuring consistent and reliable app functionality.',
      image: signVector
    },
    {
      heading4: (
        <h4>Feature <br />Updates</h4>
      ),
      para: 'We introduce enhancements and new features aligned with user feedback and evolving business requirements.',
      image: signVector
    },
    {
      heading4: (
        <h4>Security <br /> Management</h4>
      ),
      para: 'Regular updates and strong security measures protect sensitive data and maintain compliance with industry standards.',
      image: signVector
    }
  ]
}

const faqs = [
  {
    question: "What is application maintenance?",
    answer:
      "AApplication maintenance ensures software remains updated, secure, optimized, and compatible with new devices and system updates.",
  },
  {
    question: "How often should apps be maintained?",
    answer:
      "Regular maintenance is recommended at least monthly, with urgent updates applied immediately to maintain security and performance.",
  },
  {
    question: "Do you provide updates for both mobile and web applications?",
    answer:
      "Yes, Hamkoders provides maintenance and updates for both mobile and web applications.",
  },
  {
    question: "Can you fix bugs and performance issues?",
    answer:
      "Yes, we quickly resolve bugs, crashes, and performance issues to ensure smooth functionality.",
  },
  {
    question: "How do you ensure app security?",
    answer:
      "We apply regular security updates, monitoring, and data protection practices to keep applications secure.",
  },
  {
    question: "Do you provide reports on app performance?",
    answer:
      "Yes, we provide detailed performance reports and insights to help improve efficiency and user experience.",
  }
];

const AppMaintenance = () => {
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

export default AppMaintenance;
