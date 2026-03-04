export const metadata = {
  title: "Landing Page Development Services Agency for High Conversion",
  description:
    "We offer landing page development services that turn clicks into customers—custom-built, fast, and designed to drive results for agencies, brands, and startups.",
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

import vector from "../../../../public/images/landing-page-vector.png";

import service1 from "../../../../public/images/website-services/landing-page-development/1.png";
import service2 from "../../../../public/images/website-services/landing-page-development/2.png";
import service3 from "../../../../public/images/website-services/landing-page-development/3.png";
import service4 from "../../../../public/images/website-services/landing-page-development/4.png";
import service5 from "../../../../public/images/website-services/landing-page-development/5.png";
import service6 from "../../../../public/images/website-services/landing-page-development/6.png";

import discussCtaImage from "../../../../public/images/discuss-cta-image-landing-web-dev.webp";

import signVector from "../../../../public/images/sign-vector.png";

const bannerData = {
  bgImage: "/images/android-app-dev.webp",
  heading1: (
    <h1 className="same-heading">
      HIGH-CONVERTING <span>Landing Page</span> Development
    </h1>
  ),
  para: (
    <p className="para">
      We design landing page development services that create fast, responsive, and visually compelling pages designed to capture leads and boost conversions.  
    </p>
  ),
  image: vector,
  imageAlt: "vector",
};

const serviceData = {
  heading1: (
    <h2 className="same-heading">
     BUILDING COMPLETE DIGITAL PLATFORMS<br /> <span>THAT POWER BUSINESS GROWTH</span>
 
    </h2>
  ),
  para: "Our full-stack development combines front-end and backend expertise to build scalable, secure, and high-performance digital platforms for modern businesses.",
  serviceBox: [
    {
      image: service1,
      heading4: (
        <h4>
          END-TO-END <br />
          ARCHITECTURE
        </h4>
      ),
      para: "We design complete system structures covering interface, server, and database to ensure smooth performance and unified functionality.",
    },
    {
      image: service2,
      heading4: (
        <h4>
          HIGH-PERFORMANCE  <br />
          SYSTEMS
        </h4>
      ),
      para: "We optimize both client and server sides for fast loading, responsive design, and reliable operations across devices and platforms.",
    },
    {
      image: service3,
      heading4: (
        <h4>
          RESULT-DRIVEN<br />
           DIGITAL PERFORMANCE
        </h4>
      ),
      para: " Each project focuses on improving engagement, automation, and conversions, delivering measurable business impact and growth.",
    },
    {
      image: service4,
      heading4: (
        <h4>
          SECURE FULL-STACK<br />
           STRUCTURE
        </h4>
      ),
      para: " Security is built into every layer, from interface protection to database security, ensuring safe and stable digital environments.",
    },
    {
      image: service5,
      heading4: (
        <h4>
          FRONTEND AND<br />
         BACKEND INTEGRATION
        </h4>
      ),
      para: " Our developers connect design and server technologies seamlessly, creating stable platforms with smooth data flow and powerful functionality.",
    },
    {
      image: service6,
      heading4: (
        <h4>
          SCALABLE<br />
           DEVELOPMENT SOLUTIONS
        </h4>
      ),
      para: "Our full-stack platforms are built to scale with growth, supporting new features, users, and integrations without performance issues.",
    }
  ],
  btnText: "Start Landing Development",
};

const discussCtaData = {
  heading1: <h2 className="same-heading">POWERING BUSINESS GROWTH</h2>,
  heading2: (
      <h3 className="same-heading">
        <span>WITH FULL-STACK DEVELOPMENT</span> 
      </h3>
    ),
  para: "Partner with HadzTech to create mobile-friendly landing pages that blend creativity, strategy, and technical expertise, transforming marketing efforts into measurable business results.",
  image: discussCtaImage,
};

const demandCompData = {
  heading1: (
    <h2 className="same-heading">
      ADVANCED FULL-STACK SOLUTIONS BUILT FOR<span> SCALABILITY AND BUSINESS SUCCESS</span>


    </h2>
  ),
  para: 'Hamkoders delivers full-stack development services combining modern frontend and backend technologies to build scalable digital platforms that enhance performance, flexibility, and long-term business growth.',
  demandBox: [
    {
      heading4: (
        <h4>Unified<br />  Architecture</h4>
      ),
      para: 'Develop complete systems that connect front-end interfaces with powerful backend infrastructure for stable and scalable performance.',
      image: signVector
    },
    {
      heading4: (
        <h4>API & System  <br /> Integration</h4>
      ),
      para: 'Integrate applications, third-party tools, and databases to create smooth workflows and efficient digital automation.',
      image: signVector
    },
    {
      heading4: (
        <h4>Performance<br /> Optimization</h4>
      ),
      para: 'Enhance application speed, stability, and user experience with optimized full-stack development practices.',
      image: signVector
    },
    {
      heading4: (
        <h4>Deployment &<br />  Maintenance</h4>
      ),
      para: 'Ensure smooth deployment, regular updates, and ongoing monitoring for long-term platform reliability and scalability.',
      image: signVector
    }
  ]
}

const faqs = [
  {
    question: "What is landing page development?",
    answer:
      " Landing page development focuses on creating high-converting pages designed for marketing campaigns and lead generation.",
  },
  {
    question: "Why are landing pages important?",
    answer:
      "They improve conversions, capture leads, and support marketing campaigns with targeted messaging and design.",
  },
  {
    question: "Do you create SEO-friendly landing pages?",
    answer:
      "Yes, all landing pages are optimized for speed, search visibility, and better campaign performance",
  },
  {
    question: "Can you redesign existing landing pages?",
    answer:
      "We optimize design, content layout, and speed to improve conversion rates and engagement.",
  },
  {
    question: "Will landing pages work on all devices?",
    answer:
      "Yes, every page is fully responsive and optimized for mobile, tablet, and desktop performance.",
  },
  {
    question: "Do you provide landing page maintenance?",
    answer:
      " Yes, we offer updates, performance monitoring, and optimization for better campaign results.",
  }
];

const LandingPageDevelopment = () => {
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

export default LandingPageDevelopment;
