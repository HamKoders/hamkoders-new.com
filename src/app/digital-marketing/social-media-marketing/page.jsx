export const metadata = {
  title: "Cross Platform Game Development for All Screens and Players",
  description:
    "We offer cross platform game development that ensures smooth, consistent gameplay across devices—designed to engage players and grow your audience everywhere.",
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

import vector from "../../../../public/images/social-media-app-banner.png";

import service1 from "../../../../public/images/game-dev-services/cross-platform-game-development/1.png";
import service2 from "../../../../public/images/game-dev-services/cross-platform-game-development/2.png";
import service3 from "../../../../public/images/game-dev-services/cross-platform-game-development/3.png";
import service4 from "../../../../public/images/game-dev-services/cross-platform-game-development/4.png";
import service5 from "../../../../public/images/game-dev-services/cross-platform-game-development/5.png";
import service6 from "../../../../public/images/game-dev-services/cross-platform-game-development/6.png";

import discussCtaImage from "../../../../public/images/mobile-app-dev-cta.png";

import signVector from "../../../../public/images/sign-vector.png";

const bannerData = {
  bgImage: "/images/enterprise-dev-banner.webp",
  heading1: (
    <h1 className="same-heading">
      Expert <span>Social Media Marketing </span>Services
    </h1>
  ),
  para: (
    <p className="para">
      Boost your brand growth with Hamkoders, a trusted social media marketing team delivering creative campaigns, smooth management, and strong engagement.
    </p>
  ),
  image: vector,
  imageAlt: "vector",
};

const serviceData = {
  heading1: (
    <h2 className="same-heading">
      Creating Social Campaigns That<br /> <span>Engage and Convert</span>
    </h2>

  ),
  para: "Hamkoders specializes in social media strategy and campaign management, creating visually strong, user-focused campaigns designed to increase engagement and strengthen your brand identity.",
  serviceBox: [
    {
      image: service1,
      heading4: (
        <h4>
          Custom Social <br />
          Strategy
        </h4>
      ),
      para: "We create unique, targeted social media strategies that reflect your brand identity while delivering engaging and consistent audience experiences.",
    },
    {
      image: service2,
      heading4: (
        <h4>
          Optimized <br />
          Campaigns
        </h4>
      ),
      para: "Our team ensures fast content delivery, smooth audience targeting, and engaging interactions designed to increase visibility and drive stronger results.",
    },
    {
      image: service3,
      heading4: (
        <h4>
          Ad Campaign  <br />
          Management
        </h4>
      ),
      para: "We manage secure and effective ad campaigns, ensuring reliable reach, strong engagement, and smooth performance across social platforms.",
    },
    {
      image: service4,
      heading4: (
        <h4>
          Feature-Rich  <br />
          Marketing
        </h4>
      ),
      para: "We deliver social media solutions complete with content planning, audience management, and analytics, offering essential tools for growth-focused promotion.",
    },
    {
      image: service5,
      heading4: (
        <h4>
          SEO-Friendly  <br />
          Content
        </h4>
      ),
      para: "We apply search and content strategies across posts and campaigns, improving visibility, attracting audiences, and helping your brand grow online.",
    },
    {
      image: service6,
      heading4: (
        <h4>
          Ongoing <br />
          Management
        </h4>
      ),
      para: "WAfter launch, we provide regular content updates, performance tracking, and dedicated support to keep your social presence active and effective.",
    }
  ],
  btnText: "Start Cross Platform App development",
};

const discussCtaData = {
  heading1: <h2 className="same-heading">Scale Online Presence with</h2>,
  heading2: (
      <h3 className="same-heading">
        <span>Social Media Expertise</span> 
      </h3>
    ),
  para: "Partner with Hamkoders for social media marketing services, delivering creative and result-focused campaigns optimized for growth, engagement, and success in competitive digital markets.",
  image: discussCtaImage,
};

const demandCompData = {
  heading1: (
    <h2 className="same-heading">
      Social Media Marketing <span> Solutions for Modern Brands</span>
    </h2>
  ),
  para: 'Hamkoders social media marketing services, led by experienced marketing specialists, combine creativity, planning, and strategy to build strong brand presence. With seamless campaign management and audience targeting, we create engaging, high-performing marketing solutions that attract customers and increase brand reach.',
  demandBox: [
    {
      heading4: (
        <h4>Campaign <br/> Strategy</h4>
      ),
      para: 'We create social media campaigns tailored to your business goals, audience behavior, and brand growth journey.',
      image: signVector
    },
    {
      heading4: (
        <h4>Responsive <br />Content</h4>
      ),
      para: 'We design engaging, easy-to-consume content that delivers a consistent and high-quality experience across all platforms.',
      image: signVector
    },
    {
      heading4: (
        <h4>Integrated  <br />Marketing</h4>
      ),
      para: 'We integrate tools and analytics to improve promotions, strengthen engagement, and track campaign performance effectively.',
      image: signVector
    },
    {
      heading4: (
        <h4>Secure <br /> Brand</h4>
      ),
      para: 'We maintain secure account management, safe data handling, and strong brand protection across all platforms.',
      image: signVector
    }
  ]
}

const faqs = [
  {
    question: "What is social media marketing?",
    answer:
      "Social media marketing promotes brands through platforms like Instagram, Facebook, and TikTok to increase reach and engagement.",
  },
  {
    question: "How long does it take to see results from social media marketing?",
    answer:
      "Most campaigns begin showing measurable engagement and reach improvements within 3 to 6 weeks.",
  },
  {
    question: "Can you create a fully custom social media strategy?",
    answer:
      "YYes, we build tailored strategies based on your brand goals and audience behavior.",
  },
  {
    question: "CWill the content be optimized for all devices?",
    answer:
      "Yes, all content is designed to perform smoothly across mobile and desktop platforms.",
  },
  {
    question: "Can you manage ads and campaign tools?",
    answer:
      "Yes, we manage paid ads, content scheduling, and performance tracking tools.",
  },
  {
    question: "Do you provide ongoing social media support?",
    answer:
      "Yes, Hamkoders provides continuous management, optimization, and performance reporting.",
  }
];

const CrossPlatformAppDevelopment = () => {
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

export default CrossPlatformAppDevelopment;
