export const metadata = {
  title: "App Development Concept Design That Brings Ideas to Life",
  description:
    "We shape your app development concept into a clear, functional design—focusing on user needs, business goals, and creative direction from the very first step.",
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

import vector from "../../../../public/images/concept-design-vector.png";

import service1 from "../../../../public/images/app-services/concept-design/1.png";
import service2 from "../../../../public/images/app-services/concept-design/2.png";
import service3 from "../../../../public/images/app-services/concept-design/3.png";
import service4 from "../../../../public/images/app-services/concept-design/4.png";
import service5 from "../../../../public/images/app-services/concept-design/5.png";
import service6 from "../../../../public/images/app-services/concept-design/6.png";

import discussCtaImage from "../../../../public/images/concept-cta-image.png";

import signVector from "../../../../public/images/sign-vector.png";

const bannerData = {
  bgImage: "/images/android-app-dev.webp",
  heading1: (
    <h1 className="same-heading">
      Visionary<span> App Concept </span>Design
    </h1>
  ),
  para: (
    <p className="para">
      Hamkoders app concept development services turn ideas into practical, user-focused blueprints by combining research, planning, and creativity for successful app development.
    </p>
  ),
  image: vector,
  imageAlt: "vector",
};

const serviceData = {
  heading1: (
    <h2 className="same-heading">
      Designing App Concepts That <br /> <span>Inspire and Guide</span>
    </h2>
  ),
  para: "Our concept-to-prototype process transforms user needs, business goals, and market research into a clear plan that supports every stage of application development.",
  serviceBox: [
    {
      image: service1,
      heading4: (
        <h4>
          Idea<br />
          Validation
        </h4>
      ),
      para: "We review market trends, user behavior, and competitors to validate app ideas, uncover opportunities, and ensure solutions are relevant and strategically positioned.",
    },
    {
      image: service2,
      heading4: (
        <h4>
          Wireframing
        </h4>
      ),
      para: "We map user journeys and layouts to visualize app structure, ensuring clarity, usability, and strong alignment with business goals.",
    },
    {
      image: service3,
      heading4: (
        <h4>
          UI/UX<br />
          Prototyping
        </h4>
      ),
      para: "We build interactive prototypes that demonstrate app functionality, allowing early testing and feedback before full-scale development begins.",
    },
    {
      image: service4,
      heading4: (
        <h4>
          Feature<br />
          Prioritization
        </h4>
      ),
      para: "We identify essential features to highlight user value and maximize business impact, guiding development toward meaningful outcomes.",
    },
    {
      image: service5,
      heading4: (
        <h4>
          Feasibility <br />
          Assessment
        </h4>
      ),
      para: "Our team evaluates technical feasibility, identifies challenges, and determines practical solutions to turn ideas into functional applications.",
    },
    {
      image: service6,
      heading4: (
        <h4>
          Strategic<br />
          Roadmap
        </h4>
      ),
      para: "We create a detailed roadmap with milestones, design direction, and feature planning to ensure smooth and organized project execution.",
    }
  ],
  btnText: "Start Concept Design",
};

const discussCtaData = {
  heading1: <h2 className="same-heading">Bring Mobile App Online</h2>,
  heading2: (
      <h3 className="same-heading">
        <span>with Hamkoders</span>
      </h3>
    ),
  para: "Our concept design services turn ideas into clear, user-focused app concepts, guiding development with creativity, clarity, and smooth execution for successful results..",
  image: discussCtaImage,
};

const demandCompData = {
  heading1: (
    <h2 className="same-heading">
      Concept Design Solutions <span> for Scalable App Development</span>
    </h2>
  ),
  para: 'Our concept design services deliver a strong app development foundation that works as a blueprint for high-performing applications. Through research, planning, and creativity, we craft interactive app mockups that are engaging, practical, and aligned with business goals, ensuring smooth and successful development.',
  demandBox: [
    {
      heading4: (
        <h4>Strategic <br /> Planning</h4>
      ),
      para: 'We define application goals, features, and target users to ensure the concept solves real problems and meets user expectations.',
      image: signVector
    },
    {
      heading4: (
        <h4>Visual<br />Storyboarding</h4>
      ),
      para: 'We design wireframes, sketches, and user flows to visualize app interactions and improve overall user experience.',
      image: signVector
    },
    {
      heading4: (
        <h4>Prototype <br />Development</h4>
      ),
      para: 'Interactive prototypes test core features, strengthen design decisions, and reduce risks during development.',
      image: signVector
    },
    {
      heading4: (
        <h4>Concept <br /> Architecture</h4>
      ),
      para: 'Our concept frameworks support future growth, new features, and changing user needs for scalable and adaptable applications.',
      image: signVector
    }
  ]
}

const faqs = [
  {
    question: "What is app concept design?",
    answer:
      "App concept design defines the structure, features, and user flow of an application before development begins.",
  },
  {
    question: "Why is concept design important?",
    answer:
      "It ensures the app idea is practical, user-friendly, and aligned with business goals before investing in full development.",
  },
  {
    question: "How long does concept design take?",
    answer:
      "Most concept design phases take between 1 to 3 weeks depending on complexity and requirements.",
  },
  {
    question: "Will I get a visual representation of my app??",
    answer:
      "Yes, we provide wireframes, layouts, and prototypes to present a clear visual of the application.",
  },
  {
    question: "Can the concept design influence the final app development?",
    answer:
      "Yes, a well-planned concept guides development, reduces errors, and improves final product quality.",
  },
  {
    question: "Do you provide recommendations on feature prioritization?",
    answer:
      "Yes, we recommend key features based on user needs, market trends, and business objectives..",
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
