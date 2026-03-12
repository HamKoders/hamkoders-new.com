export const metadata = {
  title: "Custom WordPress Development for Powerful, Scalable Websites",
  description:
    "We offer custom WordPress development that blends speed, design, and flexibility — crafted to deliver user-friendly, secure, and fully manageable websites.",
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

import vector from "../../../../public/images/Corporate-vector.png";

import service1 from "../../../../public/images/store-services/wordpress-development/1.png";
import service2 from "../../../../public/images/store-services/wordpress-development/2.png";
import service3 from "../../../../public/images/store-services/wordpress-development/3.png";
import service4 from "../../../../public/images/store-services/wordpress-development/4.png";
import service5 from "../../../../public/images/store-services/wordpress-development/5.png";
import service6 from "../../../../public/images/store-services/wordpress-development/6.png";

import discussCtaImage from "../../../../public/images/brand-cta.png";

import signVector from "../../../../public/images/sign-vector.png";

const bannerData = {
  bgImage: "/images/front-end-banner.webp",
  heading1: (
    <h1 className="same-heading">
      Expert<span> Corporate Identity Design  </span>Services
    </h1>
  ),
  para: (
    <p className="para">
     Build a powerful brand presence with Hamkoders, a reliable corporate identity design partner delivering cohesive visuals, consistent branding systems, and professional identity solutions.
    </p>
  ),
  image: vector,
  imageAlt: "vector",
};

const serviceData = {
  heading1: (
    <h2 className="same-heading">
      Creating Corporate Identities<br /> <span>That Strengthen Recognition and Trust</span>
    </h2> 
  ),
  para: "Hamkoders focuses on corporate identity design and brand system creation, producing visually aligned, professional identity assets designed to improve recognition and present your brand values clearly.",
  serviceBox: [
    {
      image: service1,
      heading4: (
        <h4>
          Custom Identity<br />
           Design
        </h4>
      ),
      para: "We craft distinctive, professional corporate identity designs that reflect your brand personality while delivering a consistent and engaging visual experience across all platforms.",
    },
    {
      image: service2,
      heading4: (
        <h4>
          Refined Brand<br />
          Elements
        </h4>
      ),
      para: " Our team develops balanced color schemes, typography, and visual assets designed to improve credibility, recognition, and consistent communication everywhere.",
    },
    {
      image: service3,
      heading4: (
        <h4>
          Brand Asset <br />
          Integration
        </h4>
      ),
      para: "We structure identity assets and usage guidelines, delivering organized resources for smooth implementation across marketing, print, and digital channels.",
    },
    {
      image: service4,
      heading4: (
        <h4>
          Complete Brand <br />
          Systems
        </h4>
      ),
      para: "We provide full corporate identity kits including stationery, visual assets, and branding elements for effective and unified brand management.",
    },
    {
      image: service5,
      heading4: (
        <h4>
          Consistency-Driven<br />
           Framework
        </h4>
      ),
      para: "We implement identity standards across digital platforms, print materials, and communication channels, strengthening recognition and maintaining brand consistency.",
    },
    {
      image: service6,
      heading4: (
        <h4>
          Ongoing <br />
          Support
        </h4>
      ),
      para: "After delivery, we offer updates, refinements, and brand assistance, keeping your corporate identity relevant, consistent, and aligned with growth.",
    }
  ],
  btnText: "Start Wordpress development",
};

const discussCtaData = {
  heading1: <h2 className="same-heading">Grow Brand Presence with</h2>,
  heading2: (
      <h3 className="same-heading">
        <span>Corporate Identity Expertise</span>
      </h3>
    ),
  para: "Partner with Hamkoders for corporate identity design, delivering cohesive visual systems optimized for recognition, trust, and long-term brand success.",
  image: discussCtaImage,
};

const demandCompData = {
  heading1: (
    <h2 className="same-heading">
      Corporate Identity Design Solutions<span> for Modern Brands</span>
    </h2> 
  ),
  para: 'Hamkoders’ Corporate Identity Design Services, led by experienced branding professionals, combine creativity, structure, and strategy to develop strong identity systems. With defined visual standards and unified brand assets, we create professional corporate identities that improve recognition and support growth.',
  demandBox: [
    {
      heading4: (
        <h4>Identity  <br />Framework</h4>
      ),
      para: 'WWe build corporate identity systems tailored to your brand positioning, communication style, and market presence.',
      image: signVector
    },
    {
      heading4: (
        <h4>ConsistentVisual  <br />Branding</h4>
      ),
      para: 'We establish typography, colors, logo usage, and brand elements to maintain consistent visual identity across platforms.',
      image: signVector
    },
    {
      heading4: (
        <h4>Integrated Brand<br /> Assets</h4>
      ),
      para: 'We organize identity assets and documentation to support marketing, communication, and brand execution.',
      image: signVector
    },
    {
      heading4: (
        <h4>Protected Brand <br /> Consistency</h4>
      ),
      para: 'We ensure clear identity documentation and brand control, protecting visual consistency across digital and print channels.',
      image: signVector
    }
  ]
}

const faqs = [
  {
    question: "What is corporate identity design?",
    answer:
      "Corporate identity design defines visual elements such as logos, colors, typography, and brand assets that create a consistent and recognizable brand image.",
  },
  {
    question: "How long does it take to  design a corporate identity?",
    answer:
      "DDepending on brand requirements and assets, corporate identity design usually takes 2 to 5 weeks from planning to final delivery.",
  },
  {
    question: "Can you redesign an existing corporate identity?",
    answer:
      "YYes, we can refresh or completely redesign your existing corporate identity to improve consistency and brand impact.",
  },
  {
    question: "Will I receive complete brand identity assets?",
    answer:
      "Yes, we provide full identity kits including logo usage, stationery design, and visual brand elements.",
  },
  {
    question: "Is corporate identity useful for digital and print branding?",
    answer:
      "Yes, corporate identity ensures consistency across websites, social media, marketing materials, and print media.",
  },
  {
    question: "Do you provide updates after delivery?",
    answer:
      "YYes, we provide ongoing support and refinements to keep your corporate identity aligned with business growth.",
  }
];

const WordpressDevelopment = () => {
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

export default WordpressDevelopment;
