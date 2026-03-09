export const metadata = {
  title: "Magento Development Services to Power High-Performing Stores",
  description:
    "Our Magento development services help you build fast, secure, and scalable ecommerce stores that engage customers and grow your business without limitations.",
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

import vector from "../../../../public/images/Logo-Visual-banner.png";

import service1 from "../../../../public/images/brand-services/Logo-Visual/1.png";
import service2 from "../../../../public/images/brand-services/Logo-Visual/2.png";
import service3 from "../../../../public/images/brand-services/Logo-Visual/3.png";
import service4 from "../../../../public/images/brand-services/Logo-Visual/4.png";
import service5 from "../../../../public/images/brand-services/Logo-Visual/5.png";
import service6 from "../../../../public/images/brand-services/Logo-Visual/6.png";

import discussCtaImage from "../../../../public/images/brand-cta.png";

import signVector from "../../../../public/images/sign-vector.png";

const bannerData = {
  bgImage: "/images/enterprise-dev-banner.webp",
  heading1: (
    <h1 className="same-heading">
      Expert  <span> Logo & Visual</span><br/> Identity Design Services
    </h1>
  ),
  para: (
    <p className="para">
      Elevate your brand presence with Hamkoders, a trusted logo and visual identity design partner delivering custom branding concepts, cohesive visuals, and consistent brand assets.
    </p>
  ),
  image: vector,
  imageAlt: "vector",
};

const serviceData = {
  heading1: (
    <h2 className="same-heading">
      Crafting Brand Identities That
      <br /> <span>Stand Out and Connect</span>
    </h2>
  ),
  para: "Hamkoders specializes in logo creation and complete visual identity systems, crafting distinctive, memorable designs that strengthen recognition and communicate your brand story clearly.",
  serviceBox: [
    {
      image: service1,
      heading4: (
        <h4>
          Custom Logo 
          <br />
          Design
        </h4>
      ),
      para: "We create unique, scalable logos that perfectly represent your brand values while delivering a clean, versatile, and impactful visual presence across all platforms.",
    },
    {
      image: service2,
      heading4: (
        <h4>
          Optimized Brand 
          <br />
          Assets
        </h4>
      ),
      para: "Our team ensures consistent typography, color palettes, and visual elements designed to enhance brand recall, improve credibility, and build strong audience trust.",
    },
    {
      image: service3,
      heading4: (
        <h4>
          Brand <br />
          Guidelines
        </h4>
      ),
      para: "We develop detailed brand guidelines, providing clear direction for logo usage, colors, and visual standards to ensure consistency across digital and print materials.",
    },
    {
      image: service4,
      heading4: (
        <h4>
          Complete Visual<br />
          Identity Systems
        </h4>
      ),
      para: "We deliver comprehensive branding packages including logo variations, social media assets, stationery design, and marketing visuals for a unified and professional brand image.",
    },
    {
      image: service5,
      heading4: (
        <h4>
          Strategic Brand  <br />
          Positioning
        </h4>
      ),
      para: "We apply branding best practices across visual storytelling, messaging alignment, and identity structure, helping your brand stand out and build long-term recognition.",
    },
    {
      image: service6,
      heading4: (
        <h4>
          Ongoing Brand <br />
          Support
        </h4>
      ),
      para: "After launch, we provide brand refinements, asset updates, and creative support, keeping your visual identity modern, consistent, and aligned with business growth.",
    },
  ],
  btnText: "Start Magento development",
};

const discussCtaData = {
  heading1: <h2 className="same-heading">Scale Brand Impact with </h2>,
  heading2: (
    <h3 className="same-heading">
      <span>Visual Identity Expertise</span>
    </h3>
  ),
  para: "Partner with Hamkoders for logo and brand identity design, delivering distinctive visuals optimized for recognition, credibility, and long-term market presence.",
  image: discussCtaImage,
};

const demandCompData = {
  heading1: (
    <h2 className="same-heading">
      Logo & Visual Identity Design Solutions <span> for Modern Brands</span>
    </h2>
  ),
  para: "Hamkoders’ Logo & Visual Identity Design Services, led by experienced brand designers, combine creativity, strategy, and research to craft compelling brand identities. With cohesive visual systems and consistent branding elements, we build powerful identities that attract audiences and strengthen brand positioning.",
  demandBox: [
    {
      heading4: (
        <h4>
          Brand <br />
          Architecture
        </h4>
      ),
      para: "We create visual identity systems tailored to your business vision, market positioning, and brand personality.",
      image: signVector,
    },
    {
      heading4: (
        <h4>
          Consistent  <br />
          Visual Design
        </h4>
      ),
      para: "We design cohesive brand elements, ensuring a unified and professional brand appearance across all platforms.",
      image: signVector,
    },
    {
      heading4: (
        <h4>
          Integrated Brand <br />
           Assets
        </h4>
      ),
      para: "We deliver logos, typography systems, color palettes, and marketing visuals that strengthen recognition and brand consistency.",
      image: signVector,
    },
    {
      heading4: (
        <h4>
          Secure Brand <br /> Usage Standards
        </h4>
      ),
      para: "We ensure clear brand guidelines and controlled asset management, protecting your visual identity across all channels.",
      image: signVector,
    },
  ],
};

const faqs = [
  {
    question: "What is logo and visual identity design?",
    answer:
      "Logo and visual identity design involves creating a unique logo along with cohesive visual elements such as colors, typography, and brand guidelines that define and represent your brand consistently.",
  },
  {
    question: "How long does it take to develop a logo and brand identity?",
    answer:
      "Depending on complexity and revisions, logo and visual identity design typically takes 2 to 6 weeks from research to final delivery.",
  },
  {
    question: "Can you create a fully custom logo design?",
    answer:
      "Yes, we design completely original logos tailored to your brand vision, target audience, and industry positioning.",
  },
  {
    question: "Will the brand identity work across digital and print platforms?",
    answer:
      "AYes, all brand assets are created to ensure consistency and clarity across websites, social media, packaging, and print materials.",
  },
  {
    question: "Can you deliver complete brand guidelines?",
    answer:
      "Yes, we provide detailed brand guidelines covering logo usage, color codes, typography, and visual standards.",
  },
  {
    question: "Do you provide post-launch design support?",
    answer:
      "Yes, we offer ongoing design support, brand refinements, and asset updates to maintain brand consistency and growth.",
  },
];

const MagentoDevelopment = () => {
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

export default MagentoDevelopment;
