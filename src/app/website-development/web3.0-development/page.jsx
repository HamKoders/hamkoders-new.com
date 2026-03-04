export const metadata = {
  title: "Web 3.0 Development Services Agency for Scalable Innovation",
  description:
    "We offer web 3.0 development services designed for a decentralized future — secure, scalable, and built to help your brand grow in the evolving digital space.",
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

import vector from "../../../../public/images/web3.0-vector.png";

import service1 from "../../../../public/images/website-services/web3.0-development/1.png";
import service2 from "../../../../public/images/website-services/web3.0-development/2.png";
import service3 from "../../../../public/images/website-services/web3.0-development/3.png";
import service4 from "../../../../public/images/website-services/web3.0-development/4.png";
import service5 from "../../../../public/images/website-services/web3.0-development/5.png";
import service6 from "../../../../public/images/website-services/web3.0-development/6.png";

import discussCtaImage from "../../../../public/images/discuss-cta-image-web3-dev.webp";

import signVector from "../../../../public/images/sign-vector.png";

const bannerData = {
  bgImage: "/images/webapp-dev-banner.webp",
  heading1: (
    <h1 className="same-heading">
      Innovative <br /> <span>Web 3.0</span> Development
    </h1>
  ),
  para: (
    <p className="para">
      We deliver Web 3.0 development services that build secure, decentralized, and scalable platforms designed to enhance digital experiences and future-ready business solutions.
    </p>
  ),
  image: vector,
  imageAlt: "vector",
};

const serviceData = {
  heading1: (
    <h2 className="same-heading">
      BUILDING NEXT-GEN DIGITAL PLATFORMS<br /> <span>THAT POWER DECENTRALIZED SYSTEMS</span>
       
    </h2>
  ),
  para: "Our Web3 development focuses on secure, scalable, and future-ready digital platforms that support blockchain and decentralized solutions.",
  serviceBox: [
    {
      image: service1,
      heading4: (
        <h4>
          CUSTOM WEB 3.0 <br />
           ARCHITECTURE
        </h4>
      ),
      para: "We design decentralized platforms structured for transparency, security, and advanced digital functionality.",
    },
    {
      image: service2,
      heading4: (
        <h4>
          BLOCKCHAIN AND <br />
           API INTEGRATION
        </h4>
      ),
      para: " Our Web3 systems connect smart contracts, wallets, and applications to create seamless decentralized ecosystems.",
    },
    {
      image: service3,
      heading4: (
        <h4>
         HIGH-SPEED<br />
          TRANSACTION PROCESSING
        </h4>
      ),
      para: "We build optimized blockchain systems ensuring fast transactions, secure operations, and reliable performance.",
    },
    {
      image: service4,
      heading4: (
        <h4>
           ADVANCED<br />
          SECURITY LAYERS
        </h4>
      ),
      para: " Security is built into every Web3 solution with encryption, smart contract audits, and protected user access.",
    },
    {
      image: service5,
      heading4: (
        <h4>
          RESULT-DRIVEN<br />
           DIGITAL INNOVATION
        </h4>
      ),
      para: " Every Web 3.0 project is designed to deliver transparency, efficiency, and measurable digital growth.",
    },
    {
      image: service6,
      heading4: (
        <h4>
          SCALABLE WEBc<br />
           3.0 SOLUTIONS
        </h4>
      ),
      para: "Our Web 3.0 platforms are structured to scale with users and evolving blockchain technologies.",
    },
  ],
  btnText: "Start Web3.0 Development",
};

const discussCtaData = {
  heading1: <h2 className="same-heading">DRIVING GROWTH WITH </h2>,
  heading2: (
      <h3 className="same-heading">
        <span>SECURE WEB 3.0 SOLUTIONS</span>
      </h3>
    ),
  para: "Hamkoders builds scalable Web  platforms with blockchain integration, helping businesses innovate, improve security, and create future-ready digital experiences for growth.",
  image: discussCtaImage,
};

const demandCompData = {
  heading1: (
    <h2 className="same-heading">
       Web 3.0 ENGINEERED FOR<span> SECURITY AND DIGITAL INNOVATION</span>
    </h2>
  ),
  para: 'Our Web 3.0 development services deliver secure, scalable decentralized platforms for modern businesses. Hamkoders builds blockchain-based systems, smart integrations, and advanced digital solutions that support transparency, innovation, and next-generation web experiences.',
  demandBox: [
    {
      heading4: (
        <h4> Decentralization<br />  Architecture</h4>
      ),
      para: 'Build secure Web 3.0 platforms designed for transparency, scalability, and future digital ecosystems.',
      image: signVector
    },
    {
      heading4: (
        <h4>Smart <br /> Integration</h4>
      ),
      para: 'Connect blockchain networks, digital assets, and platforms with seamless secure integrations.',
      image: signVector
    },
    {
      heading4: (
        <h4>Performance<br /> Optimization</h4>
      ),
      para: 'Ensure reliable Web 3.0  performance with secure protocols and scalable infrastructure systems.',
      image: signVector
    },
    {
      heading4: (
        <h4>Secure<br />  Deployment</h4>
      ),
      para: 'Deploy decentralized platforms with strong encryption, reliability, and continuous monitoring.',
      image: signVector
    }
  ]
}

const faqs = [
  {
    question: "What is Web 3.0 development?",
    answer:
      "Web 3.0 development focuses on decentralized platforms, blockchain integration, and secure digital ecosystems",
  },
  {
    question: "Why is Web 3.0 important for businesses?",
    answer:
      " It offers transparency, security, and advanced digital ownership features for modern platforms.",
  },
  {
    question: "What technologies do you use for Web3 development?",
    answer:
      " We build blockchain-integrated systems, secure smart solutions, and scalable decentralized platforms",
  },
  {
    question: "Can you integrate Web 3.0  into existing platforms?",
    answer:
      " Yes, we connect blockchain features with existing websites and applications seamlessly.",
  },
  {
    question: "Are Web 3.0 platforms scalable?",
    answer:
      "Our Web 3.0 solutions are designed for scalability, security, and long-term digital innovation.",
  },
  {
    question: "Do you provide Web 3.0  support?",
    answer:
      " Yes, we offer maintenance, upgrades, and monitoring for decentralized platforms",
  }
];

const Web3Development = () => {
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

export default Web3Development;
