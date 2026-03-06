export const metadata = {
  title: "Hybrid Mobile App Development Services for Faster Launches",
  description:
    "We provide hybrid mobile app development services that combine speed, flexibility, and reach—one codebase, smooth performance across iOS and Android platforms.",
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

import vector from "../../../../public/images/hybrid-app-vector.png";

import service1 from "../../../../public/images/app-services/hybrid-app-development/1.png";
import service2 from "../../../../public/images/app-services/hybrid-app-development/2.png";
import service3 from "../../../../public/images/app-services/hybrid-app-development/3.png";
import service4 from "../../../../public/images/app-services/hybrid-app-development/4.png";
import service5 from "../../../../public/images/app-services/hybrid-app-development/5.png";
import service6 from "../../../../public/images/app-services/hybrid-app-development/6.png";

import discussCtaImage from "../../../../public/images/discuss-cta-image.png";

import signVector from "../../../../public/images/sign-vector.png";

const bannerData = {
  bgImage: "/images/front-end-banner.webp",
  heading1: (
    <h1 className="same-heading">
      Innovative<span> Hybrid App </span>Development
    </h1>
  ),
  para: (
    <p className="para">
     Hamkoders hybrid mobile app development services build powerful, high-speed apps that combine web technology flexibility with native performance for smooth and seamless mobile experiences.
    </p>
  ),
  image: vector,
  imageAlt: "vector",
};

const serviceData = {
  heading1: (
    <h2 className="same-heading">
      Building Hybrid Apps That<br /> <span>Perform Everywhere</span>
    </h2>
  ),
  para: "We create hybrid app solutions that deliver fast, reliable performance and consistent visuals on iOS and Android, optimizing every feature for usability and steady business growth.",
  serviceBox: [
    {
      image: service1,
      heading4: (
        <h4>
          Single<br />
          Codebase
        </h4>
      ),
      para: " We develop apps using a unified codebase for iOS and Android, reducing development time, costs, and maintenance efforts efficiently.",
    },
    {
      image: service2,
      heading4: (
        <h4>
          Consistent<br />
          UI/UX
        </h4>
      ),
      para: "Our team designs interfaces that maintain consistency and deliver an intuitive experience across all devices, improving engagement and brand percep",
    },
    {
      image: service3,
      heading4: (
        <h4>
          Optimized<br />
          Performance
        </h4>
      ),
      para: "With efficient coding and smart optimization techniques, we ensure hybrid apps run smoothly, reduce delays, and improve responsiveness.",
    },
    {
      image: service4,
      heading4: (
        <h4>
          Secure<br />
          Data
        </h4>
      ),
      para: "We apply strong security measures, including encryption and secure authentication, to protect sensitive data and maintain user trust.    ",
    },
    {
      image: service5,
      heading4: (
        <h4>
          Cost-Effective <br />
          Development
        </h4>
      ),
      para: "Hybrid apps enable faster delivery and reduced costs compared to separate native builds while maintaining performance and quality. ",
    },
    {
      image: service6,
      heading4: (
        <h4>
          Ongoing <br />
          Support
        </h4>
      ),
      para: "We provide continuous monitoring, updates, and feature improvements to keep hybrid apps secure, updated, and performing reliably over time.",
    },
  ],
  btnText: "Start Hybrid App Development",
};

const discussCtaData = {
  heading1: <h2 className="same-heading">Maximize Reach with</h2>,
  heading2: (
      <h3 className="same-heading">
        <span>Hybrid App Solutions</span>
      </h3>
    ),
  para: "Partner with Hamkoders for scalable, multi-device apps. Our hybrid solutions deliver efficiency, performance, and engaging experiences that support measurable business growth.",
  image: discussCtaImage,
};

const demandCompData = {
  heading1: (
    <h2 className="same-heading">
      Hybrid App Development Solutions Designed<span> for Efficiency and Growth</span>
    </h2>
  ),
  para: 'Our hybrid mobile app development services combine technology, strategy, and smart design to build reliable, high-performing apps across platforms. Through hybrid Android app development, Hamkoders delivers cost-effective, scalable solutions that improve efficiency, shorten development time, and ensure seamless user experiences for long-term digital growth.',
  demandBox: [
    {
      heading4: (
        <h4>Strategic Planning <br /> and Design</h4>
      ),
      para: 'We align app structure, features, and functionality with business objectives to deliver measurable and practical value.',
      image: signVector
    },
    {
      heading4: (
        <h4>Optimized Cross-Platform<br />Architecture</h4>
      ),
      para: 'Our apps maintain responsiveness, speed, and smooth performance across both iOS and Android devices.',
      image: signVector
    },
    {
      heading4: (
        <h4>Scalable and<br />Adaptable Solutions</h4>
      ),
      para: 'We create modular hybrid apps that support new features, integrations, and updates without affecting performance.',
      image: signVector
    },
    {
      heading4: (
        <h4>Security and <br /> Compliance</h4>
      ),
      para: 'RStrong security practices protect user and business data, ensuring safe, stable, and reliable application usage.',
      image: signVector
    }
  ]
}

const faqs = [
  {
    question: "What is hybrid app development?",
    answer:
      "Hybrid app development builds applications using a shared codebase that runs efficiently on multiple platforms, including iOS and Android.",
  },
  {
    question: "What technologies do you use for hybrid apps?",
    answer:
      "We use frameworks such as Ionic, Flutter, and React Native to develop fast, responsive, and cross-platform compatible applications.",
  },
  {
    question: "How long does it take to develop a hybrid app?",
    answer:
      "Hybrid app development typically takes between 6 to 14 weeks depending on features, integrations, and project scope.",
  },
  {
    question: "Will the app work seamlessly on all devices?",
    answer:
      "Yes, we ensure hybrid apps deliver consistent performance and usability across supported devices and operating systems.",
  },
  {
    question: "Can hybrid apps integrate with other systems?",
    answer:
      " Yes, hybrid applications can integrate smoothly with APIs, CRM, ERP, and other business systems.",
  },
  {
    question: "Do you provide post-launch maintenance for hybrid apps?",
    answer:
      "Yes, Hamkoders offers ongoing updates, monitoring, and technical support after launch.",
  }
];

const HybridAppDevelopment = () => {
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

export default HybridAppDevelopment;
