export const metadata = {
  title: "Store Maintenance Services to Keep Online Business Running",
  description:
    "Our store maintenance services keep your ecommerce site fast, secure, and error-free—ensuring a smooth shopping experience and peace of mind around the clock.",
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

import vector from "../../../../public/images/packaging-banner.png";

import service1 from "../../../../public/images/store-services/store-maintenance/1.png";
import service2 from "../../../../public/images/store-services/store-maintenance/2.png";
import service3 from "../../../../public/images/store-services/store-maintenance/3.png";
import service4 from "../../../../public/images/store-services/store-maintenance/4.png";
import service5 from "../../../../public/images/store-services/store-maintenance/5.png";
import service6 from "../../../../public/images/store-services/store-maintenance/6.png";

import discussCtaImage from "../../../../public/images/brand-cta.png";

import signVector from "../../../../public/images/sign-vector.png";

const bannerData = {
  bgImage: "/images/fullstack-banner.webp",
  heading1: (
    <h1 className="same-heading">
      Expert Packaging & Product <span> Branding Services</span>
    </h1>
  ),
  para: (
    <p className="para">
      Boost your product appeal with Hamkoders, a trusted packaging and product branding partner delivering distinctive designs, cohesive visuals, and impactful shelf presence.
    </p>
  ),
  image: vector,
  imageAlt: "vector",
};

const serviceData = {
  heading1: (
    <h2 className="same-heading">
      Creating Packaging That
      <br /> <span>  Captivates and Converts</span>
    </h2>
  ),
  para: "Hamkoders specializes in product packaging design and brand-focused visual systems, creating attractive, market-ready packaging solutions designed to enhance recognition and strengthen product identity.",
  serviceBox: [
    {
      image: service1,
      heading4: (
        <h4>
          Custom Product 
          <br />
          Packaging Design
        </h4>
      ),
      para: "We create unique, eye-catching packaging designs that perfectly reflect your brand personality while delivering a memorable and premium customer experience.",
    },
    {
      image: service2,
      heading4: (
        <h4>
          Optimized Brand 
          <br />
          Presentation
        </h4>
      ),
      para: "Our team ensures balanced layouts, compelling visuals, and clear product messaging designed to attract attention, build trust, and increase purchase decisions.",
    },
    {
      image: service3,
      heading4: (
        <h4>
          Label & Print  <br />
          Integration
        </h4>
      ),
      para: "We develop professional label designs and print-ready assets, ensuring consistency, quality production, and strong visual impact across every packaging format.",
    },
    {
      image: service4,
      heading4: (
        <h4>
          Feature-Rich Product 
          <br />
          Identity Systems
        </h4>
      ),
      para: "We deliver complete packaging systems including box design, label concepts, brand elements, and visual storytelling for a cohesive and growth-focused product presence..",
    },
    {
      image: service5,
      heading4: (
        <h4>
          Brand-Focused  <br />
          Visual Strategy
        </h4>
      ),
      para: "We apply branding best practices across packaging structure, typography, color systems, and layout design to improve shelf visibility and market differentiation.",
    },
    {
      image: service6,
      heading4: (
        <h4>
          Ongoing Brand  <br />
          Support
        </h4>
      ),
      para: "After launch, we provide packaging refinements, design updates, and continued creative support, keeping your product branding fresh and competitive.",
    },
  ],
  btnText: "Start Store Maintenance",
};

const discussCtaData = {
  heading1: <h2 className="same-heading">Scale Product Success with</h2>,
  heading2: (
    <h3 className="same-heading">
      <span>Strategic Packaging</span> 
    </h3>
  ),
  para: "Partner with Hamkoders for packaging and product branding solutions designed to increase visibility, strengthen brand loyalty, and drive market growth.",
  image: discussCtaImage,
};

const demandCompData = {
  heading1: (
    <h2 className="same-heading">
      Packaging & Product Branding Solutions<span> for Modern Businesses</span>
    </h2> 
  ),
  para: "Hamkoder's Packaging & Product Branding Services combine creativity, strategy, and market insight to develop powerful product identities. With cohesive visuals and strong brand positioning, we build packaging solutions that attract customers and enhance brand value.",
  demandBox: [
    {
      heading4: (
        <h4>
          Packaging  <br />
          Architecture
        </h4>
      ),
      para: "We create packaging structures tailored to your product category, audience expectations, and retail positioning.",
      image: signVector,
    },
    {
      heading4: (
        <h4>
          Visual Brand  <br />
          Identity
        </h4>
      ),
      para: "We design consistent color systems, typography, and label elements to maintain strong product recognition.",
      image: signVector,
    },
    {
      heading4: (
        <h4>
          Integrated Brand 
          <br />
          Assets
        </h4>
      ),
      para: "We align packaging visuals with marketing materials to ensure seamless brand communication across channels.",
      image: signVector,
    },
    {
      heading4: (
        <h4>
          Secure Brand  <br /> Consistency
        </h4>
      ),
      para: "We ensure controlled brand standards and structured packaging guidelines to protect your product identity.",
      image: signVector,
    },
  ],
};

const faqs = [
  {
    question: "What is packaging and product branding?",
    answer:
      "Packaging and product branding involve designing the visual appearance, labels, and structural elements of a product to strengthen identity, attract customers, and improve shelf presence.",
  },
  {
    question: "How long does it take to design product packaging?",
    answer:
      "Depending on complexity and revisions, packaging design projects typically take 2 to 5 weeks from concept development to final production-ready files.",
  },
  {
    question: "Can you create custom packaging for new products?",
    answer:
      "Yes, we design fully customized packaging solutions tailored to your product type, target audience, and market positioning.",
  },
  {
    question: "Will I receive print-ready packaging files?",
    answer:
      "Yes, we provide complete, high-resolution, print-ready files suitable for manufacturers and packaging vendors.",
  },
  {
    question: " Can packaging design improve product sales?",
    answer:
      "Yes, professional packaging enhances visibility, builds trust, and positively influences purchasing decisions.",
  },
  {
    question: "Do you provide updates after packaging launch?",
    answer:
      "Yes, we offer ongoing design refinements and support to keep your product branding aligned with market trends and business growth",
  },
];

const StoreMaintenance = () => {
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

export default StoreMaintenance;
