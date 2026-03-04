export const metadata = {
  title: "Custom Web App Development That Powers Growth and Innovation",
  description:
    "We offer custom web app development crafted for performance, scalable, reliable, and tailored to deliver smooth, user-friendly experiences across all platforms.",
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

import vector from "../../../../public/images/web-app-vector.png";

import service1 from "../../../../public/images/website-services/web-app-development/1.png";
import service2 from "../../../../public/images/website-services/web-app-development/2.png";
import service3 from "../../../../public/images/website-services/web-app-development/3.png";
import service4 from "../../../../public/images/website-services/web-app-development/4.png";
import service5 from "../../../../public/images/website-services/web-app-development/5.png";
import service6 from "../../../../public/images/website-services/web-app-development/6.png";

import discussCtaImage from "../../../../public/images/discuss-cta-image-web-app-dev.webp";

import signVector from "../../../../public/images/sign-vector.png";

const bannerData = {
  bgImage: "/images/webapp-dev-banner.webp",
  heading1: (
    <h1 className="same-heading">
      Web <span>APPLICATION Development</span> Services
    </h1>
  ),
  para: (
    <p className="para">
     We provide custom web app development focused on building secure, scalable platforms that improve performance, enhance user experience, and accelerate business growth.
    </p>
  ),
  image: vector,
  imageAlt: "vector",
};

const serviceData = {
  heading1: (
    <h2 className="same-heading">
      Empowering Businesses with <br /> <span> ADVANCED WEB APP SOLUTIONS</span>
    </h2>
  ),
  para: "We build scalable web app solutions tailored to business needs, ensuring secure functionality, seamless performance, and optimized user experience across all devices for measurable growth.",
  serviceBox: [
    {
      image: service1,
      heading4: (
        <h4>
          Custom Application <br />
          Architecture
        </h4>
      ),
      para: "We develop custom web applications with scalable architecture, clean coding standards, and modern frameworks to ensure smooth performance and future-ready business systems.",
    },
    {
      image: service2,
      heading4: (
        <h4>
          User-Focused <br />
          Design Experience
        </h4>
      ),
      para: "Our web apps feature intuitive UI/UX design, seamless navigation, and engaging interfaces that improve user interaction and increase customer satisfaction.",
    },
    {
      image: service3,
      heading4: (
        <h4>
          Optimized Performance <br />
          Delivery
        </h4>
      ),
      para: "We build high-speed web applications with optimized code, fast loading, and smooth functionality to enhance user experience and boost conversions.",
    },
    {
      image: service4,
      heading4: (
        <h4>
          Data Security <br />
          and Compliance
        </h4>
      ),
      para: "Our secure web app development includes advanced encryption, secure APIs, and compliance practices to protect business data and user information.",
    },
    {
      image: service5,
      heading4: (
        <h4>
          SEO-Ready Application  <br />
          Framework
        </h4>
      ),
      para: "We develop SEO-friendly web applications with structured coding, optimized performance, and search engine visibility to improve online reach and rankings.",
    },
    {
      image: service6,
      heading4: (
        <h4>
          Business-Centric <br />
          Results
        </h4>
      ),
      para: "Our web app solutions focus on automation, performance, and business growth, helping companies improve efficiency, engagement, and revenue.  ",
    }
  ],
  btnText: "Start Web Application Development",
};

const discussCtaData = {
  heading1: <h2 className="same-heading">Fueling Growth Through Dynamic</h2>,
  heading2: (
      <h3 className="same-heading">
        <span>Web Applications</span>
      </h3>
    ),
  para: "Partner with Hamkoders to build scalable, high-performance web applications that drive innovation, support business growth, and deliver measurable digital results for modern brands.",
  image: discussCtaImage,
};

const demandCompData = {
  heading1: (
    <h2 className="same-heading">
      Web<span> Application Solutions</span> Built for Scalability and Impact
    </h2>
  ),
  para: 'Our Web Application Development Services help businesses achieve ambitious goals through modern, scalable, and flexible digital solutions. Using advanced technologies, each web application is designed for strong performance, smooth adaptability, and measurable growth, helping brands stay competitive and drive long-term success in today’s fast-moving digital world.',
  demandBox: [
    {
      heading4: (
        <h4>Strategic <br /> Planning</h4>
      ),
      para: 'We work collabora We work closely with clients to develop clear web application strategies aligned with business goals, user needs, and future digital growth.',
      image: signVector
    },
    {
      heading4: (
        <h4>High-Performance <br /> Systems</h4>
      ),
      para: 'We build effiWe create secure, modular, and reliable web applications optimized for speed, stability, high traffic handling, and consistent user performance.',
      image: signVector
    },
    {
      heading4: (
        <h4>Future-Focused <br />Scalability</h4>
      ),
      para: 'We build scalable web applications that support easy upgrades, system integrations, and future expansion without affecting performance or operations.',
      image: signVector
    },
    {
      heading4: (
        <h4>Secure <br /> Infrastructure</h4>
      ),
      para: 'We safeguard user data and business systems through advanced security layers, continuous monitoring, and reliable protection frameworks.',
      image: signVector
    }
  ]
}

const faqs = [
  {
    question: "What is web application development?",
    answer:
      "Web application development is the process of building browser-based software that delivers secure functionality, responsive design, and seamless digital experiences for modern businesses.",
  },
  {
    question: "How long does it take to build a web application?",
    answer:
      "Project timelines depend on features and complexity. Most web application development projects take between 3 to 12 weeks including planning, design, development, testing, and deployment.",
  },
  {
    question: "Can my web app integrate with existing systems?",
    answer:
      "Yes, we develop web applications that integrate smoothly with CRM systems, APIs, third-party tools, and enterprise platforms for seamless workflows and data management.",
  },
  {
    question: "Will the application work on all devices?",
    answer:
      "Our responsive web applications are optimized for mobile, tablet, and desktop devices, ensuring smooth functionality and consistent performance across all screen sizes.",
  },
  {
    question: "How do you ensure application security?",
    answer:
      " We apply advanced security practices including encryption, secure coding standards, performance testing, and ongoing monitoring to protect applications from threats and vulnerabilities.",
  },
  {
    question: "Do you provide support after deployment?",
    answer:
      "Yes, Hamkoders offers continuous maintenance, performance monitoring, updates, and technical support to keep your web application secure, updated, and running efficiently after launch.",
  }
];

const WebAppDevelopment = () => {
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

export default WebAppDevelopment;
