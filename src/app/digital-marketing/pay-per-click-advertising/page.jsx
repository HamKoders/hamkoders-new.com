export const metadata = {
  title: "Blockchain Game Development Services for Future-Ready Gaming",
  description:
    "We offer blockchain game development services that combine fun, ownership, and security—creating NFT-powered games that engage players and reward real value.",
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

import vector from "../../../../public/images/ppc-vector-banner.png";

import service1 from "../../../../public/images/game-dev-services/blockchain-and-nft-game-app/1.png";
import service2 from "../../../../public/images/game-dev-services/blockchain-and-nft-game-app/2.png";
import service3 from "../../../../public/images/game-dev-services/blockchain-and-nft-game-app/3.png";
import service4 from "../../../../public/images/game-dev-services/blockchain-and-nft-game-app/4.png";
import service5 from "../../../../public/images/game-dev-services/blockchain-and-nft-game-app/5.png";
import service6 from "../../../../public/images/game-dev-services/blockchain-and-nft-game-app/6.png";

import discussCtaImage from "../../../../public/images/mobile-app-dev-cta.png";

import signVector from "../../../../public/images/sign-vector.png";

const bannerData = {
  bgImage: "/images/webapp-dev-banner.webp",
  heading1: (
    <h1 className="same-heading">
      Professional <span>  PPC Advertising </span>Services  
    </h1>
  ),
  para: (
    <p className="para">
      Increase your online revenue with Hamkoders, a reliable PPC marketing agency delivering precision-targeted ads, structured campaign management, and secure conversion optimization.
    </p>
  ),
  image: vector,
  imageAlt: "vector",
};

const serviceData = {
  heading1: (
    <h2 className="same-heading">
      Building PPC Campaigns <br /> <span>That Convert and Perform</span>
    </h2> 
  ),
  para: " Hamkoders focuses on paid search advertising and performance-driven marketing, creating high-impact, audience-targeted ads designed to maximize ROI and improve brand reach.",
  serviceBox: [
    {
      image: service1,
      heading4: (
        <h4>
           Strategic PPC <br />
          Campaigns
        </h4>
      ),
      para: "WWe develop data-driven ad campaigns aligned with your business objectives while delivering engaging, high-converting experiences for your target audience.",
    },
    {
      image: service2,
      heading4: (
        <h4>
           Performance   <br />
          Optimized Ads
        </h4>
      ),
      para: "Our specialists create fast, conversion-ready landing pages and precise targeting strategies that enhance engagement and increase qualified leads.",
    },
    {
      image: service3,
      heading4: (
        <h4>
          Advanced Ad <br />
          Integration
        </h4>
      ),
      para: "WWe configure secure ad platforms with accurate tracking systems, ensuring transparent reporting, consistent performance, and seamless campaign execution.",
    },
    {
      image: service4,
      heading4: (
        <h4>
          Comprehensive  Ad <br />
          Solutions
        </h4>
      ),
      para: "OOur PPC management includes keyword research, audience segmentation, bid management, and analytics for measurable and scalable advertising success.",
    },
    {
      image: service5,
      heading4: (
        <h4>
          Conversion-Centered  <br />
          Strategy
        </h4>
      ),
      para: "We implement smart bidding and keyword optimization techniques to increase visibility, drive relevant traffic, and improve overall campaign efficiency.",
    },
    {
      image: service6,
      heading4: (
        <h4>
          Continuous Campaign<br />
          Optimization
        </h4>
      ),
      para: "Post-launch, we monitor, refine, and optimize campaigns regularly to maintain strong performance and competitive advantage.",
    },
  ],
  btnText: "Start Blockchain & NFT Game App Development",
};

const discussCtaData = {
  heading1: <h2 className="same-heading">Accelerate Business Growth</h2>,
  heading2: (
      <h3 className="same-heading">
        <span>with PPC Expertise</span> 
      </h3>
    ),
  para: "Partner with Hamkoders for advanced PPC advertising solutions, delivering targeted, conversion-focused campaigns built for engagement, scalability, and competitive digital success.",
  image: discussCtaImage,
};

const demandCompData = {
  heading1: (
    <h2 className="same-heading">
      PPC Advertising Services<span> for Growing Brands</span> 
    </h2>
  ),
  para: 'Hamkoders PPC marketing solutions combine audience targeting, keyword strategy, and real-time optimization to drive strong campaign performance. With accurate conversion tracking and ROI-focused execution, we create paid advertising strategies that increase traffic and boost revenue.',
  demandBox: [
    
 {
      heading4: (
        <h4>Campaign  <br /> Planning</h4>
      ),
      para: 'We design PPC strategies aligned with your business objectives, audience behavior, and optimized customer acquisition flow.',
      image: signVector
    },    
    {
      heading4: (
        <h4>Responsive Ad <br /> Creatives</h4>
      ),
      para: 'We craft mobile-optimized and engaging advertisements delivering consistent performance across search and display networks.',
      image: signVector
    },
    {
      heading4: (
        <h4>Integrated <br />Analytics</h4>
      ),
      para: 'We implement tracking systems and reporting tools to enhance campaign performance and provide measurable insights.',
      image: signVector
    },
    {
      heading4: (
        <h4>Secure Campaign <br />Management</h4>
      ),
      para: 'We maintain protected ad accounts, accurate data monitoring, and controlled budget management for safe and effective advertising.',
      image: signVector
    },
   
  ]
}

const faqs = [
  {
    question: "What is PPC advertising?",
    answer:
      "PPC advertising is a paid search marketing strategy where advertisers pay per click to generate targeted traffic and qualified conversions.",
  },
  {
    question: "How quickly can PPC generate results?",
    answer:
      " Most PPC campaigns begin producing traffic and measurable performance data within days of launch.",
  },
  {
    question: "Do you create customized PPC strategies?",
    answer:
      "Yes, we design tailored PPC campaigns based on your industry, goals, and target audience.",
  },
  {
    question: "Are PPC ads optimized for all devices?",
    answer:
      "Yes, campaigns are structured for mobile, desktop, and multi-device performance.",
  },
  {
    question: "Can you manage campaigns across different platforms?",
    answer:
      "Yes, we manage Google Ads, Meta Ads, and other major advertising platforms.",
  },
  {
    question: "Is ongoing PPC optimization included?",
    answer:
      "Yes, we provide continuous monitoring, reporting, and optimization for sustained campaign performance.",
  }
];

const BlockchainAppDevelopment = () => {
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

export default BlockchainAppDevelopment;
