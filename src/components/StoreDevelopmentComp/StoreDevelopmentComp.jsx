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
import whySecStoreDev from "../../../public/images/whySecBrandDev.png";

import whatWeOfferBox1 from "../../../public/images/store-dev-solution/1.png";
import whatWeOfferBox2 from "../../../public/images/store-dev-solution/2.png";
import whatWeOfferBox3 from "../../../public/images/store-dev-solution/3.png";
import whatWeOfferBox4 from "../../../public/images/store-dev-solution/4.png";
import whatWeOfferBox5 from "../../../public/images/store-dev-solution/5.png";
import whatWeOfferBox6 from "../../../public/images/store-dev-solution/6.png";

import websitePortSlide1 from "../../../public/images/store-banner/1.webp";
import websitePortSlide2 from "../../../public/images/store-banner/2.webp";
import websitePortSlide3 from "../../../public/images/store-banner/3.webp";
import websitePortSlide4 from "../../../public/images/store-banner/4.webp";
import websitePortSlide5 from "../../../public/images/store-banner/5.webp";
import webDevServiceBefore from "../../../public/images/store-dev-before.png";
import webDevServiceAfter from "../../../public/images/store-dev-after.png";
import axiosInstance from "@/utils/axiosInstance";

const whySecData = {
  heading3: "Why Choose Hamkoders?",
  heading2: (
    <h2 className="same-heading">
      Your Trusted Partner for <span>Branding</span>
    </h2>
  ),
  para: "We specialize in branding services, creating impactful brand identities that boost visibility and trust. Our expert team offers logo design and brand strategy, delivering strong identity systems that drive business growth and lasting recognition.",
  points: [
    "Branding services tailored to unique business identity goals.",
    " Audience connection with creative visuals and clear brand messaging",
    "Scalable & flexible identity systems to grow with market trends.",
    "SSecure brand consistency & guidelines for strong recognition.",
    "Conversion-focused branding builds trust and boosts loyalty.",
  ],
  image: whySecStoreDev,
  attachmentAlt: "whySecWebdev",
};

const whatWeOfferData = {
  heading3: "What We Offer",
  heading2: (
    <h2 className="same-heading">
      BRAND<span> IDENTITY SOLUTION CUSTOM BRANDING</span> SERVICES
    </h2> 
  ),
  whatWeOfferBox: [
    {
      image: whatWeOfferBox1,
      heading3: "Custom Brand Identity",
      para: "We design and develop brand identities for businesses, audiences, and growth goals.",
      imageAlt: "whatWeOfferBox1",
    },
    {
      image: whatWeOfferBox2,
      heading3: "Expert Branding Team",
      para: "Our skilled branding specialists create innovative, recognition-focused brand strategies.",
      imageAlt: "whatWeOfferBox2",
    },
    {
      image: whatWeOfferBox3,
      heading3: "Engaging Visual Strategy",
      para: "We focus on audience-driven visuals, unified design systems, and optimized brand communication for higher impact.",
      imageAlt: "whatWeOfferBox3",
    },
    {
      image: whatWeOfferBox4,
      heading3: "Secure Brand Consistency",
      para: "With reliable guidelines and structured assets, we ensure every brand element stays consistent.",
      imageAlt: "whatWeOfferBox4",
    },
    {
      image: whatWeOfferBox5,
      heading3: "Scalable Branding Solutions",
      para: " Our identity systems are built for growth, capable of expanding with your brand presence.",
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
      BRAND <br /><span>IDENTITY GROWTH</span>
      <br /> COMPANY  
    </h1>
  ),
  para: (
    <p className="para">
      We offer custom branding services, creating scalable, engaging{" "}
      <br />
      identities with expert brand strategy solutions like logo and visual design.
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

const StoreDevelopmentComp = () => {
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

export default StoreDevelopmentComp;
