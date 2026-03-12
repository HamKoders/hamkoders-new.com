export const metadata = {
  title: "Woo Commerce Development for Flexible High-Converting Stores",
  description:
    "We offer Woo Commerce development that blends speed, design, and flexibility—custom stores that are easy to manage, built to sell, and ready to scale with you.",
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

import vector from "../../../../public/images/guidelines-vector.png";

import service1 from "../../../../public/images/brand-services/brand-guidelines-style-guide/1.png";
import service2 from "../../../../public/images/brand-services/brand-guidelines-style-guide/2.png";
import service3 from "../../../../public/images/brand-services/brand-guidelines-style-guide/3.png";
import service4 from "../../../../public/images/brand-services/brand-guidelines-style-guide/4.png";
import service5 from "../../../../public/images/brand-services/brand-guidelines-style-guide/5.png";
import service6 from "../../../../public/images/brand-services/brand-guidelines-style-guide/6.png";

import discussCtaImage from "../../../../public/images/brand-cta.png";

import signVector from "../../../../public/images/sign-vector.png";

const bannerData = {
  bgImage: "/images/webapp-dev-banner.webp",
  heading1: (
    <h1 className="same-heading">
      Expert<span> Brand Guidelines & Style Guide </span>Services
    </h1>   
  ),
  para: (
    <p className="para">
      Strengthen your brand identity with Hamkoders, a trusted brand guideline and style guide partner delivering consistent visual standards, cohesive branding systems, and clear brand communication.
    </p>
  ),
  image: vector,
  imageAlt: "vector",
};

const serviceData = {
  heading1: (
    <h2 className="same-heading">
      Creating Brand Systems That <br /> <span>Maintain Consistency and Impact</span>
    </h2>
  ),
  para: "Hamkoders specializes in complete brand guidelines and style guide development, creating structured visual systems and documentation designed to maintain consistency and strengthen brand recognition.",
  serviceBox: [
    {
      image: service1,
      heading4: (
        <h4>
          Custom Brand <br />
          Guidelines
        </h4>
      ),
      para: "We create tailored brand guideline documents that perfectly represent your brand identity while delivering clear standards for consistent visual and content presentation.",
    },
    {
      image: service2,
      heading4: (
        <h4>
          Optimized <br />
          Visual Standards 
        </h4>
      ),
      para: "Our team ensures consistent typography, color palettes, logo usage, and design elements, designed to enhance brand recognition, credibility, and professional consistency.",
    },
    {
      image: service3,
      heading4: (
        <h4>
          Asset  <br />
          Integration
        </h4>
      ),
      para: "We organize brand assets, visual elements, and usage rules, providing teams with reliable, structured resources for smooth and consistent brand implementation",
    },
    {
      image: service4,
      heading4: (
        <h4>
          Feature-Rich <br />
          Documentation
        </h4>
      ),
      para: "We deliver comprehensive style guides including logo usage, imagery direction, tone of voice, and digital branding standards for efficient brand management.",
    },
    {
      image: service5,
      heading4: (
        <h4>
          Consistency-Focused  <br />
          Structure
        </h4>
      ),
      para: "WWe apply brand standardization across digital platforms, print materials, and communication channels, strengthening recognition and maintaining brand alignment.",
    },
    {
      image: service6,
      heading4: (
        <h4>
          Ongoing<br />
          Brand Support
        </h4>
      ),
      para: "After delivery, we provide updates, refinements, and documentation support, keeping your brand guidelines relevant, consistent, and aligned with growth.",
    }
  ],
  btnText: "Start WooCommerce development",
};

const discussCtaData = {
  heading1: <h2 className="same-heading">Scale Brand Consistency with </h2>,
  heading2: (
      <h3 className="same-heading">
        <span>Style Guide Expertise</span>
      </h3>
    ),
  para: "Partner with Hamkoders for brand guideline and style guide development, delivering structured documentation optimized for consistency, clarity, and long-term brand success. ",
  image: discussCtaImage,
};

const demandCompData = {
  heading1: (
    <h2 className="same-heading">
      Brand Guidelines & Style Guide Solutions<span> for Modern Brands</span>
    </h2>
  ),
  para: 'Hamkoders’ Brand Guidelines & Style Guide Services, led by experienced branding specialists, combine strategy, structure, and creativity to build comprehensive brand systems. With structured documentation and consistent visual rules, we create professional branding frameworks that strengthen recognition and support growth.',
  demandBox: [
    {
      heading4: (
        <h4>Brand <br />Structure</h4>
      ),
      para: 'We create brand guideline systems tailored to your identity, communication style, and business positioning.',
      image: signVector
    },
    {
      heading4: (
        <h4>Consistent <br />Visual Identity </h4>
      ),
      para: 'We define typography, color systems, imagery direction, and logo usage to maintain strong visual consistency everywhere.',
      image: signVector
    },
    {
      heading4: (
        <h4>Integrated Brand <br /> Assets</h4>
      ),
      para: 'We organize brand elements and usage rules to support marketing, design, and communication across all channels.',
      image: signVector
    },
    {
      heading4: (
        <h4>Secure Brand  <br /> Standards</h4>
      ),
      para: 'We ensure clear documentation and brand control, protecting identity consistency across digital and print platforms.',
      image: signVector
    }
  ]
}

const faqs = [
  {
    question: "What are brand guidelines and style guides?",
    answer:
      "Brand guidelines and style guides define how your brand should appear and communicate, including logo usage, colors, typography, tone, and visual standards.",
  },
  {
    question: "How long does it take to create brand guidelines?",
    answer:
      "Depending on brand complexity and assets, brand guideline development typically takes 2 to 5 weeks from planning to final documentation.",
  },
  {
    question: "Can you create guidelines for an existing brand?",
    answer:
      "YYes, we can develop structured brand guidelines for both new and existing brands to ensure consistency and clarity.",
  },
  {
    question: "Will the style guide work across digital and print media?",
    answer:
      "Yes, guidelines are created to maintain consistency across websites, social media, print materials, and marketing assets.",
  },
  {
    question: "Do you include logo and visual usage rules?",
    answer:
      " Yes, we include detailed logo usage rules, typography standards, color codes, and design directions..",
  },
  {
    question: "Do you provide updates to brand guidelines later?",
    answer:
      "Yes, we provide ongoing support and updates to keep your brand documentation aligned with business growth.",
  }
];

const WooCommerceDevelopment = () => {
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

export default WooCommerceDevelopment;
