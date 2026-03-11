export const metadata = {
  title: "Mobile Game Development Company Creating Next-Level Games",
  description:
    "We’re a mobile game development company turning ideas into fun, high-performing games—built for engagement, smooth play, and success across all platforms.",
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

import vector from "../../../../public/images/mobile-app-banner.png";

import service1 from "../../../../public/images/game-dev-services/mobile-app-development/1.png";
import service2 from "../../../../public/images/game-dev-services/mobile-app-development/2.png";
import service3 from "../../../../public/images/game-dev-services/mobile-app-development/3.png";
import service4 from "../../../../public/images/game-dev-services/mobile-app-development/4.png";
import service5 from "../../../../public/images/game-dev-services/mobile-app-development/5.png";
import service6 from "../../../../public/images/game-dev-services/mobile-app-development/6.png";

import discussCtaImage from "../../../../public/images/mobile-app-dev-cta.png";

import signVector from "../../../../public/images/sign-vector.png";

const bannerData = {
  bgImage: "/images/android-app-dev.webp",
  heading1: (
    <h1 className="same-heading">
      Expert <span> Search Engine Optimization </span> Services
    </h1>
  ),
  para: (
    <p className="para">
      Boost your online visibility with Hamkoders, a trusted SEO expert team delivering strategic optimization, seamless performance, and measurable search growth.
    </p>
  ),
  image: vector,
  imageAlt: "vector",
};

const serviceData = {
  heading1: (
    <h2 className="same-heading">
      Creating SEO Strategies <br /> <span>That Rank and Convert</span>
    </h2> 
  ),
  para: "Hamkoders specializes in technical SEO and on-page optimization, creating powerful, search-focused strategies designed to increase rankings and strengthen your brand visibility.",
  serviceBox: [
    {
      image: service1,
      heading4: (
        <h4>
          Custom SEO<br />
          Strategy
        </h4>
      ),
      para: "We build tailored SEO strategies that reflect your business goals while delivering targeted traffic, strong engagement, and consistent growth across search platforms.",
    },
    {
      image: service2,
      heading4: (
        <h4>
          Optimized  <br />
          Website
        </h4>
      ),
      para: "Our team ensures fast-loading pages, clear structure, and optimized content designed to improve user experience, increase engagement, and drive higher search rankings.",
    },
    {
      image: service3,
      heading4: (
        <h4>
           Technical SEO  <br />
          Integration
        </h4>
      ),
      para: "We implement advanced SEO techniques, ensuring secure structure, clean coding, and optimized indexing for smooth and reliable search performance.",
    },
    {
      image: service4,
      heading4: (
        <h4>
          Feature-Rich <br />
          Optimization
        </h4>
      ),
      para: "We deliver SEO solutions complete with keyword research, competitor analysis, content strategy, and analytics for efficient and growth-focused digital visibility.",
    },
    {
      image: service5,
      heading4: (
        <h4>
          Search-Focused  <br />
          Architecture
        </h4>
      ),
      para: "We apply SEO best practices across site structure, pages, and content to improve rankings, attract organic traffic, and increase search visibility.",
    },
    {
      image: service6,
      heading4: (
        <h4>
          Ongoing SEO <br />
          Support
        </h4>
      ),
      para: "After launch, we provide continuous optimization, ranking improvements, and dedicated support to keep your website performing at its best. ",
    }
  ],
  btnText: "Start Mobile Game development",
};

const discussCtaData = {
  heading1: <h2 className="same-heading">Scale Online Visibility </h2>,
  heading2: (
      <h3 className="same-heading">
        <span>with SEO Expertise</span>
      </h3>
    ),
  para: "Partner with Hamkoders for professional SEO services, delivering effective, result-focused strategies optimized for growth, higher rankings, and success in competitive search markets.",
  image: discussCtaImage,
};

const demandCompData = {
  heading1: (
    <h2 className="same-heading">
      SEO Solutions<span> for Modern Businesses</span> 
    </h2>
  ),
  para: 'Hamkoders SEO services, led by a trusted search optimization team, combine research, strategy, and performance planning to build strong online visibility. With seamless keyword targeting and technical optimization, we create engaging, high-ranking solutions that attract traffic and rapidly boost website growth.',
  demandBox: [
    {
      heading4: (
        <h4>Website Architecture</h4>
      ),
      para: 'We build SEO structures tailored to your business model, target keywords, and smooth user journey for better rankings.',
      image: signVector
    },
    {
      heading4: (
        <h4>Responsive  <br />Optimization</h4>
      ),
      para: 'We optimize fully responsive, easy-to-navigate websites, delivering a seamless and high-quality search experience across all devices.',
      image: signVector
    },
    {
      heading4: (
        <h4>Integrated <br />Marketing</h4>
      ),
      para: 'Games are built to run smoothly on Android and iOS, ensuring wide reach and easy access. We also integrate analytics tools to enhance visibility, boost engagement, and monitor SEO performance.',
      image: signVector
    },
    {
      heading4: (
        <h4>Secure <br /> Website</h4>
      ),
      para: 'We maintain secure site structure, proper indexing, and optimized performance, protecting both your website and search presence.',
      image: signVector
    }
  ]
}

const faqs = [
  {
    question: "What is SEO optimization?",
    answer:
      "SEO optimization improves website visibility on search engines through keyword targeting, technical improvements, and content optimization.",
  },
  {
    question: "How long does it take to see SEO results?",
    answer:
      "Depending on competition and strategy, SEO results typically begin showing within 6 to 12 weeks from implementation.",
  },
  {
    question: "Can you optimize a fully existing website?",
    answer:
      "Yes, we can fully optimize existing websites with technical SEO, content improvements, and performance enhancements.",
  },
  {
    question: "Will the website be optimized for mobile devices?",
    answer:
      "Yes, all SEO strategies ensure mobile-friendly performance and strong visibility across devices.",
  },
  {
    question: "Can you integrate analytics and tracking tools?",
    answer:
      "Yes, we integrate analytics and tracking tools to monitor traffic, rankings, and performance effectively.",
  },
  {
    question: "HDo you provide ongoing SEO support?",
    answer:
      "Yes, Hamkoders provides continuous optimization, monitoring, and performance improvement support.",
  }
];

const MobileAppDevelopment = () => {
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

export default MobileAppDevelopment;
