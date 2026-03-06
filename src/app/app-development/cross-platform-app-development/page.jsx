export const metadata = {
  title: "Cross Platform App Development Services for Every Device",
  description:
    "We offer cross platform app development services that save time and cost—build once, launch everywhere with smooth performance across iOS, Android, and the web.",
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

import vector from "../../../../public/images/cross-platform-app-vector.png";

import service1 from "../../../../public/images/app-services/cross-platform-app-development/1.png";
import service2 from "../../../../public/images/app-services/cross-platform-app-development/2.png";
import service3 from "../../../../public/images/app-services/cross-platform-app-development/3.png";
import service4 from "../../../../public/images/app-services/cross-platform-app-development/4.png";
import service5 from "../../../../public/images/app-services/cross-platform-app-development/5.png";
import service6 from "../../../../public/images/app-services/cross-platform-app-development/6.png";

import discussCtaImage from "../../../../public/images/discuss-cta-image.png";

import signVector from "../../../../public/images/sign-vector.png";

const bannerData = {
  bgImage: "/images/webapp-dev-banner.webp",
  heading1: (
    <h1 className="same-heading">
      Cross-Platform <span>App Development</span>
    </h1>
  ),
  para: (
    <p className="para">
      Hamkoders cross platform app development services deliver seamless, high-performing applications with consistent design and optimized functionality across iOS, Android, and web platforms.
    </p>
  ),
  image: vector,
  imageAlt: "vector",
};

const serviceData = {
  heading1: (
    <h2 className="same-heading">
      Building Apps That<br /> <span>Run Everywhere</span>
    </h2>
  ),
  para: "Our cross-platform app development delivers reliable performance across all devices and operating systems, ensuring consistent speed, usability, and smooth user experiences on every platform.",
  serviceBox: [
    {
      image: service1,
      heading4: (
        <h4>
          Unified App<br />
          Architecture
        </h4>
      ),
      para: "We create a single codebase that works efficiently on iOS, Android, and web platforms, reducing development time while maintaining consistent performance.",
    },
    {
      image: service2,
      heading4: (
        <h4>
          Consistent User <br />
          Interface
        </h4>
      ),
      para: " Our team designs interfaces that provide the same quality experience across all devices, improving usability, engagement, and brand consistency.",
    },
    {
      image: service3,
      heading4: (
        <h4>
          Optimized<br />
          Performance
        </h4>
      ),
      para: "We follow proven coding standards and testing methods to maintain stable performance across platforms, improving user satisfaction and reliability.",
    },
    {
      image: service4,
      heading4: (
        <h4>
          Secure and <br />
          Reliable Systems
        </h4>
      ),
      para: "We apply strong security measures, encrypted storage, and secure communication protocols to protect user and business data on every platform.",
    },
    {
      image: service5,
      heading4: (
        <h4>
          Cost-Effective <br />
          Development
        </h4>
      ),
      para: "With one codebase for multiple platforms, we reduce development costs, simplify maintenance, and maintain consistent application performance.",
    },
    {
      image: service6,
      heading4: (
        <h4>
          Post-Launch Support<br />
          and Updates
        </h4>
      ),
      para: "We provide continuous monitoring, updates, and improvements to keep applications secure, updated, and performing smoothly across all platforms.",
    },
  ],
  btnText: "Start Cross Platform App Development",
};

const discussCtaData = {
  heading1: <h2 className="same-heading">Empower Business with</h2>,
  heading2: (
      <h3 className="same-heading">
        <span>Cross-Platform Solutions</span>
      </h3>
    ),
  para: "Partner with Hamkoders to build apps that deliver a smooth user experience on every device. Our cross-platform development approach ensures wider reach, efficiency, and measurable business results.",
  image: discussCtaImage,
};

const demandCompData = {
  heading1: (
    <h2 className="same-heading">
      Cross-Platform App Development Solutions<span> Personalized for Performance</span>
    </h2>
  ),
  para: 'Our cross platform app development services combine modern technology with strategic design to deliver smooth, high-performing applications. By developing mobile apps cross platform, Hamkoders ensures consistent functionality, scalability, and user experience across devices, helping businesses reach wider audiences efficiently while maintaining top performance and reliability.',
  demandBox: [
    {
      heading4: (
        <h4>Strategic App <br /> Planning</h4>
      ),
      para: 'We build a clear roadmap that aligns business goals with cross-platform compatibility, ensuring every feature supports performance and usability.',
      image: signVector
    },
    {
      heading4: (
        <h4>High-Performance <br />Architecture</h4>
      ),
      para: 'Our solutions deliver speed, responsiveness, and stability across devices to maintain a consistent and reliable user experience.',
      image: signVector
    },
    {
      heading4: (
        <h4>Scalable and<br />Future-Ready Apps</h4>
      ),
      para: 'We develop scalable and flexible apps that support new features and integrations without disrupting performance.',
      image: signVector
    },
    {
      heading4: (
        <h4>Security Across <br /> Platforms</h4>
      ),
      para: 'Our apps include strong protection with encrypted data and secure authentication, safeguarding user and business information across all platforms.',
      image: signVector
    }
  ]
}

const faqs = [
  {
    question: "What is cross-platform app development?",
    answer:
      "Cross-platform app development creates mobile applications that run smoothly on iOS, Android, and web platforms using a single, efficient codebase.",
  },
  {
    question: "What technologies do you use for cross-platform apps?",
    answer:
      "We use frameworks like React Native, Flutter, and Xamarin to ensure apps run efficiently on all devices while maintaining high performance.",
  },
  {
    question: "How long does it take to develop a cross-platform app?",
    answer:
      "Most cross-platform apps take between 6 to 14 weeks depending on features, integrations, and overall design complexity.",
  },
  {
    question: "Will the app perform the same on all devices?",
    answer:
      "Yes, our development process ensures consistent performance, speed, and usability across all supported platforms and devices.",
  },
  {
    question: "Can cross-platform apps integrate with existing systems?",
    answer:
      "Yes, we ensure smooth integration with existing software, APIs, and third-party tools to maintain continuous business operations.",
  },
  {
    question: "Do you provide maintenance and updates post-launch?",
    answer:
      "Yes, we offer ongoing updates, monitoring, and support to keep your cross-platform app secure, updated, and performing efficiently.",
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
