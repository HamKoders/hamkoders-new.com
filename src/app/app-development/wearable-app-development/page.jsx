export const metadata = {
  title: "Wearable App Development Services for Smarter User Connection",
  description:
    "We deliver wearable app development services designed for speed, usability, and real-world performance—helping your brand connect with users on the move.",
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

import vector from "../../../../public/images/wearable-app-vector.png";

import service1 from "../../../../public/images/app-services/wearable-app-development/1.png";
import service2 from "../../../../public/images/app-services/wearable-app-development/2.png";
import service3 from "../../../../public/images/app-services/wearable-app-development/3.png";
import service4 from "../../../../public/images/app-services/wearable-app-development/4.png";
import service5 from "../../../../public/images/app-services/wearable-app-development/5.png";
import service6 from "../../../../public/images/app-services/wearable-app-development/6.png";

import discussCtaImage from "../../../../public/images/wearable-cta-image.png";

import signVector from "../../../../public/images/sign-vector.png";

const bannerData = {
  bgImage: "/images/webapp-dev-banner.webp",
  heading1: (
    <h1 className="same-heading">
      Advanced <span> Wearable App </span>Development
    </h1>
  ),
  para: (
    <p className="para">
      Hamkoders wearable app development services create smart applications for watches, fitness trackers, and IoT devices, delivering real-time features, accurate tracking, and smooth user experiences.
    </p>
  ),
  image: vector,
  imageAlt: "vector",
};

const serviceData = {
  heading1: (
    <h2 className="same-heading">
      Designing Wearable Apps<br /> <span>That Improve Daily Life</span>
    </h2>
  ),
  para: "Our wearable app development focuses on usability, speed, and connectivity, delivering applications that provide insights, simplify interactions, and keep users engaged directly through wearable devices.",
  serviceBox: [
    {
      image: service1,
      heading4: (
        <h4>
          In-built<br />
          User Interface
        </h4>
      ),
      para: "We design interfaces tailored for small screens, ensuring interactions remain simple, clear, and user-friendly for a smooth wearable experience.",
    },
    {
      image: service2,
      heading4: (
        <h4>
          Real-Time<br />
          Integration
        </h4>
      ),
      para: "Our wearable apps sync seamlessly with sensors and IoT devices, delivering real-time data, analytics, and instant notifications for better user engagement.",
    },
    {
      image: service3,
      heading4: (
        <h4>
          Performance <br />
          Optimization
        </h4>
      ),
      para: "We build lightweight and efficient apps that maintain stable performance and smooth functionality without overusing device resources.",
    },
    {
      image: service4,
      heading4: (
        <h4>
          Cross-Platform <br />
          Compatibility
        </h4>
      ),
      para: "Our wearable applications work across Apple Watch, Wear OS, and other connected devices, ensuring consistent performance and usability",
    },
    {
      image: service5,
      heading4: (
        <h4>
          Secure Data <br />
          Handling
        </h4>
      ),
      para: "We apply strong security standards and encryption to protect health, fitness, and personal data, ensuring safe and reliable usage.",
    },
    {
      image: service6,
      heading4: (
        <h4>
          Post-Launch<br />
          Support
        </h4>
      ),
      para: "We provide continuous monitoring, updates, and improvements to keep wearable apps secure, stable, and performing efficiently.",
    }
  ],
  btnText: "Start Wearable App Development",
};

const discussCtaData = {
  heading1: <h2 className="same-heading">Empower Users with</h2>,
  heading2: (
      <h3 className="same-heading">
        <span>Smart Wearable Apps</span>
      </h3>
    ),
  para: "Partner with Hamkoders for wearable app development, building functional, engaging, and secure applications that improve performance and deliver strong user satisfaction.",
  image: discussCtaImage,
  width: "521px"
};

const demandCompData = {
  heading1: (
    <h2 className="same-heading">
      Wearable App Development Solutions<span> for Connected Devices</span>
    </h2>
  ),
  para: 'Our wearable app development services combine thoughtful design, advanced technology, and real-time connectivity to build reliable, high-performing applications. Through watchOS and wearable platform development, Hamkoders delivers engaging, seamless experiences that enhance functionality and improve user interaction across connected devices.',
  demandBox: [
    {
      heading4: (
        <h4>Strategic App <br />Planning</h4>
      ),
      para: 'We outline objectives, core features, and device specifications to ensure wearable applications effectively address real user needs.',
      image: signVector
    },
    {
      heading4: (
        <h4>Optimized UI/UX <br />for Wearables</h4>
      ),
      para: 'Interfaces are crafted for small screens and quick actions, improving usability, engagement, and overall user experience.',
      image: signVector
    },
    {
      heading4: (
        <h4>High-Performance <br />Architecture</h4>
      ),
      para: 'Our applications are lightweight and efficient, optimized for low battery consumption while maintaining stable and consistent performance.',
      image: signVector
    },
    {
      heading4: (
        <h4>Security and <br /> Compliance</h4>
      ),
      para: 'WWe focus on strong data protection and compliance with health, fitness, and device-related standards to safeguard users.',
      image: signVector
    }
  ]
}

const faqs = [
  {
    question: "What is wearable app development?",
    answer:
      "Wearable app development involves building applications specifically designed for smartwatches, fitness bands, and connected IoT devices.",
  },
  {
    question: "Which devices do you develop apps for?",
    answer:
      "We build apps for Apple Watch, Wear OS devices, and various IoT-enabled wearable platforms.",
  },
  {
    question: "How long does it take to develop a wearable app?",
    answer:
      "Development timelines usually range from 6 to 12 weeks depending on features, integrations, and device compatibility.",
  },
  {
    question: "Will the wearable app integrate with other devices or apps?",
    answer:
      "Yes, wearable apps can connect seamlessly with smartphones, cloud systems, and third-party applications.",
  },
  {
    question: "How do you ensure data security in wearable apps?",
    answer:
      "We implement encryption, secure authentication, and compliance standards to protect sensitive user information.",
  },
  {
    question: "Do you provide post-launch support for wearable apps?",
    answer:
      "Yes, we offer continuous updates, monitoring, and technical support to maintain performance and security.",
  }
];

const WearableAppDevelopment = () => {
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

export default WearableAppDevelopment;
