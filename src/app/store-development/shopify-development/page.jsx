export const metadata = {
  title: "Shopify Expert Developer Services for Custom Store Solutions",
  description:
    "Get Shopify expert developer services that bring your store to life—custom themes, smooth performance, and features designed to boost sales and user experience.",
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

import vector from "../../../../public/images/brand-banner.png";

import service1 from "../../../../public/images/store-services/shopify-development/1.png";
import service2 from "../../../../public/images/store-services/shopify-development/2.png";
import service3 from "../../../../public/images/store-services/shopify-development/3.png";
import service4 from "../../../../public/images/store-services/shopify-development/4.png";
import service5 from "../../../../public/images/store-services/shopify-development/5.png";
import service6 from "../../../../public/images/store-services/shopify-development/6.png";

import discussCtaImage from "../../../../public/images/brand-cta.webp";

import signVector from "../../../../public/images/sign-vector.png";

const bannerData = {
  bgImage: "/images/android-app-dev.webp",
  heading1: (
    <h1 className="same-heading">
      Expert <span> Brand Strategy </span> Development Services
    </h1>
  ),
  para: (
    <p className="para">
      Strengthen your market position with Hamkoders, a trusted brand strategy consultancy delivering custom brand frameworks, clear positioning, and consistent identity systems.
    </p>
  ),
  image: vector,
  imageAlt: "vector",
};

const serviceData = {
  heading1: (
    <h2 className="same-heading">
      Creating Brand Strategies That<br /> <span>Engage and Inspire</span>
    </h2>
  ),
  para: "Hamkoders specializes in comprehensive brand strategy development, building distinctive brand identities and structured positioning designed to increase recognition and long-term brand value.",
  serviceBox: [
    {
      image: service1,
      heading4: (
        <h4>
          Custom Brand<br />
          Positioning
        </h4>
      ),
      para: "We craft unique brand positioning strategies that reflect your vision, values, and audience expectations while delivering a clear, compelling, and memorable market presence.",
    },
    {
      image: service2,
      heading4: (
        <h4>
          Optimized<br />
          Brand Messaging
        </h4>
      ),
      para: "Our team develops powerful messaging frameworks, tone of voice guidelines, and communication strategies designed to strengthen audience trust and drive consistent engagement.",
    },
    {
      image: service3,
      heading4: (
        <h4>
          Brand  <br />
          Identity Development
        </h4>
      ),
      para: "We build complete identity systems including visual direction, brand elements, and strategic alignment, ensuring cohesion, credibility, and lasting brand impact.",
    },
    {
      image: service4,
      heading4: (
        <h4>
          Research-Driven <br />
          Strategy
        </h4>
      ),
      para: "We conduct market research, competitor analysis, and audience profiling, providing essential insights for effective, growth-focused brand positioning.",
    },
    {
      image: service5,
      heading4: (
        <h4>
          Consistency-Focused <br />
          Architecture
        </h4>
      ),
      para: "We apply brand strategy best practices across communication channels, internal alignment, and customer touchpoints, enhancing visibility and strengthening brand equity.",
    },
    {
      image: service6,
      heading4: (
        <h4>
          Ongoing <br />
          Brand Support
        </h4>
      ),
      para: "After launch, we provide regular evaluations, refinements, and strategic guidance, keeping your brand aligned, relevant, and positioned for long-term success.",
    }
  ],
  btnText: "Start Shopify development",
};

const discussCtaData = {
  heading1: <h2 className="same-heading">Scale Business Growth</h2>,
  heading2: (
      <h3 className="same-heading">
        <span>with Strategic Branding</span> 
      </h3>
    ),
  para: "Partner with Hamkoders for comprehensive brand strategy development, delivering structured positioning, compelling messaging, and sustainable competitive advantage in evolving markets.",
  image: discussCtaImage,
};

const demandCompData = {
  heading1: (
    <h2 className="same-heading">
      Brand Strategy Development Solutions<span> for Modern Businesses</span>
    </h2> 
  ),
  para: 'Hamkoders brand strategy services, led by experienced consultants, combine research, positioning, and structured planning to build impactful brands. With aligned messaging and clear identity architecture, we create strong, recognizable brands that attract audiences and drive long-term business growth.',
  demandBox: [
    {
      heading4: (
        <h4>Brand <br />Architecture</h4>
      ),
      para: 'We develop brand frameworks tailored to your business goals, audience insights, and long-term strategic vision.',
      image: signVector
    },
    {
      heading4: (
        <h4>Strategic <br />Messaging</h4>
      ),
      para: 'We create clear, consistent communication guidelines, delivering a cohesive and influential brand voice across all platforms.',
      image: signVector
    },
    {
      heading4: (
        <h4>Integrated <br />Market Positioning</h4>
      ),
      para: 'We define competitive positioning strategies to strengthen visibility, enhance differentiation, and measure brand performance effectively.',
      image: signVector
    },
    {
      heading4: (
        <h4>Secure <br /> Brand Governance</h4>
      ),
      para: 'We ensure structured brand guidelines, consistent execution, and controlled brand management, protecting your reputation and market credibility. ',
      image: signVector
    }
  ]
}

const faqs = [
  {
    question: "What is brand strategy development?",
    answer:
      "Brand strategy development involves defining positioning, messaging, target audience, and long-term direction to build a strong and recognizable market presence.",
  },
  {
    question: "How long does it take to develop a brand strategy?",
    answer:
      "Depending on research scope and business objectives, brand strategy development typically takes 3 to 8 weeks from discovery to final framework delivery.",
  },
  {
    question: "Can you create a fully customized brand strategy?",
    answer:
      "Yes, we build tailored brand strategies aligned with your industry, vision, and competitive landscape.",
  },
  {
    question: "Will the strategy include messaging and positioning guidelines?",
    answer:
      "Yes, we provide structured messaging frameworks, tone guidelines, and positioning clarity for consistent communication.",
  },
  {
    question: "Can you integrate the strategy across marketing channels?",
    answer:
      "Yes, we ensure the brand strategy aligns with digital marketing, content, and communication platforms.",
  },
  {
    question: "Do you provide post-development suppor?",
    answer:
      "Yes, we offer ongoing consultation, brand audits, and refinement services to maintain consistency and growth",
  }
];

const ShopifyDevelopment = () => {
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

export default ShopifyDevelopment;
