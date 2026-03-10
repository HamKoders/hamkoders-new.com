export const metadata = {
  title: "Console Game Development for Bold, Immersive Player Worlds",
  description:
    "We provide console game development focused on rich visuals, smooth controls, and engaging gameplay—crafted to deliver thrilling experiences across platforms.",
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

import vector from "../../../../public/images/google-meta-banner.png";

import service1 from "../../../../public/images/game-dev-services/console-game-app/1.png";
import service2 from "../../../../public/images/game-dev-services/console-game-app/2.png";
import service3 from "../../../../public/images/game-dev-services/console-game-app/3.png";
import service4 from "../../../../public/images/game-dev-services/console-game-app/4.png";
import service5 from "../../../../public/images/game-dev-services/console-game-app/5.png";
import service6 from "../../../../public/images/game-dev-services/console-game-app/6.png";

import discussCtaImage from "../../../../public/images/mobile-app-dev-cta.png";

import signVector from "../../../../public/images/sign-vector.png";

const bannerData = {
  bgImage: "/images/front-end-banner.webp",
  heading1: (
    <h1 className="same-heading">
      Expert<span> Google & Meta Ads </span> Management Services
    </h1>
  ),
  para: (
    <p className="para">
      Boost your online growth with Hamkoders, a trusted Google & Meta Ads management agency offering strategic campaigns, seamless optimization, and secure performance tracking.
    </p>
  ),
  image: vector,
  imageAlt: "vector",
};

const serviceData = {
  heading1: (
    <h2 className="same-heading">
      Creating Ad Campaigns <br /> <span>That Engage and Convert</span>
    </h2>
  ),
  para: "Hamkoders specializes in Google Ads and Meta Ads campaign management, creating high-performing, visually compelling ads designed to increase conversions and strengthen your brand visibility.",
  serviceBox: [
    {
      image: service1,
      heading4: (
        <h4>
          Custom Ad <br />
          Campaign Setup
        </h4>
      ),
      para: "We create targeted, responsive ad campaigns that reflect your brand goals while delivering engaging, intuitive, and high-converting experiences for potential customers.",
    },
    {
      image: service2,
      heading4: (
        <h4>
          Optimized Ad  <br />
          Performance
        </h4>
      ),
      para: "Our team ensures fast-loading landing pages, precise audience targeting, and seamless ad experiences designed to improve engagement, enhance satisfaction, and generate higher conversions.",
    },
    {
      image: service3,
      heading4: (
        <h4>
          ConversionTracking <br />
          Integration
        </h4>
      ),
      para: "We integrate secure tracking tools and analytics platforms, delivering accurate insights, reliable performance data, and a smooth advertising experience across all campaigns.",
    },
    {
      image: service4,
      heading4: (
        <h4>
          Feature-Rich Campaign <br />
          Management
        </h4>
      ),
      para: "We deliver complete campaign management including keyword targeting, audience segmentation, retargeting strategies, and performance analytics for efficient, growth-focused advertising.",
    },
    {
      image: service5,
      heading4: (
        <h4>
          Search & Social  <br />
          Optimization
        </h4>
      ),
      para: "We apply best practices across Google and Meta platforms, improving ad visibility, attracting qualified traffic, and helping your campaigns achieve stronger reach and results.",
    },
    {
      image: service6,
      heading4: (
        <h4>
           Ongoing Campaign <br />
          Maintenance
        </h4>
      ),
      para: "After launch, we provide regular optimization, performance updates, and dedicated support to keep your campaigns competitive, secure, and performing at their best.",
    },
  ],
  btnText: "Start Console Game App Development",
};

const discussCtaData = {
  heading1: <h2 className="same-heading">Scale Online Business</h2>,
  heading2: (
      <h3 className="same-heading">
        <span>with Ads Expertise</span>
      </h3>
    ),
  para: "Partner with HadzTech for AI in console games, delivering high-performance, multi-platform experiences that combine advanced technology, creativity, and immersive gameplay.",
  image: discussCtaImage,
};

const demandCompData = {
  heading1: (
    <h2 className="same-heading">
      Google & Meta Ads Solutions  <span> for Modern Businesses</span>
    </h2>
  ),
  para: 'Hamkoders Google & Meta Ads management services combine strategy, targeting, and analytics to create high-performing campaigns. With seamless conversion tracking and audience optimization, we build engaging, results-driven advertising solutions that attract customers and accelerate business growth.',
  demandBox: [
    {
      heading4: (
        <h4>Campaign <br /> Architecture</h4>
      ),
      para: 'We create ad strategies tailored to your business goals, audience behavior, and optimized customer conversion journey',
      image: signVector
    },
    {
      heading4: (
        <h4>Responsive Ad <br /> Creatives</h4>
      ),
      para: 'We design fully responsive, high-impact ads that deliver seamless and engaging experiences across search and social platforms.',
      image: signVector
    },
    {
      heading4: (
        <h4>Integrated Marketing <br />Tools</h4>
      ),
      para: 'We integrate analytics, remarketing tools, and automation systems to boost campaign performance and engagement effectively.',
      image: signVector
    },
    {
      heading4: (
        <h4>Secure Ad <br />Management</h4>
      ),
      para: 'We ensure secure ad accounts, budget control, and reliable data tracking, protecting both your campaigns and marketing performance.',
      image: signVector
    }
  ]
}

const faqs = [
  {
    question: "What is Google & Meta Ads management?",
    answer:
      "It involves creating, managing, and optimizing paid advertising campaigns across Google and Meta platforms to drive traffic, leads, and conversions.",
  },
  {
    question: " How long does it take to see results from ads?",
    answer:
      "Depending on budget and competition, campaigns typically start generating measurable results within the first few weeks of launch.",
  },
  {
    question: "Can you create fully customized ad campaigns?",
    answer:
      "Yes, all campaigns are tailored to your business goals, target audience, and industry requirements.",
  },
  {
    question: "Will ads be optimized for mobile users?",
    answer:
      "Yes, campaigns are optimized for mobile, desktop, and all major devices to maximize reach and engagement.",
  },
  {
    question: "Can you integrate tracking and analytics tools?",
    answer:
      "Yes, we implement conversion tracking, analytics, and performance monitoring tools for accurate reporting.",
  },
  {
    question: "Do you provide ongoing campaign support?",
    answer:
      "Yes, we offer continuous optimization, reporting, and management to ensure long-term advertising success.",
  }
];

const ConsoleGameAppDevelopment = () => {
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

export default ConsoleGameAppDevelopment;
