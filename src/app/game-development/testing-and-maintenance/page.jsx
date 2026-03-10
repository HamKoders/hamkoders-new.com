export const metadata = {
  title: "Game Performance Testing That Ensures Stability and Speed",
  description:
    "We offer game performance testing to detect bugs, boost speed, and enhance gameplay—ensuring your game runs smoothly across all devices and player scenarios.",
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

import vector from "../../../../public/images/email-banner.png";

import service1 from "../../../../public/images/game-dev-services/testing-and-maintenance-services/1.png";
import service2 from "../../../../public/images/game-dev-services/testing-and-maintenance-services/2.png";
import service3 from "../../../../public/images/game-dev-services/testing-and-maintenance-services/3.png";
import service4 from "../../../../public/images/game-dev-services/testing-and-maintenance-services/4.png";
import service5 from "../../../../public/images/game-dev-services/testing-and-maintenance-services/5.png";
import service6 from "../../../../public/images/game-dev-services/testing-and-maintenance-services/6.png";

import discussCtaImage from "../../../../public/images/mobile-app-dev-cta.png";

import signVector from "../../../../public/images/sign-vector.png";

const bannerData = {
  bgImage: "/images/fullstack-banner.webp",
  heading1: (
    <h1 className="same-heading">
      Expert  <span> Email Marketing </span>Campaign Services
    </h1>
  ),
  para: (
    <p className="para">
      Boost your customer engagement with Hamkoders, a trusted email marketing partner delivering targeted campaigns, engaging content, and secure automation systems.
    </p>
  ),
  image: vector,
  imageAlt: "vector",
};

const serviceData = {
  heading1: (
    <h2 className="same-heading">
      Creating Email Campaigns <br /> <span>That Engage and Convert</span> 
    </h2>
  ),
  para: "Hamkoders focuses on custom email campaign strategy and automation setup, creating visually appealing, user-focused emails designed to increase engagement and strengthen brand communication.",
  serviceBox: [
    {
      image: service1,
      heading4: (
        <h4>
          Custom Email  <br />
          Campaign Design
        </h4>
      ),
      para: "We create unique, responsive email templates that perfectly reflect your brand identity while delivering a seamless, engaging, and intuitive reading experience for subscribers.",
    },
    {
      image: service2,
      heading4: (
        <h4>
          Optimized Email  <br />
          Campaigns
        </h4>
      ),
      para: "Our team ensures fast delivery, structured layouts, and smooth user interaction designed to enhance subscriber satisfaction, improve engagement, and increase conversions.",
    },
    {
      image: service3,
      heading4: (
        <h4>
          Automation <br />
          Integration
        </h4>
      ),
      para: "We integrate secure email automation systems, providing businesses with reliable scheduling, audience targeting, and seamless campaign execution every time.",
    },
    {
      image: service4,
      heading4: (
        <h4>
          Feature-Rich <br />
          Campaign Management
        </h4>
      ),
      para: "We deliver complete email marketing solutions including newsletters, promotional campaigns, automation flows, and analytics, offering all essential features for effective, growth-driven communication.",
    },
    {
      image: service5,
      heading4: (
        <h4>
          SEO-Friendly  <br />
          Email Strategy  
        </h4>
      ),
      para: "We apply search-focused and audience-based practices across email content and structure, improving reach, increasing engagement, and helping your campaigns perform better.",
    },
    {
      image: service6,
      heading4: (
        <h4>
          Ongoing <br />
          Campaign Support
        </h4>
      ),
      para: "After launch, we provide regular updates, performance tracking, and dedicated support, keeping your email campaigns optimized, secure, and performing at their best.",
    },
  ],
  btnText: "Start testing & Maintenance",
};

const discussCtaData = {
  heading1: <h2 className="same-heading">Scale Business Growth with</h2>,
  heading2: (
      <h3 className="same-heading">
        <span>Email Marketing Expertise</span>
      </h3>
    ),
  para: "Partner with Hamkoders for professional email marketing campaign services, delivering strategic, engaging campaigns optimized for growth, customer retention, and success in competitive digital markets.",
  image: discussCtaImage,
};

const demandCompData = {
  heading1: (
    <h2 className="same-heading">
      Email Marketing Campaign Solutions<span>for Modern Businesses</span>
    </h2> 
  ),
  para: 'Hamkoders email marketing services, led by experienced campaign specialists, combine strategy, design, and technology to create targeted campaigns. With seamless automation integration, we build engaging, high-performing email solutions that attract subscribers and drive consistent conversions.',
  demandBox: [
    {
      heading4: (
        <h4>Campaign <br /> Strategy</h4>
      ),
      para: 'We create email campaigns tailored to your business goals, audience segments, and seamless communication journey.',
      image: signVector
    },
    {
      heading4: (
        <h4>Responsive Email <br /> Design</h4>
      ),
      para: 'We design fully responsive, easy-to-read email layouts, delivering a smooth and effective user experience across all devices.',
      image: signVector
    },
    {
      heading4: (
        <h4>Integrated <br />Automation</h4>
      ),
      para: 'We integrate tools and workflows to boost engagement, enhance subscriber interaction, and track campaign performance effectively.',
      image: signVector
    },
    {
      heading4: (
        <h4>Secure Email <br />Platform</h4>
      ),
      para: 'We ensure secure data handling, subscriber management, and campaign execution, protecting both your business and audience information.',
      image: signVector
    }
  ]
}

const faqs = [
  {
    question: "What is email marketing campaign management?",
    answer:
      "Email marketing campaign management involves planning, designing, scheduling, and optimizing targeted email campaigns to engage subscribers and drive measurable conversions.",
  },
  {
    question: " How long does it take to set up an email campaign?",
    answer:
      "Depending on campaign complexity, audience size, and automation requirements, most email campaigns can be prepared and launched within 3 to 10 days.",
  },
  {
    question: "Can you create fully customized email campaigns?",
    answer:
      "Yes, we design tailored email campaigns aligned with your brand voice, audience segments, and specific business goals.",
  },
  {
    question: "Will emails be optimized for mobile devices?",
    answer:
      "Yes, all email templates are fully responsive and optimized for mobile, tablet, and desktop viewing."
  },
  {
    question: "Can you integrate automation and tracking tools",
    answer:
      "Yes, we integrate advanced automation workflows, subscriber segmentation, and performance tracking systems for accurate reporting.",
  },
  {
    question: "Do you provide ongoing campaign support?",
    answer:
      "Yes, we offer continuous optimization, performance analysis, A/B testing, and campaign management support for long-term success.",
  }
];

const TestingAndMaintenance = () => {
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

export default TestingAndMaintenance;
