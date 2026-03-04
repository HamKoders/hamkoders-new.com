export const metadata = {
  title: "Front End Web Development Services for Exceptional UX Design",
  description:
    "We offer front end web development services that blend speed, UX, and design—building responsive, high-performing interfaces tailored for all users and devices.",
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

import vector from "../../../../public/images/frontend-vector.png";

import service1 from "../../../../public/images/website-services/frontend-development/1.png";
import service2 from "../../../../public/images/website-services/frontend-development/2.png";
import service3 from "../../../../public/images/website-services/frontend-development/3.png";
import service4 from "../../../../public/images/website-services/frontend-development/4.png";
import service5 from "../../../../public/images/website-services/frontend-development/5.png";
import service6 from "../../../../public/images/website-services/frontend-development/6.png";

import discussCtaImage from "../../../../public/images/discuss-cta-image-front-web-dev.webp";

import signVector from "../../../../public/images/sign-vector.png";

const bannerData = {
  bgImage: "/images/front-end-banner.webp",
  heading1: (
    <h1 className="same-heading">
      ELITE <span> Front-End</span> Development
    </h1>
  ),
  para: (
    <p className="para">
     We deliver front-end web development services that build fast, responsive, and visually powerful interfaces crafted to improve user experience and increase engagement for modern businesses.
    </p>
  ),
  image: vector,
  imageAlt: "vector",
};

const serviceData = {
  heading1: (
    <h2 className="same-heading">
      CREATING HIGH-PERFORMANCE INTERFACES <br /> <span>THAT BOOST USER ENGAGEMENT </span>
    </h2>
  ),
  para: "Our front-end development services combine modern UI design and advanced coding, using latest frameworks and user-focused strategies to build fast, responsive interfaces that strengthen brand visibility across all devices.",
  serviceBox: [
    {
      image: service1,
      heading4: (
        <h4>
          SMART UI<br />
          Architecture
        </h4>
      ),
      para: "We design structured and intuitive front-end layouts that ensure smooth navigation and user interaction. Every element is carefully crafted to improve usability and accessibility.",
    },
    {
      image: service2,
      heading4: (
        <h4>
          MOBILE-READY <br />
          Design
        </h4>
      ),
      para: " Our front-end solutions are optimized for all screen sizes and devices. Adaptive layouts and responsive coding create consistent digital experiences across every platform.",
    },
    {
      image: service3,
      heading4: (
        <h4>
          SPEED-OPTIMIZED <br />
          Development
        </h4>
      ),
      para: " Performance is built into every interface we create. Fast loading times, optimized scripts, and clean code ensure high-speed performance without compromising quality.",
    },
    {
      image: service4,
      heading4: (
        <h4>
          STABLE Front-End<br />
          Coding
        </h4>
      ),
      para: " We implement secure and reliable coding practices, from input validation to browser compatibility, keeping your website stable, safe, and error-free.",
    },
    {
      image: service5,
      heading4: (
        <h4>
          SEO-OPTIMIZED<br />
          Structure
        </h4>
      ),
      para: " Our front-end code follows SEO best practices including clean markup, fast performance, and structured layouts that improve visibility and search rankings.",
    },
    {
      image: service6,
      heading4: (
        <h4>
          RESULT-ORIENTED  <br />
          DESIGN
        </h4>
      ),
      para: "Every interface is developed with business growth in mind, helping brands increase engagement, improve conversions, and deliver seamless user journeys.",
    }
  ],
  btnText: "Start Frontend Development",
};

const discussCtaData = {
  heading1: <h2 className="same-heading">Empowering BUSINESSES THROUGH</h2>,
  heading2: (
      <h3 className="same-heading">
        <span> SEAMLESS DIGITAL EXPERIENCES</span>
      </h3>
    ),
  para: "Our web and app development solutions combine modern design and advanced technology, using performance-focused frameworks and user-centric strategies to create fast, scalable digital platforms that strengthen brand presence and business growth across all devices.",
  image: discussCtaImage,
};

const demandCompData = {
  heading1: (
    <h2 className="same-heading">
      Front-End<span> SOLUTIONS ENGINEERED FOR</span> PERFORMANCE AND USER EXPERIENCE
    </h2>
  ),
  para: 'Our custom front-end development services deliver responsive, fast, and visually engaging interfaces for modern digital platforms. A skilled front-end team at Hamkoders builds interactive layouts and optimized UI components, ensuring websites perform smoothly across devices while improving engagement, conversions, and brand visibility.',
  demandBox: [
    {
      heading4: (
        <h4>Scalable UI <br /> Architecture</h4>
      ),
      para: 'Build flexible interface structures that adapt to screen sizes, user behavior, and evolving digital trends.',
      image: signVector
    },
    {
      heading4: (
        <h4>API <br /> Integration</h4>
      ),
      para: 'Connect front-end systems with secure APIs, ensuring smooth data flow and real-time user interactions.',
      image: signVector
    },
    {
      heading4: (
        <h4>Cross-Browser  <br />Deployment</h4>
      ),
      para: 'eliver consistent user interfaces across browsers and devices for better accessibility and usability.',
      image: signVector
    },
    {
      heading4: (
        <h4>Performance <br /> Optimization</h4>
      ),
      para: 'Ensure lightning-fast interfaces with clean code, optimized assets, and seamless rendering across devices. ',
      image: signVector
    }
  ]
}

const faqs = [
  {
    question: "What is front-end development?",
    answer:
      "Front-end development focuses on creating visual layouts, interactive elements, and responsive designs that users see and interact with on websites.",
  },
  {
    question: "Why is professional front-end important?",
    answer:
      "It improves speed, usability, and engagement. A well-structured interface enhances navigation, boosts conversions, and strengthens digital brand presence.",
  },
  {
    question: "Which technologies do you use for front-end development?",
    answer:
      " We work with modern frameworks, responsive design tools, and performance-focused coding standards for seamless user experiences.",
  },
  {
    question: "Can you redesign existing front-end interfaces?",
    answer:
      "Yes, we upgrade layouts, improve responsiveness, and optimize performance while maintaining brand identity and functionality.",
  },
  {
    question: "Will the interface be work on all devices?",
    answer:
      "All front-end designs are fully responsive, ensuring smooth experiences across mobile, tablet, and desktop devices.",
  },
  {
    question: "Do you provide ongoing front-end support?",
    answer:
      "Yes, we offer maintenance, updates, and optimization to keep interfaces fast, secure, and user-friendly.",
  }
];

const FrontendDevelopment = () => {
  return (
    <PageLayout>
      <AndroidAppBanner bannerData={bannerData} />
      <FeaturedBrands heading={"Trusted by"} headingSpan={"TOP INDUSTRY Brands"} />
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

export default FrontendDevelopment;
