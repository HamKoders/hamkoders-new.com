"use client";
import React, { useEffect, useState } from "react";
import PageLayout from "@/components/PageLayout";
import WebsiteDevCompBanner from "@/components/WebsiteDevComp/WebsiteDevCompBanner";
import FeaturedBrands from "@/components/PortfolioComp/FeaturedBrands/FeaturedBrands";
import IdeaTransformation from "@/components/IdeaTransformation/IdeaTransformation";
import WhySec from "@/components/WhySec/WhySec";
import WhatWeOffer from "@/components/WhatWeOffer/WhatWeOffer";
import CategoryService from "@/components/CategoryService/CategoryService";
import OurWork from "@/components/OurWork/OurWork";
import Testimonials from "@/components/Testimonials/Testimonials";
import CtaSec from "@/components/CtaSec/CtaSec";
import OurBlogs from "@/components/OurBlogs/OurBlogs";
import whySecWebdev from "../../../public/images/whySecSoftwareDev.png";

import whatWeOfferBox1 from "../../../public/images/software-dev-solution/1.webp";
import whatWeOfferBox2 from "../../../public/images/software-dev-solution/2.webp";
import whatWeOfferBox3 from "../../../public/images/software-dev-solution/3.webp";
import whatWeOfferBox4 from "../../../public/images/software-dev-solution/4.webp";
import whatWeOfferBox5 from "../../../public/images/software-dev-solution/5.webp";
import whatWeOfferBox6 from "../../../public/images/software-dev-solution/6.webp";

import websitePortSlide1 from "../../../public/images/software-banner/1.webp";
import websitePortSlide2 from "../../../public/images/software-banner/2.webp";
import websitePortSlide3 from "../../../public/images/software-banner/3.webp";
import websitePortSlide4 from "../../../public/images/software-banner/4.webp";
import websitePortSlide5 from "../../../public/images/software-banner/5.webp";
import webDevServiceBefore from "../../../public/images/software-dev-before.png";
import webDevServiceAfter from "../../../public/images/software-dev-after.png";
import axiosInstance from "@/utils/axiosInstance";

const whySecData = {
  heading3: "Why to Choose Hamkoders?",
  heading2: (
    <h2 className="same-heading">
      Your Trusted <span>Software Development</span> Partner
    </h2>
  ),
  para: "We deliver scalable, performance-driven software solutions that help businesses grow, streamline operations, and stay competitive. Hamkoders offers custom software development including CMS systems, HRMIS platforms, and business automation tools with advanced online invoicing and fast e-billing solutions.",
  points: [
    "Custom software development designed to match your business goals and workflow requirements.",
    "From planning and development to deployment and ongoing technical support.",
    "Future-ready solutions built to scale with business growth and evolving needs.",
    "Seamless integration with existing systems, platforms, and technology infrastructure.",
    "Focused on performance, security, and reliability to deliver high-quality digital solutions.",
  ],
  image: whySecWebdev,
  attachmentAlt: "whySecWebdev",
};

const whatWeOfferData = {
  heading3: "TAILORED SOFTWARE SOLUTION",
  heading2: (
    <h2 className="same-heading">
      CUSTOM<span> SOFTWARE DEVELOPMENT</span> SERVICES
    </h2>
  ),
  whatWeOfferBox: [
    {
      image: whatWeOfferBox1,
      heading3: "Custom Applications",
      para: "We build custom software applications designed around your business objectives, workflows, and operational requirements for better performance and efficiency.",
      imageAlt: "whatWeOfferBox1",
    },
    {
      image: whatWeOfferBox2,
      heading3: "Expert Development Team",
      para: "Our professional software developers combine technical knowledge and smart strategy to deliver reliable, high-quality solutions for every project.",
      imageAlt: "whatWeOfferBox2",
    },
    {
      image: whatWeOfferBox3,
      heading3: "Scalable Architecture",
      para: "Flexible systems created to support business growth, ensuring stability, adaptability, and long-term performance as your company expands.",
      imageAlt: "whatWeOfferBox3",
    },
    {
      image: whatWeOfferBox4,
      heading3: "Unified Integration",
      para: " Our solutions integrate smoothly with your existing tools, platforms, and business technologies for uninterrupted digital operations.",
      imageAlt: "whatWeOfferBox4",
    },
    {
      image: whatWeOfferBox5,
      heading3: "5 Secure & Compliant",
      para: "We focus on strong security standards, compliance, and system reliability to protect sensitive business and user information.",
      imageAlt: "whatWeOfferBox5",
    },
    {
      image: whatWeOfferBox6,
      heading3: "End-to-End Delivery",
      para: "From initial planning and development to launch and ongoing maintenance, we manage the complete software development process.",
      imageAlt: "whatWeOfferBox6",
    },
  ],
};

const websiteDevCompBannerData = {
  imageBefore: webDevServiceBefore,
  imageAfter: webDevServiceAfter,
  h1Part1: (
    <h1 className="same-heading">
      SOFTWARE DEVELOPMENT{" "}
      <span>
        COMPANY FOR <br /> MODERN
      </span>{" "}
      BUSINESSES    
    </h1>
  ),
  para: (
    <p className="para">
      A trusted software development company delivering high-performance, user-focused solutions that
      <br />
      enhance efficiency, accelerate growth, and help businesses succeed in competitive digital markets worldwide.
    </p>
  ),
  swipperImages: [
    {
      image: websitePortSlide1,
      imageAlt: "websitePortSlide1",
    },
    {
      image: websitePortSlide2,
      imageAlt: "websitePortSlide2",
    },
    {
      image: websitePortSlide3,
      imageAlt: "websitePortSlide3",
    },
    {
      image: websitePortSlide4,
      imageAlt: "websitePortSlide4",
    },
    {
      image: websitePortSlide5,
      imageAlt: "websitePortSlide5",
    },
    {
      image: websitePortSlide1,
      imageAlt: "websitePortSlide1",
    },
  ],
};

const SoftwareDevComp = () => {
  const [isBlogs, setIsBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await axiosInstance.get("/api/blogs");
        if (res.status) {
          setIsBlogs(res.data.items);
        } else if (res.status === 404) {
          console.log("api error");
        }
      } catch (error) {
        console.error("Error fetching categories:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);
  return (
    <PageLayout>
      <WebsiteDevCompBanner
        websiteDevCompBannerData={websiteDevCompBannerData}
      />
      <FeaturedBrands heading={"Trusted by"} headingSpan={"Leading Brands"} />
      <IdeaTransformation />
      <WhySec whySecData={whySecData} />
      <WhatWeOffer whatWeOfferData={whatWeOfferData} />
      <CategoryService />
      <OurWork />
      <Testimonials />
      <CtaSec />
      <OurBlogs isBlogs={isBlogs} />
    </PageLayout>
  );
};

export default SoftwareDevComp;
