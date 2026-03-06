export const metadata = {
  title: "Custom Android App Development for Growth-Ready Businesses",
  description:
    "We deliver custom Android app development services that blend sleek design, smooth performance, and scalability—built to engage users across all devices.",
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

import vector from "../../../../public/images/android-app-vector.png";

import service1 from "../../../../public/images/app-services/android-development/1.png";
import service2 from "../../../../public/images/app-services/android-development/2.png";
import service3 from "../../../../public/images/app-services/android-development/3.png";
import service4 from "../../../../public/images/app-services/android-development/4.png";
import service5 from "../../../../public/images/app-services/android-development/5.png";
import service6 from "../../../../public/images/app-services/android-development/6.png";

import discussCtaImage from "../../../../public/images/android-cta.png";

import signVector from "../../../../public/images/sign-vector.png";

const bannerData = {
  bgImage: "/images/enterprise-dev-banner.webp",
  heading1: (
    <h1 className="same-heading">
      Powerful<span> Android App </span>Development
    </h1>
  ),
  para: (
    <p className="para">
      Hamkoders android app development services build high-performing, user-friendly apps with smooth design and reliable functionality to expand reach and increase user engagement.
    </p>
  ),
  image: vector,
  imageAlt: "vector",
};

const serviceData = {
  heading1: (
    <h2 className="same-heading">
      Building Android Apps<br /> <span>That Engage and Perform</span>
    </h2>
  ),
  para: " Our Android app development process focuses on creating fast, scalable, and user-friendly apps that strengthen engagement and support your core business goals.",
  serviceBox: [
    {
      image: service1,
      heading4: (
        <h4>
          Custom App<br />
          Architecture
        </h4>
      ),
      para: "We build Android apps with scalable and reliable architecture designed to support growth and changing user demands while maintaining strong performance.",
    },
    {
      image: service2,
      heading4: (
        <h4>
          User-Focused <br />
          UI/UX Design
        </h4>
      ),
      para: "Our team designs intuitive, visually appealing interfaces that are simple to use, improving user satisfaction, retention, and overall engagement.",
    },
    {
      image: service3,
      heading4: (
        <h4>
          Optimized<br />
          Performance
        </h4>
      ),
      para: "We follow efficient coding practices and thorough testing to ensure fast, responsive performance across all Android devices for better engagement.",
    },
    {
      image: service4,
      heading4: (
        <h4>
          Data Security<br />
          and Privacy
        </h4>
      ),
      para: "We apply secure authentication, encrypted storage, and strict protection standards to keep user data safe and business information secure.",
    },
    {
      image: service5,
      heading4: (
        <h4>
          Google Play <br />
          Store Ready
        </h4>
      ),
      para: "We prepare your app to meet all Google Play requirements, ensuring smooth approval, improved visibility, and stronger discoverability.",
    },
    {
      image: service6,
      heading4: (
        <h4>
          Ongoing Maintenance<br />
          and Updates
        </h4>
      ),
      para: "After launch, we provide updates, support, and improvements to keep your Android app secure, updated, and performing efficiently.",
    },
  ],
  btnText: "Start Android App Development",
};

const discussCtaData = {
  heading1: <h2 className="same-heading">Empower Brands with</h2>,
  heading2: (
      <h3 className="same-heading">
        <span>Robust Android Apps</span>
      </h3>
    ),
  para: "Partner with Hamkoders to build powerful Android apps for your business. We create mobile solutions that engage users, simplify operations, and grow with your business.",
  image: discussCtaImage,
};

const demandCompData = {
  heading1: (
    <h2 className="same-heading">
      Android App Development Solutions<span> Designed for Performance</span>
    </h2>
  ),
  para: 'Our Android app development services combine advanced technology with smart design to deliver high-performing, visually refined mobile apps. By building Android applications, Hamkoders ensures reliable functionality, strong brand impact, and user satisfaction through quality execution, smooth performance, and long-term business growth.',
  demandBox: [
    {
      heading4: (
        <h4>Strategic <br /> Planning</h4>
      ),
      para: 'We align app structure and functionality with business objectives to provide clear direction and measurable outcomes.',
      image: signVector
    },
    {
      heading4: (
        <h4>High-Performance<br />App</h4>
      ),
      para: 'We develop responsive, stable, and efficient applications that maintain consistent performance under all usage conditions.',
      image: signVector
    },
    {
      heading4: (
        <h4>Future-Proof<br />Apps</h4>
      ),
      para: 'We create applications ready for new features, integrations, and updates without compromising speed or user experience.',
      image: signVector
    },
    {
      heading4: (
        <h4>Comprehensive <br /> Security</h4>
      ),
      para: 'We focus on data protection with encrypted storage, secure authentication, and proactive monitoring throughout development.',
      image: signVector
    }
  ]
}

const faqs = [
  {
    question: "What is Android app development?",
    answer:
      "Android app development involves designing and building mobile applications for Android devices using secure, scalable, and performance-driven technologies.",
  },
  {
    question: "How long does it take to develop an Android app?",
    answer:
      "Development timelines usually range from 8 to 16 weeks depending on complexity, design structure, and required features.",
  },
  {
    question: "Will my Android app work on all devices?",
    answer:
      "Yes, we ensure compatibility across major Android devices, screen sizes, and operating system versions.",
  },
  {
    question: "Can you assist with Google Play Store submission?",
    answer:
      "Yes, we handle compliance checks, optimization, and submission processes for a smooth Google Play Store launch.",
  },
  {
    question: "Do you provide post-launch support for Android apps?",
    answer:
      "Yes, Hamkoders offers ongoing updates, monitoring, and technical support after launch.",
  },
  {
    question: "Can the Android app integrate with other systems?",
    answer:
      "Yes, we integrate Android apps with CRM, ERP, payment systems, and other business platforms for seamless operation",
  }
];

const AndroidAppDevelopment = () => {
  return (
    <PageLayout>
      <AndroidAppBanner bannerData={bannerData} />
      <FeaturedBrands heading={"Trusted by"} headingSpan={"Global Brands"} />
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

export default AndroidAppDevelopment;
