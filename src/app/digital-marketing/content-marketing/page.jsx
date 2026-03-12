export const metadata = {
  title: "Game Concept Designer Crafting Unique Worlds and Experiences",
  description:
    "Our game concept designers bring your vision to life with original worlds, characters, and mechanics—laying the creative foundation for unforgettable gameplay.",
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

import vector from "../../../../public/images/content-vector.png";

import service1 from "../../../../public/images/game-dev-services/concept-design/1.png";
import service2 from "../../../../public/images/game-dev-services/concept-design/2.png";
import service3 from "../../../../public/images/game-dev-services/concept-design/3.png";
import service4 from "../../../../public/images/game-dev-services/concept-design/4.png";
import service5 from "../../../../public/images/game-dev-services/concept-design/5.png";
import service6 from "../../../../public/images/game-dev-services/concept-design/6.png";

import discussCtaImage from "../../../../public/images/mobile-app-dev-cta.png";

import signVector from "../../../../public/images/sign-vector.png";

const bannerData = {
  bgImage: "/images/backend-banner.webp",
  heading1: (
    <h1 className="same-heading">
      Professional <span> Content Marketing </span>Services
    </h1>
  ),
  para: (
    <p className="para">
      Strengthen your digital presence with Hamkoders, a reliable content marketing partner delivering strategic writing, compelling storytelling, and steady brand growth across online platforms.
    </p>
  ),
  image: vector,
  imageAlt: "vector",
};

const serviceData = {
  heading1: (
    <h2 className="same-heading">
      Building Content Strategies  <br /> <span>That Connect and Convert</span>
    </h2> 
  ),
  para: "Hamkoders focuses on powerful content marketing and brand messaging, creating engaging, audience-focused content crafted to increase reach and build a strong brand image.",
  serviceBox: [
    {
      image: service1,
      heading4: (
        <h4>
          Custom Content  <br />
          Planning
        </h4>
      ),
      para: "We craft tailored content strategies aligned with your brand voice while delivering engaging, meaningful, and value-driven experiences for your audience",
    },
    {
      image: service2,
      heading4: (
        <h4>
          Performance Focused  <br />
          Content
        </h4>
      ),
      para: "Our team ensures structured content, clear communication, and consistent publishing designed to improve engagement, build credibility, and increase conversions.",
    },
     {
      image: service3,
      heading4: (
        <h4>
          Content <br />
          Promotion
        </h4>
      ),
      para: "We manage content promotion across digital channels, delivering consistent and engaging content that improves brand visibility and audience connection.",
    },
    {
      image: service4,
      heading4: (
        <h4>
          Strategic Content  <br />
          Creation
        </h4>
      ),
      para: "We deliver complete content plans including blogs, articles, social posts, and campaigns, providing essential marketing material for steady digital growth.",
    },
    {
      image: service5,
      heading4: (
        <h4>
          Search-Friendly <br />
          Content Setup
        </h4>
      ),
      para: "We implement search-focused practices across website content and blogs, improving visibility, driving organic traffic, and helping your brand rank better.",
    },
    {
      image: service6,
      heading4: (
        <h4>
          Ongoing Content <br />
          Support
        </h4>
      ),
      para: "After launch, we provide regular updates, refinements, and dedicated support, keeping your content fresh, consistent, and performing effectively.",
    },
  ],
  btnText: "Start Concept Design Development",
};

const discussCtaData = {
  heading1: <h2 className="same-heading">Grow Online Business</h2>,
  heading2: (
      <h3 className="same-heading">
        <span>with Content Marketing</span> 
      </h3>
    ),
  para: "Partner with Hamkoders for professional content marketing services, delivering creative and performance-driven campaigns focused on growth, audience engagement, and long-term success.",
  image: discussCtaImage,
};

const demandCompData = {
  heading1: (
    <h2 className="same-heading">
      Content Marketing Services <span> for Modern Brands</span>
    </h2>
  ),
  para: 'Hamkoders content marketing services blend creativity, planning, and research to deliver strong brand communication. With smart planning and consistent delivery, we create engaging content that attracts audiences and supports online growth.',
  demandBox: [
    {
      heading4: (
        <h4>Content <br /> Planning</h4>
      ),
      para: 'We build content strategies aligned with your business goals, audience interests, and customer journey.',
      image: signVector
    },
    {
      heading4: (
        <h4>Responsive Content  <br /> Creation</h4>
      ),
      para: 'We develop engaging and easy-to-consume content formats that deliver a smooth and valuable audience experience.',
      image: signVector
    },
    {
      heading4: (
        <h4>Integrated Campaign<br />Content</h4>
      ),
      para: 'We align blogs, social posts, and campaigns to increase engagement, expand reach, and track performance effectively.',
      image: signVector
    },
    {
      heading4: (
        <h4> Consistent Brand <br />Messaging</h4>
      ),
      para: 'We maintain clear tone and storytelling across all content, protecting your brand identity and marketing impact.',
      image: signVector
    }
  ]
}

const faqs = [
  {
    question: "What is content marketing?",
    answer:
      "Content marketing is the process of creating and sharing valuable content to attract, engage, and convert your target audience.",
  },
  {
    question: "How long does it take to see content marketing results?",
    answer:
      "IContent marketing usually shows measurable improvement within a few months based on strategy, consistency, and audience response.",
  },
  {
    question: "Can you create customized content plans?",
    answer:
      "Yes, all content strategies are designed according to your brand goals, audience, and industry needs.",
  },
  {
    question: "Will content be search optimized?",
    answer:
      "Yes, every piece of content follows search-friendly practices to improve visibility and reach.",
  },
  {
    question: "Can you manage content across platforms?",
    answer:
      "Can you manage content across platformsYes, we manage website, blog, and social media content for a consistent brand presence.",
  },
  {
    question: "Do you offer ongoing content support?",
    answer:
      "Yes, we provide continuous planning, updates, and management to support long-term growth.",
  }
];

const ConceptDesign = () => {
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

export default ConceptDesign;
