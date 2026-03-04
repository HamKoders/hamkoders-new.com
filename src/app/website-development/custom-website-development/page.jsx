export const metadata = {
  title: "Custom Web Development Services for Unique Digital Solutions",
  description:
    "We deliver custom web development services tailored to your brand — smart, scalable, and built to perform across every device, from first click to final result.",
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

import vector from "../../../../public/images/custom-web-vector.png";

import service1 from "../../../../public/images/website-services/custom-website-development/1.png";
import service2 from "../../../../public/images/website-services/custom-website-development/2.png";
import service3 from "../../../../public/images/website-services/custom-website-development/3.png";
import service4 from "../../../../public/images/website-services/custom-website-development/4.png";
import service5 from "../../../../public/images/website-services/custom-website-development/5.png";
import service6 from "../../../../public/images/website-services/custom-website-development/6.png";

import discussCtaImage from "../../../../public/images/discuss-cta-image-c-web-dev.png";

import signVector from "../../../../public/images/sign-vector.png";

const bannerData = {
  bgImage: "/images/android-app-dev.webp",
  heading1: (
    <h1 className="same-heading">
      PROFESSIONAL<span> Web Development</span> Services
    </h1>
  ),
  para: (
    <p className="para">
      Improve your online presence with <span>Professional Web Development </span> Services that deliver modern design, smooth performance, and powerful functionality to attract, engage, and convert visitors.
    </p>
  ),
  image: vector,
  imageAlt: "vector",
};

const serviceData = {
  heading1: (
    <h2 className="same-heading">
      CREATING NEW OPPORTUNITIES <br /> <span> for Business Success</span>
    </h2>
  ),
  para: "Our web development services focus on speed, security, and SEO optimization, delivering measurable results, improved performance, and seamless digital experiences that increase engagement and business growth.",
  serviceBox: [
    {
      image: service1,
      heading4: (
        <h4>
          Strategic Digital <br />
          Foundation
        </h4>
      ),
      para: "At Hamkoders, we craft websites with a clear structure and future-ready framework that supports long-term business growth. Every project is built with scalability in mind, allowing your digital presence to evolve smoothly as your brand expands.",
    },
    {
      image: service2,
      heading4: (
        <h4>
          Stronger User <br />
          Engagement
        </h4>
      ),
      para: "Our design approach focuses on intuitive layouts and effortless navigation that keep visitors interested and interacting. We build seamless user journeys that encourage trust, improve engagement, and convert visitors into loyal customers.",
    },
    {
      image: service3,
      heading4: (
        <h4>
          High-Speed <br />
          Performance 
        </h4>
      ),
      para: "Using modern development techniques and optimized coding practices, we ensure websites load quickly and function flawlessly. Faster performance improves user experience, strengthens search visibility, and increases conversion opportunities.",
    },
    {
      image: service4,
      heading4: (
        <h4>
          Advanced Security  <br />
          Protection
        </h4>
      ),
      para: "Every website is built with strong security layers that safeguard data, transactions, and sensitive information. Continuous monitoring and proactive protection help maintain a secure and reliable digital environment.",
    },
    {
      image: service5,
      heading4: (
        <h4>
          Search Engine <br />
          Presence
        </h4>
      ),
      para: "We incorporate search optimization principles throughout development to enhance online visibility and organic reach. Our goal is to ensure your website attracts the right audience while maintaining a strong digital presence.",
    },
    {
      image: service6,
      heading4: (
        <h4>
          Real Business  <br />
          Results
        </h4>
      ),
      para: "Our strategic development process focuses on measurable outcomes that support brand growth and lead generation. By aligning technology with business goals, we deliver platforms designed for long-term success.",
    },
  ],
  btnText: "Start Custom Website Development",
};

const discussCtaData = {
  heading1: <h2 className="same-heading">Build a Powerful </h2>,
  heading2: (
      <h3 className="same-heading">
        <span>Digital Future</span>
      </h3>
    ),
  para: "Custom Web DevelopmentPartner with Hamkoders to transform your online presence into a powerful growth platform. Our experienced team creates custom, performance-driven websites designed to engage audiences and strengthen your digital brand.",
  image: discussCtaImage,
};

const demandCompData = {
  heading1: (
    <h2 className="same-heading">
      Custom <span> Web Development </span>  Designed for Performance
    </h2>
  ),
  para: 'We develop modern websites built to support long-term business success. Our Custom Web Development Services focus on speed, flexibility, and reliability while delivering tailored solutions aligned with your goals. Every platform we create is built to enhance engagement, support expansion, and produce measurable results.',
  demandBox: [
    {
      heading4: (
        <h4>Development  <br /> Strategy</h4>
      ),
      para: 'We design websites aligned with your business objectives and industry requirements, ensuring strong functionality and lasting digital value.',
      image: signVector
    },
    {
      heading4: (
        <h4>High-Performance  <br /> Architecture</h4>
      ),
      para: 'Our development approach delivers fast, stable, and optimized websites that improve user experience and strengthen search visibility.',
      image: signVector
    },
    {
      heading4: (
        <h4>Scalable Solutions  <br /> for Growth</h4>
      ),
      para: 'We create flexible website systems that adapt easily as your business grows, allowing smooth upgrades and future expansion.',
      image: signVector
    },
    {
      heading4: (
        <h4>Secure and Reliable  <br /> Framework</h4>
      ),
      para: 'We integrate strong security protocols to protect data, maintain compliance, and ensure a trustworthy digital experience for users.',
      image: signVector
    }
  ]
}

const faqs = [
  {
    question: "What are Custom Web Development Services?",
    answer:
      "Custom web development involves creating a website specifically designed for your business needs. Unlike template-based platforms, custom development provides flexibility, better performance, and unique design tailored to your brand.",
  },
  {
    question: "How long does it take to develop a custom website?",
    answer:
      "Project timelines depend on the complexity, design requirements, and features involved. In most cases, a custom website can take between 4 to 12 weeks, including planning, development, testing, and launch.",
  },
  {
    question: "Why should I choose custom development over a website builder?",
    answer:
      "Custom development offers greater flexibility, stronger performance, and a unique design that reflects your brand identity. It also allows advanced functionality and better scalability for future growth.",
  },
  {
    question: "Will my website be mobile-friendly and SEO-optimized?",
    answer:
      "Yes. Every website we build is designed to work smoothly across all devices and includes search optimization practices to improve online visibility.",
  },
  {
    question: "Can you integrate third-party tools or platforms into my website?",
    answer:
      "Absolutely. We can integrate payment systems, CRM tools, marketing platforms, and other third-party services to enhance website functionality.",
  },
  {
    question: "Do you offer ongoing support after the website launch?",
    answer:
      "Yes. Hamkoders provides continuous support, updates, and improvements to ensure your website remains secure, optimized, and aligned with your business growth.",
  }
];

const CustomWebDevelopment = () => {
  return (
    <PageLayout>
      <AndroidAppBanner bannerData={bannerData} />
      <FeaturedBrands heading={"Trusted by"} headingSpan={"GLOBAL Brands"} />
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

export default CustomWebDevelopment;
