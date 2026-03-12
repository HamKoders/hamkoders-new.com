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
import whySecGameDev from "../../../public/images/whySecdigitalDev.png";

import whatWeOfferBox1 from "../../../public/images/game-dev-solution/1.png";
import whatWeOfferBox2 from "../../../public/images/game-dev-solution/2.png";
import whatWeOfferBox3 from "../../../public/images/game-dev-solution/3.png";
import whatWeOfferBox4 from "../../../public/images/game-dev-solution/4.png";
import whatWeOfferBox5 from "../../../public/images/game-dev-solution/5.png";
import whatWeOfferBox6 from "../../../public/images/game-dev-solution/6.png";

import websitePortSlide1 from "../../../public/images/game-banner/1.webp";
import websitePortSlide2 from "../../../public/images/game-banner/1.png";
import websitePortSlide3 from "../../../public/images/game-banner/3.webp";
import websitePortSlide4 from "../../../public/images/game-banner/2.png";
import websitePortSlide5 from "../../../public/images/game-banner/5.webp";
import websitePortSlide6 from "../../../public/images/game-banner/3.png";
import websitePortSlide7 from "../../../public/images/game-banner/7.webp";
import websitePortSlide8 from "../../../public/images/game-banner/4.png";
import websitePortSlide8 from "../../../public/images/game-banner/5.png";
import webDevServiceBefore from "../../../public/images/digital-mar-before.png";
import webDevServiceAfter from "../../../public/images/digital-mar-after.png";
import axiosInstance from "@/utils/axiosInstance";

const whySecData = {
  heading3: "Why Choose Hamkoders?",
  heading2: (
    <h2 className="same-heading">
      Your<span> Trusted Partner</span> for Digital Marketing
    </h2>
  ),
  para: " We specialize in digital marketing, creating engaging campaigns that boost customer reach and loyalty. Our expert team offers SEO and social media marketing, delivering effective growth strategies that drive business success and lasting impact",
  points: [
    "Digital marketing services tailored to unique brand goals.",
    "User engagement with creative content and fast campaign execution.",
    "Scalable & flexible strategies to grow with market trends.",
    "Secure data tracking & analytics for safe marketing performance.",
    "Conversion-focused campaigns increase leads and boost revenue.",
  ],
  image: whySecGameDev,
  attachmentAlt: "whySecWebdev",
};

const whatWeOfferData = {
  heading3: "What We Offer",
  heading2: (
    <h2 className="same-heading">
     <span> DIGITAL GROWTH </span>SOLUTION <br/>CUSTOM <span>DIGITAL MARKETING</span>SERVICES
    </h2>
   
  ),
  whatWeOfferBox: [
    {
      image: whatWeOfferBox1,
      heading3: "Custom Marketing Campaigns",
      para: "We design and manage digital campaigns for brands, audiences, and business goals.",
      imageAlt: "whatWeOfferBox1",
    },
    {
      image: whatWeOfferBox2,
      heading3: "Expert Marketing Team",
      para: "Our skilled marketing specialists create innovative, conversion-focused marketing strategies.",
      imageAlt: "whatWeOfferBox2",
    },
    {
      image: whatWeOfferBox3,
      heading3: "Engaging Content Strategy",
      para: "We focus on audience-focused content, unified messaging, and optimized campaigns for higher conversions.",
      imageAlt: "whatWeOfferBox3",
    },
    {
      image: whatWeOfferBox4,
      heading3: "Secure Data Tracking",
      para: "With reliable tools and analytics, we ensure every campaign is tracked and optimized.",
      imageAlt: "whatWeOfferBox4",
    },
    {
      image: whatWeOfferBox5,
      heading3: "Scalable Marketing Solutions",
      para: "Our strategies are built for growth, capable of expanding with audience and reach.",
      imageAlt: "whatWeOfferBox5",
    },
    {
      image: whatWeOfferBox6,
      heading3: "Ongoing Support",
      para: "From launch to long-term growth, we provide continuous support to keep your brand ahead of the competition.",
      imageAlt: "whatWeOfferBox6",
    },
  ],
};

const websiteDevCompBannerData = {
  imageBefore: webDevServiceBefore,
  imageAfter: webDevServiceAfter,
  h1Part1: (
    <h1 className="same-heading">
      DIGITAL <span>MARKETING GROWTH</span> <br /> COMPANY 
    </h1> 
  ),
  para: (
    <p className="para">
      We offer custom digital marketing services, creating scalable, engaging <br />  campaigns with expert online marketing solutions like SEO and social media.
    </p>
  ),
  swipperImages: [
    // {
    //   image: websitePortSlide1,
    //   imageAlt: "websitePortSlide1",
    // },
    {
      image: websitePortSlide2,
      imageAlt: "websitePortSlide2",
    },
    // {
    //   image: websitePortSlide3,
    //   imageAlt: "websitePortSlide3",
    // },
    {
      image: websitePortSlide4,
      imageAlt: "websitePortSlide4",
    },
    // {
    //   image: websitePortSlide5,
    //   imageAlt: "websitePortSlide5",
    // },
    {
      image: websitePortSlide6,
      imageAlt: "websitePortSlide6",
    },
    // {
    //   image: websitePortSlide7,
    //   imageAlt: "websitePortSlide7",
    // },
    {
      image: websitePortSlide8,
      imageAlt: "websitePortSlide8",
    },
    // {
    //   image: websitePortSlide1,
    //   imageAlt: "websitePortSlide1",
    // },
    {
      image: websitePortSlide2,
      imageAlt: "websitePortSlide2",
    },
    // {
    //   image: websitePortSlide3,
    //   imageAlt: "websitePortSlide3",
    // },
    {
      image: websitePortSlide4,
      imageAlt: "websitePortSlide4",
    },
    // {
    //   image: websitePortSlide5,
    //   imageAlt: "websitePortSlide5",
    // },
    {
      image: websitePortSlide6,
      imageAlt: "websitePortSlide6",
    },
    // {
    //   image: websitePortSlide7,
    //   imageAlt: "websitePortSlide7",
    // },
    {
      image: websitePortSlide8,
      imageAlt: "websitePortSlide8",
    },
  ],
};

const GameDevelopmentComp = () => {
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

export default GameDevelopmentComp;
