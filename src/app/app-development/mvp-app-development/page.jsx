export const metadata = {
  title: "MVP App Development Company for Fast, Lean Product Launches",
  description:
    "Launch smarter with an MVP app development company that builds scalable, user-focused apps—designed to validate ideas and grow with your business vision.",
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

import vector from "../../../../public/images/mvp-app-vector.png";

import service1 from "../../../../public/images/app-services/mvp-app-development/1.png";
import service2 from "../../../../public/images/app-services/mvp-app-development/2.png";
import service3 from "../../../../public/images/app-services/mvp-app-development/3.png";
import service4 from "../../../../public/images/app-services/mvp-app-development/4.png";
import service5 from "../../../../public/images/app-services/mvp-app-development/5.png";
import service6 from "../../../../public/images/app-services/mvp-app-development/6.png";

import discussCtaImage from "../../../../public/images/mvp-cta-image.png";

import signVector from "../../../../public/images/sign-vector.png";

const bannerData = {
  bgImage: "/images/fullstack-banner.webp",
  heading1: (
    <h1 className="same-heading">
      Rapid<span> MVP App Development </span>Services
    </h1>
  ),
  para: (
    <p className="para">
      Hamkoders, a trusted MVP app development company, helps startups validate ideas by building scalable, user-friendly MVPs focused on core features and reliable performance.
    </p>
  ),
  image: vector,
  imageAlt: "vector",
};

const serviceData = {
  heading1: (
    <h2 className="same-heading">
      Building MVPs That Test, Learn,<br /> <span>and Scale</span>
    </h2>
  ),
  para: "Our MVP mobile app development delivers practical, reliable applications that validate ideas, meet early user expectations, and allow fast iteration for growth based on real user feedback.",
  serviceBox: [
    {
      image: service1,
      heading4: (
        <h4>
          Feature-Focused<br />
          Development
        </h4>
      ),
      para: "We focus on core features to validate business ideas quickly without extra complexity, ensuring faster launch and early user engagement.",
    },
    {
      image: service2,
      heading4: (
        <h4>
          User-Centric<br />
          Design
        </h4>
      ),
      para: "Our team creates simple and intuitive interfaces that deliver a smooth experience for early users while encouraging adoption and useful feedback.",
    },
    {
      image: service3,
      heading4: (
        <h4>
          Scalable<br />
          Architecture
        </h4>
      ),
      para: "Even as a lean version, the MVP is built on a scalable structure that supports future features, updates, and steady business growth.",
    },
    {
      image: service4,
      heading4: (
        <h4>
          Rapid<br />
          Development
        </h4>
      ),
      para: "We use agile development methods to speed up production, ensuring your MVP reaches the market quickly and efficiently.",
    },
    {
      image: service5,
      heading4: (
        <h4>
          Feedback-Driven <br />
          Iteration
        </h4>
      ),
      para: "Our MVPs collect real user feedback, allowing ongoing improvements that guide product direction and support sustainable growth.",
    },
    {
      image: service6,
      heading4: (
        <h4>
          Post-Launch<br />
          Support
        </h4>
      ),
      para: "We provide ongoing maintenance and updates, transforming your MVP into a complete, scalable application that evolves with your business.",
    }
  ],
  btnText: "Start MVP App Development",
};

const discussCtaData = {
  heading1: <h2 className="same-heading">Validate Concepts</h2>,
  heading2: (
      <h3 className="same-heading">
        <span>Quickly and Effectively</span>
      </h3>
    ),
  para: "Partner with Hamkoders to build MVPs that test ideas, collect feedback, and deliver scalable, fast, and functional solutions for successful market entry.",
  image: discussCtaImage,
};

const demandCompData = {
  heading1: (
    <h2 className="same-heading">
      MVP App Development Solutions Designed<span> for Speed and Growth</span>
    </h2>
  ),
  para: 'Our MVP app development services focus on building efficient, scalable, and practical applications. As a trusted MVP app development company, Hamkoders accelerates launch timelines, validates business ideas, and delivers reliable strategies that improve app performance and support business growth.',
  demandBox: [
    {
      heading4: (
        <h4>Strategic <br /> MVP Planning</h4>
      ),
      para: 'We define core features and functionality to test concepts while maintaining strong alignment with business objectives.',
      image: signVector
    },
    {
      heading4: (
        <h4>Optimized Lean<br />Architecture</h4>
      ),
      para: 'We create lightweight and modular applications that can grow into full-featured products without major redevelopment.',
      image: signVector
    },
    {
      heading4: (
        <h4>Agile Development<br />Process</h4>
      ),
      para: 'We follow iterative development and testing methods to deliver dependable MVPs quickly while adapting to user feedback.',
      image: signVector
    },
    {
      heading4: (
        <h4>Security and <br /> Reliability</h4>
      ),
      para: 'Even as a lean solution, each MVP includes strong security and stable performance to protect business and user data.',
      image: signVector
    }
  ]
}

const faqs = [
  {
    question: "What is MVP app development?",
    answer:
      "MVP app development builds a basic version of an application with core features to test ideas and gather real user feedback.",
  },
  {
    question: "How long does it take to develop an MVP?",
    answer:
      "Most MVPs can be completed within 4 to 8 weeks, depending on complexity and required features",
  },
  {
    question: "Can the MVP scale into a full-featured app?",
    answer:
      "Yes, MVPs are designed on scalable architecture that allows future upgrades, features, and integrations.",
  },
  {
    question: "Will the MVP be user-friendly?",
    answer:
      "Yes, MVPs are built with simple and intuitive interfaces to ensure easy adoption and smooth user experience.",
  },
  {
    question: "Can you integrate third-party tools in the MVP?",
    answer:
      "Yes, MVPs can integrate APIs, payment systems, and other tools to support core functionality.",
  },
  {
    question: "Do you offer post-launch support for MVPs?",
    answer:
      "Yes, Hamkoders provides ongoing updates, improvements, and technical support after launch.",
  }
];

const MvpAppDevelopment = () => {
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

export default MvpAppDevelopment;
