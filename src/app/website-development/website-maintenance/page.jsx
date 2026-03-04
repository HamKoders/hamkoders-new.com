export const metadata = {
  title: "Website Maintenance Service Agency for Reliable Site Support",
  description:
    "We provide website maintenance service agency solutions that keep your site fast, secure, and up-to-date — so you can focus on growth, not technical issues.",
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

import vector from "../../../../public/images/website-maintenance-vector.png";

import service1 from "../../../../public/images/website-services/website-maintenance/1.png";
import service2 from "../../../../public/images/website-services/website-maintenance/2.png";
import service3 from "../../../../public/images/website-services/website-maintenance/3.png";
import service4 from "../../../../public/images/website-services/website-maintenance/4.png";
import service5 from "../../../../public/images/website-services/website-maintenance/5.png";
import service6 from "../../../../public/images/website-services/website-maintenance/6.png";

import discussCtaImage from "../../../../public/images/discuss-cta-image-maintain-ser.webp";

import signVector from "../../../../public/images/sign-vector.png";

const bannerData = {
  bgImage: "/images/fullstack-banner.webp",
  heading1: (
    <h1 className="same-heading">
      Reliable <span>Website Maintenance</span>
    </h1>
  ),
  para: (
    <p className="para">
      We provide website maintenance services that ensure fast performance, strong security, and smooth functionality to keep your business running without interruptions.
    </p>
  ),
  image: vector,
  imageAlt: "vector",
};

const serviceData = {
  heading1: (
    <h2 className="same-heading">
      MAINTAINING DIGITAL SYSTEM 
      <br /> <span>THAT POWER PERFORMANCE</span>
    </h2>
  ),
  para: "Our website maintenance ensures high-performance operations, seamless updates, and secure scalable infrastructure to support continuous business growth.",
  serviceBox: [
    {
      image: service1,
      heading4: (
        <h4>
          CUSTOM WEBSITE  <br />
          MANAGEMENT
        </h4>
      ),
      para: "We manage website structures efficiently to maintain performance and ensure consistent functionality across all pages.",
    },
    {
      image: service2,
      heading4: (
        <h4>
          Security and<br />
           Monitoring
        </h4>
      ),
      para: "With encryption, malware protection, and vulnerability monitoring, we secure websites and protect critical data.",
    },
    {
      image: service3,
      heading4: (
        <h4>
          HIGH-SPEED
          <br />
           WEBSITE PERFORMANCE
        </h4>
      ),
      para: "We implement optimization, caching, and monitoring strategies to deliver fast load times and uninterrupted uptime.",
    },
    {
      image: service4,
      heading4: (
        <h4>
          PLUGIN AND  <br />
          SYSTEM INTEGRATION
        </h4>
      ),
      para: "Our maintenance frameworks ensure flawless communication between tools, plugins, and databases for stable performance.",
    },
    {
      image: service5,
      heading4: (
        <h4>
          SCALABLE <br />
           MAINTENANCE SOLUTIONS
        </h4>
      ),
      para: " Our maintenance systems adapt to growth and evolving technologies without downtime or instability",
    },
    {
      image: service6,
      heading4: (
        <h4>
          RESULT-ORIENTED<br />
           WEBSITE PERFORMANCE
        </h4>
      ),
      para: "Every update and optimization supports measurable engagement, improved functionality, and stronger digital growth.",
    },
  ],
  btnText: "Start Website Maintenance",
};

const discussCtaData = {
  heading1: <h2 className="same-heading">RELIABLE</h2>,
  heading2: (
    <h3 className="same-heading">
      <span> WEBSITE MAINTENANCE</span>
    </h3>
  ),
  para: "We offer website maintenance services to keep your platform secure, updated, and optimized with continuous monitoring, performance improvements, and technical support for long-term stability.",
  image: discussCtaImage,
};

const demandCompData = {
  heading1: (
    <h2 className="same-heading">
      WEBSITE MAINTENANCE SOLUTIONS FOR<span> PERFORMANCE AND LONG-TERM STABILITY</span>
    </h2>
  ),
  para: "Our website maintenance services keep digital platforms secure, updated, and performing at peak levels. Hamkoders ensures smooth functionality, regular updates, and performance monitoring so businesses maintain strong online presence without downtime.",
  demandBox: [
    {
      heading4: (
        <h4>
          Performance
          <br />  Monitoring
        </h4>
      ),
      para: "Track website speed, uptime, and functionality to maintain consistent digital performance.",
      image: signVector,
    },
    {
      heading4: (
        <h4>
          Security <br />
           Updates
        </h4>
      ),
      para: "Implement regular updates and patches to protect websites from vulnerabilities and threats.",
      image: signVector,
    },
    {
      heading4: (
        <h4>
          Bug Fixing  
          <br />
          & Support
        </h4>
      ),
      para: "Resolve technical issues quickly to ensure uninterrupted user experience and stability.",
      image: signVector,
    },
    {
      heading4: (
        <h4>
          Ongoing<br />  Optimization
        </h4>
      ),
      para: "Continuously improve performance, speed, and usability for long-term growth and success.",
      image: signVector,
    },
  ],
};

const faqs = [
  {
    question: "What does website maintenance include?",
    answer:
      "Website maintenance includes updates, security checks, performance optimization, and technical support.",
  },
  {
    question: "Why is website maintenance important?",
    answer:
      "Regular maintenance keeps websites secure, fast, and fully functional for better user experience.",
  },
  {
    question: "Do you provide regular updates?",
    answer:
      "Yes, we update plugins, security patches, and system features to maintain stability.",
  },
  {
    question: "Can you fix website issues quickly?",
    answer:
      "Our team resolves bugs, errors, and performance issues to ensure smooth website operation.",
  },
  {
    question: "Will my website remain secure?",
    answer:
      " We implement security monitoring and protection systems to safeguard your digital platform.",
  },
  {
    question: "Do you offer ongoing maintenance plans?",
    answer:
      " Yes, we provide continuous support and optimization for long-term website performance.",
  },
];

const WebMaintenance = () => {
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

export default WebMaintenance;
