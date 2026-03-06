export const metadata = {
  title: "Custom iOS App Development Services for High-Impact Apps",
  description:
    "We create custom iOS app development services that blend design, performance, and user experience—perfect for startups, brands, and growing businesses.",
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

import vector from "../../../../public/images/ios-app-vector.png";

import service1 from "../../../../public/images/app-services/ios-app-development/1.png";
import service2 from "../../../../public/images/app-services/ios-app-development/2.png";
import service3 from "../../../../public/images/app-services/ios-app-development/3.png";
import service4 from "../../../../public/images/app-services/ios-app-development/4.png";
import service5 from "../../../../public/images/app-services/ios-app-development/5.png";
import service6 from "../../../../public/images/app-services/ios-app-development/6.png";

import discussCtaImage from "../../../../public/images/ios-cta.png";

import signVector from "../../../../public/images/sign-vector.png";

const bannerData = {
  bgImage: "/images/android-app-dev.webp",
  heading1: (
    <h1 className="same-heading">
      High-Quality<span> iOS App </span>Development
    </h1>
  ),
  para: (
    <p className="para">
     Hamkoders’ custom iOS app development services deliver high-performance, user-friendly apps with seamless design and reliable functionality to strengthen brand engagement.
    </p>
  ),
  image: vector,
  imageAlt: "vector",
};

const serviceData = {
  heading1: (
    <h2 className="same-heading">
      Building iOS Apps<br /> <span>That Engage  Users</span>
    </h2>
  ),
  para: "Our iOS app development delivers fast, visually refined, and user-friendly applications that improve user experience, strengthen brand visibility, and provide smooth functionality from planning to final deployment.",
  serviceBox: [
    {
      image: service1,
      heading4: (
        <h4>
          App<br />
          Architecture
        </h4>
      ),
      para: " We design applications with scalable architecture that supports future upgrades and expanding user bases. Every build ensures strong performance, stability, and long-term reliability.",
    },
    {
      image: service2,
      heading4: (
        <h4>
          UI/UX <br />
          Design
        </h4>
      ),
      para: "Our team develops visually appealing interfaces that are simple to navigate. Smart design choices help create smooth interactions and improve long-term user engagement.",
    },
    {
      image: service3,
      heading4: (
        <h4>
          Performance<br />
          Optimization
        </h4>
      ),
      para: "We follow efficient coding standards and detailed testing to maintain smooth performance across iOS devices. Fast and responsive apps improve satisfaction and engagement.",
    },
    {
      image: service4,
      heading4: (
        <h4>
          Security and<br />
          Data
        </h4>
      ),
      para: "We apply secure authentication, encrypted storage, and strict compliance standards to protect user information and safeguard valuable business data consistently.",
    },
    {
      image: service5,
      heading4: (
        <h4>
          App Store <br />
          Readiness 
        </h4>
      ),
      para: " From compliance checks to final submission, we prepare iOS apps for smooth App Store launches and improved visibility to reach wider audiences.",
    },
    {
      image: service6,
      heading4: (
        <h4>
          Ongoing Support<br />
          and Updates
        </h4>
      ),
      para: "We provide continuous maintenance, updates, and feature improvements to keep applications secure, relevant, and aligned with changing user expectations.",
    },
  ],
  btnText: "Start iOS App Development",
};

const discussCtaData = {
  heading1: <h2 className="same-heading">Empower Brand with</h2>,
  heading2: (
      <h3 className="same-heading">
        <span>Powerful iOS Apps</span>
      </h3>
    ),
  para: "Partner with Hamkoders to deliver excellence in mobile user experience. Our iOS apps are designed to engage users, increase conversions, and scale as your business grows.",
  image: discussCtaImage,
};

const demandCompData = {
  heading1: (
    <h2 className="same-heading">
      iOS App Development Solutions<span> Personalized for Performance</span>
    </h2>
  ),
  para: 'Our custom iOS app development services focus on innovation, design, and smooth performance. By creating apps for iOS, Hamkoders delivers personalized, high-performing mobile solutions that engage users, strengthen brand presence, and achieve measurable business results through advanced technology and seamless user experiences.',
  demandBox: [
    {
      heading4: (
        <h4>Strategic App <br /> Planning</h4>
      ),
      para: 'We align app objectives with business goals, building a clear roadmap for development, functionality, and future-ready features.',
      image: signVector
    },
    {
      heading4: (
        <h4>Optimized App <br />Architecture</h4>
      ),
      para: 'We build fast, stable, and maintainable apps that ensure reliable performance across different devices and varying user loads.',
      image: signVector
    },
    {
      heading4: (
        <h4>Future-Ready<br />Apps</h4>
      ),
      para: 'Our applications support new features, integrations, and updates while maintaining consistent and uninterrupted performance.',
      image: signVector
    },
    {
      heading4: (
        <h4>Security <br /> Measures</h4>
      ),
      para: 'We maintain strong data protection and compliance using secure authentication and encrypted storage throughout development.',
      image: signVector
    }
  ]
}

const faqs = [
  {
    question: "What is iOS app development?",
    answer:
      "iOS app development involves designing and building mobile applications specifically for Apple devices using modern tools and performance-focused technologies.",
  },
  {
    question: "How long does it take to develop an iOS app?",
    answer:
      "Development timelines depend on features and complexity. Most iOS applications take around 8 to 16 weeks from planning to final App Store submission.",
  },
  {
    question: "Will my app be compatible with all iOS devices?",
    answer:
      "Yes, we ensure apps are fully optimized and compatible across iPhones, iPads, and major iOS versions.",
  },
  {
    question: "Can you assist with App Store submission?",
    answer:
      "Yes, we handle App Store guidelines, optimization, and submission to ensure a smooth and successful launch.",
  },
  {
    question: "Do you provide post-launch support for iOS apps?",
    answer:
      "Yes, Hamkoders offers ongoing updates, monitoring, and maintenance to keep apps secure and high-performing.",
  },
  {
    question: "Can the iOS app integrate with existing systems?",
    answer:
      "Yes, we integrate iOS apps with CRM, ERP, and other platforms to ensure seamless data flow and business operations.",
  }
];

const IOSAppDevelopment = () => {
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

export default IOSAppDevelopment;
