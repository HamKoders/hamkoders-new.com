export const metadata = {
  title: "Drupal Development for Secure, Scalable, and Custom Websites",
  description:
    "We provide expert Drupal development to build secure, fast, and flexible websites—perfect for brands that need powerful performance with full content control.",
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

import vector from "../../../../public/images/rebranding-vector.png";

import service1 from "../../../../public/images/store-services/drupal-development/1.png";
import service2 from "../../../../public/images/store-services/drupal-development/2.png";
import service3 from "../../../../public/images/store-services/drupal-development/3.png";
import service4 from "../../../../public/images/store-services/drupal-development/4.png";
import service5 from "../../../../public/images/store-services/drupal-development/5.png";
import service6 from "../../../../public/images/store-services/drupal-development/6.png";

import discussCtaImage from "../../../../public/images/brand-cta.png";

import signVector from "../../../../public/images/sign-vector.png";

const bannerData = {
  bgImage: "/images/backend-banner.webp",
  heading1: (
    <h1 className="same-heading">
      Expert  <span> Rebranding </span>Services
    </h1>
  ),
  para: (
    <p className="para">
      Reimagine your brand with Hamkoders. We help businesses evolve with clarity, confidence, and creativity through strategic rebranding that strengthens identity, sharpens positioning, and builds lasting impact.
    </p>
  ),
  image: vector,
  imageAlt: "vector",
};

const serviceData = {
  heading1: (
    <h2 className="same-heading">
      Reinventing Brands Thatt<br /> <span> Reconnect, Resonate & Lead</span>
    </h2>
  ),
  para: "At Hamkoders, we don’t just refresh visuals, we reshape brand perception. Our rebranding services combine strategic thinking, modern design, and market insight to craft identities that feel relevant, compelling, and future-ready.",
  serviceBox: [
    {
      image: service1,
      heading4: (
        <h4>
          Brand Identity<br />
           Reimagination
        </h4>
      ),
      para: "We redefine your visual presence with refined logos, updated design systems, and cohesive brand elements that reflect your growth and communicate confidence across every platform.",
    },
    {
      image: service2,
      heading4: (
        <h4>
          Strategic Brand <br />
           Positioning
        </h4>
      ),
      para: "Our team clarifies your voice, message, and market direction, helping your brand stand out with purpose, authority, and a stronger competitive edge.",
    },
    {
      image: service3,
      heading4: (
        <h4>
          Unified Identity  <br />
          Alignment
        </h4>
      ),
      para: "WWe bring together visuals, messaging, and marketing touchpoints to create a seamless brand experience that builds trust and consistency everywhere your audience connects.",
    },
    {
      image: service4,
      heading4: (
        <h4>
          Complete Brand<br />
          Revitalization
        </h4>
      ),
      para: "From logo refinement to communication updates, we deliver comprehensive rebranding solutions that modernize your presence and elevate brand perception.",
    },
    {
      image: service5,
      heading4: (
        <h4>
          Consistency-Driven<br />
            Brand Framework
        </h4>
      ),
      para: "FWe implement structured brand systems across digital platforms, print materials, and marketing channels to maintain clarity, professionalism, and recognition.",
    },
    {
      image: service6,
      heading4: (
        <h4>
          Continuous Brand <br />
          Continuous Brand Evolution Support
        </h4>
      ),
      para: "After launch, we stay with you  refining assets, enhancing visuals, and ensuring your refreshed brand grows confidently with your business.",
    }
  ],
  btnText: "Start Drupal development",
};

const discussCtaData = {
  heading1: <h2 className="same-heading">Elevate Your Brand with</h2>,
  heading2: (
      <h3 className="same-heading">
        <span>Strategic Rebranding</span>  
      </h3>
    ),
  para: "Partner with Hamkoders to transform your identity into a powerful, recognizable, and growth-driven brand system designed for impact and longevity.",
  image: discussCtaImage,
};

const demandCompData = {
  heading1: (
    <h2 className="same-heading">
      Rebranding Solutions for <span> Forward-Thinking Businesses</span>
    </h2>
  ),
  para: 'OHamkoders’ rebranding services combine strategic insight, creative direction, and design precision to reposition brands for stronger recognition and deeper audience connection. With unified visuals and refined messaging, we build brand identities that inspire confidence and support expansion.',
  demandBox: [
    {
      heading4: (
        <h4>Brand  <br />Strategy</h4>
      ),
      para: ' We craft rebranding roadmaps aligned with your goals, audience expectations, and competitive positioning.',
      image: signVector
    },
    {
      heading4: (
        <h4>Visual Identity  <br />Renewal</h4>
      ),
      para: 'We modernize logos, typography, and brand visuals to create a clean, confident, and consistent identity.',
      image: signVector
    },
    {
      heading4: (
        <h4>Integrated Brand <br />Assets</h4>
      ),
      para: 'WWe align marketing materials, digital presence, and communication assets for seamless brand consistency.',
      image: signVector
    },
    {
      heading4: (
        <h4>Protected Brand  <br /> Consistency Control</h4>
      ),
      para: 'We establish clear brand systems and usage standards to maintain strength and uniformity across all channels.',
      image: signVector
    }
  ]
}

const faqs = [
  {
    question: "What are rebranding services?",
    answer:
      "Rebranding services redefine your brand identity, visuals, and messaging to ensure your business remains relevant, competitive, and aligned with evolving market demands.",
  },
  {
    question: "How long does a rebranding project take?",
    answer:
      "Depending on scope and complexity, most rebranding projects take between 3 to 6 weeks from strategy development to final rollout.",
  },
  {
    question: "Can you refresh an existing brand without losing recognition?",
    answer:
      "TYes. We carefully evolve your brand while preserving its core values and recognizability.",
  },
  {
    question: "Will I receive complete brand assets after rebranding?",
    answer:
      "Absolutely. You receive a full brand package including updated logos, visual systems, and structured brand guidelines.",
  },
  {
    question: "Is rebranding suitable for growing companies?",
    answer:
      "Yes. Rebranding helps businesses reposition, attract new audiences, and stay competitive in changing markets.",
  },
  {
    question: "Do you offer support after the rebrand launch?",
    answer:
      "YYes. We provide ongoing refinement, asset updates, and brand guidance to ensure long-term consistency and growth.",
  }
];

const DrupalDevelopment = () => {
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

export default DrupalDevelopment;
